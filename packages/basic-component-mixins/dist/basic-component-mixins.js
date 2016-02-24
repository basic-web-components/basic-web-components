(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _AttributeMarshalling = require('./src/AttributeMarshalling');

var _AttributeMarshalling2 = _interopRequireDefault(_AttributeMarshalling);

var _ClickSelection = require('./src/ClickSelection');

var _ClickSelection2 = _interopRequireDefault(_ClickSelection);

var _Collective = require('./src/Collective');

var _Collective2 = _interopRequireDefault(_Collective);

var _Composable = require('./src/Composable');

var _Composable2 = _interopRequireDefault(_Composable);

var _composeTemplates = require('./src/composeTemplates');

var _composeTemplates2 = _interopRequireDefault(_composeTemplates);

var _ContentAsItems = require('./src/ContentAsItems');

var _ContentAsItems2 = _interopRequireDefault(_ContentAsItems);

var _ContentFirstChildTarget = require('./src/ContentFirstChildTarget');

var _ContentFirstChildTarget2 = _interopRequireDefault(_ContentFirstChildTarget);

var _DirectionSelection = require('./src/DirectionSelection');

var _DirectionSelection2 = _interopRequireDefault(_DirectionSelection);

var _DistributedChildren = require('./src/DistributedChildren');

var _DistributedChildren2 = _interopRequireDefault(_DistributedChildren);

var _DistributedChildrenAsContent = require('./src/DistributedChildrenAsContent');

var _DistributedChildrenAsContent2 = _interopRequireDefault(_DistributedChildrenAsContent);

var _Generic = require('./src/Generic');

var _Generic2 = _interopRequireDefault(_Generic);

var _ItemsSelection = require('./src/ItemsSelection');

var _ItemsSelection2 = _interopRequireDefault(_ItemsSelection);

var _Keyboard = require('./src/Keyboard');

var _Keyboard2 = _interopRequireDefault(_Keyboard);

var _KeyboardDirection = require('./src/KeyboardDirection');

var _KeyboardDirection2 = _interopRequireDefault(_KeyboardDirection);

var _KeyboardPagedSelection = require('./src/KeyboardPagedSelection');

var _KeyboardPagedSelection2 = _interopRequireDefault(_KeyboardPagedSelection);

var _KeyboardPrefixSelection = require('./src/KeyboardPrefixSelection');

var _KeyboardPrefixSelection2 = _interopRequireDefault(_KeyboardPrefixSelection);

var _microtask = require('./src/microtask');

var _microtask2 = _interopRequireDefault(_microtask);

var _ObserveContentChanges = require('./src/ObserveContentChanges');

var _ObserveContentChanges2 = _interopRequireDefault(_ObserveContentChanges);

var _SelectionAriaActive = require('./src/SelectionAriaActive');

var _SelectionAriaActive2 = _interopRequireDefault(_SelectionAriaActive);

var _SelectionHighlight = require('./src/SelectionHighlight');

var _SelectionHighlight2 = _interopRequireDefault(_SelectionHighlight);

var _SelectionInView = require('./src/SelectionInView');

var _SelectionInView2 = _interopRequireDefault(_SelectionInView);

var _ShadowElementReferences = require('./src/ShadowElementReferences');

var _ShadowElementReferences2 = _interopRequireDefault(_ShadowElementReferences);

var _ShadowTemplate = require('./src/ShadowTemplate');

var _ShadowTemplate2 = _interopRequireDefault(_ShadowTemplate);

var _SwipeDirection = require('./src/SwipeDirection');

var _SwipeDirection2 = _interopRequireDefault(_SwipeDirection);

var _TargetInCollective = require('./src/TargetInCollective');

var _TargetInCollective2 = _interopRequireDefault(_TargetInCollective);

var _TargetSelection = require('./src/TargetSelection');

var _TargetSelection2 = _interopRequireDefault(_TargetSelection);

var _TimerSelection = require('./src/TimerSelection');

var _TimerSelection2 = _interopRequireDefault(_TimerSelection);

var _TrackpadDirection = require('./src/TrackpadDirection');

var _TrackpadDirection2 = _interopRequireDefault(_TrackpadDirection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is transpiled to create an ES5-compatible distribution in which
 * the mixins and helpers are available via the window.Basic global.
 * E.g., the AttributeMarshalling mixin is available as
 * window.Basic.AttributeMarshalling.
 */

if (!window.Basic) {
  window.Basic = {};
}

window.Basic.AttributeMarshalling = _AttributeMarshalling2.default;
window.Basic.ClickSelection = _ClickSelection2.default;
window.Basic.Collective = _Collective2.default;
window.Basic.Composable = _Composable2.default;
window.Basic.composeTemplates = _composeTemplates2.default;
window.Basic.ContentAsItems = _ContentAsItems2.default;
window.Basic.ContentFirstChildTarget = _ContentFirstChildTarget2.default;
window.Basic.DirectionSelection = _DirectionSelection2.default;
window.Basic.DistributedChildren = _DistributedChildren2.default;
window.Basic.DistributedChildrenAsContent = _DistributedChildrenAsContent2.default;
window.Basic.Generic = _Generic2.default;
window.Basic.ItemsSelection = _ItemsSelection2.default;
window.Basic.Keyboard = _Keyboard2.default;
window.Basic.KeyboardDirection = _KeyboardDirection2.default;
window.Basic.KeyboardPagedSelection = _KeyboardPagedSelection2.default;
window.Basic.KeyboardPrefixSelection = _KeyboardPrefixSelection2.default;
window.Basic.microtask = _microtask2.default;
window.Basic.ObserveContentChanges = _ObserveContentChanges2.default;
window.Basic.SelectionAriaActive = _SelectionAriaActive2.default;
window.Basic.SelectionHighlight = _SelectionHighlight2.default;
window.Basic.SelectionInView = _SelectionInView2.default;
window.Basic.ShadowElementReferences = _ShadowElementReferences2.default;
window.Basic.ShadowTemplate = _ShadowTemplate2.default;
window.Basic.SwipeDirection = _SwipeDirection2.default;
window.Basic.TargetInCollective = _TargetInCollective2.default;
window.Basic.TargetSelection = _TargetSelection2.default;
window.Basic.TimerSelection = _TimerSelection2.default;
window.Basic.TrackpadDirection = _TrackpadDirection2.default;

},{"./src/AttributeMarshalling":2,"./src/ClickSelection":3,"./src/Collective":4,"./src/Composable":5,"./src/ContentAsItems":6,"./src/ContentFirstChildTarget":7,"./src/DirectionSelection":8,"./src/DistributedChildren":9,"./src/DistributedChildrenAsContent":10,"./src/Generic":11,"./src/ItemsSelection":12,"./src/Keyboard":13,"./src/KeyboardDirection":14,"./src/KeyboardPagedSelection":15,"./src/KeyboardPrefixSelection":16,"./src/ObserveContentChanges":17,"./src/SelectionAriaActive":18,"./src/SelectionHighlight":19,"./src/SelectionInView":20,"./src/ShadowElementReferences":21,"./src/ShadowTemplate":22,"./src/SwipeDirection":23,"./src/TargetInCollective":24,"./src/TargetSelection":25,"./src/TimerSelection":26,"./src/TrackpadDirection":27,"./src/composeTemplates":28,"./src/microtask":29}],2:[function(require,module,exports){
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
   * provide that property yourself, or use the ContentAsItems mixin. This mixin
   * also expects the component to define a `selectedIndex` property. You can
   * provide that yourself, or use the ItemsSelection mixin.
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

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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
   * You can implement that yourself, or use the DistributedChildrenAsContent
   * mixin.
   *
   * This mixin can be combined with the TargetInCollective mixin to have a
   * component participate in collective keyboard handling. *
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
        if (target) {
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
        return this._target;
      },
      set: function set(element) {
        if ('target' in base.prototype) {
          _set(Object.getPrototypeOf(ContentFirstChildTarget.prototype), 'target', element, this);
        }
        this._target = element;
      }
    }]);

    return ContentFirstChildTarget;
  }(base);

  return ContentFirstChildTarget;
};

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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
        var index = this.items.indexOf(selectedItem);

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
        var index = this.items.indexOf(item);
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
   * the related SelectionInView mixin.
   *
   * This mixin expects the component to invoke a `keydown` method when a key is
   * pressed. You can use the Keyboard mixin for that purpose, or wire up your
   * own keyboard handling and call `keydown` yourself.
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

// TODO: If the selection is changed by some other means (e.g., arrow keys)
// other than prefix typing, then that act should reset the prefix.

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
   * pressed. You can use the Keyboard mixin for that purpose, or wire up your
   * own keyboard handling and call `keydown` yourself.
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
      //   this._itemTextContents = null;
      //   resetTypedPrefix(this);
      // }

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
  if (!element._itemTextContents) {
    var items = element.items;
    element._itemTextContents = items.map(function (child) {
      var text = child.textContent || child.alt;
      return text.toLowerCase();
    });
  }
  return element._itemTextContents;
}

function handleBackspace(element) {
  var length = element._typedPrefix ? element._typedPrefix.length : 0;
  if (length > 0) {
    element._typedPrefix = element._typedPrefix.substr(0, length - 1);
  }
  element.selectItemWithTextPrefix(element._typedPrefix);
  element._setPrefixTimeout();
}

function handlePlainCharacter(element, char) {
  var prefix = element._typedPrefix || '';
  element._typedPrefix = prefix + char.toLowerCase();
  element.selectItemWithTextPrefix(element._typedPrefix);
  setPrefixTimeout(element);
}

function resetPrefixTimeout(element) {
  if (element._prefixTimeout) {
    clearTimeout(element._prefixTimeout);
    element._prefixTimeout = false;
  }
}

function resetTypedPrefix(element) {
  element._typedPrefix = '';
  resetPrefixTimeout(element);
}

