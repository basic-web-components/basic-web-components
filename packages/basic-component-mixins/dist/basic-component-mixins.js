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

var _createSymbol = require('./src/createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

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

var _SingleSelection = require('./src/SingleSelection');

var _SingleSelection2 = _interopRequireDefault(_SingleSelection);

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

var _SelectionAnimation = require('./src/SelectionAnimation');

var _SelectionAnimation2 = _interopRequireDefault(_SelectionAnimation);

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

if (!window.Basic) {
  window.Basic = {};
} /*
   * This file is transpiled to create an ES5-compatible distribution in which
   * the package's main feature(s) are available via the window.Basic global.
   */

window.Basic.AttributeMarshalling = _AttributeMarshalling2.default;
window.Basic.ClickSelection = _ClickSelection2.default;
window.Basic.Collective = _Collective2.default;
window.Basic.Composable = _Composable2.default;
window.Basic.composeTemplates = _composeTemplates2.default;
window.Basic.createSymbol = _createSymbol2.default;
window.Basic.ContentAsItems = _ContentAsItems2.default;
window.Basic.ContentFirstChildTarget = _ContentFirstChildTarget2.default;
window.Basic.DirectionSelection = _DirectionSelection2.default;
window.Basic.DistributedChildren = _DistributedChildren2.default;
window.Basic.DistributedChildrenAsContent = _DistributedChildrenAsContent2.default;
window.Basic.Generic = _Generic2.default;
window.Basic.SingleSelection = _SingleSelection2.default;
window.Basic.Keyboard = _Keyboard2.default;
window.Basic.KeyboardDirection = _KeyboardDirection2.default;
window.Basic.KeyboardPagedSelection = _KeyboardPagedSelection2.default;
window.Basic.KeyboardPrefixSelection = _KeyboardPrefixSelection2.default;
window.Basic.microtask = _microtask2.default;
window.Basic.SelectionAnimation = _SelectionAnimation2.default;
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

},{"./src/AttributeMarshalling":2,"./src/ClickSelection":3,"./src/Collective":4,"./src/Composable":5,"./src/ContentAsItems":6,"./src/ContentFirstChildTarget":7,"./src/DirectionSelection":8,"./src/DistributedChildren":9,"./src/DistributedChildrenAsContent":10,"./src/Generic":12,"./src/Keyboard":13,"./src/KeyboardDirection":14,"./src/KeyboardPagedSelection":15,"./src/KeyboardPrefixSelection":16,"./src/SelectionAnimation":17,"./src/SelectionAriaActive":18,"./src/SelectionHighlight":19,"./src/SelectionInView":20,"./src/ShadowElementReferences":21,"./src/ShadowTemplate":22,"./src/SingleSelection":23,"./src/SwipeDirection":24,"./src/TargetInCollective":25,"./src/TargetSelection":26,"./src/TimerSelection":27,"./src/TrackpadDirection":28,"./src/composeTemplates":29,"./src/createSymbol":30,"./src/microtask":31}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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
var safeToSetAttributesSymbol = (0, _createSymbol2.default)('safeToSetAttributes');
var pendingAttributesSymbol = (0, _createSymbol2.default)('pendingAttributes');

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

},{"../src/microtask":31,"./createSymbol":30}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

},{"./createSymbol":30,"./toggleClass":32}],7:[function(require,module,exports){
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

},{"./createSymbol":30}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

},{"./microtask":31}],11:[function(require,module,exports){
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

},{"./createSymbol":30}],12:[function(require,module,exports){
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

},{"./createSymbol":30}],13:[function(require,module,exports){
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

},{"./createSymbol":30}],14:[function(require,module,exports){
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

},{"./createSymbol":30}],15:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
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

},{"./createSymbol":30}],17:[function(require,module,exports){
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
        resetAnimations(this);
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

},{"./FractionalSelection":11,"./createSymbol":30}],18:[function(require,module,exports){
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

},{}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
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

},{}],21:[function(require,module,exports){
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

},{}],22:[function(require,module,exports){
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

},{}],23:[function(require,module,exports){
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

},{"./createSymbol":30,"./microtask":31}],24:[function(require,module,exports){
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
      key: 'showTransition',
      get: function get() {
        return _get(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), 'showTransition', this);
      },
      set: function set(value) {
        if ('showTransition' in base.prototype) {
          _set(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), 'showTransition', value, this);
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

},{"./createSymbol":30}],25:[function(require,module,exports){
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

},{"./Collective":4}],26:[function(require,module,exports){
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

},{"./createSymbol":30}],27:[function(require,module,exports){
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

},{"./createSymbol":30}],28:[function(require,module,exports){
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

},{"../../basic-component-mixins/src/createSymbol":30}],29:[function(require,module,exports){
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

},{}],30:[function(require,module,exports){
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

},{}],31:[function(require,module,exports){
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

},{}],32:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL2VzNWdsb2JhbHMuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9BdHRyaWJ1dGVNYXJzaGFsbGluZy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NsaWNrU2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29sbGVjdGl2ZS5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbXBvc2FibGUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db250ZW50QXNJdGVtcy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbnRlbnRGaXJzdENoaWxkVGFyZ2V0LmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlyZWN0aW9uU2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9GcmFjdGlvbmFsU2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvR2VuZXJpYy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmREaXJlY3Rpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZFBhZ2VkU2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmRQcmVmaXhTZWxlY3Rpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25BbmltYXRpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25BcmlhQWN0aXZlLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uSGlnaGxpZ2h0LmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uSW5WaWV3LmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2hhZG93RWxlbWVudFJlZmVyZW5jZXMuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaGFkb3dUZW1wbGF0ZS5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NpbmdsZVNlbGVjdGlvbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1N3aXBlRGlyZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGFyZ2V0SW5Db2xsZWN0aXZlLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGFyZ2V0U2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGltZXJTZWxlY3Rpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UcmFja3BhZERpcmVjdGlvbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL2NvbXBvc2VUZW1wbGF0ZXMuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9jcmVhdGVTeW1ib2wuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9taWNyb3Rhc2suanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy90b2dnbGVDbGFzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDS0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSSxDQUFDLE9BQU8sS0FBWixFQUFtQjtBQUNqQixTQUFPLEtBQVAsR0FBZSxFQUFmO0FBQ0QsQyxDQXJDRDs7Ozs7QUF1Q0EsT0FBTyxLQUFQLENBQWEsb0JBQWI7QUFDQSxPQUFPLEtBQVAsQ0FBYSxjQUFiO0FBQ0EsT0FBTyxLQUFQLENBQWEsVUFBYjtBQUNBLE9BQU8sS0FBUCxDQUFhLFVBQWI7QUFDQSxPQUFPLEtBQVAsQ0FBYSxnQkFBYjtBQUNBLE9BQU8sS0FBUCxDQUFhLFlBQWI7QUFDQSxPQUFPLEtBQVAsQ0FBYSxjQUFiO0FBQ0EsT0FBTyxLQUFQLENBQWEsdUJBQWI7QUFDQSxPQUFPLEtBQVAsQ0FBYSxrQkFBYjtBQUNBLE9BQU8sS0FBUCxDQUFhLG1CQUFiO0FBQ0EsT0FBTyxLQUFQLENBQWEsNEJBQWI7QUFDQSxPQUFPLEtBQVAsQ0FBYSxPQUFiO0FBQ0EsT0FBTyxLQUFQLENBQWEsZUFBYjtBQUNBLE9BQU8sS0FBUCxDQUFhLFFBQWI7QUFDQSxPQUFPLEtBQVAsQ0FBYSxpQkFBYjtBQUNBLE9BQU8sS0FBUCxDQUFhLHNCQUFiO0FBQ0EsT0FBTyxLQUFQLENBQWEsdUJBQWI7QUFDQSxPQUFPLEtB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aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKlxuICogVGhpcyBmaWxlIGlzIHRyYW5zcGlsZWQgdG8gY3JlYXRlIGFuIEVTNS1jb21wYXRpYmxlIGRpc3RyaWJ1dGlvbiBpbiB3aGljaFxuICogdGhlIHBhY2thZ2UncyBtYWluIGZlYXR1cmUocykgYXJlIGF2YWlsYWJsZSB2aWEgdGhlIHdpbmRvdy5CYXNpYyBnbG9iYWwuXG4gKi9cblxuaW1wb3J0IEF0dHJpYnV0ZU1hcnNoYWxsaW5nIGZyb20gJy4vc3JjL0F0dHJpYnV0ZU1hcnNoYWxsaW5nJztcbmltcG9ydCBDbGlja1NlbGVjdGlvbiBmcm9tICcuL3NyYy9DbGlja1NlbGVjdGlvbic7XG5pbXBvcnQgQ29sbGVjdGl2ZSBmcm9tICcuL3NyYy9Db2xsZWN0aXZlJztcbmltcG9ydCBDb21wb3NhYmxlIGZyb20gJy4vc3JjL0NvbXBvc2FibGUnO1xuaW1wb3J0IGNvbXBvc2VUZW1wbGF0ZXMgZnJvbSAnLi9zcmMvY29tcG9zZVRlbXBsYXRlcyc7XG5pbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vc3JjL2NyZWF0ZVN5bWJvbCc7XG5pbXBvcnQgQ29udGVudEFzSXRlbXMgZnJvbSAnLi9zcmMvQ29udGVudEFzSXRlbXMnO1xuaW1wb3J0IENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0IGZyb20gJy4vc3JjL0NvbnRlbnRGaXJzdENoaWxkVGFyZ2V0JztcbmltcG9ydCBEaXJlY3Rpb25TZWxlY3Rpb24gZnJvbSAnLi9zcmMvRGlyZWN0aW9uU2VsZWN0aW9uJztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuIGZyb20gJy4vc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW4nO1xuaW1wb3J0IERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQgZnJvbSAnLi9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCc7XG5pbXBvcnQgR2VuZXJpYyBmcm9tICcuL3NyYy9HZW5lcmljJztcbmltcG9ydCBTaW5nbGVTZWxlY3Rpb24gZnJvbSAnLi9zcmMvU2luZ2xlU2VsZWN0aW9uJztcbmltcG9ydCBLZXlib2FyZCBmcm9tICcuL3NyYy9LZXlib2FyZCc7XG5pbXBvcnQgS2V5Ym9hcmREaXJlY3Rpb24gZnJvbSAnLi9zcmMvS2V5Ym9hcmREaXJlY3Rpb24nO1xuaW1wb3J0IEtleWJvYXJkUGFnZWRTZWxlY3Rpb24gZnJvbSAnLi9zcmMvS2V5Ym9hcmRQYWdlZFNlbGVjdGlvbic7XG5pbXBvcnQgS2V5Ym9hcmRQcmVmaXhTZWxlY3Rpb24gZnJvbSAnLi9zcmMvS2V5Ym9hcmRQcmVmaXhTZWxlY3Rpb24nO1xuaW1wb3J0IG1pY3JvdGFzayBmcm9tICcuL3NyYy9taWNyb3Rhc2snO1xuaW1wb3J0IFNlbGVjdGlvbkFuaW1hdGlvbiBmcm9tICcuL3NyYy9TZWxlY3Rpb25BbmltYXRpb24nO1xuaW1wb3J0IFNlbGVjdGlvbkFyaWFBY3RpdmUgZnJvbSAnLi9zcmMvU2VsZWN0aW9uQXJpYUFjdGl2ZSc7XG5pbXBvcnQgU2VsZWN0aW9uSGlnaGxpZ2h0IGZyb20gJy4vc3JjL1NlbGVjdGlvbkhpZ2hsaWdodCc7XG5pbXBvcnQgU2VsZWN0aW9uSW5WaWV3IGZyb20gJy4vc3JjL1NlbGVjdGlvbkluVmlldyc7XG5pbXBvcnQgU2hhZG93RWxlbWVudFJlZmVyZW5jZXMgZnJvbSAnLi9zcmMvU2hhZG93RWxlbWVudFJlZmVyZW5jZXMnO1xuaW1wb3J0IFNoYWRvd1RlbXBsYXRlIGZyb20gJy4vc3JjL1NoYWRvd1RlbXBsYXRlJztcbmltcG9ydCBTd2lwZURpcmVjdGlvbiBmcm9tICcuL3NyYy9Td2lwZURpcmVjdGlvbic7XG5pbXBvcnQgVGFyZ2V0SW5Db2xsZWN0aXZlIGZyb20gJy4vc3JjL1RhcmdldEluQ29sbGVjdGl2ZSc7XG5pbXBvcnQgVGFyZ2V0U2VsZWN0aW9uIGZyb20gJy4vc3JjL1RhcmdldFNlbGVjdGlvbic7XG5pbXBvcnQgVGltZXJTZWxlY3Rpb24gZnJvbSAnLi9zcmMvVGltZXJTZWxlY3Rpb24nO1xuaW1wb3J0IFRyYWNrcGFkRGlyZWN0aW9uIGZyb20gJy4vc3JjL1RyYWNrcGFkRGlyZWN0aW9uJztcblxuaWYgKCF3aW5kb3cuQmFzaWMpIHtcbiAgd2luZG93LkJhc2ljID0ge307XG59XG5cbndpbmRvdy5CYXNpYy5BdHRyaWJ1dGVNYXJzaGFsbGluZyA9IEF0dHJpYnV0ZU1hcnNoYWxsaW5nO1xud2luZG93LkJhc2ljLkNsaWNrU2VsZWN0aW9uID0gQ2xpY2tTZWxlY3Rpb247XG53aW5kb3cuQmFzaWMuQ29sbGVjdGl2ZSA9IENvbGxlY3RpdmU7XG53aW5kb3cuQmFzaWMuQ29tcG9zYWJsZSA9IENvbXBvc2FibGU7XG53aW5kb3cuQmFzaWMuY29tcG9zZVRlbXBsYXRlcyA9IGNvbXBvc2VUZW1wbGF0ZXM7XG53aW5kb3cuQmFzaWMuY3JlYXRlU3ltYm9sID0gY3JlYXRlU3ltYm9sO1xud2luZG93LkJhc2ljLkNvbnRlbnRBc0l0ZW1zID0gQ29udGVudEFzSXRlbXM7XG53aW5kb3cuQmFzaWMuQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQgPSBDb250ZW50Rmlyc3RDaGlsZFRhcmdldDtcbndpbmRvdy5CYXNpYy5EaXJlY3Rpb25TZWxlY3Rpb24gPSBEaXJlY3Rpb25TZWxlY3Rpb247XG53aW5kb3cuQmFzaWMuRGlzdHJpYnV0ZWRDaGlsZHJlbiA9IERpc3RyaWJ1dGVkQ2hpbGRyZW47XG53aW5kb3cuQmFzaWMuRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCA9IERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQ7XG53aW5kb3cuQmFzaWMuR2VuZXJpYyA9IEdlbmVyaWM7XG53aW5kb3cuQmFzaWMuU2luZ2xlU2VsZWN0aW9uID0gU2luZ2xlU2VsZWN0aW9uO1xud2luZG93LkJhc2ljLktleWJvYXJkID0gS2V5Ym9hcmQ7XG53aW5kb3cuQmFzaWMuS2V5Ym9hcmREaXJlY3Rpb24gPSBLZXlib2FyZERpcmVjdGlvbjtcbndpbmRvdy5CYXNpYy5LZXlib2FyZFBhZ2VkU2VsZWN0aW9uID0gS2V5Ym9hcmRQYWdlZFNlbGVjdGlvbjtcbndpbmRvdy5CYXNpYy5LZXlib2FyZFByZWZpeFNlbGVjdGlvbiA9IEtleWJvYXJkUHJlZml4U2VsZWN0aW9uO1xud2luZG93LkJhc2ljLm1pY3JvdGFzayA9IG1pY3JvdGFzaztcbndpbmRvdy5CYXNpYy5TZWxlY3Rpb25BbmltYXRpb24gPSBTZWxlY3Rpb25BbmltYXRpb247XG53aW5kb3cuQmFzaWMuU2VsZWN0aW9uQXJpYUFjdGl2ZSA9IFNlbGVjdGlvbkFyaWFBY3RpdmU7XG53aW5kb3cuQmFzaWMuU2VsZWN0aW9uSGlnaGxpZ2h0ID0gU2VsZWN0aW9uSGlnaGxpZ2h0O1xud2luZG93LkJhc2ljLlNlbGVjdGlvbkluVmlldyA9IFNlbGVjdGlvbkluVmlldztcbndpbmRvdy5CYXNpYy5TaGFkb3dFbGVtZW50UmVmZXJlbmNlcyA9IFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzO1xud2luZG93LkJhc2ljLlNoYWRvd1RlbXBsYXRlID0gU2hhZG93VGVtcGxhdGU7XG53aW5kb3cuQmFzaWMuU3dpcGVEaXJlY3Rpb24gPSBTd2lwZURpcmVjdGlvbjtcbndpbmRvdy5CYXNpYy5UYXJnZXRJbkNvbGxlY3RpdmUgPSBUYXJnZXRJbkNvbGxlY3RpdmU7XG53aW5kb3cuQmFzaWMuVGFyZ2V0U2VsZWN0aW9uID0gVGFyZ2V0U2VsZWN0aW9uO1xud2luZG93LkJhc2ljLlRpbWVyU2VsZWN0aW9uID0gVGltZXJTZWxlY3Rpb247XG53aW5kb3cuQmFzaWMuVHJhY2twYWREaXJlY3Rpb24gPSBUcmFja3BhZERpcmVjdGlvbjtcbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IG1pY3JvdGFzayBmcm9tICcuLi9zcmMvbWljcm90YXNrJztcblxuXG4vLyBNZW1vaXplZCBtYXBzIG9mIGF0dHJpYnV0ZSB0byBwcm9wZXJ0eSBuYW1lcyBhbmQgdmljZSB2ZXJzYS5cbmNvbnN0IGF0dHJpYnV0ZVRvUHJvcGVydHlOYW1lcyA9IHt9O1xuY29uc3QgcHJvcGVydHlOYW1lc1RvQXR0cmlidXRlcyA9IHt9O1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBzYWZlVG9TZXRBdHRyaWJ1dGVzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzYWZlVG9TZXRBdHRyaWJ1dGVzJyk7XG5jb25zdCBwZW5kaW5nQXR0cmlidXRlc1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgncGVuZGluZ0F0dHJpYnV0ZXMnKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEF0dHJpYnV0ZU1hcnNoYWxsaW5nLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFyc2hhbGxzIGF0dHJpYnV0ZXMgdG8gcHJvcGVydGllcyBhbmQgdmljZSB2ZXJzYS5cbiAgICpcbiAgICogSWYgeW91ciBjb21wb25lbnQgZXhwb3NlcyBhIHNldHRlciBmb3IgYSBwcm9wZXJ0eSwgaXQncyBnZW5lcmFsbHkgYSBnb29kXG4gICAqIGlkZWEgdG8gbGV0IGRldnMgdXNpbmcgeW91ciBjb21wb25lbnQgYmUgYWJsZSB0byBzZXQgdGhhdCBwcm9wZXJ0eSBpbiBIVE1MXG4gICAqIHZpYSBhbiBlbGVtZW50IGF0dHJpYnV0ZS4gWW91IGNhbiBjb2RlIHRoYXQgeW91cnNlbGYgYnkgd3JpdGluZyBhblxuICAgKiBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYCwgb3IgeW91IGNhbiB1c2UgdGhpcyBtaXhpbiB0byBnZXQgYSBkZWdyZWUgb2ZcbiAgICogYXV0b21hdGljIHN1cHBvcnQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaW1wbGVtZW50cyBhbiBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYCB0aGF0IHdpbGwgYXR0ZW1wdCB0b1xuICAgKiBjb252ZXJ0IGEgY2hhbmdlIGluIGFuIGVsZW1lbnQgYXR0cmlidXRlIGludG8gYSBjYWxsIHRvIHRoZSBjb3JyZXNwb25kaW5nXG4gICAqIHByb3BlcnR5IHNldHRlci4gQXR0cmlidXRlcyB0eXBpY2FsbHkgZm9sbG93IGh5cGhlbmF0ZWQgbmFtZXMgKFwiZm9vLWJhclwiKSxcbiAgICogd2hlcmVhcyBwcm9wZXJ0aWVzIHR5cGljYWxseSB1c2UgY2FtZWxDYXNlIG5hbWVzIChcImZvb0JhclwiKS4gVGhpcyBtaXhpblxuICAgKiByZXNwZWN0cyB0aGF0IGNvbnZlbnRpb24sIGF1dG9tYXRpY2FsbHkgbWFwcGluZyB0aGUgaHlwaGVuYXRlZCBhdHRyaWJ1dGVcbiAgICogbmFtZSB0byB0aGUgY29ycmVzcG9uZGluZyBjYW1lbENhc2UgcHJvcGVydHkgbmFtZS5cbiAgICpcbiAgICogRXhhbXBsZTogWW91IGRlZmluZSBhIGNvbXBvbmVudCB1c2luZyB0aGlzIG1peGluOlxuICAgKlxuICAgKiAgICAgY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgQXR0cmlidXRlTWFyc2hhbGxpbmcoSFRNTEVsZW1lbnQpIHtcbiAgICogICAgICAgZ2V0IGZvb0JhcigpIHsgcmV0dXJuIHRoaXMuX2Zvb0JhcjsgfVxuICAgKiAgICAgICBzZXQgZm9vQmFyKHZhbHVlKSB7IHRoaXMuX2Zvb0JhciA9IHZhbHVlOyB9XG4gICAqICAgICB9XG4gICAqICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ215LWVsZW1lbnQnLCBNeUVsZW1lbnQpO1xuICAgKlxuICAgKiBJZiBzb21lb25lIHRoZW4gaW5zdGFudGlhdGVzIHlvdXIgY29tcG9uZW50IGluIEhUTUw6XG4gICAqXG4gICAqICAgICA8bXktZWxlbWVudCBmb28tYmFyPVwiSGVsbG9cIj48L215LWVsZW1lbnQ+XG4gICAqXG4gICAqIFRoZW4sIGFmdGVyIHRoZSBlbGVtZW50IGhhcyBiZWVuIHVwZ3JhZGVkLCB0aGUgYGZvb0JhcmAgc2V0dGVyIHdpbGxcbiAgICogYXV0b21hdGljYWxseSBiZSBpbnZva2VkIHdpdGggdGhlIGluaXRpYWwgdmFsdWUgXCJIZWxsb1wiLlxuICAgKlxuICAgKiBGb3IgdGhlIHRpbWUgYmVpbmcsIHRoaXMgbWl4aW4gb25seSBzdXBwb3J0cyBzdHJpbmctdmFsdWVkIHByb3BlcnRpZXMuXG4gICAqIElmIHlvdSdkIGxpa2UgdG8gY29udmVydCBzdHJpbmcgYXR0cmlidXRlcyB0byBvdGhlciB0eXBlcyAobnVtYmVycyxcbiAgICogYm9vbGVhbnMpLCB5b3UgbmVlZCB0byBpbXBsZW1lbnQgYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AgeW91cnNlbGYuXG4gICAqL1xuICBjbGFzcyBBdHRyaWJ1dGVNYXJzaGFsbGluZyBleHRlbmRzIGJhc2Uge1xuXG4gICAgLypcbiAgICAgKiBIYW5kbGUgYSBjaGFuZ2UgdG8gdGhlIGF0dHJpYnV0ZSB3aXRoIHRoZSBnaXZlbiBuYW1lLlxuICAgICAqL1xuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhhdHRyaWJ1dGVOYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICAgIGlmIChzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2spIHsgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKCk7IH1cbiAgICAgIGxldCBwcm9wZXJ0eU5hbWUgPSBhdHRyaWJ1dGVUb1Byb3BlcnR5TmFtZShhdHRyaWJ1dGVOYW1lKTtcbiAgICAgIC8vIElmIHRoZSBhdHRyaWJ1dGUgbmFtZSBjb3JyZXNwb25kcyB0byBhIHByb3BlcnR5IG5hbWUsIHNldCB0aGUgcHJvcGVydHkuXG4gICAgICAvLyBJZ25vcmUgc3RhbmRhcmQgSFRNTEVsZW1lbnQgcHJvcGVydGllcyBoYW5kbGVkIGJ5IHRoZSBET00uXG4gICAgICBpZiAocHJvcGVydHlOYW1lIGluIHRoaXMgJiYgIShwcm9wZXJ0eU5hbWUgaW4gSFRNTEVsZW1lbnQucHJvdG90eXBlKSkge1xuICAgICAgICB0aGlzW3Byb3BlcnR5TmFtZV0gPSBuZXdWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG5cbiAgICAgIHRoaXNbc2FmZVRvU2V0QXR0cmlidXRlc1N5bWJvbF0gPSB0cnVlO1xuXG4gICAgICAvLyBTZXQgYW55IHBlbmRpbmcgYXR0cmlidXRlcy5cbiAgICAgIGlmICh0aGlzW3BlbmRpbmdBdHRyaWJ1dGVzU3ltYm9sXSkge1xuICAgICAgICBmb3IgKGxldCBhdHRyaWJ1dGUgaW4gdGhpc1twZW5kaW5nQXR0cmlidXRlc1N5bWJvbF0pIHtcbiAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzW3BlbmRpbmdBdHRyaWJ1dGVzU3ltYm9sXVthdHRyaWJ1dGVdO1xuICAgICAgICAgIHJlZmxlY3RBdHRyaWJ1dGVUb0VsZW1lbnQodGhpcywgYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpc1twZW5kaW5nQXR0cmlidXRlc1N5bWJvbF0gPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuICAgICAgcmV0dXJuIGF0dHJpYnV0ZXNGb3JDbGFzcyh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQvdW5zZXQgdGhlIGF0dHJpYnV0ZSB3aXRoIHRoZSBpbmRpY2F0ZWQgbmFtZS5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGV4aXN0cyBwcmltYXJpbHkgdG8gaGFuZGxlIHRoZSBjYXNlIHdoZXJlIGFuIGVsZW1lbnQgd2FudHMgdG9cbiAgICAgKiBzZXQgYSBkZWZhdWx0IHByb3BlcnR5IHZhbHVlIHRoYXQgc2hvdWxkIGJlIHJlZmxlY3RlZCBhcyBhbiBhdHRyaWJ1dGUuIEFuXG4gICAgICogaW1wb3J0YW50IGxpbWl0YXRpb24gb2YgY3VzdG9tIGVsZW1lbnQgY29uc3R1cmN0b3JzIGlzIHRoYXQgdGhleSBjYW5ub3RcbiAgICAgKiBzZXQgYXR0cmlidXRlcy4gQSBjYWxsIHRvIGByZWZsZWN0QXR0cmlidXRlYCBkdXJpbmcgdGhlIGNvbnN0cnVjdG9yIHdpbGxcbiAgICAgKiBiZSBkZWZlcnJlZCB1bnRpbCB0aGUgZWxlbWVudCBpcyBjb25uZWN0ZWQgdG8gdGhlIGRvY3VtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZSAtIFRoZSBuYW1lIG9mIHRoZSAqYXR0cmlidXRlKiAobm90IHByb3BlcnR5KSB0byBzZXQuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIHNldC4gSWYgbnVsbCwgdGhlIGF0dHJpYnV0ZSB3aWxsIGJlIHJlbW92ZWQuXG4gICAgICovXG4gICAgcmVmbGVjdEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgICBpZiAodGhpc1tzYWZlVG9TZXRBdHRyaWJ1dGVzU3ltYm9sXSkge1xuICAgICAgICAvLyBTYWZlIHRvIHNldCBhdHRyaWJ1dGVzIGltbWVkaWF0ZWx5LlxuICAgICAgICByZWZsZWN0QXR0cmlidXRlVG9FbGVtZW50KHRoaXMsIGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRGVmZXIgc2V0dGluZyBhdHRyaWJ1dGVzIHVudGlsIHRoZSBmaXJzdCB0aW1lIHdlJ3JlIGNvbm5lY3RlZC5cbiAgICAgICAgaWYgKCF0aGlzW3BlbmRpbmdBdHRyaWJ1dGVzU3ltYm9sXSkge1xuICAgICAgICAgIHRoaXNbcGVuZGluZ0F0dHJpYnV0ZXNTeW1ib2xdID0ge307XG4gICAgICAgIH1cbiAgICAgICAgdGhpc1twZW5kaW5nQXR0cmlidXRlc1N5bWJvbF1bYXR0cmlidXRlXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIEF0dHJpYnV0ZU1hcnNoYWxsaW5nO1xufTtcblxuXG4vLyBDb252ZXJ0IGh5cGhlbmF0ZWQgZm9vLWJhciBhdHRyaWJ1dGUgbmFtZSB0byBjYW1lbCBjYXNlIGZvb0JhciBwcm9wZXJ0eSBuYW1lLlxuZnVuY3Rpb24gYXR0cmlidXRlVG9Qcm9wZXJ0eU5hbWUoYXR0cmlidXRlTmFtZSkge1xuICBsZXQgcHJvcGVydHlOYW1lID0gYXR0cmlidXRlVG9Qcm9wZXJ0eU5hbWVzW2F0dHJpYnV0ZU5hbWVdO1xuICBpZiAoIXByb3BlcnR5TmFtZSkge1xuICAgIC8vIENvbnZlcnQgYW5kIG1lbW9pemUuXG4gICAgbGV0IGh5cGVuUmVnRXggPSAvLShbYS16XSkvZztcbiAgICBwcm9wZXJ0eU5hbWUgPSBhdHRyaWJ1dGVOYW1lLnJlcGxhY2UoaHlwZW5SZWdFeCxcbiAgICAgICAgbWF0Y2ggPT4gbWF0Y2hbMV0udG9VcHBlckNhc2UoKSk7XG4gICAgYXR0cmlidXRlVG9Qcm9wZXJ0eU5hbWVzW2F0dHJpYnV0ZU5hbWVdID0gcHJvcGVydHlOYW1lO1xuICB9XG4gIHJldHVybiBwcm9wZXJ0eU5hbWU7XG59XG5cbmZ1bmN0aW9uIGF0dHJpYnV0ZXNGb3JDbGFzcyhjbGFzc0ZuKSB7XG5cbiAgLy8gV2UgdHJlYXQgdGhlIGVsZW1lbnQgYmFzZSBjbGFzc2VzIGFzIGlmIHRoZXkgaGF2ZSBubyBhdHRyaWJ1dGVzLCBzaW5jZSB3ZVxuICAvLyBkb24ndCB3YW50IHRvIHJlY2VpdmUgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIGZvciB0aGVtLlxuICBpZiAoY2xhc3NGbiA9PT0gSFRNTEVsZW1lbnQgfHwgY2xhc3NGbiA9PT0gT2JqZWN0KSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLy8gR2V0IGF0dHJpYnV0ZXMgZm9yIHBhcmVudCBjbGFzcy5cbiAgbGV0IGJhc2VDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihjbGFzc0ZuLnByb3RvdHlwZSkuY29uc3RydWN0b3I7XG4gIGxldCBiYXNlQXR0cmlidXRlcyA9IGF0dHJpYnV0ZXNGb3JDbGFzcyhiYXNlQ2xhc3MpO1xuXG4gIC8vIEdldCBhdHRyaWJ1dGVzIGZvciB0aGlzIGNsYXNzLlxuICBsZXQgcHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGNsYXNzRm4ucHJvdG90eXBlKTtcbiAgbGV0IHNldHRlck5hbWVzID0gcHJvcGVydHlOYW1lcy5maWx0ZXIocHJvcGVydHlOYW1lID0+XG4gICAgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoXG4gICAgICAgIGNsYXNzRm4ucHJvdG90eXBlLCBwcm9wZXJ0eU5hbWUpLnNldCA9PT0gJ2Z1bmN0aW9uJyk7XG4gIGxldCBhdHRyaWJ1dGVzID0gc2V0dGVyTmFtZXMubWFwKHNldHRlck5hbWUgPT5cbiAgICAgIHByb3BlcnR5TmFtZVRvQXR0cmlidXRlKHNldHRlck5hbWUpKTtcblxuICAvLyBNZXJnZS5cbiAgbGV0IGRpZmYgPSBhdHRyaWJ1dGVzLmZpbHRlcihhdHRyaWJ1dGUgPT5cbiAgICAgIGJhc2VBdHRyaWJ1dGVzLmluZGV4T2YoYXR0cmlidXRlKSA8IDApO1xuICByZXR1cm4gYmFzZUF0dHJpYnV0ZXMuY29uY2F0KGRpZmYpO1xufVxuXG4vLyBDb252ZXJ0IGEgY2FtZWwgY2FzZSBmb29CYXIgcHJvcGVydHkgbmFtZSB0byBhIGh5cGhlbmF0ZWQgZm9vLWJhciBhdHRyaWJ1dGUuXG5mdW5jdGlvbiBwcm9wZXJ0eU5hbWVUb0F0dHJpYnV0ZShwcm9wZXJ0eU5hbWUpIHtcbiAgbGV0IGF0dHJpYnV0ZSA9IHByb3BlcnR5TmFtZXNUb0F0dHJpYnV0ZXNbcHJvcGVydHlOYW1lXTtcbiAgaWYgKCFhdHRyaWJ1dGUpIHtcbiAgICAvLyBDb252ZXJ0IGFuZCBtZW1vaXplLlxuICAgIGxldCB1cHBlcmNhc2VSZWdFeCA9IC8oW0EtWl0pL2c7XG4gICAgYXR0cmlidXRlID0gcHJvcGVydHlOYW1lLnJlcGxhY2UodXBwZXJjYXNlUmVnRXgsICctJDEnKS50b0xvd2VyQ2FzZSgpO1xuICB9XG4gIHJldHVybiBhdHRyaWJ1dGU7XG59XG5cbi8vIFJlZmxlY3QgdGhlIGF0dHJpYnV0ZSB3aXRoIHRoZSBnaXZlbiBlbGVtZW50LlxuLy8gSWYgdGhlIGF0dHJpYnV0ZSBpcyBudWxsLCByZW1vdmUgdGhlIGF0dHJpYnV0ZS5cbmZ1bmN0aW9uIHJlZmxlY3RBdHRyaWJ1dGVUb0VsZW1lbnQoZWxlbWVudCwgYXR0cmlidXRlTmFtZSwgdmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCB2YWx1ZSk7XG4gIH1cbn1cbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggQ2xpY2tTZWxlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYXBzIGEgY2xpY2sgKGFjdHVhbGx5LCBhIG1vdXNlZG93bikgdG8gYSBzZWxlY3Rpb24uXG4gICAqXG4gICAqIFRoaXMgc2ltcGxlIG1peGluIGlzIHVzZWZ1bCBpbiBsaXN0IGJveC1saWtlIGVsZW1lbnRzLCB3aGVyZSBhIGNsaWNrIG9uIGFcbiAgICogbGlzdCBpdGVtIGltcGxpY2l0bHkgc2VsZWN0cyBpdC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIHRoZSBjb21wb25lbnQgdG8gcHJvdmlkZSBhbiBgaXRlbXNgIHByb3BlcnR5LiBZb3UgY2FuXG4gICAqIHByb3ZpZGUgdGhhdCBwcm9wZXJ0eSB5b3Vyc2VsZiwgb3IgdXNlIHRoZVxuICAgKiBbQ29udGVudEFzSXRlbXNdKENvbnRlbnRBc0l0ZW1zLm1kKSBtaXhpbi4gVGhpcyBtaXhpbiBhbHNvIGV4cGVjdHMgdGhlXG4gICAqIGNvbXBvbmVudCB0byBkZWZpbmUgYSBgc2VsZWN0ZWRJbmRleGAgcHJvcGVydHkuIFlvdSBjYW4gcHJvdmlkZSB0aGF0XG4gICAqIHlvdXJzZWxmLCBvciB1c2UgdGhlIFtTaW5nbGVTZWxlY3Rpb25dKFNpbmdsZVNlbGVjdGlvbi5tZCkgbWl4aW4uXG4gICAqL1xuICBjbGFzcyBDbGlja1NlbGVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgLypcbiAgICAgICAqIFJFVklFVzogV2hpY2ggZXZlbnQgc2hvdWxkIHdlIGxpc3RlbiB0byBoZXJlP1xuICAgICAgICpcbiAgICAgICAqIFRoZSBzdGFuZGFyZCB1c2UgZm9yIHRoaXMgbWl4aW4gaXMgaW4gbGlzdCBib3hlcy4gTGlzdCBib3hlcyBkb24ndFxuICAgICAgICogYXBwZWFyIHRvIGJlIGNvbnNpc3RlbnQgd2l0aCByZWdhcmQgdG8gd2hldGhlciB0aGV5IHNlbGVjdCBvbiBtb3VzZWRvd25cbiAgICAgICAqIG9yIGNsaWNrL21vdXNldXAuXG4gICAgICAgKi9cbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZXZlbnQgPT4ge1xuICAgICAgICBzZWxlY3RUYXJnZXQodGhpcywgZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgLy8gTm90ZTogV2UgZG9uJ3QgY2FsbCBwcmV2ZW50RGVmYXVsdCBoZXJlLiBUaGUgZGVmYXVsdCBiZWhhdmlvciBmb3JcbiAgICAgICAgLy8gbW91c2Vkb3duIGluY2x1ZGVzIHNldHRpbmcga2V5Ym9hcmQgZm9jdXMgaWYgdGhlIGVsZW1lbnQgZG9lc24ndFxuICAgICAgICAvLyBhbHJlYWR5IGhhdmUgdGhlIGZvY3VzLCBhbmQgd2Ugd2FudCB0byBwcmVzZXJ2ZSB0aGF0IGJlaGF2aW9yLlxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb24uIFRoaXMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgZ2V0IHNlbGVjdGVkSW5kZXgoKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRJbmRleDtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkSW5kZXgoaW5kZXgpIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRJbmRleCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJbmRleCA9IGluZGV4OyB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gQ2xpY2tTZWxlY3Rpb247XG59O1xuXG5cbi8vIFRPRE86IEhhbmRsZSB0aGUgY2FzZSB3aGVyZSBhIGxpc3QgaXRlbSBoYXMgc3ViZWxlbWVudHMuIFdhbGsgdXAgdGhlIERPTVxuLy8gaGllcmFyY2h5IHVudGlsIHdlIGZpbmQgYW4gaXRlbSBpbiB0aGUgbGlzdCwgb3IgY29tZSBiYWNrIHRvIHRoaXMgZWxlbWVudCxcbi8vIGluIHdoaWNoIGNhc2UgdGhlIGVsZW1lbnQgdGhhdCB3YXMgdGFwcGVkIGlzbid0IGFuIGl0ZW0gKGFuZCBzaG91bGQgYmVcbi8vIGlnbm9yZWQpLlxuZnVuY3Rpb24gc2VsZWN0VGFyZ2V0KGVsZW1lbnQsIHRhcmdldCkge1xuICBsZXQgaW5kZXggPSBlbGVtZW50Lml0ZW1zICYmIGVsZW1lbnQuaXRlbXMuaW5kZXhPZih0YXJnZXQpO1xuICBpZiAoaW5kZXggPj0gMCkge1xuICAgIGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICB9XG59XG4iLCIvKipcbiAqIEEgZ3JvdXAgb2YgZWxlbWVudHMgdGhhdCBoYXZlIGJlZW4gYXNzb2NpYXRlZCBmb3IgdGhlIHB1cnBvc2Ugb2ZcbiAqIGFjY29tcGxpc2hpbmcgc29tZSBjb2xsZWN0aXZlIGJlaGF2aW9yLCBlLmcuLCBrZXlib2FyZCBoYW5kbGluZy5cbiAqXG4gKiBUaGVyZSBhcmUgY2VydGFpbiBjb21wb25lbnRzIHRoYXQgd2FudCB0byBjb29wZXJhdGl2ZWx5IGhhbmRsZSB0aGUga2V5Ym9hcmQuXG4gKiBGb3IgZXhhbXBsZSwgdGhlIGJhc2ljLWFycm93LXNlbGVjdGlvbiBhbmQgYmFzaWMtcGFnZS1kb3RzIGNvbXBvbmVudHMgYXJlXG4gKiBvcHRpb25hbCBjb21wb25lbnRzIHRoYXQgY2FuIGF1Z21lbnQgdGhlIGFwcGVhcmFuY2UgYW5kIGJlaGF2aW9yIG9mIGFuIGlubmVyXG4gKiBiYXNpYy1jYXJvdXNlbCwgYWRkaW5nIGFycm93IGJ1dHRvbnMgYW5kIGRvdCBidXR0b25zLCByZXNwZWN0aXZlbHkuIFdoZW5cbiAqIHRoZXNlIGNvbXBvbmVudHMgYXJlIG5lc3RlZCB0b2dldGhlciwgdGhleSBmb3JtIGFuIGltcGxpY2l0IHVuaXQgY2FsbGVkIGFcbiAqICpjb2xsZWN0aXZlKjpcbiAqXG4gKiAgICAgPGJhc2ljLWFycm93LXNlbGVjdGlvbj5cbiAqICAgICAgIDxiYXNpYy1wYWdlLWRvdHM+XG4gKiAgICAgICAgIDxiYXNpYy1jYXJvdXNlbD5cbiAqICAgICAgICAgICAuLi4gaW1hZ2VzLCBldGMuIC4uLlxuICogICAgICAgICA8L2Jhc2ljLWNhcm91c2VsPlxuICogICAgICAgPC9iYXNpYy1wYWdlLWRvdHM+XG4gKiAgICAgPC9iYXNpYy1hcnJvdy1zZWxlY3Rpb24+XG4gKlxuICogSW4gdGhpcyBjb25maWd1cmF0aW9uLCB0aGUgdGhyZWUgY29tcG9uZW50cyB3aWxsIGFsbCBoYXZlIGEgYHRoaXMuY29sbGVjdGl2ZWBcbiAqIHJlZmVyZW5jZSB0aGF0IHJlZmVycyB0byBhIHNoYXJlZCBpbnN0YW5jZSBvZiB0aGUgYENvbGxlY3RpdmVgIGNsYXNzLlxuICpcbiAqIFRoZSBbS2V5Ym9hcmRdKEtleWJvYXJkLm1kKSBtaXhpbiB0aGV5IHVzZSBpcyBzZW5zaXRpdmUgdG8gdGhlIHByZXNlbmNlIG9mXG4gKiB0aGUgY29sbGVjdGl2ZS4gQW1vbmcgb3RoZXIgdGhpbmdzLCBpdCB3aWxsIGVuc3VyZSB0aGF0IG9ubHkgdGhlIG91dGVybW9zdFxuICogZWxlbWVudCBhYm92ZSDigJTCoHRoZSBiYXNpYy1hcnJvdy1zZWxlY3Rpb24g4oCUwqB3aWxsIGJlIGEgdGFiIHN0b3AgdGhhdCBjYW5cbiAqIHJlY2VpdmUgdGhlIGtleWJvYXJkIGZvY3VzLiBUaGlzIGxldHMgdGhlIHVzZXIgcGVyY2VpdmUgdGhlIGNvbXBvbmVudFxuICogYXJyYW5nZW1lbnQgYWJvdmUgYXMgYSBzaW5nbGUgdW5pdC4gVGhlIEtleWJvYXJkIG1peGluIHdpbGwgYWxzbyBnaXZlIGVhY2hcbiAqIGVsZW1lbnQgaW4gdGhlIGNvbGxlY3RpdmUgYSBjaGFuY2UgdG8gcHJvY2VzcyBhbnkga2V5Ym9hcmQgZXZlbnRzLiBTbywgZXZlblxuICogdGhvdWdoIHRoZSBiYXNpYy1hcnJvdy1zZWxlY3Rpb24gZWxlbWVudCB3aWxsIGhhdmUgdGhlIGZvY3VzLCB0aGUgc3RhbmRhcmRcbiAqIGtleWJvYXJkIG5hdmlnYXRpb24gcHJvdmlkZWQgYnkgYmFzaWMtY2Fyb3VzZWwgd2lsbCBjb250aW51ZSB0byB3b3JrLlxuICpcbiAqIFRoZSBbU2VsZWN0aW9uQXJpYUFjdGl2ZV0oU2VsZWN0aW9uQXJpYUFjdGl2ZS5tZCkgbWl4aW4gYWxzbyByZXNwZWN0c1xuICogY29sbGVjdGl2ZXMgd2hlbiB1c2luZyB0aGUgYGFyaWEtYWN0aXZlZGVzY2VuZGFudGAgYW5kIGByb2xlYCBhdHRyaWJ1dGVzLlxuICogVGhvc2Ugd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBvdXRlcm1vc3QgZWxlbWVudCAoYmFzaWMtYXJyb3ctc2VsZWN0aW9uLCBhYm92ZSlcbiAqIHNvIHRoYXQgQVJJQSBjYW4gY29ycmVjdGx5IHVuZGVyc3RhbmQgdGhlIGFycmFuZ2VtZW50IG9mIHRoZSBlbGVtZW50cy5cbiAqXG4gKiBZb3UgY2FuIHB1dCBlbGVtZW50cyBpbnRvIGNvbGxlY3RpdmVzIHlvdXJzZWxmLCBvciB5b3UgY2FuIHVzZSB0aGVcbiAqIFtUYXJnZXRJbkNvbGxlY3RpdmVdKFRhcmdldEluQ29sbGVjdGl2ZS5tZCkgbWl4aW4uXG4gKi9cbmNsYXNzIENvbGxlY3RpdmUge1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBjb2xsZWN0aXZlLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFTGVtZW50W119IFtlbGVtZW50c10gLSBJbml0aWFsIGVsZW1lbnRzIHRvIGFkZC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKC4uLmVsZW1lbnRzKSB7XG4gICAgLyoqXG4gICAgICogVGhlIGVsZW1lbnRzIGluIHRoZSBjb2xsZWN0aXZlLlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50W119XG4gICAgICovXG4gICAgdGhpcy5lbGVtZW50cyA9IFtdO1xuICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB0aGlzLmFzc2ltaWxhdGUoZWxlbWVudCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCB0aGUgaW5kaWNhdGVkIHRhcmdldCB0byB0aGUgY29sbGVjdGl2ZS5cbiAgICpcbiAgICogQnkgY29udmVudGlvbiwgaWYgdHdvIGVsZW1lbnRzIHdhbnRzIHRvIHBhcnRpY2lwYXRlIGluIGEgY29sbGVjdGl2ZSwgYW5kXG4gICAqIG9uZSBlbGVtZW50IGlzIGFuIGFuY2VzdG9yIG9mIHRoZSBvdGhlciBpbiB0aGUgRE9NLCB0aGUgYW5jZXN0b3Igc2hvdWxkXG4gICAqIGFzc2ltaWxhdGUgdGhlIGRlc2NlbmRhbnQgaW5zdGVhZCBvZiB0aGUgb3RoZXIgd2F5IGFyb3VuZC5cbiAgICpcbiAgICogQWZ0ZXIgYXNzaW1pbGF0aW9uLCBhbnkgZWxlbWVudCBpbiB0aGUgY29sbGVjdGl2ZSB0aGF0IGRlZmluZXMgYVxuICAgKiBgY29sbGVjdGl2ZUNoYW5nZWRgIG1ldGhvZCB3aWxsIGhhdmUgdGhhdCBtZXRob2QgaW52b2tlZC4gVGhpcyBhbGxvd3NcbiAgICogdGhlIGNvbGxlY3RpdmUncyBlbGVtZW50cyB0byByZXNwb25kIHRvIGNoYW5nZXMgaW4gdGhlIGNvbGxlY3RpdmUuXG4gICAqXG4gICAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fENvbGxlY3RpdmUpfSB0YXJnZXQgLSBUaGUgZWxlbWVudCBvciBjb2xsZWN0aXZlIHRvIGFkZC5cbiAgICovXG4gIGFzc2ltaWxhdGUodGFyZ2V0KSB7XG4gICAgbGV0IGNvbGxlY3RpdmVDaGFuZ2VkO1xuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBDb2xsZWN0aXZlKSB7XG4gICAgICBjb2xsZWN0aXZlQ2hhbmdlZCA9IGFzc2ltaWxhdGVDb2xsZWN0aXZlKHRoaXMsIHRhcmdldCk7XG4gICAgfSBlbHNlIGlmICh0YXJnZXQuY29sbGVjdGl2ZSkge1xuICAgICAgLy8gVGFyZ2V0IGlzIGFscmVhZHkgcGFydCBvZiBhIGNvbGxlY3RpdmUsIGFzc2ltaWxhdGUgaXQuXG4gICAgICBjb2xsZWN0aXZlQ2hhbmdlZCA9IGFzc2ltaWxhdGVDb2xsZWN0aXZlKHRoaXMsIHRhcmdldC5jb2xsZWN0aXZlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQXNzaW1pbGF0ZSBhbiBpbmRpdmlkdWFsIGVsZW1lbnQuXG4gICAgICBjb2xsZWN0aXZlQ2hhbmdlZCA9IGFzc2ltaWxhdGVFbGVtZW50KHRoaXMsIHRhcmdldCk7XG4gICAgfVxuXG4gICAgaWYgKGNvbGxlY3RpdmVDaGFuZ2VkKSB7XG4gICAgICB0aGlzLmludm9rZU1ldGhvZCgnY29sbGVjdGl2ZUNoYW5nZWQnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW52b2tlIGEgbWV0aG9kIG9uIGFsbCBlbGVtZW50cyBpbiB0aGUgY29sbGVjdGl2ZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZCAtIFRoZSBuYW1lIG9mIHRoZSBtZXRob2QgdG8gaW52b2tlIG9uIGFsbCBlbGVtZW50cy5cbiAgICogQHBhcmFtIHtvYmplY3RbXX0gW2FyZ3NdIC0gVGhlIGFyZ3VtZW50cyB0byB0aGUgbWV0aG9kXG4gICAqL1xuICBpbnZva2VNZXRob2QobWV0aG9kLCAuLi5hcmdzKSB7XG4gICAgLy8gSW52b2tlIGZyb20gaW5uZXJtb3N0IHRvIG91dGVybW9zdC5cbiAgICBsZXQgZWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzO1xuICAgIGZvciAobGV0IGkgPSBlbGVtZW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcbiAgICAgIGlmIChlbGVtZW50W21ldGhvZF0pIHtcbiAgICAgICAgZWxlbWVudFttZXRob2RdLmFwcGx5KGVsZW1lbnQsIGFyZ3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgb3V0ZXJtb3N0IGVsZW1lbnQgaW4gdGhlIGNvbGxlY3RpdmUuXG4gICAqIEJ5IGNvbnZlbnRpb24sIHRoaXMgaXMgdGhlIGZpcnN0IGVsZW1lbnQgaW4gdGhlIGBlbGVtZW50c2AgYXJyYXkuXG4gICAqL1xuICBnZXQgb3V0ZXJtb3N0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50c1swXTtcbiAgfVxuXG59XG5cblxuLy8gVGhlIGZpcnN0IGNvbGxlY3RpdmUgYXNzaW1pbGF0ZXMgdGhlIHNlY29uZC5cbmZ1bmN0aW9uIGFzc2ltaWxhdGVDb2xsZWN0aXZlKGNvbGxlY3RpdmUxLCBjb2xsZWN0aXZlMikge1xuICBpZiAoY29sbGVjdGl2ZTEgPT09IGNvbGxlY3RpdmUyKSB7XG4gICAgLy8gQ29sbGVjdGl2ZXMgYXJlIHNhbWU7IGlnbm9yZS5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBsZXQgZWxlbWVudHMgPSBjb2xsZWN0aXZlMi5lbGVtZW50cztcblxuICAvLyBPbGQgY29sbGVjdGl2ZSB3aWxsIG5vIGxvbmdlciBoYXZlIGFueSBlbGVtZW50cyBvZiBpdHMgb3duLlxuICBjb2xsZWN0aXZlMi5lbGVtZW50cyA9IFtdO1xuXG4gIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgYXNzaW1pbGF0ZUVsZW1lbnQoY29sbGVjdGl2ZTEsIGVsZW1lbnQpO1xuICB9KTtcblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuXG4vLyBBc3NpbWlsYXRlIHRoZSBpbmRpY2F0ZWQgZWxlbWVudC5cbmZ1bmN0aW9uIGFzc2ltaWxhdGVFbGVtZW50KGNvbGxlY3RpdmUsIGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQuY29sbGVjdGl2ZSA9PT0gY29sbGVjdGl2ZSkge1xuICAgIC8vIEFscmVhZHkgcGFydCBvZiB0aGlzIGNvbGxlY3RpdmUuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGVsZW1lbnQuY29sbGVjdGl2ZSA9IGNvbGxlY3RpdmU7XG4gIGNvbGxlY3RpdmUuZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgcmV0dXJuIHRydWU7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQ29sbGVjdGl2ZTtcbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggQ29tcG9zYWJsZS4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHRvIG1ha2UgYSBjbGFzcyBtb3JlIGVhc2lseSBjb21wb3NhYmxlIHdpdGggb3RoZXIgbWl4aW5zLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGNvbnRyaWJ1dGVzIGEgYGNvbXBvc2VgIG1ldGhvZCB0aGF0IGFwcGxpZXMgYSBzZXQgb2YgbWl4aW5cbiAgICogZnVuY3Rpb25zIGFuZCByZXR1cm5zIHRoZSByZXN1bHRpbmcgbmV3IGNsYXNzLiBUaGlzIHN1Z2FyIGNhbiBtYWtlIHRoZVxuICAgKiBhcHBsaWNhdGlvbiBvZiBtYW55IG1peGlucyBhdCBvbmNlIGVhc2llciB0byByZWFkLlxuICAgKi9cbiAgY2xhc3MgQ29tcG9zYWJsZSBleHRlbmRzIGJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogQXBwbHkgYSBzZXQgb2YgbWl4aW4gZnVuY3Rpb25zIG9yIG1peGluIG9iamVjdHMgdG8gdGhlIHByZXNlbnQgY2xhc3MgYW5kXG4gICAgICogcmV0dXJuIHRoZSBuZXcgY2xhc3MuXG4gICAgICpcbiAgICAgKiBJbnN0ZWFkIG9mIHdyaXRpbmc6XG4gICAgICpcbiAgICAgKiAgICAgbGV0IE15Q2xhc3MgPSBNaXhpbjEoTWl4aW4yKE1peGluMyhNaXhpbjQoTWl4aW41KEJhc2VDbGFzcykpKSkpO1xuICAgICAqXG4gICAgICogWW91IGNhbiB3cml0ZTpcbiAgICAgKlxuICAgICAqICAgICBsZXQgTXlDbGFzcyA9IENvbXBvc2FibGUoQmFzZUNsYXNzKS5jb21wb3NlKFxuICAgICAqICAgICAgIE1peGluMSxcbiAgICAgKiAgICAgICBNaXhpbjIsXG4gICAgICogICAgICAgTWl4aW4zLFxuICAgICAqICAgICAgIE1peGluNCxcbiAgICAgKiAgICAgICBNaXhpbjVcbiAgICAgKiAgICAgKTtcbiAgICAgKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gY2FuIGFsc28gdGFrZSBtaXhpbiBvYmplY3RzLiBBIG1peGluIG9iamVjdCBpcyBqdXN0IGFcbiAgICAgKiBzaG9ydGhhbmQgZm9yIGEgbWl4aW4gZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgbmV3IHN1YmNsYXNzIHdpdGggdGhlIGdpdmVuXG4gICAgICogbWVtYmVycy4gVGhlIG1peGluIG9iamVjdCdzIG1lbWJlcnMgYXJlICpub3QqIGNvcGllZCBkaXJlY3RseSBvbnRvIHRoZVxuICAgICAqIHByb3RvdHlwZSBvZiB0aGUgYmFzZSBjbGFzcywgYXMgd2l0aCB0cmFkaXRpb25hbCBtaXhpbnMuXG4gICAgICpcbiAgICAgKiBJbiBhZGRpdGlvbiB0byBwcm92aWRpbmcgc3ludGFjdGljIHN1Z2FyLCB0aGlzIG1peGluIGNhbiBiZSB1c2VkIHRvXG4gICAgICogZGVmaW5lIGEgY2xhc3MgaW4gRVM1LCB3aGljaCBsYWNrcyBFUzYncyBgY2xhc3NgIGtleXdvcmQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gey4uLm1peGluc30gbWl4aW5zIC0gQSBzZXQgb2YgbWl4aW4gZnVuY3Rpb25zIG9yIG9iamVjdHMgdG8gYXBwbHkuXG4gICAgICovXG4gICAgc3RhdGljIGNvbXBvc2UoLi4ubWl4aW5zKSB7XG4gICAgICAvLyBXZSBjcmVhdGUgYSBuZXcgc3ViY2xhc3MgZm9yIGVhY2ggbWl4aW4gaW4gdHVybi4gVGhlIHJlc3VsdCBiZWNvbWVzXG4gICAgICAvLyB0aGUgYmFzZSBjbGFzcyBleHRlbmRlZCBieSBhbnkgc3Vic2VxdWVudCBtaXhpbnMuIEl0IHR1cm5zIG91dCB0aGF0XG4gICAgICAvLyB3ZSBjYW4gdXNlIEFycmF5LnJlZHVjZSgpIHRvIGNvbmNpc2VseSBleHByZXNzIHRoaXMsIHVzaW5nIHRoZSBjdXJyZW50XG4gICAgICAvLyBvYmplY3QgYXMgdGhlIHNlZWQgZm9yIHJlZHVjZSgpLlxuICAgICAgcmV0dXJuIG1peGlucy5yZWR1Y2UoY29tcG9zZUNsYXNzLCB0aGlzKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBDb21wb3NhYmxlO1xufTtcblxuXG4vLyBQcm9wZXJ0aWVzIGRlZmluZWQgYnkgT2JqZWN0IHRoYXQgd2UgZG9uJ3Qgd2FudCB0byBtaXhpbi5cbmNvbnN0IE5PTl9NSVhBQkxFX09CSkVDVF9QUk9QRVJUSUVTID0gW1xuICAnY29uc3RydWN0b3InXG5dO1xuXG4vKlxuICogQXBwbHkgdGhlIG1peGluIHRvIHRoZSBnaXZlbiBiYXNlIGNsYXNzIHRvIHJldHVybiBhIG5ldyBjbGFzcy5cbiAqIFRoZSBtaXhpbiBjYW4gZWl0aGVyIGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBtb2RpZmllZCBjbGFzcywgb3IgYVxuICogcGxhaW4gb2JqZWN0IHdob3NlIG1lbWJlcnMgd2lsbCBiZSBjb3BpZWQgdG8gdGhlIG5ldyBjbGFzcycgcHJvdG90eXBlLlxuICovXG5mdW5jdGlvbiBjb21wb3NlQ2xhc3MoYmFzZSwgbWl4aW4pIHtcbiAgaWYgKHR5cGVvZiBtaXhpbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIE1peGluIGZ1bmN0aW9uXG4gICAgcmV0dXJuIG1peGluKGJhc2UpO1xuICB9IGVsc2Uge1xuICAgIC8vIE1peGluIG9iamVjdFxuICAgIGNsYXNzIFN1YmNsYXNzIGV4dGVuZHMgYmFzZSB7fVxuICAgIGNvcHlPd25Qcm9wZXJ0aWVzKG1peGluLCBTdWJjbGFzcy5wcm90b3R5cGUsIE5PTl9NSVhBQkxFX09CSkVDVF9QUk9QRVJUSUVTKTtcbiAgICByZXR1cm4gU3ViY2xhc3M7XG4gIH1cbn1cblxuXG4vKlxuICogQ29weSB0aGUgZ2l2ZW4gcHJvcGVydGllcy9tZXRob2RzIHRvIHRoZSB0YXJnZXQuXG4gKiBSZXR1cm4gdGhlIHVwZGF0ZWQgdGFyZ2V0LlxuICovXG5mdW5jdGlvbiBjb3B5T3duUHJvcGVydGllcyhzb3VyY2UsIHRhcmdldCwgaWdub3JlUHJvcGVydHlOYW1lcyA9IFtdKSB7XG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZSkuZm9yRWFjaChuYW1lID0+IHtcbiAgICBpZiAoaWdub3JlUHJvcGVydHlOYW1lcy5pbmRleE9mKG5hbWUpIDwgMCkge1xuICAgICAgbGV0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgbmFtZSk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdGFyZ2V0O1xufVxuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5pbXBvcnQgdG9nZ2xlQ2xhc3MgZnJvbSAnLi90b2dnbGVDbGFzcyc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IGl0ZW1zU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdpdGVtcycpO1xuY29uc3QgaXRlbUluaXRpYWxpemVkU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdpdGVtSW5pdGlhbGl6ZWQnKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIENvbnRlbnRBc0l0ZW1zLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFwcyBjb250ZW50IHNlbWFudGljcyAoZWxlbWVudHMpIHRvIGxpc3QgaXRlbSBzZW1hbnRpY3MuXG4gICAqXG4gICAqIEl0ZW1zIGRpZmZlciBmcm9tIGVsZW1lbnQgY29udGVudHMgaW4gc2V2ZXJhbCB3YXlzOlxuICAgKlxuICAgKiAqIFRoZXkgYXJlIG9mdGVuIHJlZmVyZW5jZWQgdmlhIGluZGV4LlxuICAgKiAqIFRoZXkgbWF5IGhhdmUgYSBzZWxlY3Rpb24gc3RhdGUuXG4gICAqICogSXQncyBjb21tb24gdG8gZG8gd29yayB0byBpbml0aWFsaXplIHRoZSBhcHBlYXJhbmNlIG9yIHN0YXRlIG9mIGEgbmV3XG4gICAqICAgaXRlbS5cbiAgICogKiBBdXhpbGlhcnkgaW52aXNpYmxlIGNoaWxkIGVsZW1lbnRzIGFyZSBmaWx0ZXJlZCBvdXQgYW5kIG5vdCBjb3VudGVkIGFzXG4gICAqICAgaXRlbXMuIEF1eGlsaWFyeSBlbGVtZW50cyBpbmNsdWRlIGxpbmssIHNjcmlwdCwgc3R5bGUsIGFuZCB0ZW1wbGF0ZVxuICAgKiAgIGVsZW1lbnRzLiBUaGlzIGZpbHRlcmluZyBlbnN1cmVzIHRoYXQgdGhvc2UgYXV4aWxpYXJ5IGVsZW1lbnRzIGNhbiBiZVxuICAgKiAgIHVzZWQgaW4gbWFya3VwIGluc2lkZSBvZiBhIGxpc3Qgd2l0aG91dCBiZWluZyB0cmVhdGVkIGFzIGxpc3QgaXRlbXMuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIGNvbXBvbmVudCB0byBwcm92aWRlIGEgYGNvbnRlbnRgIHByb3BlcnR5IHJldHVybmluZyBhXG4gICAqIHJhdyBzZXQgb2YgZWxlbWVudHMuIFlvdSBjYW4gcHJvdmlkZSB0aGF0IHlvdXJzZWxmLCBvciB1c2UgdGhlXG4gICAqIFtEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50XShEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50Lm1kKSBtaXhpbi5cbiAgICpcbiAgICogVGhlIG1vc3QgY29tbW9ubHkgcmVmZXJlbmNlZCBwcm9wZXJ0eSBkZWZpbmVkIGJ5IHRoaXMgbWl4aW4gaXMgdGhlIGBpdGVtc2BcbiAgICogcHJvcGVydHkuIFRvIGF2b2lkIGhhdmluZyB0byBkbyB3b3JrIGVhY2ggdGltZSB0aGF0IHByb3BlcnR5IGlzIHJlcXVlc3RlZCxcbiAgICogdGhpcyBtaXhpbiBzdXBwb3J0cyBhbiBvcHRpbWl6ZWQgbW9kZS4gSWYgeW91IGludm9rZSB0aGUgYGNvbnRlbnRDaGFuZ2VkYFxuICAgKiBtZXRob2Qgd2hlbiB0aGUgc2V0IG9mIGl0ZW1zIGNoYW5nZXMsIHRoZSBtaXhpbiBjb25jbHVkZXMgdGhhdCB5b3UnbGwgdGFrZVxuICAgKiBjYXJlIG9mIG5vdGlmeWluZyBpdCBvZiBmdXR1cmUgY2hhbmdlcywgYW5kIHR1cm5zIG9uIHRoZSBvcHRpbWl6YXRpb24uIFdpdGhcbiAgICogdGhhdCBvbiwgdGhlIG1peGluIHNhdmVzIGEgcmVmZXJlbmNlIHRvIHRoZSBjb21wdXRlZCBzZXQgb2YgaXRlbXMsIGFuZCB3aWxsXG4gICAqIHJldHVybiB0aGF0IGltbWVkaWF0ZWx5IG9uIHN1YnNlcXVlbnQgY2FsbHMgdG8gdGhlIGBpdGVtc2AgcHJvcGVydHkuIElmIHlvdVxuICAgKiB1c2UgdGhpcyBtaXhpbiBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZVxuICAgKiBbRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudF0oRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudC5tZCkgbWl4aW4sIHRoZVxuICAgKiBgY29udGVudENoYW5nZWRgIG1ldGhvZCB3aWxsIGJlIGludm9rZWQgZm9yIHlvdSB3aGVuIHRoZSBlbGVtZW50J3MgY2hpbGRyZW5cbiAgICogY2hhbmdlLCB0dXJuaW5nIG9uIHRoZSBvcHRpbWl6YXRpb24gYXV0b21hdGljYWxseS5cbiAgICovXG4gIGNsYXNzIENvbnRlbnRBc0l0ZW1zIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKipcbiAgICAgKiBBcHBseSB0aGUgc2VsZWN0aW9uIHN0YXRlIHRvIGEgc2luZ2xlIGl0ZW0uXG4gICAgICpcbiAgICAgKiBJbnZva2UgdGhpcyBtZXRob2QgdG8gc2lnbmFsIHRoYXQgdGhlIHNlbGVjdGVkIHN0YXRlIG9mIHRoZSBpbmRpY2F0ZWQgaXRlbVxuICAgICAqIGhhcyBjaGFuZ2VkLiBCeSBkZWZhdWx0LCB0aGlzIGFwcGxpZXMgYSBgc2VsZWN0ZWRgIENTUyBjbGFzcyBpZiB0aGUgaXRlbVxuICAgICAqIGlzIHNlbGVjdGVkLCBhbmQgcmVtb3ZlZCBpdCBpZiBub3Qgc2VsZWN0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gVGhlIGl0ZW0gd2hvc2Ugc2VsZWN0aW9uIHN0YXRlIGhhcyBjaGFuZ2VkLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2VsZWN0ZWQgLSBUcnVlIGlmIHRoZSBpdGVtIGlzIHNlbGVjdGVkLCBmYWxzZSBpZiBub3QuXG4gICAgICovXG4gICAgYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpIHtcbiAgICAgIGlmIChzdXBlci5hcHBseVNlbGVjdGlvbikgeyBzdXBlci5hcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCk7IH1cbiAgICAgIHRvZ2dsZUNsYXNzKGl0ZW0sICdzZWxlY3RlZCcsIHNlbGVjdGVkKTtcbiAgICB9XG5cbiAgICBjb250ZW50Q2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5jb250ZW50Q2hhbmdlZCkgeyBzdXBlci5jb250ZW50Q2hhbmdlZCgpOyB9XG5cbiAgICAgIC8vIFNpbmNlIHdlIGdvdCB0aGUgY29udGVudENoYW5nZWQgY2FsbCwgd2UnbGwgYXNzdW1lIHdlJ2xsIGJlIG5vdGlmaWVkIGlmXG4gICAgICAvLyB0aGUgc2V0IG9mIGl0ZW1zIGNoYW5nZXMgbGF0ZXIuIFdlIHR1cm4gb24gbWVtb2l6YXRpb24gb2YgdGhlIGl0ZW1zXG4gICAgICAvLyBwcm9wZXJ0eSBieSBzZXR0aW5nIG91ciBpbnRlcm5hbCBwcm9wZXJ0eSB0byBudWxsIChpbnN0ZWFkIG9mXG4gICAgICAvLyB1bmRlZmluZWQpLlxuICAgICAgdGhpc1tpdGVtc1N5bWJvbF0gPSBudWxsO1xuXG4gICAgICB0aGlzLml0ZW1zQ2hhbmdlZCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbmV2ZXIgYSBuZXcgaXRlbSBpcyBhZGRlZCB0byB0aGUgbGlzdC5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy4gWW91IGNhbiBvdmVycmlkZVxuICAgICAqIHRoaXMgdG8gcGVyZm9ybSBwZXItaXRlbSBpbml0aWFsaXphdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW0gLSBUaGUgaXRlbSB0aGF0IHdhcyBhZGRlZC5cbiAgICAgKi9cbiAgICBpdGVtQWRkZWQoaXRlbSkge1xuICAgICAgaWYgKHN1cGVyLml0ZW1BZGRlZCkgeyBzdXBlci5pdGVtQWRkZWQoaXRlbSk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBzZXQgb2YgaXRlbXMgaW4gdGhlIGxpc3QuIFNlZSB0aGUgdG9wLWxldmVsIGRvY3VtZW50YXRpb24gZm9yXG4gICAgICogbWl4aW4gZm9yIGEgZGVzY3JpcHRpb24gb2YgaG93IGl0ZW1zIGRpZmZlciBmcm9tIHBsYWluIGNvbnRlbnQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX1cbiAgICAgKi9cbiAgICBnZXQgaXRlbXMoKSB7XG4gICAgICBsZXQgaXRlbXM7XG4gICAgICBpZiAodGhpc1tpdGVtc1N5bWJvbF0gPT0gbnVsbCkge1xuICAgICAgICBpdGVtcyA9IGZpbHRlckF1eGlsaWFyeUVsZW1lbnRzKHRoaXMuY29udGVudCk7XG4gICAgICAgIC8vIE5vdGU6IHRlc3QgZm9yICplcXVhbGl0eSogd2l0aCBudWxsOyBkb24ndCB0cmVhdCB1bmRlZmluZWQgYXMgYSBtYXRjaC5cbiAgICAgICAgaWYgKHRoaXNbaXRlbXNTeW1ib2xdID09PSBudWxsKSB7XG4gICAgICAgICAgLy8gTWVtb2l6ZSB0aGUgc2V0IG9mIGl0ZW1zLlxuICAgICAgICAgIHRoaXNbaXRlbXNTeW1ib2xdID0gaXRlbXM7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJldHVybiB0aGUgbWVtb2l6ZWQgaXRlbXMuXG4gICAgICAgIGl0ZW1zID0gdGhpc1tpdGVtc1N5bWJvbF07XG4gICAgICB9XG4gICAgICByZXR1cm4gaXRlbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuIHRoZSB1bmRlcmx5aW5nIGNvbnRlbnRzIGNoYW5nZS4gSXQgaXMgYWxzb1xuICAgICAqIGludm9rZWQgb24gY29tcG9uZW50IGluaXRpYWxpemF0aW9uIOKAkyBzaW5jZSB0aGUgaXRlbXMgaGF2ZSBcImNoYW5nZWRcIiBmcm9tXG4gICAgICogYmVpbmcgbm90aGluZy5cbiAgICAgKi9cbiAgICBpdGVtc0NoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuaXRlbXNDaGFuZ2VkKSB7IHN1cGVyLml0ZW1zQ2hhbmdlZCgpOyB9XG5cbiAgICAgIC8vIFBlcmZvcm0gcGVyLWl0ZW0gaW5pdGlhbGl6YXRpb24uXG4gICAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGlmICghaXRlbVtpdGVtSW5pdGlhbGl6ZWRTeW1ib2xdKSB7XG4gICAgICAgICAgdGhpcy5pdGVtQWRkZWQoaXRlbSk7XG4gICAgICAgICAgaXRlbVtpdGVtSW5pdGlhbGl6ZWRTeW1ib2xdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2l0ZW1zLWNoYW5nZWQnKSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBAZXZlbnQgaXRlbXMtY2hhbmdlZFxuICAgICAqXG4gICAgICogVGhpcyBldmVudCBpcyByYWlzZWQgd2hlbiB0aGUgc2V0IG9mIGl0ZW1zIGNoYW5nZXMuXG4gICAgICovXG4gIH1cblxuICByZXR1cm4gQ29udGVudEFzSXRlbXM7XG59O1xuXG5cbi8vIFJldHVybiB0aGUgZ2l2ZW4gZWxlbWVudHMsIGZpbHRlcmluZyBvdXQgYXV4aWxpYXJ5IGVsZW1lbnRzIHRoYXQgYXJlbid0XG4vLyB0eXBpY2FsbHkgdmlzaWJsZS4gSXRlbXMgd2hpY2ggYXJlIG5vdCBlbGVtZW50cyBhcmUgcmV0dXJuZWQgYXMgaXMuXG5mdW5jdGlvbiBmaWx0ZXJBdXhpbGlhcnlFbGVtZW50cyhpdGVtcykge1xuICBsZXQgYXV4aWxpYXJ5VGFncyA9IFtcbiAgICAnbGluaycsXG4gICAgJ3NjcmlwdCcsXG4gICAgJ3N0eWxlJyxcbiAgICAndGVtcGxhdGUnXG4gIF07XG4gIHJldHVybiBbXS5maWx0ZXIuY2FsbChpdGVtcywgZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiAhaXRlbS5sb2NhbE5hbWUgfHwgYXV4aWxpYXJ5VGFncy5pbmRleE9mKGl0ZW0ubG9jYWxOYW1lKSA8IDA7XG4gIH0pO1xufVxuXG5cbi8qKlxuICogRmlyZXMgd2hlbiB0aGUgaXRlbXMgaW4gdGhlIGxpc3QgY2hhbmdlLlxuICpcbiAqIEBtZW1iZXJvZiBDb250ZW50QXNJdGVtc1xuICogQGV2ZW50IGl0ZW1zLWNoYW5nZWRcbiAqL1xuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IHRhcmdldFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgndGFyZ2V0Jyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBDb250ZW50Rmlyc3RDaGlsZFRhcmdldC4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHRoYXQgZGVmaW5lcyB0aGUgdGFyZ2V0IG9mIGEgY29tcG9uZW50IOKAlCB0aGUgZWxlbWVudCB0aGUgY29tcG9uZW50IGlzXG4gICAqIG1hbmFnaW5nIG9yIHNvbWVob3cgcmVzcG9uc2libGUgZm9yIOKAlCBhcyBpdHMgZmlyc3QgY2hpbGQuXG4gICAqXG4gICAqIFNvbWUgY29tcG9uZW50cyBzZXJ2ZSB0byBkZWNvcmF0ZSBvciBtb2RpZnkgb3RoZXIgZWxlbWVudHMuIEEgY29tbW9uXG4gICAqIHBhdHRlcm4gaXMgdG8gaGF2ZSBvbmUgY29tcG9uZW50IHdyYXAgYW5vdGhlciwgYW5kIGhhdmUgdGhlIG91dGVyLCBwYXJlbnRcbiAgICogY29tcG9uZW50IGltcGxpY2l0bHkgbW9kaWZ5IHRoZSBjaGlsZC4gVGhpcyBtaXhpbiBmYWNpbGl0YXRlcyB0aGlzIGJ5XG4gICAqIGltcGxpY2l0bHkgdGFraW5nIGFuIGVsZW1lbnQncyBmaXJzdCBjaGlsZCBhcyBpdHMgXCJ0YXJnZXRcIi5cbiAgICpcbiAgICogRXhhbXBsZTpcbiAgICpcbiAgICogICAgIDxvdXRlci1lbGVtZW50PlxuICAgKiAgICAgICA8aW5uZXItZWxlbWVudD48L2lubmVyLWVsZW1lbnQ+XG4gICAqICAgICA8L291dGVyLWVsZW1lbnQ+XG4gICAqXG4gICAqIElmIGBvdXRlci1lbGVtZW50YCB1c2VzIHRoaXMgbWl4aW4sIHRoZW4gaXRzIGB0YXJnZXRgIHByb3BlcnR5IHdpbGwgYmVcbiAgICogc2V0IHRvIHBvaW50IHRvIHRoZSBgaW5uZXItZWxlbWVudGAsIGJlY2F1c2UgdGhhdCBpcyBpdHMgZmlyc3QgY2hpbGQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIGBjb250ZW50YCBwcm9wZXJ0eSB0aGF0IHJldHVybnMgdGhlIGVsZW1lbnQncyBjb250ZW50LlxuICAgKiBZb3UgY2FuIGltcGxlbWVudCB0aGF0IHlvdXJzZWxmLCBvciB1c2UgdGhlXG4gICAqIFtEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50XShEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50Lm1kKSBtaXhpbi5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBjYW4gYmUgY29tYmluZWQgd2l0aCB0aGVcbiAgICogW1RhcmdldEluQ29sbGVjdGl2ZV0oVGFyZ2V0SW5Db2xsZWN0aXZlLm1kKSBtaXhpbiB0byBoYXZlIGEgY29tcG9uZW50XG4gICAqIHBhcnRpY2lwYXRlIGluIGNvbGxlY3RpdmUga2V5Ym9hcmQgaGFuZGxpbmcuXG4gICAqL1xuICBjbGFzcyBDb250ZW50Rmlyc3RDaGlsZFRhcmdldCBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29udGVudENoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuY29udGVudENoYW5nZWQpIHsgc3VwZXIuY29udGVudENoYW5nZWQoKTsgfVxuICAgICAgbGV0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQ7XG4gICAgICBsZXQgdGFyZ2V0ID0gY29udGVudCAmJiBjb250ZW50WzBdO1xuICAgICAgLy8gQSBjb21wb25lbnQgdXNpbmcgYSB0YXJnZXQgd2lsbCBsaWtlbHkgZG8gYSBidW5jaCBvZiB3b3JrIHdoZW4gdGhlXG4gICAgICAvLyB0YXJnZXQgY2hhbmdlcywgc28gb25seSBzZXQgdGhlIHRhcmdldCBpZiBpdCdzIGFjdHVhbGx5IGNoYW5nZWQuXG4gICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldCAhPT0gdGhpcy50YXJnZXQpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cy9zZXRzIHRoZSBjdXJyZW50IHRhcmdldCBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGdldCB0YXJnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpc1t0YXJnZXRTeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgdGFyZ2V0KGVsZW1lbnQpIHtcbiAgICAgIHRoaXNbdGFyZ2V0U3ltYm9sXSA9IGVsZW1lbnQ7XG4gICAgICBpZiAoJ3RhcmdldCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIudGFyZ2V0ID0gZWxlbWVudDsgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0O1xufTtcbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggRGlyZWN0aW9uU2VsZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFwcyBkaXJlY3Rpb24gc2VtYW50aWNzIChnb0xlZnQsIGdvUmlnaHQsIGV0Yy4pIHRvIHNlbGVjdGlvblxuICAgKiBzZW1hbnRpY3MgKHNlbGVjdFByZXZpb3VzLCBzZWxlY3ROZXh0LCBldGMuKS5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBjYW4gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZVxuICAgKiBbS2V5Ym9hcmREaXJlY3Rpb25dKEtleWJvYXJkRGlyZWN0aW9uLm1kKSBtaXhpbiAod2hpY2ggbWFwcyBrZXlib2FyZCBldmVudHNcbiAgICogdG8gZGlyZWN0aW9ucykgYW5kIGEgbWl4aW4gdGhhdCBoYW5kbGVzIHNlbGVjdGlvbiBsaWtlXG4gICAqIFtTaW5nbGVTZWxlY3Rpb25dKFNpbmdsZVNlbGVjdGlvbi5tZCkuXG4gICAqL1xuICBjbGFzcyBEaXJlY3Rpb25TZWxlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIGdvRG93bigpIHtcbiAgICAgIGlmIChzdXBlci5nb0Rvd24pIHsgc3VwZXIuZ29Eb3duKCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdE5leHQoKTtcbiAgICB9XG5cbiAgICBnb0VuZCgpIHtcbiAgICAgIGlmIChzdXBlci5nb0VuZCkgeyBzdXBlci5nb0VuZCgpOyB9XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RMYXN0KCk7XG4gICAgfVxuXG4gICAgZ29MZWZ0KCkge1xuICAgICAgaWYgKHN1cGVyLmdvTGVmdCkgeyBzdXBlci5nb0xlZnQoKTsgfVxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0UHJldmlvdXMoKTtcbiAgICB9XG5cbiAgICBnb1JpZ2h0KCkge1xuICAgICAgaWYgKHN1cGVyLmdvUmlnaHQpIHsgc3VwZXIuZ29SaWdodCgpOyB9XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3ROZXh0KCk7XG4gICAgfVxuXG4gICAgZ29TdGFydCgpIHtcbiAgICAgIGlmIChzdXBlci5nb1N0YXJ0KSB7IHN1cGVyLmdvU3RhcnQoKTsgfVxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0Rmlyc3QoKTtcbiAgICB9XG5cbiAgICBnb1VwKCkge1xuICAgICAgaWYgKHN1cGVyLmdvVXApIHsgc3VwZXIuZ29VcCgpOyB9XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RQcmV2aW91cygpO1xuICAgIH1cblxuICAgIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb24uIFRoaXMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgZ2V0IHNlbGVjdGVkRnJhY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRGcmFjdGlvbjtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkRnJhY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRGcmFjdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbi4gVGhpcyB3aWxsIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICBzZWxlY3RGaXJzdCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RGaXJzdCkgeyByZXR1cm4gc3VwZXIuc2VsZWN0Rmlyc3QoKTsgfVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb24uIFRoaXMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgc2VsZWN0TGFzdCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RMYXN0KSB7IHJldHVybiBzdXBlci5zZWxlY3RMYXN0KCk7IH1cbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLiBUaGlzIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgIHNlbGVjdE5leHQoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0TmV4dCkgeyByZXR1cm4gc3VwZXIuc2VsZWN0TmV4dCgpOyB9XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbi4gVGhpcyB3aWxsIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICBzZWxlY3RQcmV2aW91cygpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RQcmV2aW91cykgeyByZXR1cm4gc3VwZXIuc2VsZWN0UHJldmlvdXMoKTsgfVxuICAgIH1cblxuICAgIC8vIE1hcCBkcmFnIHRyYXZlbCBmcmFjdGlvbiB0byBzZWxlY3Rpb24gZnJhY3Rpb24uXG4gICAgZ2V0IHRyYXZlbEZyYWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnRyYXZlbEZyYWN0aW9uO1xuICAgIH1cbiAgICBzZXQgdHJhdmVsRnJhY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICgndHJhdmVsRnJhY3Rpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnRyYXZlbEZyYWN0aW9uID0gdmFsdWU7IH1cbiAgICAgIHRoaXMuc2VsZWN0ZWRGcmFjdGlvbiA9IHZhbHVlO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIERpcmVjdGlvblNlbGVjdGlvbjtcbn07XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIERpc3RyaWJ1dGVkQ2hpbGRyZW4uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBkZWZpbmVzIGhlbHBlcnMgZm9yIGFjY2Vzc2luZyBhIGNvbXBvbmVudCdzIGRpc3RyaWJ1dGVkXG4gICAqIGNoaWxkcmVuIGFzIGEgZmxhdHRlbmVkIGFycmF5IG9yIHN0cmluZy5cbiAgICpcbiAgICogVGhlIHN0YW5kYXJkIERPTSBBUEkgcHJvdmlkZXMgc2V2ZXJhbCB3YXlzIG9mIGFjY2Vzc2luZyBjaGlsZCBjb250ZW50OlxuICAgKiBgY2hpbGRyZW5gLCBgY2hpbGROb2Rlc2AsIGFuZCBgdGV4dENvbnRlbnRgLiBOb25lIG9mIHRoZXNlIGZ1bmN0aW9ucyBhcmVcbiAgICogU2hhZG93IERPTSBhd2FyZS4gVGhpcyBtaXhpbiBkZWZpbmVzIHZhcmlhdGlvbnMgb2YgdGhvc2UgZnVuY3Rpb25zIHRoYXRcbiAgICogKmFyZSogU2hhZG93IERPTSBhd2FyZS5cbiAgICpcbiAgICogRXhhbXBsZTogeW91IGNyZWF0ZSBhIGNvbXBvbmVudCBgPGNvdW50LWNoaWxkcmVuPmAgdGhhdCBkaXNwbGF5cyBhIG51bWJlclxuICAgKiBlcXVhbCB0byB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHBsYWNlZCBpbnNpZGUgdGhhdCBjb21wb25lbnQuIElmIHNvbWVvbmVcbiAgICogaW5zdGFudGlhdGVzIHlvdXIgY29tcG9uZW50IGxpa2U6XG4gICAqXG4gICAqICAgICA8Y291bnQtY2hpbGRyZW4+XG4gICAqICAgICAgIDxkaXY+PC9kaXY+XG4gICAqICAgICAgIDxkaXY+PC9kaXY+XG4gICAqICAgICAgIDxkaXY+PC9kaXY+XG4gICAqICAgICA8L2NvdW50LWNoaWxkcmVuPlxuICAgKlxuICAgKiBUaGVuIHRoZSBjb21wb25lbnQgc2hvdWxkIHNob3cgXCIzXCIsIGJlY2F1c2UgdGhlcmUgYXJlIHRocmVlIGNoaWxkcmVuLiBUb1xuICAgKiBjYWxjdWxhdGUgdGhlIG51bWJlciBvZiBjaGlsZHJlbiwgdGhlIGNvbXBvbmVudCBjYW4ganVzdCBjYWxjdWxhdGVcbiAgICogYHRoaXMuY2hpbGRyZW4ubGVuZ3RoYC4gSG93ZXZlciwgc3VwcG9zZSBzb21lb25lIGluc3RhbnRpYXRlcyB5b3VyXG4gICAqIGNvbXBvbmVudCBpbnNpZGUgb25lIG9mIHRoZWlyIG93biBjb21wb25lbnRzLCBhbmQgcHV0cyBhIGA8c2xvdD5gIGVsZW1lbnRcbiAgICogaW5zaWRlIHlvdXIgY29tcG9uZW50OlxuICAgKlxuICAgKiAgICAgPGNvdW50LWNoaWxkcmVuPlxuICAgKiAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAqICAgICA8L2NvdW50LWNoaWxkcmVuPlxuICAgKlxuICAgKiBJZiB5b3VyIGNvbXBvbmVudCBvbmx5IGxvb2tzIGF0IGB0aGlzLmNoaWxkcmVuYCwgaXQgd2lsbCBhbHdheXMgc2VlIGV4YWN0bHlcbiAgICogb25lIGNoaWxkIOKAlMKgdGhlIGA8c2xvdD5gIGVsZW1lbnQuIEJ1dCB0aGUgdXNlciBsb29raW5nIGF0IHRoZSBwYWdlIHdpbGxcbiAgICogKnNlZSogYW55IG5vZGVzIGRpc3RyaWJ1dGVkIHRvIHRoYXQgc2xvdC4gVG8gbWF0Y2ggd2hhdCB0aGUgdXNlciBzZWVzLCB5b3VyXG4gICAqIGNvbXBvbmVudCBzaG91bGQgZXhwYW5kIGFueSBgPHNsb3Q+YCBlbGVtZW50cyBpdCBjb250YWlucy5cbiAgICpcbiAgICogVGhhdCBpcyB0aGUgcHJvYmxlbSB0aGlzIG1peGluIHNvbHZlcy4gQWZ0ZXIgYXBwbHlpbmcgdGhpcyBtaXhpbiwgeW91clxuICAgKiBjb21wb25lbnQgY29kZSBoYXMgYWNjZXNzIHRvIGB0aGlzLmRpc3RyaWJ1dGVkQ2hpbGRyZW5gLCB3aG9zZSBgbGVuZ3RoYFxuICAgKiB3aWxsIHJldHVybiB0aGUgdG90YWwgbnVtYmVyIG9mIGFsbCBjaGlsZHJlbiBkaXN0cmlidXRlZCB0byB5b3VyIGNvbXBvbmVudFxuICAgKiBpbiB0aGUgY29tcG9zZWQgdHJlZS5cbiAgICpcbiAgICogTm90ZTogVGhlIGxhdGVzdCBDdXN0b20gRWxlbWVudHMgQVBJIGRlc2lnbiBjYWxscyBmb3IgYSBuZXcgZnVuY3Rpb24sXG4gICAqIGBnZXRBc3NpZ25lZE5vZGVzYCB0aGF0IHRha2VzIGFuIG9wdGlvbmFsIGBkZWVwYCBwYXJhbWV0ZXIsIHRoYXQgd2lsbCBzb2x2ZVxuICAgKiB0aGlzIHByb2JsZW0gYXQgdGhlIEFQSSBsZXZlbC5cbiAgICovXG4gIGNsYXNzIERpc3RyaWJ1dGVkQ2hpbGRyZW4gZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qKlxuICAgICAqIEFuIGluLW9yZGVyIGNvbGxlY3Rpb24gb2YgZGlzdHJpYnV0ZWQgY2hpbGRyZW4sIGV4cGFuZGluZyBhbnkgc2xvdFxuICAgICAqIGVsZW1lbnRzLiBMaWtlIHRoZSBzdGFuZGFyZCBjaGlsZHJlbiBwcm9wZXJ0eSwgdGhpcyBza2lwcyB0ZXh0IG5vZGVzLlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50W119XG4gICAgICovXG4gICAgZ2V0IGRpc3RyaWJ1dGVkQ2hpbGRyZW4oKSB7XG4gICAgICByZXR1cm4gZXhwYW5kQ29udGVudEVsZW1lbnRzKHRoaXMuY2hpbGRyZW4sIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbi1vcmRlciBjb2xsZWN0aW9uIG9mIGRpc3RyaWJ1dGVkIGNoaWxkIG5vZGVzLCBleHBhbmRpbmcgYW55IHNsb3RcbiAgICAgKiBlbGVtZW50cy4gTGlrZSB0aGUgc3RhbmRhcmQgY2hpbGROb2RlcyBwcm9wZXJ0eSwgdGhpcyBpbmNsdWRlcyB0ZXh0XG4gICAgICogbm9kZXMuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Tm9kZVtdfVxuICAgICAqL1xuICAgIGdldCBkaXN0cmlidXRlZENoaWxkTm9kZXMoKSB7XG4gICAgICByZXR1cm4gZXhwYW5kQ29udGVudEVsZW1lbnRzKHRoaXMuY2hpbGROb2RlcywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbmNhdGVuYXRlZCB0ZXh0IGNvbnRlbnQgb2YgYWxsIGRpc3RyaWJ1dGVkIGNoaWxkIG5vZGVzLCBleHBhbmRpbmdcbiAgICAgKiBhbnkgc2xvdCBlbGVtZW50cy5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0IGRpc3RyaWJ1dGVkVGV4dENvbnRlbnQoKSB7XG4gICAgICBsZXQgc3RyaW5ncyA9IHRoaXMuZGlzdHJpYnV0ZWRDaGlsZE5vZGVzLm1hcChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgICByZXR1cm4gY2hpbGQudGV4dENvbnRlbnQ7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzdHJpbmdzLmpvaW4oJycpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIERpc3RyaWJ1dGVkQ2hpbGRyZW47XG59O1xuXG5cbi8qXG4gKiBHaXZlbiBhIGFycmF5IG9mIG5vZGVzLCByZXR1cm4gYSBuZXcgYXJyYXkgd2l0aCBhbnkgY29udGVudCBlbGVtZW50cyBleHBhbmRlZFxuICogdG8gdGhlIG5vZGVzIGRpc3RyaWJ1dGVkIHRvIHRoYXQgY29udGVudCBlbGVtZW50LiBUaGlzIHJ1bGUgaXMgYXBwbGllZFxuICogcmVjdXJzaXZlbHkuXG4gKlxuICogSWYgaW5jbHVkZVRleHROb2RlcyBpcyB0cnVlLCB0ZXh0IG5vZGVzIHdpbGwgYmUgaW5jbHVkZWQsIGFzIGluIHRoZVxuICogc3RhbmRhcmQgY2hpbGROb2RlcyBwcm9wZXJ0eTsgYnkgZGVmYXVsdCwgdGhpcyBza2lwcyB0ZXh0IG5vZGVzLCBsaWtlIHRoZVxuICogc3RhbmRhcmQgY2hpbGRyZW4gcHJvcGVydHkuXG4gKi9cbmZ1bmN0aW9uIGV4cGFuZENvbnRlbnRFbGVtZW50cyhub2RlcywgaW5jbHVkZVRleHROb2Rlcykge1xuICBsZXQgZXhwYW5kZWQgPSBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwobm9kZXMsIG5vZGUgPT4ge1xuICAgIC8vIFdlIHdhbnQgdG8gc2VlIGlmIHRoZSBub2RlIGlzIGFuIGluc3RhbmNlb2YgSFRNTFNsb3RFTGVtZW50LCBidXRcbiAgICAvLyB0aGF0IGNsYXNzIHdvbid0IGV4aXN0IGlmIHRoZSBicm93c2VyIHRoYXQgZG9lc24ndCBzdXBwb3J0IG5hdGl2ZVxuICAgIC8vIFNoYWRvdyBET00gYW5kIGlmIHRoZSBTaGFkb3cgRE9NIHBvbHlmaWxsIGhhc24ndCBiZWVuIGxvYWRlZC4gSW5zdGVhZCxcbiAgICAvLyB3ZSBkbyBhIHNpbXBsaXN0aWMgY2hlY2sgdG8gc2VlIGlmIHRoZSB0YWcgbmFtZSBpcyBcInNsb3RcIi5cbiAgICBsZXQgaXNTbG90ID0gdHlwZW9mIEhUTUxTbG90RWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgP1xuICAgICAgbm9kZSBpbnN0YW5jZW9mIEhUTUxTbG90RWxlbWVudCA6XG4gICAgICBub2RlLmxvY2FsTmFtZSA9PT0gJ3Nsb3QnO1xuICAgIGlmIChpc1Nsb3QpIHtcbiAgICAgIC8vIFVzZSB0aGUgbm9kZXMgYXNzaWduZWQgdG8gdGhpcyBub2RlIGluc3RlYWQuXG4gICAgICBsZXQgYXNzaWduZWROb2RlcyA9IG5vZGUuYXNzaWduZWROb2Rlcyh7IGZsYXR0ZW46IHRydWUgfSk7XG4gICAgICByZXR1cm4gYXNzaWduZWROb2RlcyA/XG4gICAgICAgIGV4cGFuZENvbnRlbnRFbGVtZW50cyhhc3NpZ25lZE5vZGVzLCBpbmNsdWRlVGV4dE5vZGVzKSA6XG4gICAgICAgIFtdO1xuICAgIH0gZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAvLyBQbGFpbiBlbGVtZW50OyB1c2UgYXMgaXMuXG4gICAgICByZXR1cm4gW25vZGVdO1xuICAgIH0gZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIFRleHQgJiYgaW5jbHVkZVRleHROb2Rlcykge1xuICAgICAgLy8gVGV4dCBub2RlLlxuICAgICAgcmV0dXJuIFtub2RlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ29tbWVudCwgcHJvY2Vzc2luZyBpbnN0cnVjdGlvbiwgZXRjLjsgc2tpcC5cbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH0pO1xuICBsZXQgZmxhdHRlbmVkID0gW10uY29uY2F0KC4uLmV4cGFuZGVkKTtcbiAgcmV0dXJuIGZsYXR0ZW5lZDtcbn1cbiIsImltcG9ydCBtaWNyb3Rhc2sgZnJvbSAnLi9taWNyb3Rhc2snO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudC4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIGRlZmluZXMgYSBjb21wb25lbnQncyBjb250ZW50IGFzIGl0cyBjaGlsZHJlbiwgZXhwYW5kaW5nIGFueVxuICAgKiBub2RlcyBkaXN0cmlidXRlZCB0byB0aGUgY29tcG9uZW50J3Mgc2xvdHMuXG4gICAqXG4gICAqIFRoaXMgYWxzbyBwcm92aWRlcyBub3RpZmljYXRpb24gb2YgY2hhbmdlcyB0byBhIGNvbXBvbmVudCdzIGNvbnRlbnQuIEl0XG4gICAqIHdpbGwgaW52b2tlIGEgYGNvbnRlbnRDaGFuZ2VkYCBtZXRob2Qgd2hlbiB0aGUgY29tcG9uZW50IGlzIGZpcnN0XG4gICAqIGluc3RhbnRpYXRlZCwgYW5kIHdoZW5ldmVyIGl0cyBkaXN0cmlidXRlZCBjaGlsZHJlbiBjaGFuZ2UuIFRoaXMgaXMgYW5cbiAgICogZWFzeSB3YXkgdG8gc2F0aXNmeSB0aGUgR29sZCBTdGFuZGFyZCBjaGVja2xpc3QgaXRlbSBmb3IgbW9uaXRvcmluZ1xuICAgKiBbQ29udGVudCBDaGFuZ2VzXShodHRwczovL2dpdGh1Yi5jb20vd2ViY29tcG9uZW50cy9nb2xkLXN0YW5kYXJkL3dpa2kvQ29udGVudC1DaGFuZ2VzKS5cbiAgICpcbiAgICogRXhhbXBsZTpcbiAgICpcbiAgICogYGBgXG4gICAqIGxldCBiYXNlID0gRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudChEaXN0cmlidXRlZENoaWxkcmVuKEhUTUxFbGVtZW50KSk7XG4gICAqIGNsYXNzIENvdW50aW5nRWxlbWVudCBleHRlbmRzIGJhc2Uge1xuICAgKlxuICAgKiAgIGNvbnN0cnVjdG9yKCkge1xuICAgKiAgICAgc3VwZXIoKTtcbiAgICogICAgIGxldCByb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAqICAgICByb290LmlubmVySFRNTCA9IGA8c2xvdD48L3Nsb3Q+YDtcbiAgICogICB9XG4gICAqXG4gICAqICAgY29udGVudENoYW5nZWQoKSB7XG4gICAqICAgICAvLyBDb3VudCB0aGUgY29tcG9uZW50J3MgY2hpbGRyZW4sIGJvdGggaW5pdGlhbGx5IGFuZCB3aGVuIGNoYW5nZWQuXG4gICAqICAgICB0aGlzLmNvdW50ID0gdGhpcy5kaXN0cmlidXRlZENoaWxkcmVuLmxlbmd0aDtcbiAgICogICB9XG4gICAqXG4gICAqIH1cbiAgICogYGBgXG4gICAqXG4gICAqIE5vdGUgdGhhdCBjb250ZW50IGNoYW5nZSBkZXRlY3Rpb24gZGVwZW5kcyB1cG9uIHRoZSBlbGVtZW50IGhhdmluZyBhdCBsZWFzdFxuICAgKiBvbmUgYHNsb3RgIGVsZW1lbnQgaW4gaXRzIHNoYWRvdyBzdWJ0cmVlLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGlzIGludGVuZGVkIGZvciB1c2Ugd2l0aCB0aGVcbiAgICogW0Rpc3RyaWJ1dGVkQ2hpbGRyZW5dKERpc3RyaWJ1dGVkQ2hpbGRyZW4ubWQpIG1peGluLiBTZWUgdGhhdCBtaXhpbiBmb3IgYVxuICAgKiBkaXNjdXNzaW9uIG9mIGhvdyB0aGF0IHdvcmtzLiBUaGlzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQgbWl4aW5cbiAgICogcHJvdmlkZXMgYW4gZWFzeSB3YXkgb2YgZGVmaW5pbmcgdGhlIFwiY29udGVudFwiIG9mIGEgY29tcG9uZW50IGFzIHRoZVxuICAgKiBjb21wb25lbnQncyBkaXN0cmlidXRlZCBjaGlsZHJlbi4gVGhhdCBpbiB0dXJuIGxldHMgbWl4aW5zIGxpa2VcbiAgICogW0NvbnRlbnRBc0l0ZW1zXShDb250ZW50QXNJdGVtcy5tZCkgbWFuaXB1bGF0ZSB0aGUgY2hpbGRyZW4gYXMgbGlzdCBpdGVtcy5cbiAgICovXG4gIGNsYXNzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcblxuICAgICAgaWYgKHRoaXMuc2hhZG93Um9vdCkge1xuICAgICAgICAvLyBMaXN0ZW4gdG8gY2hhbmdlcyBvbiBhbGwgc2xvdHMuXG4gICAgICAgIGxldCBzbG90cyA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKCdzbG90Jyk7XG4gICAgICAgIHNsb3RzLmZvckVhY2goc2xvdCA9PiBzbG90LmFkZEV2ZW50TGlzdGVuZXIoJ3Nsb3RjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy5jb250ZW50Q2hhbmdlZCgpO1xuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIC8vIE1ha2UgYW4gaW5pdGlhbCBjYWxsIHRvIGNvbnRlbnRDaGFuZ2VkKCkgc28gdGhhdCB0aGUgY29tcG9uZW50IGNhbiBkb1xuICAgICAgLy8gaW5pdGlhbGl6YXRpb24gdGhhdCBpdCBub3JtYWxseSBkb2VzIHdoZW4gY29udGVudCBjaGFuZ2VzLlxuICAgICAgLy9cbiAgICAgIC8vIFRoaXMgd2lsbCBpbnZva2UgY29udGVudENoYW5nZWQoKSBoYW5kbGVycyBpbiBvdGhlciBtaXhpbnMuIEluIG9yZGVyXG4gICAgICAvLyB0aGF0IHRob3NlIG1peGlucyBoYXZlIGEgY2hhbmNlIHRvIGNvbXBsZXRlIHRoZWlyIG93biBpbml0aWFsaXphdGlvbixcbiAgICAgIC8vIHdlIGFkZCB0aGUgY29udGVudENoYW5nZWQoKSBjYWxsIHRvIHRoZSBtaWNyb3Rhc2sgcXVldWUuXG4gICAgICBtaWNyb3Rhc2soKCkgPT4gdGhpcy5jb250ZW50Q2hhbmdlZCgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIGNvbnRlbnRzIG9mIHRoZSBjb21wb25lbnQgKGluY2x1ZGluZyBkaXN0cmlidXRlZFxuICAgICAqIGNoaWxkcmVuKSBoYXZlIGNoYW5nZWQuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBhbHNvIGludm9rZWQgd2hlbiBhIGNvbXBvbmVudCBpcyBmaXJzdCBpbnN0YW50aWF0ZWQ7IHRoZVxuICAgICAqIGNvbnRlbnRzIGhhdmUgZXNzZW50aWFsbHkgXCJjaGFuZ2VkXCIgZnJvbSBiZWluZyBub3RoaW5nLiBUaGlzIGFsbG93cyB0aGVcbiAgICAgKiBjb21wb25lbnQgdG8gcGVyZm9ybSBpbml0aWFsIHByb2Nlc3Npbmcgb2YgaXRzIGNoaWxkcmVuLlxuICAgICAqL1xuICAgIGNvbnRlbnRDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbnRlbnRDaGFuZ2VkKSB7IHN1cGVyLmNvbnRlbnRDaGFuZ2VkKCk7IH1cbiAgICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnY29udGVudC1jaGFuZ2VkJyk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjb250ZW50IG9mIHRoaXMgY29tcG9uZW50LCBkZWZpbmVkIHRvIGJlIHRoZSBmbGF0dGVuZWQgYXJyYXkgb2ZcbiAgICAgKiBjaGlsZHJlbiBkaXN0cmlidXRlZCB0byB0aGUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50W119XG4gICAgICovXG4gICAgZ2V0IGNvbnRlbnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kaXN0cmlidXRlZENoaWxkcmVuO1xuICAgIH1cbiAgICBzZXQgY29udGVudCh2YWx1ZSkge1xuICAgICAgaWYgKCdjb250ZW50JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5jb250ZW50ID0gdmFsdWU7IH1cbiAgICAgIC8vIFRPRE86IFNldCB0aGUgY2hpbGRyZW4gdG8gdGhlIGdpdmVuIHZhbHVlICh3aGljaCBzaG91bGQgYmUgYW4gYXJyYXkgb2ZcbiAgICAgIC8vIGVsZW1lbnRzKT9cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIHJhaXNlZCB3aGVuIHRoZSBjb21wb25lbnQncyBjb250ZW50cyAoaW5jbHVkaW5nIGRpc3RyaWJ1dGVkXG4gICAgICogY2hpbGRyZW4pIGhhdmUgY2hhbmdlZC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50XG4gICAgICogQGV2ZW50IGNvbnRlbnQtY2hhbmdlZFxuICAgICAqL1xuICB9XG5cbiAgcmV0dXJuIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQ7XG59O1xuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IHNlbGVjdGVkRnJhY3Rpb25TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3NlbGVjdGVkRnJhY3Rpb24nKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEZyYWN0aW9uYWxTZWxlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXhpbihiYXNlKSB7XG5cbiAgLyoqXG4gICAqIEFkZHMgc3VwcG9ydCBmb3IgZnJhY3Rpb25hbCBzZWxlY3Rpb246IHRyZWF0aW5nIGEgc2VsZWN0aW9uIGFzIGEgcmVhbFxuICAgKiBudW1iZXIgdGhhdCBjb21iaW5lcyBhbiBpbnRlZ2VyIHBvcnRpb24gKGFuIGluZGV4IGludG8gYSBsaXN0KSwgYW5kIGFcbiAgICogZnJhY3Rpb24gKGluZGljYXRpbmcgaG93IGZhciBvZiB0aGUgd2F5IHdlIGFyZSB0byB0aGUgbmV4dCBvciBwcmV2aW91c1xuICAgKiBpdGVtKS5cbiAgICpcbiAgICogVGhpcyBpcyB1c2VmdWwgaW4gY29tcG9uZW50cyB0aGF0IHN1cHBvcnQgaW5jcmVtZW50YWwgb3BlcmF0aW9ucyBkdXJpbmdcbiAgICogZHJhZ2dpbmcgYW5kIHN3aXBpbmcuIEV4YW1wbGU6IGEgY2Fyb3VzZWwgY29tcG9uZW50IGhhcyBzZXZlcmFsIGl0ZW1zLCBhbmQgdGhlXG4gICAqIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtIGlzIGl0ZW0gMy4gVGhlIHVzZXIgYmVnaW5zIHN3aXBpbmcgdG8gdGhlIGxlZnQsXG4gICAqIG1vdmluZyB0b3dhcmRzIHNlbGVjdGluZyBpdGVtIDQuIEhhbGZ3YXkgdGhyb3VnaCB0aGlzIG9wZXJhdGlvbiwgdGhlXG4gICAqIGZyYWN0aW9uYWwgc2VsZWN0aW9uIHZhbHVlIGlzIDMuNS5cbiAgICpcbiAgICogVGhpcyB2YWx1ZSBwZXJtaXRzIGNvbW11bmljYXRpb24gYmV0d2VlbiBtaXhpbnMgbGlrZVxuICAgKiBbU3dpcGVEaXJlY3Rpb25dKC4vU3dpcGVEaXJlY3Rpb24ubWQpIGFuZFxuICAgKiBbVHJhY2twYWREaXJlY3Rpb25dKC4vVHJhY2twYWREaXJlY3Rpb24ubWQpLCB3aGljaCBnZW5lcmF0ZSBmcmFjdGlvbmFsXG4gICAqIHNlbGVjdGlvbiB2YWx1ZXMsIGFuZCBtaXhpbnMgbGlrZVxuICAgKiBbU2VsZWN0aW9uQW5pbWF0aW9uXSguL1NlbGVjdGlvbkFuaW1hdGlvbi5tZCksIHdoaWNoIGNhbiByZW5kZXIgc2VsZWN0aW9uXG4gICAqIGF0IGEgZnJhY3Rpb25hbCB2YWx1ZS5cbiAgICovXG4gIGNsYXNzIEZyYWN0aW9uYWxTZWxlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKSB7IHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7IH1cbiAgICAgIHRoaXMuc2VsZWN0ZWRGcmFjdGlvbiA9IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSBmcmFjdGlvbmFsIHZhbHVlIGluZGljYXRpbmcgaG93IGZhciB0aGUgdXNlciBoYXMgY3VycmVudGx5IGFkdmFuY2VkIHRvXG4gICAgICogdGhlIG5leHQvcHJldmlvdXMgaXRlbS4gRS5nLiwgYSBgc2VsZWN0ZWRGcmFjdGlvbmAgb2YgMy41IGluZGljYXRlcyB0aGVcbiAgICAgKiB1c2VyIGlzIGhhbGZ3YXkgYmV0d2VlbiBpdGVtcyAzIGFuZCA0LlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWRGcmFjdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzW3NlbGVjdGVkRnJhY3Rpb25TeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRGcmFjdGlvbih2YWx1ZSkge1xuICAgICAgdGhpc1tzZWxlY3RlZEZyYWN0aW9uU3ltYm9sXSA9IHZhbHVlO1xuICAgICAgaWYgKCdzZWxlY3RlZEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEZyYWN0aW9uID0gdmFsdWU7IH1cbiAgICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnc2VsZWN0ZWQtZnJhY3Rpb24tY2hhbmdlZCcpO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBGcmFjdGlvbmFsU2VsZWN0aW9uO1xufVxuXG5cbm1peGluLmhlbHBlcnMgPSB7XG5cbiAgLypcbiAgICogRGFtcGVuIGEgc2VsZWN0aW9uIHRoYXQgZ29lcyBwYXN0IHRoZSBiZWdpbm5pbmcgb3IgZW5kIG9mIGEgbGlzdC4gVGhpcyBpc1xuICAgKiBnZW5lcmFsbHkgdXNlZCB0byBwcm9kdWNlIGEgdmlzdWFsIGVmZmVjdCBvZiB0ZW5zaW9uIGFzIHRoZSB1c2VyIHRyaWVzIHRvXG4gICAqIGdvIGZ1cnRoZXIgaW4gYSBkaXJlY3Rpb24gdGhhdCBoYXMgbm8gbW9yZSBpdGVtcy5cbiAgICpcbiAgICogRXhhbXBsZTogc3VwcG9zZSBgaXRlbUNvdW50YCBpcyA1LCBpbmRpY2F0aW5nIGEgbGlzdCBvZiA1IGl0ZW1zLiBUaGUgaW5kZXggb2ZcbiAgICogdGhlIGxhc3QgaXRlbSBpcyA0LiBJZiB0aGUgYHNlbGVjdGlvbmAgcGFyYW1ldGVyIGlzIDQuNSwgdGhlIHVzZXIgaXMgdHJ5aW5nXG4gICAqIHRvIGdvIHBhc3QgdGhpcyBsYXN0IGl0ZW0uIFdoZW4gYSBkYW1waW5nIGZ1bmN0aW9uIGlzIGFwcGxpZWQsIHRoZSByZXN1bHRpbmdcbiAgICogdmFsdWUgd2lsbCBiZSBsZXNzIHRoYW4gNC41ICh0aGUgYWN0dWFsIHZhbHVlIHdpbGwgYmUgNC4yNSkuIFdoZW4gdGhpc1xuICAgKiBzZWxlY3Rpb24gc3RhdGUgaXMgcmVuZGVyZWQsIHRoZSB1c2VyIHdpbGwgc2VlIHRoYXQsIGVhY2ggdW5pdCBkaXN0YW5jZSB0aGVcbiAgICogZHJhZyB0cmF2ZWxzIGhhcyBsZXNzIGFuZCBsZXNzIHZpc2libGUgZWZmZWN0LiBUaGlzIGlzIHBlcmNlaXZlZCBhcyB0ZW5zaW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2VsZWN0aW9uIC0gQSByZWFsIG51bWJlciBpbmRpY2F0aW5nIGEgc2VsZWN0aW9uIHBvc2l0aW9uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpdGVtQ291bnQgLSBBbiBpbnRlZ2VyIGZvciB0aGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBsaXN0XG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IEEgcmVhbCBudW1iZXIgcmVwcmVzZW50aW5nIHRoZSBkYW1wZWQgc2VsZWN0aW9uIHZhbHVlLlxuICAgKi9cbiAgZGFtcGVkU2VsZWN0aW9uKHNlbGVjdGlvbiwgaXRlbUNvdW50KSB7XG4gICAgbGV0IGRhbXBlZDtcbiAgICBsZXQgYm91bmQgPSBpdGVtQ291bnQgLSAxO1xuICAgIGlmIChzZWxlY3Rpb24gPCAwKSB7XG4gICAgICAvLyBUcnlpbmcgdG8gZ28gcGFzdCBiZWdpbm5pbmcgb2YgbGlzdC4gQXBwbHkgdGVuc2lvbiBmcm9tIHRoZSBsZWZ0IGVkZ2UuXG4gICAgICBkYW1wZWQgPSAtbWl4aW4uaGVscGVycy5kYW1waW5nKC1zZWxlY3Rpb24pO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0aW9uID49IGJvdW5kKSB7XG4gICAgICAvLyBUcnlpbmcgdG8gZ28gcGFzdCBlbmQgb2YgbGlzdC4gQXBwbHkgdGVuc2lvbiBmcm9tIHRoZSByaWdodCBlZGdlLlxuICAgICAgZGFtcGVkID0gYm91bmQgKyBtaXhpbi5oZWxwZXJzLmRhbXBpbmcoc2VsZWN0aW9uIC0gYm91bmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBObyBkYW1waW5nIHJlcXVpcmVkLlxuICAgICAgZGFtcGVkID0gc2VsZWN0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gZGFtcGVkO1xuICB9LFxuXG4gIC8qXG4gICAqIENhbGN1bGF0ZSBkYW1waW5nIGFzIGEgZnVuY3Rpb24gb2YgdGhlIGRpc3RhbmNlIHBhc3QgdGhlIG1pbmltdW0vbWF4aW11bVxuICAgKiB2YWx1ZXMuXG4gICAqXG4gICAqIFdlIHdhbnQgdG8gYXN5bXB0b3RpY2FsbHkgYXBwcm9hY2ggYW4gYWJzb2x1dGUgbWluaW11bSBvZiAxIHVuaXRcbiAgICogYmVsb3cvYWJvdmUgdGhlIGFjdHVhbCBtaW5pbXVtL21heGltdW0uIFRoaXMgcmVxdWlyZXMgY2FsY3VsYXRpbmcgYVxuICAgKiBoeXBlcmJvbGljIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBTZWUgaHR0cDovL3d3dy53b2xmcmFtYWxwaGEuY29tL2lucHV0Lz9pPXkrJTNEKy0xJTJGJTI4eCUyQjElMjkrJTJCKzFcbiAgICogZm9yIHRoZSBvbmUgd2UgdXNlLiBUaGUgb25seSBwb3J0aW9uIG9mIHRoYXQgZnVuY3Rpb24gd2UgY2FyZSBhYm91dCBpcyB3aGVuXG4gICAqIHggaXMgemVybyBvciBncmVhdGVyLiBBbiBpbXBvcnRhbnQgY29uc2lkZXJhdGlvbiBpcyB0aGF0IHRoZSBjdXJ2ZSBiZVxuICAgKiB0YW5nZW50IHRvIHRoZSBkaWFnb25hbCBsaW5lIHg9eSBhdCAoMCwgMCkuIFRoaXMgZW5zdXJlcyBzbW9vdGggY29udGludWl0eVxuICAgKiB3aXRoIHRoZSBub3JtYWwgZHJhZyBiZWhhdmlvciwgaW4gd2hpY2ggdGhlIHZpc2libGUgc2xpZGluZyBpcyBsaW5lYXIgd2l0aFxuICAgKiB0aGUgZGlzdGFuY2UgdGhlIHRvdWNocG9pbnQgaGFzIGJlZW4gZHJhZ2dlZC5cbiAgICovXG4gIGRhbXBpbmcoeCkge1xuICAgIGxldCB5ID0gKC0xIC8gKHggKyAxKSkgKyAxO1xuICAgIHJldHVybiB5O1xuICB9LFxuXG4gIC8qXG4gICAqIFJldHVybiB0aGUgY3VycmVudCBmcmFjdGlvbmFsIHNlbGVjdGlvbiB2YWx1ZSBmb3IgdGhlIGdpdmVuIGVsZW1lbnQuXG4gICAqXG4gICAqIFRoaXMgc2ltcGx5IGFkZHMgdGhlIGVsZW1lbnQncyBgc2VsZWN0ZWRJbmRleGAgYW5kIGBzZWxlY3RlZEZyYWN0aW9uYFxuICAgKiBwcm9wZXJ0aWVzLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gQW4gZWxlbWVudCB0aGF0IHN1cHBvcnRzIHNlbGVjdGlvblxuICAgKi9cbiAgZWxlbWVudFNlbGVjdGlvbihlbGVtZW50KSB7XG4gICAgbGV0IHNlbGVjdGVkSW5kZXggPSBlbGVtZW50LnNlbGVjdGVkSW5kZXg7XG4gICAgaWYgKHNlbGVjdGVkSW5kZXggPCAwKSB7XG4gICAgICAvLyBObyBzZWxlY3Rpb25cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHNlbGVjdGVkRnJhY3Rpb24gPSBlbGVtZW50LnNlbGVjdGVkRnJhY3Rpb24gfHwgMDtcbiAgICByZXR1cm4gc2VsZWN0ZWRJbmRleCArIHNlbGVjdGVkRnJhY3Rpb247XG4gIH0sXG5cbiAgLypcbiAgICogQnJlYWtzIGEgZnJhY3Rpb25hbCBzZWxlY3Rpb24gaW50byBpdHMgaW50ZWdlciBhbmQgZnJhY3Rpb25hbCBwYXJ0cy5cbiAgICpcbiAgICogRXhhbXBsZTogaWYgcGFzc2VkIDMuNSwgdGhpcyByZXR1cm5zIHsgaW5kZXg6IDMsIGZyYWN0aW9uOiA1IH0uXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzZWxlY3Rpb24g4oCTwqBBIHJlYWwgbnVtYmVyIHJlcHJlc2VudGluZyBhIHNlbGVjdGlvbiBwb2ludFxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSAtIEFuIG9iamVjdCB3aXRoIGFuIGBpbmRleGAgcHJvcGVydHkgaG9sZGluZyB0aGVcbiAgICogc2VsZWN0aW9uJ3MgaW50ZWdlciBjb21wb25lbnQsIGFuZCBhIGBmcmFjdGlvbmAgcHJvcGVydHkgaG9sZGluZyB0aGVcbiAgICogc2VsZWN0aW9uJ3MgZnJhY3Rpb25hbCBjb21wb25lbnQuXG4gICAqL1xuICBzZWxlY3Rpb25QYXJ0cyhzZWxlY3Rpb24pIHtcbiAgICAvLyBTdHVwaWQgSUUgZG9lc24ndCBoYXZlIE1hdGgudHJ1bmMuXG4gICAgLy8gbGV0IGluZGV4ID0gTWF0aC50cnVuYyhzZWxlY3Rpb24pO1xuICAgIGxldCBpbmRleCA9IHNlbGVjdGlvbiA8IDAgPyBNYXRoLmNlaWwoc2VsZWN0aW9uKSA6IE1hdGguZmxvb3Ioc2VsZWN0aW9uKTtcbiAgICBsZXQgZnJhY3Rpb24gPSBzZWxlY3Rpb24gLSBpbmRleDtcbiAgICByZXR1cm4geyBpbmRleCwgZnJhY3Rpb24gfTtcbiAgfSxcblxuICAvKlxuICAgKiBSZXR1cm5zIGEgZnJhY3Rpb25hbCBzZWxlY3Rpb24gcG9pbnQgYWZ0ZXIgYWNjb3VudGluZyBmb3Igd3JhcHBpbmcsIGVuc3VyaW5nXG4gICAqIHRoYXQgdGhlIGludGVnZXIgcG9ydGlvbiBvZiB0aGUgc2VsZWN0aW9uIHN0YXlzIGJldHdlZW4gMCBhbmQgYGl0ZW1Db3VudGAtMS5cbiAgICogVGhhdCBpcywgdGhlIGludGVnZXIgcG9ydGlvbiB3aWxsIGFsd2F5cyBiZSBhIHZhbGlkIGluZGV4IGludG8gdGhlIGxpc3QuXG4gICAqXG4gICAqIEV4YW1wbGUgb2Ygd3JhcHBpbmcgcGFzdCB0aGUgZW5kIG9mIHRoZSBsaXN0OiBpZiBgc2VsZWN0aW9uYCBpcyA1LjUgYW5kXG4gICAqIGBpdGVtQ291bnRgIGlzIDUsIHRoaXMgcmV0dXJucyAwLjUuIEV4YW1wbGUgb2Ygd3JhcHBpbmcgcGFzdCB0aGUgYmVnaW5uaW5nIG9mXG4gICAqIHRoZSBsaXN0OiBpZiBgc2VsZWN0aW9uYCBpcyAwLjUgYW5kIGBpdGVtQ291bnRgIGlzIDUsIHRoaXMgcmV0dXJucyA0LjUuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzZWxlY3Rpb24gLSBBIHJlYWwgbnVtYmVyIHJlcHJlc2VudGluZyBhIHNlbGVjdGlvbiBwb2ludFxuICAgKiBAcGFyYW0ge251bWJlcn0gaXRlbUNvdW50IC0gVGhlIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgbGlzdFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSAtIFRoZSByZXN1bHQgb2Ygd3JhcHBpbmcgdGhlIHNlbGVjdGlvbiBwb2ludFxuICAgKi9cbiAgd3JhcHBlZFNlbGVjdGlvbihzZWxlY3Rpb24sIGl0ZW1Db3VudCkge1xuICAgIC8vIEhhbmRsZXMgcG9zc2liaWxpdHkgb2YgbmVnYXRpdmUgbW9kLlxuICAgIC8vIFNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xODYxODI1MC83NjQ3MlxuICAgIHJldHVybiAoKHNlbGVjdGlvbiAlIGl0ZW1Db3VudCkgKyBpdGVtQ291bnQpICUgaXRlbUNvdW50O1xuICB9LFxuXG4gIC8qXG4gICAqIFJldHVybiB0aGUgcGFydHMgb2YgYSBzZWxlY3Rpb24sIGZpcnN0IHdyYXBwaW5nIGlmIG5lY2Vzc2FyeS5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNlbGVjdGlvbiDigJMgQSByZWFsIG51bWJlciByZXByZXNlbnRpbmcgYSBzZWxlY3Rpb24gcG9pbnRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGl0ZW1Db3VudCAtIFRoZSBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIGxpc3RcbiAgICogQHBhcmFtIHtib29sZWFufSB3cmFwIOKAkyBUcnVlIGlmIHRoZSBzZWxlY3Rpb24gc2hvdWxkIHdyYXAgdG8gc3RheSB3aXRoaW4gdGhlXG4gICAqIGxpc3RcbiAgICogQHJldHVybnMge29iamVjdH0g4oCTIFRoZSBwYXJ0cyBvZiB0aGUgc2VsZWN0aW9uLCB1c2luZyB0aGUgc2FtZSBmb3JtYXQgYXNcbiAgICogYHNlbGVjdGlvblBhcnRzYC5cbiAgICovXG4gIHdyYXBwZWRTZWxlY3Rpb25QYXJ0cyhzZWxlY3Rpb24sIGl0ZW1Db3VudCwgd3JhcCkge1xuICAgIGlmICh3cmFwKSB7XG4gICAgICBzZWxlY3Rpb24gPSBtaXhpbi5oZWxwZXJzLndyYXBwZWRTZWxlY3Rpb24oc2VsZWN0aW9uLCBpdGVtQ291bnQpO1xuICAgIH1cbiAgICByZXR1cm4gbWl4aW4uaGVscGVycy5zZWxlY3Rpb25QYXJ0cyhzZWxlY3Rpb24pO1xuICB9XG5cbn07XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgZ2VuZXJpY1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnZ2VuZXJpYycpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggR2VuZXJpYy4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIGFsbG93cyBhIGNvbXBvbmVudCB0byBzdXBwb3J0IGEgXCJnZW5lcmljXCIgc3R5bGU6IGEgbWluaW1hbGlzdFxuICAgKiBzdHlsZSB0aGF0IGNhbiBlYXNpbHkgYmUgcmVtb3ZlZCB0byByZXNldCBpdHMgdmlzdWFsIGFwcGVhcmFuY2UgdG8gYVxuICAgKiBiYXNlbGluZSBzdGF0ZS5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgYSBjb21wb25lbnQgc2hvdWxkIHByb3ZpZGUgYSBtaW5pbWFsIHZpc3VhbCBwcmVzZW50YXRpb24gdGhhdFxuICAgKiBhbGxvd3MgdGhlIGNvbXBvbmVudCB0byBmdW5jdGlvbi4gSG93ZXZlciwgdGhlIG1vcmUgc3R5bGluZyB0aGUgY29tcG9uZW50XG4gICAqIHByb3ZpZGVzIGJ5IGRlZmF1bHQsIHRoZSBoYXJkZXIgaXQgYmVjb21lcyB0byBnZXQgdGhlIGNvbXBvbmVudCB0byBmaXQgaW5cbiAgICogaW4gb3RoZXIgc2V0dGluZ3MuIEVhY2ggQ1NTIHJ1bGUgaGFzIHRvIGJlIG92ZXJyaWRkZW4uIFdvcnNlLCBuZXcgQ1NTIHJ1bGVzXG4gICAqIGFkZGVkIHRvIHRoZSBkZWZhdWx0IHN0eWxlIHdvbid0IGJlIG92ZXJyaWRkZW4gYnkgZGVmYXVsdCwgbWFraW5nIGl0IGhhcmRcbiAgICogdG8ga25vdyB3aGV0aGVyIGEgbmV3IHZlcnNpb24gb2YgYSBjb21wb25lbnQgd2lsbCBzdGlsbCBsb29rIG9rYXkuXG4gICAqXG4gICAqIEFzIGEgY29tcHJvbWlzZSwgdGhlIG1peGluIGRlZmluZXMgYSBgZ2VuZXJpY2AgYXR0cmlidXRlLiBUaGlzIGF0dHJpYnV0ZSBpc1xuICAgKiBub3JtYWxseSBzZXQgYnkgZGVmYXVsdCwgYW5kIHN0eWxlcyBjYW4gYmUgd3JpdHRlbiB0aGF0IGFwcGx5IG9ubHkgd2hlbiB0aGVcbiAgICogZ2VuZXJpYyBhdHRyaWJ1dGUgaXMgc2V0LiBUaGlzIGFsbG93cyB0aGUgY29uc3RydWN0aW9uIG9mIENTUyBydWxlcyB0aGF0XG4gICAqIHdpbGwgb25seSBhcHBseSB0byBnZW5lcmljIGNvbXBvbmVudHMgbGlrZTpcbiAgICpcbiAgICogICAgIDpob3N0KFtnZW5lcmljPVwiXCJdKSB7XG4gICAqICAgICAgIC4uLiBHZW5lcmljIGFwcGVhcmFuY2UgZGVmaW5lZCBoZXJlIC4uLlxuICAgKiAgICAgfVxuICAgKlxuICAgKiBUaGlzIG1ha2VzIGl0IGVhc3kgdG8gcmVtb3ZlIGFsbCBkZWZhdWx0IHN0eWxpbmcg4oCUIHNldCB0aGUgYGdlbmVyaWNgXG4gICAqIGF0dHJpYnV0ZSB0byBmYWxzZSwgYW5kIGFsbCBkZWZhdWx0IHN0eWxpbmcgd2lsbCBiZSByZW1vdmVkLlxuICAgKi9cbiAgY2xhc3MgR2VuZXJpYyBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgLy8gU2V0IGRlZmF1bHRzLlxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmdlbmVyaWMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuZ2VuZXJpYyA9IHRoaXMuZGVmYXVsdHMuZ2VuZXJpYztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGlzIG1peGluIGRvZXNuJ3QgYWN0dWFsbHkgcmVzcG9uZCB0byBhdHRyaWJ1dGUgY2hhbmdlcywgYnV0IHJlbGllc1xuICAgIC8vIG9uIHNlcGFyYXRlbHktZGVmaW5lZCBiZWhhdmlvciAoZS5nLiwgaW4gQXR0cmlidXRlTWFyc2hhbGxpbmcpIGZvciB0aGF0LlxuICAgIC8vIFN0aWxsLCB3ZSBuZWVkIGRlZmluZSBhIGJhc2VsaW5lIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayB0aGF0IGRvZXNcbiAgICAvLyBub3RoaW5nLCBpbiBjYXNlIHRoaXMgbWl4aW4gZ2V0cyB1c2VkIG9uIGl0cyBvd24uXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgICAgaWYgKHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaykgeyBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTsgfVxuICAgIH1cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKSB7IHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7IH1cbiAgICAgIHJlZmxlY3RBdHRyaWJ1dGUodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0IGRlZmF1bHRzKCkge1xuICAgICAgbGV0IGRlZmF1bHRzID0gc3VwZXIuZGVmYXVsdHMgfHwge307XG4gICAgICBkZWZhdWx0cy5nZW5lcmljID0gdHJ1ZTtcbiAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBjb21wb25lbnQgd291bGQgbGlrZSB0byByZWNlaXZlIGdlbmVyaWMgc3R5bGluZy5cbiAgICAgKlxuICAgICAqIFRoaXMgcHJvcGVydHkgaXMgdHJ1ZSBieSBkZWZhdWx0IOKAlMKgc2V0IGl0IHRvIGZhbHNlIHRvIHR1cm4gb2ZmIGFsbFxuICAgICAqIGdlbmVyaWMgc3R5bGVzLiBUaGlzIG1ha2VzIGl0IGVhc2llciB0byBhcHBseSBjdXN0b20gc3R5bGluZzsgeW91IHdvbid0XG4gICAgICogaGF2ZSB0byBleHBsaWNpdGx5IG92ZXJyaWRlIHN0eWxpbmcgeW91IGRvbid0IHdhbnQuXG4gICAgICpcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqL1xuICAgIGdldCBnZW5lcmljKCkge1xuICAgICAgcmV0dXJuIHRoaXNbZ2VuZXJpY1N5bWJvbF07XG4gICAgfVxuICAgIHNldCBnZW5lcmljKHZhbHVlKSB7XG4gICAgICBsZXQgcGFyc2VkID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/XG4gICAgICAgIFN0cmluZyh2YWx1ZSkgIT09ICdmYWxzZScgOlxuICAgICAgICB2YWx1ZTtcbiAgICAgIHRoaXNbZ2VuZXJpY1N5bWJvbF0gPSBwYXJzZWQ7XG4gICAgICBpZiAoJ2dlbmVyaWMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmdlbmVyaWMgPSB2YWx1ZTsgfVxuICAgIFxuICAgICAgcmVmbGVjdEF0dHJpYnV0ZSh0aGlzKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBHZW5lcmljO1xufTtcblxuXG4vLyBXZSByb2xsIG91ciBvd24gYXR0cmlidXRlIHNldHRpbmcgc28gdGhhdCBhbiBleHBsaWNpdGx5IGZhbHNlIHZhbHVlXG4vLyBzaG93cyB1cCBhcyBnZW5lcmljPVwiZmFsc2VcIi5cbmZ1bmN0aW9uIHJlZmxlY3RBdHRyaWJ1dGUoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgZ2VuZXJpYyA9IGVsZW1lbnQuZ2VuZXJpYztcbiAgaWYgKGdlbmVyaWMgPT09IGZhbHNlKSB7XG4gICAgLy8gRXhwbGljaXRseSB1c2UgZmFsc2Ugc3RyaW5nLlxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdnZW5lcmljJywgJ2ZhbHNlJyk7XG4gIH0gZWxzZSBpZiAoZ2VuZXJpYyA9PSBudWxsKSB7XG4gICAgLy8gRXhwbGljaXRseSByZW1vdmUgYXR0cmlidXRlLlxuICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdnZW5lcmljJyk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVXNlIHRoZSBlbXB0eSBzdHJpbmcgdG8gZ2V0IGF0dHJpYnV0ZSB0byBhcHBlYXIgd2l0aCBubyB2YWx1ZS5cbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZ2VuZXJpYycsICcnKTtcbiAgfVxufVxuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IGtleWRvd25MaXN0ZW5lclN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgna2V5ZG93bkxpc3RlbmVyJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBLZXlib2FyZC4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hbmFnZXMgdGhlIGtleWRvd24gaGFuZGxpbmcgZm9yIGEgY29tcG9uZW50LlxuICAgKlxuICAgKiBUaGlzIG1peGluIGhhbmRsZXMgc2V2ZXJhbCBrZXlib2FyZC1yZWxhdGVkIGZlYXR1cmVzLlxuICAgKlxuICAgKiBGaXJzdCwgaXQgd2lyZXMgdXAgYSBzaW5nbGUga2V5ZG93biBldmVudCBoYW5kbGVyIHRoYXQgY2FuIGJlIHNoYXJlZCBieVxuICAgKiBtdWx0aXBsZSBtaXhpbnMgb24gYSBjb21wb25lbnQuIFRoZSBldmVudCBoYW5kbGVyIHdpbGwgaW52b2tlIGEgYGtleWRvd25gXG4gICAqIG1ldGhvZCB3aXRoIHRoZSBldmVudCBvYmplY3QsIGFuZCBhbnkgbWl4aW4gYWxvbmcgdGhlIHByb3RvdHlwZSBjaGFpbiB0aGF0XG4gICAqIHdhbnRzIHRvIGhhbmRsZSB0aGF0IG1ldGhvZCBjYW4gZG8gc28uXG4gICAqXG4gICAqIElmIGEgbWl4aW4gd2FudHMgdG8gaW5kaWNhdGUgdGhhdCBrZXlib2FyZCBldmVudCBoYXMgYmVlbiBoYW5kbGVkLCBhbmQgdGhhdFxuICAgKiBvdGhlciBtaXhpbnMgc2hvdWxkICpub3QqIGhhbmRsZSBpdCwgdGhlIG1peGluJ3MgYGtleWRvd25gIGhhbmRsZXIgc2hvdWxkXG4gICAqIHJldHVybiBhIHZhbHVlIG9mIHRydWUuIFRoZSBjb252ZW50aW9uIHRoYXQgc2VlbXMgdG8gd29yayB3ZWxsIGlzIHRoYXQgYVxuICAgKiBtaXhpbiBzaG91bGQgc2VlIGlmIGl0IHdhbnRzIHRvIGhhbmRsZSB0aGUgZXZlbnQgYW5kLCBpZiBub3QsIHRoZW4gYXNrIHRoZVxuICAgKiBzdXBlcmNsYXNzIHRvIHNlZSBpZiBpdCB3YW50cyB0byBoYW5kbGUgdGhlIGV2ZW50LiBUaGlzIGhhcyB0aGUgZWZmZWN0IG9mXG4gICAqIGdpdmluZyB0aGUgbWl4aW4gdGhhdCB3YXMgYXBwbGllZCBsYXN0IHRoZSBmaXJzdCBjaGFuY2UgYXQgaGFuZGxpbmcgYVxuICAgKiBrZXlib2FyZCBldmVudC5cbiAgICpcbiAgICogRXhhbXBsZTpcbiAgICpcbiAgICogICAgIGtleWRvd24oZXZlbnQpIHtcbiAgICogICAgICAgbGV0IGhhbmRsZWQ7XG4gICAqICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgKiAgICAgICAgIC8vIEhhbmRsZSB0aGUga2V5cyB5b3Ugd2FudCwgc2V0dGluZyBoYW5kbGVkID0gdHJ1ZSBpZiBhcHByb3ByaWF0ZS5cbiAgICogICAgICAgfVxuICAgKiAgICAgICAvLyBQcmVmZXIgbWl4aW4gcmVzdWx0IGlmIGl0J3MgZGVmaW5lZCwgb3RoZXJ3aXNlIHVzZSBiYXNlIHJlc3VsdC5cbiAgICogICAgICAgcmV0dXJuIGhhbmRsZWQgfHwgKHN1cGVyLmtleWRvd24gJiYgc3VwZXIua2V5ZG93bihldmVudCkpO1xuICAgKiAgICAgfVxuICAgKlxuICAgKiBBIHNlY29uZCBmZWF0dXJlIHByb3ZpZGVkIGJ5IHRoaXMgbWl4aW4gaXMgdGhhdCBpdCBpbXBsaWNpdGx5IG1ha2VzIHRoZVxuICAgKiBjb21wb25lbnQgYSB0YWIgc3RvcCBpZiBpdCBpc24ndCBhbHJlYWR5LCBieSBzZXR0aW5nIGB0YWJJbmRleGAgdG8gMC4gVGhpc1xuICAgKiBoYXMgdGhlIGVmZmVjdCBvZiBhZGRpbmcgdGhlIGNvbXBvbmVudCB0byB0aGUgdGFiIG9yZGVyIGluIGRvY3VtZW50IG9yZGVyLlxuICAgKlxuICAgKiBGaW5hbGx5LCB0aGlzIG1peGluIGlzIGRlc2lnbmVkIHRvIHdvcmsgd2l0aCB0aGUgb3B0aW9uYWxcbiAgICogW0NvbGxlY3RpdmVdKENvbGxlY3RpdmUubWQpIGNsYXNzIHZpYSBhIG1peGluIGxpa2VcbiAgICogW1RhcmdldEluQ29sbGVjdGl2ZV0oVGFyZ2V0SW5Db2xsZWN0aXZlLm1kKS4gVGhpcyBhbGxvd3MgYSBzZXQgb2YgcmVsYXRlZFxuICAgKiBjb21wb25lbnQgaW5zdGFuY2VzIHRvIGNvb3BlcmF0aXZlbHkgaGFuZGxlIHRoZSBrZXlib2FyZC4gU2VlIHRoZVxuICAgKiBDb2xsZWN0aXZlIGNsYXNzIGZvciBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3MgS2V5Ym9hcmQgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIC8vIEFzc3VtZSB0aGlzIGNvbXBvbmVudCBpcyBnb2luZyB0byBoYW5kbGUgdGhlIGtleWJvYXJkIG9uIGl0cyBvd24uXG4gICAgICAvLyBSRVZJRVc6IE1vdmUgdG8gY29ubmVjdGVkQ2FsbGJhY2s/XG4gICAgICBzdGFydExpc3RlbmluZ1RvS2V5ZG93bih0aGlzKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIElmIHdlJ3JlIG5vdyB0aGUgb3V0ZXJtb3N0IGVsZW1lbnQgb2YgdGhlIGNvbGxlY3RpdmUsIHNldCB1cCB0byByZWNlaXZlXG4gICAgICoga2V5Ym9hcmQgZXZlbnRzLiBJZiB3ZSdyZSBubyBsb25nZXIgdGhlIG91dGVybW9zdCBlbGVtZW50LCBzdG9wXG4gICAgICogbGlzdGVuaW5nLlxuICAgICAqL1xuICAgIGNvbGxlY3RpdmVDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbGxlY3RpdmVDaGFuZ2VkKSB7IHN1cGVyLmNvbGxlY3RpdmVDaGFuZ2VkKCk7IH1cblxuICAgICAgaWYgKHRoaXMuY29sbGVjdGl2ZS5vdXRlcm1vc3RFbGVtZW50ICE9PSB0aGlzKSB7XG4gICAgICAgIC8vIFdlJ3JlIG5vIGxvbmdlciB0aGUgb3V0ZXJtb3N0IGVsZW1lbnQ7IHN0b3AgbGlzdGVuaW5nLlxuICAgICAgICBpZiAoaXNMaXN0ZW5pbmdUb0tleWRvd24odGhpcykpIHtcbiAgICAgICAgICBzdG9wTGlzdGVuaW5nVG9LZXlkb3duKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgIC8vIFNpbmNlIHdlJ3JlIGdvaW5nIHRvIGhhbmRsZSB0aGUga2V5Ym9hcmQsIHNlZSBpZiB3ZSBjYW4gYWRvcHQgYW4gQVJJQVxuICAgICAgICAvLyBsYWJlbCBmcm9tIGFuIGlubmVyIGVsZW1lbnQgb2YgdGhlIGNvbGxlY3RpdmUuXG4gICAgICAgIGxldCBsYWJlbCA9IGdldENvbGxlY3RpdmVBcmlhTGFiZWwodGhpcy5jb2xsZWN0aXZlKTtcbiAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBsYWJlbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFpc0xpc3RlbmluZ1RvS2V5ZG93bih0aGlzKSkge1xuICAgICAgICBzdGFydExpc3RlbmluZ1RvS2V5ZG93bih0aGlzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG4gICAgICAvLyBTZXQgYSBkZWZhdWx0IHRhYiBpbmRleCBvZiAwIChkb2N1bWVudCBvcmRlcikgaWYgbm8gdGFiIGluZGV4IGV4aXN0cy5cbiAgICAgIC8vIE1TIEVkZ2UgcmVxdWlyZXMgd2UgZXhwbGljaXRseSBjaGVjayBmb3IgcHJlc2VuY2Ugb2YgdGFiaW5kZXggYXR0cmlidXRlLlxuICAgICAgaWYgKHRoaXMuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpID09IG51bGwgfHwgdGhpcy50YWJJbmRleCA8IDApIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgdGhlIGluZGljYXRlZCBrZXlib2FyZCBldmVudC5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy4gVGhpcyB3aWxsXG4gICAgICogdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudCAtIHRoZSBrZXlib2FyZCBldmVudFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIGV2ZW50IHdhcyBoYW5kbGVkXG4gICAgICovXG4gICAga2V5ZG93bihldmVudCkge1xuICAgICAgaWYgKHN1cGVyLmtleWRvd24pIHsgcmV0dXJuIHN1cGVyLmtleWRvd24oZXZlbnQpOyB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gS2V5Ym9hcmQ7XG59O1xuXG5cbi8vIEZpcmUgdGhlIGtleWRvd24oKSBtZXRob2Qgb24gdGhlIGVsZW1lbnQgb3IgKGlmIGl0IGJlbG9uZ3MgdG8gYSBjb2xsZWN0aXZlKVxuLy8gYWxsIGVsZW1lbnRzIGluIHRoZSBjb2xsZWN0aXZlLlxuLy9cbi8vIE5vdGU6IHRoZSB2YWx1ZSBvZiAndGhpcycgaXMgYm91bmQgdG8gdGhlIGVsZW1lbnQgd2hpY2ggcmVjZWl2ZWQgdGhlIGV2ZW50LlxuZnVuY3Rpb24ga2V5ZG93bihldmVudCkge1xuXG4gIGxldCBoYW5kbGVkID0gZmFsc2U7XG5cbiAgaWYgKHRoaXMuY29sbGVjdGl2ZSkge1xuICAgIC8vIEdpdmUgY29sbGVjdGl2ZSBlbGVtZW50cyBhIHNob3QgYXQgdGhlIGV2ZW50LCB3b3JraW5nIGZyb20gaW5uZXJtb3N0IHRvXG4gICAgLy8gb3V0ZXJtb3N0ICh0aGlzIGVsZW1lbnQpLlxuICAgIGxldCBlbGVtZW50cyA9IHRoaXMuY29sbGVjdGl2ZS5lbGVtZW50cztcbiAgICBmb3IgKGxldCBpID0gZWxlbWVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCBlbGVtZW50ID0gZWxlbWVudHNbaV07XG4gICAgICBoYW5kbGVkID0gZWxlbWVudC5rZXlkb3duICYmIGVsZW1lbnQua2V5ZG93bihldmVudCk7XG4gICAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gQ29tcG9uZW50IGlzIGhhbmRsaW5nIHRoZSBrZXlib2FyZCBvbiBpdHMgb3duLlxuICAgIGhhbmRsZWQgPSB0aGlzLmtleWRvd24oZXZlbnQpO1xuICB9XG5cbiAgaWYgKGhhbmRsZWQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG5cblxuLy8gUmV0dXJuIHRoZSBmaXJzdCBBUklBIGxhYmVsIGRlZmluZWQgYnkgdGhlIGNvbGxlY3RpdmUuXG5mdW5jdGlvbiBnZXRDb2xsZWN0aXZlQXJpYUxhYmVsKGNvbGxlY3RpdmUpIHtcbiAgbGV0IGxhYmVscyA9IGNvbGxlY3RpdmUuZWxlbWVudHMubWFwKGVsZW1lbnQgPT4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSk7XG4gIC8vIFdvdWxkIHByZWZlciB0byB1c2UgQXJyYXkucHJvdG90eXBlLmZpbmQgaGVyZSwgYnV0IElFIDExIGRvZXNuJ3QgaGF2ZSBpdC5cbiAgbGV0IG5vbk51bGxMYWJlbHMgPSBsYWJlbHMuZmlsdGVyKGxhYmVsID0+IGxhYmVsICE9IG51bGwpO1xuICByZXR1cm4gbm9uTnVsbExhYmVsc1swXTtcbn1cblxuXG5mdW5jdGlvbiBpc0xpc3RlbmluZ1RvS2V5ZG93bihlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50W2tleWRvd25MaXN0ZW5lclN5bWJvbF0gIT0gbnVsbDtcbn1cblxuXG5mdW5jdGlvbiBzdGFydExpc3RlbmluZ1RvS2V5ZG93bihlbGVtZW50KSB7XG4gIGVsZW1lbnRba2V5ZG93bkxpc3RlbmVyU3ltYm9sXSA9IGtleWRvd24uYmluZChlbGVtZW50KTtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZWxlbWVudFtrZXlkb3duTGlzdGVuZXJTeW1ib2xdKTtcbn1cblxuXG5mdW5jdGlvbiBzdG9wTGlzdGVuaW5nVG9LZXlkb3duKGVsZW1lbnQpIHtcbiAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZWxlbWVudFtrZXlkb3duTGlzdGVuZXJTeW1ib2xdKTtcbiAgZWxlbWVudFtrZXlkb3duTGlzdGVuZXJTeW1ib2xdID0gbnVsbDtcbiAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG59XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgbmF2aWdhdGlvbkF4aXNTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ25hdmlnYXRpb25BeGlzJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBLZXlib2FyZERpcmVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgZGlyZWN0aW9uIGtleXMgKExlZnQsIFJpZ2h0LCBldGMuKSB0byBkaXJlY3Rpb24gc2VtYW50aWNzXG4gICAqIChnbyBsZWZ0LCBnbyByaWdodCwgZXRjLikuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyB0aGUgY29tcG9uZW50IHRvIGludm9rZSBhIGBrZXlkb3duYCBtZXRob2Qgd2hlbiBhIGtleSBpc1xuICAgKiBwcmVzc2VkLiBZb3UgY2FuIHVzZSB0aGUgW0tleWJvYXJkXShLZXlib2FyZC5tZCkgbWl4aW4gZm9yIHRoYXQgcHVycG9zZSwgb3JcbiAgICogd2lyZSB1cCB5b3VyIG93biBrZXlib2FyZCBoYW5kbGluZyBhbmQgY2FsbCBga2V5ZG93bmAgeW91cnNlbGYuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gY2FsbHMgbWV0aG9kcyBzdWNoIGFzIGBnb0xlZnRgIGFuZCBgZ29SaWdodGAuIFlvdSBjYW4gZGVmaW5lXG4gICAqIHdoYXQgdGhhdCBtZWFucyBieSBpbXBsZW1lbnRpbmcgdGhvc2UgbWV0aG9kcyB5b3Vyc2VsZi4gSWYgeW91IHdhbnQgdG8gdXNlXG4gICAqIGRpcmVjdGlvbiBrZXlzIHRvIG5hdmlnYXRlIGEgc2VsZWN0aW9uLCB1c2UgdGhpcyBtaXhpbiB3aXRoIHRoZVxuICAgKiBbRGlyZWN0aW9uU2VsZWN0aW9uXShEaXJlY3Rpb25TZWxlY3Rpb24ubWQpIG1peGluLlxuICAgKi9cbiAgY2xhc3MgS2V5Ym9hcmREaXJlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIC8vIFNldCBkZWZhdWx0cy5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5uYXZpZ2F0aW9uQXhpcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uQXhpcyA9IHRoaXMuZGVmYXVsdHMubmF2aWdhdGlvbkF4aXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGRlZmF1bHRzKCkge1xuICAgICAgbGV0IGRlZmF1bHRzID0gc3VwZXIuZGVmYXVsdHMgfHwge307XG4gICAgICBkZWZhdWx0cy5uYXZpZ2F0aW9uQXhpcyA9ICdib3RoJztcbiAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgZG93bi5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgZ29Eb3duKCkge1xuICAgICAgaWYgKHN1cGVyLmdvRG93bikgeyByZXR1cm4gc3VwZXIuZ29Eb3duKCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgdG8gdGhlIGVuZCAoZS5nLiwgb2YgYSBsaXN0KS5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgZ29FbmQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29FbmQpIHsgcmV0dXJuIHN1cGVyLmdvRW5kKCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgbGVmdC5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgZ29MZWZ0KCkge1xuICAgICAgaWYgKHN1cGVyLmdvTGVmdCkgeyByZXR1cm4gc3VwZXIuZ29MZWZ0KCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgcmlnaHQuXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIGdvUmlnaHQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29SaWdodCkgeyByZXR1cm4gc3VwZXIuZ29SaWdodCgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHRvIHRoZSBzdGFydCAoZS5nLiwgb2YgYVxuICAgICAqIGxpc3QpLiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgZ29TdGFydCgpIHtcbiAgICAgIGlmIChzdXBlci5nb1N0YXJ0KSB7IHJldHVybiBzdXBlci5nb1N0YXJ0KCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgdXAuXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIGdvVXAoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29VcCkgeyByZXR1cm4gc3VwZXIuZ29VcCgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHRoZSBkaXJlY3Rpb24gb2YgcGVybWl0dGVkIG5hdmlnYXRpb24gd2l0aCB0aGUga2V5Ym9hcmQuXG4gICAgICpcbiAgICAgKiBBY2NlcHRlZCB2YWx1ZXMgYXJlIFwiaG9yaXpvbnRhbFwiLCBcInZlcnRpY2FsXCIsIG9yIFwiYm90aFwiICh0aGUgZGVmYXVsdCkuXG4gICAgICogSWYgdGhpcyBwcm9wZXJ0eSBpcyBcImhvcml6b250YWxcIiwgdGhlIFVwIEFycm93IGFuZCBEb3duIEFycm93IGtleXMgd2lsbFxuICAgICAqIGJlIGlnbm9yZWQuIENvbnZlcnNlbHksIGlmIHRoaXMgaXMgXCJ2ZXJ0aWNhbFwiLCB0aGUgTGVmdCBBcnJvdyBhbmQgUmlnaHRcbiAgICAgKiBBcnJvdyBrZXlzIHdpbGwgYmUgaWdub3JlZC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0IG5hdmlnYXRpb25BeGlzKCkge1xuICAgICAgcmV0dXJuIHRoaXNbbmF2aWdhdGlvbkF4aXNTeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgbmF2aWdhdGlvbkF4aXModmFsdWUpIHtcbiAgICAgIHRoaXNbbmF2aWdhdGlvbkF4aXNTeW1ib2xdID0gdmFsdWU7XG4gICAgICBpZiAoJ25hdmlnYXRpb25BeGlzJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5uYXZpZ2F0aW9uQXhpcyA9IHZhbHVlOyB9XG4gICAgfVxuXG4gICAga2V5ZG93bihldmVudCkge1xuICAgICAgbGV0IGhhbmRsZWQ7XG5cbiAgICAgIGxldCBheGlzID0gdGhpcy5uYXZpZ2F0aW9uQXhpcztcbiAgICAgIGxldCBob3Jpem9udGFsID0gKGF4aXMgPT09ICdob3Jpem9udGFsJyB8fCBheGlzID09PSAnYm90aCcpO1xuICAgICAgbGV0IHZlcnRpY2FsID0gKGF4aXMgPT09ICd2ZXJ0aWNhbCcgfHwgYXhpcyA9PT0gJ2JvdGgnKTtcblxuICAgICAgLy8gSWdub3JlIExlZnQvUmlnaHQga2V5cyB3aGVuIG1ldGFLZXkgb3IgYWx0S2V5IG1vZGlmaWVyIGlzIGFsc28gcHJlc3NlZCxcbiAgICAgIC8vIGFzIHRoZSB1c2VyIG1heSBiZSB0cnlpbmcgdG8gbmF2aWdhdGUgYmFjayBvciBmb3J3YXJkIGluIHRoZSBicm93c2VyLlxuICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgMzU6IC8vIEVuZFxuICAgICAgICAgIGhhbmRsZWQgPSB0aGlzLmdvRW5kKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzY6IC8vIEhvbWVcbiAgICAgICAgICBoYW5kbGVkID0gdGhpcy5nb1N0YXJ0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzc6IC8vIExlZnRcbiAgICAgICAgICBpZiAoaG9yaXpvbnRhbCAmJiAhZXZlbnQubWV0YUtleSAmJiAhZXZlbnQuYWx0S2V5KSB7XG4gICAgICAgICAgICBoYW5kbGVkID0gdGhpcy5nb0xlZnQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzg6IC8vIFVwXG4gICAgICAgICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICAgICAgICBoYW5kbGVkID0gZXZlbnQuYWx0S2V5ID8gdGhpcy5nb1N0YXJ0KCkgOiB0aGlzLmdvVXAoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzk6IC8vIFJpZ2h0XG4gICAgICAgICAgaWYgKGhvcml6b250YWwgJiYgIWV2ZW50Lm1ldGFLZXkgJiYgIWV2ZW50LmFsdEtleSkge1xuICAgICAgICAgICAgaGFuZGxlZCA9IHRoaXMuZ29SaWdodCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0MDogLy8gRG93blxuICAgICAgICAgIGlmICh2ZXJ0aWNhbCkge1xuICAgICAgICAgICAgaGFuZGxlZCA9IGV2ZW50LmFsdEtleSA/IHRoaXMuZ29FbmQoKSA6IHRoaXMuZ29Eb3duKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgLy8gUHJlZmVyIG1peGluIHJlc3VsdCBpZiBpdCdzIGRlZmluZWQsIG90aGVyd2lzZSB1c2UgYmFzZSByZXN1bHQuXG4gICAgICByZXR1cm4gaGFuZGxlZCB8fCAoc3VwZXIua2V5ZG93biAmJiBzdXBlci5rZXlkb3duKGV2ZW50KSk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gS2V5Ym9hcmREaXJlY3Rpb247XG59O1xuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBLZXlib2FyZFBhZ2VkU2VsZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFwcyBwYWdlIGtleXMgKFBhZ2UgVXAsIFBhZ2UgRG93bikgaW50byBvcGVyYXRpb25zIHRoYXQgbW92ZVxuICAgKiB0aGUgc2VsZWN0aW9uIGJ5IG9uZSBwYWdlLlxuICAgKlxuICAgKiBUaGUga2V5Ym9hcmQgaW50ZXJhY3Rpb24gbW9kZWwgZ2VuZXJhbGx5IGZvbGxvd3MgdGhhdCBvZiBNaWNyb3NvZnQgV2luZG93cydcbiAgICogbGlzdCBib3hlcyBpbnN0ZWFkIG9mIHRob3NlIGluIE9TIFg6XG4gICAqXG4gICAqICogVGhlIFBhZ2UgVXAvRG93biBhbmQgSG9tZS9FbmQga2V5cyBhY3R1YWxseSBjaGFuZ2UgdGhlIHNlbGVjdGlvbiwgcmF0aGVyXG4gICAqICAgdGhhbiBqdXN0IHNjcm9sbGluZy4gVGhlIGZvcm1lciBiZWhhdmlvciBzZWVtcyBtb3JlIGdlbmVyYWxseSB1c2VmdWwgZm9yXG4gICAqICAga2V5Ym9hcmQgdXNlcnMuXG4gICAqXG4gICAqICogUHJlc3NpbmcgUGFnZSBVcC9Eb3duIHdpbGwgY2hhbmdlIHRoZSBzZWxlY3Rpb24gdG8gdGhlIHRvcG1vc3QvYm90dG9tbW9zdFxuICAgKiAgIHZpc2libGUgaXRlbSBpZiB0aGUgc2VsZWN0aW9uIGlzIG5vdCBhbHJlYWR5IHRoZXJlLiBUaGVyZWFmdGVyLCB0aGUga2V5XG4gICAqICAgd2lsbCBtb3ZlIHRoZSBzZWxlY3Rpb24gdXAvZG93biBieSBhIHBhZ2UsIGFuZCAocGVyIHRoZSBhYm92ZSBwb2ludCkgbWFrZVxuICAgKiAgIHRoZSBzZWxlY3RlZCBpdGVtIHZpc2libGUuXG4gICAqXG4gICAqIFRvIGVuc3VyZSB0aGUgc2VsZWN0ZWQgaXRlbSBpcyBpbiB2aWV3IGZvbGxvd2luZyB1c2Ugb2YgUGFnZSBVcC9Eb3duLCB1c2VcbiAgICogdGhlIHJlbGF0ZWQgW1NlbGVjdGlvbkluVmlld10oU2VsZWN0aW9uSW5WaWV3Lm1kKSBtaXhpbi5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIHRoZSBjb21wb25lbnQgdG8gaW52b2tlIGEgYGtleWRvd25gIG1ldGhvZCB3aGVuIGEga2V5IGlzXG4gICAqIHByZXNzZWQuIFlvdSBjYW4gdXNlIHRoZSBbS2V5Ym9hcmRdKEtleWJvYXJkLm1kKSBtaXhpbiBmb3IgdGhhdCBwdXJwb3NlLCBvclxuICAgKiB3aXJlIHVwIHlvdXIgb3duIGtleWJvYXJkIGhhbmRsaW5nIGFuZCBjYWxsIGBrZXlkb3duYCB5b3Vyc2VsZi5cbiAgICovXG4gIGNsYXNzIEtleWJvYXJkUGFnZWRTZWxlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIGtleWRvd24oZXZlbnQpIHtcbiAgICAgIGxldCBoYW5kbGVkO1xuICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgMzM6IC8vIFBhZ2UgVXBcbiAgICAgICAgICBoYW5kbGVkID0gdGhpcy5wYWdlVXAoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNDogLy8gUGFnZSBEb3duXG4gICAgICAgICAgaGFuZGxlZCA9IHRoaXMucGFnZURvd24oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIC8vIFByZWZlciBtaXhpbiByZXN1bHQgaWYgaXQncyBkZWZpbmVkLCBvdGhlcndpc2UgdXNlIGJhc2UgcmVzdWx0LlxuICAgICAgcmV0dXJuIGhhbmRsZWQgfHwgKHN1cGVyLmtleWRvd24gJiYgc3VwZXIua2V5ZG93bihldmVudCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjcm9sbCBkb3duIG9uZSBwYWdlLlxuICAgICAqL1xuICAgIHBhZ2VEb3duKCkge1xuICAgICAgaWYgKHN1cGVyLnBhZ2VEb3duKSB7IHN1cGVyLnBhZ2VEb3duKCk7IH1cbiAgICAgIHJldHVybiBzY3JvbGxPbmVQYWdlKHRoaXMsIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjcm9sbCB1cCBvbmUgcGFnZS5cbiAgICAgKi9cbiAgICBwYWdlVXAoKSB7XG4gICAgICBpZiAoc3VwZXIucGFnZVVwKSB7IHN1cGVyLnBhZ2VVcCgpOyB9XG4gICAgICByZXR1cm4gc2Nyb2xsT25lUGFnZSh0aGlzLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgc2Nyb2xsZWQgd2l0aCB0aGUgUGFnZSBVcC9Eb3duIGtleXMuXG4gICAgICogRGVmYXVsdCBpcyB0aGUgY3VycmVudCBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGdldCBzY3JvbGxUYXJnZXQoKSB7XG4gICAgICAvLyBQcmVmZXIgYmFzZSByZXN1bHQuXG4gICAgICByZXR1cm4gJ3Njcm9sbFRhcmdldCcgaW4gYmFzZS5wcm90b3R5cGUgPyBzdXBlci5zY3JvbGxUYXJnZXQgOiB0aGlzO1xuICAgIH1cbiAgICBzZXQgc2Nyb2xsVGFyZ2V0KGVsZW1lbnQpIHtcbiAgICAgIGlmICgnc2Nyb2xsVGFyZ2V0JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zY3JvbGxUYXJnZXQgPSBlbGVtZW50OyB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIEtleWJvYXJkUGFnZWRTZWxlY3Rpb247XG59O1xuXG5cbi8vIFJldHVybiB0aGUgaXRlbSB3aG9zZSBjb250ZW50IHNwYW5zIHRoZSBnaXZlbiB5IHBvc2l0aW9uIChyZWxhdGl2ZSB0byB0aGVcbi8vIHRvcCBvZiB0aGUgbGlzdCdzIHNjcm9sbGluZyBjbGllbnQgYXJlYSksIG9yIG51bGwgaWYgbm90IGZvdW5kLlxuLy9cbi8vIElmIGRvd253YXJkIGlzIHRydWUsIG1vdmUgZG93biB0aGUgbGlzdCBvZiBpdGVtcyB0byBmaW5kIHRoZSBmaXJzdCBpdGVtXG4vLyBmb3VuZCBhdCB0aGUgZ2l2ZW4geSBwb3NpdGlvbjsgaWYgZG93bndhcmQgaXMgZmFsc2UsIG1vdmUgdXAgdGhlIGxpc3Qgb2Zcbi8vIGl0ZW1zIHRvIGZpbmQgdGhlIGxhc3QgaXRlbSBhdCB0aGF0IHBvc2l0aW9uLlxuZnVuY3Rpb24gZ2V0SW5kZXhPZkl0ZW1BdFkoZWxlbWVudCwgeSwgZG93bndhcmQpIHtcbiAgbGV0IGl0ZW1zID0gZWxlbWVudC5pdGVtcztcbiAgbGV0IHN0YXJ0ID0gZG93bndhcmQgPyAwIDogaXRlbXMubGVuZ3RoIC0gMTtcbiAgbGV0IGVuZCA9IGRvd253YXJkID8gaXRlbXMubGVuZ3RoIDogMDtcbiAgbGV0IHN0ZXAgPSBkb3dud2FyZCA/IDEgOiAtMTtcbiAgbGV0IHNjcm9sbFRhcmdldCA9IGVsZW1lbnQuc2Nyb2xsVGFyZ2V0O1xuICBsZXQgdG9wT2ZDbGllbnRBcmVhID0gc2Nyb2xsVGFyZ2V0Lm9mZnNldFRvcCArIHNjcm9sbFRhcmdldC5jbGllbnRUb3A7XG5cbiAgLy8gRmluZCB0aGUgaXRlbSBzcGFubmluZyB0aGUgaW5kaWNhdGVkIHkgY29vcmRpbmF0ZS5cbiAgbGV0IGl0ZW07XG4gIGxldCBpdGVtSW5kZXggPSBzdGFydDtcbiAgbGV0IGl0ZW1Ub3A7XG4gIGxldCBmb3VuZCA9IGZhbHNlO1xuICB3aGlsZSAoaXRlbUluZGV4ICE9PSBlbmQpIHtcbiAgICBpdGVtID0gaXRlbXNbaXRlbUluZGV4XTtcbiAgICBpdGVtVG9wID0gaXRlbS5vZmZzZXRUb3AgLSB0b3BPZkNsaWVudEFyZWE7XG4gICAgbGV0IGl0ZW1Cb3R0b20gPSBpdGVtVG9wICsgaXRlbS5vZmZzZXRIZWlnaHQ7XG4gICAgaWYgKGl0ZW1Ub3AgPD0geSAmJiBpdGVtQm90dG9tID49IHkpIHtcbiAgICAgIC8vIEl0ZW0gc3BhbnMgdGhlIGluZGljYXRlZCB5IGNvb3JkaW5hdGUuXG4gICAgICBmb3VuZCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaXRlbUluZGV4ICs9IHN0ZXA7XG4gIH1cblxuICBpZiAoIWZvdW5kKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBXZSBtYXkgaGF2ZSBmb3VuZCBhbiBpdGVtIHdob3NlIHBhZGRpbmcgc3BhbnMgdGhlIGdpdmVuIHkgY29vcmRpbmF0ZSxcbiAgLy8gYnV0IHdob3NlIGNvbnRlbnQgaXMgYWN0dWFsbHkgYWJvdmUvYmVsb3cgdGhhdCBwb2ludC5cbiAgLy8gVE9ETzogSWYgdGhlIGl0ZW0gaGFzIGEgYm9yZGVyLCB0aGVuIHBhZGRpbmcgc2hvdWxkIGJlIGluY2x1ZGVkIGluXG4gIC8vIGNvbnNpZGVyaW5nIGEgaGl0LlxuICBsZXQgaXRlbVN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShpdGVtKTtcbiAgbGV0IGl0ZW1QYWRkaW5nVG9wID0gcGFyc2VGbG9hdChpdGVtU3R5bGUucGFkZGluZ1RvcCk7XG4gIGxldCBpdGVtUGFkZGluZ0JvdHRvbSA9IHBhcnNlRmxvYXQoaXRlbVN0eWxlLnBhZGRpbmdCb3R0b20pO1xuICBsZXQgY29udGVudFRvcCA9IGl0ZW1Ub3AgKyBpdGVtLmNsaWVudFRvcCArIGl0ZW1QYWRkaW5nVG9wO1xuICBsZXQgY29udGVudEJvdHRvbSA9IGNvbnRlbnRUb3AgKyBpdGVtLmNsaWVudEhlaWdodCAtIGl0ZW1QYWRkaW5nVG9wIC0gaXRlbVBhZGRpbmdCb3R0b207XG4gIGlmIChkb3dud2FyZCAmJiBjb250ZW50VG9wIDw9IHkgfHwgIWRvd253YXJkICYmIGNvbnRlbnRCb3R0b20gPj0geSkge1xuICAgIC8vIFRoZSBpbmRpY2F0ZWQgY29vcmRpbmF0ZSBoaXRzIHRoZSBhY3R1YWwgaXRlbSBjb250ZW50LlxuICAgIHJldHVybiBpdGVtSW5kZXg7XG4gIH1cbiAgZWxzZSB7XG4gICAgLy8gVGhlIGluZGljYXRlZCBjb29yZGluYXRlIGZhbGxzIHdpdGhpbiB0aGUgaXRlbSdzIHBhZGRpbmcuIEJhY2sgdXAgdG9cbiAgICAvLyB0aGUgaXRlbSBiZWxvdy9hYm92ZSB0aGUgaXRlbSB3ZSBmb3VuZCBhbmQgcmV0dXJuIHRoYXQuXG4gICAgcmV0dXJuIGl0ZW1JbmRleCAtIHN0ZXA7XG4gIH1cbn1cblxuLy8gTW92ZSBieSBvbmUgcGFnZSBkb3dud2FyZCAoaWYgZG93bndhcmQgaXMgdHJ1ZSksIG9yIHVwd2FyZCAoaWYgZmFsc2UpLlxuLy8gUmV0dXJuIHRydWUgaWYgd2UgZW5kZWQgdXAgY2hhbmdpbmcgdGhlIHNlbGVjdGlvbiwgZmFsc2UgaWYgbm90LlxuLy8gVE9ETzogQmV0dGVyIHN1cHBvcnQgZm9yIGhvcml6b250YWwgbGlzdHMuXG5mdW5jdGlvbiBzY3JvbGxPbmVQYWdlKGVsZW1lbnQsIGRvd253YXJkKSB7XG5cbiAgLy8gRGV0ZXJtaW5lIHRoZSBpdGVtIHZpc2libGUganVzdCBhdCB0aGUgZWRnZSBvZiBkaXJlY3Rpb24gd2UncmUgaGVhZGluZy5cbiAgLy8gV2UnbGwgc2VsZWN0IHRoYXQgaXRlbSBpZiBpdCdzIG5vdCBhbHJlYWR5IHNlbGVjdGVkLlxuICBsZXQgc2Nyb2xsVGFyZ2V0ID0gZWxlbWVudC5zY3JvbGxUYXJnZXQ7XG4gIGxldCBlZGdlID0gc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCArIChkb3dud2FyZCA/IHNjcm9sbFRhcmdldC5jbGllbnRIZWlnaHQgOiAwKTtcbiAgbGV0IGluZGV4T2ZJdGVtQXRFZGdlID0gZ2V0SW5kZXhPZkl0ZW1BdFkoZWxlbWVudCwgZWRnZSwgZG93bndhcmQpO1xuXG4gIGxldCBzZWxlY3RlZEluZGV4ID0gZWxlbWVudC5zZWxlY3RlZEluZGV4O1xuICBsZXQgbmV3SW5kZXg7XG4gIGlmIChpbmRleE9mSXRlbUF0RWRnZSAmJiBzZWxlY3RlZEluZGV4ID09PSBpbmRleE9mSXRlbUF0RWRnZSkge1xuICAgIC8vIFRoZSBpdGVtIGF0IHRoZSBlZGdlIHdhcyBhbHJlYWR5IHNlbGVjdGVkLCBzbyBzY3JvbGwgaW4gdGhlIGluZGljYXRlZFxuICAgIC8vIGRpcmVjdGlvbiBieSBvbmUgcGFnZS4gTGVhdmUgdGhlIG5ldyBpdGVtIGF0IHRoYXQgZWRnZSBzZWxlY3RlZC5cbiAgICBsZXQgZGVsdGEgPSAoZG93bndhcmQgPyAxIDogLTEpICogc2Nyb2xsVGFyZ2V0LmNsaWVudEhlaWdodDtcbiAgICBuZXdJbmRleCA9IGdldEluZGV4T2ZJdGVtQXRZKGVsZW1lbnQsIGVkZ2UgKyBkZWx0YSwgZG93bndhcmQpO1xuICB9XG4gIGVsc2Uge1xuICAgIC8vIFRoZSBpdGVtIGF0IHRoZSBlZGdlIHdhc24ndCBzZWxlY3RlZCB5ZXQuIEluc3RlYWQgb2Ygc2Nyb2xsaW5nLCB3ZSdsbFxuICAgIC8vIGp1c3Qgc2VsZWN0IHRoYXQgaXRlbS4gVGhhdCBpcywgdGhlIGZpcnN0IGF0dGVtcHQgdG8gcGFnZSB1cC9kb3duXG4gICAgLy8gdXN1YWxseSBqdXN0IG1vdmVzIHRoZSBzZWxlY3Rpb24gdG8gdGhlIGVkZ2UgaW4gdGhhdCBkaXJlY3Rpb24uXG4gICAgbmV3SW5kZXggPSBpbmRleE9mSXRlbUF0RWRnZTtcbiAgfVxuXG4gIGlmICghbmV3SW5kZXgpIHtcbiAgICAvLyBXZSBjYW4ndCBmaW5kIGFuIGl0ZW0gaW4gdGhlIGRpcmVjdGlvbiB3ZSB3YW50IHRvIHRyYXZlbC4gU2VsZWN0IHRoZVxuICAgIC8vIGxhc3QgaXRlbSAoaWYgbW92aW5nIGRvd253YXJkKSBvciBmaXJzdCBpdGVtIChpZiBtb3ZpbmcgdXB3YXJkKS5cbiAgICBuZXdJbmRleCA9IChkb3dud2FyZCA/IGVsZW1lbnQuaXRlbXMubGVuZ3RoIC0gMSA6IDApO1xuICB9XG5cbiAgaWYgKG5ld0luZGV4ICE9PSBzZWxlY3RlZEluZGV4KSB7XG4gICAgZWxlbWVudC5zZWxlY3RlZEluZGV4ID0gbmV3SW5kZXg7XG4gICAgcmV0dXJuIHRydWU7IC8vIFdlIGhhbmRsZWQgdGhlIHBhZ2UgdXAvZG93biBvdXJzZWx2ZXMuXG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlOyAvLyBXZSBkaWRuJ3QgZG8gYW55dGhpbmcuXG4gIH1cbn1cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBpdGVtVGV4dENvbnRlbnRzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdpdGVtVGV4dENvbnRlbnRzJyk7XG5jb25zdCB0eXBlZFByZWZpeFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgndHlwZWRQcmVmaXgnKTtcbmNvbnN0IHByZWZpeFRpbWVvdXRTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3ByZWZpeFRpbWVvdXQnKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEtleWJvYXJkUHJlZml4U2VsZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gdGhhdCBoYW5kbGVzIGxpc3QgYm94LXN0eWxlIHByZWZpeCB0eXBpbmcsIGluIHdoaWNoIHRoZSB1c2VyIGNhbiB0eXBlXG4gICAqIGEgc3RyaW5nIHRvIHNlbGVjdCB0aGUgZmlyc3QgaXRlbSB0aGF0IGJlZ2lucyB3aXRoIHRoYXQgc3RyaW5nLlxuICAgKlxuICAgKiBFeGFtcGxlOiBzdXBwb3NlIGEgY29tcG9uZW50IHVzaW5nIHRoaXMgbWl4aW4gaGFzIHRoZSBmb2xsb3dpbmcgaXRlbXM6XG4gICAqXG4gICAqICAgICA8c2FtcGxlLWxpc3QtY29tcG9uZW50PlxuICAgKiAgICAgICA8ZGl2PkFwcGxlPC9kaXY+XG4gICAqICAgICAgIDxkaXY+QXByaWNvdDwvZGl2PlxuICAgKiAgICAgICA8ZGl2PkJhbmFuYTwvZGl2PlxuICAgKiAgICAgICA8ZGl2PkJsYWNrYmVycnk8L2Rpdj5cbiAgICogICAgICAgPGRpdj5CbHVlYmVycnk8L2Rpdj5cbiAgICogICAgICAgPGRpdj5DYW50YWxvdXBlPC9kaXY+XG4gICAqICAgICAgIDxkaXY+Q2hlcnJ5PC9kaXY+XG4gICAqICAgICAgIDxkaXY+TGVtb248L2Rpdj5cbiAgICogICAgICAgPGRpdj5MaW1lPC9kaXY+XG4gICAqICAgICA8L3NhbXBsZS1saXN0LWNvbXBvbmVudD5cbiAgICpcbiAgICogSWYgdGhpcyBjb21wb25lbnQgcmVjZWl2ZXMgdGhlIGZvY3VzLCBhbmQgdGhlIHVzZXIgcHJlc3NlcyB0aGUgXCJiXCIgb3IgXCJCXCJcbiAgICoga2V5LCB0aGUgXCJCYW5hbmFcIiBpdGVtIHdpbGwgYmUgc2VsZWN0ZWQsIGJlY2F1c2UgaXQncyB0aGUgZmlyc3QgaXRlbSB0aGF0XG4gICAqIG1hdGNoZXMgdGhlIHByZWZpeCBcImJcIi4gKE1hdGNoaW5nIGlzIGNhc2UtaW5zZW5zaXRpdmUuKSBJZiB0aGUgdXNlciBub3dcbiAgICogcHJlc3NlcyB0aGUgXCJsXCIgb3IgXCJMXCIga2V5IHF1aWNrbHksIHRoZSBwcmVmaXggdG8gbWF0Y2ggYmVjb21lcyBcImJsXCIsIHNvXG4gICAqIFwiQmxhY2tiZXJyeVwiIHdpbGwgYmUgc2VsZWN0ZWQuXG4gICAqXG4gICAqIFRoZSBwcmVmaXggdHlwaW5nIGZlYXR1cmUgaGFzIGEgb25lIHNlY29uZCB0aW1lb3V0IOKAlMKgdGhlIHByZWZpeCB0byBtYXRjaFxuICAgKiB3aWxsIGJlIHJlc2V0IGFmdGVyIGEgc2Vjb25kIGhhcyBwYXNzZWQgc2luY2UgdGhlIHVzZXIgbGFzdCB0eXBlZCBhIGtleS5cbiAgICogSWYsIGluIHRoZSBhYm92ZSBleGFtcGxlLCB0aGUgdXNlciB3YWl0cyBhIHNlY29uZCBiZXR3ZWVuIHR5cGluZyBcImJcIiBhbmRcbiAgICogXCJsXCIsIHRoZSBwcmVmaXggd2lsbCBiZWNvbWUgXCJsXCIsIHNvIFwiTGVtb25cIiB3b3VsZCBiZSBzZWxlY3RlZC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIHRoZSBjb21wb25lbnQgdG8gaW52b2tlIGEgYGtleWRvd25gIG1ldGhvZCB3aGVuIGEga2V5IGlzXG4gICAqIHByZXNzZWQuIFlvdSBjYW4gdXNlIHRoZSBbS2V5Ym9hcmRdKEtleWJvYXJkLm1kKSBtaXhpbiBmb3IgdGhhdCBwdXJwb3NlLCBvclxuICAgKiB3aXJlIHVwIHlvdXIgb3duIGtleWJvYXJkIGhhbmRsaW5nIGFuZCBjYWxsIGBrZXlkb3duYCB5b3Vyc2VsZi5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBhbHNvIGV4cGVjdHMgdGhlIGNvbXBvbmVudCB0byBwcm92aWRlIGFuIGBpdGVtc2AgcHJvcGVydHkuIFRoZVxuICAgKiBgdGV4dENvbnRlbnRgIG9mIHRob3NlIGl0ZW1zIHdpbGwgYmUgdXNlZCBmb3IgcHVycG9zZXMgb2YgcHJlZml4IG1hdGNoaW5nLlxuICAgKi9cbiAgY2xhc3MgS2V5Ym9hcmRQcmVmaXhTZWxlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8vIFRPRE86IElmIHRoZSBzZXQgb2YgaXRlbXMgaXMgY2hhbmdlZCwgcmVzZXQgdGhlIHByZWZpeC5cbiAgICAvLyBpdGVtc0NoYW5nZWQoKSB7XG4gICAgLy8gICB0aGlzW2l0ZW1UZXh0Q29udGVudHNTeW1ib2xdID0gbnVsbDtcbiAgICAvLyAgIHJlc2V0VHlwZWRQcmVmaXgodGhpcyk7XG4gICAgLy8gfVxuXG4gICAgLy8gVE9ETzogSWYgdGhlIHNlbGVjdGlvbiBpcyBjaGFuZ2VkIGJ5IHNvbWUgb3RoZXIgbWVhbnMgKGUuZy4sIGFycm93IGtleXMpXG4gICAgLy8gb3RoZXIgdGhhbiBwcmVmaXggdHlwaW5nLCB0aGVuIHRoYXQgYWN0IHNob3VsZCByZXNldCB0aGUgcHJlZml4LlxuXG4gICAga2V5ZG93bihldmVudCkge1xuICAgICAgbGV0IGhhbmRsZWQ7XG4gICAgICBsZXQgcmVzZXRQcmVmaXggPSB0cnVlO1xuXG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSA4OiAvLyBCYWNrc3BhY2VcbiAgICAgICAgICBoYW5kbGVCYWNrc3BhY2UodGhpcyk7XG4gICAgICAgICAgaGFuZGxlZCA9IHRydWU7XG4gICAgICAgICAgcmVzZXRQcmVmaXggPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyNzogLy8gRXNjYXBlXG4gICAgICAgICAgaGFuZGxlZCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaWYgKCFldmVudC5jdHJsS2V5ICYmICFldmVudC5tZXRhS2V5ICYmICFldmVudC5hbHRLZXkgJiZcbiAgICAgICAgICAgICAgZXZlbnQud2hpY2ggIT09IDMyIC8qIFNwYWNlICovKSB7XG4gICAgICAgICAgICBoYW5kbGVQbGFpbkNoYXJhY3Rlcih0aGlzLCBTdHJpbmcuZnJvbUNoYXJDb2RlKGV2ZW50LndoaWNoKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc2V0UHJlZml4ID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXNldFByZWZpeCkge1xuICAgICAgICByZXNldFR5cGVkUHJlZml4KHRoaXMpO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVmZXIgbWl4aW4gcmVzdWx0IGlmIGl0J3MgZGVmaW5lZCwgb3RoZXJ3aXNlIHVzZSBiYXNlIHJlc3VsdC5cbiAgICAgIHJldHVybiBoYW5kbGVkIHx8IChzdXBlci5rZXlkb3duICYmIHN1cGVyLmtleWRvd24oZXZlbnQpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgdGhlIGZpcnN0IGl0ZW0gd2hvc2UgdGV4dCBjb250ZW50IGJlZ2lucyB3aXRoIHRoZSBnaXZlbiBwcmVmaXguXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcHJlZml4IFtTdHJpbmddIFRoZSBwcmVmaXggc3RyaW5nIHRvIHNlYXJjaCBmb3JcbiAgICAgKi9cbiAgICBzZWxlY3RJdGVtV2l0aFRleHRQcmVmaXgocHJlZml4KSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0SXRlbVdpdGhUZXh0UHJlZml4KSB7IHN1cGVyLnNlbGVjdEl0ZW1XaXRoVGV4dFByZWZpeChwcmVmaXgpOyB9XG4gICAgICBpZiAocHJlZml4ID09IG51bGwgfHwgcHJlZml4Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgaW5kZXggPSBnZXRJbmRleE9mSXRlbVdpdGhUZXh0UHJlZml4KHRoaXMsIHByZWZpeCk7XG4gICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBLZXlib2FyZFByZWZpeFNlbGVjdGlvbjtcbn07XG5cblxuLy8gVGltZSBpbiBtaWxsaXNlY29uZHMgYWZ0ZXIgd2hpY2ggdGhlIHVzZXIgaXMgY29uc2lkZXJlZCB0byBoYXZlIHN0b3BwZWRcbi8vIHR5cGluZy5cbmNvbnN0IFBSRUZJWF9USU1FT1VUX0RVUkFUSU9OID0gMTAwMDtcblxuXG4vLyBSZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBpdGVtIHdpdGggdGhlIGdpdmVuIHByZWZpeCwgZWxzZSAtMS5cbmZ1bmN0aW9uIGdldEluZGV4T2ZJdGVtV2l0aFRleHRQcmVmaXgoZWxlbWVudCwgcHJlZml4KSB7XG4gIGxldCBpdGVtVGV4dENvbnRlbnRzID0gZ2V0SXRlbVRleHRDb250ZW50cyhlbGVtZW50KTtcbiAgbGV0IHByZWZpeExlbmd0aCA9IHByZWZpeC5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbVRleHRDb250ZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBpdGVtVGV4dENvbnRlbnQgPSBpdGVtVGV4dENvbnRlbnRzW2ldO1xuICAgIGlmIChpdGVtVGV4dENvbnRlbnQuc3Vic3RyKDAsIHByZWZpeExlbmd0aCkgPT09IHByZWZpeCkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuLy8gUmV0dXJuIGFuIGFycmF5IG9mIHRoZSB0ZXh0IGNvbnRlbnQgKGluIGxvd2VyY2FzZSkgb2YgYWxsIGl0ZW1zLlxuLy8gQ2FjaGUgdGhlc2UgcmVzdWx0cy5cbmZ1bmN0aW9uIGdldEl0ZW1UZXh0Q29udGVudHMoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnRbaXRlbVRleHRDb250ZW50c1N5bWJvbF0pIHtcbiAgICBsZXQgaXRlbXMgPSBlbGVtZW50Lml0ZW1zO1xuICAgIGVsZW1lbnRbaXRlbVRleHRDb250ZW50c1N5bWJvbF0gPSBpdGVtcy5tYXAoY2hpbGQgPT4ge1xuICAgICAgbGV0IHRleHQgPSBjaGlsZC50ZXh0Q29udGVudCB8fCBjaGlsZC5hbHQ7XG4gICAgICByZXR1cm4gdGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBlbGVtZW50W2l0ZW1UZXh0Q29udGVudHNTeW1ib2xdO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVCYWNrc3BhY2UoZWxlbWVudCkge1xuICBsZXQgbGVuZ3RoID0gZWxlbWVudFt0eXBlZFByZWZpeFN5bWJvbF0gPyBlbGVtZW50W3R5cGVkUHJlZml4U3ltYm9sXS5sZW5ndGggOiAwO1xuICBpZiAobGVuZ3RoID4gMCkge1xuICAgIGVsZW1lbnRbdHlwZWRQcmVmaXhTeW1ib2xdID0gZWxlbWVudFt0eXBlZFByZWZpeFN5bWJvbF0uc3Vic3RyKDAsIGxlbmd0aCAtIDEpO1xuICB9XG4gIGVsZW1lbnQuc2VsZWN0SXRlbVdpdGhUZXh0UHJlZml4KGVsZW1lbnRbdHlwZWRQcmVmaXhTeW1ib2xdKTtcbiAgc2V0UHJlZml4VGltZW91dChlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUGxhaW5DaGFyYWN0ZXIoZWxlbWVudCwgY2hhcikge1xuICBsZXQgcHJlZml4ID0gZWxlbWVudFt0eXBlZFByZWZpeFN5bWJvbF0gfHwgJyc7XG4gIGVsZW1lbnRbdHlwZWRQcmVmaXhTeW1ib2xdID0gcHJlZml4ICsgY2hhci50b0xvd2VyQ2FzZSgpO1xuICBlbGVtZW50LnNlbGVjdEl0ZW1XaXRoVGV4dFByZWZpeChlbGVtZW50W3R5cGVkUHJlZml4U3ltYm9sXSk7XG4gIHNldFByZWZpeFRpbWVvdXQoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0UHJlZml4VGltZW91dChlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50W3ByZWZpeFRpbWVvdXRTeW1ib2xdKSB7XG4gICAgY2xlYXJUaW1lb3V0KGVsZW1lbnRbcHJlZml4VGltZW91dFN5bWJvbF0pO1xuICAgIGVsZW1lbnRbcHJlZml4VGltZW91dFN5bWJvbF0gPSBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNldFR5cGVkUHJlZml4KGVsZW1lbnQpIHtcbiAgZWxlbWVudFt0eXBlZFByZWZpeFN5bWJvbF0gPSAnJztcbiAgcmVzZXRQcmVmaXhUaW1lb3V0KGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBzZXRQcmVmaXhUaW1lb3V0KGVsZW1lbnQpIHtcbiAgcmVzZXRQcmVmaXhUaW1lb3V0KGVsZW1lbnQpO1xuICBlbGVtZW50W3ByZWZpeFRpbWVvdXRTeW1ib2xdID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgcmVzZXRUeXBlZFByZWZpeChlbGVtZW50KTtcbiAgfSwgUFJFRklYX1RJTUVPVVRfRFVSQVRJT04pO1xufVxuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5pbXBvcnQgRnJhY3Rpb25hbFNlbGVjdGlvbiBmcm9tICcuL0ZyYWN0aW9uYWxTZWxlY3Rpb24nO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBhbmltYXRpb25TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2FuaW1hdGlvbicpO1xuY29uc3QgbGFzdEFuaW1hdGlvblN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnbGFzdEFuaW1hdGlvbicpO1xuY29uc3QgcGxheWluZ0FuaW1hdGlvblN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnYW5pbWF0aW5nU2VsZWN0aW9uJyk7XG5jb25zdCBwcmV2aW91c1NlbGVjdGlvblN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgncHJldmlvdXNTZWxlY3Rpb24nKTtcbmNvbnN0IHNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbicpO1xuY29uc3Qgc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0U3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3Rpb25BbmltYXRpb25FZmZlY3QnKTtcbmNvbnN0IHNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lc1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzJyk7XG5jb25zdCBzaG93VHJhbnNpdGlvblN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc2hvd1RyYW5zaXRpb24nKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNlbGVjdGlvbkFuaW1hdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1peGluKGJhc2UpIHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggdXNlcyBhbmltYXRpb24gdG8gc2hvdyB0cmFuc2l0aW9ucyBiZXR3ZWVuIHNlbGVjdGlvbiBzdGF0ZXMuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gY2FuIGJlIHVzZWQgYnkgY29tcG9uZW50cyB0aGF0IHdhbnQgdG8gcHJvdmlkZSB2aXNpYmxlXG4gICAqIGFuaW1hdGlvbnMgd2hlbiBjaGFuZ2luZyB0aGUgc2VsZWN0aW9uLiBGb3IgZXhhbXBsZSwgYSBjYXJvdXNlbCBjb21wb25lbnRcbiAgICogbWF5IHdhbnQgdG8gZGVmaW5lIGEgc2xpZGluZyBhbmltYXRpb24gZWZmZWN0IHNob3duIHdoZW4gbW92aW5nIGJldHdlZW5cbiAgICogaXRlbXMuXG4gICAqXG4gICAqIFRoZSBhbmltYXRpb24gaXMgZGVmaW5lZCBieSBhIGBzZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXNgIHByb3BlcnR5OyBzZWVcbiAgICogdGhhdCBwcm9wZXJ0eSBmb3IgZGV0YWlscyBvbiBob3cgdG8gZGVmaW5lIHRoZXNlIGtleWZyYW1lcy4gVGhpcyBhbmltYXRpb25cbiAgICogd2lsbCBiZSB1c2VkIGluIHR3byB3YXlzLiBGaXJzdCwgd2hlbiBtb3Zpbmcgc3RyaWN0bHkgYmV0d2VlbiBpdGVtcywgdGhlXG4gICAqIGFuaW1hdGlvbiB3aWxsIHBsYXkgc21vb3RobHkgdG8gc2hvdyB0aGUgc2VsZWN0aW9uIGNoYW5naW5nLiBTZWNvbmQsIHRoZVxuICAgKiBhbmltYXRpb24gY2FuIGJlIHVzZWQgdG8gcmVuZGVyIHRoZSBzZWxlY3Rpb24gYXQgYSBmaXhlZCBwb2ludCBpbiB0aGVcbiAgICogdHJhbnNpdGlvbiBiZXR3ZWVuIHN0YXRlcy4gRS5nLiwgaWYgdGhlIHVzZXIgcGF1c2VzIGhhbGZ3YXkgdGhyb3VnaFxuICAgKiBkcmFnZ2luZyBhbiBlbGVtZW50IHVzaW5nIHRoZSBbU3dpcGVEaXJlY3Rpb25dKFN3aXBlRGlyZWN0aW9uLm1kKSBvclxuICAgKiBbVHJhY2twYWREaXJlY3Rpb25dKFRyYWNrcGFkRGlyZWN0aW9uLm1kKSBtaXhpbnMsIHRoZW4gdGhlIHNlbGVjdGlvblxuICAgKiBhbmltYXRpb24gd2lsbCBiZSBzaG93biBhdCB0aGUgcG9pbnQgZXhhY3RseSBoYWxmd2F5IHRocm91Z2guXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIGNvbXBvbmVudCB0byBwcm92aWRlIGFuIGBpdGVtc2AgYXJyYXkgb2YgYWxsIGVsZW1lbnRzXG4gICAqIGluIHRoZSBsaXN0LCB3aGljaCBjYW4gYmUgcHJvdmlkZWQgdmlhIHRoZVxuICAgKiBbQ29udGVudEFzSXRlbXNdKENvbnRlbnRBc0l0ZW1zLm1kKSBtaXhpbi4gVGhpcyBtaXhpbiBhbHNvIGV4cGVjdHNcbiAgICogYHNlbGVjdGVkSW5kZXhgIGFuZCBgc2VsZWN0ZWRJdGVtYCBwcm9wZXJ0aWVzLCB3aGljaCBjYW4gYmUgcHJvdmlkZWQgdmlhXG4gICAqIHRoZSBbU2luZ2xlU2VsZWN0aW9uXShTaW5nbGVTZWxlY3Rpb24ubWQpIG1peGluLlxuICAgKlxuICAgKiBUaGlzIG1peGluIHN1cHBvcnRzIGEgYHNlbGVjdGlvbldyYXBzYCBwcm9wZXJ0eS4gV2hlbiB0cnVlLCB0aGUgdXNlciBjYW5cbiAgICogbmF2aWdhdGUgZm9yd2FyZCBmcm9tIHRoZSBsYXN0IGl0ZW0gaW4gdGhlIGxpc3QgYW5kIHdyYXAgYXJvdW5kIHRvIHRoZVxuICAgKiBmaXJzdCBpdGVtLCBvciBuYXZpZ2F0ZSBiYWNrd2FyZCBmcm9tIHRoZSBmaXJzdCBpdGVtIGFuZCB3cmFwIGFyb3VuZCB0byB0aGVcbiAgICogbGFzdCBpdGVtLlxuICAgKlxuICAgKiBUaGlzIG1peGluIHVzZXMgdGhlIFdlYiBBbmltYXRpb25zIEFQSS4gRm9yIHVzZSBvbiBicm93c2VycyB3aGljaFxuICAgKiBkbyBub3Qgc3VwcG9ydCB0aGF0IEFQSSBuYXRpdmVseSwgeW91IHdpbGwgbmVlZCB0byBsb2FkIHRoZVxuICAgKiBbV2ViIEFuaW1hdGlvbnMgcG9seWZpbGxdKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWItYW5pbWF0aW9ucy93ZWItYW5pbWF0aW9ucy1qcykuXG4gICAqL1xuICBjbGFzcyBTZWxlY3Rpb25BbmltYXRpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcblxuICAgICAgLy8gU2V0IGRlZmF1bHRzLlxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uID0gdGhpcy5kZWZhdWx0cy5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbjtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5zZWxlY3Rpb25BbmltYXRpb25FZmZlY3QgPT09ICd1bmRlZmluZWQnICYmIHRoaXMuc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25BbmltYXRpb25FZmZlY3QgPSB0aGlzLmRlZmF1bHRzLnNlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zaG93VHJhbnNpdGlvbiA9IHRydWU7XG4gICAgfVxuXG4gICAgZ2V0IGRlZmF1bHRzKCkge1xuICAgICAgbGV0IGRlZmF1bHRzID0gc3VwZXIuZGVmYXVsdHMgfHwge307XG4gICAgICBkZWZhdWx0cy5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbiA9IDI1MDtcbiAgICAgIGRlZmF1bHRzLnNlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdCA9ICdzbGlkZSc7XG4gICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgaXRlbUFkZGVkKGl0ZW0pIHtcbiAgICAgIC8vIFdlIG1hcmsgbmV3IGl0ZW1zIGluIHRoZSBsaXN0IGFzIGV4cGxpY2l0bHkgdmlzaWJsZSB0byBBUklBLiBPdGhlcndpc2UsXG4gICAgICAvLyB3aGVuIGFuIGl0ZW0gaXNuJ3QgdmlzaWJsZSBvbiB0aGUgc2NyZWVuLCBBUklBIHdpbGwgYXNzdW1lIHRoZSBpdGVtIGlzXG4gICAgICAvLyBvZiBubyBpbnRlcmVzdCB0byB0aGUgdXNlciwgYW5kIGxlYXZlIGl0IG91dCBvZiB0aGUgYWNjZXNzaWJpbGl0eSB0cmVlLlxuICAgICAgLy8gSWYgdGhlIGxpc3QgY29udGFpbnMgMTAgaXRlbXMsIGJ1dCBvbmx5IDMgYXJlIHZpc2libGUsIGEgc2NyZWVuIHJlYWRlclxuICAgICAgLy8gbWlnaHQgdGhlbiBhbm5vdW5jZSB0aGUgbGlzdCBvbmx5IGhhcyAzIGl0ZW1zLiBUbyBlbnN1cmUgdGhhdCBzY3JlZW5cbiAgICAgIC8vIHJlYWRlcnMgYW5kIG90aGVyIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMgYW5ub3VuY2UgdGhlIGNvcnJlY3QgdG90YWxcbiAgICAgIC8vIG51bWJlciBvZiBpdGVtcywgd2UgZXhwbGljaXRseSBtYXJrIGFsbCBpdGVtcyBhcyBub3QgaGlkZGVuLiBUaGlzIHdpbGxcbiAgICAgIC8vIGV4cG9zZSB0aGVtIGFsbCBpbiB0aGUgYWNjZXNzaWJpbGl0eSB0cmVlLCBldmVuIHRoZSBpdGVtcyB3aGljaCBhcmVcbiAgICAgIC8vIGN1cnJlbnRseSBub3QgcmVuZGVyZWQuXG4gICAgICAvL1xuICAgICAgLy8gVE9ETzogR2VuZXJhbGx5IHNwZWFraW5nLCB0aGlzIGVudGlyZSBtaXhpbiBhc3N1bWVzIHRoYXQgdGhlIHVzZXIgY2FuXG4gICAgICAvLyBuYXZpZ2F0ZSB0aHJvdWdoIGFsbCBpdGVtcyBpbiBhIGxpc3QuIEJ1dCBhbiBhcHAgY291bGQgc3R5bGUgYW4gaXRlbSBhc1xuICAgICAgLy8gZGlzcGxheTpub25lIG9yIHZpc2liaWxpdHk6aGlkZGVuIGJlY2F1c2UgdGhlIHVzZXIgaXMgbm90IGFsbG93ZWQgdG9cbiAgICAgIC8vIGludGVyYWN0IHdpdGggdGhhdCBpdGVtIGF0IHRoZSBtb21lbnQuIFN1cHBvcnQgZm9yIHRoaXMgc2NlbmFyaW8gc2hvdWxkXG4gICAgICAvLyBiZSBhZGRlZC4gVGhpcyB3b3VsZCBlbnRhaWwgY2hhbmdpbmcgYWxsIGxvY2F0aW9ucyB3aGVyZSBhIG1peGluXG4gICAgICAvLyBmdW5jdGlvbiBpcyBjb3VudGluZyBpdGVtcywgaXRlcmF0aW5nIG92ZXIgdGhlICh2aXNpYmxlKSBpdGVtcywgYW5kXG4gICAgICAvLyBzaG93aW5nIG9yIGhpZGluZyBpdGVtcy4gQW1vbmcgb3RoZXIgdGhpbmdzLCB0aGUgY29kZSBiZWxvdyB0byBtYWtlXG4gICAgICAvLyBpdGVtcyB2aXNpYmxlIHRvIEFSSUEgd291bGQgbmVlZCB0byBkaXNjcmltaW5hdGUgYmV0d2VlbiBpdGVtcyB3aGljaFxuICAgICAgLy8gYXJlIGludmlzaWJsZSBiZWNhdXNlIG9mIGFuaW1hdGlvbiBzdGF0ZSwgb3IgaW52aXNpYmxlIGJlY2F1c2UgdGhlIHVzZXJcbiAgICAgIC8vIHNob3VsZG4ndCBpbnRlcmFjdCB3aXRoIHRoZW0uXG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaXRlbXNDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLml0ZW1zQ2hhbmdlZCkgeyBzdXBlci5pdGVtc0NoYW5nZWQoKTsgfVxuICAgICAgcmVzZXRBbmltYXRpb25zKHRoaXMpO1xuICAgICAgcmVuZGVyU2VsZWN0aW9uKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgZnJhY3Rpb25hbCB2YWx1ZSBpbmRpY2F0aW5nIGhvdyBmYXIgdGhlIHVzZXIgaGFzIGN1cnJlbnRseSBhZHZhbmNlZCB0b1xuICAgICAqIHRoZSBuZXh0L3ByZXZpb3VzIGl0ZW0uIEUuZy4sIGEgYHNlbGVjdGVkRnJhY3Rpb25gIG9mIDMuNSBpbmRpY2F0ZXMgdGhlXG4gICAgICogdXNlciBpcyBoYWxmd2F5IGJldHdlZW4gaXRlbXMgMyBhbmQgNC5cbiAgICAgKlxuICAgICAqIEZvciBtb3JlIGRldGFpbHMsIHNlZSB0aGUgW0ZyYWN0aW9uYWxTZWxlY3Rpb25dKEZyYWN0aW9uYWxTZWxlY3Rpb24ubWQpXG4gICAgICogbWl4aW4uXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldCBzZWxlY3RlZEZyYWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkRnJhY3Rpb24gfHwgMDtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkRnJhY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRGcmFjdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgICByZW5kZXJTZWxlY3Rpb24odGhpcywgdGhpcy5zZWxlY3RlZEluZGV4LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICAgIHJldHVybiBzdXBlci5zZWxlY3RlZEl0ZW07XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEl0ZW0oaXRlbSkge1xuICAgICAgaWYgKCdzZWxlY3RlZEl0ZW0nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSXRlbSA9IGl0ZW07IH1cbiAgICAgIHJlbmRlclNlbGVjdGlvbih0aGlzLCB0aGlzLnNlbGVjdGVkSW5kZXgsIDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBkdXJhdGlvbiBvZiBhIHNlbGVjdGlvbiBhbmltYXRpb24gaW4gbWlsbGlzZWNvbmRzLlxuICAgICAqXG4gICAgICogVGhpcyBtZWFzdXJlcyB0aGUgYW1vdW50IG9mIHRpbWUgcmVxdWlyZWQgZm9yIGEgc2VsZWN0aW9uIGFuaW1hdGlvbiB0b1xuICAgICAqIGNvbXBsZXRlLiBUaGlzIG51bWJlciByZW1haW5zIGNvbnN0YW50LCBldmVuIGlmIHRoZSBudW1iZXIgb2YgaXRlbXMgYmVpbmdcbiAgICAgKiBhbmltYXRlZCBpbmNyZWFzZXMuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAyNTAgbWlsbGlzZWNvbmRzIChhIHF1YXJ0ZXIgYSBzZWNvbmQpLlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAZGVmYXVsdCAyNTBcbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb24oKSB7XG4gICAgICByZXR1cm4gdGhpc1tzZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvblN5bWJvbF07XG4gICAgfVxuICAgIHNldCBzZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbih2YWx1ZSkge1xuICAgICAgdGhpc1tzZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvblN5bWJvbF0gPSB2YWx1ZTtcbiAgICAgIGlmICgnc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uID0gdmFsdWU7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiBhIHN0YW5kYXJkIHNlbGVjdGlvbiBhbmltYXRpb24gZWZmZWN0LlxuICAgICAqXG4gICAgICogVGhpcyBpcyBhIHNob3J0aGFuZCBmb3Igc2V0dGluZyB0aGUgYHNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lc2BcbiAgICAgKiBwcm9wZXJ0eSB0byBzdGFuZGFyZCBrZXlmcmFtZXMuIFN1cHBvcnRlZCBzdHJpbmcgdmFsdWVzOlxuICAgICAqXG4gICAgICogKiBcImNyb3NzZmFkZVwiXG4gICAgICogKiBcInJldmVhbFwiXG4gICAgICogKiBcInJldmVhbFdpdGhGYWRlXCJcbiAgICAgKiAqIFwic2hvd0FkamFjZW50XCJcbiAgICAgKiAqIFwic2xpZGVcIlxuICAgICAqICogXCJzbGlkZVdpdGhHYXBcIlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAZGVmYXVsdCBcInNsaWRlXCJcbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0KCkge1xuICAgICAgcmV0dXJuIHRoaXNbc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0U3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdCh2YWx1ZSkge1xuICAgICAgdGhpc1tzZWxlY3Rpb25BbmltYXRpb25FZmZlY3RTeW1ib2xdID0gdmFsdWU7XG4gICAgICBpZiAoJ3NlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0ID0gdmFsdWU7IH1cbiAgICAgIHRoaXMuc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzID0gbWl4aW4uc3RhbmRhcmRFZmZlY3RLZXlmcmFtZXNbdmFsdWVdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBrZXlmcmFtZXMgdGhhdCBkZWZpbmUgYW4gYW5pbWF0aW9uIHRoYXQgcGxheXMgZm9yIGFuIGl0ZW0gd2hlbiBtb3ZpbmdcbiAgICAgKiBmb3J3YXJkIGluIHRoZSBzZXF1ZW5jZS5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgYW4gYXJyYXkgb2YgQ1NTIHJ1bGVzIHRoYXQgd2lsbCBiZSBhcHBsaWVkLiBUaGVzZSBhcmUgdXNlZCBhc1xuICAgICAqIFtrZXlmcmFtZXNdKGh0dHA6Ly93M2MuZ2l0aHViLmlvL3dlYi1hbmltYXRpb25zLyNrZXlmcmFtZXMtc2VjdGlvbilcbiAgICAgKiB0byBhbmltYXRlIHRoZSBpdGVtIHdpdGggdGhlXG4gICAgICogW1dlYiBBbmltYXRpb25zIEFQSV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL2FuaW1hdGlvbikuXG4gICAgICpcbiAgICAgKiBUaGUgYW5pbWF0aW9uIHJlcHJlc2VudHMgdGhlIHN0YXRlIG9mIHRoZSBuZXh0IGl0ZW0gYXMgaXQgbW92ZXMgZnJvbVxuICAgICAqIGNvbXBsZXRlbHkgdW5zZWxlY3RlZCAob2Zmc3RhZ2UsIHVzdWFsbHkgcmlnaHQpLCB0byBzZWxlY3RlZCAoY2VudGVyXG4gICAgICogc3RhZ2UpLCB0byBjb21wbGV0ZWx5IHVuc2VsZWN0ZWQgKG9mZnN0YWdlLCB1c3VhbGx5IGxlZnQpLiBUaGUgY2VudGVyIHRpbWVcbiAgICAgKiBvZiB0aGUgYW5pbWF0aW9uIHNob3VsZCBjb3JyZXNwb25kIHRvIHRoZSBpdGVtJ3MgcXVpc2NlbnQgc2VsZWN0ZWQgc3RhdGUsXG4gICAgICogdHlwaWNhbGx5IGluIHRoZSBjZW50ZXIgb2YgdGhlIHN0YWdlIGFuZCBhdCB0aGUgaXRlbSdzIGxhcmdlc3Qgc2l6ZS5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IGZvcndhcmQgYW5pbWF0aW9uIGlzIGEgc21vb3RoIHNsaWRlIGF0IGZ1bGwgc2l6ZSBmcm9tIHJpZ2h0IHRvXG4gICAgICogbGVmdC5cbiAgICAgKlxuICAgICAqIFdoZW4gbW92aW5nIHRoZSBzZWxlY3Rpb24gYmFja3dhcmQsIHRoaXMgYW5pbWF0aW9uIGlzIHBsYXllZCBpbiByZXZlcnNlLlxuICAgICAqXG4gICAgICogQHR5cGUge2Nzc1J1bGVzW119XG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcygpIHtcbiAgICAgIC8vIFN0YW5kYXJkIGFuaW1hdGlvbiBzbGlkZXMgbGVmdC9yaWdodCwga2VlcHMgYWRqYWNlbnQgaXRlbXMgb3V0IG9mIHZpZXcuXG4gICAgICByZXR1cm4gdGhpc1tzZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXNTeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzKHZhbHVlKSB7XG4gICAgICB0aGlzW3NlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lc1N5bWJvbF0gPSB2YWx1ZTtcbiAgICAgIGlmICgnc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXMgPSB2YWx1ZTsgfVxuICAgICAgcmVzZXRBbmltYXRpb25zKHRoaXMpO1xuICAgICAgcmVuZGVyU2VsZWN0aW9uKHRoaXMpO1xuICAgIH1cblxuICAgIGdldCBzZWxlY3Rpb25XcmFwcygpIHtcbiAgICAgIHJldHVybiBzdXBlci5zZWxlY3Rpb25XcmFwcztcbiAgICB9XG4gICAgc2V0IHNlbGVjdGlvbldyYXBzKHZhbHVlKSB7XG4gICAgICBpZiAoJ3NlbGVjdGlvbldyYXBzJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3Rpb25XcmFwcyA9IHZhbHVlOyB9XG4gICAgICByZXNldEFuaW1hdGlvbnModGhpcyk7XG4gICAgICByZW5kZXJTZWxlY3Rpb24odGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lIHdoZXRoZXIgYSB0cmFuc2l0aW9uIHNob3VsZCBiZSBzaG93biBkdXJpbmcgc2VsZWN0aW9uLlxuICAgICAqXG4gICAgICogQ29tcG9uZW50cyBsaWtlIGNhcm91c2VscyBvZnRlbiBkZWZpbmUgYW5pbWF0ZWQgQ1NTIHRyYW5zaXRpb25zIGZvclxuICAgICAqIHNsaWRpbmcgZWZmZWN0cy4gU3VjaCBhIHRyYW5zaXRpb24gc2hvdWxkIHVzdWFsbHkgKm5vdCogYmUgYXBwbGllZCB3aGlsZVxuICAgICAqIHRoZSB1c2VyIGlzIGRyYWdnaW5nLCBiZWNhdXNlIGEgQ1NTIGFuaW1hdGlvbiB3aWxsIGludHJvZHVjZSBhIGxhZyB0aGF0XG4gICAgICogbWFrZXMgdGhlIHN3aXBlIGZlZWwgc2x1Z2dpc2guIEluc3RlYWQsIGFzIGxvbmcgYXMgdGhlIHVzZXIgaXMgZHJhZ2dpbmdcbiAgICAgKiB3aXRoIHRoZWlyIGZpbmdlciBkb3duLCB0aGUgdHJhbnNpdGlvbiBzaG91bGQgYmUgc3VwcHJlc3NlZC4gV2hlbiB0aGVcbiAgICAgKiB1c2VyIHJlbGVhc2VzIHRoZWlyIGZpbmdlciwgdGhlIHRyYW5zaXRpb24gY2FuIGJlIHJlc3RvcmVkLCBhbGxvd2luZyB0aGVcbiAgICAgKiBhbmltYXRpb24gdG8gc2hvdyB0aGUgY2Fyb3VzZWwgc2xpZGluZyBpbnRvIGl0cyBmaW5hbCBwb3NpdGlvbi5cbiAgICAgKlxuICAgICAqIE5vdGU6IFRoaXMgcHJvcGVydHkgaXMgb25seSBpbnRlbmRlZCB0byBsZXQgYSBjb21wb25lbnQgY29vcGVyYXRlIHdpdGhcbiAgICAgKiBtaXhpbnMgdGhhdCBtYXkgYmUgYXBwbGllZCB0byBpdCwgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBsZXQgc29tZW9uZVxuICAgICAqIHVzaW5nIGNvbXBvbmVudCBwZXJtYW5lbnRseSBlbmFibGUgb3IgZGlzYWJsZSB0cmFuc2l0aW9uIGVmZmVjdHMuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn0gdHJ1ZSBpZiBhIGNvbXBvbmVudC1wcm92aWRlZCB0cmFuc2l0aW9uIHNob3VsZCBiZSBzaG93bixcbiAgICAgKiBmYWxzZSBpZiBub3QuXG4gICAgICovXG4gICAgLy8gVE9ETzogUmVuYW1lIChhbmQgZmxpcCBtZWFuaW5nKSB0byBzb21ldGhpbmcgbGlrZSBkcmFnZ2luZygpP1xuICAgIGdldCBzaG93VHJhbnNpdGlvbigpIHtcbiAgICAgIHJldHVybiBzdXBlci5zaG93VHJhbnNpdGlvbiB8fCB0aGlzW3Nob3dUcmFuc2l0aW9uU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHNob3dUcmFuc2l0aW9uKHZhbHVlKSB7XG4gICAgICB0aGlzW3Nob3dUcmFuc2l0aW9uU3ltYm9sXSA9IHZhbHVlO1xuICAgICAgaWYgKCdzaG93VHJhbnNpdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2hvd1RyYW5zaXRpb24gPSB2YWx1ZTsgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBTZWxlY3Rpb25BbmltYXRpb247XG59XG5cblxuLy8gV2UgZXhwb3NlIGhlbHBlcnMgb24gdGhlIG1peGluIGZ1bmN0aW9uIHRoYXQgd2Ugd2FudCB0byBiZSBhYmxlIHRvIHVuaXQgdGVzdC5cbi8vIFNpbmNlIHRoZXNlIGFyZSBvbiB0aGUgZnVuY3Rpb24sIG5vdCBvbiB0aGUgY2xhc3MgZW1pdHRlZCBieSB0aGUgZnVuY3Rpb24sXG4vLyB0aGV5IGRvbid0IGVuZCB1cCBnZXR0aW5nIGV4cG9zZWQgb24gYWN0dWFsIGVsZW1lbnQgaW5zdGFuY2VzLlxubWl4aW4uaGVscGVycyA9IHtcblxuICAvKlxuICAgKiBDYWxjdWxhdGUgdGhlIGFuaW1hdGlvbiBmcmFjdGlvbnMgZm9yIGFuIGVsZW1lbnQncyBpdGVtcyBhdCB0aGUgZ2l2ZW5cbiAgICogc2VsZWN0aW9uIHBvaW50LiBUaGlzIGlzIHVzZWQgd2hlbiByZW5kZXJpbmcgdGhlIGVsZW1lbnQncyBzZWxlY3Rpb24gc3RhdGVcbiAgICogaW5zdGFudGFuZW91c2x5LlxuICAgKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGNvbnNpZGVycyB0aGUgc2VsZWN0ZWRJbmRleCBwYXJhbWV0ZXIsIHdoaWNoIGNhbiBiZSBhIHdob2xlXG4gICAqIG9yIGZyYWN0aW9uYWwgbnVtYmVyLCBhbmQgZGV0ZXJtaW5lcyB3aGljaCBpdGVtcyB3aWxsIGJlIHZpc2libGUgYXQgdGhhdFxuICAgKiBpbmRleC4gVGhpcyBmdW5jdGlvbiB0aGVuIGNhbGN1bGF0ZXMgYSBjb3JyZXNwb25kaW5nIGFuaW1hdGlvbiBmcmFjdGlvbjogYVxuICAgKiBudW1iZXIgYmV0d2VlbiAwIGFuZCAxIGluZGljYXRpbmcgaG93IGZhciB0aHJvdWdoIHRoZSBzZWxlY3Rpb24gYW5pbWF0aW9uXG4gICAqIGFuIGl0ZW0gc2hvdWxkIGJlIHNob3duLCBvciBudWxsIGlmIHRoZSBpdGVtIHNob3VsZCBub3QgYmUgdmlzaWJsZSBhdCB0aGF0XG4gICAqIHNlbGVjdGlvbiBpbmRleC4gVGhlc2UgZnJhY3Rpb25zIGFyZSByZXR1cm5lZCBhcyBhbiBhcnJheSwgd2hlcmUgdGhlXG4gICAqIGFuaW1hdGlvbiBmcmFjdGlvbiBhdCBwb3NpdGlvbiBOIGNvcnJlc3BvbmRzIHRvIGhvdyBpdGVtIE4gc2hvdWxkIGJlIHNob3duLlxuICAgKi9cbiAgYW5pbWF0aW9uRnJhY3Rpb25zRm9yU2VsZWN0aW9uKGVsZW1lbnQsIHNlbGVjdGlvbikge1xuXG4gICAgbGV0IGl0ZW1zID0gZWxlbWVudC5pdGVtcztcbiAgICBpZiAoIWl0ZW1zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGl0ZW1Db3VudCA9IGl0ZW1zLmxlbmd0aDtcbiAgICBsZXQgc2VsZWN0aW9uV3JhcHMgPSBlbGVtZW50LnNlbGVjdGlvbldyYXBzO1xuXG4gICAgcmV0dXJuIGl0ZW1zLm1hcCgoaXRlbSwgaXRlbUluZGV4KSA9PiB7XG4gICAgICAvLyBIb3cgbWFueSBzdGVwcyBmcm9tIHRoZSBzZWxlY3Rpb24gcG9pbnQgdG8gdGhpcyBpdGVtP1xuICAgICAgbGV0IHN0ZXBzID0gc3RlcHNUb0luZGV4KGl0ZW1Db3VudCwgc2VsZWN0aW9uV3JhcHMsIHNlbGVjdGlvbiwgaXRlbUluZGV4KTtcbiAgICAgIC8vIFRvIGNvbnZlcnQgc3RlcHMgdG8gYW5pbWF0aW9uIGZyYWN0aW9uOlxuICAgICAgLy8gc3RlcHMgICAgICBhbmltYXRpb24gZnJhY3Rpb25cbiAgICAgIC8vICAxICAgICAgICAgMCAgICAgKHN0YWdlIHJpZ2h0KVxuICAgICAgLy8gIDAgICAgICAgICAwLjUgICAoY2VudGVyIHN0YWdlKVxuICAgICAgLy8gLTEgICAgICAgICAxICAgICAoc3RhZ2UgbGVmdClcbiAgICAgIGxldCBhbmltYXRpb25GcmFjdGlvbiA9ICgxIC0gc3RlcHMpIC8gMjtcbiAgICAgIHJldHVybiAoYW5pbWF0aW9uRnJhY3Rpb24gPj0gMCAmJiBhbmltYXRpb25GcmFjdGlvbiA8PSAxKSA/XG4gICAgICAgIGFuaW1hdGlvbkZyYWN0aW9uIDpcbiAgICAgICAgbnVsbDsgLy8gT3V0c2lkZSBhbmltYXRpb24gcmFuZ2VcbiAgICB9KTtcbiAgfSxcblxuICAvKlxuICAgKiBDYWxjdWxhdGUgdGhlIGFuaW1hdGlvbiB0aW1pbmdzIHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gc21vb3RobHkgYW5pbWF0ZSB0aGVcbiAgICogZWxlbWVudCdzIGl0ZW1zIGZyb20gb25lIHNlbGVjdGlvbiBzdGF0ZSB0byBhbm90aGVyLlxuICAgKlxuICAgKiBUaGlzIHJldHVybnMgYW4gYXJyYXkgb2YgdGltaW5ncywgd2hlcmUgdGhlIHRpbWluZyBhdCBwb3NpdGlvbiBOIHNob3VsZCBiZVxuICAgKiB1c2VkIHRvIGFuaW1hdGUgaXRlbSBOLiBJZiBhbiBpdGVtJ3MgdGltaW5nIGlzIG51bGwsIHRoZW4gdGhhdCBpdGVtIHNob3VsZFxuICAgKiBub3QgdGFrZSBwbGFjZSBpbiB0aGUgYW5pbWF0aW9uLCBhbmQgc2hvdWxkIGJlIGhpZGRlbiBpbnN0ZWFkLlxuICAgKi9cbiAgZWZmZWN0VGltaW5nc0ZvclNlbGVjdGlvbkFuaW1hdGlvbihlbGVtZW50LCBmcm9tU2VsZWN0aW9uLCB0b1NlbGVjdGlvbikge1xuXG4gICAgbGV0IGl0ZW1zID0gZWxlbWVudC5pdGVtcztcbiAgICBpZiAoIWl0ZW1zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBpdGVtQ291bnQgPSBpdGVtcy5sZW5ndGg7XG4gICAgbGV0IHNlbGVjdGlvbldyYXBzID0gZWxlbWVudC5zZWxlY3Rpb25XcmFwcztcbiAgICBsZXQgdG9JbmRleCA9IEZyYWN0aW9uYWxTZWxlY3Rpb24uaGVscGVycy53cmFwcGVkU2VsZWN0aW9uUGFydHModG9TZWxlY3Rpb24sIGl0ZW1Db3VudCwgc2VsZWN0aW9uV3JhcHMpLmluZGV4O1xuICAgIGxldCB0b3RhbFN0ZXBzID0gc3RlcHNUb0luZGV4KGl0ZW1Db3VudCwgc2VsZWN0aW9uV3JhcHMsIGZyb21TZWxlY3Rpb24sIHRvU2VsZWN0aW9uKTtcbiAgICBsZXQgZGlyZWN0aW9uID0gdG90YWxTdGVwcyA+PSAwID8gJ25vcm1hbCc6ICdyZXZlcnNlJztcbiAgICBsZXQgZmlsbCA9ICdib3RoJztcbiAgICBsZXQgdG90YWxEdXJhdGlvbiA9IGVsZW1lbnQuc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb247XG4gICAgbGV0IHN0ZXBEdXJhdGlvbiA9IHRvdGFsU3RlcHMgIT09IDAgP1xuICAgICAgdG90YWxEdXJhdGlvbiAqIDIgLyBNYXRoLmNlaWwoTWF0aC5hYnModG90YWxTdGVwcykpIDpcbiAgICAgIDA7ICAvLyBObyBzdGVwcyByZXF1aXJlZCwgYW5pbWF0aW9uIHdpbGwgYmUgaW5zdGFudGVub3VzLlxuXG4gICAgbGV0IHRpbWluZ3MgPSBpdGVtcy5tYXAoKGl0ZW0sIGl0ZW1JbmRleCkgPT4ge1xuICAgICAgbGV0IHN0ZXBzID0gc3RlcHNUb0luZGV4KGl0ZW1Db3VudCwgc2VsZWN0aW9uV3JhcHMsIGl0ZW1JbmRleCwgdG9TZWxlY3Rpb24pO1xuICAgICAgLy8gSWYgd2UgaW5jbHVkZSB0aGlzIGl0ZW0gaW4gdGhlIHN0YWdnZXJlZCBzZXF1ZW5jZSBvZiBhbmltYXRpb25zIHdlJ3JlXG4gICAgICAvLyBjcmVhdGluZywgd2hlcmUgd291bGQgdGhlIGl0ZW0gYXBwZWFyIGluIHRoZSBzZXF1ZW5jZT9cbiAgICAgIGxldCBwb3NpdGlvbkluU2VxdWVuY2UgPSB0b3RhbFN0ZXBzIC0gc3RlcHM7XG4gICAgICBpZiAodG90YWxTdGVwcyA8IDApIHtcbiAgICAgICAgcG9zaXRpb25JblNlcXVlbmNlID0gLXBvc2l0aW9uSW5TZXF1ZW5jZTtcbiAgICAgIH1cbiAgICAgIC8vIFNvLCBpcyB0aGlzIGl0ZW0gcmVhbGx5IGluY2x1ZGVkIGluIHRoZSBzZXF1ZW5jZT9cbiAgICAgIGlmIChNYXRoLmNlaWwocG9zaXRpb25JblNlcXVlbmNlKSA+PSAwICYmIHBvc2l0aW9uSW5TZXF1ZW5jZSA8PSBNYXRoLmFicyh0b3RhbFN0ZXBzKSkge1xuICAgICAgICAvLyBOb3RlIHRoYXQgZGVsYXkgZm9yIGZpcnN0IGl0ZW0gd2lsbCBiZSBuZWdhdGl2ZS4gVGhhdCB3aWxsIGNhdXNlXG4gICAgICAgIC8vIHRoZSBhbmltYXRpb24gdG8gc3RhcnQgaGFsZndheSB0aHJvdWdoLCB3aGljaCBpcyB3aGF0IHdlIHdhbnQuXG4gICAgICAgIGxldCBkZWxheSA9IHN0ZXBEdXJhdGlvbiAqIChwb3NpdGlvbkluU2VxdWVuY2UgLSAxKS8yO1xuICAgICAgICBsZXQgZW5kRGVsYXkgPSBpdGVtSW5kZXggPT09IHRvSW5kZXggP1xuICAgICAgICAgIC1zdGVwRHVyYXRpb24vMiA6ICAgLy8gU3RvcCBoYWxmd2F5IHRocm91Z2guXG4gICAgICAgICAgMDsgICAgICAgICAgICAgIC8vIFBsYXkgYW5pbWF0aW9uIHVudGlsIGVuZC5cbiAgICAgICAgcmV0dXJuIHsgZHVyYXRpb246IHN0ZXBEdXJhdGlvbiwgZGlyZWN0aW9uLCBmaWxsLCBkZWxheSwgZW5kRGVsYXkgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRpbWluZ3M7XG4gIH1cblxufTtcblxuXG4vLyBLZXlmcmFtZXMgZm9yIHN0YW5kYXJkIHNlbGVjdGlvbiBhbmltYXRpb24gZWZmZWN0cy5cbm1peGluLnN0YW5kYXJkRWZmZWN0S2V5ZnJhbWVzID0ge1xuXG4gIC8vIFNpbXBsZSBjcm9zc2ZhZGVcbiAgY3Jvc3NmYWRlOiBbXG4gICAgeyBvcGFjaXR5OiAwIH0sXG4gICAgeyBvcGFjaXR5OiAxIH0sXG4gICAgeyBvcGFjaXR5OiAwIH1cbiAgXSxcblxuICAvLyBSZXZlYWwsIGFzIGlmIHNsaWRpbmcgdGhlIHRvcCBjYXJkIG9mZiBhIGRlY2sgb2YgY2FyZHNcbiAgcmV2ZWFsOiBbXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDAlKScsIHpJbmRleDogMCB9LFxuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwJSknLCB6SW5kZXg6IDEgfSxcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTEwMCUpJywgekluZGV4OiAyIH1cbiAgXSxcblxuICAvLyBHb29nbGUgUGhvdG9zLXN0eWxlIHJldmVhbC13aXRoLWZhZGUgYW5pbWF0aW9uXG4gIHJldmVhbFdpdGhGYWRlOiBbXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDAlKSBzY2FsZSgwLjc1KScsIG9wYWNpdHk6IDAsIHpJbmRleDogMCB9LFxuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwJSkgc2NhbGUoMS4wKScsIG9wYWNpdHk6IDEsIHpJbmRleDogMSB9LFxuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMTAwJSkgc2NhbGUoMS4wKScsIG9wYWNpdHk6IDEsIHpJbmRleDogMiB9XG4gIF0sXG5cbiAgLy8gQ2Fyb3VzZWwgdmFyaWFudCB3aXRoIGEgYml0IG9mIG9mZi1zdGFnZSBlbGVtZW50cyBzaG93aW5nXG4gIHNob3dBZGphY2VudDogW1xuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCg3OCUpIHNjYWxlKDAuNyknLCB6SW5kZXg6IDAgfSxcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCUpIHNjYWxlKDAuODIpJywgekluZGV4OiAxIH0sXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC03OCUpIHNjYWxlKDAuNyknLCB6SW5kZXg6IDAgfVxuICBdLFxuXG4gIC8vIFNpbXBsZSBzbGlkZVxuICBzbGlkZTogW1xuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMDAlKScgfSxcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTEwMCUpJyB9XG4gIF0sXG5cbiAgLy8gU2xpZGUsIHdpdGggYSBnYXAgYmV0d2VlblxuICBzbGlkZVdpdGhHYXA6IFtcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTEwJSknIH0sXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xMTAlKScgfVxuICBdXG5cbn07XG5cblxuLypcbiAqIFNtb290aGx5IGFuaW1hdGUgdGhlIHNlbGVjdGlvbiBiZXR3ZWVuIHRoZSBpbmRpY2F0ZWQgXCJmcm9tXCIgYW5kIFwidG9cIlxuICogaW5kaWNlcy4gVGhlIGZvcm1lciBjYW4gYmUgYSBmcmFjdGlvbiwgZS5nLiwgd2hlbiB0aGUgdXNlciByZWxlYXNlcyBhIGZpbmdlclxuICogdG8gY29tcGxldGUgYSB0b3VjaCBkcmFnLCBhbmQgdGhlIHNlbGVjdGlvbiB3aWxsIHNuYXAgdG8gdGhlIGNsb3Nlc3Qgd2hvbGVcbiAqIGluZGV4LlxuICovXG5mdW5jdGlvbiBhbmltYXRlU2VsZWN0aW9uKGVsZW1lbnQsIGZyb21TZWxlY3Rpb24sIHRvU2VsZWN0aW9uKSB7XG5cbiAgcmVzZXRBbmltYXRpb25zKGVsZW1lbnQpO1xuXG4gIC8vIENhbGN1bGF0ZSB0aGUgYW5pbWF0aW9uIHRpbWluZ3MuXG4gIGxldCBpdGVtcyA9IGVsZW1lbnQuaXRlbXM7XG4gIGxldCBrZXlmcmFtZXMgPSBlbGVtZW50LnNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcztcbiAgZWxlbWVudFtwbGF5aW5nQW5pbWF0aW9uU3ltYm9sXSA9IHRydWU7XG4gIGxldCB0aW1pbmdzID0gbWl4aW4uaGVscGVycy5lZmZlY3RUaW1pbmdzRm9yU2VsZWN0aW9uQW5pbWF0aW9uKGVsZW1lbnQsIGZyb21TZWxlY3Rpb24sIHRvU2VsZWN0aW9uKTtcblxuICAvLyBGaWd1cmUgb3V0IHdoaWNoIGl0ZW0gd2lsbCBiZSB0aGUgb25lICphZnRlciogdGhlIG9uZSB3ZSdyZSBzZWxlY3RpbmcuXG4gIGxldCBpdGVtQ291bnQgPSBpdGVtcy5sZW5ndGg7XG4gIGxldCBzZWxlY3Rpb25XcmFwcyA9IGVsZW1lbnQuc2VsZWN0aW9uV3JhcHM7XG4gIGxldCBzZWxlY3Rpb25JbmRleCA9IEZyYWN0aW9uYWxTZWxlY3Rpb24uaGVscGVycy5zZWxlY3Rpb25QYXJ0cyh0b1NlbGVjdGlvbiwgaXRlbUNvdW50LCBzZWxlY3Rpb25XcmFwcykuaW5kZXg7XG4gIGxldCB0b3RhbFN0ZXBzID0gc3RlcHNUb0luZGV4KGl0ZW1Db3VudCwgc2VsZWN0aW9uV3JhcHMsIGZyb21TZWxlY3Rpb24sIHRvU2VsZWN0aW9uKTtcbiAgbGV0IGZvcndhcmQgPSB0b3RhbFN0ZXBzID49IDA7XG4gIGxldCBuZXh0VXBJbmRleCA9IHNlbGVjdGlvbkluZGV4ICsgKGZvcndhcmQgPyAxIDogLSAxKTtcbiAgaWYgKHNlbGVjdGlvbldyYXBzKSB7XG4gICAgbmV4dFVwSW5kZXggPSBGcmFjdGlvbmFsU2VsZWN0aW9uLmhlbHBlcnMud3JhcHBlZFNlbGVjdGlvbihuZXh0VXBJbmRleCwgaXRlbUNvdW50KTtcbiAgfSBlbHNlIGlmICghaXNJdGVtSW5kZXhJbkJvdW5kcyhlbGVtZW50LCBuZXh0VXBJbmRleCkpIHtcbiAgICBuZXh0VXBJbmRleCA9IG51bGw7IC8vIEF0IHN0YXJ0L2VuZCBvZiBsaXN0OyBkb24ndCBoYXZlIGEgbmV4dCBpdGVtIHRvIHNob3cuXG4gIH1cblxuICAvLyBQbGF5IHRoZSBhbmltYXRpb25zIHVzaW5nIHRob3NlIHRpbWluZ3MuXG4gIGxldCBsYXN0QW5pbWF0aW9uRGV0YWlscztcbiAgdGltaW5ncy5mb3JFYWNoKCh0aW1pbmcsIGluZGV4KSA9PiB7XG4gICAgbGV0IGl0ZW0gPSBpdGVtc1tpbmRleF07XG4gICAgaWYgKHRpbWluZykge1xuICAgICAgc2hvd0l0ZW0oaXRlbSwgdHJ1ZSk7XG4gICAgICBsZXQgYW5pbWF0aW9uID0gaXRlbS5hbmltYXRlKGtleWZyYW1lcywgdGltaW5nKTtcbiAgICAgIGVsZW1lbnRbYW5pbWF0aW9uU3ltYm9sXVtpbmRleF0gPSBhbmltYXRpb247XG4gICAgICBpZiAoaW5kZXggPT09IG5leHRVcEluZGV4KSB7XG4gICAgICAgIC8vIFRoaXMgaXRlbSB3aWxsIGJlIGFuaW1hdGVkLCBzbyB3aWxsIGFscmVhZHkgYmUgaW4gdGhlIGRlc2lyZWQgc3RhdGVcbiAgICAgICAgLy8gYWZ0ZXIgdGhlIGFuaW1hdGlvbiBjb21wbGV0ZXMuXG4gICAgICAgIG5leHRVcEluZGV4ID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmICh0aW1pbmcuZW5kRGVsYXkgIT09IDApIHtcbiAgICAgICAgLy8gVGhpcyBpcyB0aGUgYW5pbWF0aW9uIGZvciB0aGUgaXRlbSB0aGF0IHdpbGwgYmUgbGVmdCBzZWxlY3RlZC5cbiAgICAgICAgLy8gV2Ugd2FudCB0byBjbGVhbiB1cCB3aGVuIHRoaXMgYW5pbWF0aW9uIGNvbXBsZXRlcy5cbiAgICAgICAgbGFzdEFuaW1hdGlvbkRldGFpbHMgPSB7IGFuaW1hdGlvbiwgaW5kZXgsIHRpbWluZywgZm9yd2FyZCB9O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGlzIGl0ZW0gZG9lc24ndCBwYXJ0aWNpcGF0ZSBpbiB0aGUgYW5pbWF0aW9uLlxuICAgICAgc2hvd0l0ZW0oaXRlbSwgZmFsc2UpO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGxhc3RBbmltYXRpb25EZXRhaWxzICE9IG51bGwpIHtcbiAgICAvLyBBcnJhbmdlIGZvciBjbGVhbi11cCB3b3JrIHRvIGJlIHBlcmZvcm1lZC5cbiAgICBsYXN0QW5pbWF0aW9uRGV0YWlscy5uZXh0VXBJbmRleCA9IG5leHRVcEluZGV4O1xuICAgIGxhc3RBbmltYXRpb25EZXRhaWxzLmFuaW1hdGlvbi5vbmZpbmlzaCA9IGV2ZW50ID0+IHNlbGVjdGlvbkFuaW1hdGlvbkZpbmlzaGVkKGVsZW1lbnQsIGxhc3RBbmltYXRpb25EZXRhaWxzKTtcbiAgICBlbGVtZW50W2xhc3RBbmltYXRpb25TeW1ib2xdID0gbGFzdEFuaW1hdGlvbkRldGFpbHMuYW5pbWF0aW9uO1xuICB9IGVsc2Uge1xuICAgIC8vIFNob3VsZG4ndCBoYXBwZW4gLS0gd2Ugc2hvdWxkIGFsd2F5cyBoYXZlIGF0IGxlYXN0IG9uZSBhbmltYXRpb24uXG4gICAgZWxlbWVudFtwbGF5aW5nQW5pbWF0aW9uU3ltYm9sXSA9IGZhbHNlO1xuICB9XG59XG5cblxuZnVuY3Rpb24gZ2V0QW5pbWF0aW9uRm9ySXRlbUluZGV4KGVsZW1lbnQsIGluZGV4KSB7XG4gIGlmIChlbGVtZW50W2FuaW1hdGlvblN5bWJvbF0gPT0gbnVsbCkge1xuICAgIC8vIE5vdCByZWFkeSB5ZXQ7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgbGV0IGFuaW1hdGlvbiA9IGVsZW1lbnRbYW5pbWF0aW9uU3ltYm9sXVtpbmRleF07XG4gIGlmICghYW5pbWF0aW9uKSB7XG4gICAgbGV0IGl0ZW0gPSBlbGVtZW50Lml0ZW1zW2luZGV4XTtcbiAgICBhbmltYXRpb24gPSBpdGVtLmFuaW1hdGUoZWxlbWVudC5zZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXMsIHtcbiAgICAgIGR1cmF0aW9uOiBlbGVtZW50LnNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgZmlsbDogJ2JvdGgnXG4gICAgfSk7XG4gICAgYW5pbWF0aW9uLnBhdXNlKCk7XG4gICAgZWxlbWVudFthbmltYXRpb25TeW1ib2xdW2luZGV4XSA9IGFuaW1hdGlvbjtcbiAgfVxuICByZXR1cm4gYW5pbWF0aW9uO1xufVxuXG5mdW5jdGlvbiBpc0l0ZW1JbmRleEluQm91bmRzKGVsZW1lbnQsIGluZGV4KSB7XG4gIHJldHVybiBpbmRleCA+PSAwICYmIGVsZW1lbnQuaXRlbXMgJiYgaW5kZXggPCBlbGVtZW50Lml0ZW1zLmxlbmd0aDtcbn1cblxuLypcbiAqIFJlbmRlciB0aGUgc2VsZWN0aW9uIHN0YXRlIG9mIHRoZSBlbGVtZW50LlxuICpcbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gcmUtcmVuZGVyIGEgcHJldmlvdXMgc2VsZWN0aW9uIHN0YXRlIChpZiB0aGVcbiAqIHNlbGVjdGVkSW5kZXggcGFyYW0gaXMgb21pdHRlZCksIHJlbmRlciB0aGUgc2VsZWN0aW9uIGluc3RhbnRseSBhdCBhIGdpdmVuXG4gKiB3aG9sZSBvciBmcmFjdGlvbmFsIHNlbGVjdGlvbiBpbmRleCwgb3IgYW5pbWF0ZSB0byBhIGdpdmVuIHNlbGVjdGlvbiBpbmRleC5cbiAqXG4gKiBUaGVyZSBhcmUgc2V2ZXJhbCBkaXN0aW5jdCBzY2VuYXJpb3Mgd2UgbmVlZCB0byBjb3ZlcjpcbiAqXG4gKiAxLiBJbml0aWFsIHBvc2l0aW9uaW5nLCBvciByZXBvc2l0aW9uaW5nIGFmdGVyIGNoYW5naW5nIGEgcHJvcGVydHkgbGlrZVxuICogICAgc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzIHRoYXQgYWZmZWN0cyByZW5kZXJpbmcuXG4gKiAyLiBBbmltYXRlIG9uIHNlbGVjdGVkSW5kZXggY2hhbmdlLiBUaGlzIHNob3VsZCBvdmVycmlkZSBhbnkgYW5pbWF0aW9uL3N3aXBlXG4gKiAgICBhbHJlYWR5IGluIHByb2dyZXNzLlxuICogMy4gSW5zdGFudGx5IHJlbmRlciB0aGUgY3VycmVudCBwb3NpdGlvbiBvZiBhIGRyYWcgb3BlcmF0aW9uIGluIHByb2dyZXNzLlxuICogNC4gQ29tcGxldGUgYSBkcmFnIG9wZXJhdGlvbi4gSWYgdGhlIGRyYWcgd2Fzbid0IGZhciBlbm91Z2ggdG8gYWZmZWN0XG4gKiAgICBzZWxlY3Rpb24sIHdlJ2xsIGp1c3QgYmUgcmVzdG9yaW5nIHRoZSBzZWxlY3RlZEZyYWN0aW9uIHRvIDAuXG4gKlxuICogSWYgdGhlIGxpc3QgZG9lcyBub3Qgd3JhcCwgYW55IHNlbGVjdGlvbiBwb3NpdGlvbiBvdXRzaWRlIHRoZSBsaXN0J3MgYm91bmRzXG4gKiB3aWxsIGJlIGRhbXBlZCB0byBwcm9kdWNlIGEgdmlzdWFsIGVmZmVjdCBvZiB0ZW5zaW9uLlxuICovXG5mdW5jdGlvbiByZW5kZXJTZWxlY3Rpb24oZWxlbWVudCwgc2VsZWN0ZWRJbmRleD1lbGVtZW50LnNlbGVjdGVkSW5kZXgsIHNlbGVjdGVkRnJhY3Rpb249ZWxlbWVudC5zZWxlY3RlZEZyYWN0aW9uKSB7XG4gIGxldCBpdGVtQ291bnQgPSBlbGVtZW50Lml0ZW1zID8gZWxlbWVudC5pdGVtcy5sZW5ndGggOiAwO1xuICBpZiAoaXRlbUNvdW50ID09PSAwKSB7XG4gICAgLy8gTm90aGluZyB0byByZW5kZXIuXG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChzZWxlY3RlZEluZGV4IDwgMCkge1xuICAgIC8vIFRPRE86IEhhbmRsZSBubyBzZWxlY3Rpb24uXG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBzZWxlY3Rpb24gPSBzZWxlY3RlZEluZGV4ICsgc2VsZWN0ZWRGcmFjdGlvbjtcbiAgaWYgKGVsZW1lbnQuc2VsZWN0aW9uV3JhcHMpIHtcbiAgICAvLyBBcHBseSB3cmFwcGluZyB0byBlbnN1cmUgY29uc2lzdGVudCByZXByZXNlbnRhdGlvbiBvZiBzZWxlY3Rpb24uXG4gICAgc2VsZWN0aW9uID0gRnJhY3Rpb25hbFNlbGVjdGlvbi5oZWxwZXJzLndyYXBwZWRTZWxlY3Rpb24oc2VsZWN0aW9uLCBpdGVtQ291bnQpO1xuICB9IGVsc2Uge1xuICAgIC8vIEFwcGx5IGRhbXBpbmcgaWYgbmVjZXNzYXJ5LlxuICAgIHNlbGVjdGlvbiA9IEZyYWN0aW9uYWxTZWxlY3Rpb24uaGVscGVycy5kYW1wZWRTZWxlY3Rpb24oc2VsZWN0aW9uLCBpdGVtQ291bnQpO1xuICB9XG4gIGxldCBwcmV2aW91c1NlbGVjdGlvbiA9IGVsZW1lbnRbcHJldmlvdXNTZWxlY3Rpb25TeW1ib2xdO1xuICBpZiAoZWxlbWVudFtzaG93VHJhbnNpdGlvblN5bWJvbF0gJiYgcHJldmlvdXNTZWxlY3Rpb24gIT0gbnVsbCAmJlxuICAgICAgcHJldmlvdXNTZWxlY3Rpb24gIT09IHNlbGVjdGlvbikge1xuICAgIC8vIEFuaW1hdGUgc2VsZWN0aW9uIGZyb20gcHJldmlvdXMgc3RhdGUgdG8gbmV3IHN0YXRlLlxuICAgIGFuaW1hdGVTZWxlY3Rpb24oZWxlbWVudCwgcHJldmlvdXNTZWxlY3Rpb24sIHNlbGVjdGlvbik7XG4gIH0gZWxzZSBpZiAoc2VsZWN0ZWRGcmFjdGlvbiA9PT0gMCAmJiBlbGVtZW50W3BsYXlpbmdBbmltYXRpb25TeW1ib2xdKSB7XG4gICAgLy8gQWxyZWFkeSBpbiBwcm9jZXNzIG9mIGFuaW1hdGluZyB0byBmcmFjdGlvbiAwLiBEdXJpbmcgdGhhdCBwcm9jZXNzLFxuICAgIC8vIGlnbm9yZSBzdWJzZXF1ZW50IGF0dGVtcHRzIHRvIHJlbmRlclNlbGVjdGlvbiB0byBmcmFjdGlvbiAwLlxuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICAvLyBSZW5kZXIgY3VycmVudCBzZWxlY3Rpb24gc3RhdGUgaW5zdGFudGx5LlxuICAgIHJlbmRlclNlbGVjdGlvbkluc3RhbnRseShlbGVtZW50LCBzZWxlY3Rpb24pO1xuICB9XG4gIGVsZW1lbnRbcHJldmlvdXNTZWxlY3Rpb25TeW1ib2xdID0gc2VsZWN0aW9uO1xufVxuXG4vKlxuICogSW5zdGFudGx5IHJlbmRlciAoZG9uJ3QgYW5pbWF0ZSkgdGhlIGVsZW1lbnQncyBpdGVtcyBhdCB0aGUgZ2l2ZW4gd2hvbGUgb3JcbiAqIGZyYWN0aW9uYWwgc2VsZWN0aW9uIGluZGV4LlxuICovXG5mdW5jdGlvbiByZW5kZXJTZWxlY3Rpb25JbnN0YW50bHkoZWxlbWVudCwgdG9TZWxlY3Rpb24pIHtcbiAgbGV0IGFuaW1hdGlvbkZyYWN0aW9ucyA9IG1peGluLmhlbHBlcnMuYW5pbWF0aW9uRnJhY3Rpb25zRm9yU2VsZWN0aW9uKGVsZW1lbnQsIHRvU2VsZWN0aW9uKTtcbiAgYW5pbWF0aW9uRnJhY3Rpb25zLm1hcCgoYW5pbWF0aW9uRnJhY3Rpb24sIGluZGV4KSA9PiB7XG4gICAgbGV0IGl0ZW0gPSBlbGVtZW50Lml0ZW1zW2luZGV4XTtcbiAgICBpZiAoYW5pbWF0aW9uRnJhY3Rpb24gIT0gbnVsbCkge1xuICAgICAgc2hvd0l0ZW0oaXRlbSwgdHJ1ZSk7XG4gICAgICBzZXRBbmltYXRpb25GcmFjdGlvbihlbGVtZW50LCBpbmRleCwgYW5pbWF0aW9uRnJhY3Rpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaG93SXRlbShpdGVtLCBmYWxzZSk7XG4gICAgfVxuICB9KTtcbn1cblxuLypcbiAqIFdlIG1haW50YWluIGFuIGFycmF5IGNvbnRhaW5pbmcgYW4gYW5pbWF0aW9uIHBlciBpdGVtLiBUaGlzIGlzIHVzZWQgZm9yIHR3b1xuICogcmVhc29uczpcbiAqXG4gKiAqIER1cmluZyBhIGRyYWcgb3BlcmF0aW9uLCB3ZSB3YW50IHRvIGJlIGFibGUgdG8gcmV1c2UgYW5pbWF0aW9ucyBiZXR3ZWVuXG4gKiAgIGRyYWcgdXBkYXRlcy5cbiAqICogV2hlbiBhIHNlbGVjdGlvbiBhbmltYXRpb24gY29tcGxldGVzLCB3ZSBuZWVkIHRvIGJlIGFibGUgdG8gbGVhdmUgdGhlXG4gKiAgIHZpc2liaWxlIGl0ZW1zIGluIGEgcGF1c2VkIHN0YXRlLiBMYXRlciwgd2UnbGwgd2FudCB0byBiZSBhYmxlIHRvIGNsZWFuIHVwXG4gKiAgIHRob3NlIGFuaW1hdGlvbnMuXG4gKlxuICogTm90ZSB0aGF0IHRoaXMgYXJyYXkgaXMgc3BhcnNlOiBpdCB3aWxsIG9ubHkgaG9sZCB1cCBmcm9tIDDigJMzIGFuaW1hdGlvbnMgYXRcbiAqIGFueSBnaXZlbiBwb2ludC5cbiAqL1xuZnVuY3Rpb24gcmVzZXRBbmltYXRpb25zKGVsZW1lbnQpIHtcbiAgbGV0IGFuaW1hdGlvbnMgPSBlbGVtZW50W2FuaW1hdGlvblN5bWJvbF07XG4gIGlmIChhbmltYXRpb25zKSB7XG4gICAgLy8gQ2FuY2VsIGV4aXN0aW5nIGFuaW1hdGlvbnMgdG8gcmVtb3ZlIHRoZSBlZmZlY3RzIHRoZXkncmUgYXBwbHlpbmcuXG4gICAgYW5pbWF0aW9ucy5mb3JFYWNoKChhbmltYXRpb24sIGluZGV4KSA9PiB7XG4gICAgICBpZiAoYW5pbWF0aW9uKSB7XG4gICAgICAgIGFuaW1hdGlvbi5jYW5jZWwoKTtcbiAgICAgICAgYW5pbWF0aW9uc1tpbmRleF0gPSBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGxldCBpdGVtQ291bnQgPSBlbGVtZW50Lml0ZW1zID8gZWxlbWVudC5pdGVtcy5sZW5ndGggOiAwO1xuICBpZiAoIWFuaW1hdGlvbnMgfHwgYW5pbWF0aW9ucy5sZW5ndGggIT09IGl0ZW1Db3VudCkge1xuICAgIC8vIEhhdmVuJ3QgYW5pbWF0ZWQgYmVmb3JlIHdpdGggdGhpcyBudW1iZXIgb2YgaXRlbXM7IChyZSljcmVhdGUgYXJyYXkuXG4gICAgZWxlbWVudFthbmltYXRpb25TeW1ib2xdID0gbmV3IEFycmF5KGl0ZW1Db3VudCk7XG4gIH1cbn1cblxuLypcbiAqIFRoZSBsYXN0IGFuaW1hdGlvbiBpbiBvdXIgc2VsZWN0aW9uIGFuaW1hdGlvbiBoYXMgY29tcGxldGVkLiBDbGVhbiB1cC5cbiAqL1xuZnVuY3Rpb24gc2VsZWN0aW9uQW5pbWF0aW9uRmluaXNoZWQoZWxlbWVudCwgZGV0YWlscykge1xuXG4gIC8vIFdoZW4gdGhlIGxhc3QgYW5pbWF0aW9uIGNvbXBsZXRlcywgc2hvdyB0aGUgbmV4dCBpdGVtIGluIHRoZSBkaXJlY3Rpb25cbiAgLy8gd2UncmUgZ29pbmcuIFdhaXRpbmcgdG8gdGhhdCB1bnRpbCB0aGlzIHBvaW50IGlzIGEgYml0IG9mIGEgaGFjayB0byBhdm9pZFxuICAvLyBoYXZpbmcgYSBuZXh0IGl0ZW0gdGhhdCdzIGhpZ2hlciBpbiB0aGUgbmF0dXJhbCB6LW9yZGVyIG9ic2N1cmUgb3RoZXIgaXRlbXNcbiAgLy8gZHVyaW5nIGFuaW1hdGlvbi5cbiAgbGV0IG5leHRVcEluZGV4ID0gZGV0YWlscy5uZXh0VXBJbmRleDtcbiAgaWYgKG5leHRVcEluZGV4ICE9IG51bGwpIHtcbiAgICBpZiAoZWxlbWVudFthbmltYXRpb25TeW1ib2xdW25leHRVcEluZGV4XSkge1xuICAgICAgLy8gQ2FuY2VsIGV4aXN0aW5nIHNlbGVjdGlvbiBhbmltYXRpb24gc28gd2UgY2FuIGNvbnN0cnVjdCBhIG5ldyBvbmUuXG4gICAgICBlbGVtZW50W2FuaW1hdGlvblN5bWJvbF1bbmV4dFVwSW5kZXhdLmNhbmNlbCgpO1xuICAgICAgZWxlbWVudFthbmltYXRpb25TeW1ib2xdW25leHRVcEluZGV4XSA9IG51bGw7XG4gICAgfVxuICAgIGxldCBhbmltYXRpb25GcmFjdGlvbiA9IGRldGFpbHMuZm9yd2FyZCA/IDAgOiAxO1xuICAgIHNldEFuaW1hdGlvbkZyYWN0aW9uKGVsZW1lbnQsIG5leHRVcEluZGV4LCBhbmltYXRpb25GcmFjdGlvbik7XG4gICAgc2hvd0l0ZW0oZWxlbWVudC5pdGVtc1tuZXh0VXBJbmRleF0sIHRydWUpO1xuICB9XG5cbiAgZWxlbWVudFtsYXN0QW5pbWF0aW9uU3ltYm9sXS5vbmZpbmlzaCA9IG51bGw7XG4gIGVsZW1lbnRbcGxheWluZ0FuaW1hdGlvblN5bWJvbF0gPSBmYWxzZTtcbn1cblxuLypcbiAqIFBhdXNlIHRoZSBpbmRpY2F0ZWQgYW5pbWF0aW9uIGFuZCBoYXZlIGl0IHNob3cgdGhlIGFuaW1hdGlvbiBhdCB0aGUgZ2l2ZW5cbiAqIGZyYWN0aW9uIChiZXR3ZWVuIDAgYW5kIDEpIG9mIHRoZSB3YXkgdGhyb3VnaCB0aGUgYW5pbWF0aW9uLlxuICovXG5mdW5jdGlvbiBzZXRBbmltYXRpb25GcmFjdGlvbihlbGVtZW50LCBpdGVtSW5kZXgsIGZyYWN0aW9uKSB7XG4gIGxldCBhbmltYXRpb24gPSBnZXRBbmltYXRpb25Gb3JJdGVtSW5kZXgoZWxlbWVudCwgaXRlbUluZGV4KTtcbiAgaWYgKGFuaW1hdGlvbikge1xuICAgIGxldCBkdXJhdGlvbiA9IGVsZW1lbnQuc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb247XG4gICAgaWYgKGR1cmF0aW9uKSB7XG4gICAgICBhbmltYXRpb24uY3VycmVudFRpbWUgPSBmcmFjdGlvbiAqIGR1cmF0aW9uO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93SXRlbShpdGVtLCBmbGFnKSB7XG4gIGl0ZW0uc3R5bGUudmlzaWJpbGl0eSA9IGZsYWcgPyAndmlzaWJsZScgOiAnaGlkZGVuJztcbn1cblxuLypcbiAqIEZpZ3VyZSBvdXQgaG93IG1hbnkgc3RlcHMgaXQgd2lsbCB0YWtlIHRvIGdvIGZyb20gZnJvbVNlbGVjdGlvbiB0b1xuICogdG9TZWxlY3Rpb24uIFRvIGdvIGZyb20gaXRlbSAzIHRvIGl0ZW0gNCBpcyBvbmUgc3RlcC5cbiAqXG4gKiBJZiB3cmFwcGluZyBpcyBhbGxvd2VkLCB0aGVuIGdvaW5nIGZyb20gdGhlIGxhc3QgaXRlbSB0byB0aGUgZmlyc3Qgd2lsbCB0YWtlXG4gKiBvbmUgc3RlcCAoZm9yd2FyZCksIGFuZCBnb2luZyBmcm9tIHRoZSBmaXJzdCBpdGVtIHRvIHRoZSBsYXN0IHdpbGwgdGFrZSBvbmVcbiAqIHN0ZXAgKGJhY2t3YXJkKS5cbiAqL1xuZnVuY3Rpb24gc3RlcHNUb0luZGV4KGxlbmd0aCwgYWxsb3dXcmFwLCBmcm9tU2VsZWN0aW9uLCB0b1NlbGVjdGlvbikge1xuICBsZXQgc3RlcHMgPSB0b1NlbGVjdGlvbiAtIGZyb21TZWxlY3Rpb247XG4gIC8vIFdyYXBwaW5nIG9ubHkga2lja3MgaW4gd2hlbiBsaXN0IGhhcyBtb3JlIHRoYW4gMSBpdGVtLlxuICBpZiAoYWxsb3dXcmFwICYmIGxlbmd0aCA+IDEpIHtcbiAgICBsZXQgd3JhcFN0ZXBzID0gbGVuZ3RoIC0gTWF0aC5hYnMoc3RlcHMpO1xuICAgIGlmICh3cmFwU3RlcHMgPD0gMSkge1xuICAgICAgLy8gU3BlY2lhbCBjYXNlXG4gICAgICBzdGVwcyA9IHN0ZXBzIDwgMCA/XG4gICAgICAgIHdyYXBTdGVwcyA6ICAgLy8gV3JhcCBmb3J3YXJkIGZyb20gbGFzdCBpdGVtIHRvIGZpcnN0LlxuICAgICAgICAtd3JhcFN0ZXBzOyAgIC8vIFdyYXAgYmFja3dhcmQgZnJvbSBmaXJzdCBpdGVtIHRvIGxhc3QuXG4gICAgfVxuICB9XG4gIHJldHVybiBzdGVwcztcbn1cbiIsIi8vIFVzZWQgdG8gYXNzaWduIHVuaXF1ZSBJRHMgdG8gaXRlbSBlbGVtZW50cyB3aXRob3V0IElEcy5cbmxldCBpZENvdW50ID0gMDtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNlbGVjdGlvbkFyaWFBY3RpdmUuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCB0cmVhdHMgdGhlIHNlbGVjdGVkIGl0ZW0gaW4gYSBsaXN0IGFzIHRoZSBhY3RpdmUgaXRlbSBpbiBBUklBXG4gICAqIGFjY2Vzc2liaWxpdHkgdGVybXMuXG4gICAqXG4gICAqIEhhbmRsaW5nIEFSSUEgc2VsZWN0aW9uIHN0YXRlIHByb3Blcmx5IGlzIGFjdHVhbGx5IHF1aXRlIGNvbXBsZXg6XG4gICAqXG4gICAqICogVGhlIGl0ZW1zIGluIHRoZSBsaXN0IG5lZWQgdG8gYmUgaW5kaWNhdGVkIGFzIHBvc3NpYmxlIGl0ZW1zIHZpYSBhbiBBUklBXG4gICAqICAgYHJvbGVgIGF0dHJpYnV0ZSB2YWx1ZSBzdWNoIGFzIFwib3B0aW9uXCIuXG4gICAqICogVGhlIHNlbGVjdGVkIGl0ZW0gbmVlZCB0byBiZSBtYXJrZWQgYXMgc2VsZWN0ZWQgYnkgc2V0dGluZyB0aGUgaXRlbSdzXG4gICAqICAgYGFyaWEtc2VsZWN0ZWRgIGF0dHJpYnV0ZSB0byB0cnVlICphbmQqIHRoZSBvdGhlciBpdGVtcyBuZWVkIGJlIG1hcmtlZCBhc1xuICAgKiAgICpub3QqIHNlbGVjdGVkIGJ5IHNldHRpbmcgYGFyaWEtc2VsZWN0ZWRgIHRvIGZhbHNlLlxuICAgKiAqIFRoZSBvdXRlcm1vc3QgZWxlbWVudCB3aXRoIHRoZSBrZXlib2FyZCBmb2N1cyBuZWVkcyB0byBoYXZlIGF0dHJpYnV0ZXNcbiAgICogICBzZXQgb24gaXQgc28gdGhhdCB0aGUgc2VsZWN0aW9uIGlzIGtub3dhYmxlIGF0IHRoZSBsaXN0IGxldmVsIHZpYSB0aGVcbiAgICogICBgYXJpYS1hY3RpdmVkZXNjZW5kYW50YCBhdHRyaWJ1dGUuXG4gICAqICogVXNlIG9mIGBhcmlhLWFjdGl2ZWRlc2NlbmRhbnRgIGluIHR1cm4gcmVxdWlyZXMgdGhhdCBhbGwgaXRlbXMgaW4gdGhlXG4gICAqICAgbGlzdCBoYXZlIElEIGF0dHJpYnV0ZXMgYXNzaWduZWQgdG8gdGhlbS5cbiAgICpcbiAgICogVGhpcyBtaXhpbiB0cmllcyB0byBhZGRyZXNzIGFsbCBvZiB0aGUgYWJvdmUgcmVxdWlyZW1lbnRzLiBUbyB0aGF0IGVuZCxcbiAgICogdGhpcyBtaXhpbiB3aWxsIGFzc2lnbiBnZW5lcmF0ZWQgSURzIHRvIGFueSBpdGVtIHRoYXQgZG9lc24ndCBhbHJlYWR5IGhhdmVcbiAgICogYW4gSUQuXG4gICAqXG4gICAqIEFSSUEgcmVsaWVzIG9uIGVsZW1lbnRzIHRvIHByb3ZpZGUgYHJvbGVgIGF0dHJpYnV0ZXMuIFRoaXMgbWl4aW4gd2lsbCBhcHBseVxuICAgKiBhIGRlZmF1bHQgcm9sZSBvZiBcImxpc3Rib3hcIiBvbiB0aGUgb3V0ZXIgbGlzdCBpZiBpdCBkb2Vzbid0IGFscmVhZHkgaGF2ZSBhblxuICAgKiBleHBsaWNpdCByb2xlLiBTaW1pbGFybHksIHRoaXMgbWl4aW4gd2lsbCBhcHBseSBhIGRlZmF1bHQgcm9sZSBvZiBcIm9wdGlvblwiXG4gICAqIHRvIGFueSBsaXN0IGl0ZW0gdGhhdCBkb2VzIG5vdCBhbHJlYWR5IGhhdmUgYSByb2xlIHNwZWNpZmllZC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGEgc2V0IG9mIG1lbWJlcnMgdGhhdCBtYW5hZ2UgdGhlIHN0YXRlIG9mIHRoZSBzZWxlY3Rpb246XG4gICAqIGBhcHBseVNlbGVjdGlvbmAsIGBpdGVtQWRkZWRgLCBhbmQgYHNlbGVjdGVkSW5kZXhgLiBZb3UgY2FuIHN1cHBseSB0aGVzZVxuICAgKiB5b3Vyc2VsZiwgb3IgZG8gc28gdmlhIHRoZSBbU2luZ2xlU2VsZWN0aW9uXShTaW5nbGVTZWxlY3Rpb24ubWQpIG1peGluLlxuICAgKi9cbiAgY2xhc3MgU2VsZWN0aW9uQXJpYUFjdGl2ZSBleHRlbmRzIGJhc2Uge1xuXG4gICAgYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpIHtcbiAgICAgIGlmIChzdXBlci5hcHBseVNlbGVjdGlvbikgeyBzdXBlci5hcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCk7IH1cbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgc2VsZWN0ZWQpO1xuICAgICAgbGV0IGl0ZW1JZCA9IGl0ZW0uaWQ7XG4gICAgICBpZiAoaXRlbUlkKSB7XG4gICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgIG91dGVybW9zdEVsZW1lbnQodGhpcykuc2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnLCBpdGVtSWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29sbGVjdGl2ZUNoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuY29sbGVjdGl2ZUNoYW5nZWQpIHsgc3VwZXIuY29sbGVjdGl2ZUNoYW5nZWQoKTsgfVxuICAgICAgc2V0QXJpYUF0dHJpYnV0ZXModGhpcyk7XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2spIHsgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgc2V0QXJpYUF0dHJpYnV0ZXModGhpcyk7XG4gICAgfVxuXG4gICAgaXRlbUFkZGVkKGl0ZW0pIHtcbiAgICAgIGlmIChzdXBlci5pdGVtQWRkZWQpIHsgc3VwZXIuaXRlbUFkZGVkKGl0ZW0pOyB9XG5cbiAgICAgIGlmICghaXRlbS5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSkge1xuICAgICAgICAvLyBBc3NpZ24gYSBkZWZhdWx0IEFSSUEgcm9sZS5cbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnb3B0aW9uJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIEVuc3VyZSBlYWNoIGl0ZW0gaGFzIGFuIElEIHNvIHdlIGNhbiBzZXQgYXJpYS1hY3RpdmVkZXNjZW5kYW50IG9uIHRoZVxuICAgICAgLy8gb3ZlcmFsbCBsaXN0IHdoZW5ldmVyIHRoZSBzZWxlY3Rpb24gY2hhbmdlcy5cbiAgICAgIC8vXG4gICAgICAvLyBUaGUgSUQgd2lsbCB0YWtlIHRoZSBmb3JtIG9mIGEgYmFzZSBJRCBwbHVzIGEgdW5pcXVlIGludGVnZXIuIFRoZSBiYXNlXG4gICAgICAvLyBJRCB3aWxsIGJlIGluY29ycG9yYXRlIHRoZSBjb21wb25lbnQncyBvd24gSUQuIEUuZy4sIGlmIGEgY29tcG9uZW50IGhhc1xuICAgICAgLy8gSUQgXCJmb29cIiwgdGhlbiBpdHMgaXRlbXMgd2lsbCBoYXZlIElEcyB0aGF0IGxvb2sgbGlrZSBcIl9mb29PcHRpb24xXCIuIElmXG4gICAgICAvLyB0aGUgY29tcG5lbnQgaGFzIG5vIElEIGl0c2VsZiwgaXRzIGl0ZW1zIHdpbGwgZ2V0IElEcyB0aGF0IGxvb2sgbGlrZVxuICAgICAgLy8gXCJfb3B0aW9uMVwiLiBJdGVtIElEcyBhcmUgcHJlZml4ZWQgd2l0aCBhbiB1bmRlcnNjb3JlIHRvIGRpZmZlcmVudGlhdGVcbiAgICAgIC8vIHRoZW0gZnJvbSBtYW51YWxseS1hc3NpZ25lZCBJRHMsIGFuZCB0byBtaW5pbWl6ZSB0aGUgcG90ZW50aWFsIGZvciBJRFxuICAgICAgLy8gY29uZmxpY3RzLlxuICAgICAgaWYgKCFpdGVtLmlkKSB7XG4gICAgICAgIGxldCBiYXNlSWQgPSB0aGlzLmlkID9cbiAgICAgICAgICAgIFwiX1wiICsgdGhpcy5pZCArIFwiT3B0aW9uXCIgOlxuICAgICAgICAgICAgXCJfb3B0aW9uXCI7XG4gICAgICAgIGl0ZW0uaWQgPSBiYXNlSWQgKyBpZENvdW50Kys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICAgIHJldHVybiBzdXBlci5zZWxlY3RlZEl0ZW07XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEl0ZW0oaXRlbSkge1xuICAgICAgaWYgKCdzZWxlY3RlZEl0ZW0nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSXRlbSA9IGl0ZW07IH1cbiAgICAgIC8vIENhdGNoIHRoZSBjYXNlIHdoZXJlIHRoZSBzZWxlY3Rpb24gaXMgcmVtb3ZlZC5cbiAgICAgIGlmIChpdGVtID09IG51bGwpIHtcbiAgICAgICAgb3V0ZXJtb3N0RWxlbWVudCh0aGlzKS5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFNlbGVjdGlvbkFyaWFBY3RpdmU7XG59O1xuXG5cbi8vIFJldHVybiB0aGUgZmlyc3QgQVJJQSBhY3RpdmVkZXNjZW5kYW50IGRlZmluZWQgYnkgdGhlIGNvbGxlY3RpdmUuXG5mdW5jdGlvbiBnZXRDb2xsZWN0aXZlQXJpYUFjdGl2ZURlc2NlbmRhbnQoY29sbGVjdGl2ZSkge1xuICBsZXQgZGVzY2VuZGFudHMgPSBjb2xsZWN0aXZlLmVsZW1lbnRzLm1hcChlbGVtZW50ID0+IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKSk7XG4gIGxldCBub25OdWxsRGVzY2VuZGFudHMgPSBkZXNjZW5kYW50cy5maWx0ZXIoZGVzY2VuZGFudCA9PiBkZXNjZW5kYW50ICE9PSBudWxsKTtcbiAgcmV0dXJuIG5vbk51bGxEZXNjZW5kYW50c1swXTtcbn1cblxuXG4vLyBSZXR1cm4gdGhlIGZpcnN0IEFSSUEgbGFiZWwgZGVmaW5lZCBieSB0aGUgY29sbGVjdGl2ZS5cbmZ1bmN0aW9uIGdldENvbGxlY3RpdmVBcmlhUm9sZShjb2xsZWN0aXZlKSB7XG4gIGxldCByb2xlcyA9IGNvbGxlY3RpdmUuZWxlbWVudHMubWFwKGVsZW1lbnQgPT4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSk7XG4gIGxldCBub25OdWxsUm9sZXMgPSByb2xlcy5maWx0ZXIocm9sZSA9PiByb2xlICE9PSBudWxsKTtcbiAgcmV0dXJuIG5vbk51bGxSb2xlc1swXTtcbn1cblxuZnVuY3Rpb24gb3V0ZXJtb3N0RWxlbWVudChlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50LmNvbGxlY3RpdmUgP1xuICAgIGVsZW1lbnQuY29sbGVjdGl2ZS5vdXRlcm1vc3RFbGVtZW50IDpcbiAgICBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBzZXRBcmlhQXR0cmlidXRlcyhlbGVtZW50KSB7XG5cbiAgaWYgKCFlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICByZXR1cm47IC8vIE5vdCBpbiBkb2N1bWVudCB5ZXRcbiAgfVxuICBpZiAoZWxlbWVudC5jb2xsZWN0aXZlICYmIGVsZW1lbnQgIT09IGVsZW1lbnQuY29sbGVjdGl2ZS5vdXRlcm1vc3RFbGVtZW50KSB7XG4gICAgLy8gTm90IHRoZSBvdXRlcm1vc3QgZWxlbWVudCwgZG8gbm90aGluZyBhbmQgbGV0IHRoZSBvdXRlcm1vc3QgZWxlbWVudFxuICAgIC8vIGhhbmRsZSB0aGluZ3MuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRW5zdXJlIHRoZSBlbGVtZW50IGhhcyBhbiBBUklBIHJvbGUuXG4gIGlmICghZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSkge1xuICAgIC8vIFRyeSB0byBwcm9tb3RlIGFuIEFSSUEgcm9sZSBmcm9tIGFuIGlubmVyIGVsZW1lbnQuIElmIG5vbmUgaXMgZm91bmQsXG4gICAgLy8gdXNlIGEgZGVmYXVsdCByb2xlLlxuICAgIGxldCByb2xlID0gZWxlbWVudC5jb2xsZWN0aXZlICYmIGdldENvbGxlY3RpdmVBcmlhUm9sZShlbGVtZW50LmNvbGxlY3RpdmUpO1xuICAgIHJvbGUgPSByb2xlIHx8ICdsaXN0Ym94JztcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsIHJvbGUpO1xuICB9XG5cbiAgaWYgKCFlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50JykgJiYgZWxlbWVudC5jb2xsZWN0aXZlKSB7XG4gICAgLy8gVHJ5IHRvIHByb21vdGUgYW4gQVJJQSBhY3RpdmVkZXNjZW5kYW50IHZhbHVlIGZyb20gYW4gaW5uZXIgZWxlbWVudC5cbiAgICBsZXQgZGVzY2VuZGFudCA9IGdldENvbGxlY3RpdmVBcmlhQWN0aXZlRGVzY2VuZGFudChlbGVtZW50LmNvbGxlY3RpdmUpO1xuICAgIGlmIChkZXNjZW5kYW50KSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50JywgZGVzY2VuZGFudCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVsZW1lbnQuY29sbGVjdGl2ZSkge1xuICAgIC8vIFJlbW92ZSB0aGUgQVJJQSByb2xlIGFuZCBhY3RpdmVkZXNjZW5kYW50IHZhbHVlcyBmcm9tIHRoZSBjb2xsZWN0aXZlJ3NcbiAgICAvLyBpbm5lciBlbGVtZW50cy5cbiAgICBlbGVtZW50LmNvbGxlY3RpdmUuZWxlbWVudHMuZm9yRWFjaChtZW1iZXIgPT4ge1xuICAgICAgaWYgKG1lbWJlciAhPT0gZWxlbWVudCkge1xuICAgICAgICBtZW1iZXIucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKTtcbiAgICAgICAgbWVtYmVyLnNldEF0dHJpYnV0ZSgncm9sZScsICdub25lJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxufVxuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTZWxlY3Rpb25IaWdobGlnaHQuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBhcHBsaWVzIHN0YW5kYXJkIGhpZ2hsaWdodCBjb2xvcnMgdG8gYSBzZWxlY3RlZCBpdGVtLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGhpZ2hsaWdodHMgdGV4dHVhbCBpdGVtcyAoZS5nLiwgaW4gYSBsaXN0KSBpbiBhIHN0YW5kYXJkIHdheSBieVxuICAgKiB1c2luZyB0aGUgQ1NTIGBoaWdobGlnaHRgIGFuZCBgaGlnaGxpZ2h0dGV4dGAgY29sb3IgdmFsdWVzLiBUaGVzZSB2YWx1ZXNcbiAgICogcmVzcGVjdCBvcGVyYXRpbmcgc3lzdGVtIGRlZmF1bHRzIGFuZCB1c2VyIHByZWZlcmVuY2VzLCBhbmQgaGVuY2UgYXJlIGdvb2RcbiAgICogZGVmYXVsdCB2YWx1ZXMgZm9yIGhpZ2hsaWdodCBjb2xvcnMuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIGBzZWxlY3RlZGAgY2xhc3MgdG8gYmUgYXBwbGllZCB0byBzZWxlY3RlZCBpdGVtcy4gWW91XG4gICAqIGNhbiB1c2UgdGhlIFtDb250ZW50QXNJdGVtc10oQ29udGVudEFzSXRlbXMubWQpIG1peGluIGZvciB0aGF0IHB1cnBvc2UuXG4gICAqL1xuICBjbGFzcyBTZWxlY3Rpb25IaWdobGlnaHQgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIGlmICh0aGlzLnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgbGV0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgc3R5bGUuaW5uZXJIVE1MID0gYFxuICAgICAgICAgIDo6c2xvdHRlZCguc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhpZ2hsaWdodDtcbiAgICAgICAgICAgIGNvbG9yOiBoaWdobGlnaHR0ZXh0O1xuICAgICAgICAgIH1cbiAgICAgICAgYDtcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBTZWxlY3Rpb25IaWdobGlnaHQ7XG59O1xuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTZWxlY3Rpb25JblZpZXcuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBzY3JvbGxzIGEgY29udGFpbmVyIHRvIGVuc3VyZSB0aGF0IGEgbmV3bHktc2VsZWN0ZWQgaXRlbSBpc1xuICAgKiB2aXNpYmxlIHRvIHRoZSB1c2VyLlxuICAgKlxuICAgKiBXaGVuIHRoZSBzZWxlY3RlZCBpdGVtIGluIGEgbGlzdC1saWtlIGNvbXBvbmVudCBjaGFuZ2VzLCBpdCdzIGVhc2llciBmb3JcbiAgICogdGhlIHRvIGNvbmZpcm0gdGhhdCB0aGUgc2VsZWN0aW9uIGhhcyBjaGFuZ2VkIHRvIGFuIGFwcHJvcHJpYXRlIGl0ZW0gaWYgdGhlXG4gICAqIHVzZXIgY2FuIGFjdHVhbGx5IHNlZSB0aGF0IGl0ZW0uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIGBzZWxlY3RlZEl0ZW1gIHByb3BlcnR5IHRvIGJlIHNldCB3aGVuIHRoZSBzZWxlY3Rpb25cbiAgICogY2hhbmdlcy4gWW91IGNhbiBzdXBwbHkgdGhhdCB5b3Vyc2VsZiwgb3IgdXNlIHRoZVxuICAgKiBbU2luZ2xlU2VsZWN0aW9uXShTaW5nbGVTZWxlY3Rpb24ubWQpIG1peGluLlxuICAgKi9cbiAgY2xhc3MgU2VsZWN0aW9uSW5WaWV3IGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG4gICAgICBsZXQgc2VsZWN0ZWRJdGVtID0gdGhpcy5zZWxlY3RlZEl0ZW07XG4gICAgICBpZiAoc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsSXRlbUludG9WaWV3KHNlbGVjdGVkSXRlbSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICAgIHJldHVybiBzdXBlci5zZWxlY3RlZEl0ZW07XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEl0ZW0oaXRlbSkge1xuICAgICAgaWYgKCdzZWxlY3RlZEl0ZW0nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSXRlbSA9IGl0ZW07IH1cbiAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgIC8vIEtlZXAgdGhlIHNlbGVjdGVkIGl0ZW0gaW4gdmlldy5cbiAgICAgICAgdGhpcy5zY3JvbGxJdGVtSW50b1ZpZXcoaXRlbSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xsIHRoZSBnaXZlbiBlbGVtZW50IGNvbXBsZXRlbHkgaW50byB2aWV3LCBtaW5pbWl6aW5nIHRoZSBkZWdyZWUgb2ZcbiAgICAgKiBzY3JvbGxpbmcgcGVyZm9ybWVkLlxuICAgICAqXG4gICAgICogQmxpbmsgaGFzIGEgYHNjcm9sbEludG9WaWV3SWZOZWVkZWQoKWAgZnVuY3Rpb24gdGhhdCBkb2VzIHNvbWV0aGluZ1xuICAgICAqIHNpbWlsYXIsIGJ1dCB1bmZvcnR1bmF0ZWx5IGl0J3Mgbm9uLXN0YW5kYXJkLCBhbmQgaW4gYW55IGV2ZW50IG9mdGVuIGVuZHNcbiAgICAgKiB1cCBzY3JvbGxpbmcgbW9yZSB0aGFuIGlzIGFic29sdXRlbHkgbmVjZXNzYXJ5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbSAtIHRoZSBpdGVtIHRvIHNjcm9sbCBpbnRvIHZpZXcuXG4gICAgICovXG4gICAgc2Nyb2xsSXRlbUludG9WaWV3KGl0ZW0pIHtcbiAgICAgIGlmIChzdXBlci5zY3JvbGxJdGVtSW50b1ZpZXcpIHsgc3VwZXIuc2Nyb2xsSXRlbUludG9WaWV3KCk7IH1cbiAgICAgIC8vIEdldCB0aGUgcmVsYXRpdmUgcG9zaXRpb24gb2YgdGhlIGl0ZW0gd2l0aCByZXNwZWN0IHRvIHRoZSB0b3Agb2YgdGhlXG4gICAgICAvLyBsaXN0J3Mgc2Nyb2xsYWJsZSBjYW52YXMuIEFuIGl0ZW0gYXQgdGhlIHRvcCBvZiB0aGUgbGlzdCB3aWxsIGhhdmUgYVxuICAgICAgLy8gZWxlbWVudFRvcCBvZiAwLlxuXG4gICAgICBsZXQgc2Nyb2xsVGFyZ2V0ID0gdGhpcy5zY3JvbGxUYXJnZXQ7XG4gICAgICBsZXQgZWxlbWVudFRvcCA9IGl0ZW0ub2Zmc2V0VG9wIC0gc2Nyb2xsVGFyZ2V0Lm9mZnNldFRvcCAtIHNjcm9sbFRhcmdldC5jbGllbnRUb3A7XG4gICAgICBsZXQgZWxlbWVudEJvdHRvbSA9IGVsZW1lbnRUb3AgKyBpdGVtLm9mZnNldEhlaWdodDtcbiAgICAgIC8vIERldGVybWluZSB0aGUgYm90dG9tIG9mIHRoZSBzY3JvbGxhYmxlIGNhbnZhcy5cbiAgICAgIGxldCBzY3JvbGxCb3R0b20gPSBzY3JvbGxUYXJnZXQuc2Nyb2xsVG9wICsgc2Nyb2xsVGFyZ2V0LmNsaWVudEhlaWdodDtcbiAgICAgIGlmIChlbGVtZW50Qm90dG9tID4gc2Nyb2xsQm90dG9tKSB7XG4gICAgICAgIC8vIFNjcm9sbCB1cCB1bnRpbCBpdGVtIGlzIGVudGlyZWx5IHZpc2libGUuXG4gICAgICAgIHNjcm9sbFRhcmdldC5zY3JvbGxUb3AgKz0gZWxlbWVudEJvdHRvbSAtIHNjcm9sbEJvdHRvbTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGVsZW1lbnRUb3AgPCBzY3JvbGxUYXJnZXQuc2Nyb2xsVG9wKSB7XG4gICAgICAgIC8vIFNjcm9sbCBkb3duIHVudGlsIGl0ZW0gaXMgZW50aXJlbHkgdmlzaWJsZS5cbiAgICAgICAgc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCA9IGVsZW1lbnRUb3A7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgc2Nyb2xsZWQgdG8gYnJpbmcgYW4gaXRlbSBpbnRvIHZpZXcuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGlzIHByb3BlcnR5IGlzIHRoZSBlbGVtZW50IGl0c2VsZi5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXQgc2Nyb2xsVGFyZ2V0KCkge1xuICAgICAgLy8gUHJlZmVyIGJhc2UgcmVzdWx0LlxuICAgICAgcmV0dXJuICdzY3JvbGxUYXJnZXQnIGluIGJhc2UucHJvdG90eXBlID8gc3VwZXIuc2Nyb2xsVGFyZ2V0IDogdGhpcztcbiAgICB9XG4gICAgc2V0IHNjcm9sbFRhcmdldChlbGVtZW50KSB7XG4gICAgICBpZiAoJ3Njcm9sbFRhcmdldCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2Nyb2xsVGFyZ2V0ID0gZWxlbWVudDsgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFNlbGVjdGlvbkluVmlldztcbn07XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gdG8gY3JlYXRlIHJlZmVyZW5jZXMgdG8gZWxlbWVudHMgaW4gYSBjb21wb25lbnQncyBTaGFkb3cgRE9NIHN1YnRyZWUuXG4gICAqXG4gICAqIFRoaXMgYWRkcyBhIG1lbWJlciBvbiB0aGUgY29tcG9uZW50IGNhbGxlZCBgdGhpcy4kYCB0aGF0IGNhbiBiZSB1c2VkIHRvXG4gICAqIHJlZmVyZW5jZSBzaGFkb3cgZWxlbWVudHMgd2l0aCBJRHMuIEUuZy4sIGlmIGNvbXBvbmVudCdzIHNoYWRvdyBjb250YWlucyBhblxuICAgKiBlbGVtZW50IGA8YnV0dG9uIGlkPVwiZm9vXCI+YCwgdGhlbiB0aGlzIG1peGluIHdpbGwgY3JlYXRlIGEgbWVtYmVyXG4gICAqIGB0aGlzLiQuZm9vYCB0aGF0IHBvaW50cyB0byB0aGF0IGJ1dHRvbi5cbiAgICpcbiAgICogU3VjaCByZWZlcmVuY2VzIHNpbXBsaWZ5IGEgY29tcG9uZW50J3MgYWNjZXNzIHRvIGl0cyBvd24gZWxlbWVudHMuIEluXG4gICAqIGV4Y2hhbmdlLCB0aGlzIG1peGluIHRyYWRlcyBvZmYgYSBvbmUtdGltZSBjb3N0IG9mIHF1ZXJ5aW5nIGFsbCBlbGVtZW50cyBpblxuICAgKiB0aGUgc2hhZG93IHRyZWUgaW5zdGVhZCBvZiBwYXlpbmcgYW4gb25nb2luZyBjb3N0IHRvIHF1ZXJ5IGZvciBhbiBlbGVtZW50XG4gICAqIGVhY2ggdGltZSB0aGUgY29tcG9uZW50IHdhbnRzIHRvIGluc3BlY3Qgb3IgbWFuaXB1bGF0ZSBpdC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIHRoZSBjb21wb25lbnQgdG8gZGVmaW5lIGEgU2hhZG93IERPTSBzdWJ0cmVlLiBZb3UgY2FuXG4gICAqIGNyZWF0ZSB0aGF0IHRyZWUgeW91cnNlbGYsIG9yIG1ha2UgdXNlIG9mIHRoZVxuICAgKiBbU2hhZG93VGVtcGxhdGVdKFNoYWRvd1RlbXBsYXRlLm1kKSBtaXhpbi5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBpcyBpbnNwaXJlZCBieSBQb2x5bWVyJ3MgW2F1dG9tYXRpY1xuICAgKiBub2RlIGZpbmRpbmddKGh0dHBzOi8vd3d3LnBvbHltZXItcHJvamVjdC5vcmcvMS4wL2RvY3MvZGV2Z3VpZGUvbG9jYWwtZG9tLmh0bWwjbm9kZS1maW5kaW5nKVxuICAgKiBmZWF0dXJlLlxuICAgKi9cbiAgY2xhc3MgU2hhZG93RWxlbWVudFJlZmVyZW5jZXMgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIGlmICh0aGlzLnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgLy8gTG9vayBmb3IgZWxlbWVudHMgaW4gdGhlIHNoYWRvdyBzdWJ0cmVlIHRoYXQgaGF2ZSBpZCBhdHRyaWJ1dGVzLlxuICAgICAgICAvLyBBbiBhbHRlcm5hdGl2ZWx5IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWl4aW4gd291bGQgYmUgdG8ganVzdCBkZWZpbmVcbiAgICAgICAgLy8gYSB0aGlzLiQgZ2V0dGVyIHRoYXQgbGF6aWx5IGRvZXMgdGhpcyBzZWFyY2ggdGhlIGZpcnN0IHRpbWUgc29tZW9uZVxuICAgICAgICAvLyB0cmllcyB0byBhY2Nlc3MgdGhpcy4kLiBUaGF0IG1pZ2h0IGludHJvZHVjZSBzb21lIGNvbXBsZXhpdHkg4oCTIGlmIHRoZVxuICAgICAgICAvLyB0aGUgdHJlZSBjaGFuZ2VkIGFmdGVyIGl0IHdhcyBmaXJzdCBwb3B1bGF0ZWQsIHRoZSByZXN1bHQgb2ZcbiAgICAgICAgLy8gc2VhcmNoaW5nIGZvciBhIG5vZGUgbWlnaHQgYmUgc29tZXdoYXQgdW5wcmVkaWN0YWJsZS5cbiAgICAgICAgdGhpcy4kID0ge307XG4gICAgICAgIGxldCBub2Rlc1dpdGhJZHMgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbCgnW2lkXScpO1xuICAgICAgICBbXS5mb3JFYWNoLmNhbGwobm9kZXNXaXRoSWRzLCBub2RlID0+IHtcbiAgICAgICAgICBsZXQgaWQgPSBub2RlLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgICB0aGlzLiRbaWRdID0gbm9kZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbGxlY3Rpb24gb2YgcmVmZXJlbmNlcyB0byB0aGUgZWxlbWVudHMgd2l0aCBJRHMgaW4gYSBjb21wb25lbnQnc1xuICAgICAqIFNoYWRvdyBET00gc3VidHJlZS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQG1lbWJlciAkXG4gICAgICovXG4gIH1cblxuICByZXR1cm4gU2hhZG93RWxlbWVudFJlZmVyZW5jZXM7XG59O1xuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTaGFkb3dUZW1wbGF0ZS4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIGZvciBzdGFtcGluZyBhIHRlbXBsYXRlIGludG8gYSBTaGFkb3cgRE9NIHN1YnRyZWUgdXBvbiBjb21wb25lbnRcbiAgICogaW5zdGFudGlhdGlvbi5cbiAgICpcbiAgICogVG8gdXNlIHRoaXMgbWl4aW4sIGRlZmluZSBhIGB0ZW1wbGF0ZWAgcHJvcGVydHkgYXMgYSBzdHJpbmcgb3IgSFRNTFxuICAgKiBgPHRlbXBsYXRlPmAgZWxlbWVudDpcbiAgICpcbiAgICogICAgIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIFNoYWRvd1RlbXBsYXRlKEhUTUxFbGVtZW50KSB7XG4gICAqICAgICAgIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICogICAgICAgICByZXR1cm4gYEhlbGxvLCA8ZW0+d29ybGQ8L2VtPi5gO1xuICAgKiAgICAgICB9XG4gICAqICAgICB9XG4gICAqXG4gICAqIFdoZW4geW91ciBjb21wb25lbnQgY2xhc3MgaXMgaW5zdGFudGlhdGVkLCBhIHNoYWRvdyByb290IHdpbGwgYmUgY3JlYXRlZCBvblxuICAgKiB0aGUgaW5zdGFuY2UsIGFuZCB0aGUgY29udGVudHMgb2YgdGhlIHRlbXBsYXRlIHdpbGwgYmUgY2xvbmVkIGludG8gdGhlXG4gICAqIHNoYWRvdyByb290LiBJZiB5b3VyIGNvbXBvbmVudCBkb2VzIG5vdCBkZWZpbmUgYSBgdGVtcGxhdGVgIHByb3BlcnR5LCB0aGlzXG4gICAqIG1peGluIGhhcyBubyBlZmZlY3QuXG4gICAqXG4gICAqIEZvciB0aGUgdGltZSBiZWluZywgdGhpcyBleHRlbnNpb24gcmV0YWlucyBzdXBwb3J0IGZvciBTaGFkb3cgRE9NIHYwLiBUaGF0XG4gICAqIHdpbGwgZXZlbnR1YWxseSBiZSBkZXByZWNhdGVkIGFzIGJyb3dzZXJzIChhbmQgdGhlIFNoYWRvdyBET00gcG9seWZpbGwpXG4gICAqIGltcGxlbWVudCBTaGFkb3cgRE9NIHYxLlxuICAgKi9cbiAgY2xhc3MgU2hhZG93VGVtcGxhdGUgZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qXG4gICAgICogSWYgdGhlIGNvbXBvbmVudCBkZWZpbmVzIGEgdGVtcGxhdGUsIGEgc2hhZG93IHJvb3Qgd2lsbCBiZSBjcmVhdGVkIG9uIHRoZVxuICAgICAqIGNvbXBvbmVudCBpbnN0YW5jZSwgYW5kIHRoZSB0ZW1wbGF0ZSBzdGFtcGVkIGludG8gaXQuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgbGV0IHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZTtcbiAgICAgIC8vIFRPRE86IFNhdmUgdGhlIHByb2Nlc3NlZCB0ZW1wbGF0ZSB3aXRoIHRoZSBjb21wb25lbnQncyBjbGFzcyBwcm90b3R5cGVcbiAgICAgIC8vIHNvIGl0IGRvZXNuJ3QgbmVlZCB0byBiZSBwcm9jZXNzZWQgd2l0aCBldmVyeSBpbnN0YW50aWF0aW9uLlxuICAgICAgaWYgKHRlbXBsYXRlKSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAvLyBVcGdyYWRlIHBsYWluIHN0cmluZyB0byByZWFsIHRlbXBsYXRlLlxuICAgICAgICAgIHRlbXBsYXRlID0gY3JlYXRlVGVtcGxhdGVXaXRoSW5uZXJIVE1MKHRlbXBsYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3aW5kb3cuU2hhZG93RE9NUG9seWZpbGwpIHtcbiAgICAgICAgICBzaGltVGVtcGxhdGVTdHlsZXModGVtcGxhdGUsIHRoaXMubG9jYWxOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgICAgIGxldCBjbG9uZSA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUuY29udGVudCwgdHJ1ZSk7XG4gICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFNoYWRvd1RlbXBsYXRlO1xufTtcblxuXG4vLyBDb252ZXJ0IGEgcGxhaW4gc3RyaW5nIG9mIEhUTUwgaW50byBhIHJlYWwgdGVtcGxhdGUgZWxlbWVudC5cbmZ1bmN0aW9uIGNyZWF0ZVRlbXBsYXRlV2l0aElubmVySFRNTChpbm5lckhUTUwpIHtcbiAgbGV0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgLy8gUkVWSUVXOiBJcyB0aGVyZSBhbiBlYXNpZXIgd2F5IHRvIGRvIHRoaXM/XG4gIC8vIFdlJ2QgbGlrZSB0byBqdXN0IHNldCBpbm5lckhUTUwgb24gdGhlIHRlbXBsYXRlIGNvbnRlbnQsIGJ1dCBzaW5jZSBpdCdzXG4gIC8vIGEgRG9jdW1lbnRGcmFnbWVudCwgdGhhdCBkb2Vzbid0IHdvcmsuXG4gIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgd2hpbGUgKGRpdi5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICB0ZW1wbGF0ZS5jb250ZW50LmFwcGVuZENoaWxkKGRpdi5jaGlsZE5vZGVzWzBdKTtcbiAgfVxuICByZXR1cm4gdGVtcGxhdGU7XG59XG5cbi8vIEludm9rZSBiYXNpYyBzdHlsZSBzaGltbWluZyB3aXRoIFNoYWRvd0NTUy5cbmZ1bmN0aW9uIHNoaW1UZW1wbGF0ZVN0eWxlcyh0ZW1wbGF0ZSwgdGFnKSB7XG4gIHdpbmRvdy5XZWJDb21wb25lbnRzLlNoYWRvd0NTUy5zaGltU3R5bGluZyh0ZW1wbGF0ZS5jb250ZW50LCB0YWcpO1xufVxuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5pbXBvcnQgbWljcm90YXNrIGZyb20gJy4vbWljcm90YXNrJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgY2FuU2VsZWN0TmV4dFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnY2FuU2VsZWN0TmV4dCcpO1xuY29uc3QgY2FuU2VsZWN0UHJldmlvdXNTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2NhblNlbGVjdFByZXZpb3VzJyk7XG5jb25zdCBzZWxlY3RlZEl0ZW1TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3NlbGVjdGVkSXRlbScpO1xuY29uc3Qgc2VsZWN0aW9uUmVxdWlyZWRTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3NlbGVjdGlvblJlcXVpcmVkJyk7XG5jb25zdCBzZWxlY3Rpb25XcmFwc1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc2VsZWN0aW9uV3JhcHMnKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNpbmdsZVNlbGVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hbmFnZXMgc2luZ2xlLXNlbGVjdGlvbiBzZW1hbnRpY3MgZm9yIGl0ZW1zIGluIGEgbGlzdC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGEgY29tcG9uZW50IHRvIHByb3ZpZGUgYW4gYGl0ZW1zYCBhcnJheSBvZiBhbGwgZWxlbWVudHNcbiAgICogaW4gdGhlIGxpc3QuIEEgc3RhbmRhcmQgd2F5IHRvIGRvIHRoYXQgd2l0aCBpcyB0aGVcbiAgICogW0NvbnRlbnRBc0l0ZW1zXShDb250ZW50QXNJdGVtcy5tZCkgbWl4aW4sIHdoaWNoIHRha2VzIGEgY29tcG9uZW50J3NcbiAgICogY29udGVudCAodHlwaWNhbGx5IGl0cyBkaXN0cmlidXRlZCBjaGlsZHJlbikgYXMgdGhlIHNldCBvZiBsaXN0IGl0ZW1zOyBzZWVcbiAgICogdGhhdCBtaXhpbiBmb3IgZGV0YWlscy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiB0cmFja3MgYSBzaW5nbGUgc2VsZWN0ZWQgaXRlbSBpbiB0aGUgbGlzdCwgYW5kIHByb3ZpZGVzIG1lYW5zIHRvXG4gICAqIGdldCBhbmQgc2V0IHRoYXQgc3RhdGUgYnkgaXRlbSBwb3NpdGlvbiAoYHNlbGVjdGVkSW5kZXhgKSBvciBpdGVtIGlkZW50aXR5XG4gICAqIChgc2VsZWN0ZWRJdGVtYCkuIFRoZSBzZWxlY3Rpb24gY2FuIGJlIG1vdmVkIGluIHRoZSBsaXN0IHZpYSB0aGUgbWV0aG9kc1xuICAgKiBgc2VsZWN0Rmlyc3RgLCBgc2VsZWN0TGFzdGAsIGBzZWxlY3ROZXh0YCwgYW5kIGBzZWxlY3RQcmV2aW91c2AuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZG9lcyBub3QgcHJvZHVjZSBhbnkgdXNlci12aXNpYmxlIGVmZmVjdHMgdG8gcmVwcmVzZW50XG4gICAqIHNlbGVjdGlvbi4gT3RoZXIgbWl4aW5zLCBzdWNoIGFzXG4gICAqIFtTZWxlY3Rpb25BcmlhQWN0aXZlXShTZWxlY3Rpb25BcmlhQWN0aXZlLm1kKSxcbiAgICogW1NlbGVjdGlvbkhpZ2hsaWdodF0oU2VsZWN0aW9uSGlnaGxpZ2h0Lm1kKSBhbmRcbiAgICogW1NlbGVjdGlvbkluVmlld10oU2VsZWN0aW9uSW5WaWV3Lm1kKSwgbW9kaWZ5IHRoZSBzZWxlY3RlZCBpdGVtIGluIGNvbW1vblxuICAgKiB3YXlzIHRvIGxldCB0aGUgdXNlciBrbm93IGEgZ2l2ZW4gaXRlbSBpcyBzZWxlY3RlZCBvciBub3Qgc2VsZWN0ZWQuXG4gICAqL1xuICBjbGFzcyBTaW5nbGVTZWxlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIC8vIFNldCBkZWZhdWx0cy5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5zZWxlY3Rpb25SZXF1aXJlZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25SZXF1aXJlZCA9IHRoaXMuZGVmYXVsdHMuc2VsZWN0aW9uUmVxdWlyZWQ7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHRoaXMuc2VsZWN0aW9uV3JhcHMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uV3JhcHMgPSB0aGlzLmRlZmF1bHRzLnNlbGVjdGlvbldyYXBzO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGx5IHRoZSBpbmRpY2F0ZSBzZWxlY3Rpb24gc3RhdGUgdG8gdGhlIGl0ZW0uXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuIFVzZXItdmlzaWJsZVxuICAgICAqIGVmZmVjdHMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gdGhlIGl0ZW0gYmVpbmcgc2VsZWN0ZWQvZGVzZWxlY3RlZFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2VsZWN0ZWQgLSB0cnVlIGlmIHRoZSBpdGVtIGlzIHNlbGVjdGVkLCBmYWxzZSBpZiBub3RcbiAgICAgKi9cbiAgICBhcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCkge1xuICAgICAgaWYgKHN1cGVyLmFwcGx5U2VsZWN0aW9uKSB7IHN1cGVyLmFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIHNlbGVjdGlvbiBjYW4gYmUgbW92ZWQgdG8gdGhlIG5leHQgaXRlbSwgZmFsc2UgaWYgbm90ICh0aGVcbiAgICAgKiBzZWxlY3RlZCBpdGVtIGlzIHRoZSBsYXN0IGl0ZW0gaW4gdGhlIGxpc3QpLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgZ2V0IGNhblNlbGVjdE5leHQoKSB7XG4gICAgICByZXR1cm4gdGhpc1tjYW5TZWxlY3ROZXh0U3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IGNhblNlbGVjdE5leHQoY2FuU2VsZWN0TmV4dCkge1xuICAgICAgdGhpc1tjYW5TZWxlY3ROZXh0U3ltYm9sXSA9IGNhblNlbGVjdE5leHQ7XG4gICAgICBpZiAoJ2NhblNlbGVjdE5leHQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmNhblNlbGVjdE5leHQgPSBjYW5TZWxlY3ROZXh0OyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgc2VsZWN0aW9uIGNhbiBiZSBtb3ZlZCB0byB0aGUgcHJldmlvdXMgaXRlbSwgZmFsc2UgaWYgbm90XG4gICAgICogKHRoZSBzZWxlY3RlZCBpdGVtIGlzIHRoZSBmaXJzdCBvbmUgaW4gdGhlIGxpc3QpLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgZ2V0IGNhblNlbGVjdFByZXZpb3VzKCkge1xuICAgICAgcmV0dXJuIHRoaXNbY2FuU2VsZWN0UHJldmlvdXNTeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgY2FuU2VsZWN0UHJldmlvdXMoY2FuU2VsZWN0UHJldmlvdXMpIHtcbiAgICAgIHRoaXNbY2FuU2VsZWN0UHJldmlvdXNTeW1ib2xdID0gY2FuU2VsZWN0UHJldmlvdXM7XG4gICAgICBpZiAoJ2NhblNlbGVjdFByZXZpb3VzJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5jYW5TZWxlY3RQcmV2aW91cyA9IGNhblNlbGVjdFByZXZpb3VzOyB9XG4gICAgfVxuXG4gICAgZ2V0IGRlZmF1bHRzKCkge1xuICAgICAgbGV0IGRlZmF1bHRzID0gc3VwZXIuZGVmYXVsdHMgfHwge307XG4gICAgICBkZWZhdWx0cy5zZWxlY3Rpb25SZXF1aXJlZCA9IGZhbHNlO1xuICAgICAgZGVmYXVsdHMuc2VsZWN0aW9uV3JhcHMgPSBmYWxzZTtcbiAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgYSBuZXcgaXRlbSBiZWluZyBhZGRlZCB0byB0aGUgbGlzdC5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIHNpbXBseSBzZXRzIHRoZSBpdGVtJ3NcbiAgICAgKiBzZWxlY3Rpb24gc3RhdGUgdG8gZmFsc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gdGhlIGl0ZW0gYmVpbmcgYWRkZWRcbiAgICAgKi9cbiAgICBpdGVtQWRkZWQoaXRlbSkge1xuICAgICAgaWYgKHN1cGVyLml0ZW1BZGRlZCkgeyBzdXBlci5pdGVtQWRkZWQoaXRlbSk7IH1cbiAgICAgIHRoaXMuYXBwbHlTZWxlY3Rpb24oaXRlbSwgaXRlbSA9PT0gdGhpcy5zZWxlY3RlZEl0ZW0pO1xuICAgIH1cblxuICAgIGl0ZW1zQ2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5pdGVtc0NoYW5nZWQpIHsgc3VwZXIuaXRlbXNDaGFuZ2VkKCk7IH1cblxuICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uUmVxdWlyZWQpIHtcbiAgICAgICAgLy8gRW5zdXJlIHNlbGVjdGlvbiwgYnV0IGRvIHRoaXMgaW4gdGhlIG5leHQgdGljayB0byBnaXZlIG90aGVyIG1peGlucyBhXG4gICAgICAgIC8vIGNoYW5jZSB0byBkbyB0aGVpciBvd24gaXRlbXNDaGFuZ2VkIHdvcmsuXG4gICAgICAgIG1pY3JvdGFzaygoKSA9PiB7XG4gICAgICAgICAgZW5zdXJlU2VsZWN0aW9uKHRoaXMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNoYW5nZSBpbiBpdGVtcyBtYXkgaGF2ZSBhZmZlY3RlZCB3aGljaCBuYXZpZ2F0aW9ucyBhcmUgcG9zc2libGUuXG4gICAgICB1cGRhdGVQb3NzaWJsZU5hdmlnYXRpb25zKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBpbmRleCBvZiB0aGUgaXRlbSB3aGljaCBpcyBjdXJyZW50bHkgc2VsZWN0ZWQuXG4gICAgICpcbiAgICAgKiBJZiBgc2VsZWN0aW9uV3JhcHNgIGlzIGZhbHNlLCB0aGUgaW5kZXggaXMgLTEgaWYgdGhlcmUgaXMgbm8gc2VsZWN0aW9uLlxuICAgICAqIEluIHRoYXQgY2FzZSwgc2V0dGluZyB0aGUgaW5kZXggdG8gLTEgd2lsbCBkZXNlbGVjdCBhbnlcbiAgICAgKiBjdXJyZW50bHktc2VsZWN0ZWQgaXRlbS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGVkSW5kZXgoKSB7XG4gICAgICBsZXQgc2VsZWN0ZWRJdGVtID0gdGhpcy5zZWxlY3RlZEl0ZW07XG5cbiAgICAgIC8vIFRPRE86IElmIHNlbGVjdGlvbiB3YXNuJ3QgZm91bmQsIG1vc3QgbGlrZWx5IGNhdXNlIGlzIHRoYXQgdGhlIERPTSB3YXNcbiAgICAgIC8vIG1hbmlwdWxhdGVkIGZyb20gdW5kZXJuZWF0aCB1cy4gT25jZSB3ZSB0cmFjayBjb250ZW50IGNoYW5nZXMsIHR1cm5cbiAgICAgIC8vIHRoaXMgaW50byBhIHdhcm5pbmcuXG4gICAgICAvLyBUT0RPOiBNZW1vaXplXG4gICAgICByZXR1cm4gc2VsZWN0ZWRJdGVtID9cbiAgICAgICAgdGhpcy5pdGVtcy5pbmRleE9mKHNlbGVjdGVkSXRlbSkgOlxuICAgICAgICAtMTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkSW5kZXgoaW5kZXgpIHtcbiAgICAgIC8vIFRPRE86IFB1bGwgc2V0dGluZyBvZiBzZWxlY3RlZEl0ZW0gYWJvdmUgc3VwZXIoKSBjYWxsLiAqL1xuICAgICAgaWYgKCdzZWxlY3RlZEluZGV4JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEluZGV4ID0gaW5kZXg7IH1cbiAgICAgIGxldCBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgICBsZXQgaXRlbTtcbiAgICAgIGlmIChpbmRleCA8IDAgfHwgaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGl0ZW0gPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbSA9IGl0ZW1zW2luZGV4XTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcblxuICAgICAgbGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdzZWxlY3RlZC1pbmRleC1jaGFuZ2VkJywge1xuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICBzZWxlY3RlZEluZGV4OiBpbmRleCxcbiAgICAgICAgICB2YWx1ZTogaW5kZXggLy8gZm9yIFBvbHltZXIgYmluZGluZ1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtLCBvciBudWxsIGlmIHRoZXJlIGlzIG5vIHNlbGVjdGlvbi5cbiAgICAgKlxuICAgICAqIFNldHRpbmcgdGhpcyBwcm9wZXJ0eSB0byBudWxsIGRlc2VsZWN0cyBhbnkgY3VycmVudGx5LXNlbGVjdGVkIGl0ZW0uXG4gICAgICpcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgICByZXR1cm4gdGhpc1tzZWxlY3RlZEl0ZW1TeW1ib2xdIHx8IG51bGw7XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEl0ZW0oaXRlbSkge1xuICAgICAgbGV0IHByZXZpb3VzSXRlbSA9IHRoaXNbc2VsZWN0ZWRJdGVtU3ltYm9sXTtcbiAgICAgIC8vIFRPRE86IENvbmZpcm0gaXRlbSBpcyBhY3R1YWxseSBpbiB0aGUgbGlzdCBiZWZvcmUgc2VsZWN0aW5nLlxuICAgICAgdGhpc1tzZWxlY3RlZEl0ZW1TeW1ib2xdID0gaXRlbTtcblxuICAgICAgaWYgKCdzZWxlY3RlZEl0ZW0nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSXRlbSA9IGl0ZW07IH1cbiAgICAgIGlmIChwcmV2aW91c0l0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0gPT09IHByZXZpb3VzSXRlbSkge1xuICAgICAgICAgIC8vIFRoZSBpbmRpY2F0ZWQgaXRlbSBpcyBhbHJlYWR5IHRoZSBzZWxlY3RlZCBpdGVtLlxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZW1vdmUgcHJldmlvdXMgc2VsZWN0aW9uLlxuICAgICAgICB0aGlzLmFwcGx5U2VsZWN0aW9uKHByZXZpb3VzSXRlbSwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICB0aGlzLmFwcGx5U2VsZWN0aW9uKGl0ZW0sIHRydWUpO1xuICAgICAgfVxuXG4gICAgICAvLyBUT0RPOiBSYXRpb25hbGl6ZSB3aXRoIHNlbGVjdGVkSW5kZXggc28gd2UncmUgbm90IHJlY2FsY3VsYXRpbmcgaXRlbVxuICAgICAgLy8gb3IgaW5kZXggaW4gZWFjaCBzZXR0ZXIuXG4gICAgICB1cGRhdGVQb3NzaWJsZU5hdmlnYXRpb25zKHRoaXMpO1xuXG4gICAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3NlbGVjdGVkLWl0ZW0tY2hhbmdlZCcsIHtcbiAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgc2VsZWN0ZWRJdGVtOiBpdGVtLFxuICAgICAgICAgIHByZXZpb3VzSXRlbTogcHJldmlvdXNJdGVtLFxuICAgICAgICAgIHZhbHVlOiBpdGVtIC8vIGZvciBQb2x5bWVyIGJpbmRpbmdcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCB0aGUgZmlyc3QgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBzZWxlY3RGaXJzdCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RGaXJzdCkgeyBzdXBlci5zZWxlY3RGaXJzdCgpOyB9XG4gICAgICByZXR1cm4gc2VsZWN0SW5kZXgodGhpcywgMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgbGlzdCBzaG91bGQgYWx3YXlzIGhhdmUgYSBzZWxlY3Rpb24gKGlmIGl0IGhhcyBpdGVtcykuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIGdldCBzZWxlY3Rpb25SZXF1aXJlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzW3NlbGVjdGlvblJlcXVpcmVkU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGlvblJlcXVpcmVkKHNlbGVjdGlvblJlcXVpcmVkKSB7XG4gICAgICB0aGlzW3NlbGVjdGlvblJlcXVpcmVkU3ltYm9sXSA9IHNlbGVjdGlvblJlcXVpcmVkO1xuICAgICAgaWYgKCdzZWxlY3Rpb25SZXF1aXJlZCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0aW9uUmVxdWlyZWQgPSBzZWxlY3Rpb25SZXF1aXJlZDsgfVxuICAgICAgaWYgKHNlbGVjdGlvblJlcXVpcmVkKSB7XG4gICAgICAgIGVuc3VyZVNlbGVjdGlvbih0aGlzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgdGhlIGxhc3QgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBzZWxlY3RMYXN0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdExhc3QpIHsgc3VwZXIuc2VsZWN0TGFzdCgpOyB9XG4gICAgICByZXR1cm4gc2VsZWN0SW5kZXgodGhpcywgdGhpcy5pdGVtcy5sZW5ndGggLSAxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgdGhlIG5leHQgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBzZWxlY3ROZXh0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdE5leHQpIHsgc3VwZXIuc2VsZWN0TmV4dCgpOyB9XG4gICAgICByZXR1cm4gc2VsZWN0SW5kZXgodGhpcywgdGhpcy5zZWxlY3RlZEluZGV4ICsgMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBwcmV2aW91cyBpdGVtIGluIHRoZSBsaXN0LlxuICAgICAqXG4gICAgICogSWYgdGhlIGxpc3QgaGFzIG5vIHNlbGVjdGlvbiwgdGhlIGxhc3QgaXRlbSB3aWxsIGJlIHNlbGVjdGVkLlxuICAgICAqL1xuICAgIHNlbGVjdFByZXZpb3VzKCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdFByZXZpb3VzKSB7IHN1cGVyLnNlbGVjdFByZXZpb3VzKCk7IH1cbiAgICAgIGxldCBuZXdJbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleCA8IDAgP1xuICAgICAgICB0aGlzLml0ZW1zLmxlbmd0aCAtIDEgOiAgICAgLy8gTm8gc2VsZWN0aW9uIHlldDsgc2VsZWN0IGxhc3QgaXRlbS5cbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4IC0gMTtcbiAgICAgIHJldHVybiBzZWxlY3RJbmRleCh0aGlzLCBuZXdJbmRleCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiBzZWxlY3Rpb24gbmF2aWdhdGlvbnMgd3JhcCBmcm9tIGxhc3QgdG8gZmlyc3QsIGFuZCB2aWNlIHZlcnNhLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0aW9uV3JhcHMoKSB7XG4gICAgICByZXR1cm4gdGhpc1tzZWxlY3Rpb25XcmFwc1N5bWJvbF07XG4gICAgfVxuICAgIHNldCBzZWxlY3Rpb25XcmFwcyh2YWx1ZSkge1xuICAgICAgdGhpc1tzZWxlY3Rpb25XcmFwc1N5bWJvbF0gPSBTdHJpbmcodmFsdWUpID09PSAndHJ1ZSc7XG4gICAgICBpZiAoJ3NlbGVjdGlvbldyYXBzJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3Rpb25XcmFwcyA9IHZhbHVlOyB9XG4gICAgICB1cGRhdGVQb3NzaWJsZU5hdmlnYXRpb25zKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpcmVzIHdoZW4gdGhlIHNlbGVjdGVkSXRlbSBwcm9wZXJ0eSBjaGFuZ2VzLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIFNpbmdsZVNlbGVjdGlvblxuICAgICAqIEBldmVudCBzZWxlY3RlZC1pdGVtLWNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBkZXRhaWwuc2VsZWN0ZWRJdGVtIFRoZSBuZXcgc2VsZWN0ZWQgaXRlbS5cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBkZXRhaWwucHJldmlvdXNJdGVtIFRoZSBwcmV2aW91c2x5IHNlbGVjdGVkIGl0ZW0uXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyB3aGVuIHRoZSBzZWxlY3RlZEluZGV4IHByb3BlcnR5IGNoYW5nZXMuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgU2luZ2xlU2VsZWN0aW9uXG4gICAgICogQGV2ZW50IHNlbGVjdGVkLWluZGV4LWNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGV0YWlsLnNlbGVjdGVkSW5kZXggVGhlIG5ldyBzZWxlY3RlZCBpbmRleC5cbiAgICAgKi9cblxuICB9XG5cbiAgcmV0dXJuIFNpbmdsZVNlbGVjdGlvbjtcbn07XG5cblxuLy8gSWYgbm8gaXRlbSBpcyBzZWxlY3RlZCwgc2VsZWN0IGEgZGVmYXVsdCBpdGVtLlxuZnVuY3Rpb24gZW5zdXJlU2VsZWN0aW9uKGVsZW1lbnQpIHtcbiAgbGV0IGluZGV4ID0gZWxlbWVudC5zZWxlY3RlZEluZGV4O1xuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgLy8gU2VsZWN0ZWQgaXRlbSBpcyBubyBsb25nZXIgaW4gdGhlIGN1cnJlbnQgc2V0IG9mIGl0ZW1zLlxuICAgIGlmIChlbGVtZW50Lml0ZW1zICYmIGVsZW1lbnQuaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgLy8gU2VsZWN0IHRoZSBmaXJzdCBpdGVtLlxuICAgICAgLy8gVE9ETzogSWYgdGhlIHByZXZpb3VzbHktc2VsZWN0ZWQgaXRlbSBoYXMgYmVlbiBkZWxldGVkLCB0cnkgdG8gc2VsZWN0XG4gICAgICAvLyBhbiBpdGVtIGFkamFjZW50IHRvIHRoZSBwb3NpdGlvbiBpdCBoZWxkLlxuICAgICAgZWxlbWVudC5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTm8gaXRlbXMgZm9yIHVzIHRvIHNlbGVjdCwgYnV0IHdlIGNhbiBhdCBsZWFzdCBzaWduYWwgdGhhdCB0aGVyZSdzIG5vXG4gICAgICAvLyBsb25nZXIgYSBzZWxlY3Rpb24uXG4gICAgICBlbGVtZW50LnNlbGVjdGVkSXRlbSA9IG51bGw7XG4gICAgfVxuICB9XG59XG5cbi8vIEVuc3VyZSB0aGUgZ2l2ZW4gaW5kZXggaXMgd2l0aGluIGJvdW5kcywgYW5kIHNlbGVjdCBpdCBpZiBpdCdzIG5vdCBhbHJlYWR5XG4vLyBzZWxlY3RlZC5cbmZ1bmN0aW9uIHNlbGVjdEluZGV4KGVsZW1lbnQsIGluZGV4KSB7XG4gIGxldCBjb3VudCA9IGVsZW1lbnQuaXRlbXMubGVuZ3RoO1xuICBsZXQgYm91bmRlZEluZGV4O1xuICBpZiAoZWxlbWVudC5zZWxlY3Rpb25XcmFwcykge1xuICAgIC8vIEphdmFTY3JpcHQgbW9kIGRvZXNuJ3QgaGFuZGxlIG5lZ2F0aXZlIG51bWJlcnMgdGhlIHdheSB3ZSB3YW50IHRvIHdyYXAuXG4gICAgLy8gU2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE4NjE4MjUwLzc2NDcyXG4gICAgYm91bmRlZEluZGV4ID0gKChpbmRleCAlIGNvdW50KSArIGNvdW50KSAlIGNvdW50O1xuICB9IGVsc2Uge1xuICAgIC8vIEtlZXAgaW5kZXggd2l0aGluIGJvdW5kcyBvZiBhcnJheS5cbiAgICBib3VuZGVkSW5kZXggPSBNYXRoLm1heChNYXRoLm1pbihpbmRleCwgY291bnQgLSAxKSwgMCk7XG4gIH1cbiAgbGV0IHByZXZpb3VzSW5kZXggPSBlbGVtZW50LnNlbGVjdGVkSW5kZXg7XG4gIGlmIChwcmV2aW91c0luZGV4ICE9PSBib3VuZGVkSW5kZXgpIHtcbiAgICBlbGVtZW50LnNlbGVjdGVkSW5kZXggPSBib3VuZGVkSW5kZXg7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8vIEZvbGxvd2luZyBhIGNoYW5nZSBpbiBzZWxlY3Rpb24sIHJlcG9ydCB3aGV0aGVyIGl0J3Mgbm93IHBvc3NpYmxlIHRvXG4vLyBnbyBuZXh0L3ByZXZpb3VzIGZyb20gdGhlIGdpdmVuIGluZGV4LlxuZnVuY3Rpb24gdXBkYXRlUG9zc2libGVOYXZpZ2F0aW9ucyhlbGVtZW50KSB7XG4gIGxldCBjYW5TZWxlY3ROZXh0O1xuICBsZXQgY2FuU2VsZWN0UHJldmlvdXM7XG4gIGxldCBpdGVtcyA9IGVsZW1lbnQuaXRlbXM7XG4gIGlmIChpdGVtcyA9PSBudWxsIHx8IGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgIC8vIE5vIGl0ZW1zIHRvIHNlbGVjdC5cbiAgICBjYW5TZWxlY3ROZXh0ID0gZmFsc2U7XG4gICAgY2FuU2VsZWN0UHJldmlvdXMgPSBmYWxzZTtcbiAgfSBpZiAoZWxlbWVudC5zZWxlY3Rpb25XcmFwcykge1xuICAgIC8vIFNpbmNlIHRoZXJlIGFyZSBpdGVtcywgY2FuIGFsd2F5cyBnbyBuZXh0L3ByZXZpb3VzLlxuICAgIGNhblNlbGVjdE5leHQgPSB0cnVlO1xuICAgIGNhblNlbGVjdFByZXZpb3VzID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgaW5kZXggPSBlbGVtZW50LnNlbGVjdGVkSW5kZXg7XG4gICAgaWYgKGluZGV4IDwgMCAmJiBpdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBTcGVjaWFsIGNhc2UuIElmIHRoZXJlIGFyZSBpdGVtcyBidXQgbm8gc2VsZWN0aW9uLCBkZWNsYXJlIHRoYXQgaXQnc1xuICAgICAgLy8gYWx3YXlzIHBvc3NpYmxlIHRvIGdvIG5leHQvcHJldmlvdXMgdG8gY3JlYXRlIGEgc2VsZWN0aW9uLlxuICAgICAgY2FuU2VsZWN0TmV4dCA9IHRydWU7XG4gICAgICBjYW5TZWxlY3RQcmV2aW91cyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5vcm1hbCBjYXNlOiB3ZSBoYXZlIGFuIGluZGV4IGluIGEgbGlzdCB0aGF0IGhhcyBpdGVtcy5cbiAgICAgIGNhblNlbGVjdFByZXZpb3VzID0gKGluZGV4ID4gMCk7XG4gICAgICBjYW5TZWxlY3ROZXh0ID0gKGluZGV4IDwgaXRlbXMubGVuZ3RoIC0gMSk7XG4gICAgfVxuICB9XG4gIGVsZW1lbnQuY2FuU2VsZWN0TmV4dCA9IGNhblNlbGVjdE5leHQ7XG4gIGVsZW1lbnQuY2FuU2VsZWN0UHJldmlvdXMgPSBjYW5TZWxlY3RQcmV2aW91cztcbn1cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBkZWx0YVhTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2RlbHRhWCcpO1xuY29uc3QgZGVsdGFZU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdkZWx0YVknKTtcbmNvbnN0IG11bHRpVG91Y2hTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ211bHRpVG91Y2gnKTtcbmNvbnN0IHByZXZpb3VzWFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgncHJldmlvdXNYJyk7XG5jb25zdCBwcmV2aW91c1lTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3ByZXZpb3VzWScpO1xuY29uc3Qgc3RhcnRYU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzdGFydFgnKTtcbmNvbnN0IHRyYXZlbEZyYWN0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCd0cmF2ZWxGcmFjdGlvbicpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggU3dpcGVEaXJlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYXBzIHRvdWNoIGdlc3R1cmVzIChzd2lwZSBsZWZ0LCBzd2lwZSByaWdodCkgdG8gZGlyZWN0aW9uXG4gICAqIHNlbWFudGljcyAoZ28gcmlnaHQsIGdvIGxlZnQpLlxuICAgKlxuICAgKiBCeSBkZWZhdWx0LCB0aGlzIG1peGluIHByZXNlbnRzIG5vIHVzZXItdmlzaWJsZSBlZmZlY3RzOyBpdCBqdXN0IGluZGljYXRlcyBhXG4gICAqIGRpcmVjdGlvbiBpbiB3aGljaCB0aGUgdXNlciBpcyBjdXJyZW50bHkgc3dpcGluZyBvciBoYXMgZmluaXNoZWQgc3dpcGluZy4gVG9cbiAgICogbWFwIHRoZSBkaXJlY3Rpb24gdG8gYSBjaGFuZ2UgaW4gc2VsZWN0aW9uLCB1c2UgdGhlXG4gICAqIFtEaXJlY3Rpb25TZWxlY3Rpb25dKERpcmVjdGlvblNlbGVjdGlvbi5tZCkgbWl4aW4uXG4gICAqL1xuICBjbGFzcyBTd2lwZURpcmVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuXG4gICAgICB0aGlzLnRyYXZlbEZyYWN0aW9uID0gMDtcblxuICAgICAgLy8gVE9ETzogVG91Y2ggZXZlbnRzIGNvdWxkIGJlIGZhY3RvcmVkIG91dCBpbnRvIGl0cyBvd24gbWl4aW4uXG5cbiAgICAgIC8vIEluIGFsbCB0b3VjaCBldmVudHMsIG9ubHkgaGFuZGxlIHNpbmdsZSB0b3VjaGVzLiBXZSBkb24ndCB3YW50IHRvXG4gICAgICAvLyBpbmFkdmVydGVudGx5IGRvIHdvcmsgd2hlbiB0aGUgdXNlcidzIHRyeWluZyB0byBwaW5jaC16b29tIGZvciBleGFtcGxlLlxuICAgICAgLy8gVE9ETzogRXZlbiBiZXR0ZXIgYXBwcm9hY2ggdGhhbiBiZWxvdyB3b3VsZCBiZSB0byBpZ25vcmUgdG91Y2hlcyBhZnRlclxuICAgICAgLy8gdGhlIGZpcnN0IGlmIHRoZSB1c2VyIGhhcyBhbHJlYWR5IGJlZ3VuIGEgc3dpcGUuXG4gICAgICBpZiAod2luZG93LlBvaW50ZXJFdmVudCkge1xuICAgICAgICAvLyBQcmVmZXIgbGlzdGVuaW5nIHRvIHN0YW5kYXJkIHBvaW50ZXIgZXZlbnRzLlxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmIChpc0V2ZW50Rm9yUGVuT3JQcmltYXJ5VG91Y2goZXZlbnQpKSB7XG4gICAgICAgICAgICB0b3VjaFN0YXJ0KHRoaXMsIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCBldmVudCA9PiB7XG4gICAgICAgICAgaWYgKGlzRXZlbnRGb3JQZW5PclByaW1hcnlUb3VjaChldmVudCkpIHtcbiAgICAgICAgICAgIGxldCBoYW5kbGVkID0gdG91Y2hNb3ZlKHRoaXMsIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgICAgICAgICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAoaXNFdmVudEZvclBlbk9yUHJpbWFyeVRvdWNoKGV2ZW50KSkge1xuICAgICAgICAgICAgdG91Y2hFbmQodGhpcywgZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFBvaW50ZXIgZXZlbnRzIG5vdCBzdXBwb3J0ZWQgLS0gbGlzdGVuIHRvIG9sZGVyIHRvdWNoIGV2ZW50cy5cbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmICh0aGlzW211bHRpVG91Y2hTeW1ib2xdKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSBlbHNlIGlmIChldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgbGV0IGNsaWVudFggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICAgICAgbGV0IGNsaWVudFkgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgICAgICAgdG91Y2hTdGFydCh0aGlzLCBjbGllbnRYLCBjbGllbnRZKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpc1ttdWx0aVRvdWNoU3ltYm9sXSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBldmVudCA9PiB7XG4gICAgICAgICAgaWYgKCF0aGlzW211bHRpVG91Y2hTeW1ib2xdICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBsZXQgY2xpZW50WCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgICAgICBsZXQgY2xpZW50WSA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICAgICAgICBsZXQgaGFuZGxlZCA9IHRvdWNoTW92ZSh0aGlzLCBjbGllbnRYLCBjbGllbnRZKTtcbiAgICAgICAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIEFsbCB0b3VjaGVzIHJlbW92ZWQ7IGdlc3R1cmUgaXMgY29tcGxldGUuXG4gICAgICAgICAgICBpZiAoIXRoaXNbbXVsdGlUb3VjaFN5bWJvbF0pIHtcbiAgICAgICAgICAgICAgLy8gU2luZ2xlLXRvdWNoIHN3aXBlIGhhcyBmaW5pc2hlZC5cbiAgICAgICAgICAgICAgbGV0IGNsaWVudFggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICAgICAgICBsZXQgY2xpZW50WSA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICAgICAgICAgIHRvdWNoRW5kKHRoaXMsIGNsaWVudFgsIGNsaWVudFkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpc1ttdWx0aVRvdWNoU3ltYm9sXSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2spIHsgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTsgfVxuXG4gICAgICAvLyBGb3IgdGhlIGNvbXBvbmVudCB0byByZWNlaXZlIFBvaW50ZXJFdmVudHMgaW4gSUUvRWRnZSwgd2UgbmVlZCB0byBzZXRcbiAgICAgIC8vIHRvdWNoLWFjdGlvbjogbm9uZS4gT25seSBtYWtlIHRoaXMgY2hhbmdlIGlmIHRvdWNoLWFjdGlvbiBpcyBjdXJyZW50bHlcbiAgICAgIC8vIHRoZSBkZWZhdWx0IHZhbHVlIChcImF1dG9cIiksIGluIGNhc2UgdGhlIGRldmVsb3BlciBrbm93cyBiZXR0ZXIgdGhhbiB3ZVxuICAgICAgLy8gZG8gd2hhdCB0aGV5IHdhbnQgaW4gdGhlaXIgcGFydGljdWxhciBjb250ZXh0LlxuICAgICAgaWYgKGdldENvbXB1dGVkU3R5bGUodGhpcykudG91Y2hBY3Rpb24gPT09ICdhdXRvJykge1xuICAgICAgICB0aGlzLnN0eWxlLnRvdWNoQWN0aW9uID0gJ25vbmUnO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSBsZWZ0LlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBnb0xlZnQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29MZWZ0KSB7IHJldHVybiBzdXBlci5nb0xlZnQoKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSByaWdodC5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgZ29SaWdodCgpIHtcbiAgICAgIGlmIChzdXBlci5nb1JpZ2h0KSB7IHJldHVybiBzdXBlci5nb1JpZ2h0KCk7IH1cbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLlxuICAgIGdldCBzaG93VHJhbnNpdGlvbigpIHtcbiAgICAgIHJldHVybiBzdXBlci5zaG93VHJhbnNpdGlvbjtcbiAgICB9XG4gICAgc2V0IHNob3dUcmFuc2l0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoJ3Nob3dUcmFuc2l0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zaG93VHJhbnNpdGlvbiA9IHZhbHVlOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGRpc3RhbmNlIHRoZSBmaXJzdCB0b3VjaHBvaW50IGhhcyB0cmF2ZWxlZCBzaW5jZSB0aGUgYmVnaW5uaW5nIG9mIGFcbiAgICAgKiBkcmFnLCBleHByZXNzZWQgYXMgYSBmcmFjdGlvbiBvZiB0aGUgZWxlbWVudCdzIHdpZHRoLlxuICAgICAqXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICovXG4gICAgZ2V0IHRyYXZlbEZyYWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXNbdHJhdmVsRnJhY3Rpb25TeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgdHJhdmVsRnJhY3Rpb24odmFsdWUpIHtcbiAgICAgIHRoaXNbdHJhdmVsRnJhY3Rpb25TeW1ib2xdID0gdmFsdWU7XG4gICAgICBpZiAoJ3RyYXZlbEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci50cmF2ZWxGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gU3dpcGVEaXJlY3Rpb247XG59O1xuXG5cbi8vIFJldHVybiB0cnVlIGlmIHRoZSBwb2ludGVyIGV2ZW50IGlzIGZvciB0aGUgcGVuLCBvciB0aGUgcHJpbWFyeSB0b3VjaCBwb2ludC5cbmZ1bmN0aW9uIGlzRXZlbnRGb3JQZW5PclByaW1hcnlUb3VjaChldmVudCkge1xuICByZXR1cm4gZXZlbnQucG9pbnRlclR5cGUgPT09ICdwZW4nIHx8XG4gICAgICAoZXZlbnQucG9pbnRlclR5cGUgPT09ICd0b3VjaCcgJiYgZXZlbnQuaXNQcmltYXJ5KTtcbn1cblxuXG5mdW5jdGlvbiB0b3VjaFN0YXJ0KGVsZW1lbnQsIGNsaWVudFgsIGNsaWVudFkpIHtcbiAgZWxlbWVudC5zaG93VHJhbnNpdGlvbiA9IGZhbHNlO1xuICBlbGVtZW50W3N0YXJ0WFN5bWJvbF0gPSBjbGllbnRYO1xuICBlbGVtZW50W3ByZXZpb3VzWFN5bWJvbF0gPSBjbGllbnRYO1xuICBlbGVtZW50W3ByZXZpb3VzWVN5bWJvbF0gPSBjbGllbnRZO1xuICBlbGVtZW50W2RlbHRhWFN5bWJvbF0gPSAwO1xuICBlbGVtZW50W2RlbHRhWVN5bWJvbF0gPSAwO1xufVxuXG5mdW5jdGlvbiB0b3VjaE1vdmUoZWxlbWVudCwgY2xpZW50WCwgY2xpZW50WSkge1xuICBlbGVtZW50W2RlbHRhWFN5bWJvbF0gPSBjbGllbnRYIC0gZWxlbWVudFtwcmV2aW91c1hTeW1ib2xdO1xuICBlbGVtZW50W2RlbHRhWVN5bWJvbF0gPSBjbGllbnRZIC0gZWxlbWVudFtwcmV2aW91c1lTeW1ib2xdO1xuICBlbGVtZW50W3ByZXZpb3VzWFN5bWJvbF0gPSBjbGllbnRYO1xuICBlbGVtZW50W3ByZXZpb3VzWVN5bWJvbF0gPSBjbGllbnRZO1xuICBpZiAoTWF0aC5hYnMoZWxlbWVudFtkZWx0YVhTeW1ib2xdKSA+IE1hdGguYWJzKGVsZW1lbnRbZGVsdGFZU3ltYm9sXSkpIHtcbiAgICAvLyBNb3ZlIHdhcyBtb3N0bHkgaG9yaXpvbnRhbC5cbiAgICB0cmFja1RvKGVsZW1lbnQsIGNsaWVudFgpO1xuICAgIC8vIEluZGljYXRlIHRoYXQgdGhlIGV2ZW50IHdhcyBoYW5kbGVkLiBJdCdkIGJlIG5pY2VyIGlmIHdlIGRpZG4ndCBoYXZlXG4gICAgLy8gdG8gZG8gdGhpcyBzbyB0aGF0LCBlLmcuLCBhIHVzZXIgY291bGQgYmUgc3dpcGluZyBsZWZ0IGFuZCByaWdodFxuICAgIC8vIHdoaWxlIHNpbXVsdGFuZW91c2x5IHNjcm9sbGluZyB1cCBhbmQgZG93bi4gKE5hdGl2ZSB0b3VjaCBhcHBzIGNhbiBkb1xuICAgIC8vIHRoYXQuKSBIb3dldmVyLCBNb2JpbGUgU2FmYXJpIHdhbnRzIHRvIGhhbmRsZSBzd2lwZSBldmVudHMgbmVhciB0aGVcbiAgICAvLyBwYWdlIGFuZCBpbnRlcnByZXQgdGhlbSBhcyBuYXZpZ2F0aW9ucy4gVG8gYXZvaWQgaGF2aW5nIGEgaG9yaXppb250YWxcbiAgICAvLyBzd2lwZSBtaXNpbnRlcHJldGVkIGFzIGEgbmF2aWdhdGlvbiwgd2UgaW5kaWNhdGUgdGhhdCB3ZSd2ZSBoYW5kbGVkXG4gICAgLy8gdGhlIGV2ZW50LCBhbmQgcHJldmVudCBkZWZhdWx0IGJlaGF2aW9yLlxuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIC8vIE1vdmUgd2FzIG1vc3RseSB2ZXJ0aWNhbC5cbiAgICByZXR1cm4gZmFsc2U7IC8vIE5vdCBoYW5kbGVkXG4gIH1cbn1cblxuZnVuY3Rpb24gdG91Y2hFbmQoZWxlbWVudCwgY2xpZW50WCwgY2xpZW50WSkge1xuICBlbGVtZW50LnNob3dUcmFuc2l0aW9uID0gdHJ1ZTtcbiAgaWYgKGVsZW1lbnRbZGVsdGFYU3ltYm9sXSA+PSAyMCkge1xuICAgIC8vIEZpbmlzaGVkIGdvaW5nIHJpZ2h0IGF0IGhpZ2ggc3BlZWQuXG4gICAgZWxlbWVudC5nb0xlZnQoKTtcbiAgfSBlbHNlIGlmIChlbGVtZW50W2RlbHRhWFN5bWJvbF0gPD0gLTIwKSB7XG4gICAgLy8gRmluaXNoZWQgZ29pbmcgbGVmdCBhdCBoaWdoIHNwZWVkLlxuICAgIGVsZW1lbnQuZ29SaWdodCgpO1xuICB9IGVsc2Uge1xuICAgIC8vIEZpbmlzaGVkIGF0IGxvdyBzcGVlZC5cbiAgICB0cmFja1RvKGVsZW1lbnQsIGNsaWVudFgpO1xuICAgIGxldCB0cmF2ZWxGcmFjdGlvbiA9IGVsZW1lbnQudHJhdmVsRnJhY3Rpb247XG4gICAgaWYgKHRyYXZlbEZyYWN0aW9uID49IDAuNSkge1xuICAgICAgZWxlbWVudC5nb1JpZ2h0KCk7XG4gICAgfSBlbHNlIGlmICh0cmF2ZWxGcmFjdGlvbiA8PSAtMC41KSB7XG4gICAgICBlbGVtZW50LmdvTGVmdCgpO1xuICAgIH1cbiAgfVxuICBlbGVtZW50LnRyYXZlbEZyYWN0aW9uID0gMDtcbiAgZWxlbWVudFtkZWx0YVhTeW1ib2xdID0gbnVsbDtcbiAgZWxlbWVudFtkZWx0YVlTeW1ib2xdID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gdHJhY2tUbyhlbGVtZW50LCB4KSB7XG4gIGxldCB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gIGxldCBkcmFnRGlzdGFuY2UgPSBlbGVtZW50W3N0YXJ0WFN5bWJvbF0gLSB4O1xuICBsZXQgZnJhY3Rpb24gPSB3aWR0aCA+IDAgP1xuICAgIGRyYWdEaXN0YW5jZSAvIHdpZHRoIDpcbiAgICAwO1xuICBlbGVtZW50LnRyYXZlbEZyYWN0aW9uID0gZnJhY3Rpb247XG59XG4iLCJpbXBvcnQgQ29sbGVjdGl2ZSBmcm9tICcuL0NvbGxlY3RpdmUnO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggVGFyZ2V0SW5Db2xsZWN0aXZlLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggYWxsb3dzIGEgY29tcG9uZW50IHRvIHByb3ZpZGUgYWdncmVnYXRlIGJlaGF2aW9yIHdpdGggb3RoZXJcbiAgICogZWxlbWVudHMsIGUuZy4sIGZvciBrZXlib2FyZCBoYW5kbGluZy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBpbXBsaWNpdGx5IGNyZWF0ZXMgYSBjb2xsZWN0aXZlIGZvciBhIGNvbXBvbmVudCBzbyB0aGF0IGl0IGNhblxuICAgKiBwYXJ0aWNpcGF0ZSBpbiBjb2xsZWN0aXZlIGtleWJvYXJkIGhhbmRsaW5nLiBTZWUgdGhlXG4gICAqIFtDb2xsZWN0aXZlXShDb2xsZWN0aXZlLm1kKSBjbGFzcyBmb3IgZGV0YWlscy5cbiAgICpcbiAgICogWW91IGNhbiB1c2UgdGhpcyBtaXhpbiBpbiBjb25qdW5jdGlvbiB3aXRoXG4gICAqIFtDb250ZW50Rmlyc3RDaGlsZFRhcmdldF0oQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQubWQpIHRvIGF1dG9tYXRpY2FsbHkgaGF2ZVxuICAgKiB0aGUgY29tcG9uZW50J3MgY29sbGVjdGl2ZSBleHRlbmRlZCB0byBpdHMgZmlyc3QgY2hpbGQuXG4gICAqL1xuICBjbGFzcyBUYXJnZXRJbkNvbGxlY3RpdmUgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuY29sbGVjdGl2ZSA9IG5ldyBDb2xsZWN0aXZlKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMvc2V0cyB0aGUgY3VycmVudCB0YXJnZXQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIFNldCB0aGlzIHRvIHBvaW50IHRvIGFub3RoZXIgZWxlbWVudC4gVGhhdCB0YXJnZXQgZWxlbWVudCB3aWxsIGJlXG4gICAgICogaW1wbGljaXRseSBhZGRlZCB0byB0aGUgY29tcG9uZW50J3MgY29sbGVjdGl2ZS4gVGhhdCBpcywgdGhlIGNvbXBvbmVudFxuICAgICAqIGFuZCBpdHMgdGFyZ2V0IHdpbGwgc2hhcmUgcmVzcG9uc2liaWxpdHkgZm9yIGhhbmRsaW5nIGtleWJvYXJkIGV2ZW50cy5cbiAgICAgKlxuICAgICAqIFlvdSBjYW4gc2V0IHRoaXMgcHJvcGVydHkgeW91cnNlbGYsIG9yIHlvdSBjYW4gdXNlIHRoZVxuICAgICAqIENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0IG1peGluIHRvIGF1dG9tYXRpY2FsbHkgc2V0IHRoZSB0YXJnZXQgdG8gdGhlXG4gICAgICogY29tcG9uZW50J3MgZmlyc3QgY2hpbGQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgZ2V0IHRhcmdldCgpIHtcbiAgICAgIHJldHVybiBzdXBlci50YXJnZXQ7XG4gICAgfVxuICAgIHNldCB0YXJnZXQoZWxlbWVudCkge1xuICAgICAgaWYgKCd0YXJnZXQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnRhcmdldCA9IGVsZW1lbnQ7IH1cbiAgICAgIHRoaXMuY29sbGVjdGl2ZS5hc3NpbWlsYXRlKGVsZW1lbnQpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFRhcmdldEluQ29sbGVjdGl2ZTtcbn07XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgaXRlbXNDaGFuZ2VkTGlzdGVuZXJTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2l0ZW1zQ2hhbmdlZExpc3RlbmVyJyk7XG5jb25zdCBzZWxlY3RlZEl0ZW1DaGFuZ2VkTGlzdGVuZXJTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3NlbGVjdGVkSXRlbUNoYW5nZWRMaXN0ZW5lcicpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggVGFyZ2V0U2VsZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggYWxsb3dzIGEgY29tcG9uZW50IHRvIGRlbGVnYXRlIGl0cyBvd24gc2VsZWN0aW9uIHNlbWFudGljcyB0byBhXG4gICAqIHRhcmdldCBlbGVtZW50LlxuICAgKlxuICAgKiBUaGlzIGlzIHVzZWZ1bCB3aGVuIGRlZmluaW5nIGNvbXBvbmVudHMgdGhhdCBhY3QgYXMgb3B0aW9uYWwgZmVhdHVyZXMgZm9yIGFcbiAgICogY29tcG9uZW50IHRoYXQgYWN0cyBsaWtlIGEgbGlzdC4gU2VlIGJhc2ljLWFycm93LXNlbGVjdGlvbiBhbmRcbiAgICogYmFzaWMtcGFnZS1kb3RzIGZvciBleGFtcGxlcyBvZiBjb21wb25lbnRzIHVzZWQgYXMgb3B0aW9uYWwgZmVhdHVyZXMgZm9yXG4gICAqIGNvbXBvbmVudHMgbGlrZSBiYXNpYy1jYXJvdXNlbC4gQSB0eXBpY2FsIHVzYWdlIG1pZ2h0IGJlOlxuICAgKlxuICAgKiAgICAgPGJhc2ljLWFycm93LXNlbGVjdGlvbj5cbiAgICogICAgICAgPGJhc2ljLWNhcm91c2VsPlxuICAgKiAgICAgICAgIC4uLiBpbWFnZXMsIGV0Yy4gLi4uXG4gICAqICAgICAgIDwvYmFzaWMtY2Fyb3VzZWw+XG4gICAqICAgICA8L2Jhc2ljLWFycm93LXNlbGVjdGlvbj5cbiAgICpcbiAgICogQmVjYXVzZSBiYXNpYy1hcnJvdy1zZWxlY3Rpb24gdXNlcyB0aGVcbiAgICogW1RhcmdldFNlbGVjdGlvbl0oVGFyZ2V0U2VsZWN0aW9uLm1kKSBtaXhpbiwgaXQgZXhwb3NlcyBtZW1iZXJzIHRvIGFjY2VzcyBhXG4gICAqIHNlbGVjdGlvbjogYHNlbGVjdE5leHRgLCBgc2VsZWN0UHJldmlvdXNgLCBgc2VsZWN0ZWRJbmRleGAsIGV0Yy4gVGhlc2UgYXJlXG4gICAqIGFsbCBkZWxlZ2F0ZWQgdG8gdGhlIGNoaWxkIGNvbXBvbmVudCAoaGVyZSwgYSBiYXNpYy1jYXJvdXNlbCkuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIGB0YXJnZXRgIHByb3BlcnR5IHRvIGJlIHNldCB0byB0aGUgZWxlbWVudCBhY3R1YWxseVxuICAgKiBtYW5hZ2luZyB0aGUgc2VsZWN0aW9uLiBZb3UgY2FuIHNldCB0aGF0IHByb3BlcnR5IHlvdXJzZWxmLCBvciB5b3UgY2FuIHVzZVxuICAgKiB0aGUgW0NvbnRlbnRGaXJzdENoaWxkVGFyZ2V0XShDb250ZW50Rmlyc3RDaGlsZFRhcmdldC5tZCkgbWl4aW4gdG9cbiAgICogaW1wbGljaXRseSB0YWtlIHRoZSBjb21wb25lbnQncyBmaXJzdCBjaGlsZCBhcyB0aGUgdGFyZ2V0LiBUaGlzIGlzIHdoYXRcbiAgICogYmFzaWMtYXJyb3ctc2VsZWN0aW9uIChhYm92ZSkgZG9lcy5cbiAgICovXG4gIGNsYXNzIFRhcmdldFNlbGVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgc2V0IG9mIGl0ZW1zIGluIHRoZSBsaXN0LlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50W119XG4gICAgICovXG4gICAgZ2V0IGl0ZW1zKCkge1xuICAgICAgbGV0IHRhcmdldCA9IHRoaXMudGFyZ2V0O1xuICAgICAgbGV0IGl0ZW1zID0gdGFyZ2V0ICYmIHRhcmdldC5pdGVtcztcbiAgICAgIHJldHVybiBpdGVtcyB8fCBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gdGhlIHVuZGVybHlpbmcgY29udGVudHMgY2hhbmdlLiBJdCBpcyBhbHNvXG4gICAgICogaW52b2tlZCBvbiBjb21wb25lbnQgaW5pdGlhbGl6YXRpb24g4oCTIHNpbmNlIHRoZSBpdGVtcyBoYXZlIFwiY2hhbmdlZFwiIGZyb21cbiAgICAgKiBiZWluZyBub3RoaW5nLlxuICAgICAqL1xuICAgIGl0ZW1zQ2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5pdGVtc0NoYW5nZWQpIHsgc3VwZXIuaXRlbXNDaGFuZ2VkKCk7IH1cbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2l0ZW1zLWNoYW5nZWQnKSk7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkRnJhY3Rpb24oKSB7XG4gICAgICBsZXQgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG4gICAgICByZXR1cm4gdGFyZ2V0ICYmIHRhcmdldC5zZWxlY3RlZEZyYWN0aW9uO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRGcmFjdGlvbihmcmFjdGlvbikge1xuICAgICAgaWYgKCdzZWxlY3RlZEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEZyYWN0aW9uID0gZnJhY3Rpb247IH1cbiAgICAgIGxldCB0YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LnNlbGVjdGVkRnJhY3Rpb24gIT09IGZyYWN0aW9uKSB7XG4gICAgICAgIHRhcmdldC5zZWxlY3RlZEZyYWN0aW9uID0gZnJhY3Rpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtLCBvciBudWxsIGlmIHRoZXJlIGlzIG5vIHNlbGVjdGlvbi5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xuICAgICAgbGV0IHRhcmdldCA9IHRoaXMudGFyZ2V0O1xuICAgICAgcmV0dXJuIHRhcmdldCAmJiB0YXJnZXQuc2VsZWN0ZWRJdGVtO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgICBsZXQgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG4gICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRoaXMgbWV0aG9kIGV4aXN0cyBzbyB3cmFwcGluZyBjb21wb25lbnRzIGNhbiBoYW5kbGUgYSBjaGFuZ2UgaW4gdGhlXG4gICAgLy8gc2VsZWN0aW9uIHdpdGhvdXQgcG90ZW50aWFsbHkgcmUtaW52b2tpbmcgdGhlIHNlbGVjdGVkSXRlbSBzZXR0ZXIuIFRoaXNcbiAgICAvLyBpcyBraW5kIG9mIHVuc2F0aXNmeWluZywgdGhvdWdoLiBJdCdkIGJlIG5pY2VyIHRvIGxldCBzdWNoIGNvbXBvbmVudHNcbiAgICAvLyBqdXN0IGltcGxlbWVudCB0aGUgZ2V0dGVyL3NldHRlciBmb3Igc2VsZWN0ZWRJdGVtLCBidXQgaGF2ZSBhIHdheSB0b1xuICAgIC8vIGtub3cgd2hldGhlciB0aGV5IG5lZWQgdG8gYWxzbyB0aGF0IHByb3BlcnR5IGdldHRlci9zZXR0ZXIgZm9yIHRoZSB0YXJnZXRcbiAgICAvLyBjb21wb25lbnQuXG4gICAgc2VsZWN0ZWRJdGVtQ2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RlZEl0ZW1DaGFuZ2VkKSB7IHN1cGVyLnNlbGVjdGVkSXRlbUNoYW5nZWQoKTsgfVxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc2VsZWN0ZWQtaXRlbS1jaGFuZ2VkJykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgc2VsZWN0aW9uIG5hdmlnYXRpb25zIHdyYXAgZnJvbSBsYXN0IHRvIGZpcnN0LCBhbmQgdmljZSB2ZXJzYS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBkZWZhdWx0IHtmYWxzZX1cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0aW9uV3JhcHMoKSB7XG4gICAgICBsZXQgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG4gICAgICByZXR1cm4gdGFyZ2V0ICYmIHRhcmdldC5zZWxlY3Rpb25XcmFwcztcbiAgICB9XG4gICAgc2V0IHNlbGVjdGlvbldyYXBzKHZhbHVlKSB7XG4gICAgICBpZiAoJ3NlbGVjdGlvbldyYXBzJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3Rpb25XcmFwcyA9IHZhbHVlOyB9XG4gICAgICBsZXQgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG4gICAgICBpZiggdGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC5zZWxlY3Rpb25XcmFwcyA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMvc2V0cyB0aGUgdGFyZ2V0IGVsZW1lbnQgdG8gd2hpY2ggdGhpcyBjb21wb25lbnQgd2lsbCBkZWxlZ2F0ZVxuICAgICAqIHNlbGVjdGlvbiBhY3Rpb25zLlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGdldCB0YXJnZXQoKSB7XG4gICAgICByZXR1cm4gc3VwZXIudGFyZ2V0O1xuICAgIH1cbiAgICBzZXQgdGFyZ2V0KGVsZW1lbnQpIHtcbiAgICAgIGlmICgndGFyZ2V0JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci50YXJnZXQgPSBlbGVtZW50OyB9XG4gICAgICBpZiAodGhpc1tpdGVtc0NoYW5nZWRMaXN0ZW5lclN5bWJvbF0pIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdpdGVtcy1jaGFuZ2VkJywgdGhpc1tpdGVtc0NoYW5nZWRMaXN0ZW5lclN5bWJvbF0pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXNbc2VsZWN0ZWRJdGVtQ2hhbmdlZExpc3RlbmVyU3ltYm9sXSkge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3NlbGVjdGVkLWl0ZW0tY2hhbmdlZCcsIHRoaXNbc2VsZWN0ZWRJdGVtQ2hhbmdlZExpc3RlbmVyU3ltYm9sXSk7XG4gICAgICB9XG4gICAgICB0aGlzW2l0ZW1zQ2hhbmdlZExpc3RlbmVyU3ltYm9sXSA9IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaXRlbXMtY2hhbmdlZCcsIGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy5pdGVtc0NoYW5nZWQoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpc1tzZWxlY3RlZEl0ZW1DaGFuZ2VkTGlzdGVuZXJTeW1ib2xdID0gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzZWxlY3RlZC1pdGVtLWNoYW5nZWQnLCBldmVudCA9PiB7XG4gICAgICAgIC8vIFJFVklFVzogQ29tcG9uZW50cyBhcHBseWluZyBUYXJnZXRTZWxlY3Rpb24gYm90aCBsaXN0ZW4gdG8gdGhpc1xuICAgICAgICAvLyBldmVudCAob24gdGhlIHRhcmdldCksIGFuZCByYWlzZSBpdCB0aGVtc2VsdmVzLiBJbiB0aGVvcnksIHRoZXkncmVcbiAgICAgICAgLy8gZXhwZWN0ZWQgdG8gKm5vdCogY2F0Y2ggdGhlIGV2ZW50cyB0aGV5IHJhaXNlIHRoZW1zZWx2ZXMsIGJ1dCBDaHJvbWVcbiAgICAgICAgLy8gKGF0IGxlYXN0KSBhcHBlYXJzIHRvIHZpb2xhdGUgdGhhdCBleHBlY3RhdGlvbi4gVGhhdCBpcywgaXQnc1xuICAgICAgICAvLyBwb3NzaWJsZSB0byBoYXZlIGV2ZW50LnRhcmdldCA9PT0gdGhpcy4gTW9yZSBjb25mdXNpbmdseSwgdGhlIGd1YXJkXG4gICAgICAgIC8vIGJlbG93LCB3aGljaCBpcyBpbnRlbmRlZCB0byBhdm9pZCByZWN1cnNpdmUgY2FsbHMgdG9cbiAgICAgICAgLy8gc2VsZWN0ZWRJdGVtQ2hhbmdlZCwgZG9lc24ndCB3b3JrIGFzIGV4cGVjdGVkLiBFdmVuIGlmIHRoZSBkZWJ1Z2dlclxuICAgICAgICAvLyBzaG93cyBldmVudC50YXJnZXQgPT09IHRoaXMsIHRoZSBjb250ZW50cyBvZiB0aGUgXCJpZlwiIHN0YXRlbWVudCB3aWxsXG4gICAgICAgIC8vIGJlIGV4ZWN1dGVkLlxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSB0aGlzKSB7XG4gICAgICAgICAgLy8gTGV0IHRoZSBjb21wb25lbnQga25vdyB0aGUgdGFyZ2V0J3Mgc2VsZWN0aW9uIGNoYW5nZWQsIGJ1dCB3aXRob3V0XG4gICAgICAgICAgLy8gcmUtaW52b2tpbmcgdGhlIHNlbGVjdEluZGV4L3NlbGVjdGVkSXRlbSBzZXR0ZXIuXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1DaGFuZ2VkKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gRm9yY2UgaW5pdGlhbCByZWZyZXNoLlxuICAgICAgdGhpcy5pdGVtc0NoYW5nZWQoKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBUYXJnZXRTZWxlY3Rpb247XG59O1xuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5cbmNvbnN0IHBsYXlpbmdTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3BsYXlpbmcnKTtcbmNvbnN0IHNlbGVjdGlvblRpbWVyRHVyYXRpb25TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3NlbGVjdGlvblRpbWVyRHVyYXRpb24nKTtcbmNvbnN0IHRpbWVyVGltZW91dFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgndGltZXJUaW1lb3V0Jyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBUaW1lclNlbGVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIHByb3ZpZGVzIGZvciBhdXRvbWF0aWMgdGltZWQgY2hhbmdlcyBpbiBzZWxlY3Rpb24uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaXMgdXNlZnVsIGZvciBjcmVhdGluZyBzbGlkZXNob3ctbGlrZSBlbGVtZW50cy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIHRoZSBjb21wb25lbnQgdG8gZGVmaW5lIGFuIGBpdGVtc2AgcHJvcGVydHksIGFzIHdlbGwgYXNcbiAgICogYHNlbGVjdEZpcnN0YCBhbmQgYHNlbGVjdE5leHRgIG1ldGhvZHMuIFlvdSBjYW4gaW1wbGVtZW50IHRob3NlIHlvdXJzZWxmLFxuICAgKiBvciB1c2UgdGhlIFtDb250ZW50QXNJdGVtc10oQ29udGVudEFzSXRlbXMubWQpIGFuZFxuICAgKiBbU2luZ2xlU2VsZWN0aW9uXShTaW5nbGVTZWxlY3Rpb24ubWQpIG1peGlucy5cbiAgICovXG4gIGNsYXNzIFRpbWVyU2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICAvLyBTZXQgZGVmYXVsdHMuXG4gICAgICBpZiAodHlwZW9mIHRoaXMucGxheWluZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5wbGF5aW5nID0gdGhpcy5kZWZhdWx0cy5wbGF5aW5nO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnNlbGVjdGlvblRpbWVyRHVyYXRpb24gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uVGltZXJEdXJhdGlvbiA9IHRoaXMuZGVmYXVsdHMuc2VsZWN0aW9uVGltZXJEdXJhdGlvbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb250ZW50Q2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5jb250ZW50Q2hhbmdlZCkgeyBzdXBlci5jb250ZW50Q2hhbmdlZCgpOyB9XG4gICAgICByZXN0YXJ0VGltZXIodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0IGRlZmF1bHRzKCkge1xuICAgICAgbGV0IGRlZmF1bHRzID0gc3VwZXIuZGVmYXVsdHMgfHwge307XG4gICAgICBkZWZhdWx0cy5wbGF5aW5nID0gZmFsc2U7XG4gICAgICBkZWZhdWx0cy5zZWxlY3Rpb25UaW1lckR1cmF0aW9uID0gMTAwMDtcbiAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCZWdpbiBhdXRvbWF0aWMgcHJvZ3Jlc3Npb24gb2YgdGhlIHNlbGVjdGlvbi5cbiAgICAgKi9cbiAgICBwbGF5KCkge1xuICAgICAgaWYgKHN1cGVyLnBsYXkpIHsgc3VwZXIucGxheSgpOyB9XG4gICAgICBzdGFydFRpbWVyKHRoaXMpO1xuICAgICAgdGhpc1twbGF5aW5nU3ltYm9sXSA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGF1c2UgYXV0b21hdGljIHByb2dyZXNzaW9uIG9mIHRoZSBzZWxlY3Rpb24uXG4gICAgICovXG4gICAgcGF1c2UoKSB7XG4gICAgICBpZiAoc3VwZXIucGF1c2UpIHsgc3VwZXIucGF1c2UoKTsgfVxuICAgICAgY2xlYXJUaW1lcih0aGlzKTtcbiAgICAgIHRoaXNbcGxheWluZ1N5bWJvbF0gPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBzZWxlY3Rpb24gaXMgYmVpbmcgYXV0b21hdGljYWxseSBhZHZhbmNlZC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgZ2V0IHBsYXlpbmcoKSB7XG4gICAgICByZXR1cm4gdGhpc1twbGF5aW5nU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHBsYXlpbmcocGxheWluZykge1xuICAgICAgbGV0IHByZXZpb3VzUGxheWluZyA9IHRoaXNbcGxheWluZ1N5bWJvbF07XG4gICAgICBsZXQgcGFyc2VkID0gU3RyaW5nKHBsYXlpbmcpID09PSAndHJ1ZSc7IC8vIENhc3QgdG8gYm9vbGVhblxuICAgICAgaWYgKCdwbGF5aW5nJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5wbGF5aW5nID0gcGxheWluZzsgfVxuICAgICAgaWYgKHBhcnNlZCAhPT0gcHJldmlvdXNQbGF5aW5nKSB7XG4gICAgICAgIGlmIChwbGF5aW5nKSB7XG4gICAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBXaGVuIHRoZSBzZWxlY3RlZCBpdGVtIGNoYW5nZXMgKGJlY2F1c2Ugb2Ygc29tZXRoaW5nIHRoaXMgbWl4aW4gZGlkLCBvclxuICAgICAqIHdhcyBjaGFuZ2VkIGJ5IGFuIG91dHNpZGUgYWdlbnQgbGlrZSB0aGUgdXNlciksIHdlIHdhaXQgYmVmb3JlIGFkdmFuY2luZ1xuICAgICAqIHRvIHRoZSBuZXh0IGl0ZW0uIEJ5IHRyaWdnZXJpbmcgdGhlIG5leHQgaXRlbSB0aGlzIHdheSwgd2UgaW1wbGljaXRseSBnZXRcbiAgICAgKiBhIGRlc2lyYWJsZSBiZWhhdmlvcjogaWYgdGhlIHVzZXIgY2hhbmdlcyB0aGUgc2VsZWN0aW9uIChlLmcuLCBpbiBhXG4gICAgICogY2Fyb3VzZWwpLCB3ZSBsZXQgdGhlbSBzZWUgdGhhdCBzZWxlY3Rpb24gc3RhdGUgZm9yIGEgd2hpbGUgYmVmb3JlXG4gICAgICogYWR2YW5jaW5nIHRoZSBzZWxlY3Rpb24gb3Vyc2VsdmVzLlxuICAgICAqL1xuICAgIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRJdGVtO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgICByZXN0YXJ0VGltZXIodGhpcyk7XG4gICAgfVxuXG4gICAgLy8gSW4gY2FzZSB0aGlzIG1peGluIGlzIGJlaW5nIHVzZWQgd2l0aCBUYXJnZXRTZWxlY3Rpb24uXG4gICAgc2VsZWN0ZWRJdGVtQ2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RlZEl0ZW1DaGFuZ2VkKSB7IHN1cGVyLnNlbGVjdGVkSXRlbUNoYW5nZWQoKTsgfVxuICAgICAgcmVzdGFydFRpbWVyKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSB0aW1lIGluIG1pbGxpc2Vjb25kcyB0aGF0IHdpbGwgZWxhcHNlIGFmdGVyIHRoZSBzZWxlY3Rpb24gY2hhbmdlc1xuICAgICAqIGJlZm9yZSB0aGUgc2VsZWN0aW9uIHdpbGwgYmUgYWR2YW5jZWQgdG8gdGhlIG5leHQgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9IC0gVGltZSBpbiBtaWxsaXNlY29uZHNcbiAgICAgKiBAZGVmYXVsdCAxMDAwICgxIHNlY29uZClcbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0aW9uVGltZXJEdXJhdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzW3NlbGVjdGlvblRpbWVyRHVyYXRpb25TeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0aW9uVGltZXJEdXJhdGlvbih2YWx1ZSkge1xuICAgICAgdGhpc1tzZWxlY3Rpb25UaW1lckR1cmF0aW9uU3ltYm9sXSA9IHBhcnNlSW50KHZhbHVlKTtcbiAgICAgIGlmICgnc2VsZWN0aW9uVGltZXJEdXJhdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0aW9uVGltZXJEdXJhdGlvbiA9IHZhbHVlOyB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gVGltZXJTZWxlY3Rpb247XG59O1xuXG5cbmZ1bmN0aW9uIGNsZWFyVGltZXIoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudFt0aW1lclRpbWVvdXRTeW1ib2xdKSB7XG4gICAgY2xlYXJUaW1lb3V0KGVsZW1lbnRbdGltZXJUaW1lb3V0U3ltYm9sXSk7XG4gICAgZWxlbWVudFt0aW1lclRpbWVvdXRTeW1ib2xdID0gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXN0YXJ0VGltZXIoZWxlbWVudCkge1xuICBjbGVhclRpbWVyKGVsZW1lbnQpO1xuICBpZiAoZWxlbWVudC5wbGF5aW5nICYmIGVsZW1lbnQuaXRlbXMgJiYgZWxlbWVudC5pdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgc3RhcnRUaW1lcihlbGVtZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdGFydFRpbWVyKGVsZW1lbnQpIHtcbiAgLy8gSWYgcGxheSgpIGlzIGNhbGxlZCBtb3JlIHRoYW4gb25jZSwgY2FuY2VsIGFueSBleGlzdGluZyB0aW1lci5cbiAgY2xlYXJUaW1lcihlbGVtZW50KTtcbiAgZWxlbWVudFt0aW1lclRpbWVvdXRTeW1ib2xdID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgc2VsZWN0TmV4dFdpdGhXcmFwKGVsZW1lbnQpO1xuICB9LCBlbGVtZW50LnNlbGVjdGlvblRpbWVyRHVyYXRpb24pO1xufVxuXG4vLyBTZWxlY3QgdGhlIG5leHQgaXRlbSwgd3JhcHBpbmcgdG8gZmlyc3QgaXRlbSBpZiBuZWNlc3NhcnkuXG5mdW5jdGlvbiBzZWxlY3ROZXh0V2l0aFdyYXAoZWxlbWVudCkge1xuICBsZXQgaXRlbXMgPSBlbGVtZW50Lml0ZW1zO1xuICBpZiAoaXRlbXMgJiYgaXRlbXMubGVuZ3RoID4gMCkge1xuICAgIGlmIChlbGVtZW50LnNlbGVjdGVkSW5kZXggPT0gbnVsbCB8fCBlbGVtZW50LnNlbGVjdGVkSW5kZXggPT09IGl0ZW1zLmxlbmd0aCAtIDEpIHtcbiAgICAgIGVsZW1lbnQuc2VsZWN0Rmlyc3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5zZWxlY3ROZXh0KCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL2NyZWF0ZVN5bWJvbCc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IGFic29yYkRlY2VsZXJhdGlvblN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnYWJzb3JiRGVjZWxlcmF0aW9uJyk7XG5jb25zdCBsYXN0RGVsdGFYU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdsYXN0RGVsdGFYJyk7XG5jb25zdCBsYXN0V2hlZWxUaW1lb3V0U3ltYm9sID0gY3JlYXRlU3ltYm9sKCdsYXN0V2hlZWxUaW1lb3V0Jyk7XG5jb25zdCBwb3N0TmF2aWdhdGVEZWxheUNvbXBsZXRlU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdwb3N0TmF2aWdhdGVEZWxheUNvbXBsZXRlJyk7XG5jb25zdCB3aGVlbERpc3RhbmNlU3ltYm9sID0gY3JlYXRlU3ltYm9sKCd3aGVlbERpc3RhbmNlJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBUcmFja3BhZERpcmVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgYSBob3Jpem9udGFsIHRyYWNrcGFkIHN3aXBlIGdlc3R1cmVzIChvciBob3Jpem9udGFsIG1vdXNlXG4gICAqIHdoZWVsIGFjdGlvbnMpIHRvIGRpcmVjdGlvbiBzZW1hbnRpY3MuXG4gICAqXG4gICAqIFlvdSBjYW4gdXNlIHRoaXMgbWl4aW4gd2l0aCBhIG1peGluIGxpa2VcbiAgICogW0RpcmVjdGlvblNlbGVjdGlvbl0oRGlyZWN0aW9uU2VsZWN0aW9uLm1kKSB0byBsZXQgdGhlIHVzZXIgY2hhbmdlIHRoZVxuICAgKiBzZWxlY3Rpb24gd2l0aCB0aGUgdHJhY2twYWQgb3IgbW91c2Ugd2hlZWwuXG4gICAqXG4gICAqIFRvIHJlc3BvbmQgdG8gdGhlIHRyYWNrcGFkLCB3ZSBjYW4gbGlzdGVuIHRvIHRoZSBET00ncyBcIndoZWVsXCIgZXZlbnRzLlxuICAgKiBUaGVzZSBldmVudHMgYXJlIGZpcmVkIGFzIHRoZSB1c2VyIGRyYWdzIHRoZWlyIGZpbmdlcnMgYWNyb3NzIGEgdHJhY2twYWQuXG4gICAqIFVuZm9ydHVuYXRlbHksIGJyb3dzZXJzIGFyZSBtaXNzaW5nIGEgY3JpdGljYWwgZXZlbnQg4oCUwqB0aGVyZSBpcyBubyBldmVudFxuICAgKiB3aGVuIHRoZSB1c2VyICpzdG9wcyogYSBnZXN0dXJlZCBvbiB0aGUgdHJhY2twYWQgb3IgbW91c2Ugd2hlZWwuXG4gICAqXG4gICAqIFRvIG1ha2UgdGhpbmdzIHdvcnNlLCB0aGUgbWFpbnN0cmVhbSBicm93c2VycyBjb250aW51ZSB0byBnZW5lcmF0ZSBmYWtlXG4gICAqIHdoZWVsIGV2ZW50cyBldmVuIGFmdGVyIHRoZSB1c2VyIGhhcyBzdG9wcGVkIGRyYWdnaW5nIHRoZWlyIGZpbmdlcnMuIFRoZXNlXG4gICAqIGZha2UgZXZlbnRzIHNpbXVsYXRlIHRoZSB1c2VyIGdyYWR1YWxseSBzbG93aW5nIGRvd24gdGhlIGRyYWcgdW50aWwgdGhleVxuICAgKiBjb21lIHRvIGEgc21vb3RoIHN0b3AuIEluIHNvbWUgY29udGV4dHMsIHRoZXNlIGZha2Ugd2hlZWwgZXZlbnRzIG1pZ2h0IGJlXG4gICAqIGhlbHBmdWwsIGJ1dCBpbiB0cnlpbmcgdG8gc3VwcGx5IHR5cGljYWwgdHJhY2twYWQgc3dpcGUgbmF2aWdhdGlvbiwgdGhlc2VcbiAgICogZmFrZSBldmVudHMgZ2V0IGluIHRoZSB3YXkuXG4gICAqXG4gICAqIFRoaXMgY29tcG9uZW50IHVzZXMgaGV1cmlzdGljcyB0byB3b3JrIGFyb3VuZCB0aGVzZSBwcm9ibGVtcywgYnV0IHRoZVxuICAgKiBjb21wbGV4IG5hdHVyZSBvZiB0aGUgcHJvYmxlbSBtYWtlIGl0IGV4dHJlbWVseSBkaWZmaWN1bHQgdG8gYWNoaWV2ZSB0aGVcbiAgICogc2FtZSBkZWdyZWUgb2YgdHJhY2twYWQgcmVzcG9uc2l2ZW5lc3MgcG9zc2libGUgd2l0aCBuYXRpdmUgYXBwbGljYXRpb25zLlxuICAgKi9cbiAgY2xhc3MgVHJhY2twYWREaXJlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBldmVudCA9PiB7XG4gICAgICAgIGxldCBoYW5kbGVkID0gd2hlZWwodGhpcywgZXZlbnQpO1xuICAgICAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmVzZXRXaGVlbFRyYWNraW5nKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSBsZWZ0LlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBnb0xlZnQoKSB7XG4gICAgICBpZiAoc3VwZXIuZ29MZWZ0KSB7IHJldHVybiBzdXBlci5nb0xlZnQoKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSByaWdodC5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgZ29SaWdodCgpIHtcbiAgICAgIGlmIChzdXBlci5nb1JpZ2h0KSB7IHJldHVybiBzdXBlci5nb1JpZ2h0KCk7IH1cbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLlxuICAgIGdldCBzaG93VHJhbnNpdGlvbigpIHtcbiAgICAgIHJldHVybiBzdXBlci5zaG93VHJhbnNpdGlvbjtcbiAgICB9XG4gICAgc2V0IHNob3dUcmFuc2l0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoJ3Nob3dUcmFuc2l0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zaG93VHJhbnNpdGlvbiA9IHZhbHVlOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGRpc3RhbmNlIHRoZSB1c2VyIGhhcyBtb3ZlZCB0aGUgZmlyc3QgdG91Y2hwb2ludCBzaW5jZSB0aGUgYmVnaW5uaW5nXG4gICAgICogb2YgYSB0cmFja3BhZC93aGVlbCBvcGVyYXRpb24sIGV4cHJlc3NlZCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBlbGVtZW50J3NcbiAgICAgKiB3aWR0aC5cbiAgICAgKlxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqL1xuICAgIGdldCB0cmF2ZWxGcmFjdGlvbigpIHtcbiAgICAgIHJldHVybiBzdXBlci50cmF2ZWxGcmFjdGlvbjtcbiAgICB9XG4gICAgc2V0IHRyYXZlbEZyYWN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoJ3RyYXZlbEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci50cmF2ZWxGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gVHJhY2twYWREaXJlY3Rpb247XG59O1xuXG5cbi8vIFRpbWUgd2Ugd2FpdCBmb2xsb3dpbmcgYSBuYXZpZ2F0aW9uIGJlZm9yZSBwYXlpbmcgYXR0ZW50aW9uIHRvIHdoZWVsXG4vLyBldmVudHMgYWdhaW4uXG5jb25zdCBQT1NUX05BVklHQVRFX1RJTUUgPSAyNTA7XG5cbi8vIFRpbWUgd2Ugd2FpdCBhZnRlciB0aGUgbGFzdCB3aGVlbCBldmVudCBiZWZvcmUgd2UgcmVzZXQgdGhpbmdzLlxuY29uc3QgV0hFRUxfVElNRSA9IDEwMDtcblxuXG4vLyBGb2xsb3dpbmcgYSBuYXZpZ2F0aW9uLCBwYXJ0aWFsbHkgcmVzZXQgb3VyIHdoZWVsIHRyYWNraW5nLlxuZnVuY3Rpb24gcG9zdE5hdmlnYXRlKGVsZW1lbnQpIHtcbiAgZWxlbWVudC50cmF2ZWxGcmFjdGlvbiA9IDA7XG4gIGVsZW1lbnRbd2hlZWxEaXN0YW5jZVN5bWJvbF0gPSAwO1xuICBlbGVtZW50W3Bvc3ROYXZpZ2F0ZURlbGF5Q29tcGxldGVTeW1ib2xdID0gdHJ1ZTtcbiAgZWxlbWVudFthYnNvcmJEZWNlbGVyYXRpb25TeW1ib2xdID0gdHJ1ZTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZWxlbWVudFtwb3N0TmF2aWdhdGVEZWxheUNvbXBsZXRlU3ltYm9sXSA9IGZhbHNlO1xuICB9LCBQT1NUX05BVklHQVRFX1RJTUUpO1xufVxuXG4vLyBSZXNldCBhbGwgc3RhdGUgcmVsYXRlZCB0byB0aGUgdHJhY2tpbmcgb2YgdGhlIHdoZWVsLlxuZnVuY3Rpb24gcmVzZXRXaGVlbFRyYWNraW5nKGVsZW1lbnQpIHtcbiAgZWxlbWVudC50cmF2ZWxGcmFjdGlvbiA9IDA7XG4gIGVsZW1lbnRbd2hlZWxEaXN0YW5jZVN5bWJvbF0gPSAwO1xuICBlbGVtZW50W2xhc3REZWx0YVhTeW1ib2xdID0gMDtcbiAgZWxlbWVudFthYnNvcmJEZWNlbGVyYXRpb25TeW1ib2xdID0gZmFsc2U7XG4gIGVsZW1lbnRbcG9zdE5hdmlnYXRlRGVsYXlDb21wbGV0ZVN5bWJvbF0gPSBmYWxzZTtcbiAgaWYgKGVsZW1lbnRbbGFzdFdoZWVsVGltZW91dFN5bWJvbF0pIHtcbiAgICBjbGVhclRpbWVvdXQoZWxlbWVudFtsYXN0V2hlZWxUaW1lb3V0U3ltYm9sXSk7XG4gICAgZWxlbWVudFtsYXN0V2hlZWxUaW1lb3V0U3ltYm9sXSA9IG51bGw7XG4gIH1cbn1cblxuLy8gRGVmaW5lIG91ciBvd24gc2lnbiBmdW5jdGlvbiwgc2luY2UgKGFzIG9mIE1heSAyMDE1KSwgU2FmYXJpIGFuZCBJRSBkb24ndFxuLy8gc3VwcGx5IE1hdGguc2lnbigpLlxuZnVuY3Rpb24gc2lnbih4KSB7XG4gIHJldHVybiAoeCA9PT0gMCkgP1xuICAgIDAgOlxuICAgICh4ID4gMCkgP1xuICAgICAgMSA6XG4gICAgICAtMTtcbn1cblxuLy8gVE9ETzogRGFtcGluZywgb3Igc29tZSBvdGhlciB0cmVhdG1lbnQgZm9yIGdvaW5nIHBhc3QgdGhlIGVuZHMuXG5cbi8qXG4gKiBBIHdoZWVsIGV2ZW50IGhhcyBiZWVuIGdlbmVyYXRlZC4gVGhpcyBjb3VsZCBiZSBhIHJlYWwgd2hlZWwgZXZlbnQsIG9yIGl0XG4gKiBjb3VsZCBiZSBmYWtlIChzZWUgbm90ZXMgaW4gdGhlIGhlYWRlcikuXG4gKlxuICogVGhpcyBoYW5kbGVyIHVzZXMgc2V2ZXJhbCBzdHJhdGVnaWVzIHRvIHRyeSB0byBhcHByb3hpbWF0ZSBuYXRpdmUgdHJhY2twYWRcbiAqIHN3aXBlIG5hdmlnYXRpb24uXG4gKlxuICogSWYgdGhlIHVzZXIgaGFzIGRyYWdnZWQgZW5vdWdoIHRvIGNhdXNlIGEgbmF2aWdhdGlvbiwgdGhlbiBmb3IgYSBzaG9ydFxuICogZGVsYXkgZm9sbG93aW5nIHRoYXQgbmF2aWdhdGlvbiwgc3Vic2VxdWVudCB3aGVlbCBldmVudHMgd2lsbCBiZSBpZ25vcmVkLlxuICpcbiAqIEZ1cnRoZXJtb3JlLCBmb2xsd293aW5nIGEgbmF2aWdhdGlvbiwgd2UgaWdub3JlIGFsbCB3aGVlbCBldmVudHMgdW50aWwgd2VcbiAqIHJlY2VpdmUgYXQgbGVhc3Qgb25lIGV2ZW50IHdoZXJlIHRoZSBldmVudCdzIGRlbHRhWCAoZGlzdGFuY2UgdHJhdmVsZWQpIGlzXG4gKiAqZ3JlYXRlciogdGhhbiB0aGUgcHJldmlvdXMgZXZlbnQncyBkZWx0YVguIFRoaXMgaGVscHMgdXMgZmlsdGVyIG91dCB0aGVcbiAqIGZha2Ugd2hlZWwgZXZlbnRzIGdlbmVyYXRlZCBieSB0aGUgYnJvd3NlciB0byBzaW11bGF0ZSBkZWNlbGVyYXRpb24uXG4gKlxuICovXG5mdW5jdGlvbiB3aGVlbChlbGVtZW50LCBldmVudCkge1xuXG4gIC8vIFNpbmNlIHdlIGhhdmUgYSBuZXcgd2hlZWwgZXZlbnQsIHJlc2V0IG91ciB0aW1lciB3YWl0aW5nIGZvciB0aGUgbGFzdFxuICAvLyB3aGVlbCBldmVudCB0byBwYXNzLlxuICBpZiAoZWxlbWVudFtsYXN0V2hlZWxUaW1lb3V0U3ltYm9sXSkge1xuICAgIGNsZWFyVGltZW91dChlbGVtZW50W2xhc3RXaGVlbFRpbWVvdXRTeW1ib2xdKTtcbiAgfVxuICBlbGVtZW50W2xhc3RXaGVlbFRpbWVvdXRTeW1ib2xdID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgd2hlZWxUaW1lZE91dChlbGVtZW50KTtcbiAgfSwgV0hFRUxfVElNRSk7XG5cbiAgbGV0IGRlbHRhWCA9IGV2ZW50LmRlbHRhWDtcbiAgbGV0IGRlbHRhWSA9IGV2ZW50LmRlbHRhWTtcblxuICAvLyBTZWUgaWYgZWxlbWVudCBldmVudCByZXByZXNlbnRzIGFjY2VsZXJhdGlvbiBvciBkZWNlbGVyYXRpb24uXG4gIGxldCBhY2NlbGVyYXRpb24gPSBzaWduKGRlbHRhWCkgKiAoZGVsdGFYIC0gZWxlbWVudFtsYXN0RGVsdGFYU3ltYm9sXSk7XG4gIGVsZW1lbnRbbGFzdERlbHRhWFN5bWJvbF0gPSBkZWx0YVg7XG4gIC8vIGNvbnNvbGUubG9nKGRlbHRhWCArIFwiIFwiICsgYWNjZWxlcmF0aW9uICsgXCIgXCIgKyBlbGVtZW50W2Fic29yYkRlY2VsZXJhdGlvblN5bWJvbF0gKyBcIiBcIiArIGVsZW1lbnRbcG9zdE5hdmlnYXRlRGVsYXlDb21wbGV0ZVN5bWJvbF0pO1xuXG4gIGlmIChNYXRoLmFicyhkZWx0YVgpIDwgTWF0aC5hYnMoZGVsdGFZKSkge1xuICAgIC8vIE1vdmUgd2FzIG1vc3RseSB2ZXJ0aWNhbC4gVGhlIHVzZXIgbWF5IGJlIHRyeWluZyBzY3JvbGwgd2l0aCB0aGVcbiAgICAvLyB0cmFja3BhZC93aGVlbC4gVG8gYmUgb24gdGhlIHNhZmUsIHdlIGlnbm9yZSBzdWNoIGV2ZW50cy5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoZWxlbWVudFtwb3N0TmF2aWdhdGVEZWxheUNvbXBsZXRlU3ltYm9sXSkge1xuICAgIC8vIEl0J3MgdG9vIHNvb24gYWZ0ZXIgYSBuYXZpZ2F0aW9uOyBpZ25vcmUgdGhlIGV2ZW50LlxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cblxuICBpZiAoYWNjZWxlcmF0aW9uID4gMCkge1xuICAgIC8vIFRoZSBldmVudHMgYXJlIG5vdCAob3IgYXJlIG5vIGxvbmdlcikgZGVjZWxlcmF0aW5nLCBzbyB3ZSBjYW4gc3RhcnRcbiAgICAvLyBwYXlpbmcgYXR0ZW50aW9uIHRvIHRoZW0gYWdhaW4uXG4gICAgZWxlbWVudFthYnNvcmJEZWNlbGVyYXRpb25TeW1ib2xdID0gZmFsc2U7XG4gIH0gZWxzZSBpZiAoZWxlbWVudFthYnNvcmJEZWNlbGVyYXRpb25TeW1ib2xdKSB7XG4gICAgLy8gVGhlIHdoZWVsIGV2ZW50IHdhcyBsaWtlbHkgZmFrZWQgdG8gc2ltdWxhdGUgZGVjZWxlcmF0aW9uOyBpZ25vcmUgaXQuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBlbGVtZW50W3doZWVsRGlzdGFuY2VTeW1ib2xdICs9IGRlbHRhWDtcblxuICAvLyBVcGRhdGUgdGhlIHRyYXZlbCBmcmFjdGlvbiBvZiB0aGUgZWxlbWVudCBiZWluZyBuYXZpZ2F0ZWQuXG4gIGxldCB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gIGxldCB0cmF2ZWxGcmFjdGlvbiA9IHdpZHRoID4gMCA/XG4gICAgZWxlbWVudFt3aGVlbERpc3RhbmNlU3ltYm9sXSAvIHdpZHRoIDpcbiAgICAwO1xuICBlbGVtZW50LnNob3dUcmFuc2l0aW9uID0gZmFsc2U7XG4gIHRyYXZlbEZyYWN0aW9uID0gc2lnbih0cmF2ZWxGcmFjdGlvbikgKiBNYXRoLm1pbihNYXRoLmFicyh0cmF2ZWxGcmFjdGlvbiksIDEpO1xuICBlbGVtZW50LnRyYXZlbEZyYWN0aW9uID0gdHJhdmVsRnJhY3Rpb247XG5cbiAgLy8gSWYgdGhlIHVzZXIgaGFzIGRyYWdnZWQgZW5vdWdoIHRvIHJlYWNoIHRoZSBwcmV2aW91cy9uZXh0IGl0ZW0sIHRoZW5cbiAgLy8gY29tcGxldGUgYSBuYXZpZ2F0aW9uIHRvIHRoYXQgaXRlbS5cbiAgaWYgKHRyYXZlbEZyYWN0aW9uID09PSAxKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJnb1JpZ2h0XCIpO1xuICAgIGVsZW1lbnQuc2hvd1RyYW5zaXRpb24gPSB0cnVlO1xuICAgIGVsZW1lbnQuZ29SaWdodCgpO1xuICAgIHBvc3ROYXZpZ2F0ZShlbGVtZW50KTtcbiAgfSBlbHNlIGlmICh0cmF2ZWxGcmFjdGlvbiA9PT0gLTEpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImdvTGVmdFwiKTtcbiAgICBlbGVtZW50LnNob3dUcmFuc2l0aW9uID0gdHJ1ZTtcbiAgICBlbGVtZW50LmdvTGVmdCgpO1xuICAgIHBvc3ROYXZpZ2F0ZShlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBBIHN1ZmZpY2llbnRseSBsb25nIHBlcmlvZCBvZiB0aW1lIGhhcyBwYXNzZWQgc2luY2UgdGhlIGxhc3Qgd2hlZWwgZXZlbnQuXG4vLyBXZSBzbmFwIHRoZSBzZWxlY3Rpb24gdG8gdGhlIGNsb3Nlc3QgaXRlbSwgdGhlbiByZXNldCBvdXIgc3RhdGUuXG5mdW5jdGlvbiB3aGVlbFRpbWVkT3V0KGVsZW1lbnQpIHtcbiAgLy8gY29uc29sZS5sb2coXCJ0aW1lb3V0XCIpO1xuXG4gIC8vIFNuYXAgdG8gdGhlIGNsb3Nlc3QgaXRlbS5cbiAgZWxlbWVudC5zaG93VHJhbnNpdGlvbiA9IHRydWU7XG4gIGxldCB0cmF2ZWxGcmFjdGlvbiA9IGVsZW1lbnQudHJhdmVsRnJhY3Rpb247XG4gIGlmICh0cmF2ZWxGcmFjdGlvbiA+PSAwLjUpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcInNuYXAgcmlnaHRcIik7XG4gICAgZWxlbWVudC5nb1JpZ2h0KCk7XG4gIH0gZWxzZSBpZiAodHJhdmVsRnJhY3Rpb24gPD0gLTAuNSkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwic25hcCBsZWZ0XCIpO1xuICAgIGVsZW1lbnQuZ29MZWZ0KCk7XG4gIH1cblxuICAvLyBUT0RPOiBMaXN0ZW4gZm9yIHRoZSB0cmFuc2l0aW9uIHRvIGNvbXBsZXRlLCBhbmQgdGhlbiByZXN0b3JlXG4gIC8vIHNob3dUcmFuc2l0aW9uIHRvIGZhbHNlIChvciB0aGUgcHJldmlvdXMgdmFsdWUpLlxuXG4gIHJlc2V0V2hlZWxUcmFja2luZyhlbGVtZW50KTtcbn1cbiIsIi8qKlxuICogQG1ldGhvZCBjb21wb3NlVGVtcGxhdGVzXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gdHdvIHRlbXBsYXRlcywgdGhpcyBcImZvbGRzXCIgb25lIGluc2lkZSB0aGUgb3RoZXIuIFRoaXMgaXNcbiAqIGlzIHVzZWZ1bCBmb3IgZGVmaW5pbmcgYSBjb21wb25lbnQgdGhhdCB3YW50cyB0byBmaWxsIGluIHNsb3RzIGluIHRoZVxuICogdGVtcGxhdGUgb2YgaXRzIGJhc2UgY2xhc3MuXG4gKlxuICogRm9yIG5vdywgdGhlIGZvbGRpbmcgcHJvY2VzcyBqdXN0IGVudGFpbHMgcHV0dGluZyB0aGUgZmlyc3QgaW5zaWRlIHRoZVxuICogbG9jYXRpb24gb2YgdGhlIGZpcnN0IDxzbG90PiBub2RlIGluIHRoZSBzZWNvbmQgdGVtcGxhdGUuXG4gKlxuICogRXhhbXBsZTogaWYgdGhlIGZpcnN0IChiYXNlKSB0ZW1wbGF0ZSBpc1xuICpcbiAqICAgICA8dGVtcGxhdGU+XG4gKiAgICAgICA8Yj5cbiAqICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICogICAgICAgPC9iPlxuICogICAgIDwvdGVtcGxhdGU+XG4gKlxuICogYW5kIHRoZSBzZWNvbmQgKHN1YmNsYXNzKSB0ZW1wbGF0ZSBpc1xuICpcbiAqICAgICA8dGVtcGxhdGU+XG4gKiAgICAgICBIZWxsbywgPHNsb3Q+PC9zbG90Pi5cbiAqICAgICA8L3RlbXBsYXRlPlxuICpcbiAqIFRoZW4gdGhlIHJlc3VsdCBvZiBjYWxsaW5nIGBjb21wb3NlVGVtcGxhdGVzKGZpcnN0LCBzZWNvbmQpYCBpc1xuICpcbiAqICAgICA8dGVtcGxhdGU+XG4gKiAgICAgICA8Yj5cbiAqICAgICAgICAgSGVsbG8sIDxzbG90Pjwvc2xvdD4uXG4gKiAgICAgICA8L2I+XG4gKiAgICAgPC90ZW1wbGF0ZT5cbiAqXG4gKiBOb3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgYSBtaXhpbiwgYnV0IGEgaGVscGVyIGZvciBjcmVhdGluZyB3ZWJcbiAqIGNvbXBvbmVudHMuXG4gKlxuICogQHBhcmFtIHsoSFRNTFRlbXBsYXRlfHN0cmluZyl9IGJhc2VUZW1wbGF0ZSAtIFRoZSBiYXNlIGNsYXNzIHRlbXBsYXRlLlxuICogQHBhcmFtIHsoSFRNTFRlbXBsYXRlfHN0cmluZyl9IHN1YlRlbXBsYXRlIC0gVGhlIHN1YmNsYXNzIHRlbXBsYXRlLlxuICovXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcG9zZVRlbXBsYXRlcyhiYXNlVGVtcGxhdGUsIHN1YlRlbXBsYXRlKSB7XG5cbiAgaWYgKCFiYXNlVGVtcGxhdGUpIHtcbiAgICAvLyBObyBmb2xkaW5nIG5lY2Vzc2FyeS5cbiAgICByZXR1cm4gc3ViVGVtcGxhdGU7XG4gIH1cblxuICBiYXNlVGVtcGxhdGUgPSBtYWtlVGVtcGxhdGUoYmFzZVRlbXBsYXRlKTtcbiAgc3ViVGVtcGxhdGUgPSBtYWtlVGVtcGxhdGUoc3ViVGVtcGxhdGUpO1xuICBsZXQgYmFzZUVsZW1lbnQgPSBiYXNlVGVtcGxhdGUgJiYgYmFzZVRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICBsZXQgbWl4aW5FbGVtZW50ID0gc3ViVGVtcGxhdGUgJiYgc3ViVGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgbGV0IGZvbGRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cbiAgLy8gRm9sZCBtaXhpbiB0ZW1wbGF0ZSBpbnRvIGZpcnN0IHNsb3QgZWxlbWVudCBpbiBiYXNlIHRlbXBsYXRlLlxuICAvLyBUT0RPOiBTdXBwb3J0IG5hbWVkIHNsb3RzLlxuICBsZXQgc2xvdE5vZGUgPSBiYXNlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzbG90Jyk7XG4gIGlmIChzbG90Tm9kZSkge1xuICAgIHNsb3ROb2RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG1peGluRWxlbWVudCwgc2xvdE5vZGUpO1xuICAgIGZvbGRlZC5jb250ZW50LmFwcGVuZENoaWxkKGJhc2VFbGVtZW50KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBObyBwbGFjZSBpbiBiYXNlIGZvciBtaXhpbiB0ZW1wbGF0ZSAtLSB0aHJvdyBtaXhpbiB0ZW1wbGF0ZSBhd2F5LlxuICAgIGZvbGRlZC5jb250ZW50LmFwcGVuZENoaWxkKGJhc2VFbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb2xkZWQ7XG59XG5cblxuZnVuY3Rpb24gbWFrZVRlbXBsYXRlKGh0bWxPclRlbXBsYXRlKSB7XG4gIHJldHVybiB0eXBlb2YgaHRtbE9yVGVtcGxhdGUgPT09ICdzdHJpbmcnID9cbiAgICBjcmVhdGVUZW1wbGF0ZVdpdGhJbm5lckhUTUwoaHRtbE9yVGVtcGxhdGUpIDpcbiAgICBodG1sT3JUZW1wbGF0ZTtcbn1cblxuXG4vLyBUT0RPOiBTaGFyZSB3aXRoIFNoYWRvd1RlbXBsYXRlLlxuLy8gQ29udmVydCBhIHBsYWluIHN0cmluZyBvZiBIVE1MIGludG8gYSByZWFsIHRlbXBsYXRlIGVsZW1lbnQuXG5mdW5jdGlvbiBjcmVhdGVUZW1wbGF0ZVdpdGhJbm5lckhUTUwoaW5uZXJIVE1MKSB7XG4gIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gIC8vIFJFVklFVzogSXMgdGhlcmUgYW4gZWFzaWVyIHdheSB0byBkbyB0aGlzP1xuICAvLyBXZSdkIGxpa2UgdG8ganVzdCBzZXQgaW5uZXJIVE1MIG9uIHRoZSB0ZW1wbGF0ZSBjb250ZW50LCBidXQgc2luY2UgaXQnc1xuICAvLyBhIERvY3VtZW50RnJhZ21lbnQsIHRoYXQgZG9lc24ndCB3b3JrLlxuICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gIHdoaWxlIChkaXYuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgdGVtcGxhdGUuY29udGVudC5hcHBlbmRDaGlsZChkaXYuY2hpbGROb2Rlc1swXSk7XG4gIH1cbiAgcmV0dXJuIHRlbXBsYXRlO1xufVxuIiwiLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIGEgc3ltYm9sIHRoYXQgY2FuIGJlIHVzZWQgZm9yIGFzc29jaWF0aW5nIHByaXZhdGVcbiAqIGRhdGEgd2l0aCBhbiBlbGVtZW50LlxuICpcbiAqIE1peGlucyBhbmQgY29tcG9uZW50IGNsYXNzZXMgb2Z0ZW4gd2FudCB0byBhc3NvY2lhdGUgcHJpdmF0ZSBkYXRhIHdpdGggYW5cbiAqIGVsZW1lbnQgaW5zdGFuY2UsIGJ1dCBKYXZhU2NyaXB0IGRvZXMgbm90IGhhdmUgZGlyZWN0IHN1cHBvcnQgZm9yIHRydWVcbiAqIHByaXZhdGUgcHJvcGVydGllcy4gT25lIGFwcHJvYWNoIGlzIHRvIHVzZSB0aGVcbiAqIFtTeW1ib2xdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1N5bWJvbClcbiAqIGRhdGEgdHlwZSB0byBzZXQgYW5kIHJldHJpZXZlIGRhdGEgb24gYW4gZWxlbWVudC5cbiAqXG4gKiBVbmZvcnR1bmF0ZWx5LCB0aGUgU3ltYm9sIHR5cGUgaXMgbm90IGF2YWlsYWJsZSBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMS4gVGhlXG4gKiBgY3JlYXRlU3ltYm9sYCBoZWxwZXIgZnVuY3Rpb24gZXhpc3RzIGFzIGEgd29ya2Fyb3VuZCBmb3IgSUUgMTEuIFJhdGhlciB0aGFuXG4gKiByZXR1cm5pbmcgYSB0cnVlIFN5bWJvbCwgaXQgc2ltcGx5IHJldHVybnMgYW4gdW5kZXJzY29yZS1wcmVmaXhlZCBzdHJpbmcuXG4gKlxuICogVXNhZ2U6XG4gKlxuICogICAgIGNvbnN0IGZvb1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnZm9vJyk7XG4gKlxuICogICAgIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAqICAgICAgIGdldCBmb28oKSB7XG4gKiAgICAgICAgIHJldHVybiB0aGlzW2Zvb1N5bWJvbF07XG4gKiAgICAgICB9XG4gKiAgICAgICBzZXQgZm9vKHZhbHVlKSB7XG4gKiAgICAgICAgIHRoaXNbZm9vU3ltYm9sXSA9IHZhbHVlO1xuICogICAgICAgfVxuICogICAgIH1cbiAqXG4gKiBJbiBJRSAxMSwgdGhpcyBzYW1wbGUgd2lsbCBcImhpZGVcIiBkYXRhIGJlaGluZCBhbiBpbnN0YW5jZSBwcm9wZXJ0eSB0aGlzLl9mb28uXG4gKiBUaGUgdXNlIG9mIHRoZSB1bmRlcnNjb3JlIGlzIG1lYW50IHRvIHJlZHVjZSAobm90IGVsaW1pbmF0ZSkgdGhlIHBvdGVudGlhbFxuICogZm9yIG5hbWUgY29uZmxpY3RzLCBhbmQgZGlzY291cmFnZSAobm90IHByZXZlbnQpIGV4dGVybmFsIGFjY2VzcyB0byB0aGlzXG4gKiBkYXRhLiBJbiBtb2Rlcm4gYnJvd3NlcnMsIHRoZSBhYm92ZSBjb2RlIHdpbGwgZWxpbWluYXRlIHRoZSBwb3RlbnRpYWwgb2ZcbiAqIG5hbWluZyBjb25mbGljdHMsIGFuZCBiZXR0ZXIgaGlkZSB0aGUgZGF0YSBiZWhpbmQgYSByZWFsIFN5bWJvbC5cbiAqXG4gKiBAZnVuY3Rpb24gY3JlYXRlU3ltYm9sXG4gKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb24gLSBBIHN0cmluZyB0byBpZGVudGlmeSB0aGUgc3ltYm9sIHdoZW4gZGVidWdnaW5nXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVN5bWJvbChkZXNjcmlwdGlvbikge1xuICByZXR1cm4gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgU3ltYm9sKGRlc2NyaXB0aW9uKSA6XG4gICAgYF8ke2Rlc2NyaXB0aW9ufWA7XG59XG4iLCIvKlxuICogTWljcm90YXNrIGhlbHBlciBmb3IgSUUgMTEuXG4gKlxuICogRXhlY3V0aW5nIGEgZnVuY3Rpb24gYXMgYSBtaWNyb3Rhc2sgaXMgdHJpdmlhbCBpbiBicm93c2VycyB0aGF0IHN1cHBvcnRcbiAqIHByb21pc2VzLCB3aG9zZSB0aGVuKCkgY2xhdXNlcyB1c2UgbWljcm90YXNrIHRpbWluZy4gSUUgMTEgZG9lc24ndCBzdXBwb3J0XG4gKiBwcm9taXNlcywgYnV0IGRvZXMgc3VwcG9ydCBNdXRhdGlvbk9ic2VydmVycywgd2hpY2ggYXJlIGFsc28gZXhlY3V0ZWQgYXNcbiAqIG1pY3JvdGFza3MuIFNvIHRoaXMgaGVscGVyIHVzZXMgYW4gTXV0YXRpb25PYnNlcnZlciB0byBhY2hpZXZlIG1pY3JvdGFza1xuICogdGltaW5nLlxuICpcbiAqIFNlZSBodHRwczovL2pha2VhcmNoaWJhbGQuY29tLzIwMTUvdGFza3MtbWljcm90YXNrcy1xdWV1ZXMtYW5kLXNjaGVkdWxlcy9cbiAqXG4gKiBJbnNwaXJlZCBieSBQb2x5bWVyJ3MgYXN5bmMoKSBmdW5jdGlvbi5cbiAqL1xuXG5cbi8vIFRoZSBxdWV1ZSBvZiBwZW5kaW5nIGNhbGxiYWNrcyB0byBiZSBleGVjdXRlZCBhcyBtaWNyb3Rhc2tzLlxubGV0IGNhbGxiYWNrcyA9IFtdO1xuXG4vLyBDcmVhdGUgYW4gZWxlbWVudCB0aGF0IHdlIHdpbGwgbW9kaWZ5IHRvIGZvcmNlIG9ic2VydmFibGUgbXV0YXRpb25zLlxubGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG5cbi8vIEEgbW9ub3RvbmljYWxseS1pbmNyZWFzaW5nIHZhbHVlLlxubGV0IGNvdW50ZXIgPSAwO1xuXG5cbi8qKlxuICogQWRkIGEgY2FsbGJhY2sgdG8gdGhlIG1pY3JvdGFzayBxdWV1ZS5cbiAqXG4gKiBUaGlzIHVzZXMgYSBNdXRhdGlvbk9ic2VydmVyIHNvIHRoYXQgaXQgd29ya3Mgb24gSUUgMTEuXG4gKlxuICogTk9URTogSUUgMTEgbWF5IGFjdHVhbGx5IHVzZSB0aW1lb3V0IHRpbWluZyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJzLiBUaGlzXG4gKiBuZWVkcyBtb3JlIGludmVzdGlnYXRpb24uXG4gKlxuICogQGZ1bmN0aW9uIG1pY3JvdGFza1xuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWljcm90YXNrKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgLy8gRm9yY2UgYSBtdXRhdGlvbi5cbiAgZWxlbWVudC50ZXh0Q29udGVudCA9ICsrY291bnRlcjtcbn1cblxuXG4vLyBFeGVjdXRlIGFueSBwZW5kaW5nIGNhbGxiYWNrcy5cbmZ1bmN0aW9uIGV4ZWN1dGVDYWxsYmFja3MoKSB7XG4gIHdoaWxlIChjYWxsYmFja3MubGVuZ3RoID4gMCkge1xuICAgIGxldCBjYWxsYmFjayA9IGNhbGxiYWNrcy5zaGlmdCgpO1xuICAgIGNhbGxiYWNrKCk7XG4gIH1cbn1cblxuXG4vLyBDcmVhdGUgdGhlIG9ic2VydmVyLlxubGV0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZXhlY3V0ZUNhbGxiYWNrcyk7XG5vYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIHtcbiAgY2hhcmFjdGVyRGF0YTogdHJ1ZVxufSk7XG4iLCIvKipcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3Igc3RhbmRhcmQgY2xhc3NMaXN0LnRvZ2dsZSgpIGJlaGF2aW9yIG9uIG9sZCBicm93c2VycyxcbiAqIG5hbWVseSBJRSAxMS5cbiAqXG4gKiBUaGUgc3RhbmRhcmRcbiAqIFtjbGFzc2xpc3RdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FbGVtZW50L2NsYXNzTGlzdClcbiAqIG9iamVjdCBoYXMgYSBgdG9nZ2xlKClgIGZ1bmN0aW9uIHRoYXQgc3VwcG9ydHMgYSBzZWNvbmQgQm9vbGVhbiBwYXJhbWV0ZXJcbiAqIHRoYXQgY2FuIGJlIHVzZWQgdG8gc3VjY2luY3RseSB0dXJuIGEgY2xhc3Mgb24gb3Igb2ZmLiBUaGlzIGZlYXR1cmUgaXMgb2Z0ZW5cbiAqIHVzZWZ1bCBpbiBkZXNpZ25pbmcgY3VzdG9tIGVsZW1lbnRzLCB3aGljaCBtYXkgd2FudCB0byBleHRlcm5hbGx5IHJlZmxlY3RcbiAqIGNvbXBvbmVudCBzdGF0ZSBpbiBhIENTUyBjbGFzcyB0aGF0IGNhbiBiZSB1c2VkIGZvciBzdHlsaW5nIHB1cnBvc2VzLlxuICpcbiAqIFVuZm9ydHVuYXRlbHksIElFIDExIGRvZXMgbm90IHN1cHBvcnQgdGhlIEJvb2xlYW4gcGFyYW1ldGVyIHRvXG4gKiBgY2xhc3NMaXN0LnRvZ2dsZSgpYC4gVGhpcyBoZWxwZXIgZnVuY3Rpb24gYmVoYXZlcyBsaWtlIHRoZSBzdGFuZGFyZFxuICogYHRvZ2dsZSgpYCwgaW5jbHVkaW5nIHN1cHBvcnQgZm9yIHRoZSBCb29sZWFuIHBhcmFtZXRlciwgc28gdGhhdCBpdCBjYW4gYmVcbiAqIHVzZWQgZXZlbiBvbiBJRSAxMS5cbiAqXG4gKiBAZnVuY3Rpb24gdG9nZ2xlQ2xhc3NcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZWxlbWVudCB0byBtb2RpZnlcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgLSBUaGUgY2xhc3MgdG8gYWRkL3JlbW92ZVxuICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdIC0gRm9yY2UgdGhlIGNsYXNzIHRvIGJlIGFkZGVkIChpZiB0cnVlKSBvciByZW1vdmVkXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaWYgZmFsc2UpXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSwgZm9yY2UpIHtcbiAgbGV0IGNsYXNzTGlzdCA9IGVsZW1lbnQuY2xhc3NMaXN0O1xuICBsZXQgYWRkQ2xhc3MgPSAodHlwZW9mIGZvcmNlID09PSAndW5kZWZpbmVkJykgP1xuICAgICFjbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSA6XG4gICAgZm9yY2U7XG4gIGlmIChhZGRDbGFzcykge1xuICAgIGNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBjbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gIH1cbiAgcmV0dXJuIGFkZENsYXNzO1xufVxuIl19