function setPrefixTimeout(element) {
  resetPrefixTimeout(element);
  element._prefixTimeout = setTimeout(function () {
    resetTypedPrefix(element);
  }, PREFIX_TIMEOUT_DURATION);
}

},{}],17:[function(require,module,exports){
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

},{"./microtask":29}],18:[function(require,module,exports){
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

        item.setAttribute('role', 'option');

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

},{}],19:[function(require,module,exports){
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
   * its selected state changes. You can use the ItemsSelection mixin for that
   * purpose.
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

},{}],20:[function(require,module,exports){
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
   * changes. You can supply that yourself, or use the ItemsSelection mixin.
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

},{}],21:[function(require,module,exports){
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

},{}],22:[function(require,module,exports){
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

},{}],23:[function(require,module,exports){
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

},{}],24:[function(require,module,exports){
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

},{"./Collective":4}],25:[function(require,module,exports){
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
   * Because basic-arrow-selection uses the TargetSelection mixin, it exposes
   * members to access a selection: `selectNext`, `selectPrevious`,
   * `selectedIndex`, etc. These are all delegated to the child component (here,
   * a basic-carousel).
   *
   * This mixin expects a `target` property to be set to the element actually
   * managing the selection. You can set that property yourself, or you can use
   * the ContentFirstChildTarget mixin to implicitly take the component's first
   * child as the target. This is what basic-arrow-selection (above) does.
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

      /**
       * The index of the item which is currently selected, or -1 if there is no
       * selection.
       *
       * @type {number}
       */

    }, {
      key: 'selectedItemChanged',
      value: function selectedItemChanged() {
        if (_get(Object.getPrototypeOf(TargetSelection.prototype), 'selectedItemChanged', this)) {
          _get(Object.getPrototypeOf(TargetSelection.prototype), 'selectedItemChanged', this).call(this);
        }
        this.dispatchEvent(new CustomEvent('selected-item-changed'));
      }

      /**
       * Gets/sets the target element to which this component will delegate
       * selection actions.
       *
       * @type {HTMLElement}
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
      key: 'selectedIndex',
      get: function get() {
        var target = this.target;
        return target && target.selectedIndex;
      },
      set: function set(index) {
        if ('selectedIndex' in base.prototype) {
          _set(Object.getPrototypeOf(TargetSelection.prototype), 'selectedIndex', index, this);
        }
        var target = this.target;
        if (target && target.selectedIndex !== index) {
          target.selectedIndex = index;
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
      key: 'target',
      get: function get() {
        return _get(Object.getPrototypeOf(TargetSelection.prototype), 'target', this);
      },
      set: function set(element) {
        var _this2 = this;

        if ('target' in base.prototype) {
          _set(Object.getPrototypeOf(TargetSelection.prototype), 'target', element, this);
        }
        if (this._itemsChangedListener) {
          this.removeEventListener('items-changed', this._itemsChangedListener);
        }
        if (this._selectedItemChangedListener) {
          this.removeEventListener('selected-item-changed', this._selectedItemChangedListener);
        }
        this._itemsChangedListener = element.addEventListener('items-changed', function (event) {
          _this2.itemsChanged();
        });
        this._selectedItemChangedListener = element.addEventListener('selected-item-changed', function (event) {
          // Let the component know the target's selection changed, but without
          // re-invoking the selectIndex/selectedItem setter.
          _this2.selectedItemChanged();
        });
        // Force initial refresh.
        this.itemsChanged();
      }
    }]);

    return TargetSelection;
  }(base);

  return TargetSelection;
};

},{}],26:[function(require,module,exports){
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

/* Exported function extends a base class with TimerSelection. */

exports.default = function (base) {

  /**
   * Mixin which provides for automatic timed changes in selection.
   *
   * This mixin is useful for creating slideshow-like elements.
   *
   * This mixin expects the component to define an `items` property, as well as
   * `selectFirst` and `selectNext` methods. You can implement those yourself,
   * or use the ContentAsItems and ItemsSelection mixins.
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
        this.play();
      }

      /**
       * Begin automatic progression of the selection.
       */

    }, {
      key: 'play',
      value: function play() {
        if (_get(Object.getPrototypeOf(TimerSelection.prototype), 'play', this)) {
          _get(Object.getPrototypeOf(TimerSelection.prototype), 'play', this).call(this);
        }
        this._playing = true;
        setTimer(this);
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
        this._playing = false;
      }

      /**
       * True if the selection is being automatically advanced.
       *
       * @type {boolean}
       */

    }, {
      key: 'playing',
      get: function get() {
        return this._playing;
      },
      set: function set(playing) {
        if ('playing' in base.prototype) {
          _set(Object.getPrototypeOf(TimerSelection.prototype), 'playing', playing, this);
        }
        if (playing && !this._playing) {
          this.play();
        } else if (!playing && this._playing) {
          this.pause();
        }
      }

      /*
       * When the selected item changes (because of something this mixin did,
       * or was changed by an outside agent like the user), we wait a bit before
       * advancing to the next item. By triggering the next item this way,
       * we implicitly get a desirable behavior: if the user changes the selection
       * (e.g., in a carousel), we let them see that selection state for a while
       * before advancing the selection ourselves.
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
        clearTimer(this);
        if (this.playing) {
          setTimer(this);
        }
      }
    }]);

    return TimerSelection;
  }(base);

  return TimerSelection;
};

function clearTimer(element) {
  if (element._timeout) {
    clearTimeout(element._timeout);
    element._timeout = null;
  }
}

function setTimer(element) {
  element._timeout = setTimeout(function () {
    selectNextWithWrap(element);
  }, 2000);
}

// Select the next item, wrapping to first item if necessary.
function selectNextWithWrap(element) {
  var items = element.items;
  if (items) {
    if (element.selectedIndex == null || element.selectedIndex === items.length - 1) {
      element.selectFirst();
    } else {
      element.selectNext();
    }
  }
}

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

},{}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = composeTemplates;
/**
 * @method composeTemplates
 * @description Given two templates, this "folds" one inside the other. This is
 * is useful for defining a component that wants to fill in slots in the
 * template of its base class.
 *
 * For now, the folding process just entails putting the first inside the
 * location of the first <slot> node in the second template.
 *
 * Example: if the first (base) template is
 *
 *     <template>
 *       <b>
 *         <slot></slot>
 *       </b>
 *     </template>
 *
 * and the second (subclass) template is
 *
 *     <template>
 *       Hello, <slot></slot>.
 *     </template>
 *
 * Then the result of calling `composeTemplates(first, second)` is
 *
 *     <template>
 *       <b>
 *         Hello, <slot></slot>.
 *       </b>
 *     </template>
 *
 * Note that this function is not a mixin, but a helper for creating web
 * components.
 *
 * @param {(HTMLTemplate|string)} baseTemplate - The base class template.
 * @param {(HTMLTemplate|string)} subTemplate - The subclass template.
 */

function composeTemplates(baseTemplate, subTemplate) {

  if (!baseTemplate) {
    // No folding necessary.
    return subTemplate;
  }

  baseTemplate = makeTemplate(baseTemplate);
  subTemplate = makeTemplate(subTemplate);
  var baseElement = baseTemplate && baseTemplate.content.cloneNode(true);
  var mixinElement = subTemplate && subTemplate.content.cloneNode(true);

  var folded = document.createElement('template');

  // Fold mixin template into first slot element in base template.
  // TODO: Support named slots.
  var slotNode = baseElement.querySelector('slot');
  if (slotNode) {
    slotNode.parentNode.replaceChild(mixinElement, slotNode);
    folded.content.appendChild(baseElement);
  } else {
    // No place in base for mixin template -- throw mixin template away.
    folded.content.appendChild(baseElement);
  }

  return folded;
}

function makeTemplate(htmlOrTemplate) {
  return typeof htmlOrTemplate === 'string' ? createTemplateWithInnerHTML(htmlOrTemplate) : htmlOrTemplate;
}

// TODO: Share with ShadowTemplate.
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

},{}],29:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL2VzNWdsb2JhbHMuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9BdHRyaWJ1dGVNYXJzaGFsbGluZy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NsaWNrU2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29sbGVjdGl2ZS5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbXBvc2FibGUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db250ZW50QXNJdGVtcy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbnRlbnRGaXJzdENoaWxkVGFyZ2V0LmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlyZWN0aW9uU2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9HZW5lcmljLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvSXRlbXNTZWxlY3Rpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZC5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkRGlyZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmRQYWdlZFNlbGVjdGlvbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkUHJlZml4U2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uQXJpYUFjdGl2ZS5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NlbGVjdGlvbkhpZ2hsaWdodC5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NlbGVjdGlvbkluVmlldy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NoYWRvd0VsZW1lbnRSZWZlcmVuY2VzLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2hhZG93VGVtcGxhdGUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Td2lwZURpcmVjdGlvbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RhcmdldEluQ29sbGVjdGl2ZS5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RhcmdldFNlbGVjdGlvbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RpbWVyU2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVHJhY2twYWREaXJlY3Rpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9jb21wb3NlVGVtcGxhdGVzLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvbWljcm90YXNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUlELFNBQVMsZ0JBQWdCLEdBQUc7QUFDMUIsU0FBTyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUMzQixRQUFJLFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDakMsWUFBUSxFQUFFLENBQUM7R0FDWjtDQUNGOzs7QUFBQSxBQUlELElBQUksUUFBUSxHQUFHLElBQUksZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUN0RCxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtBQUN4QixlQUFhLEVBQUUsSUFBSTtDQUNwQixDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLypcbiAqIFRoaXMgZmlsZSBpcyB0cmFuc3BpbGVkIHRvIGNyZWF0ZSBhbiBFUzUtY29tcGF0aWJsZSBkaXN0cmlidXRpb24gaW4gd2hpY2hcbiAqIHRoZSBtaXhpbnMgYW5kIGhlbHBlcnMgYXJlIGF2YWlsYWJsZSB2aWEgdGhlIHdpbmRvdy5CYXNpYyBnbG9iYWwuXG4gKiBFLmcuLCB0aGUgQXR0cmlidXRlTWFyc2hhbGxpbmcgbWl4aW4gaXMgYXZhaWxhYmxlIGFzXG4gKiB3aW5kb3cuQmFzaWMuQXR0cmlidXRlTWFyc2hhbGxpbmcuXG4gKi9cblxuaW1wb3J0IEF0dHJpYnV0ZU1hcnNoYWxsaW5nIGZyb20gJy4vc3JjL0F0dHJpYnV0ZU1hcnNoYWxsaW5nJztcbmltcG9ydCBDbGlja1NlbGVjdGlvbiBmcm9tICcuL3NyYy9DbGlja1NlbGVjdGlvbic7XG5pbXBvcnQgQ29sbGVjdGl2ZSBmcm9tICcuL3NyYy9Db2xsZWN0aXZlJztcbmltcG9ydCBDb21wb3NhYmxlIGZyb20gJy4vc3JjL0NvbXBvc2FibGUnO1xuaW1wb3J0IGNvbXBvc2VUZW1wbGF0ZXMgZnJvbSAnLi9zcmMvY29tcG9zZVRlbXBsYXRlcyc7XG5pbXBvcnQgQ29udGVudEFzSXRlbXMgZnJvbSAnLi9zcmMvQ29udGVudEFzSXRlbXMnO1xuaW1wb3J0IENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0IGZyb20gJy4vc3JjL0NvbnRlbnRGaXJzdENoaWxkVGFyZ2V0JztcbmltcG9ydCBEaXJlY3Rpb25TZWxlY3Rpb24gZnJvbSAnLi9zcmMvRGlyZWN0aW9uU2VsZWN0aW9uJztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuIGZyb20gJy4vc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW4nO1xuaW1wb3J0IERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQgZnJvbSAnLi9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCc7XG5pbXBvcnQgR2VuZXJpYyBmcm9tICcuL3NyYy9HZW5lcmljJztcbmltcG9ydCBJdGVtc1NlbGVjdGlvbiBmcm9tICcuL3NyYy9JdGVtc1NlbGVjdGlvbic7XG5pbXBvcnQgS2V5Ym9hcmQgZnJvbSAnLi9zcmMvS2V5Ym9hcmQnO1xuaW1wb3J0IEtleWJvYXJkRGlyZWN0aW9uIGZyb20gJy4vc3JjL0tleWJvYXJkRGlyZWN0aW9uJztcbmltcG9ydCBLZXlib2FyZFBhZ2VkU2VsZWN0aW9uIGZyb20gJy4vc3JjL0tleWJvYXJkUGFnZWRTZWxlY3Rpb24nO1xuaW1wb3J0IEtleWJvYXJkUHJlZml4U2VsZWN0aW9uIGZyb20gJy4vc3JjL0tleWJvYXJkUHJlZml4U2VsZWN0aW9uJztcbmltcG9ydCBtaWNyb3Rhc2sgZnJvbSAnLi9zcmMvbWljcm90YXNrJztcbmltcG9ydCBPYnNlcnZlQ29udGVudENoYW5nZXMgZnJvbSAnLi9zcmMvT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzJztcbmltcG9ydCBTZWxlY3Rpb25BcmlhQWN0aXZlIGZyb20gJy4vc3JjL1NlbGVjdGlvbkFyaWFBY3RpdmUnO1xuaW1wb3J0IFNlbGVjdGlvbkhpZ2hsaWdodCBmcm9tICcuL3NyYy9TZWxlY3Rpb25IaWdobGlnaHQnO1xuaW1wb3J0IFNlbGVjdGlvbkluVmlldyBmcm9tICcuL3NyYy9TZWxlY3Rpb25JblZpZXcnO1xuaW1wb3J0IFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzIGZyb20gJy4vc3JjL1NoYWRvd0VsZW1lbnRSZWZlcmVuY2VzJztcbmltcG9ydCBTaGFkb3dUZW1wbGF0ZSBmcm9tICcuL3NyYy9TaGFkb3dUZW1wbGF0ZSc7XG5pbXBvcnQgU3dpcGVEaXJlY3Rpb24gZnJvbSAnLi9zcmMvU3dpcGVEaXJlY3Rpb24nO1xuaW1wb3J0IFRhcmdldEluQ29sbGVjdGl2ZSBmcm9tICcuL3NyYy9UYXJnZXRJbkNvbGxlY3RpdmUnO1xuaW1wb3J0IFRhcmdldFNlbGVjdGlvbiBmcm9tICcuL3NyYy9UYXJnZXRTZWxlY3Rpb24nO1xuaW1wb3J0IFRpbWVyU2VsZWN0aW9uIGZyb20gJy4vc3JjL1RpbWVyU2VsZWN0aW9uJztcbmltcG9ydCBUcmFja3BhZERpcmVjdGlvbiBmcm9tICcuL3NyYy9UcmFja3BhZERpcmVjdGlvbic7XG5cbmlmICghd2luZG93LkJhc2ljKSB7XG4gIHdpbmRvdy5CYXNpYyA9IHt9O1xufVxuXG53aW5kb3cuQmFzaWMuQXR0cmlidXRlTWFyc2hhbGxpbmcgPSBBdHRyaWJ1dGVNYXJzaGFsbGluZztcbndpbmRvdy5CYXNpYy5DbGlja1NlbGVjdGlvbiA9IENsaWNrU2VsZWN0aW9uO1xud2luZG93LkJhc2ljLkNvbGxlY3RpdmUgPSBDb2xsZWN0aXZlO1xud2luZG93LkJhc2ljLkNvbXBvc2FibGUgPSBDb21wb3NhYmxlO1xud2luZG93LkJhc2ljLmNvbXBvc2VUZW1wbGF0ZXMgPSBjb21wb3NlVGVtcGxhdGVzO1xud2luZG93LkJhc2ljLkNvbnRlbnRBc0l0ZW1zID0gQ29udGVudEFzSXRlbXM7XG53aW5kb3cuQmFzaWMuQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQgPSBDb250ZW50Rmlyc3RDaGlsZFRhcmdldDtcbndpbmRvdy5CYXNpYy5EaXJlY3Rpb25TZWxlY3Rpb24gPSBEaXJlY3Rpb25TZWxlY3Rpb247XG53aW5kb3cuQmFzaWMuRGlzdHJpYnV0ZWRDaGlsZHJlbiA9IERpc3RyaWJ1dGVkQ2hpbGRyZW47XG53aW5kb3cuQmFzaWMuRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCA9IERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQ7XG53aW5kb3cuQmFzaWMuR2VuZXJpYyA9IEdlbmVyaWM7XG53aW5kb3cuQmFzaWMuSXRlbXNTZWxlY3Rpb24gPSBJdGVtc1NlbGVjdGlvbjtcbndpbmRvdy5CYXNpYy5LZXlib2FyZCA9IEtleWJvYXJkO1xud2luZG93LkJhc2ljLktleWJvYXJkRGlyZWN0aW9uID0gS2V5Ym9hcmREaXJlY3Rpb247XG53aW5kb3cuQmFzaWMuS2V5Ym9hcmRQYWdlZFNlbGVjdGlvbiA9IEtleWJvYXJkUGFnZWRTZWxlY3Rpb247XG53aW5kb3cuQmFzaWMuS2V5Ym9hcmRQcmVmaXhTZWxlY3Rpb24gPSBLZXlib2FyZFByZWZpeFNlbGVjdGlvbjtcbndpbmRvdy5CYXNpYy5taWNyb3Rhc2sgPSBtaWNyb3Rhc2s7XG53aW5kb3cuQmFzaWMuT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzID0gT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzO1xud2luZG93LkJhc2ljLlNlbGVjdGlvbkFyaWFBY3RpdmUgPSBTZWxlY3Rpb25BcmlhQWN0aXZlO1xud2luZG93LkJhc2ljLlNlbGVjdGlvbkhpZ2hsaWdodCA9IFNlbGVjdGlvbkhpZ2hsaWdodDtcbndpbmRvdy5CYXNpYy5TZWxlY3Rpb25JblZpZXcgPSBTZWxlY3Rpb25JblZpZXc7XG53aW5kb3cuQmFzaWMuU2hhZG93RWxlbWVudFJlZmVyZW5jZXMgPSBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcztcbndpbmRvdy5CYXNpYy5TaGFkb3dUZW1wbGF0ZSA9IFNoYWRvd1RlbXBsYXRlO1xud2luZG93LkJhc2ljLlN3aXBlRGlyZWN0aW9uID0gU3dpcGVEaXJlY3Rpb247XG53aW5kb3cuQmFzaWMuVGFyZ2V0SW5Db2xsZWN0aXZlID0gVGFyZ2V0SW5Db2xsZWN0aXZlO1xud2luZG93LkJhc2ljLlRhcmdldFNlbGVjdGlvbiA9IFRhcmdldFNlbGVjdGlvbjtcbndpbmRvdy5CYXNpYy5UaW1lclNlbGVjdGlvbiA9IFRpbWVyU2VsZWN0aW9uO1xud2luZG93LkJhc2ljLlRyYWNrcGFkRGlyZWN0aW9uID0gVHJhY2twYWREaXJlY3Rpb247XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEF0dHJpYnV0ZU1hcnNoYWxsaW5nLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFyc2hhbGxzIGF0dHJpYnV0ZXMgdG8gcHJvcGVydGllcyAoYW5kIGV2ZW50dWFsbHkgdmljZSB2ZXJzYSkuXG4gICAqXG4gICAqIElmIHlvdXIgY29tcG9uZW50IGV4cG9zZXMgYSBzZXR0ZXIgZm9yIGEgcHJvcGVydHksIGl0J3MgZ2VuZXJhbGx5IGEgZ29vZFxuICAgKiBpZGVhIHRvIGxldCBkZXZzIHVzaW5nIHlvdXIgY29tcG9uZW50IGJlIGFibGUgdG8gc2V0IHRoYXQgcHJvcGVydHkgaW4gSFRNTFxuICAgKiB2aWEgYW4gZWxlbWVudCBhdHRyaWJ1dGUuIFlvdSBjYW4gY29kZSB0aGF0IHlvdXJzZWxmIGJ5IHdyaXRpbmcgYW5cbiAgICogYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AsIG9yIHlvdSBjYW4gdXNlIHRoaXMgbWl4aW4gdG8gZ2V0IGEgZGVncmVlIG9mXG4gICAqIGF1dG9tYXRpYyBzdXBwb3J0LlxuICAgKlxuICAgKiBUaGlzIG1peGluIGltcGxlbWVudHMgYW4gYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AgdGhhdCB3aWxsIGF0dGVtcHQgdG9cbiAgICogY29udmVydCBhIGNoYW5nZSBpbiBhbiBlbGVtZW50IGF0dHJpYnV0ZSBpbnRvIGEgY2FsbCB0byB0aGUgY29ycmVzcG9uZGluZ1xuICAgKiBwcm9wZXJ0eSBzZXR0ZXIuIEF0dHJpYnV0ZXMgdHlwaWNhbGx5IGZvbGxvdyBoeXBoZW5hdGVkIG5hbWVzIChcImZvby1iYXJcIiksXG4gICAqIHdoZXJlYXMgcHJvcGVydGllcyB0eXBpY2FsbHkgdXNlIGNhbWVsQ2FzZSBuYW1lcyAoXCJmb29CYXJcIikuIFRoaXMgbWl4aW5cbiAgICogcmVzcGVjdHMgdGhhdCBjb252ZW50aW9uLCBhdXRvbWF0aWNhbGx5IG1hcHBpbmcgdGhlIGh5cGhlbmF0ZWQgYXR0cmlidXRlXG4gICAqIG5hbWUgdG8gdGhlIGNvcnJlc3BvbmRpbmcgY2FtZWxDYXNlIHByb3BlcnR5IG5hbWUuXG4gICAqXG4gICAqIEV4YW1wbGU6IFlvdSBkZWZpbmUgYSBjb21wb25lbnQgdXNpbmcgdGhpcyBtaXhpbjpcbiAgICpcbiAgICogICAgIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIEF0dHJpYnV0ZU1hcnNoYWxsaW5nKEhUTUxFbGVtZW50KSB7XG4gICAqICAgICAgIGdldCBmb29CYXIoKSB7IHJldHVybiB0aGlzLl9mb29CYXI7IH1cbiAgICogICAgICAgc2V0IGZvb0Jhcih2YWx1ZSkgeyB0aGlzLl9mb29CYXIgPSB2YWx1ZTsgfVxuICAgKiAgICAgfVxuICAgKiAgICAgZG9jdW1lbnQucmVnaXN0ZXJFbGVtZW50KCdteS1lbGVtZW50JywgTXlFbGVtZW50KTtcbiAgICpcbiAgICogSWYgc29tZW9uZSB0aGVuIGluc3RhbnRpYXRlcyB5b3VyIGNvbXBvbmVudCBpbiBIVE1MOlxuICAgKlxuICAgKiAgICAgPG15LWVsZW1lbnQgZm9vLWJhcj1cIkhlbGxvXCI+PC9teS1lbGVtZW50PlxuICAgKlxuICAgKiBUaGVuLCBhZnRlciB0aGUgZWxlbWVudCBoYXMgYmVlbiB1cGdyYWRlZCwgdGhlIGBmb29CYXJgIHNldHRlciB3aWxsXG4gICAqIGF1dG9tYXRpY2FsbHkgYmUgaW52b2tlZCB3aXRoIHRoZSBpbml0aWFsIHZhbHVlIFwiSGVsbG9cIi5cbiAgICpcbiAgICogRm9yIHRoZSB0aW1lIGJlaW5nLCB0aGlzIG1peGluIG9ubHkgc3VwcG9ydHMgc3RyaW5nLXZhbHVlZCBwcm9wZXJ0aWVzLlxuICAgKiBJZiB5b3UnZCBsaWtlIHRvIGNvbnZlcnQgc3RyaW5nIGF0dHJpYnV0ZXMgdG8gb3RoZXIgdHlwZXMgKG51bWJlcnMsXG4gICAqIGJvb2xlYW5zKSwgeW91IG5lZWQgdG8gaW1wbGVtZW50IGBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tgIHlvdXJzZWxmLlxuICAgKi9cbiAgY2xhc3MgQXR0cmlidXRlTWFyc2hhbGxpbmcgZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qXG4gICAgICogSGFuZGxlIGEgY2hhbmdlIHRvIHRoZSBhdHRyaWJ1dGUgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cbiAgICAgKi9cbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgICBpZiAoc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKSB7IHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaygpOyB9XG4gICAgICAvLyBJZiB0aGUgYXR0cmlidXRlIG5hbWUgY29ycmVzcG9uZHMgdG8gYSBwcm9wZXJ0eSBuYW1lLCB0aGVuIHNldCB0aGF0XG4gICAgICAvLyBwcm9wZXJ0eS4gSWdub3JlIGNoYW5nZXMgaW4gc3RhbmRhcmQgSFRNTEVsZW1lbnQgcHJvcGVydGllcy5cbiAgICAgIGxldCBwcm9wZXJ0eU5hbWUgPSBhdHRyaWJ1dGVUb1Byb3BlcnR5TmFtZShuYW1lKTtcbiAgICAgIGlmIChwcm9wZXJ0eU5hbWUgaW4gdGhpcyAmJiAhKHByb3BlcnR5TmFtZSBpbiBIVE1MRWxlbWVudC5wcm90b3R5cGUpKSB7XG4gICAgICAgIHRoaXNbcHJvcGVydHlOYW1lXSA9IG5ld1ZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICogR2VuZXJhdGUgYW4gaW5pdGlhbCBjYWxsIHRvIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayBmb3IgZWFjaCBhdHRyaWJ1dGVcbiAgICAgKiBvbiB0aGUgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIFRPRE86IFRoZSBwbGFuIGZvciBDdXN0b20gRWxlbWVudHMgdjEgaXMgZm9yIHRoZSBicm93c2VyIHRvIGhhbmRsZSB0aGlzLlxuICAgICAqIE9uY2UgdGhhdCdzIGhhbmRsZWQgKGluY2x1ZGluZyBpbiBwb2x5ZmlsbHMpLCB0aGlzIGNhbGwgY2FuIGdvIGF3YXkuXG4gICAgICovXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgW10uZm9yRWFjaC5jYWxsKHRoaXMuYXR0cmlidXRlcywgYXR0cmlidXRlID0+IHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soYXR0cmlidXRlLm5hbWUsIHVuZGVmaW5lZCwgYXR0cmlidXRlLnZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIEF0dHJpYnV0ZU1hcnNoYWxsaW5nO1xufTtcblxuXG4vLyBDb252ZXJ0IGNhbWVsIGNhc2UgZm9vQmFyIG5hbWUgdG8gaHlwaGVuYXRlZCBmb28tYmFyLlxuZnVuY3Rpb24gYXR0cmlidXRlVG9Qcm9wZXJ0eU5hbWUoYXR0cmlidXRlTmFtZSkge1xuICBsZXQgcHJvcGVydHlOYW1lID0gYXR0cmlidXRlTmFtZS5yZXBsYWNlKC8tKFthLXpdKS9nLCBtID0+IG1bMV0udG9VcHBlckNhc2UoKSk7XG4gIHJldHVybiBwcm9wZXJ0eU5hbWU7XG59XG5cbi8vIENvbnZlcnQgaHlwaGVuYXRlZCBmb28tYmFyIG5hbWUgdG8gY2FtZWwgY2FzZSBmb29CYXIuXG4vLyBUT0RPOiBVc2UgdGhpcyB3aGVuIHdlIHN1cHBvcnQgcmVmbGVjdGlvbiBvZiBwcm9wZXJ0aWVzIHRvIGF0dHJpYnV0ZXMuXG4vLyBmdW5jdGlvbiBwcm9wZXJ0eVRvQXR0cmlidXRlTmFtZShwcm9wZXJ0eU5hbWUpIHtcbi8vICAgbGV0IGF0dHJpYnV0ZU5hbWUgPSBwcm9wZXJ0eU5hbWUucmVwbGFjZSgvKFthLXpdW0EtWl0pL2csIGcgPT4gZ1swXSArICctJyArIGdbMV0udG9Mb3dlckNhc2UoKSk7XG4vLyAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuLy8gfVxuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBDbGlja1NlbGVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgYSBjbGljayAoYWN0dWFsbHksIGEgbW91c2Vkb3duKSB0byBhIHNlbGVjdGlvbi5cbiAgICpcbiAgICogVGhpcyBzaW1wbGUgbWl4aW4gaXMgdXNlZnVsIGluIGxpc3QgYm94LWxpa2UgZWxlbWVudHMsIHdoZXJlIGEgY2xpY2sgb24gYVxuICAgKiBsaXN0IGl0ZW0gaW1wbGljaXRseSBzZWxlY3RzIGl0LlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgdGhlIGNvbXBvbmVudCB0byBwcm92aWRlIGFuIGBpdGVtc2AgcHJvcGVydHkuIFlvdSBjYW5cbiAgICogcHJvdmlkZSB0aGF0IHByb3BlcnR5IHlvdXJzZWxmLCBvciB1c2UgdGhlIENvbnRlbnRBc0l0ZW1zIG1peGluLiBUaGlzIG1peGluXG4gICAqIGFsc28gZXhwZWN0cyB0aGUgY29tcG9uZW50IHRvIGRlZmluZSBhIGBzZWxlY3RlZEluZGV4YCBwcm9wZXJ0eS4gWW91IGNhblxuICAgKiBwcm92aWRlIHRoYXQgeW91cnNlbGYsIG9yIHVzZSB0aGUgSXRlbXNTZWxlY3Rpb24gbWl4aW4uXG4gICAqL1xuICBjbGFzcyBDbGlja1NlbGVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgLypcbiAgICAgICAqIFJFVklFVzogV2hpY2ggZXZlbnQgc2hvdWxkIHdlIGxpc3RlbiB0byBoZXJlP1xuICAgICAgICpcbiAgICAgICAqIFRoZSBzdGFuZGFyZCB1c2UgZm9yIHRoaXMgbWl4aW4gaXMgaW4gbGlzdCBib3hlcy4gTGlzdCBib3hlcyBkb24ndFxuICAgICAgICogYXBwZWFyIHRvIGJlIGNvbnNpc3RlbnQgd2l0aCByZWdhcmQgdG8gd2hldGhlciB0aGV5IHNlbGVjdCBvbiBtb3VzZWRvd25cbiAgICAgICAqIG9yIGNsaWNrL21vdXNldXAuXG4gICAgICAgKi9cbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZXZlbnQgPT4ge1xuICAgICAgICBzZWxlY3RUYXJnZXQodGhpcywgZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgLy8gTm90ZTogV2UgZG9uJ3QgY2FsbCBwcmV2ZW50RGVmYXVsdCBoZXJlLiBUaGUgZGVmYXVsdCBiZWhhdmlvciBmb3JcbiAgICAgICAgLy8gbW91c2Vkb3duIGluY2x1ZGVzIHNldHRpbmcga2V5Ym9hcmQgZm9jdXMgaWYgdGhlIGVsZW1lbnQgZG9lc24ndFxuICAgICAgICAvLyBhbHJlYWR5IGhhdmUgdGhlIGZvY3VzLCBhbmQgd2Ugd2FudCB0byBwcmVzZXJ2ZSB0aGF0IGJlaGF2aW9yLlxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb24uIFRoaXMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgZ2V0IHNlbGVjdGVkSW5kZXgoKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRJbmRleDtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkSW5kZXgoaW5kZXgpIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRJbmRleCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJbmRleCA9IGluZGV4OyB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gQ2xpY2tTZWxlY3Rpb247XG59O1xuXG5cbi8vIFRPRE86IEhhbmRsZSB0aGUgY2FzZSB3aGVyZSBhIGxpc3QgaXRlbSBoYXMgc3ViZWxlbWVudHMuIFdhbGsgdXAgdGhlIERPTVxuLy8gaGllcmFyY2h5IHVudGlsIHdlIGZpbmQgYW4gaXRlbSBpbiB0aGUgbGlzdCwgb3IgY29tZSBiYWNrIHRvIHRoaXMgZWxlbWVudCxcbi8vIGluIHdoaWNoIGNhc2UgdGhlIGVsZW1lbnQgdGhhdCB3YXMgdGFwcGVkIGlzbid0IGFuIGl0ZW0gKGFuZCBzaG91bGQgYmVcbi8vIGlnbm9yZWQpLlxuZnVuY3Rpb24gc2VsZWN0VGFyZ2V0KGVsZW1lbnQsIHRhcmdldCkge1xuICBsZXQgaW5kZXggPSBlbGVtZW50Lml0ZW1zICYmIGVsZW1lbnQuaXRlbXMuaW5kZXhPZih0YXJnZXQpO1xuICBpZiAoaW5kZXggPj0gMCkge1xuICAgIGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICB9XG59XG4iLCIvKipcbiAqIEEgZ3JvdXAgb2YgZWxlbWVudHMgdGhhdCBoYXZlIGJlZW4gYXNzb2NpYXRlZCBmb3IgdGhlIHB1cnBvc2Ugb2ZcbiAqIGFjY29tcGxpc2hpbmcgc29tZSBjb2xsZWN0aXZlIGJlaGF2aW9yLCBlLmcuLCBrZXlib2FyZCBoYW5kbGluZy5cbiAqXG4gKiBUaGVyZSBhcmUgY2VydGFpbiBjb21wb25lbnRzIHRoYXQgd2FudCB0byBjb29wZXJhdGl2ZWx5IGhhbmRsZSB0aGUga2V5Ym9hcmQuXG4gKiBGb3IgZXhhbXBsZSwgdGhlIGJhc2ljLWFycm93LXNlbGVjdGlvbiBhbmQgYmFzaWMtcGFnZS1kb3RzIGNvbXBvbmVudHMgYXJlXG4gKiBvcHRpb25hbCBjb21wb25lbnRzIHRoYXQgY2FuIGF1Z21lbnQgdGhlIGFwcGVhcmFuY2UgYW5kIGJlaGF2aW9yIG9mIGFuIGlubmVyXG4gKiBiYXNpYy1jYXJvdXNlbCwgYWRkaW5nIGFycm93IGJ1dHRvbnMgYW5kIGRvdCBidXR0b25zLCByZXNwZWN0aXZlbHkuIFdoZW5cbiAqIHRoZXNlIGNvbXBvbmVudHMgYXJlIG5lc3RlZCB0b2dldGhlciwgdGhleSBmb3JtIGFuIGltcGxpY2l0IHVuaXQgY2FsbGVkIGFcbiAqICpjb2xsZWN0aXZlKjpcbiAqXG4gKiAgICAgPGJhc2ljLWFycm93LXNlbGVjdGlvbj5cbiAqICAgICAgIDxiYXNpYy1wYWdlLWRvdHM+XG4gKiAgICAgICAgIDxiYXNpYy1jYXJvdXNlbD5cbiAqICAgICAgICAgICAuLi4gaW1hZ2VzLCBldGMuIC4uLlxuICogICAgICAgICA8L2Jhc2ljLWNhcm91c2VsPlxuICogICAgICAgPC9iYXNpYy1wYWdlLWRvdHM+XG4gKiAgICAgPC9iYXNpYy1hcnJvdy1zZWxlY3Rpb24+XG4gKlxuICogSW4gdGhpcyBjb25maWd1cmF0aW9uLCB0aGUgdGhyZWUgY29tcG9uZW50cyB3aWxsIGFsbCBoYXZlIGEgYHRoaXMuY29sbGVjdGl2ZWBcbiAqIHJlZmVyZW5jZSB0aGF0IHJlZmVycyB0byBhIHNoYXJlZCBpbnN0YW5jZSBvZiB0aGUgYENvbGxlY3RpdmVgIGNsYXNzLlxuICpcbiAqIFRoZSBLZXlib2FyZCBtaXhpbiB0aGV5IHVzZSBpcyBzZW5zaXRpdmUgdG8gdGhlIHByZXNlbmNlIG9mXG4gKiB0aGUgY29sbGVjdGl2ZS4gQW1vbmcgb3RoZXIgdGhpbmdzLCBpdCB3aWxsIGVuc3VyZSB0aGF0IG9ubHkgdGhlIG91dGVybW9zdFxuICogZWxlbWVudCBhYm92ZSDigJTCoHRoZSBiYXNpYy1hcnJvdy1zZWxlY3Rpb24g4oCUwqB3aWxsIGJlIGEgdGFiIHN0b3AgdGhhdCBjYW5cbiAqIHJlY2VpdmUgdGhlIGtleWJvYXJkIGZvY3VzLiBUaGlzIGxldHMgdGhlIHVzZXIgcGVyY2VpdmUgdGhlIGNvbXBvbmVudFxuICogYXJyYW5nZW1lbnQgYWJvdmUgYXMgYSBzaW5nbGUgdW5pdC4gVGhlIEtleWJvYXJkIG1peGluIHdpbGwgYWxzbyBnaXZlIGVhY2hcbiAqIGVsZW1lbnQgaW4gdGhlIGNvbGxlY3RpdmUgYSBjaGFuY2UgdG8gcHJvY2VzcyBhbnkga2V5Ym9hcmQgZXZlbnRzLiBTbywgZXZlblxuICogdGhvdWdoIHRoZSBiYXNpYy1hcnJvdy1zZWxlY3Rpb24gZWxlbWVudCB3aWxsIGhhdmUgdGhlIGZvY3VzLCB0aGUgc3RhbmRhcmRcbiAqIGtleWJvYXJkIG5hdmlnYXRpb24gcHJvdmlkZWQgYnkgYmFzaWMtY2Fyb3VzZWwgd2lsbCBjb250aW51ZSB0byB3b3JrLlxuICpcbiAqIFRoZSBTZWxlY3Rpb25BcmlhQWN0aXZlIGNvbXBvbmVudCBhbHNvIHJlc3BlY3RzIGNvbGxlY3RpdmVzIHdoZW4gdXNpbmcgdGhlXG4gKiBgYXJpYS1hY3RpdmVkZXNjZW5kYW50YCBhbmQgYHJvbGVgIGF0dHJpYnV0ZXMuIFRob3NlIHdpbGwgYmUgYXBwbGllZCB0byB0aGVcbiAqIG91dGVybW9zdCBlbGVtZW50IChiYXNpYy1hcnJvdy1zZWxlY3Rpb24sIGFib3ZlKSBzbyB0aGF0IEFSSUEgY2FuIGNvcnJlY3RseVxuICogdW5kZXJzdGFuZCB0aGUgYXJyYW5nZW1lbnQgb2YgdGhlIGVsZW1lbnRzLlxuICpcbiAqIFlvdSBjYW4gcHV0IGVsZW1lbnRzIGludG8gY29sbGVjdGl2ZXMgeW91cnNlbGYsIG9yIHlvdSBjYW4gdXNlIHRoZVxuICogVGFyZ2V0SW5Db2xsZWN0aXZlIG1peGluLlxuICovXG5jbGFzcyBDb2xsZWN0aXZlIHtcblxuICAvKipcbiAgICogQ3JlYXRlIGEgY29sbGVjdGl2ZS5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRUxlbWVudFtdfSBbZWxlbWVudHNdIC0gSW5pdGlhbCBlbGVtZW50cyB0byBhZGQuXG4gICAqL1xuICBjb25zdHJ1Y3RvciguLi5lbGVtZW50cykge1xuICAgIC8qKlxuICAgICAqIFRoZSBlbGVtZW50cyBpbiB0aGUgY29sbGVjdGl2ZS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIHRoaXMuZWxlbWVudHMgPSBbXTtcbiAgICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4gdGhpcy5hc3NpbWlsYXRlKGVsZW1lbnQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgdGhlIGluZGljYXRlZCB0YXJnZXQgdG8gdGhlIGNvbGxlY3RpdmUuXG4gICAqXG4gICAqIEJ5IGNvbnZlbnRpb24sIGlmIHR3byBlbGVtZW50cyB3YW50cyB0byBwYXJ0aWNpcGF0ZSBpbiBhIGNvbGxlY3RpdmUsIGFuZFxuICAgKiBvbmUgZWxlbWVudCBpcyBhbiBhbmNlc3RvciBvZiB0aGUgb3RoZXIgaW4gdGhlIERPTSwgdGhlIGFuY2VzdG9yIHNob3VsZFxuICAgKiBhc3NpbWlsYXRlIHRoZSBkZXNjZW5kYW50IGluc3RlYWQgb2YgdGhlIG90aGVyIHdheSBhcm91bmQuXG4gICAqXG4gICAqIEFmdGVyIGFzc2ltaWxhdGlvbiwgYW55IGVsZW1lbnQgaW4gdGhlIGNvbGxlY3RpdmUgdGhhdCBkZWZpbmVzIGFcbiAgICogYGNvbGxlY3RpdmVDaGFuZ2VkYCBtZXRob2Qgd2lsbCBoYXZlIHRoYXQgbWV0aG9kIGludm9rZWQuIFRoaXMgYWxsb3dzXG4gICAqIHRoZSBjb2xsZWN0aXZlJ3MgZWxlbWVudHMgdG8gcmVzcG9uZCB0byBjaGFuZ2VzIGluIHRoZSBjb2xsZWN0aXZlLlxuICAgKlxuICAgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxDb2xsZWN0aXZlKX0gdGFyZ2V0IC0gVGhlIGVsZW1lbnQgb3IgY29sbGVjdGl2ZSB0byBhZGQuXG4gICAqL1xuICBhc3NpbWlsYXRlKHRhcmdldCkge1xuICAgIGxldCBjb2xsZWN0aXZlQ2hhbmdlZDtcbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgQ29sbGVjdGl2ZSkge1xuICAgICAgY29sbGVjdGl2ZUNoYW5nZWQgPSBhc3NpbWlsYXRlQ29sbGVjdGl2ZSh0aGlzLCB0YXJnZXQpO1xuICAgIH0gZWxzZSBpZiAodGFyZ2V0LmNvbGxlY3RpdmUpIHtcbiAgICAgIC8vIFRhcmdldCBpcyBhbHJlYWR5IHBhcnQgb2YgYSBjb2xsZWN0aXZlLCBhc3NpbWlsYXRlIGl0LlxuICAgICAgY29sbGVjdGl2ZUNoYW5nZWQgPSBhc3NpbWlsYXRlQ29sbGVjdGl2ZSh0aGlzLCB0YXJnZXQuY29sbGVjdGl2ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEFzc2ltaWxhdGUgYW4gaW5kaXZpZHVhbCBlbGVtZW50LlxuICAgICAgY29sbGVjdGl2ZUNoYW5nZWQgPSBhc3NpbWlsYXRlRWxlbWVudCh0aGlzLCB0YXJnZXQpO1xuICAgIH1cblxuICAgIGlmIChjb2xsZWN0aXZlQ2hhbmdlZCkge1xuICAgICAgdGhpcy5pbnZva2VNZXRob2QoJ2NvbGxlY3RpdmVDaGFuZ2VkJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEludm9rZSBhIG1ldGhvZCBvbiBhbGwgZWxlbWVudHMgaW4gdGhlIGNvbGxlY3RpdmUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2QgLSBUaGUgbmFtZSBvZiB0aGUgbWV0aG9kIHRvIGludm9rZSBvbiBhbGwgZWxlbWVudHMuXG4gICAqIEBwYXJhbSB7b2JqZWN0W119IFthcmdzXSAtIFRoZSBhcmd1bWVudHMgdG8gdGhlIG1ldGhvZFxuICAgKi9cbiAgaW52b2tlTWV0aG9kKG1ldGhvZCwgLi4uYXJncykge1xuICAgIC8vIEludm9rZSBmcm9tIGlubmVybW9zdCB0byBvdXRlcm1vc3QuXG4gICAgbGV0IGVsZW1lbnRzID0gdGhpcy5lbGVtZW50cztcbiAgICBmb3IgKGxldCBpID0gZWxlbWVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCBlbGVtZW50ID0gZWxlbWVudHNbaV07XG4gICAgICBpZiAoZWxlbWVudFttZXRob2RdKSB7XG4gICAgICAgIGVsZW1lbnRbbWV0aG9kXS5hcHBseShlbGVtZW50LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhlIG91dGVybW9zdCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aXZlLlxuICAgKiBCeSBjb252ZW50aW9uLCB0aGlzIGlzIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBgZWxlbWVudHNgIGFycmF5LlxuICAgKi9cbiAgZ2V0IG91dGVybW9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudHNbMF07XG4gIH1cblxufVxuXG5cbi8vIFRoZSBmaXJzdCBjb2xsZWN0aXZlIGFzc2ltaWxhdGVzIHRoZSBzZWNvbmQuXG5mdW5jdGlvbiBhc3NpbWlsYXRlQ29sbGVjdGl2ZShjb2xsZWN0aXZlMSwgY29sbGVjdGl2ZTIpIHtcbiAgaWYgKGNvbGxlY3RpdmUxID09PSBjb2xsZWN0aXZlMikge1xuICAgIC8vIENvbGxlY3RpdmVzIGFyZSBzYW1lOyBpZ25vcmUuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbGV0IGVsZW1lbnRzID0gY29sbGVjdGl2ZTIuZWxlbWVudHM7XG5cbiAgLy8gT2xkIGNvbGxlY3RpdmUgd2lsbCBubyBsb25nZXIgaGF2ZSBhbnkgZWxlbWVudHMgb2YgaXRzIG93bi5cbiAgY29sbGVjdGl2ZTIuZWxlbWVudHMgPSBbXTtcblxuICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGFzc2ltaWxhdGVFbGVtZW50KGNvbGxlY3RpdmUxLCBlbGVtZW50KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cblxuLy8gQXNzaW1pbGF0ZSB0aGUgaW5kaWNhdGVkIGVsZW1lbnQuXG5mdW5jdGlvbiBhc3NpbWlsYXRlRWxlbWVudChjb2xsZWN0aXZlLCBlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50LmNvbGxlY3RpdmUgPT09IGNvbGxlY3RpdmUpIHtcbiAgICAvLyBBbHJlYWR5IHBhcnQgb2YgdGhpcyBjb2xsZWN0aXZlLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBlbGVtZW50LmNvbGxlY3RpdmUgPSBjb2xsZWN0aXZlO1xuICBjb2xsZWN0aXZlLmVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gIHJldHVybiB0cnVlO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IENvbGxlY3RpdmU7XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIENvbXBvc2FibGUuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB0byBtYWtlIGEgY2xhc3MgbW9yZSBlYXNpbHkgY29tcG9zYWJsZSB3aXRoIG90aGVyIG1peGlucy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBjb250cmlidXRlcyBhIGBjb21wb3NlYCBtZXRob2QgdGhhdCBhcHBsaWVzIGEgc2V0IG9mIG1peGluXG4gICAqIGZ1bmN0aW9ucyBhbmQgcmV0dXJucyB0aGUgcmVzdWx0aW5nIG5ldyBjbGFzcy4gVGhpcyBzdWdhciBjYW4gbWFrZSB0aGVcbiAgICogYXBwbGljYXRpb24gb2YgbWFueSBtaXhpbnMgYXQgb25jZSBlYXNpZXIgdG8gcmVhZC5cbiAgICovXG4gIGNsYXNzIENvbXBvc2FibGUgZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qKlxuICAgICAqIEFwcGx5IGEgc2V0IG9mIG1peGluIGZ1bmN0aW9ucyBvciBtaXhpbiBvYmplY3RzIHRvIHRoZSBwcmVzZW50IGNsYXNzIGFuZFxuICAgICAqIHJldHVybiB0aGUgbmV3IGNsYXNzLlxuICAgICAqXG4gICAgICogSW5zdGVhZCBvZiB3cml0aW5nOlxuICAgICAqXG4gICAgICogICAgIGxldCBNeUNsYXNzID0gTWl4aW4xKE1peGluMihNaXhpbjMoTWl4aW40KE1peGluNShCYXNlQ2xhc3MpKSkpKTtcbiAgICAgKlxuICAgICAqIFlvdSBjYW4gd3JpdGU6XG4gICAgICpcbiAgICAgKiAgICAgbGV0IE15Q2xhc3MgPSBDb21wb3NhYmxlKEJhc2VDbGFzcykuY29tcG9zZShcbiAgICAgKiAgICAgICBNaXhpbjEsXG4gICAgICogICAgICAgTWl4aW4yLFxuICAgICAqICAgICAgIE1peGluMyxcbiAgICAgKiAgICAgICBNaXhpbjQsXG4gICAgICogICAgICAgTWl4aW41XG4gICAgICogICAgICk7XG4gICAgICpcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGNhbiBhbHNvIHRha2UgbWl4aW4gb2JqZWN0cy4gQSBtaXhpbiBvYmplY3QgaXMganVzdCBhXG4gICAgICogc2hvcnRoYW5kIGZvciBhIG1peGluIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIG5ldyBzdWJjbGFzcyB3aXRoIHRoZSBnaXZlblxuICAgICAqIG1lbWJlcnMuIFRoZSBtaXhpbiBvYmplY3QncyBtZW1iZXJzIGFyZSAqbm90KiBjb3BpZWQgZGlyZWN0bHkgb250byB0aGVcbiAgICAgKiBwcm90b3R5cGUgb2YgdGhlIGJhc2UgY2xhc3MsIGFzIHdpdGggdHJhZGl0aW9uYWwgbWl4aW5zLlxuICAgICAqXG4gICAgICogSW4gYWRkaXRpb24gdG8gcHJvdmlkaW5nIHN5bnRhY3RpYyBzdWdhciwgdGhpcyBtaXhpbiBjYW4gYmUgdXNlZCB0b1xuICAgICAqIGRlZmluZSBhIGNsYXNzIGluIEVTNSwgd2hpY2ggbGFja3MgRVM2J3MgYGNsYXNzYCBrZXl3b3JkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHsuLi5taXhpbnN9IG1peGlucyAtIEEgc2V0IG9mIG1peGluIGZ1bmN0aW9ucyBvciBvYmplY3RzIHRvIGFwcGx5LlxuICAgICAqL1xuICAgIHN0YXRpYyBjb21wb3NlKC4uLm1peGlucykge1xuICAgICAgLy8gV2UgY3JlYXRlIGEgbmV3IHN1YmNsYXNzIGZvciBlYWNoIG1peGluIGluIHR1cm4uIFRoZSByZXN1bHQgYmVjb21lc1xuICAgICAgLy8gdGhlIGJhc2UgY2xhc3MgZXh0ZW5kZWQgYnkgYW55IHN1YnNlcXVlbnQgbWl4aW5zLiBJdCB0dXJucyBvdXQgdGhhdFxuICAgICAgLy8gd2UgY2FuIHVzZSBBcnJheS5yZWR1Y2UoKSB0byBjb25jaXNlbHkgZXhwcmVzcyB0aGlzLCB1c2luZyB0aGUgY3VycmVudFxuICAgICAgLy8gb2JqZWN0IGFzIHRoZSBzZWVkIGZvciByZWR1Y2UoKS5cbiAgICAgIHJldHVybiBtaXhpbnMucmVkdWNlKGNvbXBvc2VDbGFzcywgdGhpcyk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gQ29tcG9zYWJsZTtcbn07XG5cblxuLy8gUHJvcGVydGllcyBkZWZpbmVkIGJ5IE9iamVjdCB0aGF0IHdlIGRvbid0IHdhbnQgdG8gbWl4aW4uXG5jb25zdCBOT05fTUlYQUJMRV9PQkpFQ1RfUFJPUEVSVElFUyA9IFtcbiAgJ2NvbnN0cnVjdG9yJ1xuXTtcblxuLypcbiAqIEFwcGx5IHRoZSBtaXhpbiB0byB0aGUgZ2l2ZW4gYmFzZSBjbGFzcyB0byByZXR1cm4gYSBuZXcgY2xhc3MuXG4gKiBUaGUgbWl4aW4gY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbW9kaWZpZWQgY2xhc3MsIG9yIGFcbiAqIHBsYWluIG9iamVjdCB3aG9zZSBtZW1iZXJzIHdpbGwgYmUgY29waWVkIHRvIHRoZSBuZXcgY2xhc3MnIHByb3RvdHlwZS5cbiAqL1xuZnVuY3Rpb24gY29tcG9zZUNsYXNzKGJhc2UsIG1peGluKSB7XG4gIGlmICh0eXBlb2YgbWl4aW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBNaXhpbiBmdW5jdGlvblxuICAgIHJldHVybiBtaXhpbihiYXNlKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBNaXhpbiBvYmplY3RcbiAgICBjbGFzcyBTdWJjbGFzcyBleHRlbmRzIGJhc2Uge31cbiAgICBjb3B5T3duUHJvcGVydGllcyhtaXhpbiwgU3ViY2xhc3MucHJvdG90eXBlLCBOT05fTUlYQUJMRV9PQkpFQ1RfUFJPUEVSVElFUyk7XG4gICAgcmV0dXJuIFN1YmNsYXNzO1xuICB9XG59XG5cblxuLypcbiAqIENvcHkgdGhlIGdpdmVuIHByb3BlcnRpZXMvbWV0aG9kcyB0byB0aGUgdGFyZ2V0LlxuICogUmV0dXJuIHRoZSB1cGRhdGVkIHRhcmdldC5cbiAqL1xuZnVuY3Rpb24gY29weU93blByb3BlcnRpZXMoc291cmNlLCB0YXJnZXQsIGlnbm9yZVByb3BlcnR5TmFtZXMgPSBbXSkge1xuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2UpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgaWYgKGlnbm9yZVByb3BlcnR5TmFtZXMuaW5kZXhPZihuYW1lKSA8IDApIHtcbiAgICAgIGxldCBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIG5hbWUpO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHRhcmdldDtcbn1cbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggQ29udGVudEFzSXRlbXMuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYXBzIGNvbnRlbnQgc2VtYW50aWNzIChlbGVtZW50cykgdG8gbGlzdCBpdGVtIHNlbWFudGljcy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGEgY29tcG9uZW50IHRvIHByb3ZpZGUgYSBgY29udGVudGAgcHJvcGVydHkgcmV0dXJuaW5nIGFcbiAgICogcmF3IHNldCBvZiBlbGVtZW50cy4gWW91IGNhbiBwcm92aWRlIHRoYXQgeW91cnNlbGYsIG9yIHVzZSB0aGVcbiAgICogYERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnRgIG1peGluLlxuICAgKlxuICAgKiBJdGVtcyBkaWZmZXIgZnJvbSBlbGVtZW50IGNvbnRlbnRzIGluIHNldmVyYWwgd2F5czpcbiAgICpcbiAgICogKiBUaGV5IGFyZSBvZnRlbiByZWZlcmVuY2VkIHZpYSBpbmRleC5cbiAgICogKiBUaGV5IG1heSBoYXZlIGEgc2VsZWN0aW9uIHN0YXRlLlxuICAgKiAqIEl0J3MgY29tbW9uIHRvIGRvIHdvcmsgdG8gaW5pdGlhbGl6ZSB0aGUgYXBwZWFyYW5jZSBvciBzdGF0ZSBvZiBhIG5ld1xuICAgKiAgIGl0ZW0uXG4gICAqICogQXV4aWxpYXJ5IGludmlzaWJsZSBjaGlsZCBlbGVtZW50cyBhcmUgZmlsdGVyZWQgb3V0IGFuZCBub3QgY291bnRlZCBhc1xuICAgKiAgIGl0ZW1zLiBBdXhpbGlhcnkgZWxlbWVudHMgaW5jbHVkZSBsaW5rLCBzY3JpcHQsIHN0eWxlLCBhbmQgdGVtcGxhdGVcbiAgICogICBlbGVtZW50cy4gVGhpcyBmaWx0ZXJpbmcgZW5zdXJlcyB0aGF0IHRob3NlIGF1eGlsaWFyeSBlbGVtZW50cyBjYW4gYmVcbiAgICogICB1c2VkIGluIG1hcmt1cCBpbnNpZGUgb2YgYSBsaXN0IHdpdGhvdXQgYmVpbmcgdHJlYXRlZCBhcyBsaXN0IGl0ZW1zLlxuICAgKi9cbiAgY2xhc3MgQ29udGVudEFzSXRlbXMgZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qKlxuICAgICAqIEFwcGx5IHRoZSBzZWxlY3Rpb24gc3RhdGUgdG8gYSBzaW5nbGUgaXRlbS5cbiAgICAgKlxuICAgICAqIEludm9rZSB0aGlzIG1ldGhvZCB0byBzaWduYWwgdGhhdCB0aGUgc2VsZWN0ZWQgc3RhdGUgb2YgdGhlIGluZGljYXRlZCBpdGVtXG4gICAgICogaGFzIGNoYW5nZWQuIEJ5IGRlZmF1bHQsIHRoaXMgYXBwbGllcyBhIGBzZWxlY3RlZGAgQ1NTIGNsYXNzIGlmIHRoZSBpdGVtXG4gICAgICogaXMgc2VsZWN0ZWQsIGFuZCByZW1vdmVkIGl0IGlmIG5vdCBzZWxlY3RlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW0gLSBUaGUgaXRlbSB3aG9zZSBzZWxlY3Rpb24gc3RhdGUgaGFzIGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBzZWxlY3RlZCAtIFRydWUgaWYgdGhlIGl0ZW0gaXMgc2VsZWN0ZWQsIGZhbHNlIGlmIG5vdC5cbiAgICAgKi9cbiAgICBhcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCkge1xuICAgICAgaWYgKHN1cGVyLmFwcGx5U2VsZWN0aW9uKSB7IHN1cGVyLmFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKTsgfVxuICAgICAgLy8gV291bGQgbGlrZSB0byB1c2UgY2xhc3NMaXN0LnRvZ2dsZSgpIGhlcmUsIGJ1dCBJRSAxMSBkb2Vzbid0IGhhdmUgaXQuXG4gICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRlbnRDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbnRlbnRDaGFuZ2VkKSB7IHN1cGVyLmNvbnRlbnRDaGFuZ2VkKCk7IH1cbiAgICAgIHRoaXMuX2l0ZW1zID0gbnVsbDtcbiAgICAgIHRoaXMuaXRlbXNDaGFuZ2VkKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuZXZlciBhIG5ldyBpdGVtIGlzIGFkZGVkIHRvIHRoZSBsaXN0LlxuICAgICAqXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLiBZb3UgY2FuIG92ZXJyaWRlXG4gICAgICogdGhpcyB0byBwZXJmb3JtIHBlci1pdGVtIGluaXRpYWxpemF0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbSAtIFRoZSBpdGVtIHRoYXQgd2FzIGFkZGVkLlxuICAgICAqL1xuICAgIGl0ZW1BZGRlZChpdGVtKSB7XG4gICAgICBpZiAoc3VwZXIuaXRlbUFkZGVkKSB7IHN1cGVyLml0ZW1BZGRlZChpdGVtKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHNldCBvZiBpdGVtcyBpbiB0aGUgbGlzdC4gU2VlIHRoZSB0b3AtbGV2ZWwgZG9jdW1lbnRhdGlvbiBmb3JcbiAgICAgKiBtaXhpbiBmb3IgYSBkZXNjcmlwdGlvbiBvZiBob3cgaXRlbXMgZGlmZmVyIGZyb20gcGxhaW4gY29udGVudC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIGdldCBpdGVtcygpIHtcbiAgICAgIGlmICh0aGlzLl9pdGVtcyA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX2l0ZW1zID0gZmlsdGVyQXV4aWxpYXJ5RWxlbWVudHModGhpcy5jb250ZW50KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gdGhlIHVuZGVybHlpbmcgY29udGVudHMgY2hhbmdlLiBJdCBpcyBhbHNvXG4gICAgICogaW52b2tlZCBvbiBjb21wb25lbnQgaW5pdGlhbGl6YXRpb24g4oCTIHNpbmNlIHRoZSBpdGVtcyBoYXZlIFwiY2hhbmdlZFwiIGZyb21cbiAgICAgKiBiZWluZyBub3RoaW5nLlxuICAgICAqL1xuICAgIGl0ZW1zQ2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5pdGVtc0NoYW5nZWQpIHsgc3VwZXIuaXRlbXNDaGFuZ2VkKCk7IH1cblxuICAgICAgLy8gUGVyZm9ybSBwZXItaXRlbSBpbml0aWFsaXphdGlvbi5cbiAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKCFpdGVtLl9pdGVtSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICB0aGlzLml0ZW1BZGRlZChpdGVtKTtcbiAgICAgICAgICBpdGVtLl9pdGVtSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnaXRlbXMtY2hhbmdlZCcpKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEBldmVudCBpdGVtcy1jaGFuZ2VkXG4gICAgICpcbiAgICAgKiBUaGlzIGV2ZW50IGlzIHJhaXNlZCB3aGVuIHRoZSBzZXQgb2YgaXRlbXMgY2hhbmdlcy5cbiAgICAgKi9cbiAgfVxuXG4gIHJldHVybiBDb250ZW50QXNJdGVtcztcbn07XG5cblxuLy8gUmV0dXJuIHRoZSBnaXZlbiBlbGVtZW50cywgZmlsdGVyaW5nIG91dCBhdXhpbGlhcnkgZWxlbWVudHMgdGhhdCBhcmVuJ3Rcbi8vIHR5cGljYWxseSB2aXNpYmxlLiBJdGVtcyB3aGljaCBhcmUgbm90IGVsZW1lbnRzIGFyZSByZXR1cm5lZCBhcyBpcy5cbmZ1bmN0aW9uIGZpbHRlckF1eGlsaWFyeUVsZW1lbnRzKGl0ZW1zKSB7XG4gIGxldCBhdXhpbGlhcnlUYWdzID0gW1xuICAgICdsaW5rJyxcbiAgICAnc2NyaXB0JyxcbiAgICAnc3R5bGUnLFxuICAgICd0ZW1wbGF0ZSdcbiAgXTtcbiAgcmV0dXJuIFtdLmZpbHRlci5jYWxsKGl0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuICFpdGVtLmxvY2FsTmFtZSB8fCBhdXhpbGlhcnlUYWdzLmluZGV4T2YoaXRlbS5sb2NhbE5hbWUpIDwgMDtcbiAgfSk7XG59XG5cblxuLyoqXG4gKiBGaXJlcyB3aGVuIHRoZSBpdGVtcyBpbiB0aGUgbGlzdCBjaGFuZ2UuXG4gKlxuICogQGV2ZW50IGl0ZW1zLWNoYW5nZWRcbiAqL1xuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBDb250ZW50Rmlyc3RDaGlsZFRhcmdldC4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHRoYXQgZGVmaW5lcyB0aGUgdGFyZ2V0IG9mIGEgY29tcG9uZW50IOKAlCB0aGUgZWxlbWVudCB0aGUgY29tcG9uZW50IGlzXG4gICAqIG1hbmFnaW5nIG9yIHNvbWVob3cgcmVzcG9uc2libGUgZm9yIOKAlCBhcyBpdHMgZmlyc3QgY2hpbGQuXG4gICAqXG4gICAqIFNvbWUgY29tcG9uZW50cyBzZXJ2ZSB0byBkZWNvcmF0ZSBvciBtb2RpZnkgb3RoZXIgZWxlbWVudHMuIEEgY29tbW9uXG4gICAqIHBhdHRlcm4gaXMgdG8gaGF2ZSBvbmUgY29tcG9uZW50IHdyYXAgYW5vdGhlciwgYW5kIGhhdmUgdGhlIG91dGVyLCBwYXJlbnRcbiAgICogY29tcG9uZW50IGltcGxpY2l0bHkgbW9kaWZ5IHRoZSBjaGlsZC4gVGhpcyBtaXhpbiBmYWNpbGl0YXRlcyB0aGlzIGJ5XG4gICAqIGltcGxpY2l0bHkgdGFraW5nIGFuIGVsZW1lbnQncyBmaXJzdCBjaGlsZCBhcyBpdHMgXCJ0YXJnZXRcIi5cbiAgICpcbiAgICogRXhhbXBsZTpcbiAgICpcbiAgICogICAgIDxvdXRlci1lbGVtZW50PlxuICAgKiAgICAgICA8aW5uZXItZWxlbWVudD48L2lubmVyLWVsZW1lbnQ+XG4gICAqICAgICA8L291dGVyLWVsZW1lbnQ+XG4gICAqXG4gICAqIElmIGBvdXRlci1lbGVtZW50YCB1c2VzIHRoaXMgbWl4aW4sIHRoZW4gaXRzIGB0YXJnZXRgIHByb3BlcnR5IHdpbGwgYmVcbiAgICogc2V0IHRvIHBvaW50IHRvIHRoZSBgaW5uZXItZWxlbWVudGAsIGJlY2F1c2UgdGhhdCBpcyBpdHMgZmlyc3QgY2hpbGQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIGBjb250ZW50YCBwcm9wZXJ0eSB0aGF0IHJldHVybnMgdGhlIGVsZW1lbnQncyBjb250ZW50LlxuICAgKiBZb3UgY2FuIGltcGxlbWVudCB0aGF0IHlvdXJzZWxmLCBvciB1c2UgdGhlIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnRcbiAgICogbWl4aW4uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gY2FuIGJlIGNvbWJpbmVkIHdpdGggdGhlIFRhcmdldEluQ29sbGVjdGl2ZSBtaXhpbiB0byBoYXZlIGFcbiAgICogY29tcG9uZW50IHBhcnRpY2lwYXRlIGluIGNvbGxlY3RpdmUga2V5Ym9hcmQgaGFuZGxpbmcuICpcbiAgICovXG4gIGNsYXNzIENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0IGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb250ZW50Q2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5jb250ZW50Q2hhbmdlZCkgeyBzdXBlci5jb250ZW50Q2hhbmdlZCgpOyB9XG4gICAgICBsZXQgY29udGVudCA9IHRoaXMuY29udGVudDtcbiAgICAgIGxldCB0YXJnZXQgPSBjb250ZW50ICYmIGNvbnRlbnRbMF07XG4gICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMvc2V0cyB0aGUgY3VycmVudCB0YXJnZXQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXQgdGFyZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RhcmdldDtcbiAgICB9XG4gICAgc2V0IHRhcmdldChlbGVtZW50KSB7XG4gICAgICBpZiAoJ3RhcmdldCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIudGFyZ2V0ID0gZWxlbWVudDsgfVxuICAgICAgdGhpcy5fdGFyZ2V0ID0gZWxlbWVudDtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBDb250ZW50Rmlyc3RDaGlsZFRhcmdldDtcbn07XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIERpcmVjdGlvblNlbGVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgZGlyZWN0aW9uIHNlbWFudGljcyAoZ29MZWZ0LCBnb1JpZ2h0LCBldGMuKSB0byBzZWxlY3Rpb25cbiAgICogc2VtYW50aWNzIChzZWxlY3RQcmV2aW91cywgc2VsZWN0TmV4dCwgZXRjLikuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gY2FuIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgS2V5Ym9hcmREaXJlY3Rpb24gbWl4aW5cbiAgICogKHdoaWNoIG1hcHMga2V5Ym9hcmQgZXZlbnRzIHRvIGRpcmVjdGlvbnMpIGFuZCBhIG1peGluIHRoYXQgaGFuZGxlc1xuICAgKiBzZWxlY3Rpb24gbGlrZSBJdGVtc1NlbGVjdGlvbi5cbiAgICovXG4gIGNsYXNzIERpcmVjdGlvblNlbGVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgZ29Eb3duKCkge1xuICAgICAgaWYgKHN1cGVyLmdvRG93bikgeyBzdXBlci5nb0Rvd24oKTsgfVxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0TmV4dCgpO1xuICAgIH1cblxuICAgIGdvRW5kKCkge1xuICAgICAgaWYgKHN1cGVyLmdvRW5kKSB7IHN1cGVyLmdvRW5kKCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdExhc3QoKTtcbiAgICB9XG5cbiAgICBnb0xlZnQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29MZWZ0KSB7IHN1cGVyLmdvTGVmdCgpOyB9XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RQcmV2aW91cygpO1xuICAgIH1cblxuICAgIGdvUmlnaHQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29SaWdodCkgeyBzdXBlci5nb1JpZ2h0KCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdE5leHQoKTtcbiAgICB9XG5cbiAgICBnb1N0YXJ0KCkge1xuICAgICAgaWYgKHN1cGVyLmdvU3RhcnQpIHsgc3VwZXIuZ29TdGFydCgpOyB9XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RGaXJzdCgpO1xuICAgIH1cblxuICAgIGdvVXAoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29VcCkgeyBzdXBlci5nb1VwKCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdFByZXZpb3VzKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbnMuIFRoZXNlIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgIHNlbGVjdEZpcnN0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdEZpcnN0KSB7IHJldHVybiBzdXBlci5zZWxlY3RGaXJzdCgpOyB9XG4gICAgfVxuICAgIHNlbGVjdExhc3QoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0TGFzdCkgeyByZXR1cm4gc3VwZXIuc2VsZWN0TGFzdCgpOyB9XG4gICAgfVxuICAgIHNlbGVjdE5leHQoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0TmV4dCkgeyByZXR1cm4gc3VwZXIuc2VsZWN0TmV4dCgpOyB9XG4gICAgfVxuICAgIHNlbGVjdFByZXZpb3VzKCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdFByZXZpb3VzKSB7IHJldHVybiBzdXBlci5zZWxlY3RQcmV2aW91cygpOyB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gRGlyZWN0aW9uU2VsZWN0aW9uO1xufTtcbiIsIi8vIFRPRE86IFJhdGlvbmFsaXplIHdpdGggbmV3IEN1c3RvbSBFbGVtZW50cyBBUEkuXG4vLyBUT0RPOiBDb25zaWRlciByZW5hbWluZyB0byBtYXRjaCBDdXN0b20gRWxlbWVudHMgQVBJLlxuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggRGlzdHJpYnV0ZWRDaGlsZHJlbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIGRlZmluZXMgaGVscGVycyBmb3IgYWNjZXNzaW5nIGEgY29tcG9uZW50J3MgZGlzdHJpYnV0ZWRcbiAgICogY2hpbGRyZW4gYXMgYSBmbGF0dGVuZWQgYXJyYXkgb3Igc3RyaW5nLlxuICAgKlxuICAgKiBUaGUgc3RhbmRhcmQgRE9NIEFQSSBwcm92aWRlcyBzZXZlcmFsIHdheXMgb2YgYWNjZXNzaW5nIGNoaWxkIGNvbnRlbnQ6XG4gICAqIGBjaGlsZHJlbmAsIGBjaGlsZE5vZGVzYCwgYW5kIGB0ZXh0Q29udGVudGAuIE5vbmUgb2YgdGhlc2UgZnVuY3Rpb25zIGFyZVxuICAgKiBTaGFkb3cgRE9NIGF3YXJlLiBUaGlzIG1peGluIGRlZmluZXMgdmFyaWF0aW9ucyBvZiB0aG9zZSBmdW5jdGlvbnMgdGhhdFxuICAgKiAqYXJlKiBTaGFkb3cgRE9NIGF3YXJlLlxuICAgKlxuICAgKiBFeGFtcGxlOiB5b3UgY3JlYXRlIGEgY29tcG9uZW50IGA8Y291bnQtY2hpbGRyZW4+YCB0aGF0IGRpc3BsYXlzIGEgbnVtYmVyXG4gICAqIGVxdWFsIHRvIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gcGxhY2VkIGluc2lkZSB0aGF0IGNvbXBvbmVudC4gSWYgc29tZW9uZVxuICAgKiBpbnN0YW50aWF0ZXMgeW91ciBjb21wb25lbnQgbGlrZTpcbiAgICpcbiAgICogICAgIDxjb3VudC1jaGlsZHJlbj5cbiAgICogICAgICAgPGRpdj48L2Rpdj5cbiAgICogICAgICAgPGRpdj48L2Rpdj5cbiAgICogICAgICAgPGRpdj48L2Rpdj5cbiAgICogICAgIDwvY291bnQtY2hpbGRyZW4+XG4gICAqXG4gICAqIFRoZW4gdGhlIGNvbXBvbmVudCBzaG91bGQgc2hvdyBcIjNcIiwgYmVjYXVzZSB0aGVyZSBhcmUgdGhyZWUgY2hpbGRyZW4uIFRvXG4gICAqIGNhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuLCB0aGUgY29tcG9uZW50IGNhbiBqdXN0IGNhbGN1bGF0ZVxuICAgKiBgdGhpcy5jaGlsZHJlbi5sZW5ndGhgLiBIb3dldmVyLCBzdXBwb3NlIHNvbWVvbmUgaW5zdGFudGlhdGVzIHlvdXJcbiAgICogY29tcG9uZW50IGluc2lkZSBvbmUgb2YgdGhlaXIgb3duIGNvbXBvbmVudHMsIGFuZCBwdXRzIGEgYDxzbG90PmAgZWxlbWVudFxuICAgKiBpbnNpZGUgeW91ciBjb21wb25lbnQ6XG4gICAqXG4gICAqICAgICA8Y291bnQtY2hpbGRyZW4+XG4gICAqICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICogICAgIDwvY291bnQtY2hpbGRyZW4+XG4gICAqXG4gICAqIElmIHlvdXIgY29tcG9uZW50IG9ubHkgbG9va3MgYXQgYHRoaXMuY2hpbGRyZW5gLCBpdCB3aWxsIGFsd2F5cyBzZWUgZXhhY3RseVxuICAgKiBvbmUgY2hpbGQg4oCUwqB0aGUgYDxzbG90PmAgZWxlbWVudC4gQnV0IHRoZSB1c2VyIGxvb2tpbmcgYXQgdGhlIHBhZ2Ugd2lsbFxuICAgKiAqc2VlKiBhbnkgbm9kZXMgZGlzdHJpYnV0ZWQgdG8gdGhhdCBzbG90LiBUbyBtYXRjaCB3aGF0IHRoZSB1c2VyIHNlZXMsIHlvdXJcbiAgICogY29tcG9uZW50IHNob3VsZCBleHBhbmQgYW55IGA8c2xvdD5gIGVsZW1lbnRzIGl0IGNvbnRhaW5zLlxuICAgKlxuICAgKiBUaGF0IGlzIHRoZSBwcm9ibGVtIHRoaXMgbWl4aW4gc29sdmVzLiBBZnRlciBhcHBseWluZyB0aGlzIG1peGluLCB5b3VyXG4gICAqIGNvbXBvbmVudCBjb2RlIGhhcyBhY2Nlc3MgdG8gYHRoaXMuZGlzdHJpYnV0ZWRDaGlsZHJlbmAsIHdob3NlIGBsZW5ndGhgXG4gICAqIHdpbGwgcmV0dXJuIHRoZSB0b3RhbCBudW1iZXIgb2YgYWxsIGNoaWxkcmVuIGRpc3RyaWJ1dGVkIHRvIHlvdXIgY29tcG9uZW50XG4gICAqIGluIHRoZSBjb21wb3NlZCB0cmVlLlxuICAgKlxuICAgKiBOb3RlOiBUaGUgbGF0ZXN0IEN1c3RvbSBFbGVtZW50cyBBUEkgZGVzaWduIGNhbGxzIGZvciBhIG5ldyBmdW5jdGlvbixcbiAgICogYGdldEFzc2lnbmVkTm9kZXNgIHRoYXQgdGFrZXMgYW4gb3B0aW9uYWwgYGRlZXBgIHBhcmFtZXRlciwgdGhhdCB3aWxsIHNvbHZlXG4gICAqIHRoaXMgcHJvYmxlbSBhdCB0aGUgQVBJIGxldmVsLlxuICAgKi9cbiAgY2xhc3MgRGlzdHJpYnV0ZWRDaGlsZHJlbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogQW4gaW4tb3JkZXIgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgZXhwYW5kaW5nIGFueSBzbG90IGVsZW1lbnRzLiBMaWtlIHRoZVxuICAgICAqIHN0YW5kYXJkIGNoaWxkcmVuIHByb3BlcnR5LCB0aGlzIHNraXBzIHRleHQgbm9kZXMuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX1cbiAgICAgKi9cbiAgICBnZXQgZGlzdHJpYnV0ZWRDaGlsZHJlbigpIHtcbiAgICAgIHJldHVybiBleHBhbmRDb250ZW50RWxlbWVudHModGhpcy5jaGlsZHJlbiwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIGluLW9yZGVyIGNvbGxlY3Rpb24gb2YgY2hpbGQgbm9kZXMsIGV4cGFuZGluZyBhbnkgc2xvdCBlbGVtZW50cy4gTGlrZVxuICAgICAqIHRoZSBzdGFuZGFyZCBjaGlsZE5vZGVzIHByb3BlcnR5LCB0aGlzIGluY2x1ZGVzIHRleHQgbm9kZXMuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Tm9kZVtdfVxuICAgICAqL1xuICAgIGdldCBkaXN0cmlidXRlZENoaWxkTm9kZXMoKSB7XG4gICAgICByZXR1cm4gZXhwYW5kQ29udGVudEVsZW1lbnRzKHRoaXMuY2hpbGROb2RlcywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbmNhdGVuYXRlZCB0ZXh0IGNvbnRlbnQgb2YgYWxsIGNoaWxkIG5vZGVzLCBleHBhbmRpbmcgYW55IHNsb3RcbiAgICAgKiBlbGVtZW50cy5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0IGRpc3RyaWJ1dGVkVGV4dENvbnRlbnQoKSB7XG4gICAgICBsZXQgc3RyaW5ncyA9IHRoaXMuZGlzdHJpYnV0ZWRDaGlsZE5vZGVzLm1hcChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgICByZXR1cm4gY2hpbGQudGV4dENvbnRlbnQ7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzdHJpbmdzLmpvaW4oJycpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIERpc3RyaWJ1dGVkQ2hpbGRyZW47XG59O1xuXG5cbi8qXG4gKiBHaXZlbiBhIGFycmF5IG9mIG5vZGVzLCByZXR1cm4gYSBuZXcgYXJyYXkgd2l0aCBhbnkgY29udGVudCBlbGVtZW50cyBleHBhbmRlZFxuICogdG8gdGhlIG5vZGVzIGRpc3RyaWJ1dGVkIHRvIHRoYXQgY29udGVudCBlbGVtZW50LiBUaGlzIHJ1bGUgaXMgYXBwbGllZFxuICogcmVjdXJzaXZlbHkuXG4gKlxuICogSWYgaW5jbHVkZVRleHROb2RlcyBpcyB0cnVlLCB0ZXh0IG5vZGVzIHdpbGwgYmUgaW5jbHVkZWQsIGFzIGluIHRoZVxuICogc3RhbmRhcmQgY2hpbGROb2RlcyBwcm9wZXJ0eTsgYnkgZGVmYXVsdCwgdGhpcyBza2lwcyB0ZXh0IG5vZGVzLCBsaWtlIHRoZVxuICogc3RhbmRhcmQgY2hpbGRyZW4gcHJvcGVydHkuXG4gKi9cbmZ1bmN0aW9uIGV4cGFuZENvbnRlbnRFbGVtZW50cyhub2RlcywgaW5jbHVkZVRleHROb2Rlcykge1xuICBsZXQgZXhwYW5kZWQgPSBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwobm9kZXMsIG5vZGUgPT4ge1xuICAgIC8vIFdlIHdhbnQgdG8gc2VlIGlmIHRoZSBub2RlIGlzIGFuIGluc3RhbmNlb2YgSFRNTFNsb3RFTGVtZW50LCBidXRcbiAgICAvLyB0aGF0IGNsYXNzIHdvbid0IGV4aXN0IGlmIHRoZSBicm93c2VyIHRoYXQgZG9lc24ndCBzdXBwb3J0IG5hdGl2ZVxuICAgIC8vIFNoYWRvdyBET00gYW5kIGlmIHRoZSBTaGFkb3cgRE9NIHBvbHlmaWxsIGhhc24ndCBiZWVuIGxvYWRlZC4gSW5zdGVhZCxcbiAgICAvLyB3ZSBkbyBhIHNpbXBsaXN0aWMgY2hlY2sgdG8gc2VlIGlmIHRoZSB0YWcgbmFtZSBpcyBcInNsb3RcIiBvciBcImNvbnRlbnRcIi5cbiAgICBpZiAobm9kZS5sb2NhbE5hbWUgJiYgKG5vZGUubG9jYWxOYW1lID09PSBcInNsb3RcIiB8fCBub2RlLmxvY2FsTmFtZSA9PT0gXCJjb250ZW50XCIpKSB7XG4gICAgICAvLyBjb250ZW50IGVsZW1lbnQ7IHVzZSBpdHMgZGlzdHJpYnV0ZWQgbm9kZXMgaW5zdGVhZC5cbiAgICAgIGxldCBkaXN0cmlidXRlZE5vZGVzID0gbm9kZS5nZXREaXN0cmlidXRlZE5vZGVzKCk7XG4gICAgICByZXR1cm4gZGlzdHJpYnV0ZWROb2RlcyA/XG4gICAgICAgIGV4cGFuZENvbnRlbnRFbGVtZW50cyhkaXN0cmlidXRlZE5vZGVzLCBpbmNsdWRlVGV4dE5vZGVzKSA6XG4gICAgICAgIFtdO1xuICAgIH0gZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAvLyBQbGFpbiBlbGVtZW50OyB1c2UgYXMgaXMuXG4gICAgICByZXR1cm4gW25vZGVdO1xuICAgIH0gZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIFRleHQgJiYgaW5jbHVkZVRleHROb2Rlcykge1xuICAgICAgLy8gVGV4dCBub2RlLlxuICAgICAgcmV0dXJuIFtub2RlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ29tbWVudCwgcHJvY2Vzc2luZyBpbnN0cnVjdGlvbiwgZXRjLjsgc2tpcC5cbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH0pO1xuICBsZXQgZmxhdHRlbmVkID0gW10uY29uY2F0KC4uLmV4cGFuZGVkKTtcbiAgcmV0dXJuIGZsYXR0ZW5lZDtcbn1cbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudC4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIGRlZmluZXMgYSBjb21wb25lbnQncyBjb250ZW50IGFzIGl0cyBjaGlsZHJlbiwgZXhwYW5kaW5nIGFueVxuICAgKiBub2RlcyBkaXN0cmlidXRlZCB0byB0aGUgY29tcG9uZW50J3Mgc2xvdHMuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaXMgaW50ZW5kZWQgZm9yIHVzZSB3aXRoIHRoZSBEaXN0cmlidXRlZENoaWxkcmVuIG1peGluLiBTZWUgdGhhdFxuICAgKiBtaXhpbiBmb3IgYSBkaXNjdXNzaW9uIG9mIGhvdyB0aGF0IHdvcmtzLiBUaGlzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnRcbiAgICogbWl4aW4gcHJvdmlkZXMgYW4gZWFzeSB3YXkgb2YgZGVmaW5pbmcgdGhlIFwiY29udGVudFwiIG9mIGEgY29tcG9uZW50IGFzIHRoZVxuICAgKiBjb21wb25lbnQncyBkaXN0cmlidXRlZCBjaGlsZHJlbi4gVGhhdCBpbiB0dXJuIGxldHMgbWl4aW5zIGxpa2VcbiAgICogQ29udGVudEFzSXRlbXMgbWFuaXB1bGF0ZSB0aGUgY2hpbGRyZW4gYXMgbGlzdCBpdGVtcy5cbiAgICovXG4gIGNsYXNzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQgZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb250ZW50IG9mIHRoaXMgY29tcG9uZW50LCBkZWZpbmVkIHRvIGJlIHRoZSBmbGF0dGVuZWQgYXJyYXkgb2ZcbiAgICAgKiBjaGlsZHJlbiBkaXN0cmlidXRlZCB0byB0aGUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50W119XG4gICAgICovXG4gICAgZ2V0IGNvbnRlbnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kaXN0cmlidXRlZENoaWxkcmVuO1xuICAgIH1cbiAgICBzZXQgY29udGVudCh2YWx1ZSkge1xuICAgICAgaWYgKCdjb250ZW50JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5jb250ZW50ID0gdmFsdWU7IH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50O1xufTtcbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggR2VuZXJpYy4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIGFsbG93cyBhIGNvbXBvbmVudCB0byBzdXBwb3J0IGEgXCJnZW5lcmljXCIgc3R5bGU6IGEgbWluaW1hbGlzdFxuICAgKiBzdHlsZSB0aGF0IGNhbiBlYXNpbHkgYmUgcmVtb3ZlZCB0byByZXNldCBpdHMgdmlzdWFsIGFwcGVhcmFuY2UgdG8gYVxuICAgKiBiYXNlbGluZSBzdGF0ZS5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgYSBjb21wb25lbnQgc2hvdWxkIHByb3ZpZGUgYSBtaW5pbWFsIHZpc3VhbCBwcmVzZW50YXRpb24gdGhhdFxuICAgKiBhbGxvd3MgdGhlIGNvbXBvbmVudCB0byBmdW5jdGlvbi4gSG93ZXZlciwgdGhlIG1vcmUgc3R5bGluZyB0aGUgY29tcG9uZW50XG4gICAqIHByb3ZpZGVzIGJ5IGRlZmF1bHQsIHRoZSBoYXJkZXIgaXQgYmVjb21lcyB0byBnZXQgdGhlIGNvbXBvbmVudCB0byBmaXQgaW5cbiAgICogaW4gb3RoZXIgc2V0dGluZ3MuIEVhY2ggQ1NTIHJ1bGUgaGFzIHRvIGJlIG92ZXJyaWRkZW4uIFdvcnNlLCBuZXcgQ1NTIHJ1bGVzXG4gICAqIGFkZGVkIHRvIHRoZSBkZWZhdWx0IHN0eWxlIHdvbid0IGJlIG92ZXJyaWRkZW4gYnkgZGVmYXVsdCwgbWFraW5nIGl0IGhhcmRcbiAgICogdG8ga25vdyB3aGV0aGVyIGEgbmV3IHZlcnNpb24gb2YgYSBjb21wb25lbnQgd2lsbCBzdGlsbCBsb29rIG9rYXkuXG4gICAqXG4gICAqIEFzIGEgY29tcHJvbWlzZSwgdGhlIG1peGluIGRlZmluZXMgYSBgZ2VuZXJpY2AgYXR0cmlidXRlLiBUaGlzIGF0dHJpYnV0ZSBpc1xuICAgKiBub3JtYWxseSBzZXQgYnkgZGVmYXVsdCwgYW5kIHN0eWxlcyBjYW4gYmUgd3JpdHRlbiB0aGF0IGFwcGx5IG9ubHkgd2hlbiB0aGVcbiAgICogZ2VuZXJpYyBhdHRyaWJ1dGUgaXMgc2V0LiBUaGlzIGFsbG93cyB0aGUgY29uc3RydWN0aW9uIG9mIENTUyBydWxlcyB0aGF0XG4gICAqIHdpbGwgb25seSBhcHBseSB0byBnZW5lcmljIGNvbXBvbmVudHMgbGlrZTpcbiAgICpcbiAgICogICAgIDpob3N0KFtnZW5lcmljPVwiXCJdKSB7XG4gICAqICAgICAgIC4uLiBHZW5lcmljIGFwcGVhcmFuY2UgZGVmaW5lZCBoZXJlIC4uLlxuICAgKiAgICAgfVxuICAgKlxuICAgKiBUaGlzIG1ha2VzIGl0IGVhc3kgdG8gcmVtb3ZlIGFsbCBkZWZhdWx0IHN0eWxpbmcg4oCUIHNldCB0aGUgYGdlbmVyaWNgXG4gICAqIGF0dHJpYnV0ZSB0byBmYWxzZSwgYW5kIGFsbCBkZWZhdWx0IHN0eWxpbmcgd2lsbCBiZSByZW1vdmVkLlxuICAgKi9cbiAgY2xhc3MgR2VuZXJpYyBleHRlbmRzIGJhc2Uge1xuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgdGhpcy5nZW5lcmljID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2dlbmVyaWMnKSB8fCB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIGNvbXBvbmVudCB3b3VsZCBsaWtlIHRvIHJlY2VpdmUgZ2VuZXJpYyBzdHlsaW5nLlxuICAgICAqXG4gICAgICogVGhpcyBwcm9wZXJ0eSBpcyB0cnVlIGJ5IGRlZmF1bHQg4oCUwqBzZXQgaXQgdG8gZmFsc2UgdG8gdHVybiBvZmYgYWxsXG4gICAgICogZ2VuZXJpYyBzdHlsZXMuIFRoaXMgbWFrZXMgaXQgZWFzaWVyIHRvIGFwcGx5IGN1c3RvbSBzdHlsaW5nOyB5b3Ugd29uJ3RcbiAgICAgKiBoYXZlIHRvIGV4cGxpY2l0bHkgb3ZlcnJpZGUgc3R5bGluZyB5b3UgZG9uJ3Qgd2FudC5cbiAgICAgKlxuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICovXG4gICAgZ2V0IGdlbmVyaWMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZ2VuZXJpYztcbiAgICB9XG4gICAgc2V0IGdlbmVyaWModmFsdWUpIHtcbiAgICAgIGlmICgnZ2VuZXJpYycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuZ2VuZXJpYyA9IHZhbHVlOyB9XG4gICAgICAvLyBXZSByb2xsIG91ciBvd24gYXR0cmlidXRlIHNldHRpbmcgc28gdGhhdCBhbiBleHBsaWNpdGx5IGZhbHNlIHZhbHVlXG4gICAgICAvLyBzaG93cyB1cCBhcyBnZW5lcmljPVwiZmFsc2VcIi5cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhbHVlID0gKHZhbHVlICE9PSAnZmFsc2UnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2dlbmVyaWMgPSB2YWx1ZTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgLy8gRXhwbGljaXRseSB1c2UgZmFsc2Ugc3RyaW5nLlxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZ2VuZXJpYycsICdmYWxzZScpO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgIC8vIEV4cGxpY2l0bHkgcmVtb3ZlIGF0dHJpYnV0ZS5cbiAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2dlbmVyaWMnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFVzZSB0aGUgZW1wdHkgc3RyaW5nIHRvIGdldCBhdHRyaWJ1dGUgdG8gYXBwZWFyIHdpdGggbm8gdmFsdWUuXG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdnZW5lcmljJywgJycpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIEdlbmVyaWM7XG59O1xuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBJdGVtc1NlbGVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hbmFnZXMgc2luZ2xlLXNlbGVjdGlvbiBzZW1hbnRpY3MgZm9yIGl0ZW1zIGluIGEgbGlzdC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGEgY29tcG9uZW50IHRvIHByb3ZpZGUgYW4gYGl0ZW1zYCBhcnJheSBvZiBhbGwgZWxlbWVudHNcbiAgICogaW4gdGhlIGxpc3QuIEEgc3RhbmRhcmQgd2F5IHRvIGRvIHRoYXQgd2l0aCBpcyB0aGUgQ29udGVudEFzSXRlbXMgbWl4aW4sXG4gICAqIHdoaWNoIHRha2VzIGEgY29tcG9uZW50J3MgY29udGVudCAodHlwaWNhbGx5IGl0cyBkaXN0cmlidXRlZCBjaGlsZHJlbikgYXNcbiAgICogdGhlIHNldCBvZiBsaXN0IGl0ZW1zOyBzZWUgdGhhdCBtaXhpbiBmb3IgZGV0YWlscy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiB0cmFja3MgYSBzaW5nbGUgc2VsZWN0ZWQgaXRlbSBpbiB0aGUgbGlzdCwgYW5kIHByb3ZpZGVzIG1lYW5zIHRvXG4gICAqIGdldCBhbmQgc2V0IHRoYXQgc3RhdGUgYnkgaXRlbSBwb3NpdGlvbiAoYHNlbGVjdGVkSW5kZXhgKSBvciBpdGVtIGlkZW50aXR5XG4gICAqIChgc2VsZWN0ZWRJdGVtYCkuIFRoZSBzZWxlY3Rpb24gY2FuIGJlIG1vdmVkIGluIHRoZSBsaXN0IHZpYSB0aGUgbWV0aG9kc1xuICAgKiBgc2VsZWN0Rmlyc3RgLCBgc2VsZWN0TGFzdGAsIGBzZWxlY3ROZXh0YCwgYW5kIGBzZWxlY3RQcmV2aW91c2AuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZG9lcyBub3QgcHJvZHVjZSBhbnkgdXNlci12aXNpYmxlIGVmZmVjdHMgdG8gcmVwcmVzZW50XG4gICAqIHNlbGVjdGlvbi4gT3RoZXIgbWl4aW5zLCBzdWNoIGFzIFNlbGVjdGlvbkFyaWFBY3RpdmUsIFNlbGVjdGlvbkhpZ2hsaWdodFxuICAgKiBhbmQgU2VsZWN0aW9uSW5WaWV3LCBtb2RpZnkgdGhlIHNlbGVjdGVkIGl0ZW0gaW4gY29tbW9uIHdheXMgdG8gbGV0IHRoZVxuICAgKiB1c2VyIGtub3cgYSBnaXZlbiBpdGVtIGlzIHNlbGVjdGVkIG9yIG5vdCBzZWxlY3RlZC5cbiAgICovXG4gIGNsYXNzIEl0ZW1zU2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKipcbiAgICAgKiBBcHBseSB0aGUgaW5kaWNhdGUgc2VsZWN0aW9uIHN0YXRlIHRvIHRoZSBpdGVtLlxuICAgICAqXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLiBVc2VyLXZpc2libGVcbiAgICAgKiBlZmZlY3RzIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbSAtIHRoZSBpdGVtIGJlaW5nIHNlbGVjdGVkL2Rlc2VsZWN0ZWRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNlbGVjdGVkIC0gdHJ1ZSBpZiB0aGUgaXRlbSBpcyBzZWxlY3RlZCwgZmFsc2UgaWYgbm90XG4gICAgICovXG4gICAgYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpIHtcbiAgICAgIGlmIChzdXBlci5hcHBseVNlbGVjdGlvbikgeyBzdXBlci5hcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBzZWxlY3Rpb24gY2FuIGJlIG1vdmVkIHRvIHRoZSBuZXh0IGl0ZW0sIGZhbHNlIGlmIG5vdCAodGhlXG4gICAgICogc2VsZWN0ZWQgaXRlbSBpcyB0aGUgbGFzdCBpdGVtIGluIHRoZSBsaXN0KS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIGdldCBjYW5TZWxlY3ROZXh0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NhblNlbGVjdE5leHQ7XG4gICAgfVxuICAgIHNldCBjYW5TZWxlY3ROZXh0KGNhblNlbGVjdE5leHQpIHtcbiAgICAgIGlmICgnY2FuU2VsZWN0TmV4dCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuY2FuU2VsZWN0TmV4dCA9IGNhblNlbGVjdE5leHQ7IH1cbiAgICAgIHRoaXMuX2NhblNlbGVjdE5leHQgPSBjYW5TZWxlY3ROZXh0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIHNlbGVjdGlvbiBjYW4gYmUgbW92ZWQgdG8gdGhlIHByZXZpb3VzIGl0ZW0sIGZhbHNlIGlmIG5vdFxuICAgICAqICh0aGUgc2VsZWN0ZWQgaXRlbSBpcyB0aGUgZmlyc3Qgb25lIGluIHRoZSBsaXN0KS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIGdldCBjYW5TZWxlY3RQcmV2aW91cygpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jYW5TZWxlY3RQcmV2aW91cztcbiAgICB9XG4gICAgc2V0IGNhblNlbGVjdFByZXZpb3VzKGNhblNlbGVjdFByZXZpb3VzKSB7XG4gICAgICBpZiAoJ2NhblNlbGVjdFByZXZpb3VzJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5jYW5TZWxlY3RQcmV2aW91cyA9IGNhblNlbGVjdFByZXZpb3VzOyB9XG4gICAgICB0aGlzLl9jYW5TZWxlY3RQcmV2aW91cyA9IGNhblNlbGVjdFByZXZpb3VzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBhIG5ldyBpdGVtIGJlaW5nIGFkZGVkIHRvIHRoZSBsaXN0LlxuICAgICAqXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2Qgc2ltcGx5IHNldHMgdGhlIGl0ZW0nc1xuICAgICAqIHNlbGVjdGlvbiBzdGF0ZSB0byBmYWxzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW0gLSB0aGUgaXRlbSBiZWluZyBhZGRlZFxuICAgICAqL1xuICAgIGl0ZW1BZGRlZChpdGVtKSB7XG4gICAgICBpZiAoc3VwZXIuaXRlbUFkZGVkKSB7IHN1cGVyLml0ZW1BZGRlZChpdGVtKTsgfVxuICAgICAgdGhpcy5hcHBseVNlbGVjdGlvbihpdGVtLCBpdGVtID09PSB0aGlzLnNlbGVjdGVkSXRlbSk7XG4gICAgfVxuXG4gICAgaXRlbXNDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLml0ZW1zQ2hhbmdlZCkgeyBzdXBlci5pdGVtc0NoYW5nZWQoKTsgfVxuICAgICAgbGV0IGluZGV4ID0gdGhpcy5pdGVtcy5pbmRleE9mKHRoaXMuc2VsZWN0ZWRJdGVtKTtcbiAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgLy8gU2VsZWN0ZWQgaXRlbSBpcyBubyBsb25nZXIgaW4gdGhlIGN1cnJlbnQgc2V0IG9mIGl0ZW1zLlxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvblJlcXVpcmVkKSB7XG4gICAgICAgICAgLy8gRW5zdXJlIHNlbGVjdGlvbiwgYnV0IGRvIHRoaXMgaW4gdGhlIG5leHQgdGljayB0byBnaXZlIG90aGVyXG4gICAgICAgICAgLy8gbWl4aW5zIGEgY2hhbmNlIHRvIGRvIHRoZWlyIG93biBpdGVtc0NoYW5nZWQgd29yay5cbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZW5zdXJlU2VsZWN0aW9uKHRoaXMpO1xuICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNoYW5nZSBpbiBpdGVtcyBtYXkgaGF2ZSBhZmZlY3RlZCB3aGljaCBuYXZpZ2F0aW9ucyBhcmUgcG9zc2libGUuXG4gICAgICB1cGRhdGVQb3NzaWJsZU5hdmlnYXRpb25zKHRoaXMsIGluZGV4KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5kZXggb2YgdGhlIGl0ZW0gd2hpY2ggaXMgY3VycmVudGx5IHNlbGVjdGVkLCBvciAtMSBpZiB0aGVyZSBpcyBub1xuICAgICAqIHNlbGVjdGlvbi5cbiAgICAgKlxuICAgICAqIFNldHRpbmcgdGhlIGluZGV4IHRvIC0xIGRlc2VsZWN0cyBhbnkgY3VycmVudC1zZWxlY3RlZCBpdGVtLlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICAgIGxldCBzZWxlY3RlZEl0ZW0gPSB0aGlzLnNlbGVjdGVkSXRlbTtcblxuICAgICAgaWYgKHNlbGVjdGVkSXRlbSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cblxuICAgICAgLy8gVE9ETzogTWVtb2l6ZVxuICAgICAgbGV0IGluZGV4ID0gdGhpcy5pdGVtcy5pbmRleE9mKHNlbGVjdGVkSXRlbSk7XG5cbiAgICAgIC8vIElmIGluZGV4ID0gLTEsIHNlbGVjdGlvbiB3YXNuJ3QgZm91bmQuIE1vc3QgbGlrZWx5IGNhdXNlIGlzIHRoYXQgdGhlXG4gICAgICAvLyBET00gd2FzIG1hbmlwdWxhdGVkIGZyb20gdW5kZXJuZWF0aCB1cy5cbiAgICAgIC8vIFRPRE86IE9uY2Ugd2UgdHJhY2sgY29udGVudCBjaGFuZ2VzLCB0dXJuIHRoaXMgaW50byBhbiBleGNlcHRpb24uXG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEluZGV4KGluZGV4KSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkSW5kZXgnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSW5kZXggPSBpbmRleDsgfVxuICAgICAgbGV0IGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICAgIGxldCBpdGVtO1xuICAgICAgaWYgKGluZGV4IDwgMCB8fCBpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaXRlbSA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtID0gaXRlbXNbaW5kZXhdO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuXG4gICAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3NlbGVjdGVkLWluZGV4LWNoYW5nZWQnLCB7XG4gICAgICAgIGRldGFpbDoge1xuICAgICAgICAgIHNlbGVjdGVkSW5kZXg6IGluZGV4LFxuICAgICAgICAgIHZhbHVlOiBpbmRleCAvLyBmb3IgUG9seW1lciBiaW5kaW5nXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0sIG9yIG51bGwgaWYgdGhlcmUgaXMgbm8gc2VsZWN0aW9uLlxuICAgICAqXG4gICAgICogU2V0dGluZyB0aGlzIHByb3BlcnR5IHRvIG51bGwgZGVzZWxlY3RzIGFueSBjdXJyZW50bHktc2VsZWN0ZWQgaXRlbS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEl0ZW0gfHwgbnVsbDtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkSXRlbShpdGVtKSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkSXRlbScgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtID0gaXRlbTsgfVxuICAgICAgbGV0IHByZXZpb3VzSXRlbSA9IHRoaXMuX3NlbGVjdGVkSXRlbTtcbiAgICAgIGlmIChwcmV2aW91c0l0ZW0pIHtcbiAgICAgICAgLy8gUmVtb3ZlIHByZXZpb3VzIHNlbGVjdGlvbi5cbiAgICAgICAgdGhpcy5hcHBseVNlbGVjdGlvbihwcmV2aW91c0l0ZW0sIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgLy8gVE9ETzogQ29uZmlybSBpdGVtIGlzIGFjdHVhbGx5IGluIHRoZSBsaXN0IGJlZm9yZSBzZWxlY3RpbmcuXG4gICAgICB0aGlzLl9zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5hcHBseVNlbGVjdGlvbihpdGVtLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgLy8gVE9ETzogUmF0aW9uYWxpemUgd2l0aCBzZWxlY3RlZEluZGV4IHNvIHdlJ3JlIG5vdCByZWNhbGN1bGF0aW5nIGl0ZW1cbiAgICAgIC8vIG9yIGluZGV4IGluIGVhY2ggc2V0dGVyLlxuICAgICAgbGV0IGluZGV4ID0gdGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pO1xuICAgICAgdXBkYXRlUG9zc2libGVOYXZpZ2F0aW9ucyh0aGlzLCBpbmRleCk7XG5cbiAgICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnc2VsZWN0ZWQtaXRlbS1jaGFuZ2VkJywge1xuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICBzZWxlY3RlZEl0ZW06IGl0ZW0sXG4gICAgICAgICAgcHJldmlvdXNJdGVtOiBwcmV2aW91c0l0ZW0sXG4gICAgICAgICAgdmFsdWU6IGl0ZW0gLy8gZm9yIFBvbHltZXIgYmluZGluZ1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBmaXJzdCBpdGVtIGluIHRoZSBsaXN0LlxuICAgICAqL1xuICAgIHNlbGVjdEZpcnN0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdEZpcnN0KSB7IHN1cGVyLnNlbGVjdEZpcnN0KCk7IH1cbiAgICAgIHJldHVybiBzZWxlY3RJbmRleCh0aGlzLCAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBsaXN0IHNob3VsZCBhbHdheXMgaGF2ZSBhIHNlbGVjdGlvbiAoaWYgaXQgaGFzIGl0ZW1zKS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIGdldCBzZWxlY3Rpb25SZXF1aXJlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zZWxlY3Rpb25SZXF1aXJlZDtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGlvblJlcXVpcmVkKHNlbGVjdGlvblJlcXVpcmVkKSB7XG4gICAgICBpZiAoJ3NlbGVjdGlvblJlcXVpcmVkJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3Rpb25SZXF1aXJlZCA9IHNlbGVjdGlvblJlcXVpcmVkOyB9XG4gICAgICB0aGlzLl9zZWxlY3Rpb25SZXF1aXJlZCA9IHNlbGVjdGlvblJlcXVpcmVkO1xuICAgICAgZW5zdXJlU2VsZWN0aW9uKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCB0aGUgbGFzdCBpdGVtIGluIHRoZSBsaXN0LlxuICAgICAqL1xuICAgIHNlbGVjdExhc3QoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0TGFzdCkgeyBzdXBlci5zZWxlY3RMYXN0KCk7IH1cbiAgICAgIHJldHVybiBzZWxlY3RJbmRleCh0aGlzLCB0aGlzLml0ZW1zLmxlbmd0aCAtIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCB0aGUgbmV4dCBpdGVtIGluIHRoZSBsaXN0LlxuICAgICAqL1xuICAgIHNlbGVjdE5leHQoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0TmV4dCkgeyBzdXBlci5zZWxlY3ROZXh0KCk7IH1cbiAgICAgIHJldHVybiBzZWxlY3RJbmRleCh0aGlzLCB0aGlzLnNlbGVjdGVkSW5kZXggKyAxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgdGhlIHByZXZpb3VzIGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAgICovXG4gICAgc2VsZWN0UHJldmlvdXMoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0UHJldmlvdXMpIHsgc3VwZXIuc2VsZWN0UHJldmlvdXMoKTsgfVxuICAgICAgcmV0dXJuIHNlbGVjdEluZGV4KHRoaXMsIHRoaXMuc2VsZWN0ZWRJbmRleCAtIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpcmVzIHdoZW4gdGhlIHNlbGVjdGVkSXRlbSBwcm9wZXJ0eSBjaGFuZ2VzLlxuICAgICAqXG4gICAgICogQGV2ZW50IHNlbGVjdGVkLWl0ZW0tY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRldGFpbC5zZWxlY3RlZEl0ZW0gVGhlIG5ldyBzZWxlY3RlZCBpdGVtLlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRldGFpbC5wcmV2aW91c0l0ZW0gVGhlIHByZXZpb3VzbHkgc2VsZWN0ZWQgaXRlbS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEZpcmVzIHdoZW4gdGhlIHNlbGVjdGVkSW5kZXggcHJvcGVydHkgY2hhbmdlcy5cbiAgICAgKlxuICAgICAqIEBldmVudCBzZWxlY3RlZC1pdGVtLWNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGV0YWlsLnNlbGVjdGVkSW5kZXggVGhlIG5ldyBzZWxlY3RlZCBpbmRleC5cbiAgICAgKi9cblxuICB9XG5cbiAgcmV0dXJuIEl0ZW1zU2VsZWN0aW9uO1xufTtcblxuXG4vLyBJZiBubyBpdGVtIGlzIHNlbGVjdGVkLCBzZWxlY3QgYSBkZWZhdWx0IGl0ZW0uXG4vLyBUT0RPOiBJZiB0aGUgcHJldmlvdXNseS1zZWxlY3RlZCBpdGVtIGhhcyBiZWVuIGRlbGV0ZWQsIHRyeSB0byBzZWxlY3QgYW5cbi8vIGl0ZW0gYWRqYWNlbnQgdG8gdGhlIHBvc2l0aW9uIGl0IGhlbGQuXG5mdW5jdGlvbiBlbnN1cmVTZWxlY3Rpb24oZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQuc2VsZWN0ZWRJdGVtICYmIGVsZW1lbnQuaXRlbXMgJiYgZWxlbWVudC5pdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgZWxlbWVudC5zZWxlY3RlZEluZGV4ID0gMDtcbiAgfVxufVxuXG4vLyBFbnN1cmUgdGhlIGdpdmVuIGluZGV4IGlzIHdpdGhpbiBib3VuZHMsIGFuZCBzZWxlY3QgaXQgaWYgaXQncyBub3QgYWxyZWFkeVxuLy8gc2VsZWN0ZWQuXG5mdW5jdGlvbiBzZWxlY3RJbmRleChlbGVtZW50LCBpbmRleCkge1xuICBsZXQgYm91bmRlZEluZGV4ID0gTWF0aC5tYXgoTWF0aC5taW4oaW5kZXgsIGVsZW1lbnQuaXRlbXMubGVuZ3RoIC0gMSksIDApO1xuICBsZXQgcHJldmlvdXNJbmRleCA9IGVsZW1lbnQuc2VsZWN0ZWRJbmRleDtcbiAgaWYgKHByZXZpb3VzSW5kZXggIT09IGJvdW5kZWRJbmRleCkge1xuICAgIGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IGJvdW5kZWRJbmRleDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLy8gRm9sbG93aW5nIGEgY2hhbmdlIGluIHNlbGVjdGlvbiwgcmVwb3J0IHdoZXRoZXIgaXQncyBub3cgcG9zc2libGUgdG9cbi8vIGdvIG5leHQvcHJldmlvdXMgZnJvbSB0aGUgZ2l2ZW4gaW5kZXguXG5mdW5jdGlvbiB1cGRhdGVQb3NzaWJsZU5hdmlnYXRpb25zKGVsZW1lbnQsIGluZGV4KSB7XG4gIGxldCBjYW5TZWxlY3ROZXh0O1xuICBsZXQgY2FuU2VsZWN0UHJldmlvdXM7XG4gIGxldCBpdGVtcyA9IGVsZW1lbnQuaXRlbXM7XG4gIGlmIChpdGVtcyA9PSBudWxsIHx8IGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgIGNhblNlbGVjdE5leHQgPSBmYWxzZTtcbiAgICBjYW5TZWxlY3RQcmV2aW91cyA9IGZhbHNlO1xuICB9IGVsc2UgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMSkge1xuICAgIC8vIFNwZWNpYWwgY2FzZS4gSWYgdGhlcmUncyBubyBzZWxlY3Rpb24sIHdlIGRlY2xhcmUgdGhhdCBpdCdzIGFsd2F5c1xuICAgIC8vIHBvc3NpYmxlIHRvIGdvIG5leHQvcHJldmlvdXMgdG8gY3JlYXRlIGEgc2VsZWN0aW9uLlxuICAgIGNhblNlbGVjdE5leHQgPSB0cnVlO1xuICAgIGNhblNlbGVjdFByZXZpb3VzID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICAvLyBOb3JtYWwgY2FzZTogd2UgaGF2ZSBhbiBpbmRleCBpbiBhIGxpc3QgdGhhdCBoYXMgaXRlbXMuXG4gICAgY2FuU2VsZWN0UHJldmlvdXMgPSAoaW5kZXggPiAwKTtcbiAgICBjYW5TZWxlY3ROZXh0ID0gKGluZGV4IDwgaXRlbXMubGVuZ3RoIC0gMSk7XG4gIH1cbiAgZWxlbWVudC5jYW5TZWxlY3ROZXh0ID0gY2FuU2VsZWN0TmV4dDtcbiAgZWxlbWVudC5jYW5TZWxlY3RQcmV2aW91cyA9IGNhblNlbGVjdFByZXZpb3VzO1xufVxuIiwiLy8gVE9ETzogUHJvdmlkZSBiYXNlbGluZSBiZWhhdmlvciBmb3IgdGhpcyBtaXhpbiB3aGVuIHVzZWQgb3V0c2lkZSBvZiBhXG4vLyBjb2xsZWN0aXZlLlxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEtleWJvYXJkLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFuYWdlcyB0aGUga2V5ZG93biBoYW5kbGluZyBmb3IgYSBjb21wb25lbnQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaGFuZGxlcyBzZXZlcmFsIGtleWJvYXJkLXJlbGF0ZWQgZmVhdHVyZXMuXG4gICAqXG4gICAqIEZpcnN0LCBpdCB3aXJlcyB1cCBhIHNpbmdsZSBrZXlkb3duIGV2ZW50IGhhbmRsZXIgdGhhdCBjYW4gYmUgc2hhcmVkIGJ5XG4gICAqIG11bHRpcGxlIG1peGlucyBvbiBhIGNvbXBvbmVudC4gVGhlIGV2ZW50IGhhbmRsZXIgd2lsbCBpbnZva2UgYSBga2V5ZG93bmBcbiAgICogbWV0aG9kIHdpdGggdGhlIGV2ZW50IG9iamVjdCwgYW5kIGFueSBtaXhpbiBhbG9uZyB0aGUgcHJvdG90eXBlIGNoYWluIHRoYXRcbiAgICogd2FudHMgdG8gaGFuZGxlIHRoYXQgbWV0aG9kIGNhbiBkbyBzby5cbiAgICpcbiAgICogSWYgYSBtaXhpbiB3YW50cyB0byBpbmRpY2F0ZSB0aGF0IGtleWJvYXJkIGV2ZW50IGhhcyBiZWVuIGhhbmRsZWQsIGFuZCB0aGF0XG4gICAqIG90aGVyIG1peGlucyBzaG91bGQgKm5vdCogaGFuZGxlIGl0LCB0aGUgbWl4aW4ncyBga2V5ZG93bmAgaGFuZGxlciBzaG91bGRcbiAgICogcmV0dXJuIGEgdmFsdWUgb2YgdHJ1ZS4gVGhlIGNvbnZlbnRpb24gdGhhdCBzZWVtcyB0byB3b3JrIHdlbGwgaXMgdGhhdCBhXG4gICAqIG1peGluIHNob3VsZCBzZWUgaWYgaXQgd2FudHMgdG8gaGFuZGxlIHRoZSBldmVudCBhbmQsIGlmIG5vdCwgdGhlbiBhc2sgdGhlXG4gICAqIHN1cGVyY2xhc3MgdG8gc2VlIGlmIGl0IHdhbnRzIHRvIGhhbmRsZSB0aGUgZXZlbnQuIFRoaXMgaGFzIHRoZSBlZmZlY3Qgb2ZcbiAgICogZ2l2aW5nIHRoZSBtaXhpbiB0aGF0IHdhcyBhcHBsaWVkIGxhc3QgdGhlIGZpcnN0IGNoYW5jZSBhdCBoYW5kbGluZyBhXG4gICAqIGtleWJvYXJkIGV2ZW50LlxuICAgKlxuICAgKiBFeGFtcGxlOlxuICAgKlxuICAgKiAgICAga2V5ZG93bihldmVudCkge1xuICAgKiAgICAgICBsZXQgaGFuZGxlZDtcbiAgICogICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAqICAgICAgICAgLy8gSGFuZGxlIHRoZSBrZXlzIHlvdSB3YW50LCBzZXR0aW5nIGhhbmRsZWQgPSB0cnVlIGlmIGFwcHJvcHJpYXRlLlxuICAgKiAgICAgICB9XG4gICAqICAgICAgIC8vIFByZWZlciBtaXhpbiByZXN1bHQgaWYgaXQncyBkZWZpbmVkLCBvdGhlcndpc2UgdXNlIGJhc2UgcmVzdWx0LlxuICAgKiAgICAgICByZXR1cm4gaGFuZGxlZCB8fCAoc3VwZXIua2V5ZG93biAmJiBzdXBlci5rZXlkb3duKGV2ZW50KSk7XG4gICAqICAgICB9XG4gICAqXG4gICAqIEEgc2Vjb25kIGZlYXR1cmUgcHJvdmlkZWQgYnkgdGhpcyBtaXhpbiBpcyB0aGF0IGl0IGltcGxpY2l0bHkgbWFrZXMgdGhlXG4gICAqIGNvbXBvbmVudCBhIHRhYiBzdG9wIGlmIGl0IGlzbid0IGFscmVhZHksIGJ5IHNldHRpbmcgYHRhYkluZGV4YCB0byAwLiBUaGlzXG4gICAqIGhhcyB0aGUgZWZmZWN0IG9mIGFkZGluZyB0aGUgY29tcG9uZW50IHRvIHRoZSB0YWIgb3JkZXIgaW4gZG9jdW1lbnQgb3JkZXIuXG4gICAqXG4gICAqIEZpbmFsbHksIHRoaXMgbWl4aW4gaXMgZGVzaWduZWQgdG8gd29yayB3aXRoIHRoZSBvcHRpb25hbCBDb2xsZWN0aXZlIGNsYXNzXG4gICAqIHZpYSBhIG1peGluIGxpa2UgVGFyZ2V0SW5Db2xsZWN0aXZlLiBUaGlzIGFsbG93cyBhIHNldCBvZiByZWxhdGVkIGNvbXBvbmVudFxuICAgKiBpbnN0YW5jZXMgdG8gY29vcGVyYXRpdmVseSBoYW5kbGUgdGhlIGtleWJvYXJkLiBTZWUgdGhlIENvbGxlY3RpdmUgY2xhc3NcbiAgICogZm9yIGRldGFpbHMuXG4gICAqL1xuICBjbGFzcyBLZXlib2FyZCBleHRlbmRzIGJhc2Uge1xuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuXG4gICAgICAvLyBBc3N1bWUgdGhpcyBjb21wb25lbnQgaXMgZ29pbmcgdG8gaGFuZGxlIHRoZSBrZXlib2FyZCBvbiBpdHMgb3duLlxuICAgICAgc3RhcnRMaXN0ZW5pbmdUb0tleWRvd24odGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHRoZSBpbmRpY2F0ZWQga2V5Ym9hcmQgZXZlbnQuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuIFRoaXMgd2lsbFxuICAgICAqIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnQgLSB0aGUga2V5Ym9hcmQgZXZlbnRcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBldmVudCB3YXMgaGFuZGxlZFxuICAgICAqL1xuICAgIGtleWRvd24oZXZlbnQpIHtcbiAgICAgIGlmIChzdXBlci5rZXlkb3duKSB7IHJldHVybiBzdXBlci5rZXlkb3duKGV2ZW50KTsgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICogSWYgd2UncmUgbm93IHRoZSBvdXRlcm1vc3QgZWxlbWVudCBvZiB0aGUgY29sbGVjdGl2ZSwgc2V0IHVwIHRvIHJlY2VpdmVcbiAgICAgKiBrZXlib2FyZCBldmVudHMuIElmIHdlJ3JlIG5vIGxvbmdlciB0aGUgb3V0ZXJtb3N0IGVsZW1lbnQsIHN0b3BcbiAgICAgKiBsaXN0ZW5pbmcuXG4gICAgICovXG4gICAgY29sbGVjdGl2ZUNoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuY29sbGVjdGl2ZUNoYW5nZWQpIHsgc3VwZXIuY29sbGVjdGl2ZUNoYW5nZWQoKTsgfVxuXG4gICAgICBpZiAodGhpcy5jb2xsZWN0aXZlLm91dGVybW9zdEVsZW1lbnQgIT09IHRoaXMpIHtcbiAgICAgICAgLy8gV2UncmUgbm8gbG9uZ2VyIHRoZSBvdXRlcm1vc3QgZWxlbWVudDsgc3RvcCBsaXN0ZW5pbmcuXG4gICAgICAgIGlmIChpc0xpc3RlbmluZ1RvS2V5ZG93bih0aGlzKSkge1xuICAgICAgICAgIHN0b3BMaXN0ZW5pbmdUb0tleWRvd24odGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgLy8gU2luY2Ugd2UncmUgZ29pbmcgdG8gaGFuZGxlIHRoZSBrZXlib2FyZCwgc2VlIGlmIHdlIGNhbiBhZG9wdCBhbiBBUklBXG4gICAgICAgIC8vIGxhYmVsIGZyb20gYW4gaW5uZXIgZWxlbWVudCBvZiB0aGUgY29sbGVjdGl2ZS5cbiAgICAgICAgbGV0IGxhYmVsID0gZ2V0Q29sbGVjdGl2ZUFyaWFMYWJlbCh0aGlzLmNvbGxlY3RpdmUpO1xuICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGxhYmVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTGlzdGVuaW5nVG9LZXlkb3duKHRoaXMpKSB7XG4gICAgICAgIHN0YXJ0TGlzdGVuaW5nVG9LZXlkb3duKHRoaXMpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIEtleWJvYXJkO1xufTtcblxuXG4vLyBGaXJlIHRoZSBrZXlkb3duKCkgbWV0aG9kIG9uIHRoZSBlbGVtZW50IG9yIChpZiBpdCBiZWxvbmdzIHRvIGEgY29sbGVjdGl2ZSlcbi8vIGFsbCBlbGVtZW50cyBpbiB0aGUgY29sbGVjdGl2ZS5cbi8vXG4vLyBOb3RlOiB0aGUgdmFsdWUgb2YgJ3RoaXMnIGlzIGJvdW5kIHRvIHRoZSBlbGVtZW50IHdoaWNoIHJlY2VpdmVkIHRoZSBldmVudC5cbmZ1bmN0aW9uIGtleWRvd24oZXZlbnQpIHtcblxuICBsZXQgaGFuZGxlZCA9IGZhbHNlO1xuXG4gIGlmICh0aGlzLmNvbGxlY3RpdmUpIHtcbiAgICAvLyBHaXZlIGNvbGxlY3RpdmUgZWxlbWVudHMgYSBzaG90IGF0IHRoZSBldmVudCwgd29ya2luZyBmcm9tIGlubmVybW9zdCB0b1xuICAgIC8vIG91dGVybW9zdCAodGhpcyBlbGVtZW50KS5cbiAgICBsZXQgZWxlbWVudHMgPSB0aGlzLmNvbGxlY3RpdmUuZWxlbWVudHM7XG4gICAgZm9yIChsZXQgaSA9IGVsZW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuICAgICAgaGFuZGxlZCA9IGVsZW1lbnQua2V5ZG93biAmJiBlbGVtZW50LmtleWRvd24oZXZlbnQpO1xuICAgICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIENvbXBvbmVudCBpcyBoYW5kbGluZyB0aGUga2V5Ym9hcmQgb24gaXRzIG93bi5cbiAgICBoYW5kbGVkID0gdGhpcy5rZXlkb3duKGV2ZW50KTtcbiAgfVxuXG4gIGlmIChoYW5kbGVkKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuXG5cbi8vIFJldHVybiB0aGUgZmlyc3QgQVJJQSBsYWJlbCBkZWZpbmVkIGJ5IHRoZSBjb2xsZWN0aXZlLlxuZnVuY3Rpb24gZ2V0Q29sbGVjdGl2ZUFyaWFMYWJlbChjb2xsZWN0aXZlKSB7XG4gIGxldCBsYWJlbHMgPSBjb2xsZWN0aXZlLmVsZW1lbnRzLm1hcChlbGVtZW50ID0+IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykpO1xuICAvLyBXb3VsZCBwcmVmZXIgdG8gdXNlIEFycmF5LnByb3RvdHlwZS5maW5kIGhlcmUsIGJ1dCBJRSAxMSBkb2Vzbid0IGhhdmUgaXQuXG4gIGxldCBub25OdWxsTGFiZWxzID0gbGFiZWxzLmZpbHRlcihsYWJlbCA9PiBsYWJlbCAhPSBudWxsKTtcbiAgcmV0dXJuIG5vbk51bGxMYWJlbHNbMF07XG59XG5cblxuZnVuY3Rpb24gaXNMaXN0ZW5pbmdUb0tleWRvd24oZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudC5fa2V5ZG93bkxpc3RlbmVyICE9IG51bGw7XG59XG5cblxuZnVuY3Rpb24gc3RhcnRMaXN0ZW5pbmdUb0tleWRvd24oZWxlbWVudCkge1xuICBlbGVtZW50Ll9rZXlkb3duTGlzdGVuZXIgPSBrZXlkb3duLmJpbmQoZWxlbWVudCk7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGVsZW1lbnQuX2tleWRvd25MaXN0ZW5lcik7XG4gIC8vIFNldCBhIGRlZmF1bHQgdGFiIGluZGV4IG9mIDAgKGRvY3VtZW50IG9yZGVyKSBpZiBubyB0YWIgaW5kZXggZXhpc3RzLlxuICAvLyBNUyBFZGdlIHJlcXVpcmVzIHdlIGV4cGxpY2l0bHkgY2hlY2sgZm9yIHByZXNlbmNlIG9mIHRhYmluZGV4IGF0dHJpYnV0ZS5cbiAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpID09IG51bGwgfHwgZWxlbWVudC50YWJJbmRleCA8IDApIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICB9XG59XG5cblxuZnVuY3Rpb24gc3RvcExpc3RlbmluZ1RvS2V5ZG93bihlbGVtZW50KSB7XG4gIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGVsZW1lbnQuX2tleWRvd25MaXN0ZW5lcik7XG4gIGVsZW1lbnQuX2tleWRvd25MaXN0ZW5lciA9IG51bGw7XG4gIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xufVxuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBLZXlib2FyZERpcmVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgZGlyZWN0aW9uIGtleXMgKExlZnQsIFJpZ2h0LCBldGMuKSB0byBkaXJlY3Rpb24gc2VtYW50aWNzXG4gICAqIChnbyBsZWZ0LCBnbyByaWdodCwgZXRjLikuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyB0aGUgY29tcG9uZW50IHRvIGludm9rZSBhIGBrZXlkb3duYCBtZXRob2Qgd2hlbiBhIGtleSBpc1xuICAgKiBwcmVzc2VkLiBZb3UgY2FuIHVzZSB0aGUgS2V5Ym9hcmQgbWl4aW4gZm9yIHRoYXQgcHVycG9zZSwgb3Igd2lyZSB1cCB5b3VyXG4gICAqIG93biBrZXlib2FyZCBoYW5kbGluZyBhbmQgY2FsbCBga2V5ZG93bmAgeW91cnNlbGYuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gY2FsbHMgbWV0aG9kcyBzdWNoIGFzIGBnb0xlZnRgIGFuZCBgZ29SaWdodGAuIFlvdSBjYW4gZGVmaW5lXG4gICAqIHdoYXQgdGhhdCBtZWFucyBieSBpbXBsZW1lbnRpbmcgdGhvc2UgbWV0aG9kcyB5b3Vyc2VsZi4gSWYgeW91IHdhbnQgdG8gdXNlXG4gICAqIGRpcmVjdGlvbiBrZXlzIHRvIG5hdmlnYXRlIGEgc2VsZWN0aW9uLCB1c2UgdGhpcyBtaXhpbiB3aXRoIHRoZVxuICAgKiBEaXJlY3Rpb25TZWxlY3Rpb24gbWl4aW4uXG4gICAqL1xuICBjbGFzcyBLZXlib2FyZERpcmVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIGRvd24uXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIGdvRG93bigpIHtcbiAgICAgIGlmIChzdXBlci5nb0Rvd24pIHsgcmV0dXJuIHN1cGVyLmdvRG93bigpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHRvIHRoZSBlbmQgKGUuZy4sIG9mIGEgbGlzdCkuXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIGdvRW5kKCkge1xuICAgICAgaWYgKHN1cGVyLmdvRW5kKSB7IHJldHVybiBzdXBlci5nb0VuZCgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIGxlZnQuXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIGdvTGVmdCgpIHtcbiAgICAgIGlmIChzdXBlci5nb0xlZnQpIHsgcmV0dXJuIHN1cGVyLmdvTGVmdCgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHJpZ2h0LlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBnb1JpZ2h0KCkge1xuICAgICAgaWYgKHN1cGVyLmdvUmlnaHQpIHsgcmV0dXJuIHN1cGVyLmdvUmlnaHQoKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSB0byB0aGUgc3RhcnQgKGUuZy4sIG9mIGFcbiAgICAgKiBsaXN0KS4gVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIGdvU3RhcnQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29TdGFydCkgeyByZXR1cm4gc3VwZXIuZ29TdGFydCgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHVwLlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBnb1VwKCkge1xuICAgICAgaWYgKHN1cGVyLmdvVXApIHsgcmV0dXJuIHN1cGVyLmdvVXAoKTsgfVxuICAgIH1cblxuICAgIGtleWRvd24oZXZlbnQpIHtcbiAgICAgIGxldCBoYW5kbGVkO1xuICAgICAgLy8gSWdub3JlIExlZnQvUmlnaHQga2V5cyB3aGVuIG1ldGFLZXkgb3IgYWx0S2V5IG1vZGlmaWVyIGlzIGFsc28gcHJlc3NlZCxcbiAgICAgIC8vIGFzIHRoZSB1c2VyIG1heSBiZSB0cnlpbmcgdG8gbmF2aWdhdGUgYmFjayBvciBmb3J3YXJkIGluIHRoZSBicm93c2VyLlxuICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgMzU6IC8vIEVuZFxuICAgICAgICAgIGhhbmRsZWQgPSB0aGlzLmdvRW5kKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzY6IC8vIEhvbWVcbiAgICAgICAgICBoYW5kbGVkID0gdGhpcy5nb1N0YXJ0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzc6IC8vIExlZnRcbiAgICAgICAgICBpZiAoIWV2ZW50Lm1ldGFLZXkgJiYgIWV2ZW50LmFsdEtleSkge1xuICAgICAgICAgICAgaGFuZGxlZCA9IHRoaXMuZ29MZWZ0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM4OiAvLyBVcFxuICAgICAgICAgIGhhbmRsZWQgPSBldmVudC5hbHRLZXkgPyB0aGlzLmdvU3RhcnQoKSA6IHRoaXMuZ29VcCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM5OiAvLyBSaWdodFxuICAgICAgICAgIGlmICghZXZlbnQubWV0YUtleSAmJiAhZXZlbnQuYWx0S2V5KSB7XG4gICAgICAgICAgICBoYW5kbGVkID0gdGhpcy5nb1JpZ2h0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQwOiAvLyBEb3duXG4gICAgICAgICAgaGFuZGxlZCA9IGV2ZW50LmFsdEtleSA/IHRoaXMuZ29FbmQoKSA6IHRoaXMuZ29Eb3duKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICAvLyBQcmVmZXIgbWl4aW4gcmVzdWx0IGlmIGl0J3MgZGVmaW5lZCwgb3RoZXJ3aXNlIHVzZSBiYXNlIHJlc3VsdC5cbiAgICAgIHJldHVybiBoYW5kbGVkIHx8IChzdXBlci5rZXlkb3duICYmIHN1cGVyLmtleWRvd24oZXZlbnQpKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBLZXlib2FyZERpcmVjdGlvbjtcbn07XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEtleWJvYXJkUGFnZWRTZWxlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYXBzIHBhZ2Uga2V5cyAoUGFnZSBVcCwgUGFnZSBEb3duKSBpbnRvIG9wZXJhdGlvbnMgdGhhdCBtb3ZlXG4gICAqIHRoZSBzZWxlY3Rpb24gYnkgb25lIHBhZ2UuXG4gICAqXG4gICAqIFRoZSBrZXlib2FyZCBpbnRlcmFjdGlvbiBtb2RlbCBnZW5lcmFsbHkgZm9sbG93cyB0aGF0IG9mIE1pY3Jvc29mdCBXaW5kb3dzJ1xuICAgKiBsaXN0IGJveGVzIGluc3RlYWQgb2YgdGhvc2UgaW4gT1MgWDpcbiAgICpcbiAgICogKiBUaGUgUGFnZSBVcC9Eb3duIGFuZCBIb21lL0VuZCBrZXlzIGFjdHVhbGx5IGNoYW5nZSB0aGUgc2VsZWN0aW9uLCByYXRoZXJcbiAgICogICB0aGFuIGp1c3Qgc2Nyb2xsaW5nLiBUaGUgZm9ybWVyIGJlaGF2aW9yIHNlZW1zIG1vcmUgZ2VuZXJhbGx5IHVzZWZ1bCBmb3JcbiAgICogICBrZXlib2FyZCB1c2Vycy5cbiAgICpcbiAgICogKiBQcmVzc2luZyBQYWdlIFVwL0Rvd24gd2lsbCBjaGFuZ2UgdGhlIHNlbGVjdGlvbiB0byB0aGUgdG9wbW9zdC9ib3R0b21tb3N0XG4gICAqICAgdmlzaWJsZSBpdGVtIGlmIHRoZSBzZWxlY3Rpb24gaXMgbm90IGFscmVhZHkgdGhlcmUuIFRoZXJlYWZ0ZXIsIHRoZSBrZXlcbiAgICogICB3aWxsIG1vdmUgdGhlIHNlbGVjdGlvbiB1cC9kb3duIGJ5IGEgcGFnZSwgYW5kIChwZXIgdGhlIGFib3ZlIHBvaW50KSBtYWtlXG4gICAqICAgdGhlIHNlbGVjdGVkIGl0ZW0gdmlzaWJsZS5cbiAgICpcbiAgICogVG8gZW5zdXJlIHRoZSBzZWxlY3RlZCBpdGVtIGlzIGluIHZpZXcgZm9sbG93aW5nIHVzZSBvZiBQYWdlIFVwL0Rvd24sIHVzZVxuICAgKiB0aGUgcmVsYXRlZCBTZWxlY3Rpb25JblZpZXcgbWl4aW4uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyB0aGUgY29tcG9uZW50IHRvIGludm9rZSBhIGBrZXlkb3duYCBtZXRob2Qgd2hlbiBhIGtleSBpc1xuICAgKiBwcmVzc2VkLiBZb3UgY2FuIHVzZSB0aGUgS2V5Ym9hcmQgbWl4aW4gZm9yIHRoYXQgcHVycG9zZSwgb3Igd2lyZSB1cCB5b3VyXG4gICAqIG93biBrZXlib2FyZCBoYW5kbGluZyBhbmQgY2FsbCBga2V5ZG93bmAgeW91cnNlbGYuXG4gICAqL1xuICBjbGFzcyBLZXlib2FyZFBhZ2VkU2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBrZXlkb3duKGV2ZW50KSB7XG4gICAgICBsZXQgaGFuZGxlZDtcbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICBjYXNlIDMzOiAvLyBQYWdlIFVwXG4gICAgICAgICAgaGFuZGxlZCA9IHRoaXMucGFnZVVwKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzQ6IC8vIFBhZ2UgRG93blxuICAgICAgICAgIGhhbmRsZWQgPSB0aGlzLnBhZ2VEb3duKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICAvLyBQcmVmZXIgbWl4aW4gcmVzdWx0IGlmIGl0J3MgZGVmaW5lZCwgb3RoZXJ3aXNlIHVzZSBiYXNlIHJlc3VsdC5cbiAgICAgIHJldHVybiBoYW5kbGVkIHx8IChzdXBlci5rZXlkb3duICYmIHN1cGVyLmtleWRvd24oZXZlbnQpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGwgZG93biBvbmUgcGFnZS5cbiAgICAgKi9cbiAgICBwYWdlRG93bigpIHtcbiAgICAgIGlmIChzdXBlci5wYWdlRG93bikgeyBzdXBlci5wYWdlRG93bigpOyB9XG4gICAgICByZXR1cm4gc2Nyb2xsT25lUGFnZSh0aGlzLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGwgdXAgb25lIHBhZ2UuXG4gICAgICovXG4gICAgcGFnZVVwKCkge1xuICAgICAgaWYgKHN1cGVyLnBhZ2VVcCkgeyBzdXBlci5wYWdlVXAoKTsgfVxuICAgICAgcmV0dXJuIHNjcm9sbE9uZVBhZ2UodGhpcywgZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBlbGVtZW50IHRoYXQgc2hvdWxkIGJlIHNjcm9sbGVkIHdpdGggdGhlIFBhZ2UgVXAvRG93biBrZXlzLlxuICAgICAqIERlZmF1bHQgaXMgdGhlIGN1cnJlbnQgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXQgc2Nyb2xsVGFyZ2V0KCkge1xuICAgICAgLy8gUHJlZmVyIGJhc2UgcmVzdWx0LlxuICAgICAgcmV0dXJuICdzY3JvbGxUYXJnZXQnIGluIGJhc2UucHJvdG90eXBlID8gc3VwZXIuc2Nyb2xsVGFyZ2V0IDogdGhpcztcbiAgICB9XG4gICAgc2V0IHNjcm9sbFRhcmdldChlbGVtZW50KSB7XG4gICAgICBpZiAoJ3Njcm9sbFRhcmdldCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2Nyb2xsVGFyZ2V0ID0gZWxlbWVudDsgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBLZXlib2FyZFBhZ2VkU2VsZWN0aW9uO1xufTtcblxuXG4vLyBSZXR1cm4gdGhlIGl0ZW0gd2hvc2UgY29udGVudCBzcGFucyB0aGUgZ2l2ZW4geSBwb3NpdGlvbiAocmVsYXRpdmUgdG8gdGhlXG4vLyB0b3Agb2YgdGhlIGxpc3QncyBzY3JvbGxpbmcgY2xpZW50IGFyZWEpLCBvciBudWxsIGlmIG5vdCBmb3VuZC5cbi8vXG4vLyBJZiBkb3dud2FyZCBpcyB0cnVlLCBtb3ZlIGRvd24gdGhlIGxpc3Qgb2YgaXRlbXMgdG8gZmluZCB0aGUgZmlyc3QgaXRlbVxuLy8gZm91bmQgYXQgdGhlIGdpdmVuIHkgcG9zaXRpb247IGlmIGRvd253YXJkIGlzIGZhbHNlLCBtb3ZlIHVwIHRoZSBsaXN0IG9mXG4vLyBpdGVtcyB0byBmaW5kIHRoZSBsYXN0IGl0ZW0gYXQgdGhhdCBwb3NpdGlvbi5cbmZ1bmN0aW9uIGdldEluZGV4T2ZJdGVtQXRZKGVsZW1lbnQsIHksIGRvd253YXJkKSB7XG4gIGxldCBpdGVtcyA9IGVsZW1lbnQuaXRlbXM7XG4gIGxldCBzdGFydCA9IGRvd253YXJkID8gMCA6IGl0ZW1zLmxlbmd0aCAtIDE7XG4gIGxldCBlbmQgPSBkb3dud2FyZCA/IGl0ZW1zLmxlbmd0aCA6IDA7XG4gIGxldCBzdGVwID0gZG93bndhcmQgPyAxIDogLTE7XG4gIGxldCBzY3JvbGxUYXJnZXQgPSBlbGVtZW50LnNjcm9sbFRhcmdldDtcbiAgbGV0IHRvcE9mQ2xpZW50QXJlYSA9IHNjcm9sbFRhcmdldC5vZmZzZXRUb3AgKyBzY3JvbGxUYXJnZXQuY2xpZW50VG9wO1xuXG4gIC8vIEZpbmQgdGhlIGl0ZW0gc3Bhbm5pbmcgdGhlIGluZGljYXRlZCB5IGNvb3JkaW5hdGUuXG4gIGxldCBpdGVtO1xuICBsZXQgaXRlbUluZGV4ID0gc3RhcnQ7XG4gIGxldCBpdGVtVG9wO1xuICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgd2hpbGUgKGl0ZW1JbmRleCAhPT0gZW5kKSB7XG4gICAgaXRlbSA9IGl0ZW1zW2l0ZW1JbmRleF07XG4gICAgaXRlbVRvcCA9IGl0ZW0ub2Zmc2V0VG9wIC0gdG9wT2ZDbGllbnRBcmVhO1xuICAgIGxldCBpdGVtQm90dG9tID0gaXRlbVRvcCArIGl0ZW0ub2Zmc2V0SGVpZ2h0O1xuICAgIGlmIChpdGVtVG9wIDw9IHkgJiYgaXRlbUJvdHRvbSA+PSB5KSB7XG4gICAgICAvLyBJdGVtIHNwYW5zIHRoZSBpbmRpY2F0ZWQgeSBjb29yZGluYXRlLlxuICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGl0ZW1JbmRleCArPSBzdGVwO1xuICB9XG5cbiAgaWYgKCFmb3VuZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gV2UgbWF5IGhhdmUgZm91bmQgYW4gaXRlbSB3aG9zZSBwYWRkaW5nIHNwYW5zIHRoZSBnaXZlbiB5IGNvb3JkaW5hdGUsXG4gIC8vIGJ1dCB3aG9zZSBjb250ZW50IGlzIGFjdHVhbGx5IGFib3ZlL2JlbG93IHRoYXQgcG9pbnQuXG4gIC8vIFRPRE86IElmIHRoZSBpdGVtIGhhcyBhIGJvcmRlciwgdGhlbiBwYWRkaW5nIHNob3VsZCBiZSBpbmNsdWRlZCBpblxuICAvLyBjb25zaWRlcmluZyBhIGhpdC5cbiAgbGV0IGl0ZW1TdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoaXRlbSk7XG4gIGxldCBpdGVtUGFkZGluZ1RvcCA9IHBhcnNlRmxvYXQoaXRlbVN0eWxlLnBhZGRpbmdUb3ApO1xuICBsZXQgaXRlbVBhZGRpbmdCb3R0b20gPSBwYXJzZUZsb2F0KGl0ZW1TdHlsZS5wYWRkaW5nQm90dG9tKTtcbiAgbGV0IGNvbnRlbnRUb3AgPSBpdGVtVG9wICsgaXRlbS5jbGllbnRUb3AgKyBpdGVtUGFkZGluZ1RvcDtcbiAgbGV0IGNvbnRlbnRCb3R0b20gPSBjb250ZW50VG9wICsgaXRlbS5jbGllbnRIZWlnaHQgLSBpdGVtUGFkZGluZ1RvcCAtIGl0ZW1QYWRkaW5nQm90dG9tO1xuICBpZiAoZG93bndhcmQgJiYgY29udGVudFRvcCA8PSB5IHx8ICFkb3dud2FyZCAmJiBjb250ZW50Qm90dG9tID49IHkpIHtcbiAgICAvLyBUaGUgaW5kaWNhdGVkIGNvb3JkaW5hdGUgaGl0cyB0aGUgYWN0dWFsIGl0ZW0gY29udGVudC5cbiAgICByZXR1cm4gaXRlbUluZGV4O1xuICB9XG4gIGVsc2Uge1xuICAgIC8vIFRoZSBpbmRpY2F0ZWQgY29vcmRpbmF0ZSBmYWxscyB3aXRoaW4gdGhlIGl0ZW0ncyBwYWRkaW5nLiBCYWNrIHVwIHRvXG4gICAgLy8gdGhlIGl0ZW0gYmVsb3cvYWJvdmUgdGhlIGl0ZW0gd2UgZm91bmQgYW5kIHJldHVybiB0aGF0LlxuICAgIHJldHVybiBpdGVtSW5kZXggLSBzdGVwO1xuICB9XG59XG5cbi8vIE1vdmUgYnkgb25lIHBhZ2UgZG93bndhcmQgKGlmIGRvd253YXJkIGlzIHRydWUpLCBvciB1cHdhcmQgKGlmIGZhbHNlKS5cbi8vIFJldHVybiB0cnVlIGlmIHdlIGVuZGVkIHVwIGNoYW5naW5nIHRoZSBzZWxlY3Rpb24sIGZhbHNlIGlmIG5vdC5cbi8vIFRPRE86IEJldHRlciBzdXBwb3J0IGZvciBob3Jpem9udGFsIGxpc3RzLlxuZnVuY3Rpb24gc2Nyb2xsT25lUGFnZShlbGVtZW50LCBkb3dud2FyZCkge1xuXG4gIC8vIERldGVybWluZSB0aGUgaXRlbSB2aXNpYmxlIGp1c3QgYXQgdGhlIGVkZ2Ugb2YgZGlyZWN0aW9uIHdlJ3JlIGhlYWRpbmcuXG4gIC8vIFdlJ2xsIHNlbGVjdCB0aGF0IGl0ZW0gaWYgaXQncyBub3QgYWxyZWFkeSBzZWxlY3RlZC5cbiAgbGV0IHNjcm9sbFRhcmdldCA9IGVsZW1lbnQuc2Nyb2xsVGFyZ2V0O1xuICBsZXQgZWRnZSA9IHNjcm9sbFRhcmdldC5zY3JvbGxUb3AgKyAoZG93bndhcmQgPyBzY3JvbGxUYXJnZXQuY2xpZW50SGVpZ2h0IDogMCk7XG4gIGxldCBpbmRleE9mSXRlbUF0RWRnZSA9IGdldEluZGV4T2ZJdGVtQXRZKGVsZW1lbnQsIGVkZ2UsIGRvd253YXJkKTtcblxuICBsZXQgc2VsZWN0ZWRJbmRleCA9IGVsZW1lbnQuc2VsZWN0ZWRJbmRleDtcbiAgbGV0IG5ld0luZGV4O1xuICBpZiAoaW5kZXhPZkl0ZW1BdEVkZ2UgJiYgc2VsZWN0ZWRJbmRleCA9PT0gaW5kZXhPZkl0ZW1BdEVkZ2UpIHtcbiAgICAvLyBUaGUgaXRlbSBhdCB0aGUgZWRnZSB3YXMgYWxyZWFkeSBzZWxlY3RlZCwgc28gc2Nyb2xsIGluIHRoZSBpbmRpY2F0ZWRcbiAgICAvLyBkaXJlY3Rpb24gYnkgb25lIHBhZ2UuIExlYXZlIHRoZSBuZXcgaXRlbSBhdCB0aGF0IGVkZ2Ugc2VsZWN0ZWQuXG4gICAgbGV0IGRlbHRhID0gKGRvd253YXJkID8gMSA6IC0xKSAqIHNjcm9sbFRhcmdldC5jbGllbnRIZWlnaHQ7XG4gICAgbmV3SW5kZXggPSBnZXRJbmRleE9mSXRlbUF0WShlbGVtZW50LCBlZGdlICsgZGVsdGEsIGRvd253YXJkKTtcbiAgfVxuICBlbHNlIHtcbiAgICAvLyBUaGUgaXRlbSBhdCB0aGUgZWRnZSB3YXNuJ3Qgc2VsZWN0ZWQgeWV0LiBJbnN0ZWFkIG9mIHNjcm9sbGluZywgd2UnbGxcbiAgICAvLyBqdXN0IHNlbGVjdCB0aGF0IGl0ZW0uIFRoYXQgaXMsIHRoZSBmaXJzdCBhdHRlbXB0IHRvIHBhZ2UgdXAvZG93blxuICAgIC8vIHVzdWFsbHkganVzdCBtb3ZlcyB0aGUgc2VsZWN0aW9uIHRvIHRoZSBlZGdlIGluIHRoYXQgZGlyZWN0aW9uLlxuICAgIG5ld0luZGV4ID0gaW5kZXhPZkl0ZW1BdEVkZ2U7XG4gIH1cblxuICBpZiAoIW5ld0luZGV4KSB7XG4gICAgLy8gV2UgY2FuJ3QgZmluZCBhbiBpdGVtIGluIHRoZSBkaXJlY3Rpb24gd2Ugd2FudCB0byB0cmF2ZWwuIFNlbGVjdCB0aGVcbiAgICAvLyBsYXN0IGl0ZW0gKGlmIG1vdmluZyBkb3dud2FyZCkgb3IgZmlyc3QgaXRlbSAoaWYgbW92aW5nIHVwd2FyZCkuXG4gICAgbmV3SW5kZXggPSAoZG93bndhcmQgPyBlbGVtZW50Lml0ZW1zLmxlbmd0aCAtIDEgOiAwKTtcbiAgfVxuXG4gIGlmIChuZXdJbmRleCAhPT0gc2VsZWN0ZWRJbmRleCkge1xuICAgIGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IG5ld0luZGV4O1xuICAgIHJldHVybiB0cnVlOyAvLyBXZSBoYW5kbGVkIHRoZSBwYWdlIHVwL2Rvd24gb3Vyc2VsdmVzLlxuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTsgLy8gV2UgZGlkbid0IGRvIGFueXRoaW5nLlxuICB9XG59XG4iLCIvLyBUT0RPOiBJZiB0aGUgc2VsZWN0aW9uIGlzIGNoYW5nZWQgYnkgc29tZSBvdGhlciBtZWFucyAoZS5nLiwgYXJyb3cga2V5cylcbi8vIG90aGVyIHRoYW4gcHJlZml4IHR5cGluZywgdGhlbiB0aGF0IGFjdCBzaG91bGQgcmVzZXQgdGhlIHByZWZpeC5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBLZXlib2FyZFByZWZpeFNlbGVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHRoYXQgaGFuZGxlcyBsaXN0IGJveC1zdHlsZSBwcmVmaXggdHlwaW5nLCBpbiB3aGljaCB0aGUgdXNlciBjYW4gdHlwZVxuICAgKiBhIHN0cmluZyB0byBzZWxlY3QgdGhlIGZpcnN0IGl0ZW0gdGhhdCBiZWdpbnMgd2l0aCB0aGF0IHN0cmluZy5cbiAgICpcbiAgICogRXhhbXBsZTogc3VwcG9zZSBhIGNvbXBvbmVudCB1c2luZyB0aGlzIG1peGluIGhhcyB0aGUgZm9sbG93aW5nIGl0ZW1zOlxuICAgKlxuICAgKiAgICAgPHNhbXBsZS1saXN0LWNvbXBvbmVudD5cbiAgICogICAgICAgPGRpdj5BcHBsZTwvZGl2PlxuICAgKiAgICAgICA8ZGl2PkFwcmljb3Q8L2Rpdj5cbiAgICogICAgICAgPGRpdj5CYW5hbmE8L2Rpdj5cbiAgICogICAgICAgPGRpdj5CbGFja2JlcnJ5PC9kaXY+XG4gICAqICAgICAgIDxkaXY+Qmx1ZWJlcnJ5PC9kaXY+XG4gICAqICAgICAgIDxkaXY+Q2FudGFsb3VwZTwvZGl2PlxuICAgKiAgICAgICA8ZGl2PkNoZXJyeTwvZGl2PlxuICAgKiAgICAgICA8ZGl2PkxlbW9uPC9kaXY+XG4gICAqICAgICAgIDxkaXY+TGltZTwvZGl2PlxuICAgKiAgICAgPC9zYW1wbGUtbGlzdC1jb21wb25lbnQ+XG4gICAqXG4gICAqIElmIHRoaXMgY29tcG9uZW50IHJlY2VpdmVzIHRoZSBmb2N1cywgYW5kIHRoZSB1c2VyIHByZXNzZXMgdGhlIFwiYlwiIG9yIFwiQlwiXG4gICAqIGtleSwgdGhlIFwiQmFuYW5hXCIgaXRlbSB3aWxsIGJlIHNlbGVjdGVkLCBiZWNhdXNlIGl0J3MgdGhlIGZpcnN0IGl0ZW0gdGhhdFxuICAgKiBtYXRjaGVzIHRoZSBwcmVmaXggXCJiXCIuIChNYXRjaGluZyBpcyBjYXNlLWluc2Vuc2l0aXZlLikgSWYgdGhlIHVzZXIgbm93XG4gICAqIHByZXNzZXMgdGhlIFwibFwiIG9yIFwiTFwiIGtleSBxdWlja2x5LCB0aGUgcHJlZml4IHRvIG1hdGNoIGJlY29tZXMgXCJibFwiLCBzb1xuICAgKiBcIkJsYWNrYmVycnlcIiB3aWxsIGJlIHNlbGVjdGVkLlxuICAgKlxuICAgKiBUaGUgcHJlZml4IHR5cGluZyBmZWF0dXJlIGhhcyBhIG9uZSBzZWNvbmQgdGltZW91dCDigJTCoHRoZSBwcmVmaXggdG8gbWF0Y2hcbiAgICogd2lsbCBiZSByZXNldCBhZnRlciBhIHNlY29uZCBoYXMgcGFzc2VkIHNpbmNlIHRoZSB1c2VyIGxhc3QgdHlwZWQgYSBrZXkuXG4gICAqIElmLCBpbiB0aGUgYWJvdmUgZXhhbXBsZSwgdGhlIHVzZXIgd2FpdHMgYSBzZWNvbmQgYmV0d2VlbiB0eXBpbmcgXCJiXCIgYW5kXG4gICAqIFwibFwiLCB0aGUgcHJlZml4IHdpbGwgYmVjb21lIFwibFwiLCBzbyBcIkxlbW9uXCIgd291bGQgYmUgc2VsZWN0ZWQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyB0aGUgY29tcG9uZW50IHRvIGludm9rZSBhIGBrZXlkb3duYCBtZXRob2Qgd2hlbiBhIGtleSBpc1xuICAgKiBwcmVzc2VkLiBZb3UgY2FuIHVzZSB0aGUgS2V5Ym9hcmQgbWl4aW4gZm9yIHRoYXQgcHVycG9zZSwgb3Igd2lyZSB1cCB5b3VyXG4gICAqIG93biBrZXlib2FyZCBoYW5kbGluZyBhbmQgY2FsbCBga2V5ZG93bmAgeW91cnNlbGYuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gYWxzbyBleHBlY3RzIHRoZSBjb21wb25lbnQgdG8gcHJvdmlkZSBhbiBgaXRlbXNgIHByb3BlcnR5LiBUaGVcbiAgICogYHRleHRDb250ZW50YCBvZiB0aG9zZSBpdGVtcyB3aWxsIGJlIHVzZWQgZm9yIHB1cnBvc2VzIG9mIHByZWZpeCBtYXRjaGluZy5cbiAgICovXG4gIGNsYXNzIEtleWJvYXJkUHJlZml4U2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvLyBUT0RPOiBJZiB0aGUgc2V0IG9mIGl0ZW1zIGlzIGNoYW5nZWQsIHJlc2V0IHRoZSBwcmVmaXguXG4gICAgLy8gaXRlbXNDaGFuZ2VkKCkge1xuICAgIC8vICAgdGhpcy5faXRlbVRleHRDb250ZW50cyA9IG51bGw7XG4gICAgLy8gICByZXNldFR5cGVkUHJlZml4KHRoaXMpO1xuICAgIC8vIH1cblxuICAgIGtleWRvd24oZXZlbnQpIHtcbiAgICAgIGxldCBoYW5kbGVkO1xuICAgICAgbGV0IHJlc2V0UHJlZml4ID0gdHJ1ZTtcblxuICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgODogLy8gQmFja3NwYWNlXG4gICAgICAgICAgaGFuZGxlQmFja3NwYWNlKHRoaXMpO1xuICAgICAgICAgIGhhbmRsZWQgPSB0cnVlO1xuICAgICAgICAgIHJlc2V0UHJlZml4ID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjc6IC8vIEVzY2FwZVxuICAgICAgICAgIGhhbmRsZWQgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGlmICghZXZlbnQuY3RybEtleSAmJiAhZXZlbnQubWV0YUtleSAmJiAhZXZlbnQuYWx0S2V5ICYmXG4gICAgICAgICAgICAgIGV2ZW50LndoaWNoICE9PSAzMiAvKiBTcGFjZSAqLykge1xuICAgICAgICAgICAgaGFuZGxlUGxhaW5DaGFyYWN0ZXIodGhpcywgU3RyaW5nLmZyb21DaGFyQ29kZShldmVudC53aGljaCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXNldFByZWZpeCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzZXRQcmVmaXgpIHtcbiAgICAgICAgcmVzZXRUeXBlZFByZWZpeCh0aGlzKTtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlZmVyIG1peGluIHJlc3VsdCBpZiBpdCdzIGRlZmluZWQsIG90aGVyd2lzZSB1c2UgYmFzZSByZXN1bHQuXG4gICAgICByZXR1cm4gaGFuZGxlZCB8fCAoc3VwZXIua2V5ZG93biAmJiBzdXBlci5rZXlkb3duKGV2ZW50KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBmaXJzdCBpdGVtIHdob3NlIHRleHQgY29udGVudCBiZWdpbnMgd2l0aCB0aGUgZ2l2ZW4gcHJlZml4LlxuICAgICAqXG4gICAgICogQHBhcmFtIHByZWZpeCBbU3RyaW5nXSBUaGUgcHJlZml4IHN0cmluZyB0byBzZWFyY2ggZm9yXG4gICAgICovXG4gICAgc2VsZWN0SXRlbVdpdGhUZXh0UHJlZml4KHByZWZpeCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdEl0ZW1XaXRoVGV4dFByZWZpeCkgeyBzdXBlci5zZWxlY3RJdGVtV2l0aFRleHRQcmVmaXgocHJlZml4KTsgfVxuICAgICAgaWYgKHByZWZpeCA9PSBudWxsIHx8IHByZWZpeC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IGluZGV4ID0gZ2V0SW5kZXhPZkl0ZW1XaXRoVGV4dFByZWZpeCh0aGlzLCBwcmVmaXgpO1xuICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gS2V5Ym9hcmRQcmVmaXhTZWxlY3Rpb247XG59O1xuXG5cbi8vIFRpbWUgaW4gbWlsbGlzZWNvbmRzIGFmdGVyIHdoaWNoIHRoZSB1c2VyIGlzIGNvbnNpZGVyZWQgdG8gaGF2ZSBzdG9wcGVkXG4vLyB0eXBpbmcuXG5jb25zdCBQUkVGSVhfVElNRU9VVF9EVVJBVElPTiA9IDEwMDA7XG5cblxuLy8gUmV0dXJuIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgaXRlbSB3aXRoIHRoZSBnaXZlbiBwcmVmaXgsIGVsc2UgLTEuXG5mdW5jdGlvbiBnZXRJbmRleE9mSXRlbVdpdGhUZXh0UHJlZml4KGVsZW1lbnQsIHByZWZpeCkge1xuICBsZXQgaXRlbVRleHRDb250ZW50cyA9IGdldEl0ZW1UZXh0Q29udGVudHMoZWxlbWVudCk7XG4gIGxldCBwcmVmaXhMZW5ndGggPSBwcmVmaXgubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1UZXh0Q29udGVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgaXRlbVRleHRDb250ZW50ID0gaXRlbVRleHRDb250ZW50c1tpXTtcbiAgICBpZiAoaXRlbVRleHRDb250ZW50LnN1YnN0cigwLCBwcmVmaXhMZW5ndGgpID09PSBwcmVmaXgpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbi8vIFJldHVybiBhbiBhcnJheSBvZiB0aGUgdGV4dCBjb250ZW50IChpbiBsb3dlcmNhc2UpIG9mIGFsbCBpdGVtcy5cbi8vIENhY2hlIHRoZXNlIHJlc3VsdHMuXG5mdW5jdGlvbiBnZXRJdGVtVGV4dENvbnRlbnRzKGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50Ll9pdGVtVGV4dENvbnRlbnRzKSB7XG4gICAgbGV0IGl0ZW1zID0gZWxlbWVudC5pdGVtcztcbiAgICBlbGVtZW50Ll9pdGVtVGV4dENvbnRlbnRzID0gaXRlbXMubWFwKGNoaWxkID0+IHtcbiAgICAgIGxldCB0ZXh0ID0gY2hpbGQudGV4dENvbnRlbnQgfHwgY2hpbGQuYWx0O1xuICAgICAgcmV0dXJuIHRleHQudG9Mb3dlckNhc2UoKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZWxlbWVudC5faXRlbVRleHRDb250ZW50cztcbn1cblxuZnVuY3Rpb24gaGFuZGxlQmFja3NwYWNlKGVsZW1lbnQpIHtcbiAgbGV0IGxlbmd0aCA9IGVsZW1lbnQuX3R5cGVkUHJlZml4ID8gZWxlbWVudC5fdHlwZWRQcmVmaXgubGVuZ3RoIDogMDtcbiAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICBlbGVtZW50Ll90eXBlZFByZWZpeCA9IGVsZW1lbnQuX3R5cGVkUHJlZml4LnN1YnN0cigwLCBsZW5ndGggLSAxKTtcbiAgfVxuICBlbGVtZW50LnNlbGVjdEl0ZW1XaXRoVGV4dFByZWZpeChlbGVtZW50Ll90eXBlZFByZWZpeCk7XG4gIGVsZW1lbnQuX3NldFByZWZpeFRpbWVvdXQoKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUGxhaW5DaGFyYWN0ZXIoZWxlbWVudCwgY2hhcikge1xuICBsZXQgcHJlZml4ID0gZWxlbWVudC5fdHlwZWRQcmVmaXggfHwgJyc7XG4gIGVsZW1lbnQuX3R5cGVkUHJlZml4ID0gcHJlZml4ICsgY2hhci50b0xvd2VyQ2FzZSgpO1xuICBlbGVtZW50LnNlbGVjdEl0ZW1XaXRoVGV4dFByZWZpeChlbGVtZW50Ll90eXBlZFByZWZpeCk7XG4gIHNldFByZWZpeFRpbWVvdXQoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0UHJlZml4VGltZW91dChlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50Ll9wcmVmaXhUaW1lb3V0KSB7XG4gICAgY2xlYXJUaW1lb3V0KGVsZW1lbnQuX3ByZWZpeFRpbWVvdXQpO1xuICAgIGVsZW1lbnQuX3ByZWZpeFRpbWVvdXQgPSBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNldFR5cGVkUHJlZml4KGVsZW1lbnQpIHtcbiAgZWxlbWVudC5fdHlwZWRQcmVmaXggPSAnJztcbiAgcmVzZXRQcmVmaXhUaW1lb3V0KGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBzZXRQcmVmaXhUaW1lb3V0KGVsZW1lbnQpIHtcbiAgcmVzZXRQcmVmaXhUaW1lb3V0KGVsZW1lbnQpO1xuICBlbGVtZW50Ll9wcmVmaXhUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgcmVzZXRUeXBlZFByZWZpeChlbGVtZW50KTtcbiAgfSwgUFJFRklYX1RJTUVPVVRfRFVSQVRJT04pO1xufVxuIiwiaW1wb3J0IG1pY3JvdGFzayBmcm9tICcuL21pY3JvdGFzayc7XG5cbi8vIFRPRE86IFNob3VsZCB0aGlzIGJlIHJlbmFtZWQgdG8gc29tZXRoaW5nIGxpa2UgRGlzdHJpYnV0ZWRDaGlsZHJlbkNoYW5nZWQ/XG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggd2lyZXMgdXAgbXV0YXRpb24gb2JzZXJ2ZXJzIHRvIHJlcG9ydCBhbnkgY2hhbmdlcyBpbiBhXG4gICAqIGNvbXBvbmVudCdzIGNvbnRlbnQgKGRpcmVjdCBjaGlsZHJlbiwgb3Igbm9kZXMgZGlzdHJpYnV0ZWQgdG8gc2xvdHMpLlxuICAgKlxuICAgKiBGb3IgdGhlIHRpbWUgYmVpbmcsIHRoaXMgY2FuIG9ubHkgc3VwcG9ydCBhIHNpbmdsZSBsZXZlbCBvZiBkaXN0cmlidXRlZFxuICAgKiBjb250ZW50LiBUaGF0IGlzLCBpZiBhIGNvbXBvbmVudCBjb250YWlucyBhIHNsb3QsIGFuZCB0aGUgc2V0IG9mIG5vZGVzXG4gICAqIGRpcmVjdGx5IGFzc2lnbmVkIHRvIHRoYXQgc2xvdCBjaGFuZ2VzLCB0aGVuIHRoaXMgbWl4aW4gd2lsbCBkZXRlY3QgdGhlXG4gICAqIGNoYW5nZS4gSG93ZXZlciwgdGhpcyBtaXhpbiBkb2VzIG5vdCB5ZXQgZGV0ZWN0IGNoYW5nZXMgaW4gcmVwcm9qZWN0ZWRcbiAgICogbm9kZXMuIElmIGEgY29tcG9uZW50J3MgaG9zdCBwbGFjZXMgYSBzbG90IGFzIGEgY2hpbGQgb2YgdGhlIGNvbXBvbmVudFxuICAgKiBpbnN0YW5jZSwgbm9kZXMgYXNzaWduZWQgdG8gdGhlIG91dGVyIGhvc3Qgd2lsbCBiZSBhc3NpZ25lZCB0byB0aGUgaG9zdCdzXG4gICAqIHNsb3QsIHRoZW4gcmVhc3NpZ25lZCB0byB0aGUgc2xvdCBlbGVtZW50IGluc2lkZSB0aGUgY29tcG9uZW50LiBDaGFuZ2VzIGluXG4gICAqIHN1Y2ggcmVwcm9qZWN0ZWQgbm9kZXMgd2lsbCBub3QgKHlldCkgYmUgZGV0ZWN0ZWQgYnkgdGhpcyBtaXhpbi5cbiAgICpcbiAgICogRm9yIGNvbXBhcmlzb24sIHNlZSBQb2x5bWVyJ3Mgb2JzZXJ2ZU5vZGVzIEFQSSwgd2hpY2ggZG9lcyBzb2x2ZSB0aGVcbiAgICogcHJvYmxlbSBvZiB0cmFja2luZyBjaGFuZ2VzIGluIHJlcHJvamVjdGVkIGNvbnRlbnQuXG4gICAqXG4gICAqIE5vdGU6IFRoZSB3ZWIgcGxhdGZvcm0gdGVhbSBjcmVhdGluZyB0aGUgc3BlY2lmaWNhdGlvbnMgZm9yIHdlYiBjb21wb25lbnRzXG4gICAqIHBsYW4gdG8gcmVxdWVzdCB0aGF0IGEgbmV3IHR5cGUgb2YgTXV0YXRpb25PYnNlcnZlciBvcHRpb24gYmUgZGVmaW5lZCB0aGF0XG4gICAqIGxldHMgYSBjb21wb25lbnQgbW9uaXRvciBjaGFuZ2VzIGluIGRpc3RyaWJ1dGVkIGNoaWxkcmVuLiBUaGlzIG1peGluIHdpbGxcbiAgICogYmUgdXBkYXRlZCB0byB0YWtlIGFkdmFudGFnZSBvZiB0aGF0IE11dGF0aW9uT2JzZXJ2ZXIgb3B0aW9uIHdoZW4gdGhhdFxuICAgKiBiZWNvbWVzIGF2YWlsYWJsZS5cbiAgICovXG4gIGNsYXNzIE9ic2VydmVDb250ZW50Q2hhbmdlcyBleHRlbmRzIGJhc2Uge1xuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgb2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzKHRoaXMpO1xuXG4gICAgICAvLyBNYWtlIGFuIGluaXRpYWwgY2FsbCB0byBjb250ZW50Q2hhbmdlZCgpIHNvIHRoYXQgdGhlIGNvbXBvbmVudCBjYW4gZG9cbiAgICAgIC8vIGluaXRpYWxpemF0aW9uIHRoYXQgaXQgbm9ybWFsbHkgZG9lcyB3aGVuIGNvbnRlbnQgY2hhbmdlcy5cbiAgICAgIC8vXG4gICAgICAvLyBUaGlzIHdpbGwgaW52b2tlIGNvbnRlbnRDaGFuZ2VkKCkgaGFuZGxlcnMgaW4gb3RoZXIgbWl4aW5zLiBJbiBvcmRlclxuICAgICAgLy8gdGhhdCB0aG9zZSBtaXhpbnMgaGF2ZSBhIGNoYW5jZSB0byBjb21wbGV0ZSB0aGVpciBvd24gaW5pdGlhbGl6YXRpb24sXG4gICAgICAvLyB3ZSBhZGQgdGhlIGNvbnRlbnRDaGFuZ2VkKCkgY2FsbCB0byB0aGUgbWljcm90YXNrIHF1ZXVlLlxuICAgICAgbWljcm90YXNrKCgpID0+IHRoaXMuY29udGVudENoYW5nZWQoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSBjb250ZW50cyBvZiB0aGUgY29tcG9uZW50IChpbmNsdWRpbmcgZGlzdHJpYnV0ZWRcbiAgICAgKiBjaGlsZHJlbikgaGF2ZSBjaGFuZ2VkLlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgaXMgYWxzbyBpbnZva2VkIHdoZW4gYSBjb21wb25lbnQgaXMgZmlyc3QgaW5zdGFudGlhdGVkOyB0aGVcbiAgICAgKiBjb250ZW50cyBoYXZlIGVzc2VudGlhbGx5IFwiY2hhbmdlZFwiIGZyb20gYmVpbmcgbm90aGluZy4gVGhpcyBhbGxvd3MgdGhlXG4gICAgICogY29tcG9uZW50IHRvIHBlcmZvcm0gaW5pdGlhbCBwcm9jZXNzaW5nIG9mIGl0cyBjaGlsZHJlbi5cbiAgICAgKi9cbiAgICBjb250ZW50Q2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5jb250ZW50Q2hhbmdlZCkgeyBzdXBlci5jb250ZW50Q2hhbmdlZCgpOyB9XG4gICAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2NvbnRlbnQtY2hhbmdlZCcpO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIHJhaXNlZCB3aGVuIHRoZSBjb21wb25lbnQncyBjb250ZW50cyAoaW5jbHVkaW5nIGRpc3RyaWJ1dGVkXG4gICAgICogY2hpbGRyZW4pIGhhdmUgY2hhbmdlZC5cbiAgICAgKlxuICAgICAqIEBldmVudCBjb250ZW50LWNoYW5nZWRcbiAgICAgKi9cbiAgfVxuXG4gIHJldHVybiBPYnNlcnZlQ29udGVudENoYW5nZXM7XG59O1xuXG5cbi8vIFRPRE86IERlY2lkZSB3aGV0aGVyIHdlIHdhbnQgYW4gb3B0aW9uIHRvIHRyYWNrIGNoYW5nZXMgdG8gY2hpbGRyZW5cbi8vIGF0dHJpYnV0ZXMuXG5mdW5jdGlvbiBvYnNlcnZlQ29udGVudENoYW5nZXMoZWxlbWVudCkge1xuICBlbGVtZW50Ll9jb250ZW50Q2hhbmdlT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PlxuICAgIGVsZW1lbnQuY29udGVudENoYW5nZWQoKVxuICApO1xuICBlbGVtZW50Ll9jb250ZW50Q2hhbmdlT2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCB7XG4gICAgLy8gYXR0cmlidXRlczogdHJ1ZSxcbiAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxuICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICBzdWJ0cmVlOiB0cnVlXG4gIH0pO1xufVxuIiwiLy8gVXNlZCB0byBhc3NpZ24gdW5pcXVlIElEcyB0byBpdGVtIGVsZW1lbnRzIHdpdGhvdXQgSURzLlxubGV0IGlkQ291bnQgPSAwO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggU2VsZWN0aW9uQXJpYUFjdGl2ZS4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIHRyZWF0cyB0aGUgc2VsZWN0ZWQgaXRlbSBpbiBhIGxpc3QgYXMgdGhlIGFjdGl2ZSBpdGVtIGluIEFSSUFcbiAgICogYWNjZXNzaWJpbGl0eSB0ZXJtcy5cbiAgICpcbiAgICogSGFuZGxpbmcgQVJJQSBzZWxlY3Rpb24gc3RhdGUgcHJvcGVybHkgaXMgYWN0dWFsbHkgcXVpdGUgY29tcGxleDpcbiAgICpcbiAgICogKiBUaGUgaXRlbXMgaW4gdGhlIGxpc3QgbmVlZCB0byBiZSBpbmRpY2F0ZWQgYXMgcG9zc2libGUgaXRlbXMgdmlhIGFuIEFSSUFcbiAgICogICBgcm9sZWAgYXR0cmlidXRlIHZhbHVlIHN1Y2ggYXMgXCJvcHRpb25cIi5cbiAgICogKiBUaGUgc2VsZWN0ZWQgaXRlbSBuZWVkIHRvIGJlIG1hcmtlZCBhcyBzZWxlY3RlZCBieSBzZXR0aW5nIHRoZSBpdGVtJ3NcbiAgICogICBgYXJpYS1zZWxlY3RlZGAgYXR0cmlidXRlIHRvIHRydWUgKmFuZCogdGhlIG90aGVyIGl0ZW1zIG5lZWQgYmUgbWFya2VkIGFzXG4gICAqICAgKm5vdCogc2VsZWN0ZWQgYnkgc2V0dGluZyBgYXJpYS1zZWxlY3RlZGAgdG8gZmFsc2UuXG4gICAqICogVGhlIG91dGVybW9zdCBlbGVtZW50IHdpdGggdGhlIGtleWJvYXJkIGZvY3VzIG5lZWRzIHRvIGhhdmUgYXR0cmlidXRlc1xuICAgKiAgIHNldCBvbiBpdCBzbyB0aGF0IHRoZSBzZWxlY3Rpb24gaXMga25vd2FibGUgYXQgdGhlIGxpc3QgbGV2ZWwgdmlhIHRoZVxuICAgKiAgIGBhcmlhLWFjdGl2ZWRlc2NlbmRhbnRgIGF0dHJpYnV0ZS5cbiAgICogKiBVc2Ugb2YgYGFyaWEtYWN0aXZlZGVzY2VuZGFudGAgaW4gdHVybiByZXF1aXJlcyB0aGF0IGFsbCBpdGVtcyBpbiB0aGVcbiAgICogICBsaXN0IGhhdmUgSUQgYXR0cmlidXRlcyBhc3NpZ25lZCB0byB0aGVtLlxuICAgKlxuICAgKiBUaGlzIG1peGluIHRyaWVzIHRvIGFkZHJlc3MgYWxsIG9mIHRoZSBhYm92ZSByZXF1aXJlbWVudHMuIFRvIHRoYXQgZW5kLFxuICAgKiB0aGlzIG1peGluIHdpbGwgYXNzaWduIGdlbmVyYXRlZCBJRHMgdG8gYW55IGl0ZW0gdGhhdCBkb2Vzbid0IGFscmVhZHkgaGF2ZVxuICAgKiBhbiBJRC5cbiAgICpcbiAgICogQVJJQSByZWxpZXMgb24gZWxlbWVudHMgdG8gcHJvdmlkZSBgcm9sZWAgYXR0cmlidXRlcy4gVGhpcyBtaXhpbiB3aWxsIGFwcGx5XG4gICAqIGEgZGVmYXVsdCByb2xlIG9mIFwibGlzdGJveFwiIG9uIHRoZSBvdXRlciBsaXN0IGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBoYXZlIGFuXG4gICAqIGV4cGxpY2l0IHJvbGUuIFNpbWlsYXJseSwgdGhpcyBtaXhpbiB3aWxsIGFwcGx5IGEgZGVmYXVsdCByb2xlIG9mIFwib3B0aW9uXCJcbiAgICogdG8gYW55IGxpc3QgaXRlbSB0aGF0IGRvZXMgbm90IGFscmVhZHkgaGF2ZSBhIHJvbGUgc3BlY2lmaWVkLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgYSBzZXQgb2YgbWVtYmVycyB0aGF0IG1hbmFnZSB0aGUgc3RhdGUgb2YgdGhlIHNlbGVjdGlvbjpcbiAgICogYGFwcGx5U2VsZWN0aW9uYCwgYGl0ZW1BZGRlZGAsIGFuZCBgc2VsZWN0ZWRJbmRleGAuIFlvdSBjYW4gc3VwcGx5IHRoZXNlXG4gICAqIHlvdXJzZWxmLCBvciBkbyBzbyB2aWEgdGhlIEl0ZW1zU2VsZWN0aW9uIG1peGluLlxuICAgKlxuICAgKiBOT1RFOiBGb3IgdGhlIHRpbWUgYmVpbmcsIHRoaXMgbWl4aW4gc2hvdWxkIGJlIHVzZWQgd2l0aCB0aGVcbiAgICogVGFyZ2V0SW5Db2xsZWN0aXZlIG1peGluLiBUaGUgaW50ZW50aW9uIGlzIHRvIGV2ZW50dWFsbHkgYWxsb3cgdGhpcyBtaXhpblxuICAgKiB0byBiZSB1c2VkIHdpdGhvdXQgcmVxdWlyaW5nIGNvbGxlY3RpdmUga2V5Ym9hcmQgc3VwcG9ydCwgc28gdGhhdCB0aGlzXG4gICAqIG1peGluIGNhbiBiZSB1c2VkIG9uIGl0cyBvd24uXG4gICAqL1xuICBjbGFzcyBTZWxlY3Rpb25BcmlhQWN0aXZlIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBhcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCkge1xuICAgICAgaWYgKHN1cGVyLmFwcGx5U2VsZWN0aW9uKSB7IHN1cGVyLmFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKTsgfVxuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBzZWxlY3RlZCk7XG4gICAgICBsZXQgaXRlbUlkID0gaXRlbS5pZDtcbiAgICAgIGlmIChpdGVtSWQpIHtcbiAgICAgICAgbGV0IG91dGVybW9zdCA9IHRoaXMuY29sbGVjdGl2ZSA/XG4gICAgICAgICAgdGhpcy5jb2xsZWN0aXZlLm91dGVybW9zdEVsZW1lbnQgOlxuICAgICAgICAgIHRoaXM7XG4gICAgICAgIG91dGVybW9zdC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsIGl0ZW1JZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29sbGVjdGl2ZUNoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuY29sbGVjdGl2ZUNoYW5nZWQpIHsgc3VwZXIuY29sbGVjdGl2ZUNoYW5nZWQoKTsgfVxuXG4gICAgICAvLyBFbnN1cmUgdGhlIG91dGVybW9zdCBhc3BlY3QgaGFzIGFuIEFSSUEgcm9sZS5cbiAgICAgIGxldCBvdXRlcm1vc3RFbGVtZW50ID0gdGhpcy5jb2xsZWN0aXZlLm91dGVybW9zdEVsZW1lbnQ7XG4gICAgICBpZiAoIW91dGVybW9zdEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyb2xlJykpIHtcbiAgICAgICAgLy8gVHJ5IHRvIHByb21vdGUgYW4gQVJJQSByb2xlIGZyb20gYW4gaW5uZXIgZWxlbWVudC4gSWYgbm9uZSBpcyBmb3VuZCxcbiAgICAgICAgLy8gdXNlIGEgZGVmYXVsdCByb2xlLlxuICAgICAgICBsZXQgcm9sZSA9IGdldENvbGxlY3RpdmVBcmlhUm9sZSh0aGlzLmNvbGxlY3RpdmUpIHx8ICdsaXN0Ym94JztcbiAgICAgICAgb3V0ZXJtb3N0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCByb2xlKTtcbiAgICAgIH1cbiAgICAgIGlmICghb3V0ZXJtb3N0RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpKSB7XG4gICAgICAgIC8vIFRyeSB0byBwcm9tb3RlIGFuIEFSSUEgYWN0aXZlZGVzY2VuZGFudCB2YWx1ZSBmcm9tIGFuIGlubmVyIGVsZW1lbnQuXG4gICAgICAgIGxldCBkZXNjZW5kYW50ID0gZ2V0Q29sbGVjdGl2ZUFyaWFBY3RpdmVEZXNjZW5kYW50KHRoaXMuY29sbGVjdGl2ZSk7XG4gICAgICAgIGlmIChkZXNjZW5kYW50KSB7XG4gICAgICAgICAgb3V0ZXJtb3N0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsIGRlc2NlbmRhbnQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFJlbW92ZSB0aGUgQVJJQSByb2xlIGFuZCBhY3RpdmVkZXNjZW5kYW50IHZhbHVlcyBmcm9tIHRoZSBjb2xsZWN0aXZlJ3NcbiAgICAgIC8vIGlubmVyIGVsZW1lbnRzLlxuICAgICAgdGhpcy5jb2xsZWN0aXZlLmVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50ICE9PSBvdXRlcm1vc3RFbGVtZW50KSB7XG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdyb2xlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICAgIGlmICghdGhpcy5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgncm9sZScsICdsaXN0Ym94Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaXRlbUFkZGVkKGl0ZW0pIHtcbiAgICAgIGlmIChzdXBlci5pdGVtQWRkZWQpIHsgc3VwZXIuaXRlbUFkZGVkKGl0ZW0pOyB9XG5cbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdyb2xlJywgJ29wdGlvbicpO1xuXG4gICAgICAvLyBFbnN1cmUgZWFjaCBpdGVtIGhhcyBhbiBJRCBzbyB3ZSBjYW4gc2V0IGFyaWEtYWN0aXZlZGVzY2VuZGFudCBvbiB0aGVcbiAgICAgIC8vIG92ZXJhbGwgbGlzdCB3aGVuZXZlciB0aGUgc2VsZWN0aW9uIGNoYW5nZXMuXG4gICAgICAvL1xuICAgICAgLy8gVGhlIElEIHdpbGwgdGFrZSB0aGUgZm9ybSBvZiBhIGJhc2UgSUQgcGx1cyBhIHVuaXF1ZSBpbnRlZ2VyLiBUaGUgYmFzZVxuICAgICAgLy8gSUQgd2lsbCBiZSBpbmNvcnBvcmF0ZSB0aGUgY29tcG9uZW50J3Mgb3duIElELiBFLmcuLCBpZiBhIGNvbXBvbmVudCBoYXNcbiAgICAgIC8vIElEIFwiZm9vXCIsIHRoZW4gaXRzIGl0ZW1zIHdpbGwgaGF2ZSBJRHMgdGhhdCBsb29rIGxpa2UgXCJfZm9vT3B0aW9uMVwiLiBJZlxuICAgICAgLy8gdGhlIGNvbXBuZW50IGhhcyBubyBJRCBpdHNlbGYsIGl0cyBpdGVtcyB3aWxsIGdldCBJRHMgdGhhdCBsb29rIGxpa2VcbiAgICAgIC8vIFwiX29wdGlvbjFcIi4gSXRlbSBJRHMgYXJlIHByZWZpeGVkIHdpdGggYW4gdW5kZXJzY29yZSB0byBkaWZmZXJlbnRpYXRlXG4gICAgICAvLyB0aGVtIGZyb20gbWFudWFsbHktYXNzaWduZWQgSURzLCBhbmQgdG8gbWluaW1pemUgdGhlIHBvdGVudGlhbCBmb3IgSURcbiAgICAgIC8vIGNvbmZsaWN0cy5cbiAgICAgIGlmICghaXRlbS5pZCkge1xuICAgICAgICBsZXQgYmFzZUlkID0gdGhpcy5pZCA/XG4gICAgICAgICAgICBcIl9cIiArIHRoaXMuaWQgKyBcIk9wdGlvblwiIDpcbiAgICAgICAgICAgIFwiX29wdGlvblwiO1xuICAgICAgICBpdGVtLmlkID0gYmFzZUlkICsgaWRDb3VudCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRJdGVtO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgICAvLyBDYXRjaCB0aGUgY2FzZSB3aGVyZSB0aGUgc2VsZWN0aW9uIGlzIHJlbW92ZWQuXG4gICAgICBpZiAoaXRlbSA9PSBudWxsKSB7XG4gICAgICAgIGxldCBvdXRlcm1vc3QgPSB0aGlzLmNvbGxlY3RpdmUgP1xuICAgICAgICAgIHRoaXMuY29sbGVjdGl2ZS5vdXRlcm1vc3RFbGVtZW50IDpcbiAgICAgICAgICB0aGlzO1xuICAgICAgICBvdXRlcm1vc3QucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBTZWxlY3Rpb25BcmlhQWN0aXZlO1xufTtcblxuXG4vLyBSZXR1cm4gdGhlIGZpcnN0IEFSSUEgYWN0aXZlZGVzY2VuZGFudCBkZWZpbmVkIGJ5IHRoZSBjb2xsZWN0aXZlLlxuZnVuY3Rpb24gZ2V0Q29sbGVjdGl2ZUFyaWFBY3RpdmVEZXNjZW5kYW50KGNvbGxlY3RpdmUpIHtcbiAgbGV0IGRlc2NlbmRhbnRzID0gY29sbGVjdGl2ZS5lbGVtZW50cy5tYXAoZWxlbWVudCA9PiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50JykpO1xuICBsZXQgbm9uTnVsbERlc2NlbmRhbnRzID0gZGVzY2VuZGFudHMuZmlsdGVyKGRlc2NlbmRhbnQgPT4gZGVzY2VuZGFudCAhPT0gbnVsbCk7XG4gIHJldHVybiBub25OdWxsRGVzY2VuZGFudHNbMF07XG59XG5cblxuLy8gUmV0dXJuIHRoZSBmaXJzdCBBUklBIGxhYmVsIGRlZmluZWQgYnkgdGhlIGNvbGxlY3RpdmUuXG5mdW5jdGlvbiBnZXRDb2xsZWN0aXZlQXJpYVJvbGUoY29sbGVjdGl2ZSkge1xuICBsZXQgcm9sZXMgPSBjb2xsZWN0aXZlLmVsZW1lbnRzLm1hcChlbGVtZW50ID0+IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyb2xlJykpO1xuICBsZXQgbm9uTnVsbFJvbGVzID0gcm9sZXMuZmlsdGVyKHJvbGUgPT4gcm9sZSAhPT0gbnVsbCk7XG4gIHJldHVybiBub25OdWxsUm9sZXNbMF07XG59XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNlbGVjdGlvbkhpZ2hsaWdodC4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIGFwcGxpZXMgc3RhbmRhcmQgaGlnaGxpZ2h0IGNvbG9ycyB0byBhIHNlbGVjdGVkIGl0ZW0uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaGlnaGxpZ2h0cyB0ZXh0dWFsIGl0ZW1zIChlLmcuLCBpbiBhIGxpc3QpIGluIGEgc3RhbmRhcmQgd2F5IGJ5XG4gICAqIHVzaW5nIHRoZSBDU1MgYGhpZ2hsaWdodGAgYW5kIGBoaWdobGlnaHR0ZXh0YCBjb2xvciB2YWx1ZXMuIFRoZXNlIHZhbHVlc1xuICAgKiByZXNwZWN0IG9wZXJhdGluZyBzeXN0ZW0gZGVmYXVsdHMgYW5kIHVzZXIgcHJlZmVyZW5jZXMsIGFuZCBoZW5jZSBhcmUgZ29vZFxuICAgKiBkZWZhdWx0IHZhbHVlcyBmb3IgaGlnaGxpZ2h0IGNvbG9ycy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGFuIGBhcHBseVNlbGVjdGlvbmAgbWV0aG9kIHRvIGJlIGNhbGxlZCBvbiBhbiBpdGVtIHdoZW5cbiAgICogaXRzIHNlbGVjdGVkIHN0YXRlIGNoYW5nZXMuIFlvdSBjYW4gdXNlIHRoZSBJdGVtc1NlbGVjdGlvbiBtaXhpbiBmb3IgdGhhdFxuICAgKiBwdXJwb3NlLlxuICAgKi9cbiAgY2xhc3MgU2VsZWN0aW9uSGlnaGxpZ2h0IGV4dGVuZHMgYmFzZSB7XG5cbiAgICBhcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCkge1xuICAgICAgaWYgKHN1cGVyLmFwcGx5U2VsZWN0aW9uKSB7IHN1cGVyLmFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKTsgfVxuICAgICAgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBzZWxlY3RlZCA/ICdoaWdobGlnaHQnIDogJyc7XG4gICAgICBpdGVtLnN0eWxlLmNvbG9yID0gc2VsZWN0ZWQgPyAnaGlnaGxpZ2h0dGV4dCcgOiAnJztcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBTZWxlY3Rpb25IaWdobGlnaHQ7XG59O1xuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTZWxlY3Rpb25JblZpZXcuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBzY3JvbGxzIGEgY29udGFpbmVyIHRvIGVuc3VyZSB0aGF0IGEgbmV3bHktc2VsZWN0ZWQgaXRlbSBpc1xuICAgKiB2aXNpYmxlIHRvIHRoZSB1c2VyLlxuICAgKlxuICAgKiBXaGVuIHRoZSBzZWxlY3RlZCBpdGVtIGluIGEgbGlzdC1saWtlIGNvbXBvbmVudCBjaGFuZ2VzLCBpdCdzIGVhc2llciBmb3JcbiAgICogdGhlIHRvIGNvbmZpcm0gdGhhdCB0aGUgc2VsZWN0aW9uIGhhcyBjaGFuZ2VkIHRvIGFuIGFwcHJvcHJpYXRlIGl0ZW0gaWYgdGhlXG4gICAqIHVzZXIgY2FuIGFjdHVhbGx5IHNlZSB0aGF0IGl0ZW0uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIGBzZWxlY3RlZEl0ZW1gIHByb3BlcnR5IHRvIGJlIHNldCB3aGVuIHRoZSBzZWxlY3Rpb25cbiAgICogY2hhbmdlcy4gWW91IGNhbiBzdXBwbHkgdGhhdCB5b3Vyc2VsZiwgb3IgdXNlIHRoZSBJdGVtc1NlbGVjdGlvbiBtaXhpbi5cbiAgICovXG4gIGNsYXNzIFNlbGVjdGlvbkluVmlldyBleHRlbmRzIGJhc2Uge1xuXG4gICAgYXR0YWNoZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5hdHRhY2hlZENhbGxiYWNrKSB7IHN1cGVyLmF0dGFjaGVkQ2FsbGJhY2soKTsgfVxuICAgICAgbGV0IHNlbGVjdGVkSXRlbSA9IHRoaXMuc2VsZWN0ZWRJdGVtO1xuICAgICAgaWYgKHNlbGVjdGVkSXRlbSkge1xuICAgICAgICB0aGlzLnNjcm9sbEl0ZW1JbnRvVmlldyhzZWxlY3RlZEl0ZW0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRJdGVtO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICAvLyBLZWVwIHRoZSBzZWxlY3RlZCBpdGVtIGluIHZpZXcuXG4gICAgICAgIHRoaXMuc2Nyb2xsSXRlbUludG9WaWV3KGl0ZW0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjcm9sbCB0aGUgZ2l2ZW4gZWxlbWVudCBjb21wbGV0ZWx5IGludG8gdmlldywgbWluaW1pemluZyB0aGUgZGVncmVlIG9mXG4gICAgICogc2Nyb2xsaW5nIHBlcmZvcm1lZC5cbiAgICAgKlxuICAgICAqIEJsaW5rIGhhcyBhIGBzY3JvbGxJbnRvVmlld0lmTmVlZGVkKClgIGZ1bmN0aW9uIHRoYXQgZG9lcyBzb21ldGhpbmdcbiAgICAgKiBzaW1pbGFyLCBidXQgdW5mb3J0dW5hdGVseSBpdCdzIG5vbi1zdGFuZGFyZCwgYW5kIGluIGFueSBldmVudCBvZnRlbiBlbmRzXG4gICAgICogdXAgc2Nyb2xsaW5nIG1vcmUgdGhhbiBpcyBhYnNvbHV0ZWx5IG5lY2Vzc2FyeS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW0gLSB0aGUgaXRlbSB0byBzY3JvbGwgaW50byB2aWV3LlxuICAgICAqL1xuICAgIHNjcm9sbEl0ZW1JbnRvVmlldyhpdGVtKSB7XG4gICAgICBpZiAoc3VwZXIuc2Nyb2xsSXRlbUludG9WaWV3KSB7IHN1cGVyLnNjcm9sbEl0ZW1JbnRvVmlldygpOyB9XG4gICAgICAvLyBHZXQgdGhlIHJlbGF0aXZlIHBvc2l0aW9uIG9mIHRoZSBpdGVtIHdpdGggcmVzcGVjdCB0byB0aGUgdG9wIG9mIHRoZVxuICAgICAgLy8gbGlzdCdzIHNjcm9sbGFibGUgY2FudmFzLiBBbiBpdGVtIGF0IHRoZSB0b3Agb2YgdGhlIGxpc3Qgd2lsbCBoYXZlIGFcbiAgICAgIC8vIGVsZW1lbnRUb3Agb2YgMC5cblxuICAgICAgbGV0IHNjcm9sbFRhcmdldCA9IHRoaXMuc2Nyb2xsVGFyZ2V0O1xuICAgICAgbGV0IGVsZW1lbnRUb3AgPSBpdGVtLm9mZnNldFRvcCAtIHNjcm9sbFRhcmdldC5vZmZzZXRUb3AgLSBzY3JvbGxUYXJnZXQuY2xpZW50VG9wO1xuICAgICAgbGV0IGVsZW1lbnRCb3R0b20gPSBlbGVtZW50VG9wICsgaXRlbS5vZmZzZXRIZWlnaHQ7XG4gICAgICAvLyBEZXRlcm1pbmUgdGhlIGJvdHRvbSBvZiB0aGUgc2Nyb2xsYWJsZSBjYW52YXMuXG4gICAgICBsZXQgc2Nyb2xsQm90dG9tID0gc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCArIHNjcm9sbFRhcmdldC5jbGllbnRIZWlnaHQ7XG4gICAgICBpZiAoZWxlbWVudEJvdHRvbSA+IHNjcm9sbEJvdHRvbSkge1xuICAgICAgICAvLyBTY3JvbGwgdXAgdW50aWwgaXRlbSBpcyBlbnRpcmVseSB2aXNpYmxlLlxuICAgICAgICBzY3JvbGxUYXJnZXQuc2Nyb2xsVG9wICs9IGVsZW1lbnRCb3R0b20gLSBzY3JvbGxCb3R0b207XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChlbGVtZW50VG9wIDwgc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCkge1xuICAgICAgICAvLyBTY3JvbGwgZG93biB1bnRpbCBpdGVtIGlzIGVudGlyZWx5IHZpc2libGUuXG4gICAgICAgIHNjcm9sbFRhcmdldC5zY3JvbGxUb3AgPSBlbGVtZW50VG9wO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBlbGVtZW50IHRoYXQgc2hvdWxkIGJlIHNjcm9sbGVkIHRvIGJyaW5nIGFuIGl0ZW0gaW50byB2aWV3LlxuICAgICAqXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhpcyBwcm9wZXJ0eSBpcyB0aGUgZWxlbWVudCBpdHNlbGYuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgZ2V0IHNjcm9sbFRhcmdldCgpIHtcbiAgICAgIC8vIFByZWZlciBiYXNlIHJlc3VsdC5cbiAgICAgIHJldHVybiAnc2Nyb2xsVGFyZ2V0JyBpbiBiYXNlLnByb3RvdHlwZSA/IHN1cGVyLnNjcm9sbFRhcmdldCA6IHRoaXM7XG4gICAgfVxuICAgIHNldCBzY3JvbGxUYXJnZXQoZWxlbWVudCkge1xuICAgICAgaWYgKCdzY3JvbGxUYXJnZXQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNjcm9sbFRhcmdldCA9IGVsZW1lbnQ7IH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBTZWxlY3Rpb25JblZpZXc7XG59O1xuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcy4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHRvIGNyZWF0ZSByZWZlcmVuY2VzIHRvIGVsZW1lbnRzIGluIGEgY29tcG9uZW50J3MgU2hhZG93IERPTSBzdWJ0cmVlLlxuICAgKlxuICAgKiBUaGlzIGFkZHMgYSBtZW1iZXIgb24gdGhlIGNvbXBvbmVudCBjYWxsZWQgYHRoaXMuJGAgdGhhdCBjYW4gYmUgdXNlZCB0b1xuICAgKiByZWZlcmVuY2Ugc2hhZG93IGVsZW1lbnRzIHdpdGggSURzLiBFLmcuLCBpZiBjb21wb25lbnQncyBzaGFkb3cgY29udGFpbnMgYW5cbiAgICogZWxlbWVudCBgPGJ1dHRvbiBpZD1cImZvb1wiPmAsIHRoZW4gdGhpcyBtaXhpbiB3aWxsIGNyZWF0ZSBhIG1lbWJlclxuICAgKiBgdGhpcy4kLmZvb2AgdGhhdCBwb2ludHMgdG8gdGhhdCBidXR0b24uXG4gICAqXG4gICAqIFN1Y2ggcmVmZXJlbmNlcyBzaW1wbGlmeSBhIGNvbXBvbmVudCdzIGFjY2VzcyB0byBpdHMgb3duIGVsZW1lbnRzLiBJblxuICAgKiBleGNoYW5nZSwgdGhpcyBtaXhpbiB0cmFkZXMgb2ZmIGEgb25lLXRpbWUgY29zdCBvZiBxdWVyeWluZyBhbGwgZWxlbWVudHMgaW5cbiAgICogdGhlIHNoYWRvdyB0cmVlIGluc3RlYWQgb2YgcGF5aW5nIGFuIG9uZ29pbmcgY29zdCB0byBxdWVyeSBmb3IgYW4gZWxlbWVudFxuICAgKiBlYWNoIHRpbWUgdGhlIGNvbXBvbmVudCB3YW50cyB0byBpbnNwZWN0IG9yIG1hbmlwdWxhdGUgaXQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyB0aGUgY29tcG9uZW50IHRvIGRlZmluZSBhIFNoYWRvdyBET00gc3VidHJlZS4gWW91IGNhblxuICAgKiBjcmVhdGUgdGhhdCB0cmVlIHlvdXJzZWxmLCBvciBtYWtlIHVzZSBvZiB0aGUgU2hhZG93VGVtcGxhdGUgbWl4aW4uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaXMgaW5zcGlyZWQgYnkgUG9seW1lcidzIFthdXRvbWF0aWNcbiAgICogbm9kZSBmaW5kaW5nXShodHRwczovL3d3dy5wb2x5bWVyLXByb2plY3Qub3JnLzEuMC9kb2NzL2Rldmd1aWRlL2xvY2FsLWRvbS5odG1sI25vZGUtZmluZGluZylcbiAgICogZmVhdHVyZS5cbiAgICovXG4gIGNsYXNzIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgICBpZiAodGhpcy5zaGFkb3dSb290KSB7XG4gICAgICAgIC8vIExvb2sgZm9yIGVsZW1lbnRzIGluIHRoZSBzaGFkb3cgc3VidHJlZSB0aGF0IGhhdmUgaWQgYXR0cmlidXRlcy5cbiAgICAgICAgLy8gQW4gYWx0ZXJuYXRpdmVseSBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1peGluIHdvdWxkIGJlIHRvIGp1c3QgZGVmaW5lXG4gICAgICAgIC8vIGEgdGhpcy4kIGdldHRlciB0aGF0IGxhemlseSBkb2VzIHRoaXMgc2VhcmNoIHRoZSBmaXJzdCB0aW1lIHNvbWVvbmVcbiAgICAgICAgLy8gdHJpZXMgdG8gYWNjZXNzIHRoaXMuJC4gVGhhdCBtaWdodCBpbnRyb2R1Y2Ugc29tZSBjb21wbGV4aXR5IOKAkyBpZiB0aGVcbiAgICAgICAgLy8gdGhlIHRyZWUgY2hhbmdlZCBhZnRlciBpdCB3YXMgZmlyc3QgcG9wdWxhdGVkLCB0aGUgcmVzdWx0IG9mXG4gICAgICAgIC8vIHNlYXJjaGluZyBmb3IgYSBub2RlIG1pZ2h0IGJlIHNvbWV3aGF0IHVucHJlZGljdGFibGUuXG4gICAgICAgIHRoaXMuJCA9IHt9O1xuICAgICAgICBsZXQgbm9kZXNXaXRoSWRzID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZF0nKTtcbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKG5vZGVzV2l0aElkcywgbm9kZSA9PiB7XG4gICAgICAgICAgbGV0IGlkID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgICAgdGhpcy4kW2lkXSA9IG5vZGU7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzO1xufTtcbiIsIi8vIEZlYXR1cmUgZGV0ZWN0aW9uIGZvciBvbGQgU2hhZG93IERPTSB2MC5cbmNvbnN0IFVTSU5HX1NIQURPV19ET01fVjAgPSAodHlwZW9mIEhUTUxFbGVtZW50LnByb3RvdHlwZS5jcmVhdGVTaGFkb3dSb290ICE9PSAndW5kZWZpbmVkJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTaGFkb3dUZW1wbGF0ZS4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIGZvciBzdGFtcGluZyBhIHRlbXBsYXRlIGludG8gYSBTaGFkb3cgRE9NIHN1YnRyZWUgdXBvbiBjb21wb25lbnRcbiAgICogaW5zdGFudGlhdGlvbi5cbiAgICpcbiAgICogVG8gdXNlIHRoaXMgbWl4aW4sIGRlZmluZSBhIGB0ZW1wbGF0ZWAgcHJvcGVydHkgYXMgYSBzdHJpbmcgb3IgSFRNTFxuICAgKiBgPHRlbXBsYXRlPmAgZWxlbWVudDpcbiAgICpcbiAgICogICAgIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIFNoYWRvd1RlbXBsYXRlKEhUTUxFbGVtZW50KSB7XG4gICAqICAgICAgIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICogICAgICAgICByZXR1cm4gYEhlbGxvLCA8ZW0+d29ybGQ8L2VtPi5gO1xuICAgKiAgICAgICB9XG4gICAqICAgICB9XG4gICAqXG4gICAqIFdoZW4geW91ciBjb21wb25lbnQgY2xhc3MgaXMgaW5zdGFudGlhdGVkLCBhIHNoYWRvdyByb290IHdpbGwgYmUgY3JlYXRlZCBvblxuICAgKiB0aGUgaW5zdGFuY2UsIGFuZCB0aGUgY29udGVudHMgb2YgdGhlIHRlbXBsYXRlIHdpbGwgYmUgY2xvbmVkIGludG8gdGhlXG4gICAqIHNoYWRvdyByb290LiBJZiB5b3VyIGNvbXBvbmVudCBkb2VzIG5vdCBkZWZpbmUgYSBgdGVtcGxhdGVgIHByb3BlcnR5LCB0aGlzXG4gICAqIG1peGluIGhhcyBubyBlZmZlY3QuXG4gICAqXG4gICAqIEZvciB0aGUgdGltZSBiZWluZywgdGhpcyBleHRlbnNpb24gcmV0YWlucyBzdXBwb3J0IGZvciBTaGFkb3cgRE9NIHYwLiBUaGF0XG4gICAqIHdpbGwgZXZlbnR1YWxseSBiZSBkZXByZWNhdGVkIGFzIGJyb3dzZXJzIChhbmQgdGhlIFNoYWRvdyBET00gcG9seWZpbGwpXG4gICAqIGltcGxlbWVudCBTaGFkb3cgRE9NIHYxLlxuICAgKi9cbiAgY2xhc3MgU2hhZG93VGVtcGxhdGUgZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qXG4gICAgICogSWYgdGhlIGNvbXBvbmVudCBkZWZpbmVzIGEgdGVtcGxhdGUsIGEgc2hhZG93IHJvb3Qgd2lsbCBiZSBjcmVhdGVkIG9uIHRoZVxuICAgICAqIGNvbXBvbmVudCBpbnN0YW5jZSwgYW5kIHRoZSB0ZW1wbGF0ZSBzdGFtcGVkIGludG8gaXQuXG4gICAgICovXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgbGV0IHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZTtcbiAgICAgIC8vIFRPRE86IFNhdmUgdGhlIHByb2Nlc3NlZCB0ZW1wbGF0ZSB3aXRoIHRoZSBjb21wb25lbnQncyBjbGFzcyBwcm90b3R5cGVcbiAgICAgIC8vIHNvIGl0IGRvZXNuJ3QgbmVlZCB0byBiZSBwcm9jZXNzZWQgd2l0aCBldmVyeSBpbnN0YW50aWF0aW9uLlxuICAgICAgaWYgKHRlbXBsYXRlKSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAvLyBVcGdyYWRlIHBsYWluIHN0cmluZyB0byByZWFsIHRlbXBsYXRlLlxuICAgICAgICAgIHRlbXBsYXRlID0gY3JlYXRlVGVtcGxhdGVXaXRoSW5uZXJIVE1MKHRlbXBsYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChVU0lOR19TSEFET1dfRE9NX1YwKSB7XG4gICAgICAgICAgcG9seWZpbGxTbG90V2l0aENvbnRlbnQodGVtcGxhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdpbmRvdy5TaGFkb3dET01Qb2x5ZmlsbCkge1xuICAgICAgICAgIHNoaW1UZW1wbGF0ZVN0eWxlcyh0ZW1wbGF0ZSwgdGhpcy5sb2NhbE5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhpcy5sb2coXCJjbG9uaW5nIHRlbXBsYXRlIGludG8gc2hhZG93IHJvb3RcIik7XG4gICAgICAgIGxldCByb290ID0gVVNJTkdfU0hBRE9XX0RPTV9WMCA/XG4gICAgICAgICAgdGhpcy5jcmVhdGVTaGFkb3dSb290KCkgOiAgICAgICAgICAgICAvLyBTaGFkb3cgRE9NIHYwXG4gICAgICAgICAgdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7ICAvLyBTaGFkb3cgRE9NIHYxXG4gICAgICAgIGxldCBjbG9uZSA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUuY29udGVudCwgdHJ1ZSk7XG4gICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFNoYWRvd1RlbXBsYXRlO1xufTtcblxuXG4vLyBDb252ZXJ0IGEgcGxhaW4gc3RyaW5nIG9mIEhUTUwgaW50byBhIHJlYWwgdGVtcGxhdGUgZWxlbWVudC5cbmZ1bmN0aW9uIGNyZWF0ZVRlbXBsYXRlV2l0aElubmVySFRNTChpbm5lckhUTUwpIHtcbiAgbGV0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgLy8gUkVWSUVXOiBJcyB0aGVyZSBhbiBlYXNpZXIgd2F5IHRvIGRvIHRoaXM/XG4gIC8vIFdlJ2QgbGlrZSB0byBqdXN0IHNldCBpbm5lckhUTUwgb24gdGhlIHRlbXBsYXRlIGNvbnRlbnQsIGJ1dCBzaW5jZSBpdCdzXG4gIC8vIGEgRG9jdW1lbnRGcmFnbWVudCwgdGhhdCBkb2Vzbid0IHdvcmsuXG4gIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgd2hpbGUgKGRpdi5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICB0ZW1wbGF0ZS5jb250ZW50LmFwcGVuZENoaWxkKGRpdi5jaGlsZE5vZGVzWzBdKTtcbiAgfVxuICByZXR1cm4gdGVtcGxhdGU7XG59XG5cbi8vIFJlcGxhY2Ugb2NjdXJlbmNlcyBvZiB2MSBzbG90IGVsZW1lbnRzIHdpdGggdjAgY29udGVudCBlbGVtZW50cy5cbi8vIFRoaXMgZG9lcyBub3QgeWV0IG1hcCBuYW1lZCBzbG90cyB0byBjb250ZW50IHNlbGVjdCBjbGF1c2VzLlxuZnVuY3Rpb24gcG9seWZpbGxTbG90V2l0aENvbnRlbnQodGVtcGxhdGUpIHtcbiAgW10uZm9yRWFjaC5jYWxsKHRlbXBsYXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnc2xvdCcpLCBzbG90RWxlbWVudCA9PiB7XG4gICAgbGV0IGNvbnRlbnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY29udGVudCcpO1xuICAgIHNsb3RFbGVtZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGNvbnRlbnRFbGVtZW50LCBzbG90RWxlbWVudCk7XG4gIH0pO1xufVxuXG4vLyBJbnZva2UgYmFzaWMgc3R5bGUgc2hpbW1pbmcgd2l0aCBTaGFkb3dDU1MuXG5mdW5jdGlvbiBzaGltVGVtcGxhdGVTdHlsZXModGVtcGxhdGUsIHRhZykge1xuICB3aW5kb3cuV2ViQ29tcG9uZW50cy5TaGFkb3dDU1Muc2hpbVN0eWxpbmcodGVtcGxhdGUuY29udGVudCwgdGFnKTtcbn1cbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggU3dpcGVEaXJlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYXBzIHRvdWNoIGdlc3R1cmVzIChzd2lwZSBsZWZ0LCBzd2lwZSByaWdodCkgdG8gZGlyZWN0aW9uXG4gICAqIHNlbWFudGljcyAoZ28gcmlnaHQsIGdvIGxlZnQpLlxuICAgKlxuICAgKiBCeSBkZWZhdWx0LCB0aGlzIG1peGluIHByZXNlbnRzIG5vIHVzZXItdmlzaWJsZSBlZmZlY3RzOyBpdCBqdXN0IGluZGljYXRlcyBhXG4gICAqIGRpcmVjdGlvbiBpbiB3aGljaCB0aGUgdXNlciBpcyBjdXJyZW50bHkgc3dpcGluZyBvciBoYXMgZmluaXNoZWQgc3dpcGluZy4gVG9cbiAgICogbWFwIHRoZSBkaXJlY3Rpb24gdG8gYSBjaGFuZ2UgaW4gc2VsZWN0aW9uLCB1c2UgdGhlIERpcmVjdGlvblNlbGVjdGlvbiBtaXhpbi5cbiAgICovXG4gIGNsYXNzIFN3aXBlRGlyZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG5cbiAgICAgIHRoaXMucG9zaXRpb24gPSAwO1xuXG4gICAgICAvLyBUT0RPOiBUb3VjaCBldmVudHMgY291bGQgYmUgZmFjdG9yZWQgb3V0IGludG8gaXRzIG93biBtaXhpbi5cblxuICAgICAgLy8gSW4gYWxsIHRvdWNoIGV2ZW50cywgb25seSBoYW5kbGUgc2luZ2xlIHRvdWNoZXMuIFdlIGRvbid0IHdhbnQgdG9cbiAgICAgIC8vIGluYWR2ZXJ0ZW50bHkgZG8gd29yayB3aGVuIHRoZSB1c2VyJ3MgdHJ5aW5nIHRvIHBpbmNoLXpvb20gZm9yIGV4YW1wbGUuXG4gICAgICAvLyBUT0RPOiBFdmVuIGJldHRlciBhcHByb2FjaCB0aGFuIGJlbG93IHdvdWxkIGJlIHRvIGlnbm9yZSB0b3VjaGVzIGFmdGVyXG4gICAgICAvLyB0aGUgZmlyc3QgaWYgdGhlIHVzZXIgaGFzIGFscmVhZHkgYmVndW4gYSBzd2lwZS5cbiAgICAgIGlmICh3aW5kb3cuUG9pbnRlckV2ZW50KSB7XG4gICAgICAgIC8vIFByZWZlciBsaXN0ZW5pbmcgdG8gc3RhbmRhcmQgcG9pbnRlciBldmVudHMuXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBldmVudCA9PiB7XG4gICAgICAgICAgaWYgKGlzRXZlbnRGb3JQZW5PclByaW1hcnlUb3VjaChldmVudCkpIHtcbiAgICAgICAgICAgIHRvdWNoU3RhcnQodGhpcywgZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAoaXNFdmVudEZvclBlbk9yUHJpbWFyeVRvdWNoKGV2ZW50KSkge1xuICAgICAgICAgICAgbGV0IGhhbmRsZWQgPSB0b3VjaE1vdmUodGhpcywgZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG4gICAgICAgICAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmIChpc0V2ZW50Rm9yUGVuT3JQcmltYXJ5VG91Y2goZXZlbnQpKSB7XG4gICAgICAgICAgICB0b3VjaEVuZCh0aGlzLCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUG9pbnRlciBldmVudHMgbm90IHN1cHBvcnRlZCAtLSBsaXN0ZW4gdG8gb2xkZXIgdG91Y2ggZXZlbnRzLlxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBldmVudCA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuX211bHRpVG91Y2gpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBsZXQgY2xpZW50WCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgICAgICBsZXQgY2xpZW50WSA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICAgICAgICB0b3VjaFN0YXJ0KHRoaXMsIGNsaWVudFgsIGNsaWVudFkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9tdWx0aVRvdWNoID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAoIXRoaXMuX211bHRpVG91Y2ggJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGxldCBjbGllbnRYID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgICAgIGxldCBjbGllbnRZID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgICAgICAgIGxldCBoYW5kbGVkID0gdG91Y2hNb3ZlKHRoaXMsIGNsaWVudFgsIGNsaWVudFkpO1xuICAgICAgICAgICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmIChldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gQWxsIHRvdWNoZXMgcmVtb3ZlZDsgZ2VzdHVyZSBpcyBjb21wbGV0ZS5cbiAgICAgICAgICAgIGlmICghdGhpcy5fbXVsdGlUb3VjaCkge1xuICAgICAgICAgICAgICAvLyBTaW5nbGUtdG91Y2ggc3dpcGUgaGFzIGZpbmlzaGVkLlxuICAgICAgICAgICAgICBsZXQgY2xpZW50WCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgICAgICAgIGxldCBjbGllbnRZID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgICAgICAgICAgdG91Y2hFbmQodGhpcywgY2xpZW50WCwgY2xpZW50WSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9tdWx0aVRvdWNoID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgbGVmdC5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgZ29MZWZ0KCkge1xuICAgICAgaWYgKHN1cGVyLmdvTGVmdCkgeyByZXR1cm4gc3VwZXIuZ29MZWZ0KCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgcmlnaHQuXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIGdvUmlnaHQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29SaWdodCkgeyByZXR1cm4gc3VwZXIuZ29SaWdodCgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGRpc3RhbmNlIHRoZSB1c2VyIGhhcyBtb3ZlZCB0aGUgZmlyc3QgdG91Y2hwb2ludCBzaW5jZSB0aGUgYmVnaW5uaW5nXG4gICAgICogb2YgYSBkcmFnLCBleHByZXNzZWQgYXMgYSBmcmFjdGlvbiBvZiB0aGUgZWxlbWVudCdzIHdpZHRoLlxuICAgICAqXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICovXG4gICAgZ2V0IHBvc2l0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xuICAgIH1cbiAgICBzZXQgcG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICAgIGlmICgncG9zaXRpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnBvc2l0aW9uID0gcG9zaXRpb247IH1cbiAgICAgIHRoaXMuX3Bvc2l0aW9uID0gcG9zaXRpb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lIHdoZXRoZXIgYSB0cmFuc2l0aW9uIHNob3VsZCBiZSBzaG93biBkdXJpbmcgYSBzd2lwZS5cbiAgICAgKlxuICAgICAqIENvbXBvbmVudHMgbGlrZSBjYXJvdXNlbHMgb2Z0ZW4gZGVmaW5lIGFuaW1hdGVkIENTUyB0cmFuc2l0aW9ucyBmb3JcbiAgICAgKiBzbGlkaW5nIGVmZmVjdHMuIFN1Y2ggYSB0cmFuc2l0aW9uIHNob3VsZCB1c3VhbGx5ICpub3QqIGJlIGFwcGxpZWQgd2hpbGVcbiAgICAgKiB0aGUgdXNlciBpcyBkcmFnZ2luZywgYmVjYXVzZSBhIENTUyBhbmltYXRpb24gd2lsbCBpbnRyb2R1Y2UgYSBsYWcgdGhhdFxuICAgICAqIG1ha2VzIHRoZSBzd2lwZSBmZWVsIHNsdWdnaXNoLiBJbnN0ZWFkLCBhcyBsb25nIGFzIHRoZSB1c2VyIGlzIGRyYWdnaW5nXG4gICAgICogd2l0aCB0aGVpciBmaW5nZXIgZG93biwgdGhlIHRyYW5zaXRpb24gc2hvdWxkIGJlIHN1cHByZXNzZWQuIFdoZW4gdGhlXG4gICAgICogdXNlciByZWxlYXNlcyB0aGVpciBmaW5nZXIsIHRoZSB0cmFuc2l0aW9uIGNhbiBiZSByZXN0b3JlZCwgYWxsb3dpbmcgdGhlXG4gICAgICogYW5pbWF0aW9uIHRvIHNob3cgdGhlIGNhcm91c2VsIHNsaWRpbmcgaW50byBpdHMgZmluYWwgcG9zaXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlIC0gdHJ1ZSBpZiBhIGNvbXBvbmVudC1wcm92aWRlZCB0cmFuc2l0aW9uIHNob3VsZFxuICAgICAqIGJlIHNob3duLCBmYWxzZSBpZiBub3QuXG4gICAgICovXG4gICAgLy8gVE9ETzogUmVuYW1lIChhbmQgZmxpcCBtZWFuaW5nKSB0byBzb21ldGhpbmcgbGlrZSBkcmFnZ2luZygpP1xuICAgIHNob3dUcmFuc2l0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoc3VwZXIuc2hvd1RyYW5zaXRpb24pIHsgc3VwZXIuc2hvd1RyYW5zaXRpb24odmFsdWUpOyB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gU3dpcGVEaXJlY3Rpb247XG59O1xuXG5cbi8vIFJldHVybiB0cnVlIGlmIHRoZSBwb2ludGVyIGV2ZW50IGlzIGZvciB0aGUgcGVuLCBvciB0aGUgcHJpbWFyeSB0b3VjaCBwb2ludC5cbmZ1bmN0aW9uIGlzRXZlbnRGb3JQZW5PclByaW1hcnlUb3VjaChldmVudCkge1xuICByZXR1cm4gZXZlbnQucG9pbnRlclR5cGUgPT09ICdwZW4nIHx8XG4gICAgICAoZXZlbnQucG9pbnRlclR5cGUgPT09ICd0b3VjaCcgJiYgZXZlbnQuaXNQcmltYXJ5KTtcbn1cblxuXG5mdW5jdGlvbiB0b3VjaFN0YXJ0KGVsZW1lbnQsIGNsaWVudFgsIGNsaWVudFkpIHtcbiAgZWxlbWVudC5zaG93VHJhbnNpdGlvbihmYWxzZSk7XG4gIGVsZW1lbnQuX3N0YXJ0WCA9IGNsaWVudFg7XG4gIGVsZW1lbnQuX3ByZXZpb3VzWCA9IGNsaWVudFg7XG4gIGVsZW1lbnQuX3ByZXZpb3VzWSA9IGNsaWVudFk7XG4gIGVsZW1lbnQuX2RlbHRhWCA9IDA7XG4gIGVsZW1lbnQuX2RlbHRhWSA9IDA7XG59XG5cbmZ1bmN0aW9uIHRvdWNoTW92ZShlbGVtZW50LCBjbGllbnRYLCBjbGllbnRZKSB7XG4gIGVsZW1lbnQuX2RlbHRhWCA9IGNsaWVudFggLSBlbGVtZW50Ll9wcmV2aW91c1g7XG4gIGVsZW1lbnQuX2RlbHRhWSA9IGNsaWVudFkgLSBlbGVtZW50Ll9wcmV2aW91c1k7XG4gIGVsZW1lbnQuX3ByZXZpb3VzWCA9IGNsaWVudFg7XG4gIGVsZW1lbnQuX3ByZXZpb3VzWSA9IGNsaWVudFk7XG4gIGlmIChNYXRoLmFicyhlbGVtZW50Ll9kZWx0YVgpID4gTWF0aC5hYnMoZWxlbWVudC5fZGVsdGFZKSkge1xuICAgIC8vIE1vdmUgd2FzIG1vc3RseSBob3Jpem9udGFsLlxuICAgIHRyYWNrVG8oZWxlbWVudCwgY2xpZW50WCk7XG4gICAgLy8gSW5kaWNhdGUgdGhhdCB0aGUgZXZlbnQgd2FzIGhhbmRsZWQuIEl0J2QgYmUgbmljZXIgaWYgd2UgZGlkbid0IGhhdmVcbiAgICAvLyB0byBkbyB0aGlzIHNvIHRoYXQsIGUuZy4sIGEgdXNlciBjb3VsZCBiZSBzd2lwaW5nIGxlZnQgYW5kIHJpZ2h0XG4gICAgLy8gd2hpbGUgc2ltdWx0YW5lb3VzbHkgc2Nyb2xsaW5nIHVwIGFuZCBkb3duLiAoTmF0aXZlIHRvdWNoIGFwcHMgY2FuIGRvXG4gICAgLy8gdGhhdC4pIEhvd2V2ZXIsIE1vYmlsZSBTYWZhcmkgd2FudHMgdG8gaGFuZGxlIHN3aXBlIGV2ZW50cyBuZWFyIHRoZVxuICAgIC8vIHBhZ2UgYW5kIGludGVycHJldCB0aGVtIGFzIG5hdmlnYXRpb25zLiBUbyBhdm9pZCBoYXZpbmcgYSBob3JpemlvbnRhbFxuICAgIC8vIHN3aXBlIG1pc2ludGVwcmV0ZWQgYXMgYSBuYXZpZ2F0aW9uLCB3ZSBpbmRpY2F0ZSB0aGF0IHdlJ3ZlIGhhbmRsZWRcbiAgICAvLyB0aGUgZXZlbnQsIGFuZCBwcmV2ZW50IGRlZmF1bHQgYmVoYXZpb3IuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgLy8gTW92ZSB3YXMgbW9zdGx5IHZlcnRpY2FsLlxuICAgIHJldHVybiBmYWxzZTsgLy8gTm90IGhhbmRsZWRcbiAgfVxufVxuXG5mdW5jdGlvbiB0b3VjaEVuZChlbGVtZW50LCBjbGllbnRYLCBjbGllbnRZKSB7XG4gIGVsZW1lbnQuc2hvd1RyYW5zaXRpb24odHJ1ZSk7XG4gIGlmIChlbGVtZW50Ll9kZWx0YVggPj0gMjApIHtcbiAgICAvLyBGaW5pc2hlZCBnb2luZyByaWdodCBhdCBoaWdoIHNwZWVkLlxuICAgIC8vIGNvbnNvbGUubG9nKFwiZmxpY2sgcmlnaHQgXCIgKyBlbGVtZW50Ll9kZWx0YVgpO1xuICAgIGVsZW1lbnQuZ29MZWZ0KCk7XG4gIH0gZWxzZSBpZiAoZWxlbWVudC5fZGVsdGFYIDw9IC0yMCkge1xuICAgIC8vIEZpbmlzaGVkIGdvaW5nIGxlZnQgYXQgaGlnaCBzcGVlZC5cbiAgICAvLyBjb25zb2xlLmxvZyhcImZsaWNrIGxlZnQgXCIgKyBlbGVtZW50Ll9kZWx0YVgpO1xuICAgIGVsZW1lbnQuZ29SaWdodCgpO1xuICB9IGVsc2Uge1xuICAgIC8vIEZpbmlzaGVkIGF0IGxvdyBzcGVlZC5cbiAgICAvLyBjb25zb2xlLmxvZyhcInNsb3cgZHJhZyBcIiArIGVsZW1lbnQuX2RlbHRhWCk7XG4gICAgdHJhY2tUbyhlbGVtZW50LCBjbGllbnRYKTtcbiAgICBsZXQgcG9zaXRpb24gPSBlbGVtZW50LnBvc2l0aW9uO1xuICAgIGlmIChwb3NpdGlvbiA+PSAwLjUpIHtcbiAgICAgIGVsZW1lbnQuZ29SaWdodCgpO1xuICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPD0gLTAuNSkge1xuICAgICAgZWxlbWVudC5nb0xlZnQoKTtcbiAgICB9XG4gIH1cbiAgZWxlbWVudC5wb3NpdGlvbiA9IDA7XG4gIGVsZW1lbnQuX2RlbHRhWCA9IG51bGw7XG4gIGVsZW1lbnQuX2RlbHRhWSA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIHRyYWNrVG8oZWxlbWVudCwgeCkge1xuICBsZXQgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICBsZXQgZHJhZ0Rpc3RhbmNlID0gZWxlbWVudC5fc3RhcnRYIC0geDtcbiAgbGV0IGZyYWN0aW9uID0gd2lkdGggPiAwID9cbiAgICBkcmFnRGlzdGFuY2UgLyB3aWR0aCA6XG4gICAgMDtcbiAgZWxlbWVudC5wb3NpdGlvbiA9IGZyYWN0aW9uO1xufVxuIiwiaW1wb3J0IENvbGxlY3RpdmUgZnJvbSAnLi9Db2xsZWN0aXZlJztcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFRhcmdldEluQ29sbGVjdGl2ZS4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIGFsbG93cyBhIGNvbXBvbmVudCB0byBwcm92aWRlIGFnZ3JlZ2F0ZSBiZWhhdmlvciB3aXRoIG90aGVyXG4gICAqIGVsZW1lbnRzLCBlLmcuLCBmb3Iga2V5Ym9hcmQgaGFuZGxpbmcuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaW1wbGljaXRseSBjcmVhdGVzIGEgY29sbGVjdGl2ZSBmb3IgYSBjb21wb25lbnQgc28gdGhhdCBpdCBjYW5cbiAgICogcGFydGljaXBhdGUgaW4gY29sbGVjdGl2ZSBrZXlib2FyZCBoYW5kbGluZy4gU2VlIHRoZSBDb2xsZWN0aXZlIGNsYXNzIGZvclxuICAgKiBkZXRhaWxzLlxuICAgKlxuICAgKiBZb3UgY2FuIHVzZSB0aGlzIG1peGluIGluIGNvbmp1bmN0aW9uIHdpdGggQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQgdG9cbiAgICogYXV0b21hdGljYWxseSBoYXZlIHRoZSBjb21wb25lbnQncyBjb2xsZWN0aXZlIGV4dGVuZGVkIHRvIGl0cyBmaXJzdCBjaGlsZC5cbiAgICovXG4gIGNsYXNzIFRhcmdldEluQ29sbGVjdGl2ZSBleHRlbmRzIGJhc2Uge1xuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgdGhpcy5jb2xsZWN0aXZlID0gbmV3IENvbGxlY3RpdmUodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cy9zZXRzIHRoZSBjdXJyZW50IHRhcmdldCBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogU2V0IHRoaXMgdG8gcG9pbnQgdG8gYW5vdGhlciBlbGVtZW50LiBUaGF0IHRhcmdldCBlbGVtZW50IHdpbGwgYmVcbiAgICAgKiBpbXBsaWNpdGx5IGFkZGVkIHRvIHRoZSBjb21wb25lbnQncyBjb2xsZWN0aXZlLiBUaGF0IGlzLCB0aGUgY29tcG9uZW50XG4gICAgICogYW5kIGl0cyB0YXJnZXQgd2lsbCBzaGFyZSByZXNwb25zaWJpbGl0eSBmb3IgaGFuZGxpbmcga2V5Ym9hcmQgZXZlbnRzLlxuICAgICAqXG4gICAgICogWW91IGNhbiBzZXQgdGhpcyBwcm9wZXJ0eSB5b3Vyc2VsZiwgb3IgeW91IGNhbiB1c2UgdGhlXG4gICAgICogQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQgbWl4aW4gdG8gYXV0b21hdGljYWxseSBzZXQgdGhlIHRhcmdldCB0byB0aGVcbiAgICAgKiBjb21wb25lbnQncyBmaXJzdCBjaGlsZC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXQgdGFyZ2V0KCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnRhcmdldDtcbiAgICB9XG4gICAgc2V0IHRhcmdldChlbGVtZW50KSB7XG4gICAgICBpZiAoJ3RhcmdldCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIudGFyZ2V0ID0gZWxlbWVudDsgfVxuICAgICAgdGhpcy5jb2xsZWN0aXZlLmFzc2ltaWxhdGUoZWxlbWVudCk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gVGFyZ2V0SW5Db2xsZWN0aXZlO1xufTtcbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggVGFyZ2V0U2VsZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggYWxsb3dzIGEgY29tcG9uZW50IHRvIGRlbGVnYXRlIGl0cyBvd24gc2VsZWN0aW9uIHNlbWFudGljcyB0byBhXG4gICAqIHRhcmdldCBlbGVtZW50LlxuICAgKlxuICAgKiBUaGlzIGlzIHVzZWZ1bCB3aGVuIGRlZmluaW5nIGNvbXBvbmVudHMgdGhhdCBhY3QgYXMgb3B0aW9uYWwgZmVhdHVyZXMgZm9yIGFcbiAgICogY29tcG9uZW50IHRoYXQgYWN0cyBsaWtlIGEgbGlzdC4gU2VlIGJhc2ljLWFycm93LXNlbGVjdGlvbiBhbmRcbiAgICogYmFzaWMtcGFnZS1kb3RzIGZvciBleGFtcGxlcyBvZiBjb21wb25lbnRzIHVzZWQgYXMgb3B0aW9uYWwgZmVhdHVyZXMgZm9yXG4gICAqIGNvbXBvbmVudHMgbGlrZSBiYXNpYy1jYXJvdXNlbC4gQSB0eXBpY2FsIHVzYWdlIG1pZ2h0IGJlOlxuICAgKlxuICAgKiAgICAgPGJhc2ljLWFycm93LXNlbGVjdGlvbj5cbiAgICogICAgICAgPGJhc2ljLWNhcm91c2VsPlxuICAgKiAgICAgICAgIC4uLiBpbWFnZXMsIGV0Yy4gLi4uXG4gICAqICAgICAgIDwvYmFzaWMtY2Fyb3VzZWw+XG4gICAqICAgICA8L2Jhc2ljLWFycm93LXNlbGVjdGlvbj5cbiAgICpcbiAgICogQmVjYXVzZSBiYXNpYy1hcnJvdy1zZWxlY3Rpb24gdXNlcyB0aGUgVGFyZ2V0U2VsZWN0aW9uIG1peGluLCBpdCBleHBvc2VzXG4gICAqIG1lbWJlcnMgdG8gYWNjZXNzIGEgc2VsZWN0aW9uOiBgc2VsZWN0TmV4dGAsIGBzZWxlY3RQcmV2aW91c2AsXG4gICAqIGBzZWxlY3RlZEluZGV4YCwgZXRjLiBUaGVzZSBhcmUgYWxsIGRlbGVnYXRlZCB0byB0aGUgY2hpbGQgY29tcG9uZW50IChoZXJlLFxuICAgKiBhIGJhc2ljLWNhcm91c2VsKS5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGEgYHRhcmdldGAgcHJvcGVydHkgdG8gYmUgc2V0IHRvIHRoZSBlbGVtZW50IGFjdHVhbGx5XG4gICAqIG1hbmFnaW5nIHRoZSBzZWxlY3Rpb24uIFlvdSBjYW4gc2V0IHRoYXQgcHJvcGVydHkgeW91cnNlbGYsIG9yIHlvdSBjYW4gdXNlXG4gICAqIHRoZSBDb250ZW50Rmlyc3RDaGlsZFRhcmdldCBtaXhpbiB0byBpbXBsaWNpdGx5IHRha2UgdGhlIGNvbXBvbmVudCdzIGZpcnN0XG4gICAqIGNoaWxkIGFzIHRoZSB0YXJnZXQuIFRoaXMgaXMgd2hhdCBiYXNpYy1hcnJvdy1zZWxlY3Rpb24gKGFib3ZlKSBkb2VzLlxuICAgKi9cbiAgY2xhc3MgVGFyZ2V0U2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBzZXQgb2YgaXRlbXMgaW4gdGhlIGxpc3QuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX1cbiAgICAgKi9cbiAgICBnZXQgaXRlbXMoKSB7XG4gICAgICBsZXQgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG4gICAgICBsZXQgaXRlbXMgPSB0YXJnZXQgJiYgdGFyZ2V0Lml0ZW1zO1xuICAgICAgcmV0dXJuIGl0ZW1zIHx8IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiB0aGUgdW5kZXJseWluZyBjb250ZW50cyBjaGFuZ2UuIEl0IGlzIGFsc29cbiAgICAgKiBpbnZva2VkIG9uIGNvbXBvbmVudCBpbml0aWFsaXphdGlvbiDigJMgc2luY2UgdGhlIGl0ZW1zIGhhdmUgXCJjaGFuZ2VkXCIgZnJvbVxuICAgICAqIGJlaW5nIG5vdGhpbmcuXG4gICAgICovXG4gICAgaXRlbXNDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLml0ZW1zQ2hhbmdlZCkgeyBzdXBlci5pdGVtc0NoYW5nZWQoKTsgfVxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnaXRlbXMtY2hhbmdlZCcpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5kZXggb2YgdGhlIGl0ZW0gd2hpY2ggaXMgY3VycmVudGx5IHNlbGVjdGVkLCBvciAtMSBpZiB0aGVyZSBpcyBub1xuICAgICAqIHNlbGVjdGlvbi5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGVkSW5kZXgoKSB7XG4gICAgICBsZXQgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG4gICAgICByZXR1cm4gdGFyZ2V0ICYmIHRhcmdldC5zZWxlY3RlZEluZGV4O1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRJbmRleChpbmRleCkge1xuICAgICAgaWYgKCdzZWxlY3RlZEluZGV4JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEluZGV4ID0gaW5kZXg7IH1cbiAgICAgIGxldCB0YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LnNlbGVjdGVkSW5kZXggIT09IGluZGV4KSB7XG4gICAgICAgIHRhcmdldC5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtLCBvciBudWxsIGlmIHRoZXJlIGlzIG5vIHNlbGVjdGlvbi5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xuICAgICAgbGV0IHRhcmdldCA9IHRoaXMudGFyZ2V0O1xuICAgICAgcmV0dXJuIHRhcmdldCAmJiB0YXJnZXQuc2VsZWN0ZWRJdGVtO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgICBsZXQgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG4gICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNlbGVjdGVkSXRlbUNoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0ZWRJdGVtQ2hhbmdlZCkgeyBzdXBlci5zZWxlY3RlZEl0ZW1DaGFuZ2VkKCk7IH1cbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3NlbGVjdGVkLWl0ZW0tY2hhbmdlZCcpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzL3NldHMgdGhlIHRhcmdldCBlbGVtZW50IHRvIHdoaWNoIHRoaXMgY29tcG9uZW50IHdpbGwgZGVsZWdhdGVcbiAgICAgKiBzZWxlY3Rpb24gYWN0aW9ucy5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXQgdGFyZ2V0KCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnRhcmdldDtcbiAgICB9XG4gICAgc2V0IHRhcmdldChlbGVtZW50KSB7XG4gICAgICBpZiAoJ3RhcmdldCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIudGFyZ2V0ID0gZWxlbWVudDsgfVxuICAgICAgaWYgKHRoaXMuX2l0ZW1zQ2hhbmdlZExpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignaXRlbXMtY2hhbmdlZCcsIHRoaXMuX2l0ZW1zQ2hhbmdlZExpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEl0ZW1DaGFuZ2VkTGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdzZWxlY3RlZC1pdGVtLWNoYW5nZWQnLCB0aGlzLl9zZWxlY3RlZEl0ZW1DaGFuZ2VkTGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgdGhpcy5faXRlbXNDaGFuZ2VkTGlzdGVuZXIgPSBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2l0ZW1zLWNoYW5nZWQnLCBldmVudCA9PiB7XG4gICAgICAgIHRoaXMuaXRlbXNDaGFuZ2VkKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3NlbGVjdGVkSXRlbUNoYW5nZWRMaXN0ZW5lciA9IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2VsZWN0ZWQtaXRlbS1jaGFuZ2VkJywgZXZlbnQgPT4ge1xuICAgICAgICAvLyBMZXQgdGhlIGNvbXBvbmVudCBrbm93IHRoZSB0YXJnZXQncyBzZWxlY3Rpb24gY2hhbmdlZCwgYnV0IHdpdGhvdXRcbiAgICAgICAgLy8gcmUtaW52b2tpbmcgdGhlIHNlbGVjdEluZGV4L3NlbGVjdGVkSXRlbSBzZXR0ZXIuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtQ2hhbmdlZCgpO1xuICAgICAgfSk7XG4gICAgICAvLyBGb3JjZSBpbml0aWFsIHJlZnJlc2guXG4gICAgICB0aGlzLml0ZW1zQ2hhbmdlZCgpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFRhcmdldFNlbGVjdGlvbjtcbn07XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFRpbWVyU2VsZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggcHJvdmlkZXMgZm9yIGF1dG9tYXRpYyB0aW1lZCBjaGFuZ2VzIGluIHNlbGVjdGlvbi5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBpcyB1c2VmdWwgZm9yIGNyZWF0aW5nIHNsaWRlc2hvdy1saWtlIGVsZW1lbnRzLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgdGhlIGNvbXBvbmVudCB0byBkZWZpbmUgYW4gYGl0ZW1zYCBwcm9wZXJ0eSwgYXMgd2VsbCBhc1xuICAgKiBgc2VsZWN0Rmlyc3RgIGFuZCBgc2VsZWN0TmV4dGAgbWV0aG9kcy4gWW91IGNhbiBpbXBsZW1lbnQgdGhvc2UgeW91cnNlbGYsXG4gICAqIG9yIHVzZSB0aGUgQ29udGVudEFzSXRlbXMgYW5kIEl0ZW1zU2VsZWN0aW9uIG1peGlucy5cbiAgICovXG4gIGNsYXNzIFRpbWVyU2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb250ZW50Q2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5jb250ZW50Q2hhbmdlZCkgeyBzdXBlci5jb250ZW50Q2hhbmdlZCgpOyB9XG4gICAgICB0aGlzLnBsYXkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCZWdpbiBhdXRvbWF0aWMgcHJvZ3Jlc3Npb24gb2YgdGhlIHNlbGVjdGlvbi5cbiAgICAgKi9cbiAgICBwbGF5KCkge1xuICAgICAgaWYgKHN1cGVyLnBsYXkpIHsgc3VwZXIucGxheSgpOyB9XG4gICAgICB0aGlzLl9wbGF5aW5nID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVyKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhdXNlIGF1dG9tYXRpYyBwcm9ncmVzc2lvbiBvZiB0aGUgc2VsZWN0aW9uLlxuICAgICAqL1xuICAgIHBhdXNlKCkge1xuICAgICAgaWYgKHN1cGVyLnBhdXNlKSB7IHN1cGVyLnBhdXNlKCk7IH1cbiAgICAgIGNsZWFyVGltZXIodGhpcyk7XG4gICAgICB0aGlzLl9wbGF5aW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgc2VsZWN0aW9uIGlzIGJlaW5nIGF1dG9tYXRpY2FsbHkgYWR2YW5jZWQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBnZXQgcGxheWluZygpIHtcbiAgICAgIHJldHVybiB0aGlzLl9wbGF5aW5nO1xuICAgIH1cbiAgICBzZXQgcGxheWluZyhwbGF5aW5nKSB7XG4gICAgICBpZiAoJ3BsYXlpbmcnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnBsYXlpbmcgPSBwbGF5aW5nOyB9XG4gICAgICBpZiAocGxheWluZyAmJiAhdGhpcy5fcGxheWluZykge1xuICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICAgIH0gZWxzZSBpZiAoIXBsYXlpbmcgJiYgdGhpcy5fcGxheWluZykge1xuICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBXaGVuIHRoZSBzZWxlY3RlZCBpdGVtIGNoYW5nZXMgKGJlY2F1c2Ugb2Ygc29tZXRoaW5nIHRoaXMgbWl4aW4gZGlkLFxuICAgICAqIG9yIHdhcyBjaGFuZ2VkIGJ5IGFuIG91dHNpZGUgYWdlbnQgbGlrZSB0aGUgdXNlciksIHdlIHdhaXQgYSBiaXQgYmVmb3JlXG4gICAgICogYWR2YW5jaW5nIHRvIHRoZSBuZXh0IGl0ZW0uIEJ5IHRyaWdnZXJpbmcgdGhlIG5leHQgaXRlbSB0aGlzIHdheSxcbiAgICAgKiB3ZSBpbXBsaWNpdGx5IGdldCBhIGRlc2lyYWJsZSBiZWhhdmlvcjogaWYgdGhlIHVzZXIgY2hhbmdlcyB0aGUgc2VsZWN0aW9uXG4gICAgICogKGUuZy4sIGluIGEgY2Fyb3VzZWwpLCB3ZSBsZXQgdGhlbSBzZWUgdGhhdCBzZWxlY3Rpb24gc3RhdGUgZm9yIGEgd2hpbGVcbiAgICAgKiBiZWZvcmUgYWR2YW5jaW5nIHRoZSBzZWxlY3Rpb24gb3Vyc2VsdmVzLlxuICAgICAqL1xuICAgIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRJdGVtO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgICBjbGVhclRpbWVyKHRoaXMpO1xuICAgICAgaWYgKHRoaXMucGxheWluZykge1xuICAgICAgICBzZXRUaW1lcih0aGlzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBUaW1lclNlbGVjdGlvbjtcbn07XG5cblxuZnVuY3Rpb24gY2xlYXJUaW1lcihlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50Ll90aW1lb3V0KSB7XG4gICAgY2xlYXJUaW1lb3V0KGVsZW1lbnQuX3RpbWVvdXQpO1xuICAgIGVsZW1lbnQuX3RpbWVvdXQgPSBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldFRpbWVyKGVsZW1lbnQpIHtcbiAgZWxlbWVudC5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHNlbGVjdE5leHRXaXRoV3JhcChlbGVtZW50KTtcbiAgfSwgMjAwMCk7XG59XG5cbi8vIFNlbGVjdCB0aGUgbmV4dCBpdGVtLCB3cmFwcGluZyB0byBmaXJzdCBpdGVtIGlmIG5lY2Vzc2FyeS5cbmZ1bmN0aW9uIHNlbGVjdE5leHRXaXRoV3JhcChlbGVtZW50KSB7XG4gIGxldCBpdGVtcyA9IGVsZW1lbnQuaXRlbXM7XG4gIGlmIChpdGVtcykge1xuICAgIGlmIChlbGVtZW50LnNlbGVjdGVkSW5kZXggPT0gbnVsbCB8fCBlbGVtZW50LnNlbGVjdGVkSW5kZXggPT09IGl0ZW1zLmxlbmd0aCAtIDEpIHtcbiAgICAgIGVsZW1lbnQuc2VsZWN0Rmlyc3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5zZWxlY3ROZXh0KCk7XG4gICAgfVxuICB9XG59XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFRyYWNrcGFkRGlyZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFwcyBhIGhvcml6b250YWwgdHJhY2twYWQgc3dpcGUgZ2VzdHVyZXMgKG9yIGhvcml6b250YWwgbW91c2VcbiAgICogd2hlZWwgYWN0aW9ucykgdG8gZGlyZWN0aW9uIHNlbWFudGljcy5cbiAgICpcbiAgICogWW91IGNhbiB1c2UgdGhpcyBtaXhpbiB3aXRoIGEgbWl4aW4gbGlrZSBEaXJlY3Rpb25TZWxlY3Rpb24gdG8gbGV0IHRoZSB1c2VyXG4gICAqIGNoYW5nZSB0aGUgc2VsZWN0aW9uIHdpdGggdGhlIHRyYWNrcGFkIG9yIG1vdXNlIHdoZWVsLlxuICAgKlxuICAgKiBUbyByZXNwb25kIHRvIHRoZSB0cmFja3BhZCwgd2UgY2FuIGxpc3RlbiB0byB0aGUgRE9NJ3MgXCJ3aGVlbFwiIGV2ZW50cy5cbiAgICogVGhlc2UgZXZlbnRzIGFyZSBmaXJlZCBhcyB0aGUgdXNlciBkcmFncyB0aGVpciBmaW5nZXJzIGFjcm9zcyBhIHRyYWNrcGFkLlxuICAgKiBVbmZvcnR1bmF0ZWx5LCBicm93c2VycyBhcmUgbWlzc2luZyBhIGNyaXRpY2FsIGV2ZW50IOKAlMKgdGhlcmUgaXMgbm8gZXZlbnRcbiAgICogd2hlbiB0aGUgdXNlciAqc3RvcHMqIGEgZ2VzdHVyZWQgb24gdGhlIHRyYWNrcGFkIG9yIG1vdXNlIHdoZWVsLlxuICAgKlxuICAgKiBUbyBtYWtlIHRoaW5ncyB3b3JzZSwgdGhlIG1haW5zdHJlYW0gYnJvd3NlcnMgY29udGludWUgdG8gZ2VuZXJhdGUgZmFrZVxuICAgKiB3aGVlbCBldmVudHMgZXZlbiBhZnRlciB0aGUgdXNlciBoYXMgc3RvcHBlZCBkcmFnZ2luZyB0aGVpciBmaW5nZXJzLiBUaGVzZVxuICAgKiBmYWtlIGV2ZW50cyBzaW11bGF0ZSB0aGUgdXNlciBncmFkdWFsbHkgc2xvd2luZyBkb3duIHRoZSBkcmFnIHVudGlsIHRoZXlcbiAgICogY29tZSB0byBhIHNtb290aCBzdG9wLiBJbiBzb21lIGNvbnRleHRzLCB0aGVzZSBmYWtlIHdoZWVsIGV2ZW50cyBtaWdodCBiZVxuICAgKiBoZWxwZnVsLCBidXQgaW4gdHJ5aW5nIHRvIHN1cHBseSB0eXBpY2FsIHRyYWNrcGFkIHN3aXBlIG5hdmlnYXRpb24sIHRoZXNlXG4gICAqIGZha2UgZXZlbnRzIGdldCBpbiB0aGUgd2F5LlxuICAgKlxuICAgKiBUaGlzIGNvbXBvbmVudCB1c2VzIGhldXJpc3RpY3MgdG8gd29yayBhcm91bmQgdGhlc2UgcHJvYmxlbXMsIGJ1dCB0aGVcbiAgICogY29tcGxleCBuYXR1cmUgb2YgdGhlIHByb2JsZW0gbWFrZSBpdCBleHRyZW1lbHkgZGlmZmljdWx0IHRvIGFjaGlldmUgdGhlXG4gICAqIHNhbWUgZGVncmVlIG9mIHRyYWNrcGFkIHJlc3BvbnNpdmVuZXNzIHBvc3NpYmxlIHdpdGggbmF0aXZlIGFwcGxpY2F0aW9ucy5cbiAgICovXG4gIGNsYXNzIFRyYWNrcGFkRGlyZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgZXZlbnQgPT4ge1xuICAgICAgICBsZXQgaGFuZGxlZCA9IHdoZWVsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJlc2V0V2hlZWxUcmFja2luZyh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgbGVmdC5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgZ29MZWZ0KCkge1xuICAgICAgaWYgKHN1cGVyLmdvTGVmdCkgeyByZXR1cm4gc3VwZXIuZ29MZWZ0KCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgcmlnaHQuXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIGdvUmlnaHQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29SaWdodCkgeyByZXR1cm4gc3VwZXIuZ29SaWdodCgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGRpc3RhbmNlIHRoZSB1c2VyIGhhcyBtb3ZlZCB0aGUgZmlyc3QgdG91Y2hwb2ludCBzaW5jZSB0aGUgYmVnaW5uaW5nXG4gICAgICogb2YgYSB0cmFja3BhZC93aGVlbCBvcGVyYXRpb24sIGV4cHJlc3NlZCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBlbGVtZW50J3NcbiAgICAgKiB3aWR0aC5cbiAgICAgKlxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqL1xuICAgIGdldCBwb3NpdGlvbigpIHtcbiAgICAgIHJldHVybiBzdXBlci5wb3NpdGlvbjtcbiAgICB9XG4gICAgc2V0IHBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgICBpZiAoJ3Bvc2l0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5wb3NpdGlvbiA9IHBvc2l0aW9uOyB9XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvblxuICAgIHNob3dUcmFuc2l0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoc3VwZXIuc2hvd1RyYW5zaXRpb24pIHsgc3VwZXIuc2hvd1RyYW5zaXRpb24odmFsdWUpOyB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gVHJhY2twYWREaXJlY3Rpb247XG59O1xuXG5cbi8vIFRpbWUgd2Ugd2FpdCBmb2xsb3dpbmcgYSBuYXZpZ2F0aW9uIGJlZm9yZSBwYXlpbmcgYXR0ZW50aW9uIHRvIHdoZWVsXG4vLyBldmVudHMgYWdhaW4uXG5jb25zdCBQT1NUX05BVklHQVRFX1RJTUUgPSAyNTA7XG5cbi8vIFRpbWUgd2Ugd2FpdCBhZnRlciB0aGUgbGFzdCB3aGVlbCBldmVudCBiZWZvcmUgd2UgcmVzZXQgdGhpbmdzLlxuY29uc3QgV0hFRUxfVElNRSA9IDEwMDtcblxuXG4vLyBGb2xsb3dpbmcgYSBuYXZpZ2F0aW9uLCBwYXJ0aWFsbHkgcmVzZXQgb3VyIHdoZWVsIHRyYWNraW5nLlxuZnVuY3Rpb24gcG9zdE5hdmlnYXRlKGVsZW1lbnQpIHtcbiAgZWxlbWVudC5wb3NpdGlvbiA9IDA7XG4gIGVsZW1lbnQuX3doZWVsRGlzdGFuY2UgPSAwO1xuICBlbGVtZW50Ll9wb3N0TmF2aWdhdGVEZWxheUNvbXBsZXRlID0gdHJ1ZTtcbiAgZWxlbWVudC5fYWJzb3JiRGVjZWxlcmF0aW9uID0gdHJ1ZTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZWxlbWVudC5fcG9zdE5hdmlnYXRlRGVsYXlDb21wbGV0ZSA9IGZhbHNlO1xuICB9LCBQT1NUX05BVklHQVRFX1RJTUUpO1xufVxuXG4vLyBSZXNldCBhbGwgc3RhdGUgcmVsYXRlZCB0byB0aGUgdHJhY2tpbmcgb2YgdGhlIHdoZWVsLlxuZnVuY3Rpb24gcmVzZXRXaGVlbFRyYWNraW5nKGVsZW1lbnQpIHtcbiAgZWxlbWVudC5wb3NpdGlvbiA9IDA7XG4gIGVsZW1lbnQuX3doZWVsRGlzdGFuY2UgPSAwO1xuICBlbGVtZW50Ll9sYXN0RGVsdGFYID0gMDtcbiAgZWxlbWVudC5fYWJzb3JiRGVjZWxlcmF0aW9uID0gZmFsc2U7XG4gIGVsZW1lbnQuX3Bvc3ROYXZpZ2F0ZURlbGF5Q29tcGxldGUgPSBmYWxzZTtcbiAgaWYgKGVsZW1lbnQuX2xhc3RXaGVlbFRpbWVvdXQpIHtcbiAgICBjbGVhclRpbWVvdXQoZWxlbWVudC5fbGFzdFdoZWVsVGltZW91dCk7XG4gICAgZWxlbWVudC5fbGFzdFdoZWVsVGltZW91dCA9IG51bGw7XG4gIH1cbn1cblxuLy8gRGVmaW5lIG91ciBvd24gc2lnbiBmdW5jdGlvbiwgc2luY2UgKGFzIG9mIE1heSAyMDE1KSwgU2FmYXJpIGFuZCBJRSBkb24ndFxuLy8gc3VwcGx5IE1hdGguc2lnbigpLlxuZnVuY3Rpb24gc2lnbih4KSB7XG4gIHJldHVybiAoeCA9PT0gMCkgP1xuICAgIDAgOlxuICAgICh4ID4gMCkgP1xuICAgICAgMSA6XG4gICAgICAtMTtcbn1cblxuLy8gVE9ETzogRGFtcGluZywgb3Igc29tZSBvdGhlciB0cmVhdG1lbnQgZm9yIGdvaW5nIHBhc3QgdGhlIGVuZHMuXG5cbi8qXG4gKiBBIHdoZWVsIGV2ZW50IGhhcyBiZWVuIGdlbmVyYXRlZC4gVGhpcyBjb3VsZCBiZSBhIHJlYWwgd2hlZWwgZXZlbnQsIG9yIGl0XG4gKiBjb3VsZCBiZSBmYWtlIChzZWUgbm90ZXMgaW4gdGhlIGhlYWRlcikuXG4gKlxuICogVGhpcyBoYW5kbGVyIHVzZXMgc2V2ZXJhbCBzdHJhdGVnaWVzIHRvIHRyeSB0byBhcHByb3hpbWF0ZSBuYXRpdmUgdHJhY2twYWRcbiAqIHN3aXBlIG5hdmlnYXRpb24uXG4gKlxuICogSWYgdGhlIHVzZXIgaGFzIGRyYWdnZWQgZW5vdWdoIHRvIGNhdXNlIGEgbmF2aWdhdGlvbiwgdGhlbiBmb3IgYSBzaG9ydFxuICogZGVsYXkgZm9sbG93aW5nIHRoYXQgbmF2aWdhdGlvbiwgc3Vic2VxdWVudCB3aGVlbCBldmVudHMgd2lsbCBiZSBpZ25vcmVkLlxuICpcbiAqIEZ1cnRoZXJtb3JlLCBmb2xsd293aW5nIGEgbmF2aWdhdGlvbiwgd2UgaWdub3JlIGFsbCB3aGVlbCBldmVudHMgdW50aWwgd2VcbiAqIHJlY2VpdmUgYXQgbGVhc3Qgb25lIGV2ZW50IHdoZXJlIHRoZSBldmVudCdzIGRlbHRhWCAoZGlzdGFuY2UgdHJhdmVsZWQpIGlzXG4gKiAqZ3JlYXRlciogdGhhbiB0aGUgcHJldmlvdXMgZXZlbnQncyBkZWx0YVguIFRoaXMgaGVscHMgdXMgZmlsdGVyIG91dCB0aGVcbiAqIGZha2Ugd2hlZWwgZXZlbnRzIGdlbmVyYXRlZCBieSB0aGUgYnJvd3NlciB0byBzaW11bGF0ZSBkZWNlbGVyYXRpb24uXG4gKlxuICovXG5mdW5jdGlvbiB3aGVlbChlbGVtZW50LCBldmVudCkge1xuXG4gIC8vIFNpbmNlIHdlIGhhdmUgYSBuZXcgd2hlZWwgZXZlbnQsIHJlc2V0IG91ciB0aW1lciB3YWl0aW5nIGZvciB0aGUgbGFzdFxuICAvLyB3aGVlbCBldmVudCB0byBwYXNzLlxuICBpZiAoZWxlbWVudC5fbGFzdFdoZWVsVGltZW91dCkge1xuICAgIGNsZWFyVGltZW91dChlbGVtZW50Ll9sYXN0V2hlZWxUaW1lb3V0KTtcbiAgfVxuICBlbGVtZW50Ll9sYXN0V2hlZWxUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgd2hlZWxUaW1lZE91dChlbGVtZW50KTtcbiAgfSwgV0hFRUxfVElNRSk7XG5cbiAgbGV0IGRlbHRhWCA9IGV2ZW50LmRlbHRhWDtcbiAgbGV0IGRlbHRhWSA9IGV2ZW50LmRlbHRhWTtcblxuICAvLyBTZWUgaWYgZWxlbWVudCBldmVudCByZXByZXNlbnRzIGFjY2VsZXJhdGlvbiBvciBkZWNlbGVyYXRpb24uXG4gIGxldCBhY2NlbGVyYXRpb24gPSBzaWduKGRlbHRhWCkgKiAoZGVsdGFYIC0gZWxlbWVudC5fbGFzdERlbHRhWCk7XG4gIGVsZW1lbnQuX2xhc3REZWx0YVggPSBkZWx0YVg7XG4gIC8vIGNvbnNvbGUubG9nKGRlbHRhWCArIFwiIFwiICsgYWNjZWxlcmF0aW9uICsgXCIgXCIgKyBlbGVtZW50Ll9hYnNvcmJEZWNlbGVyYXRpb24gKyBcIiBcIiArIGVsZW1lbnQuX3Bvc3ROYXZpZ2F0ZURlbGF5Q29tcGxldGUpO1xuXG4gIGlmIChNYXRoLmFicyhkZWx0YVgpIDwgTWF0aC5hYnMoZGVsdGFZKSkge1xuICAgIC8vIE1vdmUgd2FzIG1vc3RseSB2ZXJ0aWNhbC4gVGhlIHVzZXIgbWF5IGJlIHRyeWluZyBzY3JvbGwgd2l0aCB0aGVcbiAgICAvLyB0cmFja3BhZC93aGVlbC4gVG8gYmUgb24gdGhlIHNhZmUsIHdlIGlnbm9yZSBzdWNoIGV2ZW50cy5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoZWxlbWVudC5fcG9zdE5hdmlnYXRlRGVsYXlDb21wbGV0ZSkge1xuICAgIC8vIEl0J3MgdG9vIHNvb24gYWZ0ZXIgYSBuYXZpZ2F0aW9uOyBpZ25vcmUgdGhlIGV2ZW50LlxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cblxuICBpZiAoYWNjZWxlcmF0aW9uID4gMCkge1xuICAgIC8vIFRoZSBldmVudHMgYXJlIG5vdCAob3IgYXJlIG5vIGxvbmdlcikgZGVjZWxlcmF0aW5nLCBzbyB3ZSBjYW4gc3RhcnRcbiAgICAvLyBwYXlpbmcgYXR0ZW50aW9uIHRvIHRoZW0gYWdhaW4uXG4gICAgZWxlbWVudC5fYWJzb3JiRGVjZWxlcmF0aW9uID0gZmFsc2U7XG4gIH0gZWxzZSBpZiAoZWxlbWVudC5fYWJzb3JiRGVjZWxlcmF0aW9uKSB7XG4gICAgLy8gVGhlIHdoZWVsIGV2ZW50IHdhcyBsaWtlbHkgZmFrZWQgdG8gc2ltdWxhdGUgZGVjZWxlcmF0aW9uOyBpZ25vcmUgaXQuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBlbGVtZW50Ll93aGVlbERpc3RhbmNlICs9IGRlbHRhWDtcblxuICAvLyBVcGRhdGUgdGhlIHBvc2l0aW9uIG9mIHRoZSBpdGVtcyBiZWluZyBuYXZpZ2F0ZWQuXG4gIGxldCB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gIGxldCBwb3NpdGlvbiA9IHdpZHRoID4gMCA/XG4gICAgZWxlbWVudC5fd2hlZWxEaXN0YW5jZSAvIHdpZHRoIDpcbiAgICAwO1xuICBlbGVtZW50LnNob3dUcmFuc2l0aW9uKGZhbHNlKTtcbiAgcG9zaXRpb24gPSBzaWduKHBvc2l0aW9uKSAqIE1hdGgubWluKE1hdGguYWJzKHBvc2l0aW9uKSwgMSk7XG4gIGVsZW1lbnQucG9zaXRpb24gPSBwb3NpdGlvbjtcblxuICAvLyBJZiB0aGUgdXNlciBoYXMgZHJhZ2dlZCBlbm91Z2ggdG8gcmVhY2ggdGhlIHByZXZpb3VzL25leHQgaXRlbSwgdGhlblxuICAvLyBjb21wbGV0ZSBhIG5hdmlnYXRpb24gdG8gdGhhdCBpdGVtLlxuICBpZiAocG9zaXRpb24gPT09IDEpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImdvUmlnaHRcIik7XG4gICAgZWxlbWVudC5zaG93VHJhbnNpdGlvbih0cnVlKTtcbiAgICBlbGVtZW50LmdvUmlnaHQoKTtcbiAgICBwb3N0TmF2aWdhdGUoZWxlbWVudCk7XG4gIH0gZWxzZSBpZiAocG9zaXRpb24gPT09IC0xKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJnb0xlZnRcIik7XG4gICAgZWxlbWVudC5zaG93VHJhbnNpdGlvbih0cnVlKTtcbiAgICBlbGVtZW50LmdvTGVmdCgpO1xuICAgIHBvc3ROYXZpZ2F0ZShlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBBIHN1ZmZpY2llbnRseSBsb25nIHBlcmlvZCBvZiB0aW1lIGhhcyBwYXNzZWQgc2luY2UgdGhlIGxhc3Qgd2hlZWwgZXZlbnQuXG4vLyBXZSBzbmFwIHRoZSBzZWxlY3Rpb24gdG8gdGhlIGNsb3Nlc3QgaXRlbSwgdGhlbiByZXNldCBvdXIgc3RhdGUuXG5mdW5jdGlvbiB3aGVlbFRpbWVkT3V0KGVsZW1lbnQpIHtcbiAgLy8gY29uc29sZS5sb2coXCJ0aW1lb3V0XCIpO1xuXG4gIC8vIFNuYXAgdG8gdGhlIGNsb3Nlc3QgaXRlbS5cbiAgZWxlbWVudC5zaG93VHJhbnNpdGlvbih0cnVlKTtcbiAgbGV0IHBvc2l0aW9uID0gZWxlbWVudC5wb3NpdGlvbjtcbiAgaWYgKHBvc2l0aW9uID49IDAuNSkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwic25hcCByaWdodFwiKTtcbiAgICBlbGVtZW50LmdvUmlnaHQoKTtcbiAgfSBlbHNlIGlmIChwb3NpdGlvbiA8PSAtMC41KSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJzbmFwIGxlZnRcIik7XG4gICAgZWxlbWVudC5nb0xlZnQoKTtcbiAgfVxuXG4gIC8vIFRPRE86IExpc3RlbiBmb3IgdGhlIHRyYW5zaXRpb24gdG8gY29tcGxldGUsIGFuZCB0aGVuIHJlc3RvcmVcbiAgLy8gc2hvd1RyYW5zaXRpb24gdG8gZmFsc2UgKG9yIHRoZSBwcmV2aW91cyB2YWx1ZSkuXG5cbiAgcmVzZXRXaGVlbFRyYWNraW5nKGVsZW1lbnQpO1xufVxuIiwiLyoqXG4gKiBAbWV0aG9kIGNvbXBvc2VUZW1wbGF0ZXNcbiAqIEBkZXNjcmlwdGlvbiBHaXZlbiB0d28gdGVtcGxhdGVzLCB0aGlzIFwiZm9sZHNcIiBvbmUgaW5zaWRlIHRoZSBvdGhlci4gVGhpcyBpc1xuICogaXMgdXNlZnVsIGZvciBkZWZpbmluZyBhIGNvbXBvbmVudCB0aGF0IHdhbnRzIHRvIGZpbGwgaW4gc2xvdHMgaW4gdGhlXG4gKiB0ZW1wbGF0ZSBvZiBpdHMgYmFzZSBjbGFzcy5cbiAqXG4gKiBGb3Igbm93LCB0aGUgZm9sZGluZyBwcm9jZXNzIGp1c3QgZW50YWlscyBwdXR0aW5nIHRoZSBmaXJzdCBpbnNpZGUgdGhlXG4gKiBsb2NhdGlvbiBvZiB0aGUgZmlyc3QgPHNsb3Q+IG5vZGUgaW4gdGhlIHNlY29uZCB0ZW1wbGF0ZS5cbiAqXG4gKiBFeGFtcGxlOiBpZiB0aGUgZmlyc3QgKGJhc2UpIHRlbXBsYXRlIGlzXG4gKlxuICogICAgIDx0ZW1wbGF0ZT5cbiAqICAgICAgIDxiPlxuICogICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gKiAgICAgICA8L2I+XG4gKiAgICAgPC90ZW1wbGF0ZT5cbiAqXG4gKiBhbmQgdGhlIHNlY29uZCAoc3ViY2xhc3MpIHRlbXBsYXRlIGlzXG4gKlxuICogICAgIDx0ZW1wbGF0ZT5cbiAqICAgICAgIEhlbGxvLCA8c2xvdD48L3Nsb3Q+LlxuICogICAgIDwvdGVtcGxhdGU+XG4gKlxuICogVGhlbiB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgYGNvbXBvc2VUZW1wbGF0ZXMoZmlyc3QsIHNlY29uZClgIGlzXG4gKlxuICogICAgIDx0ZW1wbGF0ZT5cbiAqICAgICAgIDxiPlxuICogICAgICAgICBIZWxsbywgPHNsb3Q+PC9zbG90Pi5cbiAqICAgICAgIDwvYj5cbiAqICAgICA8L3RlbXBsYXRlPlxuICpcbiAqIE5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBhIG1peGluLCBidXQgYSBoZWxwZXIgZm9yIGNyZWF0aW5nIHdlYlxuICogY29tcG9uZW50cy5cbiAqXG4gKiBAcGFyYW0geyhIVE1MVGVtcGxhdGV8c3RyaW5nKX0gYmFzZVRlbXBsYXRlIC0gVGhlIGJhc2UgY2xhc3MgdGVtcGxhdGUuXG4gKiBAcGFyYW0geyhIVE1MVGVtcGxhdGV8c3RyaW5nKX0gc3ViVGVtcGxhdGUgLSBUaGUgc3ViY2xhc3MgdGVtcGxhdGUuXG4gKi9cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wb3NlVGVtcGxhdGVzKGJhc2VUZW1wbGF0ZSwgc3ViVGVtcGxhdGUpIHtcblxuICBpZiAoIWJhc2VUZW1wbGF0ZSkge1xuICAgIC8vIE5vIGZvbGRpbmcgbmVjZXNzYXJ5LlxuICAgIHJldHVybiBzdWJUZW1wbGF0ZTtcbiAgfVxuXG4gIGJhc2VUZW1wbGF0ZSA9IG1ha2VUZW1wbGF0ZShiYXNlVGVtcGxhdGUpO1xuICBzdWJUZW1wbGF0ZSA9IG1ha2VUZW1wbGF0ZShzdWJUZW1wbGF0ZSk7XG4gIGxldCBiYXNlRWxlbWVudCA9IGJhc2VUZW1wbGF0ZSAmJiBiYXNlVGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gIGxldCBtaXhpbkVsZW1lbnQgPSBzdWJUZW1wbGF0ZSAmJiBzdWJUZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcblxuICBsZXQgZm9sZGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcblxuICAvLyBGb2xkIG1peGluIHRlbXBsYXRlIGludG8gZmlyc3Qgc2xvdCBlbGVtZW50IGluIGJhc2UgdGVtcGxhdGUuXG4gIC8vIFRPRE86IFN1cHBvcnQgbmFtZWQgc2xvdHMuXG4gIGxldCBzbG90Tm9kZSA9IGJhc2VFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3Nsb3QnKTtcbiAgaWYgKHNsb3ROb2RlKSB7XG4gICAgc2xvdE5vZGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobWl4aW5FbGVtZW50LCBzbG90Tm9kZSk7XG4gICAgZm9sZGVkLmNvbnRlbnQuYXBwZW5kQ2hpbGQoYmFzZUVsZW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIC8vIE5vIHBsYWNlIGluIGJhc2UgZm9yIG1peGluIHRlbXBsYXRlIC0tIHRocm93IG1peGluIHRlbXBsYXRlIGF3YXkuXG4gICAgZm9sZGVkLmNvbnRlbnQuYXBwZW5kQ2hpbGQoYmFzZUVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZvbGRlZDtcbn1cblxuXG5mdW5jdGlvbiBtYWtlVGVtcGxhdGUoaHRtbE9yVGVtcGxhdGUpIHtcbiAgcmV0dXJuIHR5cGVvZiBodG1sT3JUZW1wbGF0ZSA9PT0gJ3N0cmluZycgP1xuICAgIGNyZWF0ZVRlbXBsYXRlV2l0aElubmVySFRNTChodG1sT3JUZW1wbGF0ZSkgOlxuICAgIGh0bWxPclRlbXBsYXRlO1xufVxuXG5cbi8vIFRPRE86IFNoYXJlIHdpdGggU2hhZG93VGVtcGxhdGUuXG4vLyBDb252ZXJ0IGEgcGxhaW4gc3RyaW5nIG9mIEhUTUwgaW50byBhIHJlYWwgdGVtcGxhdGUgZWxlbWVudC5cbmZ1bmN0aW9uIGNyZWF0ZVRlbXBsYXRlV2l0aElubmVySFRNTChpbm5lckhUTUwpIHtcbiAgbGV0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgLy8gUkVWSUVXOiBJcyB0aGVyZSBhbiBlYXNpZXIgd2F5IHRvIGRvIHRoaXM/XG4gIC8vIFdlJ2QgbGlrZSB0byBqdXN0IHNldCBpbm5lckhUTUwgb24gdGhlIHRlbXBsYXRlIGNvbnRlbnQsIGJ1dCBzaW5jZSBpdCdzXG4gIC8vIGEgRG9jdW1lbnRGcmFnbWVudCwgdGhhdCBkb2Vzbid0IHdvcmsuXG4gIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgd2hpbGUgKGRpdi5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICB0ZW1wbGF0ZS5jb250ZW50LmFwcGVuZENoaWxkKGRpdi5jaGlsZE5vZGVzWzBdKTtcbiAgfVxuICByZXR1cm4gdGVtcGxhdGU7XG59XG4iLCIvKlxuICogTWljcm90YXNrIGhlbHBlciBmb3IgSUUgMTEuXG4gKlxuICogRXhlY3V0aW5nIGEgZnVuY3Rpb24gYXMgYSBtaWNyb3Rhc2sgaXMgdHJpdmlhbCBpbiBicm93c2VycyB0aGF0IHN1cHBvcnRcbiAqIHByb21pc2VzLCB3aG9zZSB0aGVuKCkgY2xhdXNlcyB1c2UgbWljcm90YXNrIHRpbWluZy4gSUUgMTEgZG9lc24ndCBzdXBwb3J0XG4gKiBwcm9taXNlcywgYnV0IGRvZXMgc3VwcG9ydCBNdXRhdGlvbk9ic2VydmVycywgd2hpY2ggYXJlIGFsc28gZXhlY3V0ZWQgYXNcbiAqIG1pY3JvdGFza3MuIFNvIHRoaXMgaGVscGVyIHVzZXMgYW4gTXV0YXRpb25PYnNlcnZlciB0byBhY2hpZXZlIG1pY3JvdGFza1xuICogdGltaW5nLlxuICpcbiAqIFNlZSBodHRwczovL2pha2VhcmNoaWJhbGQuY29tLzIwMTUvdGFza3MtbWljcm90YXNrcy1xdWV1ZXMtYW5kLXNjaGVkdWxlcy9cbiAqXG4gKiBJbnNwaXJlZCBieSBQb2x5bWVyJ3MgYXN5bmMoKSBmdW5jdGlvbi5cbiAqL1xuXG5cbi8vIFRoZSBxdWV1ZSBvZiBwZW5kaW5nIGNhbGxiYWNrcyB0byBiZSBleGVjdXRlZCBhcyBtaWNyb3Rhc2tzLlxubGV0IGNhbGxiYWNrcyA9IFtdO1xuXG4vLyBDcmVhdGUgYW4gZWxlbWVudCB0aGF0IHdlIHdpbGwgbW9kaWZ5IHRvIGZvcmNlIG9ic2VydmFibGUgbXV0YXRpb25zLlxubGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG5cbi8vIEEgbW9ub3RvbmljYWxseS1pbmNyZWFzaW5nIHZhbHVlLlxubGV0IGNvdW50ZXIgPSAwO1xuXG5cbi8qKlxuICogQWRkIGEgY2FsbGJhY2sgdG8gdGhlIG1pY3JvdGFzayBxdWV1ZS5cbiAqXG4gKiBUaGlzIHVzZXMgYSBNdXRhdGlvbk9ic2VydmVyIHNvIHRoYXQgaXQgd29ya3Mgb24gSUUgMTEuXG4gKlxuICogTk9URTogSUUgMTEgbWF5IGFjdHVhbGx5IHVzZSB0aW1lb3V0IHRpbWluZyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJzLiBUaGlzXG4gKiBuZWVkcyBtb3JlIGludmVzdGlnYXRpb24uXG4gKlxuICogQGZ1bmN0aW9uIG1pY3JvdGFza1xuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWljcm90YXNrKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgLy8gRm9yY2UgYSBtdXRhdGlvbi5cbiAgZWxlbWVudC50ZXh0Q29udGVudCA9ICsrY291bnRlcjtcbn1cblxuXG4vLyBFeGVjdXRlIGFueSBwZW5kaW5nIGNhbGxiYWNrcy5cbmZ1bmN0aW9uIGV4ZWN1dGVDYWxsYmFja3MoKSB7XG4gIHdoaWxlIChjYWxsYmFja3MubGVuZ3RoID4gMCkge1xuICAgIGxldCBjYWxsYmFjayA9IGNhbGxiYWNrcy5zaGlmdCgpO1xuICAgIGNhbGxiYWNrKCk7XG4gIH1cbn1cblxuXG4vLyBDcmVhdGUgdGhlIG9ic2VydmVyLlxubGV0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZXhlY3V0ZUNhbGxiYWNrcyk7XG5vYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIHtcbiAgY2hhcmFjdGVyRGF0YTogdHJ1ZVxufSk7XG4iXX0=
