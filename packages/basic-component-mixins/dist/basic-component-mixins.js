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

var _safeAttributes = require('./src/safeAttributes');

var _safeAttributes2 = _interopRequireDefault(_safeAttributes);

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

var _symbols = require('./src/symbols');

var _symbols2 = _interopRequireDefault(_symbols);

var _TargetInCollective = require('./src/TargetInCollective');

var _TargetInCollective2 = _interopRequireDefault(_TargetInCollective);

var _TargetSelection = require('./src/TargetSelection');

var _TargetSelection2 = _interopRequireDefault(_TargetSelection);

var _TimerSelection = require('./src/TimerSelection');

var _TimerSelection2 = _interopRequireDefault(_TimerSelection);

var _TrackpadDirection = require('./src/TrackpadDirection');

var _TrackpadDirection2 = _interopRequireDefault(_TrackpadDirection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Basic = window.Basic || {}; /*
                                    * This file is transpiled to create an ES5-compatible distribution in which
                                    * the package's main feature(s) are available via the window.Basic global.
                                    * If you're already using ES6 yourself, ignore this file, and instead import
                                    * the source file(s) you want from the src folder.
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
window.Basic.safeAttributes = _safeAttributes2.default;
window.Basic.SelectionAnimation = _SelectionAnimation2.default;
window.Basic.SelectionAriaActive = _SelectionAriaActive2.default;
window.Basic.SelectionHighlight = _SelectionHighlight2.default;
window.Basic.SelectionInView = _SelectionInView2.default;
window.Basic.ShadowElementReferences = _ShadowElementReferences2.default;
window.Basic.ShadowTemplate = _ShadowTemplate2.default;
window.Basic.SwipeDirection = _SwipeDirection2.default;
window.Basic.symbols = _symbols2.default;
window.Basic.TargetInCollective = _TargetInCollective2.default;
window.Basic.TargetSelection = _TargetSelection2.default;
window.Basic.TimerSelection = _TimerSelection2.default;
window.Basic.TrackpadDirection = _TrackpadDirection2.default;

},{"./src/AttributeMarshalling":2,"./src/ClickSelection":3,"./src/Collective":4,"./src/Composable":5,"./src/ContentAsItems":6,"./src/ContentFirstChildTarget":7,"./src/DirectionSelection":8,"./src/DistributedChildren":9,"./src/DistributedChildrenAsContent":10,"./src/Generic":12,"./src/Keyboard":13,"./src/KeyboardDirection":14,"./src/KeyboardPagedSelection":15,"./src/KeyboardPrefixSelection":16,"./src/SelectionAnimation":17,"./src/SelectionAriaActive":18,"./src/SelectionHighlight":19,"./src/SelectionInView":20,"./src/ShadowElementReferences":21,"./src/ShadowTemplate":22,"./src/SingleSelection":23,"./src/SwipeDirection":24,"./src/TargetInCollective":25,"./src/TargetSelection":26,"./src/TimerSelection":27,"./src/TrackpadDirection":28,"./src/composeTemplates":29,"./src/createSymbol":30,"./src/microtask":31,"./src/safeAttributes":32,"./src/symbols":33}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _safeAttributes = require('./safeAttributes');

var _safeAttributes2 = _interopRequireDefault(_safeAttributes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Memoized maps of attribute to property names and vice versa.
var attributeToPropertyNames = {};
var propertyNamesToAttributes = {};

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
        _safeAttributes2.default.connected(this);
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
        return _safeAttributes2.default.setAttribute(this, attribute, value);
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
       * @param {object} value - True to set the class, false to remove it.
       */

    }, {
      key: 'reflectClass',
      value: function reflectClass(className, value) {
        return _safeAttributes2.default.toggleClass(this, className, value);
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

},{"./safeAttributes":32}],3:[function(require,module,exports){
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

    this.assimilate(elements);
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
      var _this = this;

      var collectiveChanged = void 0;
      if (target instanceof Collective) {
        // Assimlate another collective.
        collectiveChanged = assimilateCollective(this, target);
      } else if (target instanceof Array) {
        // Assimilate an array of elements.
        target.forEach(function (element) {
          var elementAdded = assimilateElement(_this, element);
          collectiveChanged = collectiveChanged || elementAdded;
        });
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

    /**
     * Set a default attribute on an element that may be in a collective. This
     * function is designed to help collectives work with browser features like
     * keyboard support and ARIA, where only the outermost member of a collective
     * should expose, e.g., tabindex or ARIA attributes.
     *
     * If the element is not in a collective, and the element doesn't have the
     * given attribute, set the attribute on the element to the default value.
     *
     * If the element *is* in a collective, scan the collective's inner members
     * to see if any of them have the attribute. If so, promote that value to the
     * outermost element. If a `residualValue` is supplied, set the inner members'
     * attribute to that value; otherwise, remove the attribute from the inner
     * member.
     *
     * @param {HTMLElement} element - An element that may or may not be in a collective.
     * @param {string} attributeName - The name of the attribute.
     * @param {string} [defaultValue] - The default value for the attribute.
     */

  }], [{
    key: 'promoteAttribute',
    value: function promoteAttribute(element, attributeName, defaultValue, residualValue) {
      var outermost = void 0;
      var attributeValue = defaultValue;
      if (!element.collective) {
        // Element isn't part of a collective; treat it as outermost.
        outermost = element;

        // REVIEW: Uncommenting these lines makes collectives more efficient, as
        // only the outermost element in the collective will do the attribute work.
        // However, that requires that all members of a collective implement the
        // same mixins (e.g., SelectionAriaActive), which feels limiting. Leaving
        // this in here as a comment until this can be considered further.

        // } else if (element !== element.collective.outermostElement) {
        //   // Let the outermost element handle this.
        //   return;
      } else {
        // Scan inner elements, working from inside (end) toward out (start).
        // Pick up any attribute value they have and remove it.
        var elements = element.collective.elements;
        outermost = elements[0];
        for (var i = elements.length - 1; i > 0; i--) {
          var innerElement = elements[i];
          var innerAttributeValue = innerElement.getAttribute(attributeName);
          if (innerAttributeValue && innerAttributeValue !== residualValue) {
            attributeValue = innerAttributeValue;
            if (residualValue) {
              innerElement.setAttribute(attributeName, residualValue);
            } else {
              innerElement.removeAttribute(attributeName);
            }
          } else if (!innerAttributeValue && residualValue) {
            innerElement.setAttribute(attributeName, residualValue);
          }
        }
      }
      if (attributeValue) {
        // Set attribute on outermost element if it doesn't already have it, or
        // if the existing attribute value is the default.
        var existingAttributeValue = outermost.getAttribute(attributeName);
        if (!existingAttributeValue || existingAttributeValue === defaultValue && attributeValue !== defaultValue) {
          outermost.setAttribute(attributeName, attributeValue);
        }
      }
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

var _symbols = require('./symbols');

var _symbols2 = _interopRequireDefault(_symbols);

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
      key: _symbols2.default.applySelection,


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
      value: function value(item, selected) {
        if (_get(ContentAsItems.prototype.__proto__ || Object.getPrototypeOf(ContentAsItems.prototype), _symbols2.default.applySelection, this)) {
          _get(ContentAsItems.prototype.__proto__ || Object.getPrototypeOf(ContentAsItems.prototype), _symbols2.default.applySelection, this).call(this, item, selected);
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
      key: _symbols2.default.itemAdded,
      value: function value(item) {
        if (_get(ContentAsItems.prototype.__proto__ || Object.getPrototypeOf(ContentAsItems.prototype), _symbols2.default.itemAdded, this)) {
          _get(ContentAsItems.prototype.__proto__ || Object.getPrototypeOf(ContentAsItems.prototype), _symbols2.default.itemAdded, this).call(this, item);
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
            _this2[_symbols2.default.itemAdded](item);
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

},{"./createSymbol":30,"./symbols":33,"./toggleClass":34}],7:[function(require,module,exports){
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

var _symbols = require('./symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      key: _symbols2.default.goDown,
      value: function value() {
        if (_get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goDown, this)) {
          _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goDown, this).call(this);
        }
        return this.selectNext();
      }
    }, {
      key: _symbols2.default.goEnd,
      value: function value() {
        if (_get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goEnd, this)) {
          _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goEnd, this).call(this);
        }
        return this.selectLast();
      }
    }, {
      key: _symbols2.default.goLeft,
      value: function value() {
        if (_get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goLeft, this)) {
          _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goLeft, this).call(this);
        }
        return this.selectPrevious();
      }
    }, {
      key: _symbols2.default.goRight,
      value: function value() {
        if (_get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goRight, this)) {
          _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goRight, this).call(this);
        }
        return this.selectNext();
      }
    }, {
      key: _symbols2.default.goStart,
      value: function value() {
        if (_get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goStart, this)) {
          _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goStart, this).call(this);
        }
        return this.selectFirst();
      }
    }, {
      key: _symbols2.default.goUp,
      value: function value() {
        if (_get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goUp, this)) {
          _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goUp, this).call(this);
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

},{"./symbols":33}],9:[function(require,module,exports){
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
    var bound = itemCount - 1;
    var damped = void 0;
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
    // const index = Math.trunc(selection);
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

var _safeAttributes = require('./safeAttributes');

var _safeAttributes2 = _interopRequireDefault(_safeAttributes);

var _symbols = require('./symbols');

var _symbols2 = _interopRequireDefault(_symbols);

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
        _this.generic = _this[_symbols2.default.defaults].generic;
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
        _safeAttributes2.default.connected(this);
      }
    }, {
      key: _symbols2.default.defaults,
      get: function get() {
        var defaults = _get(Generic.prototype.__proto__ || Object.getPrototypeOf(Generic.prototype), _symbols2.default.defaults, this) || {};
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

        // We roll our own attribute setting so that an explicitly false value
        // shows up as generic="false".
        if (parsed === false) {
          // Explicitly use false string.
          _safeAttributes2.default.setAttribute(this, 'generic', 'false');
        } else if (parsed == null) {
          // Explicitly remove attribute. (Always safe to do this.)
          this.removeAttribute('generic');
        } else {
          // Use the empty string to get attribute to appear with no value.
          _safeAttributes2.default.setAttribute(this, 'generic', '');
        }
      }
    }]);

    return Generic;
  }(base);

  return Generic;
};

},{"./createSymbol":30,"./safeAttributes":32,"./symbols":33}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Collective = require('./Collective');

var _Collective2 = _interopRequireDefault(_Collective);

var _createSymbol = require('./createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _safeAttributes = require('./safeAttributes');

var _safeAttributes2 = _interopRequireDefault(_safeAttributes);

var _symbols = require('./symbols');

var _symbols2 = _interopRequireDefault(_symbols);

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
   *     [symbols.keydown](event) {
   *       let handled;
   *       switch (event.keyCode) {
   *         // Handle the keys you want, setting handled = true if appropriate.
   *       }
   *       // Prefer mixin result if it's defined, otherwise use base result.
   *       return handled || (super[symbols.keydown] && super[symbols.keydown](event));
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

        if (!isListeningToKeydown(this)) {
          startListeningToKeydown(this);
        }

        if (this.isConnected) {
          _Collective2.default.promoteAttribute(this, 'tabindex', '0');
          _Collective2.default.promoteAttribute(this, 'aria-label');
        }
      }
    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(Keyboard.prototype.__proto__ || Object.getPrototypeOf(Keyboard.prototype), 'connectedCallback', this)) {
          _get(Keyboard.prototype.__proto__ || Object.getPrototypeOf(Keyboard.prototype), 'connectedCallback', this).call(this);
        }
        _safeAttributes2.default.connected(this);
        // Set a default tab index of 0 (document order) if no tab index exists.
        _Collective2.default.promoteAttribute(this, 'tabindex', '0');
        _Collective2.default.promoteAttribute(this, 'aria-label');
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
      key: _symbols2.default.keydown,
      value: function value(event) {
        if (_get(Keyboard.prototype.__proto__ || Object.getPrototypeOf(Keyboard.prototype), _symbols2.default.keydown, this)) {
          return _get(Keyboard.prototype.__proto__ || Object.getPrototypeOf(Keyboard.prototype), _symbols2.default.keydown, this).call(this, event);
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
      handled = element[_symbols2.default.keydown] && element[_symbols2.default.keydown](event);
      if (handled) {
        break;
      }
    }
  } else {
    // Component is handling the keyboard on its own.
    handled = this[_symbols2.default.keydown](event);
  }

  if (handled) {
    event.preventDefault();
    event.stopPropagation();
  }
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
}

},{"./Collective":4,"./createSymbol":30,"./safeAttributes":32,"./symbols":33}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createSymbol = require('./createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _symbols = require('./symbols');

var _symbols2 = _interopRequireDefault(_symbols);

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
        _this.navigationAxis = _this[_symbols2.default.defaults].navigationAxis;
      }
      return _this;
    }

    _createClass(KeyboardDirection, [{
      key: _symbols2.default.goDown,


      /**
       * Invoked when the user wants to go/navigate down.
       * The default implementation of this method does nothing.
       */
      value: function value() {
        if (_get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goDown, this)) {
          return _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goDown, this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate to the end (e.g., of a list).
       * The default implementation of this method does nothing.
       */

    }, {
      key: _symbols2.default.goEnd,
      value: function value() {
        if (_get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goEnd, this)) {
          return _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goEnd, this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate left.
       * The default implementation of this method does nothing.
       */

    }, {
      key: _symbols2.default.goLeft,
      value: function value() {
        if (_get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goLeft, this)) {
          return _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goLeft, this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate right.
       * The default implementation of this method does nothing.
       */

    }, {
      key: _symbols2.default.goRight,
      value: function value() {
        if (_get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goRight, this)) {
          return _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goRight, this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate to the start (e.g., of a
       * list). The default implementation of this method does nothing.
       */

    }, {
      key: _symbols2.default.goStart,
      value: function value() {
        if (_get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goStart, this)) {
          return _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goStart, this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate up.
       * The default implementation of this method does nothing.
       */

    }, {
      key: _symbols2.default.goUp,
      value: function value() {
        if (_get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goUp, this)) {
          return _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goUp, this).call(this);
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
      key: _symbols2.default.keydown,
      value: function value(event) {
        var handled = void 0;

        var axis = this.navigationAxis;
        var horizontal = axis === 'horizontal' || axis === 'both';
        var vertical = axis === 'vertical' || axis === 'both';

        // Ignore Left/Right keys when metaKey or altKey modifier is also pressed,
        // as the user may be trying to navigate back or forward in the browser.
        switch (event.keyCode) {
          case 35:
            // End
            handled = this[_symbols2.default.goEnd]();
            break;
          case 36:
            // Home
            handled = this[_symbols2.default.goStart]();
            break;
          case 37:
            // Left
            if (horizontal && !event.metaKey && !event.altKey) {
              handled = this[_symbols2.default.goLeft]();
            }
            break;
          case 38:
            // Up
            if (vertical) {
              handled = event.altKey ? this[_symbols2.default.goStart]() : this[_symbols2.default.goUp]();
            }
            break;
          case 39:
            // Right
            if (horizontal && !event.metaKey && !event.altKey) {
              handled = this[_symbols2.default.goRight]();
            }
            break;
          case 40:
            // Down
            if (vertical) {
              handled = event.altKey ? this[_symbols2.default.goEnd]() : this[_symbols2.default.goDown]();
            }
            break;
        }
        // Prefer mixin result if it's defined, otherwise use base result.
        return handled || _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.keydown, this) && _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.keydown, this).call(this, event);
      }
    }, {
      key: _symbols2.default.defaults,
      get: function get() {
        var defaults = _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.defaults, this) || {};
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

},{"./createSymbol":30,"./symbols":33}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _symbols = require('./symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      key: _symbols2.default.keydown,
      value: function value(event) {
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
        return handled || _get(KeyboardPagedSelection.prototype.__proto__ || Object.getPrototypeOf(KeyboardPagedSelection.prototype), _symbols2.default.keydown, this) && _get(KeyboardPagedSelection.prototype.__proto__ || Object.getPrototypeOf(KeyboardPagedSelection.prototype), _symbols2.default.keydown, this).call(this, event);
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

},{"./symbols":33}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createSymbol = require('./createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _symbols = require('./symbols');

var _symbols2 = _interopRequireDefault(_symbols);

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
      key: _symbols2.default.keydown,


      // TODO: If the set of items is changed, reset the prefix.
      // itemsChanged() {
      //   this[itemTextContentsSymbol] = null;
      //   resetTypedPrefix(this);
      // }

      // TODO: If the selection is changed by some other means (e.g., arrow keys)
      // other than prefix typing, then that act should reset the prefix.

      value: function value(event) {
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
        return handled || _get(KeyboardPrefixSelection.prototype.__proto__ || Object.getPrototypeOf(KeyboardPrefixSelection.prototype), _symbols2.default.keydown, this) && _get(KeyboardPrefixSelection.prototype.__proto__ || Object.getPrototypeOf(KeyboardPrefixSelection.prototype), _symbols2.default.keydown, this).call(this, event);
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

},{"./createSymbol":30,"./symbols":33}],17:[function(require,module,exports){
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

var _symbols = require('./symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var animationSymbol = (0, _createSymbol2.default)('animation');
var draggingSymbol = (0, _createSymbol2.default)('dragging');
var lastAnimationSymbol = (0, _createSymbol2.default)('lastAnimation');
var playingAnimationSymbol = (0, _createSymbol2.default)('animatingSelection');
var previousSelectionSymbol = (0, _createSymbol2.default)('previousSelection');
var selectionAnimationDurationSymbol = (0, _createSymbol2.default)('selectionAnimationDuration');
var selectionAnimationEffectSymbol = (0, _createSymbol2.default)('selectionAnimationEffect');
var selectionAnimationKeyframesSymbol = (0, _createSymbol2.default)('selectionAnimationKeyframes');
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
        _this.selectionAnimationDuration = _this[_symbols2.default.defaults].selectionAnimationDuration;
      }
      if (typeof _this.selectionAnimationEffect === 'undefined' && _this.selectionAnimationKeyframes == null) {
        _this.selectionAnimationEffect = _this[_symbols2.default.defaults].selectionAnimationEffect;
      }

      _this[_symbols2.default.dragging] = false;
      return _this;
    }

    _createClass(SelectionAnimation, [{
      key: _symbols2.default.itemAdded,
      value: function value(item) {
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
      key: _symbols2.default.defaults,
      get: function get() {
        var defaults = _get(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), _symbols2.default.defaults, this) || {};
        defaults.selectionAnimationDuration = 250;
        defaults.selectionAnimationEffect = 'slide';
        return defaults;
      }

      /*
       * Provide backing for the dragging property.
       * Also, when a drag begins, reset the animations.
       */

    }, {
      key: _symbols2.default.dragging,
      get: function get() {
        return this[draggingSymbol];
      },
      set: function set(value) {
        var previousValue = this[_symbols2.default.dragging];
        this[draggingSymbol] = value;
        if (_symbols2.default.dragging in base.prototype) {
          _set(SelectionAnimation.prototype.__proto__ || Object.getPrototypeOf(SelectionAnimation.prototype), _symbols2.default.dragging, value, this);
        }
        if (value && !previousValue) {
          // Have begun a drag.
          this[resetAnimationsOnNextRenderSymbol] = true;
        }
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
  if (!element[_symbols2.default.dragging] && previousSelection != null && previousSelection !== selection) {
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

},{"./FractionalSelection":11,"./createSymbol":30,"./symbols":33}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Collective = require('./Collective');

var _Collective2 = _interopRequireDefault(_Collective);

var _symbols = require('./symbols');

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
   * `[symbols.applySelection]`, `itemAdded`, and `selectedIndex`. You can supply these
   * yourself, or do so via the [SingleSelection](SingleSelection.md) mixin.
   */
  var SelectionAriaActive = function (_base) {
    _inherits(SelectionAriaActive, _base);

    function SelectionAriaActive() {
      _classCallCheck(this, SelectionAriaActive);

      return _possibleConstructorReturn(this, (SelectionAriaActive.__proto__ || Object.getPrototypeOf(SelectionAriaActive)).apply(this, arguments));
    }

    _createClass(SelectionAriaActive, [{
      key: _symbols2.default.applySelection,
      value: function value(item, selected) {
        if (_get(SelectionAriaActive.prototype.__proto__ || Object.getPrototypeOf(SelectionAriaActive.prototype), _symbols2.default.applySelection, this)) {
          _get(SelectionAriaActive.prototype.__proto__ || Object.getPrototypeOf(SelectionAriaActive.prototype), _symbols2.default.applySelection, this).call(this, item, selected);
        }
        item.setAttribute('aria-selected', selected);
        var itemId = item.id;
        if (itemId) {
          if (selected) {
            getOutermostElement(this).setAttribute('aria-activedescendant', itemId);
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
      key: _symbols2.default.itemAdded,
      value: function value(item) {
        if (_get(SelectionAriaActive.prototype.__proto__ || Object.getPrototypeOf(SelectionAriaActive.prototype), _symbols2.default.itemAdded, this)) {
          _get(SelectionAriaActive.prototype.__proto__ || Object.getPrototypeOf(SelectionAriaActive.prototype), _symbols2.default.itemAdded, this).call(this, item);
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
        if (item == null) {
          // Selection was removed.
          getOutermostElement(this).removeAttribute('aria-activedescendant');
        }
      }
    }]);

    return SelectionAriaActive;
  }(base);

  return SelectionAriaActive;
};

function getOutermostElement(element) {
  return element.collective ? element.collective.outermostElement : element;
}

function setAriaAttributes(element) {
  if (!element.isConnected) {
    return;
  }
  _Collective2.default.promoteAttribute(element, 'aria-activedescendant');
  _Collective2.default.promoteAttribute(element, 'role', 'listbox', 'none');
}

},{"./Collective":4,"./symbols":33}],19:[function(require,module,exports){
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

var _symbols = require('./symbols');

var _symbols2 = _interopRequireDefault(_symbols);

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
        _this.selectionRequired = _this[_symbols2.default.defaults].selectionRequired;
      }
      if (typeof _this.selectionWraps === 'undefined') {
        _this.selectionWraps = _this[_symbols2.default.defaults].selectionWraps;
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
      key: _symbols2.default.applySelection,
      value: function value(item, selected) {
        if (_get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), _symbols2.default.applySelection, this)) {
          _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), _symbols2.default.applySelection, this).call(this, item, selected);
        }
      }

      /**
       * True if the selection can be moved to the next item, false if not (the
       * selected item is the last item in the list).
       *
       * @type {boolean}
       */

    }, {
      key: _symbols2.default.itemAdded,


      /**
       * Handle a new item being added to the list.
       *
       * The default implementation of this method simply sets the item's
       * selection state to false.
       *
       * @param {HTMLElement} item - the item being added
       */
      value: function value(item) {
        if (_get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), _symbols2.default.itemAdded, this)) {
          _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), _symbols2.default.itemAdded, this).call(this, item);
        }
        this[_symbols2.default.applySelection](item, item === this.selectedItem);
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
      key: _symbols2.default.defaults,
      get: function get() {
        var defaults = _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), _symbols2.default.defaults, this) || {};
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
        var item = index < 0 || items.length === 0 ? null : items[index];
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
          this[_symbols2.default.applySelection](previousItem, false);
        }

        if (item) {
          this[_symbols2.default.applySelection](item, true);
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

  var boundedIndex = element.selectionWraps ?
  // JavaScript mod doesn't handle negative numbers the way we want to wrap.
  // See http://stackoverflow.com/a/18618250/76472
  (index % count + count) % count :

  // Keep index within bounds of array.
  Math.max(Math.min(index, count - 1), 0);

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

},{"./createSymbol":30,"./microtask":31,"./symbols":33}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createSymbol = require('./createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _symbols = require('./symbols');

var _symbols2 = _interopRequireDefault(_symbols);

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

      // Default implementation.

    }, {
      key: _symbols2.default.goLeft,


      /**
       * Invoked when the user wants to go/navigate left.
       * The default implementation of this method does nothing.
       */
      value: function value() {
        if (_get(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), _symbols2.default.goLeft, this)) {
          return _get(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), _symbols2.default.goLeft, this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate right.
       * The default implementation of this method does nothing.
       */

    }, {
      key: _symbols2.default.goRight,
      value: function value() {
        if (_get(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), _symbols2.default.goRight, this)) {
          return _get(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), _symbols2.default.goRight, this).call(this);
        }
      }

      /**
       * The distance the first touchpoint has traveled since the beginning of a
       * drag, expressed as a fraction of the element's width.
       *
       * @type number
       */

    }, {
      key: _symbols2.default.dragging,
      get: function get() {
        return _get(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), _symbols2.default.dragging, this);
      },
      set: function set(value) {
        if (_symbols2.default.dragging in base.prototype) {
          _set(SwipeDirection.prototype.__proto__ || Object.getPrototypeOf(SwipeDirection.prototype), _symbols2.default.dragging, value, this);
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

/*
 * Invoked when the user has finished a touch operation.
 */
function touchEnd(element, clientX, clientY) {
  element[_symbols2.default.dragging] = false;
  if (element[deltaXSymbol] >= 20) {
    // Finished going right at high speed.
    element[_symbols2.default.goLeft]();
  } else if (element[deltaXSymbol] <= -20) {
    // Finished going left at high speed.
    element[_symbols2.default.goRight]();
  } else {
    // Finished at low speed.
    trackTo(element, clientX);
    var travelFraction = element.travelFraction;
    if (travelFraction >= 0.5) {
      element[_symbols2.default.goRight]();
    } else if (travelFraction <= -0.5) {
      element[_symbols2.default.goLeft]();
    }
  }
  element.travelFraction = 0;
  element[deltaXSymbol] = null;
  element[deltaYSymbol] = null;
}

/*
 * Invoked when the user has moved during a touch operation.
 */
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

/*
 * Invoked when the user has begun a touch operation.
 */
function touchStart(element, clientX, clientY) {
  element[_symbols2.default.dragging] = true;
  element[startXSymbol] = clientX;
  element[previousXSymbol] = clientX;
  element[previousYSymbol] = clientY;
  element[deltaXSymbol] = 0;
  element[deltaYSymbol] = 0;
}

function trackTo(element, x) {
  var width = element.offsetWidth;
  var dragDistance = element[startXSymbol] - x;
  var fraction = width > 0 ? dragDistance / width : 0;
  element.travelFraction = fraction;
}

},{"./createSymbol":30,"./symbols":33}],25:[function(require,module,exports){
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

var _symbols = require('./symbols');

var _symbols2 = _interopRequireDefault(_symbols);

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
        _this.playing = _this[_symbols2.default.defaults].playing;
      }
      if (typeof _this.selectionTimerDuration === 'undefined') {
        _this.selectionTimerDuration = _this[_symbols2.default.defaults].selectionTimerDuration;
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
      key: _symbols2.default.defaults,
      get: function get() {
        var defaults = _get(TimerSelection.prototype.__proto__ || Object.getPrototypeOf(TimerSelection.prototype), _symbols2.default.defaults, this) || {};
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

},{"./createSymbol":30,"./symbols":33}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createSymbol = require('../../basic-component-mixins/src/createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _symbols = require('./symbols');

var _symbols2 = _interopRequireDefault(_symbols);

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

    // Default implementation.


    _createClass(TrackpadDirection, [{
      key: _symbols2.default.goLeft,


      /**
       * Invoked when the user wants to go/navigate left.
       * The default implementation of this method does nothing.
       */
      value: function value() {
        if (_get(TrackpadDirection.prototype.__proto__ || Object.getPrototypeOf(TrackpadDirection.prototype), _symbols2.default.goLeft, this)) {
          return _get(TrackpadDirection.prototype.__proto__ || Object.getPrototypeOf(TrackpadDirection.prototype), _symbols2.default.goLeft, this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate right.
       * The default implementation of this method does nothing.
       */

    }, {
      key: _symbols2.default.goRight,
      value: function value() {
        if (_get(TrackpadDirection.prototype.__proto__ || Object.getPrototypeOf(TrackpadDirection.prototype), _symbols2.default.goRight, this)) {
          return _get(TrackpadDirection.prototype.__proto__ || Object.getPrototypeOf(TrackpadDirection.prototype), _symbols2.default.goRight, this).call(this);
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
      key: _symbols2.default.dragging,
      get: function get() {
        return _get(TrackpadDirection.prototype.__proto__ || Object.getPrototypeOf(TrackpadDirection.prototype), _symbols2.default.dragging, this);
      },
      set: function set(value) {
        if (_symbols2.default.dragging in base.prototype) {
          _set(TrackpadDirection.prototype.__proto__ || Object.getPrototypeOf(TrackpadDirection.prototype), _symbols2.default.dragging, value, this);
        }
      }
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
  element[_symbols2.default.dragging] = true;
  travelFraction = sign(travelFraction) * Math.min(Math.abs(travelFraction), 1);
  element.travelFraction = travelFraction;

  // If the user has dragged enough to reach the previous/next item, then
  // complete a navigation to that item.
  if (travelFraction === 1) {
    element[_symbols2.default.dragging] = false;
    element[_symbols2.default.goRight]();
    postNavigate(element);
  } else if (travelFraction === -1) {
    element[_symbols2.default.dragging] = false;
    element[_symbols2.default.goLeft]();
    postNavigate(element);
  }

  return true;
}

// A sufficiently long period of time has passed since the last wheel event.
// We snap the selection to the closest item, then reset our state.
function wheelTimedOut(element) {

  // Snap to the closest item.
  element[_symbols2.default.dragging] = false;
  var travelFraction = element.travelFraction;
  if (travelFraction >= 0.5) {
    element[_symbols2.default.goRight]();
  } else if (travelFraction <= -0.5) {
    element[_symbols2.default.goLeft]();
  }

  // TODO: Listen for the transition to complete, and then restore
  // dragging to false (or the previous value).

  resetWheelTracking(element);
}

},{"../../basic-component-mixins/src/createSymbol":30,"./symbols":33}],29:[function(require,module,exports){
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

var _createSymbol = require('./createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _toggleClass2 = require('./toggleClass');

var _toggleClass3 = _interopRequireDefault(_toggleClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Symbols for private data members on an element.
var safeToSetAttributesSymbol = (0, _createSymbol2.default)('safeToSetAttributes');
var pendingAttributesSymbol = (0, _createSymbol2.default)('pendingAttributes');
var pendingClassesSymbol = (0, _createSymbol2.default)('pendingClasses');

/**
 * Helper functions for updating attributes, including the `class` attribute.
 */
exports.default = {

  /**
   * Perform any pending updates to attributes and classes.
   *
   * This writes any `setAttribute` or `toggleClass` values that were performed
   * before an element was attached to the document for the first time.
   *
   * This method should be called by mixins/components in their
   * `connectedCallback`. If mulitple mixins/components invoke this during the
   * same `connectedCallback`, only the first call will have any effect. The
   * subsequent calls will be harmless.
   *
   * @param {HTMLElement} element - The element being added to the document.
   */
  connected: function connected(element) {
    element[safeToSetAttributesSymbol] = true;

    // Set any pending attributes.
    if (element[pendingAttributesSymbol]) {
      for (var attribute in element[pendingAttributesSymbol]) {
        var value = element[pendingAttributesSymbol][attribute];
        setAttributeToElement(element, attribute, value);
      }
      element[pendingAttributesSymbol] = null;
    }

    // Set any pending classes.
    if (element[pendingClassesSymbol]) {
      for (var className in element[pendingClassesSymbol]) {
        var _value = element[pendingClassesSymbol][className];
        (0, _toggleClass3.default)(element, className, _value);
      }
      element[pendingClassesSymbol] = null;
    }
  },


  /**
   * Set/unset the attribute with the indicated name.
   *
   * This method exists primarily to handle the case where an element wants to
   * set a default property value that should be reflected as an attribute. An
   * important limitation of custom element consturctors is that they cannot
   * set attributes. A call to `setAttribute` during the constructor will
   * be deferred until the element is connected to the document.
   *
   * @param {string} attribute - The name of the *attribute* (not property) to set.
   * @param {object} value - The value to set. If null, the attribute will be removed.
   */
  setAttribute: function setAttribute(element, attribute, value) {
    if (element[safeToSetAttributesSymbol]) {
      // Safe to set attributes immediately.
      setAttributeToElement(element, attribute, value);
    } else {
      // Defer setting attributes until the first time we're connected.
      if (!element[pendingAttributesSymbol]) {
        element[pendingAttributesSymbol] = {};
      }
      element[pendingAttributesSymbol][attribute] = value;
    }
  },


  /**
   * Set/unset the class with the indicated name.
   *
   * This method exists primarily to handle the case where an element wants to
   * set a default property value that should be reflected as as class. An
   * important limitation of custom element consturctors is that they cannot
   * set attributes, including the `class` attribute. A call to
   * `toggleClass` during the constructor will be deferred until the element
   * is connected to the document.
   *
   * @param {string} className - The name of the class to set.
   * @param {object} value - True to set the class, false to remove it.
   */
  toggleClass: function toggleClass(element, className, value) {
    if (element[safeToSetAttributesSymbol]) {
      // Safe to set class immediately.
      (0, _toggleClass3.default)(element, className, value);
    } else {
      // Defer setting class until the first time we're connected.
      if (!element[pendingClassesSymbol]) {
        element[pendingClassesSymbol] = {};
      }
      element[pendingClassesSymbol][className] = value;
    }
  }
};

// Reflect the attribute to the given element.
// If the value is null, remove the attribute.

function setAttributeToElement(element, attributeName, value) {
  if (value === null || typeof value === 'undefined') {
    element.removeAttribute(attributeName);
  } else {
    var text = String(value);
    // Avoid recursive attributeChangedCallback calls.
    if (element.getAttribute(attributeName) !== text) {
      element.setAttribute(attributeName, value);
    }
  }
}

},{"./createSymbol":30,"./toggleClass":34}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createSymbol = require('./createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A collection of Symbol objects for standard component properties and methods.
 *
 * These Symbol objects are used to allow mixins and a component to internally
 * communicate, without exposing these properties and methods in the component's
 * public API.
 *
 * To use these Symbol objects in your own component, include this module and
 * then create a property or method whose key is the desired Symbol.
 *
 *     import 'SingleSelection' from 'basic-component-mixins/src/SingleSelection';
 *     import 'symbols' from 'basic-component-mixins/src/symbols';
 *
 *     class MyElement extends SingleSelection(HTMLElement) {
 *       [symbols.applySelection](item, selected) {
 *         // This will be invoked whenever an item is selected/deselected.
 *       }
 *     }
 *
 * @module symbols
 */
var symbols = {

  /**
   * Symbol for the `applySelection` method.
   *
   * This method applies the indicated selection state to an item.
   *
   * @function applySelection
   * @param {HTMLElement} item - the item being selected/deselected
   * @param {boolean} selected - true if the item is selected, false if not
   */
  applySelection: (0, _createSymbol2.default)('applySelection'),

  /**
   * Symbol for the `defaults` property.
   *
   * This property can be used to set or override defaults that will be applied
   * to a new component instance. When implementing this property, take care to
   * first acquire any defaults defined by the superclass. The standard idiom is
   * as follows:
   *
   *     get [symbols.defaults]() {
   *       const defaults = super[symbols.defaults] || {};
   *       // Set or override default values here
   *       defaults.customProperty = false;
   *       return defaults;
   *     }
   *
   * @var {object} defaults
   */
  defaults: (0, _createSymbol2.default)('defaults'),

  /**
   * Symbol for the `dragging` property.
   *
   * Components like carousels often define animated CSS transitions for
   * sliding effects. Such a transition should usually *not* be applied while
   * the user is dragging, because a CSS animation will introduce a lag that
   * makes the swipe feel sluggish. Instead, as long as the user is dragging
   * with their finger down, the transition should be suppressed. When the
   * user releases their finger, the transition can be restored, allowing the
   * animation to show the carousel sliding into its final position.
   *
   * @type {boolean} true if a drag is in progress, false if not.
   */
  dragging: (0, _createSymbol2.default)('dragging'),

  /**
   * Symbol for the `goDown` method.
   *
   * This method is invoked when the user wants to go/navigate down.
   *
   * @function goDown
   */
  goDown: (0, _createSymbol2.default)('goDown'),

  /**
   * Symbol for the `goEnd` method.
   *
   * This method is invoked when the user wants to go/navigate to the end (e.g.,
   * of a list).
   *
   * @function goEnd
   */
  goEnd: (0, _createSymbol2.default)('goEnd'),

  /**
   * Symbol for the `goLeft` method.
   *
   * This method is invoked when the user wants to go/navigate left.
   *
   * @function goLeft
   */
  goLeft: (0, _createSymbol2.default)('goLeft'),

  /**
   * Symbol for the `goRight` method.
   *
   * This method is invoked when the user wants to go/navigate right.
   *
   * @function goRight
   */
  goRight: (0, _createSymbol2.default)('goRight'),

  /**
   * Symbol for the `goStart` method.
   *
   * This method is invoked when the user wants to go/navigate to the start
   * (e.g., of a list).
   *
   * @function goStart
   */
  goStart: (0, _createSymbol2.default)('goStart'),

  /**
   * Symbol for the `goUp` method.
   *
   * This method is invoked when the user wants to go/navigate up.
   *
   * @function goUp
   */
  goUp: (0, _createSymbol2.default)('goUp'),

  /**
   * Symbol for the `itemAdded` method.
   *
   * This method is invoked when a new item is added to a list.
   *
   * @function itemAdded
   * @param {HTMLElement} item - the item being selected/deselected
   */
  itemAdded: (0, _createSymbol2.default)('itemAdded'),

  /**
   * Symbol for the `keydown` method.
   *
   * This method is invoked when an element receives a `keydown` event.
   *
   * @function keydown
   * @param {KeyboardEvent} event - the event being processed
   */
  keydown: (0, _createSymbol2.default)('keydown')
};

exports.default = symbols;

},{"./createSymbol":30}],34:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL2dsb2JhbHMuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9BdHRyaWJ1dGVNYXJzaGFsbGluZy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NsaWNrU2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29sbGVjdGl2ZS5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbXBvc2FibGUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db250ZW50QXNJdGVtcy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbnRlbnRGaXJzdENoaWxkVGFyZ2V0LmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlyZWN0aW9uU2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9GcmFjdGlvbmFsU2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvR2VuZXJpYy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmREaXJlY3Rpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZFBhZ2VkU2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmRQcmVmaXhTZWxlY3Rpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25BbmltYXRpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25BcmlhQWN0aXZlLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uSGlnaGxpZ2h0LmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uSW5WaWV3LmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2hhZG93RWxlbWVudFJlZmVyZW5jZXMuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaGFkb3dUZW1wbGF0ZS5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NpbmdsZVNlbGVjdGlvbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1N3aXBlRGlyZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGFyZ2V0SW5Db2xsZWN0aXZlLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGFyZ2V0U2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGltZXJTZWxlY3Rpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UcmFja3BhZERpcmVjdGlvbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL2NvbXBvc2VUZW1wbGF0ZXMuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9jcmVhdGVTeW1ib2wuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9taWNyb3Rhc2suanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9zYWZlQXR0cmlidXRlcy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL3N5bWJvbHMuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy90b2dnbGVDbGFzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDT0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLE9BQU8sS0FBUCxHQUFlLE9BQU8sS0FBUCxJQUFnQixFQUEvQixDLENBdkNBOzs7Ozs7O0FBeUNBLE9BQU8sS0FBUCxDQUFhLG9CQUFiO0FBQ0EsT0FBTyxLQUFQLENBQWEsY0FBYjtBQUNBLE9BQU8sS0FBUCxDQUFhLFVBQWI7QUFDQSxPQUFPLEtBQVAsQ0FBYSxVQUFiO0FBQ0EsT0FBTyxLQUFQLENBQWEsZ0JBQWI7QUFDQSxPQUFPLEtBQVAsQ0FBYSxZQUFiO0FBQ0EsT0FBTyxLQUFQLENBQWEsY0FBYjtBQUNBLE9BQU8sS0FBUCxDQUFhLHVCQUFiO0FBQ0EsT0FBTyxLQUFQLENBQWEsa0JBQWI7QUFDQSxPQUFPLEtBQVAsQ0FBYSxtQkFBYjtBQUNBLE9BQU8sS0FBUCxDQUFhLDRCQUFiO0FBQ0EsT0FBTyxLQUFQLENBQWEsT0FBYjtBQUNBLE9BQU8sS0FBUCxDQUFhLGVBQWI7QUFDQSxPQUFPLEtBQVAs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LCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLypcbiAqIFRoaXMgZmlsZSBpcyB0cmFuc3BpbGVkIHRvIGNyZWF0ZSBhbiBFUzUtY29tcGF0aWJsZSBkaXN0cmlidXRpb24gaW4gd2hpY2hcbiAqIHRoZSBwYWNrYWdlJ3MgbWFpbiBmZWF0dXJlKHMpIGFyZSBhdmFpbGFibGUgdmlhIHRoZSB3aW5kb3cuQmFzaWMgZ2xvYmFsLlxuICogSWYgeW91J3JlIGFscmVhZHkgdXNpbmcgRVM2IHlvdXJzZWxmLCBpZ25vcmUgdGhpcyBmaWxlLCBhbmQgaW5zdGVhZCBpbXBvcnRcbiAqIHRoZSBzb3VyY2UgZmlsZShzKSB5b3Ugd2FudCBmcm9tIHRoZSBzcmMgZm9sZGVyLlxuICovXG5cbmltcG9ydCBBdHRyaWJ1dGVNYXJzaGFsbGluZyBmcm9tICcuL3NyYy9BdHRyaWJ1dGVNYXJzaGFsbGluZyc7XG5pbXBvcnQgQ2xpY2tTZWxlY3Rpb24gZnJvbSAnLi9zcmMvQ2xpY2tTZWxlY3Rpb24nO1xuaW1wb3J0IENvbGxlY3RpdmUgZnJvbSAnLi9zcmMvQ29sbGVjdGl2ZSc7XG5pbXBvcnQgQ29tcG9zYWJsZSBmcm9tICcuL3NyYy9Db21wb3NhYmxlJztcbmltcG9ydCBjb21wb3NlVGVtcGxhdGVzIGZyb20gJy4vc3JjL2NvbXBvc2VUZW1wbGF0ZXMnO1xuaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL3NyYy9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IENvbnRlbnRBc0l0ZW1zIGZyb20gJy4vc3JjL0NvbnRlbnRBc0l0ZW1zJztcbmltcG9ydCBDb250ZW50Rmlyc3RDaGlsZFRhcmdldCBmcm9tICcuL3NyYy9Db250ZW50Rmlyc3RDaGlsZFRhcmdldCc7XG5pbXBvcnQgRGlyZWN0aW9uU2VsZWN0aW9uIGZyb20gJy4vc3JjL0RpcmVjdGlvblNlbGVjdGlvbic7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbiBmcm9tICcuL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuJztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50IGZyb20gJy4vc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQnO1xuaW1wb3J0IEdlbmVyaWMgZnJvbSAnLi9zcmMvR2VuZXJpYyc7XG5pbXBvcnQgU2luZ2xlU2VsZWN0aW9uIGZyb20gJy4vc3JjL1NpbmdsZVNlbGVjdGlvbic7XG5pbXBvcnQgS2V5Ym9hcmQgZnJvbSAnLi9zcmMvS2V5Ym9hcmQnO1xuaW1wb3J0IEtleWJvYXJkRGlyZWN0aW9uIGZyb20gJy4vc3JjL0tleWJvYXJkRGlyZWN0aW9uJztcbmltcG9ydCBLZXlib2FyZFBhZ2VkU2VsZWN0aW9uIGZyb20gJy4vc3JjL0tleWJvYXJkUGFnZWRTZWxlY3Rpb24nO1xuaW1wb3J0IEtleWJvYXJkUHJlZml4U2VsZWN0aW9uIGZyb20gJy4vc3JjL0tleWJvYXJkUHJlZml4U2VsZWN0aW9uJztcbmltcG9ydCBtaWNyb3Rhc2sgZnJvbSAnLi9zcmMvbWljcm90YXNrJztcbmltcG9ydCBzYWZlQXR0cmlidXRlcyBmcm9tICcuL3NyYy9zYWZlQXR0cmlidXRlcyc7XG5pbXBvcnQgU2VsZWN0aW9uQW5pbWF0aW9uIGZyb20gJy4vc3JjL1NlbGVjdGlvbkFuaW1hdGlvbic7XG5pbXBvcnQgU2VsZWN0aW9uQXJpYUFjdGl2ZSBmcm9tICcuL3NyYy9TZWxlY3Rpb25BcmlhQWN0aXZlJztcbmltcG9ydCBTZWxlY3Rpb25IaWdobGlnaHQgZnJvbSAnLi9zcmMvU2VsZWN0aW9uSGlnaGxpZ2h0JztcbmltcG9ydCBTZWxlY3Rpb25JblZpZXcgZnJvbSAnLi9zcmMvU2VsZWN0aW9uSW5WaWV3JztcbmltcG9ydCBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcyBmcm9tICcuL3NyYy9TaGFkb3dFbGVtZW50UmVmZXJlbmNlcyc7XG5pbXBvcnQgU2hhZG93VGVtcGxhdGUgZnJvbSAnLi9zcmMvU2hhZG93VGVtcGxhdGUnO1xuaW1wb3J0IFN3aXBlRGlyZWN0aW9uIGZyb20gJy4vc3JjL1N3aXBlRGlyZWN0aW9uJztcbmltcG9ydCBzeW1ib2xzIGZyb20gJy4vc3JjL3N5bWJvbHMnO1xuaW1wb3J0IFRhcmdldEluQ29sbGVjdGl2ZSBmcm9tICcuL3NyYy9UYXJnZXRJbkNvbGxlY3RpdmUnO1xuaW1wb3J0IFRhcmdldFNlbGVjdGlvbiBmcm9tICcuL3NyYy9UYXJnZXRTZWxlY3Rpb24nO1xuaW1wb3J0IFRpbWVyU2VsZWN0aW9uIGZyb20gJy4vc3JjL1RpbWVyU2VsZWN0aW9uJztcbmltcG9ydCBUcmFja3BhZERpcmVjdGlvbiBmcm9tICcuL3NyYy9UcmFja3BhZERpcmVjdGlvbic7XG5cbndpbmRvdy5CYXNpYyA9IHdpbmRvdy5CYXNpYyB8fCB7fTtcblxud2luZG93LkJhc2ljLkF0dHJpYnV0ZU1hcnNoYWxsaW5nID0gQXR0cmlidXRlTWFyc2hhbGxpbmc7XG53aW5kb3cuQmFzaWMuQ2xpY2tTZWxlY3Rpb24gPSBDbGlja1NlbGVjdGlvbjtcbndpbmRvdy5CYXNpYy5Db2xsZWN0aXZlID0gQ29sbGVjdGl2ZTtcbndpbmRvdy5CYXNpYy5Db21wb3NhYmxlID0gQ29tcG9zYWJsZTtcbndpbmRvdy5CYXNpYy5jb21wb3NlVGVtcGxhdGVzID0gY29tcG9zZVRlbXBsYXRlcztcbndpbmRvdy5CYXNpYy5jcmVhdGVTeW1ib2wgPSBjcmVhdGVTeW1ib2w7XG53aW5kb3cuQmFzaWMuQ29udGVudEFzSXRlbXMgPSBDb250ZW50QXNJdGVtcztcbndpbmRvdy5CYXNpYy5Db250ZW50Rmlyc3RDaGlsZFRhcmdldCA9IENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0O1xud2luZG93LkJhc2ljLkRpcmVjdGlvblNlbGVjdGlvbiA9IERpcmVjdGlvblNlbGVjdGlvbjtcbndpbmRvdy5CYXNpYy5EaXN0cmlidXRlZENoaWxkcmVuID0gRGlzdHJpYnV0ZWRDaGlsZHJlbjtcbndpbmRvdy5CYXNpYy5EaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50ID0gRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudDtcbndpbmRvdy5CYXNpYy5HZW5lcmljID0gR2VuZXJpYztcbndpbmRvdy5CYXNpYy5TaW5nbGVTZWxlY3Rpb24gPSBTaW5nbGVTZWxlY3Rpb247XG53aW5kb3cuQmFzaWMuS2V5Ym9hcmQgPSBLZXlib2FyZDtcbndpbmRvdy5CYXNpYy5LZXlib2FyZERpcmVjdGlvbiA9IEtleWJvYXJkRGlyZWN0aW9uO1xud2luZG93LkJhc2ljLktleWJvYXJkUGFnZWRTZWxlY3Rpb24gPSBLZXlib2FyZFBhZ2VkU2VsZWN0aW9uO1xud2luZG93LkJhc2ljLktleWJvYXJkUHJlZml4U2VsZWN0aW9uID0gS2V5Ym9hcmRQcmVmaXhTZWxlY3Rpb247XG53aW5kb3cuQmFzaWMubWljcm90YXNrID0gbWljcm90YXNrO1xud2luZG93LkJhc2ljLnNhZmVBdHRyaWJ1dGVzID0gc2FmZUF0dHJpYnV0ZXM7XG53aW5kb3cuQmFzaWMuU2VsZWN0aW9uQW5pbWF0aW9uID0gU2VsZWN0aW9uQW5pbWF0aW9uO1xud2luZG93LkJhc2ljLlNlbGVjdGlvbkFyaWFBY3RpdmUgPSBTZWxlY3Rpb25BcmlhQWN0aXZlO1xud2luZG93LkJhc2ljLlNlbGVjdGlvbkhpZ2hsaWdodCA9IFNlbGVjdGlvbkhpZ2hsaWdodDtcbndpbmRvdy5CYXNpYy5TZWxlY3Rpb25JblZpZXcgPSBTZWxlY3Rpb25JblZpZXc7XG53aW5kb3cuQmFzaWMuU2hhZG93RWxlbWVudFJlZmVyZW5jZXMgPSBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcztcbndpbmRvdy5CYXNpYy5TaGFkb3dUZW1wbGF0ZSA9IFNoYWRvd1RlbXBsYXRlO1xud2luZG93LkJhc2ljLlN3aXBlRGlyZWN0aW9uID0gU3dpcGVEaXJlY3Rpb247XG53aW5kb3cuQmFzaWMuc3ltYm9scyA9IHN5bWJvbHM7XG53aW5kb3cuQmFzaWMuVGFyZ2V0SW5Db2xsZWN0aXZlID0gVGFyZ2V0SW5Db2xsZWN0aXZlO1xud2luZG93LkJhc2ljLlRhcmdldFNlbGVjdGlvbiA9IFRhcmdldFNlbGVjdGlvbjtcbndpbmRvdy5CYXNpYy5UaW1lclNlbGVjdGlvbiA9IFRpbWVyU2VsZWN0aW9uO1xud2luZG93LkJhc2ljLlRyYWNrcGFkRGlyZWN0aW9uID0gVHJhY2twYWREaXJlY3Rpb247XG4iLCJpbXBvcnQgc2FmZUF0dHJpYnV0ZXMgZnJvbSAnLi9zYWZlQXR0cmlidXRlcyc7XG5cblxuLy8gTWVtb2l6ZWQgbWFwcyBvZiBhdHRyaWJ1dGUgdG8gcHJvcGVydHkgbmFtZXMgYW5kIHZpY2UgdmVyc2EuXG5jb25zdCBhdHRyaWJ1dGVUb1Byb3BlcnR5TmFtZXMgPSB7fTtcbmNvbnN0IHByb3BlcnR5TmFtZXNUb0F0dHJpYnV0ZXMgPSB7fTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEF0dHJpYnV0ZU1hcnNoYWxsaW5nLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFyc2hhbGxzIGF0dHJpYnV0ZXMgdG8gcHJvcGVydGllcyBhbmQgdmljZSB2ZXJzYS5cbiAgICpcbiAgICogSWYgeW91ciBjb21wb25lbnQgZXhwb3NlcyBhIHNldHRlciBmb3IgYSBwcm9wZXJ0eSwgaXQncyBnZW5lcmFsbHkgYSBnb29kXG4gICAqIGlkZWEgdG8gbGV0IGRldnMgdXNpbmcgeW91ciBjb21wb25lbnQgYmUgYWJsZSB0byBzZXQgdGhhdCBwcm9wZXJ0eSBpbiBIVE1MXG4gICAqIHZpYSBhbiBlbGVtZW50IGF0dHJpYnV0ZS4gWW91IGNhbiBjb2RlIHRoYXQgeW91cnNlbGYgYnkgd3JpdGluZyBhblxuICAgKiBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYCwgb3IgeW91IGNhbiB1c2UgdGhpcyBtaXhpbiB0byBnZXQgYSBkZWdyZWUgb2ZcbiAgICogYXV0b21hdGljIHN1cHBvcnQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaW1wbGVtZW50cyBhbiBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYCB0aGF0IHdpbGwgYXR0ZW1wdCB0b1xuICAgKiBjb252ZXJ0IGEgY2hhbmdlIGluIGFuIGVsZW1lbnQgYXR0cmlidXRlIGludG8gYSBjYWxsIHRvIHRoZSBjb3JyZXNwb25kaW5nXG4gICAqIHByb3BlcnR5IHNldHRlci4gQXR0cmlidXRlcyB0eXBpY2FsbHkgZm9sbG93IGh5cGhlbmF0ZWQgbmFtZXMgKFwiZm9vLWJhclwiKSxcbiAgICogd2hlcmVhcyBwcm9wZXJ0aWVzIHR5cGljYWxseSB1c2UgY2FtZWxDYXNlIG5hbWVzIChcImZvb0JhclwiKS4gVGhpcyBtaXhpblxuICAgKiByZXNwZWN0cyB0aGF0IGNvbnZlbnRpb24sIGF1dG9tYXRpY2FsbHkgbWFwcGluZyB0aGUgaHlwaGVuYXRlZCBhdHRyaWJ1dGVcbiAgICogbmFtZSB0byB0aGUgY29ycmVzcG9uZGluZyBjYW1lbENhc2UgcHJvcGVydHkgbmFtZS5cbiAgICpcbiAgICogRXhhbXBsZTogWW91IGRlZmluZSBhIGNvbXBvbmVudCB1c2luZyB0aGlzIG1peGluOlxuICAgKlxuICAgKiAgICAgY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgQXR0cmlidXRlTWFyc2hhbGxpbmcoSFRNTEVsZW1lbnQpIHtcbiAgICogICAgICAgZ2V0IGZvb0JhcigpIHsgcmV0dXJuIHRoaXMuX2Zvb0JhcjsgfVxuICAgKiAgICAgICBzZXQgZm9vQmFyKHZhbHVlKSB7IHRoaXMuX2Zvb0JhciA9IHZhbHVlOyB9XG4gICAqICAgICB9XG4gICAqICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ215LWVsZW1lbnQnLCBNeUVsZW1lbnQpO1xuICAgKlxuICAgKiBJZiBzb21lb25lIHRoZW4gaW5zdGFudGlhdGVzIHlvdXIgY29tcG9uZW50IGluIEhUTUw6XG4gICAqXG4gICAqICAgICA8bXktZWxlbWVudCBmb28tYmFyPVwiSGVsbG9cIj48L215LWVsZW1lbnQ+XG4gICAqXG4gICAqIFRoZW4sIGFmdGVyIHRoZSBlbGVtZW50IGhhcyBiZWVuIHVwZ3JhZGVkLCB0aGUgYGZvb0JhcmAgc2V0dGVyIHdpbGxcbiAgICogYXV0b21hdGljYWxseSBiZSBpbnZva2VkIHdpdGggdGhlIGluaXRpYWwgdmFsdWUgXCJIZWxsb1wiLlxuICAgKlxuICAgKiBGb3IgdGhlIHRpbWUgYmVpbmcsIHRoaXMgbWl4aW4gb25seSBzdXBwb3J0cyBzdHJpbmctdmFsdWVkIHByb3BlcnRpZXMuXG4gICAqIElmIHlvdSdkIGxpa2UgdG8gY29udmVydCBzdHJpbmcgYXR0cmlidXRlcyB0byBvdGhlciB0eXBlcyAobnVtYmVycyxcbiAgICogYm9vbGVhbnMpLCB5b3UgbmVlZCB0byBpbXBsZW1lbnQgYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AgeW91cnNlbGYuXG4gICAqL1xuICBjbGFzcyBBdHRyaWJ1dGVNYXJzaGFsbGluZyBleHRlbmRzIGJhc2Uge1xuXG4gICAgLypcbiAgICAgKiBIYW5kbGUgYSBjaGFuZ2UgdG8gdGhlIGF0dHJpYnV0ZSB3aXRoIHRoZSBnaXZlbiBuYW1lLlxuICAgICAqL1xuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhhdHRyaWJ1dGVOYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICAgIGlmIChzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2spIHsgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKCk7IH1cbiAgICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IGF0dHJpYnV0ZVRvUHJvcGVydHlOYW1lKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgLy8gSWYgdGhlIGF0dHJpYnV0ZSBuYW1lIGNvcnJlc3BvbmRzIHRvIGEgcHJvcGVydHkgbmFtZSwgc2V0IHRoZSBwcm9wZXJ0eS5cbiAgICAgIC8vIElnbm9yZSBzdGFuZGFyZCBIVE1MRWxlbWVudCBwcm9wZXJ0aWVzIGhhbmRsZWQgYnkgdGhlIERPTS5cbiAgICAgIGlmIChwcm9wZXJ0eU5hbWUgaW4gdGhpcyAmJiAhKHByb3BlcnR5TmFtZSBpbiBIVE1MRWxlbWVudC5wcm90b3R5cGUpKSB7XG4gICAgICAgIHRoaXNbcHJvcGVydHlOYW1lXSA9IG5ld1ZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKSB7IHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7IH1cbiAgICAgIHNhZmVBdHRyaWJ1dGVzLmNvbm5lY3RlZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcbiAgICAgIHJldHVybiBhdHRyaWJ1dGVzRm9yQ2xhc3ModGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0L3Vuc2V0IHRoZSBhdHRyaWJ1dGUgd2l0aCB0aGUgaW5kaWNhdGVkIG5hbWUuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBleGlzdHMgcHJpbWFyaWx5IHRvIGhhbmRsZSB0aGUgY2FzZSB3aGVyZSBhbiBlbGVtZW50IHdhbnRzIHRvXG4gICAgICogc2V0IGEgZGVmYXVsdCBwcm9wZXJ0eSB2YWx1ZSB0aGF0IHNob3VsZCBiZSByZWZsZWN0ZWQgYXMgYW4gYXR0cmlidXRlLiBBblxuICAgICAqIGltcG9ydGFudCBsaW1pdGF0aW9uIG9mIGN1c3RvbSBlbGVtZW50IGNvbnN0dXJjdG9ycyBpcyB0aGF0IHRoZXkgY2Fubm90XG4gICAgICogc2V0IGF0dHJpYnV0ZXMuIEEgY2FsbCB0byBgcmVmbGVjdEF0dHJpYnV0ZWAgZHVyaW5nIHRoZSBjb25zdHJ1Y3RvciB3aWxsXG4gICAgICogYmUgZGVmZXJyZWQgdW50aWwgdGhlIGVsZW1lbnQgaXMgY29ubmVjdGVkIHRvIHRoZSBkb2N1bWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGUgLSBUaGUgbmFtZSBvZiB0aGUgKmF0dHJpYnV0ZSogKG5vdCBwcm9wZXJ0eSkgdG8gc2V0LlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBzZXQuIElmIG51bGwsIHRoZSBhdHRyaWJ1dGUgd2lsbCBiZSByZW1vdmVkLlxuICAgICAqL1xuICAgIHJlZmxlY3RBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHNhZmVBdHRyaWJ1dGVzLnNldEF0dHJpYnV0ZSh0aGlzLCBhdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQvdW5zZXQgdGhlIGNsYXNzIHdpdGggdGhlIGluZGljYXRlZCBuYW1lLlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgZXhpc3RzIHByaW1hcmlseSB0byBoYW5kbGUgdGhlIGNhc2Ugd2hlcmUgYW4gZWxlbWVudCB3YW50cyB0b1xuICAgICAqIHNldCBhIGRlZmF1bHQgcHJvcGVydHkgdmFsdWUgdGhhdCBzaG91bGQgYmUgcmVmbGVjdGVkIGFzIGFzIGNsYXNzLiBBblxuICAgICAqIGltcG9ydGFudCBsaW1pdGF0aW9uIG9mIGN1c3RvbSBlbGVtZW50IGNvbnN0dXJjdG9ycyBpcyB0aGF0IHRoZXkgY2Fubm90XG4gICAgICogc2V0IGF0dHJpYnV0ZXMsIGluY2x1ZGluZyB0aGUgYGNsYXNzYCBhdHRyaWJ1dGUuIEEgY2FsbCB0b1xuICAgICAqIGByZWZsZWN0Q2xhc3NgIGR1cmluZyB0aGUgY29uc3RydWN0b3Igd2lsbCBiZSBkZWZlcnJlZCB1bnRpbCB0aGUgZWxlbWVudFxuICAgICAqIGlzIGNvbm5lY3RlZCB0byB0aGUgZG9jdW1lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGNsYXNzIHRvIHNldC5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdmFsdWUgLSBUcnVlIHRvIHNldCB0aGUgY2xhc3MsIGZhbHNlIHRvIHJlbW92ZSBpdC5cbiAgICAgKi9cbiAgICByZWZsZWN0Q2xhc3MoY2xhc3NOYW1lLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHNhZmVBdHRyaWJ1dGVzLnRvZ2dsZUNsYXNzKHRoaXMsIGNsYXNzTmFtZSwgdmFsdWUpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIEF0dHJpYnV0ZU1hcnNoYWxsaW5nO1xufTtcblxuXG4vLyBDb252ZXJ0IGh5cGhlbmF0ZWQgZm9vLWJhciBhdHRyaWJ1dGUgbmFtZSB0byBjYW1lbCBjYXNlIGZvb0JhciBwcm9wZXJ0eSBuYW1lLlxuZnVuY3Rpb24gYXR0cmlidXRlVG9Qcm9wZXJ0eU5hbWUoYXR0cmlidXRlTmFtZSkge1xuICBsZXQgcHJvcGVydHlOYW1lID0gYXR0cmlidXRlVG9Qcm9wZXJ0eU5hbWVzW2F0dHJpYnV0ZU5hbWVdO1xuICBpZiAoIXByb3BlcnR5TmFtZSkge1xuICAgIC8vIENvbnZlcnQgYW5kIG1lbW9pemUuXG4gICAgY29uc3QgaHlwZW5SZWdFeCA9IC8tKFthLXpdKS9nO1xuICAgIHByb3BlcnR5TmFtZSA9IGF0dHJpYnV0ZU5hbWUucmVwbGFjZShoeXBlblJlZ0V4LFxuICAgICAgICBtYXRjaCA9PiBtYXRjaFsxXS50b1VwcGVyQ2FzZSgpKTtcbiAgICBhdHRyaWJ1dGVUb1Byb3BlcnR5TmFtZXNbYXR0cmlidXRlTmFtZV0gPSBwcm9wZXJ0eU5hbWU7XG4gIH1cbiAgcmV0dXJuIHByb3BlcnR5TmFtZTtcbn1cblxuZnVuY3Rpb24gYXR0cmlidXRlc0ZvckNsYXNzKGNsYXNzRm4pIHtcblxuICAvLyBXZSB0cmVhdCB0aGUgZWxlbWVudCBiYXNlIGNsYXNzZXMgYXMgaWYgdGhleSBoYXZlIG5vIGF0dHJpYnV0ZXMsIHNpbmNlIHdlXG4gIC8vIGRvbid0IHdhbnQgdG8gcmVjZWl2ZSBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgZm9yIHRoZW0uXG4gIGlmIChjbGFzc0ZuID09PSBIVE1MRWxlbWVudCB8fCBjbGFzc0ZuID09PSBPYmplY3QpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvLyBHZXQgYXR0cmlidXRlcyBmb3IgcGFyZW50IGNsYXNzLlxuICBjb25zdCBiYXNlQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoY2xhc3NGbi5wcm90b3R5cGUpLmNvbnN0cnVjdG9yO1xuICBjb25zdCBiYXNlQXR0cmlidXRlcyA9IGF0dHJpYnV0ZXNGb3JDbGFzcyhiYXNlQ2xhc3MpO1xuXG4gIC8vIEdldCBhdHRyaWJ1dGVzIGZvciB0aGlzIGNsYXNzLlxuICBjb25zdCBwcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoY2xhc3NGbi5wcm90b3R5cGUpO1xuICBjb25zdCBzZXR0ZXJOYW1lcyA9IHByb3BlcnR5TmFtZXMuZmlsdGVyKHByb3BlcnR5TmFtZSA9PlxuICAgIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFxuICAgICAgICBjbGFzc0ZuLnByb3RvdHlwZSwgcHJvcGVydHlOYW1lKS5zZXQgPT09ICdmdW5jdGlvbicpO1xuICBjb25zdCBhdHRyaWJ1dGVzID0gc2V0dGVyTmFtZXMubWFwKHNldHRlck5hbWUgPT5cbiAgICAgIHByb3BlcnR5TmFtZVRvQXR0cmlidXRlKHNldHRlck5hbWUpKTtcblxuICAvLyBNZXJnZS5cbiAgY29uc3QgZGlmZiA9IGF0dHJpYnV0ZXMuZmlsdGVyKGF0dHJpYnV0ZSA9PlxuICAgICAgYmFzZUF0dHJpYnV0ZXMuaW5kZXhPZihhdHRyaWJ1dGUpIDwgMCk7XG4gIHJldHVybiBiYXNlQXR0cmlidXRlcy5jb25jYXQoZGlmZik7XG59XG5cbi8vIENvbnZlcnQgYSBjYW1lbCBjYXNlIGZvb0JhciBwcm9wZXJ0eSBuYW1lIHRvIGEgaHlwaGVuYXRlZCBmb28tYmFyIGF0dHJpYnV0ZS5cbmZ1bmN0aW9uIHByb3BlcnR5TmFtZVRvQXR0cmlidXRlKHByb3BlcnR5TmFtZSkge1xuICBsZXQgYXR0cmlidXRlID0gcHJvcGVydHlOYW1lc1RvQXR0cmlidXRlc1twcm9wZXJ0eU5hbWVdO1xuICBpZiAoIWF0dHJpYnV0ZSkge1xuICAgIC8vIENvbnZlcnQgYW5kIG1lbW9pemUuXG4gICAgY29uc3QgdXBwZXJjYXNlUmVnRXggPSAvKFtBLVpdKS9nO1xuICAgIGF0dHJpYnV0ZSA9IHByb3BlcnR5TmFtZS5yZXBsYWNlKHVwcGVyY2FzZVJlZ0V4LCAnLSQxJykudG9Mb3dlckNhc2UoKTtcbiAgfVxuICByZXR1cm4gYXR0cmlidXRlO1xufVxuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBDbGlja1NlbGVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgYSBjbGljayAoYWN0dWFsbHksIGEgbW91c2Vkb3duKSB0byBhIHNlbGVjdGlvbi5cbiAgICpcbiAgICogVGhpcyBzaW1wbGUgbWl4aW4gaXMgdXNlZnVsIGluIGxpc3QgYm94LWxpa2UgZWxlbWVudHMsIHdoZXJlIGEgY2xpY2sgb24gYVxuICAgKiBsaXN0IGl0ZW0gaW1wbGljaXRseSBzZWxlY3RzIGl0LlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgdGhlIGNvbXBvbmVudCB0byBwcm92aWRlIGFuIGBpdGVtc2AgcHJvcGVydHkuIFlvdSBjYW5cbiAgICogcHJvdmlkZSB0aGF0IHByb3BlcnR5IHlvdXJzZWxmLCBvciB1c2UgdGhlXG4gICAqIFtDb250ZW50QXNJdGVtc10oQ29udGVudEFzSXRlbXMubWQpIG1peGluLiBUaGlzIG1peGluIGFsc28gZXhwZWN0cyB0aGVcbiAgICogY29tcG9uZW50IHRvIGRlZmluZSBhIGBzZWxlY3RlZEluZGV4YCBwcm9wZXJ0eS4gWW91IGNhbiBwcm92aWRlIHRoYXRcbiAgICogeW91cnNlbGYsIG9yIHVzZSB0aGUgW1NpbmdsZVNlbGVjdGlvbl0oU2luZ2xlU2VsZWN0aW9uLm1kKSBtaXhpbi5cbiAgICovXG4gIGNsYXNzIENsaWNrU2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICAvKlxuICAgICAgICogUkVWSUVXOiBXaGljaCBldmVudCBzaG91bGQgd2UgbGlzdGVuIHRvIGhlcmU/XG4gICAgICAgKlxuICAgICAgICogVGhlIHN0YW5kYXJkIHVzZSBmb3IgdGhpcyBtaXhpbiBpcyBpbiBsaXN0IGJveGVzLiBMaXN0IGJveGVzIGRvbid0XG4gICAgICAgKiBhcHBlYXIgdG8gYmUgY29uc2lzdGVudCB3aXRoIHJlZ2FyZCB0byB3aGV0aGVyIHRoZXkgc2VsZWN0IG9uIG1vdXNlZG93blxuICAgICAgICogb3IgY2xpY2svbW91c2V1cC5cbiAgICAgICAqL1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBldmVudCA9PiB7XG4gICAgICAgIHNlbGVjdFRhcmdldCh0aGlzLCBldmVudC50YXJnZXQpO1xuICAgICAgICAvLyBOb3RlOiBXZSBkb24ndCBjYWxsIHByZXZlbnREZWZhdWx0IGhlcmUuIFRoZSBkZWZhdWx0IGJlaGF2aW9yIGZvclxuICAgICAgICAvLyBtb3VzZWRvd24gaW5jbHVkZXMgc2V0dGluZyBrZXlib2FyZCBmb2N1cyBpZiB0aGUgZWxlbWVudCBkb2Vzbid0XG4gICAgICAgIC8vIGFscmVhZHkgaGF2ZSB0aGUgZm9jdXMsIGFuZCB3ZSB3YW50IHRvIHByZXNlcnZlIHRoYXQgYmVoYXZpb3IuXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbi4gVGhpcyB3aWxsIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICAgIHJldHVybiBzdXBlci5zZWxlY3RlZEluZGV4O1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRJbmRleChpbmRleCkge1xuICAgICAgaWYgKCdzZWxlY3RlZEluZGV4JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEluZGV4ID0gaW5kZXg7IH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBDbGlja1NlbGVjdGlvbjtcbn07XG5cblxuLy8gVE9ETzogSGFuZGxlIHRoZSBjYXNlIHdoZXJlIGEgbGlzdCBpdGVtIGhhcyBzdWJlbGVtZW50cy4gV2FsayB1cCB0aGUgRE9NXG4vLyBoaWVyYXJjaHkgdW50aWwgd2UgZmluZCBhbiBpdGVtIGluIHRoZSBsaXN0LCBvciBjb21lIGJhY2sgdG8gdGhpcyBlbGVtZW50LFxuLy8gaW4gd2hpY2ggY2FzZSB0aGUgZWxlbWVudCB0aGF0IHdhcyB0YXBwZWQgaXNuJ3QgYW4gaXRlbSAoYW5kIHNob3VsZCBiZVxuLy8gaWdub3JlZCkuXG5mdW5jdGlvbiBzZWxlY3RUYXJnZXQoZWxlbWVudCwgdGFyZ2V0KSB7XG4gIGNvbnN0IGluZGV4ID0gZWxlbWVudC5pdGVtcyAmJiBlbGVtZW50Lml0ZW1zLmluZGV4T2YodGFyZ2V0KTtcbiAgaWYgKGluZGV4ID49IDApIHtcbiAgICBlbGVtZW50LnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgfVxufVxuIiwiLyoqXG4gKiBBIGdyb3VwIG9mIGVsZW1lbnRzIHRoYXQgaGF2ZSBiZWVuIGFzc29jaWF0ZWQgZm9yIHRoZSBwdXJwb3NlIG9mXG4gKiBhY2NvbXBsaXNoaW5nIHNvbWUgY29sbGVjdGl2ZSBiZWhhdmlvciwgZS5nLiwga2V5Ym9hcmQgaGFuZGxpbmcuXG4gKlxuICogVGhlcmUgYXJlIGNlcnRhaW4gY29tcG9uZW50cyB0aGF0IHdhbnQgdG8gY29vcGVyYXRpdmVseSBoYW5kbGUgdGhlIGtleWJvYXJkLlxuICogRm9yIGV4YW1wbGUsIHRoZSBiYXNpYy1hcnJvdy1zZWxlY3Rpb24gYW5kIGJhc2ljLXBhZ2UtZG90cyBjb21wb25lbnRzIGFyZVxuICogb3B0aW9uYWwgY29tcG9uZW50cyB0aGF0IGNhbiBhdWdtZW50IHRoZSBhcHBlYXJhbmNlIGFuZCBiZWhhdmlvciBvZiBhbiBpbm5lclxuICogYmFzaWMtY2Fyb3VzZWwsIGFkZGluZyBhcnJvdyBidXR0b25zIGFuZCBkb3QgYnV0dG9ucywgcmVzcGVjdGl2ZWx5LiBXaGVuXG4gKiB0aGVzZSBjb21wb25lbnRzIGFyZSBuZXN0ZWQgdG9nZXRoZXIsIHRoZXkgZm9ybSBhbiBpbXBsaWNpdCB1bml0IGNhbGxlZCBhXG4gKiAqY29sbGVjdGl2ZSo6XG4gKlxuICogICAgIDxiYXNpYy1hcnJvdy1zZWxlY3Rpb24+XG4gKiAgICAgICA8YmFzaWMtcGFnZS1kb3RzPlxuICogICAgICAgICA8YmFzaWMtY2Fyb3VzZWw+XG4gKiAgICAgICAgICAgLi4uIGltYWdlcywgZXRjLiAuLi5cbiAqICAgICAgICAgPC9iYXNpYy1jYXJvdXNlbD5cbiAqICAgICAgIDwvYmFzaWMtcGFnZS1kb3RzPlxuICogICAgIDwvYmFzaWMtYXJyb3ctc2VsZWN0aW9uPlxuICpcbiAqIEluIHRoaXMgY29uZmlndXJhdGlvbiwgdGhlIHRocmVlIGNvbXBvbmVudHMgd2lsbCBhbGwgaGF2ZSBhIGB0aGlzLmNvbGxlY3RpdmVgXG4gKiByZWZlcmVuY2UgdGhhdCByZWZlcnMgdG8gYSBzaGFyZWQgaW5zdGFuY2Ugb2YgdGhlIGBDb2xsZWN0aXZlYCBjbGFzcy5cbiAqXG4gKiBUaGUgW0tleWJvYXJkXShLZXlib2FyZC5tZCkgbWl4aW4gdGhleSB1c2UgaXMgc2Vuc2l0aXZlIHRvIHRoZSBwcmVzZW5jZSBvZlxuICogdGhlIGNvbGxlY3RpdmUuIEFtb25nIG90aGVyIHRoaW5ncywgaXQgd2lsbCBlbnN1cmUgdGhhdCBvbmx5IHRoZSBvdXRlcm1vc3RcbiAqIGVsZW1lbnQgYWJvdmUg4oCUwqB0aGUgYmFzaWMtYXJyb3ctc2VsZWN0aW9uIOKAlMKgd2lsbCBiZSBhIHRhYiBzdG9wIHRoYXQgY2FuXG4gKiByZWNlaXZlIHRoZSBrZXlib2FyZCBmb2N1cy4gVGhpcyBsZXRzIHRoZSB1c2VyIHBlcmNlaXZlIHRoZSBjb21wb25lbnRcbiAqIGFycmFuZ2VtZW50IGFib3ZlIGFzIGEgc2luZ2xlIHVuaXQuIFRoZSBLZXlib2FyZCBtaXhpbiB3aWxsIGFsc28gZ2l2ZSBlYWNoXG4gKiBlbGVtZW50IGluIHRoZSBjb2xsZWN0aXZlIGEgY2hhbmNlIHRvIHByb2Nlc3MgYW55IGtleWJvYXJkIGV2ZW50cy4gU28sIGV2ZW5cbiAqIHRob3VnaCB0aGUgYmFzaWMtYXJyb3ctc2VsZWN0aW9uIGVsZW1lbnQgd2lsbCBoYXZlIHRoZSBmb2N1cywgdGhlIHN0YW5kYXJkXG4gKiBrZXlib2FyZCBuYXZpZ2F0aW9uIHByb3ZpZGVkIGJ5IGJhc2ljLWNhcm91c2VsIHdpbGwgY29udGludWUgdG8gd29yay5cbiAqXG4gKiBUaGUgW1NlbGVjdGlvbkFyaWFBY3RpdmVdKFNlbGVjdGlvbkFyaWFBY3RpdmUubWQpIG1peGluIGFsc28gcmVzcGVjdHNcbiAqIGNvbGxlY3RpdmVzIHdoZW4gdXNpbmcgdGhlIGBhcmlhLWFjdGl2ZWRlc2NlbmRhbnRgIGFuZCBgcm9sZWAgYXR0cmlidXRlcy5cbiAqIFRob3NlIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgb3V0ZXJtb3N0IGVsZW1lbnQgKGJhc2ljLWFycm93LXNlbGVjdGlvbiwgYWJvdmUpXG4gKiBzbyB0aGF0IEFSSUEgY2FuIGNvcnJlY3RseSB1bmRlcnN0YW5kIHRoZSBhcnJhbmdlbWVudCBvZiB0aGUgZWxlbWVudHMuXG4gKlxuICogWW91IGNhbiBwdXQgZWxlbWVudHMgaW50byBjb2xsZWN0aXZlcyB5b3Vyc2VsZiwgb3IgeW91IGNhbiB1c2UgdGhlXG4gKiBbVGFyZ2V0SW5Db2xsZWN0aXZlXShUYXJnZXRJbkNvbGxlY3RpdmUubWQpIG1peGluLlxuICovXG5jbGFzcyBDb2xsZWN0aXZlIHtcblxuICAvKipcbiAgICogQ3JlYXRlIGEgY29sbGVjdGl2ZS5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRUxlbWVudFtdfSBbZWxlbWVudHNdIC0gSW5pdGlhbCBlbGVtZW50cyB0byBhZGQuXG4gICAqL1xuICBjb25zdHJ1Y3RvciguLi5lbGVtZW50cykge1xuICAgIC8qKlxuICAgICAqIFRoZSBlbGVtZW50cyBpbiB0aGUgY29sbGVjdGl2ZS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIHRoaXMuZWxlbWVudHMgPSBbXTtcbiAgICB0aGlzLmFzc2ltaWxhdGUoZWxlbWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCB0aGUgaW5kaWNhdGVkIHRhcmdldCB0byB0aGUgY29sbGVjdGl2ZS5cbiAgICpcbiAgICogQnkgY29udmVudGlvbiwgaWYgdHdvIGVsZW1lbnRzIHdhbnRzIHRvIHBhcnRpY2lwYXRlIGluIGEgY29sbGVjdGl2ZSwgYW5kXG4gICAqIG9uZSBlbGVtZW50IGlzIGFuIGFuY2VzdG9yIG9mIHRoZSBvdGhlciBpbiB0aGUgRE9NLCB0aGUgYW5jZXN0b3Igc2hvdWxkXG4gICAqIGFzc2ltaWxhdGUgdGhlIGRlc2NlbmRhbnQgaW5zdGVhZCBvZiB0aGUgb3RoZXIgd2F5IGFyb3VuZC5cbiAgICpcbiAgICogQWZ0ZXIgYXNzaW1pbGF0aW9uLCBhbnkgZWxlbWVudCBpbiB0aGUgY29sbGVjdGl2ZSB0aGF0IGRlZmluZXMgYVxuICAgKiBgY29sbGVjdGl2ZUNoYW5nZWRgIG1ldGhvZCB3aWxsIGhhdmUgdGhhdCBtZXRob2QgaW52b2tlZC4gVGhpcyBhbGxvd3NcbiAgICogdGhlIGNvbGxlY3RpdmUncyBlbGVtZW50cyB0byByZXNwb25kIHRvIGNoYW5nZXMgaW4gdGhlIGNvbGxlY3RpdmUuXG4gICAqXG4gICAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fENvbGxlY3RpdmUpfSB0YXJnZXQgLSBUaGUgZWxlbWVudCBvciBjb2xsZWN0aXZlIHRvIGFkZC5cbiAgICovXG4gIGFzc2ltaWxhdGUodGFyZ2V0KSB7XG4gICAgbGV0IGNvbGxlY3RpdmVDaGFuZ2VkO1xuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBDb2xsZWN0aXZlKSB7XG4gICAgICAvLyBBc3NpbWxhdGUgYW5vdGhlciBjb2xsZWN0aXZlLlxuICAgICAgY29sbGVjdGl2ZUNoYW5nZWQgPSBhc3NpbWlsYXRlQ29sbGVjdGl2ZSh0aGlzLCB0YXJnZXQpO1xuICAgIH0gZWxzZSBpZiAodGFyZ2V0IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIC8vIEFzc2ltaWxhdGUgYW4gYXJyYXkgb2YgZWxlbWVudHMuXG4gICAgICB0YXJnZXQuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudEFkZGVkID0gYXNzaW1pbGF0ZUVsZW1lbnQodGhpcywgZWxlbWVudCk7XG4gICAgICAgIGNvbGxlY3RpdmVDaGFuZ2VkID0gY29sbGVjdGl2ZUNoYW5nZWQgfHwgZWxlbWVudEFkZGVkO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0YXJnZXQuY29sbGVjdGl2ZSkge1xuICAgICAgLy8gVGFyZ2V0IGlzIGFscmVhZHkgcGFydCBvZiBhIGNvbGxlY3RpdmUsIGFzc2ltaWxhdGUgaXQuXG4gICAgICBjb2xsZWN0aXZlQ2hhbmdlZCA9IGFzc2ltaWxhdGVDb2xsZWN0aXZlKHRoaXMsIHRhcmdldC5jb2xsZWN0aXZlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQXNzaW1pbGF0ZSBhbiBpbmRpdmlkdWFsIGVsZW1lbnQuXG4gICAgICBjb2xsZWN0aXZlQ2hhbmdlZCA9IGFzc2ltaWxhdGVFbGVtZW50KHRoaXMsIHRhcmdldCk7XG4gICAgfVxuXG4gICAgaWYgKGNvbGxlY3RpdmVDaGFuZ2VkKSB7XG4gICAgICB0aGlzLmludm9rZU1ldGhvZCgnY29sbGVjdGl2ZUNoYW5nZWQnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW52b2tlIGEgbWV0aG9kIG9uIGFsbCBlbGVtZW50cyBpbiB0aGUgY29sbGVjdGl2ZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZCAtIFRoZSBuYW1lIG9mIHRoZSBtZXRob2QgdG8gaW52b2tlIG9uIGFsbCBlbGVtZW50cy5cbiAgICogQHBhcmFtIHtvYmplY3RbXX0gW2FyZ3NdIC0gVGhlIGFyZ3VtZW50cyB0byB0aGUgbWV0aG9kXG4gICAqL1xuICBpbnZva2VNZXRob2QobWV0aG9kLCAuLi5hcmdzKSB7XG4gICAgLy8gSW52b2tlIGZyb20gaW5uZXJtb3N0IHRvIG91dGVybW9zdC5cbiAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuZWxlbWVudHM7XG4gICAgZm9yIChsZXQgaSA9IGVsZW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudHNbaV07XG4gICAgICBpZiAoZWxlbWVudFttZXRob2RdKSB7XG4gICAgICAgIGVsZW1lbnRbbWV0aG9kXS5hcHBseShlbGVtZW50LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhlIG91dGVybW9zdCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aXZlLlxuICAgKiBCeSBjb252ZW50aW9uLCB0aGlzIGlzIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBgZWxlbWVudHNgIGFycmF5LlxuICAgKi9cbiAgZ2V0IG91dGVybW9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudHNbMF07XG4gIH1cblxuICAvKipcbiAgICogU2V0IGEgZGVmYXVsdCBhdHRyaWJ1dGUgb24gYW4gZWxlbWVudCB0aGF0IG1heSBiZSBpbiBhIGNvbGxlY3RpdmUuIFRoaXNcbiAgICogZnVuY3Rpb24gaXMgZGVzaWduZWQgdG8gaGVscCBjb2xsZWN0aXZlcyB3b3JrIHdpdGggYnJvd3NlciBmZWF0dXJlcyBsaWtlXG4gICAqIGtleWJvYXJkIHN1cHBvcnQgYW5kIEFSSUEsIHdoZXJlIG9ubHkgdGhlIG91dGVybW9zdCBtZW1iZXIgb2YgYSBjb2xsZWN0aXZlXG4gICAqIHNob3VsZCBleHBvc2UsIGUuZy4sIHRhYmluZGV4IG9yIEFSSUEgYXR0cmlidXRlcy5cbiAgICpcbiAgICogSWYgdGhlIGVsZW1lbnQgaXMgbm90IGluIGEgY29sbGVjdGl2ZSwgYW5kIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSB0aGVcbiAgICogZ2l2ZW4gYXR0cmlidXRlLCBzZXQgdGhlIGF0dHJpYnV0ZSBvbiB0aGUgZWxlbWVudCB0byB0aGUgZGVmYXVsdCB2YWx1ZS5cbiAgICpcbiAgICogSWYgdGhlIGVsZW1lbnQgKmlzKiBpbiBhIGNvbGxlY3RpdmUsIHNjYW4gdGhlIGNvbGxlY3RpdmUncyBpbm5lciBtZW1iZXJzXG4gICAqIHRvIHNlZSBpZiBhbnkgb2YgdGhlbSBoYXZlIHRoZSBhdHRyaWJ1dGUuIElmIHNvLCBwcm9tb3RlIHRoYXQgdmFsdWUgdG8gdGhlXG4gICAqIG91dGVybW9zdCBlbGVtZW50LiBJZiBhIGByZXNpZHVhbFZhbHVlYCBpcyBzdXBwbGllZCwgc2V0IHRoZSBpbm5lciBtZW1iZXJzJ1xuICAgKiBhdHRyaWJ1dGUgdG8gdGhhdCB2YWx1ZTsgb3RoZXJ3aXNlLCByZW1vdmUgdGhlIGF0dHJpYnV0ZSBmcm9tIHRoZSBpbm5lclxuICAgKiBtZW1iZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBBbiBlbGVtZW50IHRoYXQgbWF5IG9yIG1heSBub3QgYmUgaW4gYSBjb2xsZWN0aXZlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlTmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBhdHRyaWJ1dGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbZGVmYXVsdFZhbHVlXSAtIFRoZSBkZWZhdWx0IHZhbHVlIGZvciB0aGUgYXR0cmlidXRlLlxuICAgKi9cbiAgc3RhdGljIHByb21vdGVBdHRyaWJ1dGUoZWxlbWVudCwgYXR0cmlidXRlTmFtZSwgZGVmYXVsdFZhbHVlLCByZXNpZHVhbFZhbHVlKSB7XG4gICAgbGV0IG91dGVybW9zdDtcbiAgICBsZXQgYXR0cmlidXRlVmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgaWYgKCFlbGVtZW50LmNvbGxlY3RpdmUpIHtcbiAgICAgIC8vIEVsZW1lbnQgaXNuJ3QgcGFydCBvZiBhIGNvbGxlY3RpdmU7IHRyZWF0IGl0IGFzIG91dGVybW9zdC5cbiAgICAgIG91dGVybW9zdCA9IGVsZW1lbnQ7XG5cbiAgICAvLyBSRVZJRVc6IFVuY29tbWVudGluZyB0aGVzZSBsaW5lcyBtYWtlcyBjb2xsZWN0aXZlcyBtb3JlIGVmZmljaWVudCwgYXNcbiAgICAvLyBvbmx5IHRoZSBvdXRlcm1vc3QgZWxlbWVudCBpbiB0aGUgY29sbGVjdGl2ZSB3aWxsIGRvIHRoZSBhdHRyaWJ1dGUgd29yay5cbiAgICAvLyBIb3dldmVyLCB0aGF0IHJlcXVpcmVzIHRoYXQgYWxsIG1lbWJlcnMgb2YgYSBjb2xsZWN0aXZlIGltcGxlbWVudCB0aGVcbiAgICAvLyBzYW1lIG1peGlucyAoZS5nLiwgU2VsZWN0aW9uQXJpYUFjdGl2ZSksIHdoaWNoIGZlZWxzIGxpbWl0aW5nLiBMZWF2aW5nXG4gICAgLy8gdGhpcyBpbiBoZXJlIGFzIGEgY29tbWVudCB1bnRpbCB0aGlzIGNhbiBiZSBjb25zaWRlcmVkIGZ1cnRoZXIuXG5cbiAgICAvLyB9IGVsc2UgaWYgKGVsZW1lbnQgIT09IGVsZW1lbnQuY29sbGVjdGl2ZS5vdXRlcm1vc3RFbGVtZW50KSB7XG4gICAgLy8gICAvLyBMZXQgdGhlIG91dGVybW9zdCBlbGVtZW50IGhhbmRsZSB0aGlzLlxuICAgIC8vICAgcmV0dXJuO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNjYW4gaW5uZXIgZWxlbWVudHMsIHdvcmtpbmcgZnJvbSBpbnNpZGUgKGVuZCkgdG93YXJkIG91dCAoc3RhcnQpLlxuICAgICAgLy8gUGljayB1cCBhbnkgYXR0cmlidXRlIHZhbHVlIHRoZXkgaGF2ZSBhbmQgcmVtb3ZlIGl0LlxuICAgICAgbGV0IGVsZW1lbnRzID0gZWxlbWVudC5jb2xsZWN0aXZlLmVsZW1lbnRzO1xuICAgICAgb3V0ZXJtb3N0ID0gZWxlbWVudHNbMF07XG4gICAgICBmb3IgKGxldCBpID0gZWxlbWVudHMubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgICBjb25zdCBpbm5lckVsZW1lbnQgPSBlbGVtZW50c1tpXTtcbiAgICAgICAgY29uc3QgaW5uZXJBdHRyaWJ1dGVWYWx1ZSA9IGlubmVyRWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gICAgICAgIGlmIChpbm5lckF0dHJpYnV0ZVZhbHVlICYmIGlubmVyQXR0cmlidXRlVmFsdWUgIT09IHJlc2lkdWFsVmFsdWUpIHtcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IGlubmVyQXR0cmlidXRlVmFsdWU7XG4gICAgICAgICAgaWYgKHJlc2lkdWFsVmFsdWUpIHtcbiAgICAgICAgICAgIGlubmVyRWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgcmVzaWR1YWxWYWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlubmVyRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCFpbm5lckF0dHJpYnV0ZVZhbHVlICYmIHJlc2lkdWFsVmFsdWUpIHtcbiAgICAgICAgICBpbm5lckVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIHJlc2lkdWFsVmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhdHRyaWJ1dGVWYWx1ZSkge1xuICAgICAgLy8gU2V0IGF0dHJpYnV0ZSBvbiBvdXRlcm1vc3QgZWxlbWVudCBpZiBpdCBkb2Vzbid0IGFscmVhZHkgaGF2ZSBpdCwgb3JcbiAgICAgIC8vIGlmIHRoZSBleGlzdGluZyBhdHRyaWJ1dGUgdmFsdWUgaXMgdGhlIGRlZmF1bHQuXG4gICAgICBjb25zdCBleGlzdGluZ0F0dHJpYnV0ZVZhbHVlID0gb3V0ZXJtb3N0LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcbiAgICAgIGlmICghZXhpc3RpbmdBdHRyaWJ1dGVWYWx1ZSB8fFxuICAgICAgICAgIChleGlzdGluZ0F0dHJpYnV0ZVZhbHVlID09PSBkZWZhdWx0VmFsdWUgJiYgYXR0cmlidXRlVmFsdWUgIT09IGRlZmF1bHRWYWx1ZSkpIHtcbiAgICAgICAgb3V0ZXJtb3N0LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuXG4vLyBUaGUgZmlyc3QgY29sbGVjdGl2ZSBhc3NpbWlsYXRlcyB0aGUgc2Vjb25kLlxuZnVuY3Rpb24gYXNzaW1pbGF0ZUNvbGxlY3RpdmUoY29sbGVjdGl2ZTEsIGNvbGxlY3RpdmUyKSB7XG4gIGlmIChjb2xsZWN0aXZlMSA9PT0gY29sbGVjdGl2ZTIpIHtcbiAgICAvLyBDb2xsZWN0aXZlcyBhcmUgc2FtZTsgaWdub3JlLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gY29sbGVjdGl2ZTIuZWxlbWVudHM7XG5cbiAgLy8gT2xkIGNvbGxlY3RpdmUgd2lsbCBubyBsb25nZXIgaGF2ZSBhbnkgZWxlbWVudHMgb2YgaXRzIG93bi5cbiAgY29sbGVjdGl2ZTIuZWxlbWVudHMgPSBbXTtcblxuICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGFzc2ltaWxhdGVFbGVtZW50KGNvbGxlY3RpdmUxLCBlbGVtZW50KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cblxuLy8gQXNzaW1pbGF0ZSB0aGUgaW5kaWNhdGVkIGVsZW1lbnQuXG5mdW5jdGlvbiBhc3NpbWlsYXRlRWxlbWVudChjb2xsZWN0aXZlLCBlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50LmNvbGxlY3RpdmUgPT09IGNvbGxlY3RpdmUpIHtcbiAgICAvLyBBbHJlYWR5IHBhcnQgb2YgdGhpcyBjb2xsZWN0aXZlLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBlbGVtZW50LmNvbGxlY3RpdmUgPSBjb2xsZWN0aXZlO1xuICBjb2xsZWN0aXZlLmVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gIHJldHVybiB0cnVlO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IENvbGxlY3RpdmU7XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIENvbXBvc2FibGUuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB0byBtYWtlIGEgY2xhc3MgbW9yZSBlYXNpbHkgY29tcG9zYWJsZSB3aXRoIG90aGVyIG1peGlucy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBjb250cmlidXRlcyBhIGBjb21wb3NlYCBtZXRob2QgdGhhdCBhcHBsaWVzIGEgc2V0IG9mIG1peGluXG4gICAqIGZ1bmN0aW9ucyBhbmQgcmV0dXJucyB0aGUgcmVzdWx0aW5nIG5ldyBjbGFzcy4gVGhpcyBzdWdhciBjYW4gbWFrZSB0aGVcbiAgICogYXBwbGljYXRpb24gb2YgbWFueSBtaXhpbnMgYXQgb25jZSBlYXNpZXIgdG8gcmVhZC5cbiAgICovXG4gIGNsYXNzIENvbXBvc2FibGUgZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qKlxuICAgICAqIEFwcGx5IGEgc2V0IG9mIG1peGluIGZ1bmN0aW9ucyBvciBtaXhpbiBvYmplY3RzIHRvIHRoZSBwcmVzZW50IGNsYXNzIGFuZFxuICAgICAqIHJldHVybiB0aGUgbmV3IGNsYXNzLlxuICAgICAqXG4gICAgICogSW5zdGVhZCBvZiB3cml0aW5nOlxuICAgICAqXG4gICAgICogICAgIGxldCBNeUNsYXNzID0gTWl4aW4xKE1peGluMihNaXhpbjMoTWl4aW40KE1peGluNShCYXNlQ2xhc3MpKSkpKTtcbiAgICAgKlxuICAgICAqIFlvdSBjYW4gd3JpdGU6XG4gICAgICpcbiAgICAgKiAgICAgbGV0IE15Q2xhc3MgPSBDb21wb3NhYmxlKEJhc2VDbGFzcykuY29tcG9zZShcbiAgICAgKiAgICAgICBNaXhpbjEsXG4gICAgICogICAgICAgTWl4aW4yLFxuICAgICAqICAgICAgIE1peGluMyxcbiAgICAgKiAgICAgICBNaXhpbjQsXG4gICAgICogICAgICAgTWl4aW41XG4gICAgICogICAgICk7XG4gICAgICpcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGNhbiBhbHNvIHRha2UgbWl4aW4gb2JqZWN0cy4gQSBtaXhpbiBvYmplY3QgaXMganVzdCBhXG4gICAgICogc2hvcnRoYW5kIGZvciBhIG1peGluIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIG5ldyBzdWJjbGFzcyB3aXRoIHRoZSBnaXZlblxuICAgICAqIG1lbWJlcnMuIFRoZSBtaXhpbiBvYmplY3QncyBtZW1iZXJzIGFyZSAqbm90KiBjb3BpZWQgZGlyZWN0bHkgb250byB0aGVcbiAgICAgKiBwcm90b3R5cGUgb2YgdGhlIGJhc2UgY2xhc3MsIGFzIHdpdGggdHJhZGl0aW9uYWwgbWl4aW5zLlxuICAgICAqXG4gICAgICogSW4gYWRkaXRpb24gdG8gcHJvdmlkaW5nIHN5bnRhY3RpYyBzdWdhciwgdGhpcyBtaXhpbiBjYW4gYmUgdXNlZCB0b1xuICAgICAqIGRlZmluZSBhIGNsYXNzIGluIEVTNSwgd2hpY2ggbGFja3MgRVM2J3MgYGNsYXNzYCBrZXl3b3JkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHsuLi5taXhpbnN9IG1peGlucyAtIEEgc2V0IG9mIG1peGluIGZ1bmN0aW9ucyBvciBvYmplY3RzIHRvIGFwcGx5LlxuICAgICAqL1xuICAgIHN0YXRpYyBjb21wb3NlKC4uLm1peGlucykge1xuICAgICAgLy8gV2UgY3JlYXRlIGEgbmV3IHN1YmNsYXNzIGZvciBlYWNoIG1peGluIGluIHR1cm4uIFRoZSByZXN1bHQgYmVjb21lc1xuICAgICAgLy8gdGhlIGJhc2UgY2xhc3MgZXh0ZW5kZWQgYnkgYW55IHN1YnNlcXVlbnQgbWl4aW5zLiBJdCB0dXJucyBvdXQgdGhhdFxuICAgICAgLy8gd2UgY2FuIHVzZSBBcnJheS5yZWR1Y2UoKSB0byBjb25jaXNlbHkgZXhwcmVzcyB0aGlzLCB1c2luZyB0aGUgY3VycmVudFxuICAgICAgLy8gb2JqZWN0IGFzIHRoZSBzZWVkIGZvciByZWR1Y2UoKS5cbiAgICAgIHJldHVybiBtaXhpbnMucmVkdWNlKGNvbXBvc2VDbGFzcywgdGhpcyk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gQ29tcG9zYWJsZTtcbn07XG5cblxuLy8gUHJvcGVydGllcyBkZWZpbmVkIGJ5IE9iamVjdCB0aGF0IHdlIGRvbid0IHdhbnQgdG8gbWl4aW4uXG5jb25zdCBOT05fTUlYQUJMRV9PQkpFQ1RfUFJPUEVSVElFUyA9IFtcbiAgJ2NvbnN0cnVjdG9yJ1xuXTtcblxuLypcbiAqIEFwcGx5IHRoZSBtaXhpbiB0byB0aGUgZ2l2ZW4gYmFzZSBjbGFzcyB0byByZXR1cm4gYSBuZXcgY2xhc3MuXG4gKiBUaGUgbWl4aW4gY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbW9kaWZpZWQgY2xhc3MsIG9yIGFcbiAqIHBsYWluIG9iamVjdCB3aG9zZSBtZW1iZXJzIHdpbGwgYmUgY29waWVkIHRvIHRoZSBuZXcgY2xhc3MnIHByb3RvdHlwZS5cbiAqL1xuZnVuY3Rpb24gY29tcG9zZUNsYXNzKGJhc2UsIG1peGluKSB7XG4gIGlmICh0eXBlb2YgbWl4aW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBNaXhpbiBmdW5jdGlvblxuICAgIHJldHVybiBtaXhpbihiYXNlKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBNaXhpbiBvYmplY3RcbiAgICBjbGFzcyBTdWJjbGFzcyBleHRlbmRzIGJhc2Uge31cbiAgICBjb3B5T3duUHJvcGVydGllcyhtaXhpbiwgU3ViY2xhc3MucHJvdG90eXBlLCBOT05fTUlYQUJMRV9PQkpFQ1RfUFJPUEVSVElFUyk7XG4gICAgcmV0dXJuIFN1YmNsYXNzO1xuICB9XG59XG5cblxuLypcbiAqIENvcHkgdGhlIGdpdmVuIHByb3BlcnRpZXMvbWV0aG9kcyB0byB0aGUgdGFyZ2V0LlxuICogUmV0dXJuIHRoZSB1cGRhdGVkIHRhcmdldC5cbiAqL1xuZnVuY3Rpb24gY29weU93blByb3BlcnRpZXMoc291cmNlLCB0YXJnZXQsIGlnbm9yZVByb3BlcnR5TmFtZXMgPSBbXSkge1xuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2UpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgaWYgKGlnbm9yZVByb3BlcnR5TmFtZXMuaW5kZXhPZihuYW1lKSA8IDApIHtcbiAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgbmFtZSk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdGFyZ2V0O1xufVxuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5pbXBvcnQgdG9nZ2xlQ2xhc3MgZnJvbSAnLi90b2dnbGVDbGFzcyc7XG5pbXBvcnQgc3ltYm9scyBmcm9tICcuL3N5bWJvbHMnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBpdGVtc1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnaXRlbXMnKTtcbmNvbnN0IGl0ZW1Jbml0aWFsaXplZFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnaXRlbUluaXRpYWxpemVkJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBDb250ZW50QXNJdGVtcy4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgY29udGVudCBzZW1hbnRpY3MgKGVsZW1lbnRzKSB0byBsaXN0IGl0ZW0gc2VtYW50aWNzLlxuICAgKlxuICAgKiBJdGVtcyBkaWZmZXIgZnJvbSBlbGVtZW50IGNvbnRlbnRzIGluIHNldmVyYWwgd2F5czpcbiAgICpcbiAgICogKiBUaGV5IGFyZSBvZnRlbiByZWZlcmVuY2VkIHZpYSBpbmRleC5cbiAgICogKiBUaGV5IG1heSBoYXZlIGEgc2VsZWN0aW9uIHN0YXRlLlxuICAgKiAqIEl0J3MgY29tbW9uIHRvIGRvIHdvcmsgdG8gaW5pdGlhbGl6ZSB0aGUgYXBwZWFyYW5jZSBvciBzdGF0ZSBvZiBhIG5ld1xuICAgKiAgIGl0ZW0uXG4gICAqICogQXV4aWxpYXJ5IGludmlzaWJsZSBjaGlsZCBlbGVtZW50cyBhcmUgZmlsdGVyZWQgb3V0IGFuZCBub3QgY291bnRlZCBhc1xuICAgKiAgIGl0ZW1zLiBBdXhpbGlhcnkgZWxlbWVudHMgaW5jbHVkZSBsaW5rLCBzY3JpcHQsIHN0eWxlLCBhbmQgdGVtcGxhdGVcbiAgICogICBlbGVtZW50cy4gVGhpcyBmaWx0ZXJpbmcgZW5zdXJlcyB0aGF0IHRob3NlIGF1eGlsaWFyeSBlbGVtZW50cyBjYW4gYmVcbiAgICogICB1c2VkIGluIG1hcmt1cCBpbnNpZGUgb2YgYSBsaXN0IHdpdGhvdXQgYmVpbmcgdHJlYXRlZCBhcyBsaXN0IGl0ZW1zLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgYSBjb21wb25lbnQgdG8gcHJvdmlkZSBhIGBjb250ZW50YCBwcm9wZXJ0eSByZXR1cm5pbmcgYVxuICAgKiByYXcgc2V0IG9mIGVsZW1lbnRzLiBZb3UgY2FuIHByb3ZpZGUgdGhhdCB5b3Vyc2VsZiwgb3IgdXNlIHRoZVxuICAgKiBbRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudF0oRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudC5tZCkgbWl4aW4uXG4gICAqXG4gICAqIFRoZSBtb3N0IGNvbW1vbmx5IHJlZmVyZW5jZWQgcHJvcGVydHkgZGVmaW5lZCBieSB0aGlzIG1peGluIGlzIHRoZSBgaXRlbXNgXG4gICAqIHByb3BlcnR5LiBUbyBhdm9pZCBoYXZpbmcgdG8gZG8gd29yayBlYWNoIHRpbWUgdGhhdCBwcm9wZXJ0eSBpcyByZXF1ZXN0ZWQsXG4gICAqIHRoaXMgbWl4aW4gc3VwcG9ydHMgYW4gb3B0aW1pemVkIG1vZGUuIElmIHlvdSBpbnZva2UgdGhlIGBjb250ZW50Q2hhbmdlZGBcbiAgICogbWV0aG9kIHdoZW4gdGhlIHNldCBvZiBpdGVtcyBjaGFuZ2VzLCB0aGUgbWl4aW4gY29uY2x1ZGVzIHRoYXQgeW91J2xsIHRha2VcbiAgICogY2FyZSBvZiBub3RpZnlpbmcgaXQgb2YgZnV0dXJlIGNoYW5nZXMsIGFuZCB0dXJucyBvbiB0aGUgb3B0aW1pemF0aW9uLiBXaXRoXG4gICAqIHRoYXQgb24sIHRoZSBtaXhpbiBzYXZlcyBhIHJlZmVyZW5jZSB0byB0aGUgY29tcHV0ZWQgc2V0IG9mIGl0ZW1zLCBhbmQgd2lsbFxuICAgKiByZXR1cm4gdGhhdCBpbW1lZGlhdGVseSBvbiBzdWJzZXF1ZW50IGNhbGxzIHRvIHRoZSBgaXRlbXNgIHByb3BlcnR5LiBJZiB5b3VcbiAgICogdXNlIHRoaXMgbWl4aW4gaW4gY29uanVuY3Rpb24gd2l0aCB0aGVcbiAgICogW0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnRdKERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQubWQpIG1peGluLCB0aGVcbiAgICogYGNvbnRlbnRDaGFuZ2VkYCBtZXRob2Qgd2lsbCBiZSBpbnZva2VkIGZvciB5b3Ugd2hlbiB0aGUgZWxlbWVudCdzIGNoaWxkcmVuXG4gICAqIGNoYW5nZSwgdHVybmluZyBvbiB0aGUgb3B0aW1pemF0aW9uIGF1dG9tYXRpY2FsbHkuXG4gICAqL1xuICBjbGFzcyBDb250ZW50QXNJdGVtcyBleHRlbmRzIGJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogQXBwbHkgdGhlIHNlbGVjdGlvbiBzdGF0ZSB0byBhIHNpbmdsZSBpdGVtLlxuICAgICAqXG4gICAgICogSW52b2tlIHRoaXMgbWV0aG9kIHRvIHNpZ25hbCB0aGF0IHRoZSBzZWxlY3RlZCBzdGF0ZSBvZiB0aGUgaW5kaWNhdGVkIGl0ZW1cbiAgICAgKiBoYXMgY2hhbmdlZC4gQnkgZGVmYXVsdCwgdGhpcyBhcHBsaWVzIGEgYHNlbGVjdGVkYCBDU1MgY2xhc3MgaWYgdGhlIGl0ZW1cbiAgICAgKiBpcyBzZWxlY3RlZCwgYW5kIHJlbW92ZWQgaXQgaWYgbm90IHNlbGVjdGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbSAtIFRoZSBpdGVtIHdob3NlIHNlbGVjdGlvbiBzdGF0ZSBoYXMgY2hhbmdlZC5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNlbGVjdGVkIC0gVHJ1ZSBpZiB0aGUgaXRlbSBpcyBzZWxlY3RlZCwgZmFsc2UgaWYgbm90LlxuICAgICAqL1xuICAgIFtzeW1ib2xzLmFwcGx5U2VsZWN0aW9uXShpdGVtLCBzZWxlY3RlZCkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuYXBwbHlTZWxlY3Rpb25dKSB7IHN1cGVyW3N5bWJvbHMuYXBwbHlTZWxlY3Rpb25dKGl0ZW0sIHNlbGVjdGVkKTsgfVxuICAgICAgdG9nZ2xlQ2xhc3MoaXRlbSwgJ3NlbGVjdGVkJywgc2VsZWN0ZWQpO1xuICAgIH1cblxuICAgIGNvbnRlbnRDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbnRlbnRDaGFuZ2VkKSB7IHN1cGVyLmNvbnRlbnRDaGFuZ2VkKCk7IH1cblxuICAgICAgLy8gU2luY2Ugd2UgZ290IHRoZSBjb250ZW50Q2hhbmdlZCBjYWxsLCB3ZSdsbCBhc3N1bWUgd2UnbGwgYmUgbm90aWZpZWQgaWZcbiAgICAgIC8vIHRoZSBzZXQgb2YgaXRlbXMgY2hhbmdlcyBsYXRlci4gV2UgdHVybiBvbiBtZW1vaXphdGlvbiBvZiB0aGUgaXRlbXNcbiAgICAgIC8vIHByb3BlcnR5IGJ5IHNldHRpbmcgb3VyIGludGVybmFsIHByb3BlcnR5IHRvIG51bGwgKGluc3RlYWQgb2ZcbiAgICAgIC8vIHVuZGVmaW5lZCkuXG4gICAgICB0aGlzW2l0ZW1zU3ltYm9sXSA9IG51bGw7XG5cbiAgICAgIHRoaXMuaXRlbXNDaGFuZ2VkKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuZXZlciBhIG5ldyBpdGVtIGlzIGFkZGVkIHRvIHRoZSBsaXN0LlxuICAgICAqXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLiBZb3UgY2FuIG92ZXJyaWRlXG4gICAgICogdGhpcyB0byBwZXJmb3JtIHBlci1pdGVtIGluaXRpYWxpemF0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbSAtIFRoZSBpdGVtIHRoYXQgd2FzIGFkZGVkLlxuICAgICAqL1xuICAgIFtzeW1ib2xzLml0ZW1BZGRlZF0oaXRlbSkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuaXRlbUFkZGVkXSkgeyBzdXBlcltzeW1ib2xzLml0ZW1BZGRlZF0oaXRlbSk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBzZXQgb2YgaXRlbXMgaW4gdGhlIGxpc3QuIFNlZSB0aGUgdG9wLWxldmVsIGRvY3VtZW50YXRpb24gZm9yXG4gICAgICogbWl4aW4gZm9yIGEgZGVzY3JpcHRpb24gb2YgaG93IGl0ZW1zIGRpZmZlciBmcm9tIHBsYWluIGNvbnRlbnQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX1cbiAgICAgKi9cbiAgICBnZXQgaXRlbXMoKSB7XG4gICAgICBsZXQgaXRlbXM7XG4gICAgICBpZiAodGhpc1tpdGVtc1N5bWJvbF0gPT0gbnVsbCkge1xuICAgICAgICBpdGVtcyA9IGZpbHRlckF1eGlsaWFyeUVsZW1lbnRzKHRoaXMuY29udGVudCk7XG4gICAgICAgIC8vIE5vdGU6IHRlc3QgZm9yICplcXVhbGl0eSogd2l0aCBudWxsOyBkb24ndCB0cmVhdCB1bmRlZmluZWQgYXMgYSBtYXRjaC5cbiAgICAgICAgaWYgKHRoaXNbaXRlbXNTeW1ib2xdID09PSBudWxsKSB7XG4gICAgICAgICAgLy8gTWVtb2l6ZSB0aGUgc2V0IG9mIGl0ZW1zLlxuICAgICAgICAgIHRoaXNbaXRlbXNTeW1ib2xdID0gaXRlbXM7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJldHVybiB0aGUgbWVtb2l6ZWQgaXRlbXMuXG4gICAgICAgIGl0ZW1zID0gdGhpc1tpdGVtc1N5bWJvbF07XG4gICAgICB9XG4gICAgICByZXR1cm4gaXRlbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuIHRoZSB1bmRlcmx5aW5nIGNvbnRlbnRzIGNoYW5nZS4gSXQgaXMgYWxzb1xuICAgICAqIGludm9rZWQgb24gY29tcG9uZW50IGluaXRpYWxpemF0aW9uIOKAkyBzaW5jZSB0aGUgaXRlbXMgaGF2ZSBcImNoYW5nZWRcIiBmcm9tXG4gICAgICogYmVpbmcgbm90aGluZy5cbiAgICAgKi9cbiAgICBpdGVtc0NoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuaXRlbXNDaGFuZ2VkKSB7IHN1cGVyLml0ZW1zQ2hhbmdlZCgpOyB9XG5cbiAgICAgIC8vIFBlcmZvcm0gcGVyLWl0ZW0gaW5pdGlhbGl6YXRpb24uXG4gICAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGlmICghaXRlbVtpdGVtSW5pdGlhbGl6ZWRTeW1ib2xdKSB7XG4gICAgICAgICAgdGhpc1tzeW1ib2xzLml0ZW1BZGRlZF0oaXRlbSk7XG4gICAgICAgICAgaXRlbVtpdGVtSW5pdGlhbGl6ZWRTeW1ib2xdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2l0ZW1zLWNoYW5nZWQnKSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBAZXZlbnQgaXRlbXMtY2hhbmdlZFxuICAgICAqXG4gICAgICogVGhpcyBldmVudCBpcyByYWlzZWQgd2hlbiB0aGUgc2V0IG9mIGl0ZW1zIGNoYW5nZXMuXG4gICAgICovXG4gIH1cblxuICByZXR1cm4gQ29udGVudEFzSXRlbXM7XG59O1xuXG5cbi8vIFJldHVybiB0aGUgZ2l2ZW4gZWxlbWVudHMsIGZpbHRlcmluZyBvdXQgYXV4aWxpYXJ5IGVsZW1lbnRzIHRoYXQgYXJlbid0XG4vLyB0eXBpY2FsbHkgdmlzaWJsZS4gSXRlbXMgd2hpY2ggYXJlIG5vdCBlbGVtZW50cyBhcmUgcmV0dXJuZWQgYXMgaXMuXG5mdW5jdGlvbiBmaWx0ZXJBdXhpbGlhcnlFbGVtZW50cyhpdGVtcykge1xuICBjb25zdCBhdXhpbGlhcnlUYWdzID0gW1xuICAgICdsaW5rJyxcbiAgICAnc2NyaXB0JyxcbiAgICAnc3R5bGUnLFxuICAgICd0ZW1wbGF0ZSdcbiAgXTtcbiAgcmV0dXJuIFtdLmZpbHRlci5jYWxsKGl0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuICFpdGVtLmxvY2FsTmFtZSB8fCBhdXhpbGlhcnlUYWdzLmluZGV4T2YoaXRlbS5sb2NhbE5hbWUpIDwgMDtcbiAgfSk7XG59XG5cblxuLyoqXG4gKiBGaXJlcyB3aGVuIHRoZSBpdGVtcyBpbiB0aGUgbGlzdCBjaGFuZ2UuXG4gKlxuICogQG1lbWJlcm9mIENvbnRlbnRBc0l0ZW1zXG4gKiBAZXZlbnQgaXRlbXMtY2hhbmdlZFxuICovXG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgdGFyZ2V0U3ltYm9sID0gY3JlYXRlU3ltYm9sKCd0YXJnZXQnKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0LiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gdGhhdCBkZWZpbmVzIHRoZSB0YXJnZXQgb2YgYSBjb21wb25lbnQg4oCUIHRoZSBlbGVtZW50IHRoZSBjb21wb25lbnQgaXNcbiAgICogbWFuYWdpbmcgb3Igc29tZWhvdyByZXNwb25zaWJsZSBmb3Ig4oCUIGFzIGl0cyBmaXJzdCBjaGlsZC5cbiAgICpcbiAgICogU29tZSBjb21wb25lbnRzIHNlcnZlIHRvIGRlY29yYXRlIG9yIG1vZGlmeSBvdGhlciBlbGVtZW50cy4gQSBjb21tb25cbiAgICogcGF0dGVybiBpcyB0byBoYXZlIG9uZSBjb21wb25lbnQgd3JhcCBhbm90aGVyLCBhbmQgaGF2ZSB0aGUgb3V0ZXIsIHBhcmVudFxuICAgKiBjb21wb25lbnQgaW1wbGljaXRseSBtb2RpZnkgdGhlIGNoaWxkLiBUaGlzIG1peGluIGZhY2lsaXRhdGVzIHRoaXMgYnlcbiAgICogaW1wbGljaXRseSB0YWtpbmcgYW4gZWxlbWVudCdzIGZpcnN0IGNoaWxkIGFzIGl0cyBcInRhcmdldFwiLlxuICAgKlxuICAgKiBFeGFtcGxlOlxuICAgKlxuICAgKiAgICAgPG91dGVyLWVsZW1lbnQ+XG4gICAqICAgICAgIDxpbm5lci1lbGVtZW50PjwvaW5uZXItZWxlbWVudD5cbiAgICogICAgIDwvb3V0ZXItZWxlbWVudD5cbiAgICpcbiAgICogSWYgYG91dGVyLWVsZW1lbnRgIHVzZXMgdGhpcyBtaXhpbiwgdGhlbiBpdHMgYHRhcmdldGAgcHJvcGVydHkgd2lsbCBiZVxuICAgKiBzZXQgdG8gcG9pbnQgdG8gdGhlIGBpbm5lci1lbGVtZW50YCwgYmVjYXVzZSB0aGF0IGlzIGl0cyBmaXJzdCBjaGlsZC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGEgYGNvbnRlbnRgIHByb3BlcnR5IHRoYXQgcmV0dXJucyB0aGUgZWxlbWVudCdzIGNvbnRlbnQuXG4gICAqIFlvdSBjYW4gaW1wbGVtZW50IHRoYXQgeW91cnNlbGYsIG9yIHVzZSB0aGVcbiAgICogW0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnRdKERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQubWQpIG1peGluLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGNhbiBiZSBjb21iaW5lZCB3aXRoIHRoZVxuICAgKiBbVGFyZ2V0SW5Db2xsZWN0aXZlXShUYXJnZXRJbkNvbGxlY3RpdmUubWQpIG1peGluIHRvIGhhdmUgYSBjb21wb25lbnRcbiAgICogcGFydGljaXBhdGUgaW4gY29sbGVjdGl2ZSBrZXlib2FyZCBoYW5kbGluZy5cbiAgICovXG4gIGNsYXNzIENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0IGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb250ZW50Q2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5jb250ZW50Q2hhbmdlZCkgeyBzdXBlci5jb250ZW50Q2hhbmdlZCgpOyB9XG4gICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5jb250ZW50O1xuICAgICAgY29uc3QgdGFyZ2V0ID0gY29udGVudCAmJiBjb250ZW50WzBdO1xuICAgICAgLy8gQSBjb21wb25lbnQgdXNpbmcgYSB0YXJnZXQgd2lsbCBsaWtlbHkgZG8gYSBidW5jaCBvZiB3b3JrIHdoZW4gdGhlXG4gICAgICAvLyB0YXJnZXQgY2hhbmdlcywgc28gb25seSBzZXQgdGhlIHRhcmdldCBpZiBpdCdzIGFjdHVhbGx5IGNoYW5nZWQuXG4gICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldCAhPT0gdGhpcy50YXJnZXQpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cy9zZXRzIHRoZSBjdXJyZW50IHRhcmdldCBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGdldCB0YXJnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpc1t0YXJnZXRTeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgdGFyZ2V0KGVsZW1lbnQpIHtcbiAgICAgIHRoaXNbdGFyZ2V0U3ltYm9sXSA9IGVsZW1lbnQ7XG4gICAgICBpZiAoJ3RhcmdldCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIudGFyZ2V0ID0gZWxlbWVudDsgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0O1xufTtcbiIsImltcG9ydCBzeW1ib2xzIGZyb20gJy4vc3ltYm9scyc7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBEaXJlY3Rpb25TZWxlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYXBzIGRpcmVjdGlvbiBzZW1hbnRpY3MgKGdvTGVmdCwgZ29SaWdodCwgZXRjLikgdG8gc2VsZWN0aW9uXG4gICAqIHNlbWFudGljcyAoc2VsZWN0UHJldmlvdXMsIHNlbGVjdE5leHQsIGV0Yy4pLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGNhbiBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlXG4gICAqIFtLZXlib2FyZERpcmVjdGlvbl0oS2V5Ym9hcmREaXJlY3Rpb24ubWQpIG1peGluICh3aGljaCBtYXBzIGtleWJvYXJkIGV2ZW50c1xuICAgKiB0byBkaXJlY3Rpb25zKSBhbmQgYSBtaXhpbiB0aGF0IGhhbmRsZXMgc2VsZWN0aW9uIGxpa2VcbiAgICogW1NpbmdsZVNlbGVjdGlvbl0oU2luZ2xlU2VsZWN0aW9uLm1kKS5cbiAgICovXG4gIGNsYXNzIERpcmVjdGlvblNlbGVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgW3N5bWJvbHMuZ29Eb3duXSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmdvRG93bl0pIHsgc3VwZXJbc3ltYm9scy5nb0Rvd25dKCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdE5leHQoKTtcbiAgICB9XG5cbiAgICBbc3ltYm9scy5nb0VuZF0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5nb0VuZF0pIHsgc3VwZXJbc3ltYm9scy5nb0VuZF0oKTsgfVxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0TGFzdCgpO1xuICAgIH1cblxuICAgIFtzeW1ib2xzLmdvTGVmdF0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5nb0xlZnRdKSB7IHN1cGVyW3N5bWJvbHMuZ29MZWZ0XSgpOyB9XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RQcmV2aW91cygpO1xuICAgIH1cblxuICAgIFtzeW1ib2xzLmdvUmlnaHRdKCkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuZ29SaWdodF0pIHsgc3VwZXJbc3ltYm9scy5nb1JpZ2h0XSgpOyB9XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3ROZXh0KCk7XG4gICAgfVxuXG4gICAgW3N5bWJvbHMuZ29TdGFydF0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5nb1N0YXJ0XSkgeyBzdXBlcltzeW1ib2xzLmdvU3RhcnRdKCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdEZpcnN0KCk7XG4gICAgfVxuXG4gICAgW3N5bWJvbHMuZ29VcF0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5nb1VwXSkgeyBzdXBlcltzeW1ib2xzLmdvVXBdKCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdFByZXZpb3VzKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbi4gVGhpcyB3aWxsIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICBnZXQgc2VsZWN0ZWRGcmFjdGlvbigpIHtcbiAgICAgIHJldHVybiBzdXBlci5zZWxlY3RlZEZyYWN0aW9uO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRGcmFjdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCdzZWxlY3RlZEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEZyYWN0aW9uID0gdmFsdWU7IH1cbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLiBUaGlzIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgIHNlbGVjdEZpcnN0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdEZpcnN0KSB7IHJldHVybiBzdXBlci5zZWxlY3RGaXJzdCgpOyB9XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbi4gVGhpcyB3aWxsIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICBzZWxlY3RMYXN0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdExhc3QpIHsgcmV0dXJuIHN1cGVyLnNlbGVjdExhc3QoKTsgfVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb24uIFRoaXMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgc2VsZWN0TmV4dCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3ROZXh0KSB7IHJldHVybiBzdXBlci5zZWxlY3ROZXh0KCk7IH1cbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLiBUaGlzIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgIHNlbGVjdFByZXZpb3VzKCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdFByZXZpb3VzKSB7IHJldHVybiBzdXBlci5zZWxlY3RQcmV2aW91cygpOyB9XG4gICAgfVxuXG4gICAgLy8gTWFwIGRyYWcgdHJhdmVsIGZyYWN0aW9uIHRvIHNlbGVjdGlvbiBmcmFjdGlvbi5cbiAgICBnZXQgdHJhdmVsRnJhY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc3VwZXIudHJhdmVsRnJhY3Rpb247XG4gICAgfVxuICAgIHNldCB0cmF2ZWxGcmFjdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCd0cmF2ZWxGcmFjdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIudHJhdmVsRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgICAgdGhpcy5zZWxlY3RlZEZyYWN0aW9uID0gdmFsdWU7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gRGlyZWN0aW9uU2VsZWN0aW9uO1xufTtcbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggRGlzdHJpYnV0ZWRDaGlsZHJlbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIGRlZmluZXMgaGVscGVycyBmb3IgYWNjZXNzaW5nIGEgY29tcG9uZW50J3MgZGlzdHJpYnV0ZWRcbiAgICogY2hpbGRyZW4gYXMgYSBmbGF0dGVuZWQgYXJyYXkgb3Igc3RyaW5nLlxuICAgKlxuICAgKiBUaGUgc3RhbmRhcmQgRE9NIEFQSSBwcm92aWRlcyBzZXZlcmFsIHdheXMgb2YgYWNjZXNzaW5nIGNoaWxkIGNvbnRlbnQ6XG4gICAqIGBjaGlsZHJlbmAsIGBjaGlsZE5vZGVzYCwgYW5kIGB0ZXh0Q29udGVudGAuIE5vbmUgb2YgdGhlc2UgZnVuY3Rpb25zIGFyZVxuICAgKiBTaGFkb3cgRE9NIGF3YXJlLiBUaGlzIG1peGluIGRlZmluZXMgdmFyaWF0aW9ucyBvZiB0aG9zZSBmdW5jdGlvbnMgdGhhdFxuICAgKiAqYXJlKiBTaGFkb3cgRE9NIGF3YXJlLlxuICAgKlxuICAgKiBFeGFtcGxlOiB5b3UgY3JlYXRlIGEgY29tcG9uZW50IGA8Y291bnQtY2hpbGRyZW4+YCB0aGF0IGRpc3BsYXlzIGEgbnVtYmVyXG4gICAqIGVxdWFsIHRvIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gcGxhY2VkIGluc2lkZSB0aGF0IGNvbXBvbmVudC4gSWYgc29tZW9uZVxuICAgKiBpbnN0YW50aWF0ZXMgeW91ciBjb21wb25lbnQgbGlrZTpcbiAgICpcbiAgICogICAgIDxjb3VudC1jaGlsZHJlbj5cbiAgICogICAgICAgPGRpdj48L2Rpdj5cbiAgICogICAgICAgPGRpdj48L2Rpdj5cbiAgICogICAgICAgPGRpdj48L2Rpdj5cbiAgICogICAgIDwvY291bnQtY2hpbGRyZW4+XG4gICAqXG4gICAqIFRoZW4gdGhlIGNvbXBvbmVudCBzaG91bGQgc2hvdyBcIjNcIiwgYmVjYXVzZSB0aGVyZSBhcmUgdGhyZWUgY2hpbGRyZW4uIFRvXG4gICAqIGNhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuLCB0aGUgY29tcG9uZW50IGNhbiBqdXN0IGNhbGN1bGF0ZVxuICAgKiBgdGhpcy5jaGlsZHJlbi5sZW5ndGhgLiBIb3dldmVyLCBzdXBwb3NlIHNvbWVvbmUgaW5zdGFudGlhdGVzIHlvdXJcbiAgICogY29tcG9uZW50IGluc2lkZSBvbmUgb2YgdGhlaXIgb3duIGNvbXBvbmVudHMsIGFuZCBwdXRzIGEgYDxzbG90PmAgZWxlbWVudFxuICAgKiBpbnNpZGUgeW91ciBjb21wb25lbnQ6XG4gICAqXG4gICAqICAgICA8Y291bnQtY2hpbGRyZW4+XG4gICAqICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICogICAgIDwvY291bnQtY2hpbGRyZW4+XG4gICAqXG4gICAqIElmIHlvdXIgY29tcG9uZW50IG9ubHkgbG9va3MgYXQgYHRoaXMuY2hpbGRyZW5gLCBpdCB3aWxsIGFsd2F5cyBzZWUgZXhhY3RseVxuICAgKiBvbmUgY2hpbGQg4oCUwqB0aGUgYDxzbG90PmAgZWxlbWVudC4gQnV0IHRoZSB1c2VyIGxvb2tpbmcgYXQgdGhlIHBhZ2Ugd2lsbFxuICAgKiAqc2VlKiBhbnkgbm9kZXMgZGlzdHJpYnV0ZWQgdG8gdGhhdCBzbG90LiBUbyBtYXRjaCB3aGF0IHRoZSB1c2VyIHNlZXMsIHlvdXJcbiAgICogY29tcG9uZW50IHNob3VsZCBleHBhbmQgYW55IGA8c2xvdD5gIGVsZW1lbnRzIGl0IGNvbnRhaW5zLlxuICAgKlxuICAgKiBUaGF0IGlzIHRoZSBwcm9ibGVtIHRoaXMgbWl4aW4gc29sdmVzLiBBZnRlciBhcHBseWluZyB0aGlzIG1peGluLCB5b3VyXG4gICAqIGNvbXBvbmVudCBjb2RlIGhhcyBhY2Nlc3MgdG8gYHRoaXMuZGlzdHJpYnV0ZWRDaGlsZHJlbmAsIHdob3NlIGBsZW5ndGhgXG4gICAqIHdpbGwgcmV0dXJuIHRoZSB0b3RhbCBudW1iZXIgb2YgYWxsIGNoaWxkcmVuIGRpc3RyaWJ1dGVkIHRvIHlvdXIgY29tcG9uZW50XG4gICAqIGluIHRoZSBjb21wb3NlZCB0cmVlLlxuICAgKlxuICAgKiBOb3RlOiBUaGUgbGF0ZXN0IEN1c3RvbSBFbGVtZW50cyBBUEkgZGVzaWduIGNhbGxzIGZvciBhIG5ldyBmdW5jdGlvbixcbiAgICogYGdldEFzc2lnbmVkTm9kZXNgIHRoYXQgdGFrZXMgYW4gb3B0aW9uYWwgYGRlZXBgIHBhcmFtZXRlciwgdGhhdCB3aWxsIHNvbHZlXG4gICAqIHRoaXMgcHJvYmxlbSBhdCB0aGUgQVBJIGxldmVsLlxuICAgKi9cbiAgY2xhc3MgRGlzdHJpYnV0ZWRDaGlsZHJlbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogQW4gaW4tb3JkZXIgY29sbGVjdGlvbiBvZiBkaXN0cmlidXRlZCBjaGlsZHJlbiwgZXhwYW5kaW5nIGFueSBzbG90XG4gICAgICogZWxlbWVudHMuIExpa2UgdGhlIHN0YW5kYXJkIGNoaWxkcmVuIHByb3BlcnR5LCB0aGlzIHNraXBzIHRleHQgbm9kZXMuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX1cbiAgICAgKi9cbiAgICBnZXQgZGlzdHJpYnV0ZWRDaGlsZHJlbigpIHtcbiAgICAgIHJldHVybiBleHBhbmRDb250ZW50RWxlbWVudHModGhpcy5jaGlsZHJlbiwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIGluLW9yZGVyIGNvbGxlY3Rpb24gb2YgZGlzdHJpYnV0ZWQgY2hpbGQgbm9kZXMsIGV4cGFuZGluZyBhbnkgc2xvdFxuICAgICAqIGVsZW1lbnRzLiBMaWtlIHRoZSBzdGFuZGFyZCBjaGlsZE5vZGVzIHByb3BlcnR5LCB0aGlzIGluY2x1ZGVzIHRleHRcbiAgICAgKiBub2Rlcy5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtOb2RlW119XG4gICAgICovXG4gICAgZ2V0IGRpc3RyaWJ1dGVkQ2hpbGROb2RlcygpIHtcbiAgICAgIHJldHVybiBleHBhbmRDb250ZW50RWxlbWVudHModGhpcy5jaGlsZE5vZGVzLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29uY2F0ZW5hdGVkIHRleHQgY29udGVudCBvZiBhbGwgZGlzdHJpYnV0ZWQgY2hpbGQgbm9kZXMsIGV4cGFuZGluZ1xuICAgICAqIGFueSBzbG90IGVsZW1lbnRzLlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXQgZGlzdHJpYnV0ZWRUZXh0Q29udGVudCgpIHtcbiAgICAgIGNvbnN0IHN0cmluZ3MgPSB0aGlzLmRpc3RyaWJ1dGVkQ2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkLnRleHRDb250ZW50O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gc3RyaW5ncy5qb2luKCcnKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBEaXN0cmlidXRlZENoaWxkcmVuO1xufTtcblxuXG4vKlxuICogR2l2ZW4gYSBhcnJheSBvZiBub2RlcywgcmV0dXJuIGEgbmV3IGFycmF5IHdpdGggYW55IGNvbnRlbnQgZWxlbWVudHMgZXhwYW5kZWRcbiAqIHRvIHRoZSBub2RlcyBkaXN0cmlidXRlZCB0byB0aGF0IGNvbnRlbnQgZWxlbWVudC4gVGhpcyBydWxlIGlzIGFwcGxpZWRcbiAqIHJlY3Vyc2l2ZWx5LlxuICpcbiAqIElmIGluY2x1ZGVUZXh0Tm9kZXMgaXMgdHJ1ZSwgdGV4dCBub2RlcyB3aWxsIGJlIGluY2x1ZGVkLCBhcyBpbiB0aGVcbiAqIHN0YW5kYXJkIGNoaWxkTm9kZXMgcHJvcGVydHk7IGJ5IGRlZmF1bHQsIHRoaXMgc2tpcHMgdGV4dCBub2RlcywgbGlrZSB0aGVcbiAqIHN0YW5kYXJkIGNoaWxkcmVuIHByb3BlcnR5LlxuICovXG5mdW5jdGlvbiBleHBhbmRDb250ZW50RWxlbWVudHMobm9kZXMsIGluY2x1ZGVUZXh0Tm9kZXMpIHtcbiAgY29uc3QgZXhwYW5kZWQgPSBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwobm9kZXMsIG5vZGUgPT4ge1xuICAgIC8vIFdlIHdhbnQgdG8gc2VlIGlmIHRoZSBub2RlIGlzIGFuIGluc3RhbmNlb2YgSFRNTFNsb3RFTGVtZW50LCBidXRcbiAgICAvLyB0aGF0IGNsYXNzIHdvbid0IGV4aXN0IGlmIHRoZSBicm93c2VyIHRoYXQgZG9lc24ndCBzdXBwb3J0IG5hdGl2ZVxuICAgIC8vIFNoYWRvdyBET00gYW5kIGlmIHRoZSBTaGFkb3cgRE9NIHBvbHlmaWxsIGhhc24ndCBiZWVuIGxvYWRlZC4gSW5zdGVhZCxcbiAgICAvLyB3ZSBkbyBhIHNpbXBsaXN0aWMgY2hlY2sgdG8gc2VlIGlmIHRoZSB0YWcgbmFtZSBpcyBcInNsb3RcIi5cbiAgICBjb25zdCBpc1Nsb3QgPSB0eXBlb2YgSFRNTFNsb3RFbGVtZW50ICE9PSAndW5kZWZpbmVkJyA/XG4gICAgICBub2RlIGluc3RhbmNlb2YgSFRNTFNsb3RFbGVtZW50IDpcbiAgICAgIG5vZGUubG9jYWxOYW1lID09PSAnc2xvdCc7XG4gICAgaWYgKGlzU2xvdCkge1xuICAgICAgLy8gVXNlIHRoZSBub2RlcyBhc3NpZ25lZCB0byB0aGlzIG5vZGUgaW5zdGVhZC5cbiAgICAgIGNvbnN0IGFzc2lnbmVkTm9kZXMgPSBub2RlLmFzc2lnbmVkTm9kZXMoeyBmbGF0dGVuOiB0cnVlIH0pO1xuICAgICAgcmV0dXJuIGFzc2lnbmVkTm9kZXMgP1xuICAgICAgICBleHBhbmRDb250ZW50RWxlbWVudHMoYXNzaWduZWROb2RlcywgaW5jbHVkZVRleHROb2RlcykgOlxuICAgICAgICBbXTtcbiAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgLy8gUGxhaW4gZWxlbWVudDsgdXNlIGFzIGlzLlxuICAgICAgcmV0dXJuIFtub2RlXTtcbiAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBUZXh0ICYmIGluY2x1ZGVUZXh0Tm9kZXMpIHtcbiAgICAgIC8vIFRleHQgbm9kZS5cbiAgICAgIHJldHVybiBbbm9kZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENvbW1lbnQsIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb24sIGV0Yy47IHNraXAuXG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9KTtcbiAgY29uc3QgZmxhdHRlbmVkID0gW10uY29uY2F0KC4uLmV4cGFuZGVkKTtcbiAgcmV0dXJuIGZsYXR0ZW5lZDtcbn1cbiIsImltcG9ydCBtaWNyb3Rhc2sgZnJvbSAnLi9taWNyb3Rhc2snO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudC4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIGRlZmluZXMgYSBjb21wb25lbnQncyBjb250ZW50IGFzIGl0cyBjaGlsZHJlbiwgZXhwYW5kaW5nIGFueVxuICAgKiBub2RlcyBkaXN0cmlidXRlZCB0byB0aGUgY29tcG9uZW50J3Mgc2xvdHMuXG4gICAqXG4gICAqIFRoaXMgYWxzbyBwcm92aWRlcyBub3RpZmljYXRpb24gb2YgY2hhbmdlcyB0byBhIGNvbXBvbmVudCdzIGNvbnRlbnQuIEl0XG4gICAqIHdpbGwgaW52b2tlIGEgYGNvbnRlbnRDaGFuZ2VkYCBtZXRob2Qgd2hlbiB0aGUgY29tcG9uZW50IGlzIGZpcnN0XG4gICAqIGluc3RhbnRpYXRlZCwgYW5kIHdoZW5ldmVyIGl0cyBkaXN0cmlidXRlZCBjaGlsZHJlbiBjaGFuZ2UuIFRoaXMgaXMgYW5cbiAgICogZWFzeSB3YXkgdG8gc2F0aXNmeSB0aGUgR29sZCBTdGFuZGFyZCBjaGVja2xpc3QgaXRlbSBmb3IgbW9uaXRvcmluZ1xuICAgKiBbQ29udGVudCBDaGFuZ2VzXShodHRwczovL2dpdGh1Yi5jb20vd2ViY29tcG9uZW50cy9nb2xkLXN0YW5kYXJkL3dpa2kvQ29udGVudC1DaGFuZ2VzKS5cbiAgICpcbiAgICogRXhhbXBsZTpcbiAgICpcbiAgICogYGBgXG4gICAqIGxldCBiYXNlID0gRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudChEaXN0cmlidXRlZENoaWxkcmVuKEhUTUxFbGVtZW50KSk7XG4gICAqIGNsYXNzIENvdW50aW5nRWxlbWVudCBleHRlbmRzIGJhc2Uge1xuICAgKlxuICAgKiAgIGNvbnN0cnVjdG9yKCkge1xuICAgKiAgICAgc3VwZXIoKTtcbiAgICogICAgIGxldCByb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAqICAgICByb290LmlubmVySFRNTCA9IGA8c2xvdD48L3Nsb3Q+YDtcbiAgICogICB9XG4gICAqXG4gICAqICAgY29udGVudENoYW5nZWQoKSB7XG4gICAqICAgICAvLyBDb3VudCB0aGUgY29tcG9uZW50J3MgY2hpbGRyZW4sIGJvdGggaW5pdGlhbGx5IGFuZCB3aGVuIGNoYW5nZWQuXG4gICAqICAgICB0aGlzLmNvdW50ID0gdGhpcy5kaXN0cmlidXRlZENoaWxkcmVuLmxlbmd0aDtcbiAgICogICB9XG4gICAqXG4gICAqIH1cbiAgICogYGBgXG4gICAqXG4gICAqIE5vdGUgdGhhdCBjb250ZW50IGNoYW5nZSBkZXRlY3Rpb24gZGVwZW5kcyB1cG9uIHRoZSBlbGVtZW50IGhhdmluZyBhdCBsZWFzdFxuICAgKiBvbmUgYHNsb3RgIGVsZW1lbnQgaW4gaXRzIHNoYWRvdyBzdWJ0cmVlLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGlzIGludGVuZGVkIGZvciB1c2Ugd2l0aCB0aGVcbiAgICogW0Rpc3RyaWJ1dGVkQ2hpbGRyZW5dKERpc3RyaWJ1dGVkQ2hpbGRyZW4ubWQpIG1peGluLiBTZWUgdGhhdCBtaXhpbiBmb3IgYVxuICAgKiBkaXNjdXNzaW9uIG9mIGhvdyB0aGF0IHdvcmtzLiBUaGlzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQgbWl4aW5cbiAgICogcHJvdmlkZXMgYW4gZWFzeSB3YXkgb2YgZGVmaW5pbmcgdGhlIFwiY29udGVudFwiIG9mIGEgY29tcG9uZW50IGFzIHRoZVxuICAgKiBjb21wb25lbnQncyBkaXN0cmlidXRlZCBjaGlsZHJlbi4gVGhhdCBpbiB0dXJuIGxldHMgbWl4aW5zIGxpa2VcbiAgICogW0NvbnRlbnRBc0l0ZW1zXShDb250ZW50QXNJdGVtcy5tZCkgbWFuaXB1bGF0ZSB0aGUgY2hpbGRyZW4gYXMgbGlzdCBpdGVtcy5cbiAgICovXG4gIGNsYXNzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcblxuICAgICAgaWYgKHRoaXMuc2hhZG93Um9vdCkge1xuICAgICAgICAvLyBMaXN0ZW4gdG8gY2hhbmdlcyBvbiBhbGwgc2xvdHMuXG4gICAgICAgIGNvbnN0IHNsb3RzID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Nsb3QnKTtcbiAgICAgICAgc2xvdHMuZm9yRWFjaChzbG90ID0+IHNsb3QuYWRkRXZlbnRMaXN0ZW5lcignc2xvdGNoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICB0aGlzLmNvbnRlbnRDaGFuZ2VkKCk7XG4gICAgICAgIH0pKTtcbiAgICAgIH1cblxuICAgICAgLy8gTWFrZSBhbiBpbml0aWFsIGNhbGwgdG8gY29udGVudENoYW5nZWQoKSBzbyB0aGF0IHRoZSBjb21wb25lbnQgY2FuIGRvXG4gICAgICAvLyBpbml0aWFsaXphdGlvbiB0aGF0IGl0IG5vcm1hbGx5IGRvZXMgd2hlbiBjb250ZW50IGNoYW5nZXMuXG4gICAgICAvL1xuICAgICAgLy8gVGhpcyB3aWxsIGludm9rZSBjb250ZW50Q2hhbmdlZCgpIGhhbmRsZXJzIGluIG90aGVyIG1peGlucy4gSW4gb3JkZXJcbiAgICAgIC8vIHRoYXQgdGhvc2UgbWl4aW5zIGhhdmUgYSBjaGFuY2UgdG8gY29tcGxldGUgdGhlaXIgb3duIGluaXRpYWxpemF0aW9uLFxuICAgICAgLy8gd2UgYWRkIHRoZSBjb250ZW50Q2hhbmdlZCgpIGNhbGwgdG8gdGhlIG1pY3JvdGFzayBxdWV1ZS5cbiAgICAgIG1pY3JvdGFzaygoKSA9PiB0aGlzLmNvbnRlbnRDaGFuZ2VkKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgY29udGVudHMgb2YgdGhlIGNvbXBvbmVudCAoaW5jbHVkaW5nIGRpc3RyaWJ1dGVkXG4gICAgICogY2hpbGRyZW4pIGhhdmUgY2hhbmdlZC5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGFsc28gaW52b2tlZCB3aGVuIGEgY29tcG9uZW50IGlzIGZpcnN0IGluc3RhbnRpYXRlZDsgdGhlXG4gICAgICogY29udGVudHMgaGF2ZSBlc3NlbnRpYWxseSBcImNoYW5nZWRcIiBmcm9tIGJlaW5nIG5vdGhpbmcuIFRoaXMgYWxsb3dzIHRoZVxuICAgICAqIGNvbXBvbmVudCB0byBwZXJmb3JtIGluaXRpYWwgcHJvY2Vzc2luZyBvZiBpdHMgY2hpbGRyZW4uXG4gICAgICovXG4gICAgY29udGVudENoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuY29udGVudENoYW5nZWQpIHsgc3VwZXIuY29udGVudENoYW5nZWQoKTsgfVxuICAgICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2NvbnRlbnQtY2hhbmdlZCcpO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29udGVudCBvZiB0aGlzIGNvbXBvbmVudCwgZGVmaW5lZCB0byBiZSB0aGUgZmxhdHRlbmVkIGFycmF5IG9mXG4gICAgICogY2hpbGRyZW4gZGlzdHJpYnV0ZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIGdldCBjb250ZW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGlzdHJpYnV0ZWRDaGlsZHJlbjtcbiAgICB9XG4gICAgc2V0IGNvbnRlbnQodmFsdWUpIHtcbiAgICAgIGlmICgnY29udGVudCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuY29udGVudCA9IHZhbHVlOyB9XG4gICAgICAvLyBUT0RPOiBTZXQgdGhlIGNoaWxkcmVuIHRvIHRoZSBnaXZlbiB2YWx1ZSAod2hpY2ggc2hvdWxkIGJlIGFuIGFycmF5IG9mXG4gICAgICAvLyBlbGVtZW50cyk/XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBpcyByYWlzZWQgd2hlbiB0aGUgY29tcG9uZW50J3MgY29udGVudHMgKGluY2x1ZGluZyBkaXN0cmlidXRlZFxuICAgICAqIGNoaWxkcmVuKSBoYXZlIGNoYW5nZWQuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudFxuICAgICAqIEBldmVudCBjb250ZW50LWNoYW5nZWRcbiAgICAgKi9cbiAgfVxuXG4gIHJldHVybiBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50O1xufTtcbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBzZWxlY3RlZEZyYWN0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3RlZEZyYWN0aW9uJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBGcmFjdGlvbmFsU2VsZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl4aW4oYmFzZSkge1xuXG4gIC8qKlxuICAgKiBBZGRzIHN1cHBvcnQgZm9yIGZyYWN0aW9uYWwgc2VsZWN0aW9uOiB0cmVhdGluZyBhIHNlbGVjdGlvbiBhcyBhIHJlYWxcbiAgICogbnVtYmVyIHRoYXQgY29tYmluZXMgYW4gaW50ZWdlciBwb3J0aW9uIChhbiBpbmRleCBpbnRvIGEgbGlzdCksIGFuZCBhXG4gICAqIGZyYWN0aW9uIChpbmRpY2F0aW5nIGhvdyBmYXIgb2YgdGhlIHdheSB3ZSBhcmUgdG8gdGhlIG5leHQgb3IgcHJldmlvdXNcbiAgICogaXRlbSkuXG4gICAqXG4gICAqIFRoaXMgaXMgdXNlZnVsIGluIGNvbXBvbmVudHMgdGhhdCBzdXBwb3J0IGluY3JlbWVudGFsIG9wZXJhdGlvbnMgZHVyaW5nXG4gICAqIGRyYWdnaW5nIGFuZCBzd2lwaW5nLiBFeGFtcGxlOiBhIGNhcm91c2VsIGNvbXBvbmVudCBoYXMgc2V2ZXJhbCBpdGVtcywgYW5kIHRoZVxuICAgKiBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbSBpcyBpdGVtIDMuIFRoZSB1c2VyIGJlZ2lucyBzd2lwaW5nIHRvIHRoZSBsZWZ0LFxuICAgKiBtb3ZpbmcgdG93YXJkcyBzZWxlY3RpbmcgaXRlbSA0LiBIYWxmd2F5IHRocm91Z2ggdGhpcyBvcGVyYXRpb24sIHRoZVxuICAgKiBmcmFjdGlvbmFsIHNlbGVjdGlvbiB2YWx1ZSBpcyAzLjUuXG4gICAqXG4gICAqIFRoaXMgdmFsdWUgcGVybWl0cyBjb21tdW5pY2F0aW9uIGJldHdlZW4gbWl4aW5zIGxpa2VcbiAgICogW1N3aXBlRGlyZWN0aW9uXSguL1N3aXBlRGlyZWN0aW9uLm1kKSBhbmRcbiAgICogW1RyYWNrcGFkRGlyZWN0aW9uXSguL1RyYWNrcGFkRGlyZWN0aW9uLm1kKSwgd2hpY2ggZ2VuZXJhdGUgZnJhY3Rpb25hbFxuICAgKiBzZWxlY3Rpb24gdmFsdWVzLCBhbmQgbWl4aW5zIGxpa2VcbiAgICogW1NlbGVjdGlvbkFuaW1hdGlvbl0oLi9TZWxlY3Rpb25BbmltYXRpb24ubWQpLCB3aGljaCBjYW4gcmVuZGVyIHNlbGVjdGlvblxuICAgKiBhdCBhIGZyYWN0aW9uYWwgdmFsdWUuXG4gICAqL1xuICBjbGFzcyBGcmFjdGlvbmFsU2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG4gICAgICB0aGlzLnNlbGVjdGVkRnJhY3Rpb24gPSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgZnJhY3Rpb25hbCB2YWx1ZSBpbmRpY2F0aW5nIGhvdyBmYXIgdGhlIHVzZXIgaGFzIGN1cnJlbnRseSBhZHZhbmNlZCB0b1xuICAgICAqIHRoZSBuZXh0L3ByZXZpb3VzIGl0ZW0uIEUuZy4sIGEgYHNlbGVjdGVkRnJhY3Rpb25gIG9mIDMuNSBpbmRpY2F0ZXMgdGhlXG4gICAgICogdXNlciBpcyBoYWxmd2F5IGJldHdlZW4gaXRlbXMgMyBhbmQgNC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGVkRnJhY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpc1tzZWxlY3RlZEZyYWN0aW9uU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkRnJhY3Rpb24odmFsdWUpIHtcbiAgICAgIHRoaXNbc2VsZWN0ZWRGcmFjdGlvblN5bWJvbF0gPSB2YWx1ZTtcbiAgICAgIGlmICgnc2VsZWN0ZWRGcmFjdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnc2VsZWN0ZWQtZnJhY3Rpb24tY2hhbmdlZCcpO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBGcmFjdGlvbmFsU2VsZWN0aW9uO1xufVxuXG5cbm1peGluLmhlbHBlcnMgPSB7XG5cbiAgLypcbiAgICogRGFtcGVuIGEgc2VsZWN0aW9uIHRoYXQgZ29lcyBwYXN0IHRoZSBiZWdpbm5pbmcgb3IgZW5kIG9mIGEgbGlzdC4gVGhpcyBpc1xuICAgKiBnZW5lcmFsbHkgdXNlZCB0byBwcm9kdWNlIGEgdmlzdWFsIGVmZmVjdCBvZiB0ZW5zaW9uIGFzIHRoZSB1c2VyIHRyaWVzIHRvXG4gICAqIGdvIGZ1cnRoZXIgaW4gYSBkaXJlY3Rpb24gdGhhdCBoYXMgbm8gbW9yZSBpdGVtcy5cbiAgICpcbiAgICogRXhhbXBsZTogc3VwcG9zZSBgaXRlbUNvdW50YCBpcyA1LCBpbmRpY2F0aW5nIGEgbGlzdCBvZiA1IGl0ZW1zLiBUaGUgaW5kZXggb2ZcbiAgICogdGhlIGxhc3QgaXRlbSBpcyA0LiBJZiB0aGUgYHNlbGVjdGlvbmAgcGFyYW1ldGVyIGlzIDQuNSwgdGhlIHVzZXIgaXMgdHJ5aW5nXG4gICAqIHRvIGdvIHBhc3QgdGhpcyBsYXN0IGl0ZW0uIFdoZW4gYSBkYW1waW5nIGZ1bmN0aW9uIGlzIGFwcGxpZWQsIHRoZSByZXN1bHRpbmdcbiAgICogdmFsdWUgd2lsbCBiZSBsZXNzIHRoYW4gNC41ICh0aGUgYWN0dWFsIHZhbHVlIHdpbGwgYmUgNC4yNSkuIFdoZW4gdGhpc1xuICAgKiBzZWxlY3Rpb24gc3RhdGUgaXMgcmVuZGVyZWQsIHRoZSB1c2VyIHdpbGwgc2VlIHRoYXQsIGVhY2ggdW5pdCBkaXN0YW5jZSB0aGVcbiAgICogZHJhZyB0cmF2ZWxzIGhhcyBsZXNzIGFuZCBsZXNzIHZpc2libGUgZWZmZWN0LiBUaGlzIGlzIHBlcmNlaXZlZCBhcyB0ZW5zaW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2VsZWN0aW9uIC0gQSByZWFsIG51bWJlciBpbmRpY2F0aW5nIGEgc2VsZWN0aW9uIHBvc2l0aW9uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpdGVtQ291bnQgLSBBbiBpbnRlZ2VyIGZvciB0aGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBsaXN0XG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IEEgcmVhbCBudW1iZXIgcmVwcmVzZW50aW5nIHRoZSBkYW1wZWQgc2VsZWN0aW9uIHZhbHVlLlxuICAgKi9cbiAgZGFtcGVkU2VsZWN0aW9uKHNlbGVjdGlvbiwgaXRlbUNvdW50KSB7XG4gICAgY29uc3QgYm91bmQgPSBpdGVtQ291bnQgLSAxO1xuICAgIGxldCBkYW1wZWQ7XG4gICAgaWYgKHNlbGVjdGlvbiA8IDApIHtcbiAgICAgIC8vIFRyeWluZyB0byBnbyBwYXN0IGJlZ2lubmluZyBvZiBsaXN0LiBBcHBseSB0ZW5zaW9uIGZyb20gdGhlIGxlZnQgZWRnZS5cbiAgICAgIGRhbXBlZCA9IC1taXhpbi5oZWxwZXJzLmRhbXBpbmcoLXNlbGVjdGlvbik7XG4gICAgfSBlbHNlIGlmIChzZWxlY3Rpb24gPj0gYm91bmQpIHtcbiAgICAgIC8vIFRyeWluZyB0byBnbyBwYXN0IGVuZCBvZiBsaXN0LiBBcHBseSB0ZW5zaW9uIGZyb20gdGhlIHJpZ2h0IGVkZ2UuXG4gICAgICBkYW1wZWQgPSBib3VuZCArIG1peGluLmhlbHBlcnMuZGFtcGluZyhzZWxlY3Rpb24gLSBib3VuZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5vIGRhbXBpbmcgcmVxdWlyZWQuXG4gICAgICBkYW1wZWQgPSBzZWxlY3Rpb247XG4gICAgfVxuICAgIHJldHVybiBkYW1wZWQ7XG4gIH0sXG5cbiAgLypcbiAgICogQ2FsY3VsYXRlIGRhbXBpbmcgYXMgYSBmdW5jdGlvbiBvZiB0aGUgZGlzdGFuY2UgcGFzdCB0aGUgbWluaW11bS9tYXhpbXVtXG4gICAqIHZhbHVlcy5cbiAgICpcbiAgICogV2Ugd2FudCB0byBhc3ltcHRvdGljYWxseSBhcHByb2FjaCBhbiBhYnNvbHV0ZSBtaW5pbXVtIG9mIDEgdW5pdFxuICAgKiBiZWxvdy9hYm92ZSB0aGUgYWN0dWFsIG1pbmltdW0vbWF4aW11bS4gVGhpcyByZXF1aXJlcyBjYWxjdWxhdGluZyBhXG4gICAqIGh5cGVyYm9saWMgZnVuY3Rpb24uXG4gICAqXG4gICAqIFNlZSBodHRwOi8vd3d3LndvbGZyYW1hbHBoYS5jb20vaW5wdXQvP2k9eSslM0QrLTElMkYlMjh4JTJCMSUyOSslMkIrMVxuICAgKiBmb3IgdGhlIG9uZSB3ZSB1c2UuIFRoZSBvbmx5IHBvcnRpb24gb2YgdGhhdCBmdW5jdGlvbiB3ZSBjYXJlIGFib3V0IGlzIHdoZW5cbiAgICogeCBpcyB6ZXJvIG9yIGdyZWF0ZXIuIEFuIGltcG9ydGFudCBjb25zaWRlcmF0aW9uIGlzIHRoYXQgdGhlIGN1cnZlIGJlXG4gICAqIHRhbmdlbnQgdG8gdGhlIGRpYWdvbmFsIGxpbmUgeD15IGF0ICgwLCAwKS4gVGhpcyBlbnN1cmVzIHNtb290aCBjb250aW51aXR5XG4gICAqIHdpdGggdGhlIG5vcm1hbCBkcmFnIGJlaGF2aW9yLCBpbiB3aGljaCB0aGUgdmlzaWJsZSBzbGlkaW5nIGlzIGxpbmVhciB3aXRoXG4gICAqIHRoZSBkaXN0YW5jZSB0aGUgdG91Y2hwb2ludCBoYXMgYmVlbiBkcmFnZ2VkLlxuICAgKi9cbiAgZGFtcGluZyh4KSB7XG4gICAgY29uc3QgeSA9ICgtMSAvICh4ICsgMSkpICsgMTtcbiAgICByZXR1cm4geTtcbiAgfSxcblxuICAvKlxuICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgZnJhY3Rpb25hbCBzZWxlY3Rpb24gdmFsdWUgZm9yIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKlxuICAgKiBUaGlzIHNpbXBseSBhZGRzIHRoZSBlbGVtZW50J3MgYHNlbGVjdGVkSW5kZXhgIGFuZCBgc2VsZWN0ZWRGcmFjdGlvbmBcbiAgICogcHJvcGVydGllcy5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIEFuIGVsZW1lbnQgdGhhdCBzdXBwb3J0cyBzZWxlY3Rpb25cbiAgICovXG4gIGVsZW1lbnRTZWxlY3Rpb24oZWxlbWVudCkge1xuICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSBlbGVtZW50LnNlbGVjdGVkSW5kZXg7XG4gICAgaWYgKHNlbGVjdGVkSW5kZXggPCAwKSB7XG4gICAgICAvLyBObyBzZWxlY3Rpb25cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2VsZWN0ZWRGcmFjdGlvbiA9IGVsZW1lbnQuc2VsZWN0ZWRGcmFjdGlvbiB8fCAwO1xuICAgIHJldHVybiBzZWxlY3RlZEluZGV4ICsgc2VsZWN0ZWRGcmFjdGlvbjtcbiAgfSxcblxuICAvKlxuICAgKiBCcmVha3MgYSBmcmFjdGlvbmFsIHNlbGVjdGlvbiBpbnRvIGl0cyBpbnRlZ2VyIGFuZCBmcmFjdGlvbmFsIHBhcnRzLlxuICAgKlxuICAgKiBFeGFtcGxlOiBpZiBwYXNzZWQgMy41LCB0aGlzIHJldHVybnMgeyBpbmRleDogMywgZnJhY3Rpb246IDUgfS5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNlbGVjdGlvbiDigJPCoEEgcmVhbCBudW1iZXIgcmVwcmVzZW50aW5nIGEgc2VsZWN0aW9uIHBvaW50XG4gICAqIEByZXR1cm5zIHtvYmplY3R9IC0gQW4gb2JqZWN0IHdpdGggYW4gYGluZGV4YCBwcm9wZXJ0eSBob2xkaW5nIHRoZVxuICAgKiBzZWxlY3Rpb24ncyBpbnRlZ2VyIGNvbXBvbmVudCwgYW5kIGEgYGZyYWN0aW9uYCBwcm9wZXJ0eSBob2xkaW5nIHRoZVxuICAgKiBzZWxlY3Rpb24ncyBmcmFjdGlvbmFsIGNvbXBvbmVudC5cbiAgICovXG4gIHNlbGVjdGlvblBhcnRzKHNlbGVjdGlvbikge1xuICAgIC8vIFN0dXBpZCBJRSBkb2Vzbid0IGhhdmUgTWF0aC50cnVuYy5cbiAgICAvLyBjb25zdCBpbmRleCA9IE1hdGgudHJ1bmMoc2VsZWN0aW9uKTtcbiAgICBjb25zdCBpbmRleCA9IHNlbGVjdGlvbiA8IDAgPyBNYXRoLmNlaWwoc2VsZWN0aW9uKSA6IE1hdGguZmxvb3Ioc2VsZWN0aW9uKTtcbiAgICBjb25zdCBmcmFjdGlvbiA9IHNlbGVjdGlvbiAtIGluZGV4O1xuICAgIHJldHVybiB7IGluZGV4LCBmcmFjdGlvbiB9O1xuICB9LFxuXG4gIC8qXG4gICAqIFJldHVybnMgYSBmcmFjdGlvbmFsIHNlbGVjdGlvbiBwb2ludCBhZnRlciBhY2NvdW50aW5nIGZvciB3cmFwcGluZywgZW5zdXJpbmdcbiAgICogdGhhdCB0aGUgaW50ZWdlciBwb3J0aW9uIG9mIHRoZSBzZWxlY3Rpb24gc3RheXMgYmV0d2VlbiAwIGFuZCBgaXRlbUNvdW50YC0xLlxuICAgKiBUaGF0IGlzLCB0aGUgaW50ZWdlciBwb3J0aW9uIHdpbGwgYWx3YXlzIGJlIGEgdmFsaWQgaW5kZXggaW50byB0aGUgbGlzdC5cbiAgICpcbiAgICogRXhhbXBsZSBvZiB3cmFwcGluZyBwYXN0IHRoZSBlbmQgb2YgdGhlIGxpc3Q6IGlmIGBzZWxlY3Rpb25gIGlzIDUuNSBhbmRcbiAgICogYGl0ZW1Db3VudGAgaXMgNSwgdGhpcyByZXR1cm5zIDAuNS4gRXhhbXBsZSBvZiB3cmFwcGluZyBwYXN0IHRoZSBiZWdpbm5pbmcgb2ZcbiAgICogdGhlIGxpc3Q6IGlmIGBzZWxlY3Rpb25gIGlzIDAuNSBhbmQgYGl0ZW1Db3VudGAgaXMgNSwgdGhpcyByZXR1cm5zIDQuNS5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNlbGVjdGlvbiAtIEEgcmVhbCBudW1iZXIgcmVwcmVzZW50aW5nIGEgc2VsZWN0aW9uIHBvaW50XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpdGVtQ291bnQgLSBUaGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBsaXN0XG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IC0gVGhlIHJlc3VsdCBvZiB3cmFwcGluZyB0aGUgc2VsZWN0aW9uIHBvaW50XG4gICAqL1xuICB3cmFwcGVkU2VsZWN0aW9uKHNlbGVjdGlvbiwgaXRlbUNvdW50KSB7XG4gICAgLy8gSGFuZGxlcyBwb3NzaWJpbGl0eSBvZiBuZWdhdGl2ZSBtb2QuXG4gICAgLy8gU2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE4NjE4MjUwLzc2NDcyXG4gICAgcmV0dXJuICgoc2VsZWN0aW9uICUgaXRlbUNvdW50KSArIGl0ZW1Db3VudCkgJSBpdGVtQ291bnQ7XG4gIH0sXG5cbiAgLypcbiAgICogUmV0dXJuIHRoZSBwYXJ0cyBvZiBhIHNlbGVjdGlvbiwgZmlyc3Qgd3JhcHBpbmcgaWYgbmVjZXNzYXJ5LlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2VsZWN0aW9uIOKAkyBBIHJlYWwgbnVtYmVyIHJlcHJlc2VudGluZyBhIHNlbGVjdGlvbiBwb2ludFxuICAgKiBAcGFyYW0ge251bWJlcn0gaXRlbUNvdW50IC0gVGhlIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgbGlzdFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHdyYXAg4oCTIFRydWUgaWYgdGhlIHNlbGVjdGlvbiBzaG91bGQgd3JhcCB0byBzdGF5IHdpdGhpbiB0aGVcbiAgICogbGlzdFxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSDigJMgVGhlIHBhcnRzIG9mIHRoZSBzZWxlY3Rpb24sIHVzaW5nIHRoZSBzYW1lIGZvcm1hdCBhc1xuICAgKiBgc2VsZWN0aW9uUGFydHNgLlxuICAgKi9cbiAgd3JhcHBlZFNlbGVjdGlvblBhcnRzKHNlbGVjdGlvbiwgaXRlbUNvdW50LCB3cmFwKSB7XG4gICAgaWYgKHdyYXApIHtcbiAgICAgIHNlbGVjdGlvbiA9IG1peGluLmhlbHBlcnMud3JhcHBlZFNlbGVjdGlvbihzZWxlY3Rpb24sIGl0ZW1Db3VudCk7XG4gICAgfVxuICAgIHJldHVybiBtaXhpbi5oZWxwZXJzLnNlbGVjdGlvblBhcnRzKHNlbGVjdGlvbik7XG4gIH1cblxufTtcbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IHNhZmVBdHRyaWJ1dGVzIGZyb20gJy4vc2FmZUF0dHJpYnV0ZXMnO1xuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi9zeW1ib2xzJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgZ2VuZXJpY1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnZ2VuZXJpYycpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggR2VuZXJpYy4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIGFsbG93cyBhIGNvbXBvbmVudCB0byBzdXBwb3J0IGEgXCJnZW5lcmljXCIgc3R5bGU6IGEgbWluaW1hbGlzdFxuICAgKiBzdHlsZSB0aGF0IGNhbiBlYXNpbHkgYmUgcmVtb3ZlZCB0byByZXNldCBpdHMgdmlzdWFsIGFwcGVhcmFuY2UgdG8gYVxuICAgKiBiYXNlbGluZSBzdGF0ZS5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgYSBjb21wb25lbnQgc2hvdWxkIHByb3ZpZGUgYSBtaW5pbWFsIHZpc3VhbCBwcmVzZW50YXRpb24gdGhhdFxuICAgKiBhbGxvd3MgdGhlIGNvbXBvbmVudCB0byBmdW5jdGlvbi4gSG93ZXZlciwgdGhlIG1vcmUgc3R5bGluZyB0aGUgY29tcG9uZW50XG4gICAqIHByb3ZpZGVzIGJ5IGRlZmF1bHQsIHRoZSBoYXJkZXIgaXQgYmVjb21lcyB0byBnZXQgdGhlIGNvbXBvbmVudCB0byBmaXQgaW5cbiAgICogaW4gb3RoZXIgc2V0dGluZ3MuIEVhY2ggQ1NTIHJ1bGUgaGFzIHRvIGJlIG92ZXJyaWRkZW4uIFdvcnNlLCBuZXcgQ1NTIHJ1bGVzXG4gICAqIGFkZGVkIHRvIHRoZSBkZWZhdWx0IHN0eWxlIHdvbid0IGJlIG92ZXJyaWRkZW4gYnkgZGVmYXVsdCwgbWFraW5nIGl0IGhhcmRcbiAgICogdG8ga25vdyB3aGV0aGVyIGEgbmV3IHZlcnNpb24gb2YgYSBjb21wb25lbnQgd2lsbCBzdGlsbCBsb29rIG9rYXkuXG4gICAqXG4gICAqIEFzIGEgY29tcHJvbWlzZSwgdGhlIG1peGluIGRlZmluZXMgYSBgZ2VuZXJpY2AgYXR0cmlidXRlLiBUaGlzIGF0dHJpYnV0ZSBpc1xuICAgKiBub3JtYWxseSBzZXQgYnkgZGVmYXVsdCwgYW5kIHN0eWxlcyBjYW4gYmUgd3JpdHRlbiB0aGF0IGFwcGx5IG9ubHkgd2hlbiB0aGVcbiAgICogZ2VuZXJpYyBhdHRyaWJ1dGUgaXMgc2V0LiBUaGlzIGFsbG93cyB0aGUgY29uc3RydWN0aW9uIG9mIENTUyBydWxlcyB0aGF0XG4gICAqIHdpbGwgb25seSBhcHBseSB0byBnZW5lcmljIGNvbXBvbmVudHMgbGlrZTpcbiAgICpcbiAgICogICAgIDpob3N0KFtnZW5lcmljPVwiXCJdKSB7XG4gICAqICAgICAgIC4uLiBHZW5lcmljIGFwcGVhcmFuY2UgZGVmaW5lZCBoZXJlIC4uLlxuICAgKiAgICAgfVxuICAgKlxuICAgKiBUaGlzIG1ha2VzIGl0IGVhc3kgdG8gcmVtb3ZlIGFsbCBkZWZhdWx0IHN0eWxpbmcg4oCUIHNldCB0aGUgYGdlbmVyaWNgXG4gICAqIGF0dHJpYnV0ZSB0byBmYWxzZSwgYW5kIGFsbCBkZWZhdWx0IHN0eWxpbmcgd2lsbCBiZSByZW1vdmVkLlxuICAgKi9cbiAgY2xhc3MgR2VuZXJpYyBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgLy8gU2V0IGRlZmF1bHRzLlxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmdlbmVyaWMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuZ2VuZXJpYyA9IHRoaXNbc3ltYm9scy5kZWZhdWx0c10uZ2VuZXJpYztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGlzIG1peGluIGRvZXNuJ3QgYWN0dWFsbHkgcmVzcG9uZCB0byBhdHRyaWJ1dGUgY2hhbmdlcywgYnV0IHJlbGllc1xuICAgIC8vIG9uIHNlcGFyYXRlbHktZGVmaW5lZCBiZWhhdmlvciAoZS5nLiwgaW4gQXR0cmlidXRlTWFyc2hhbGxpbmcpIGZvciB0aGF0LlxuICAgIC8vIFN0aWxsLCB3ZSBuZWVkIGRlZmluZSBhIGJhc2VsaW5lIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayB0aGF0IGRvZXNcbiAgICAvLyBub3RoaW5nLCBpbiBjYXNlIHRoaXMgbWl4aW4gZ2V0cyB1c2VkIG9uIGl0cyBvd24uXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgICAgaWYgKHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaykgeyBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTsgfVxuICAgIH1cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKSB7IHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7IH1cbiAgICAgIHNhZmVBdHRyaWJ1dGVzLmNvbm5lY3RlZCh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXQgW3N5bWJvbHMuZGVmYXVsdHNdKCkge1xuICAgICAgY29uc3QgZGVmYXVsdHMgPSBzdXBlcltzeW1ib2xzLmRlZmF1bHRzXSB8fCB7fTtcbiAgICAgIGRlZmF1bHRzLmdlbmVyaWMgPSB0cnVlO1xuICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIGNvbXBvbmVudCB3b3VsZCBsaWtlIHRvIHJlY2VpdmUgZ2VuZXJpYyBzdHlsaW5nLlxuICAgICAqXG4gICAgICogVGhpcyBwcm9wZXJ0eSBpcyB0cnVlIGJ5IGRlZmF1bHQg4oCUwqBzZXQgaXQgdG8gZmFsc2UgdG8gdHVybiBvZmYgYWxsXG4gICAgICogZ2VuZXJpYyBzdHlsZXMuIFRoaXMgbWFrZXMgaXQgZWFzaWVyIHRvIGFwcGx5IGN1c3RvbSBzdHlsaW5nOyB5b3Ugd29uJ3RcbiAgICAgKiBoYXZlIHRvIGV4cGxpY2l0bHkgb3ZlcnJpZGUgc3R5bGluZyB5b3UgZG9uJ3Qgd2FudC5cbiAgICAgKlxuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICovXG4gICAgZ2V0IGdlbmVyaWMoKSB7XG4gICAgICByZXR1cm4gdGhpc1tnZW5lcmljU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IGdlbmVyaWModmFsdWUpIHtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgP1xuICAgICAgICBTdHJpbmcodmFsdWUpICE9PSAnZmFsc2UnIDpcbiAgICAgICAgdmFsdWU7XG4gICAgICB0aGlzW2dlbmVyaWNTeW1ib2xdID0gcGFyc2VkO1xuXG4gICAgICBpZiAoJ2dlbmVyaWMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmdlbmVyaWMgPSB2YWx1ZTsgfVxuXG4gICAgICAvLyBXZSByb2xsIG91ciBvd24gYXR0cmlidXRlIHNldHRpbmcgc28gdGhhdCBhbiBleHBsaWNpdGx5IGZhbHNlIHZhbHVlXG4gICAgICAvLyBzaG93cyB1cCBhcyBnZW5lcmljPVwiZmFsc2VcIi5cbiAgICAgIGlmIChwYXJzZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIC8vIEV4cGxpY2l0bHkgdXNlIGZhbHNlIHN0cmluZy5cbiAgICAgICAgc2FmZUF0dHJpYnV0ZXMuc2V0QXR0cmlidXRlKHRoaXMsICdnZW5lcmljJywgJ2ZhbHNlJyk7XG4gICAgICB9IGVsc2UgaWYgKHBhcnNlZCA9PSBudWxsKSB7XG4gICAgICAgIC8vIEV4cGxpY2l0bHkgcmVtb3ZlIGF0dHJpYnV0ZS4gKEFsd2F5cyBzYWZlIHRvIGRvIHRoaXMuKVxuICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnZ2VuZXJpYycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVXNlIHRoZSBlbXB0eSBzdHJpbmcgdG8gZ2V0IGF0dHJpYnV0ZSB0byBhcHBlYXIgd2l0aCBubyB2YWx1ZS5cbiAgICAgICAgc2FmZUF0dHJpYnV0ZXMuc2V0QXR0cmlidXRlKHRoaXMsICdnZW5lcmljJywgJycpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIEdlbmVyaWM7XG59O1xuXG5cbiIsImltcG9ydCBDb2xsZWN0aXZlIGZyb20gJy4vQ29sbGVjdGl2ZSc7XG5pbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcbmltcG9ydCBzYWZlQXR0cmlidXRlcyBmcm9tICcuL3NhZmVBdHRyaWJ1dGVzJztcbmltcG9ydCBzeW1ib2xzIGZyb20gJy4vc3ltYm9scyc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IGtleWRvd25MaXN0ZW5lclN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgna2V5ZG93bkxpc3RlbmVyJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBLZXlib2FyZC4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hbmFnZXMgdGhlIGtleWRvd24gaGFuZGxpbmcgZm9yIGEgY29tcG9uZW50LlxuICAgKlxuICAgKiBUaGlzIG1peGluIGhhbmRsZXMgc2V2ZXJhbCBrZXlib2FyZC1yZWxhdGVkIGZlYXR1cmVzLlxuICAgKlxuICAgKiBGaXJzdCwgaXQgd2lyZXMgdXAgYSBzaW5nbGUga2V5ZG93biBldmVudCBoYW5kbGVyIHRoYXQgY2FuIGJlIHNoYXJlZCBieVxuICAgKiBtdWx0aXBsZSBtaXhpbnMgb24gYSBjb21wb25lbnQuIFRoZSBldmVudCBoYW5kbGVyIHdpbGwgaW52b2tlIGEgYGtleWRvd25gXG4gICAqIG1ldGhvZCB3aXRoIHRoZSBldmVudCBvYmplY3QsIGFuZCBhbnkgbWl4aW4gYWxvbmcgdGhlIHByb3RvdHlwZSBjaGFpbiB0aGF0XG4gICAqIHdhbnRzIHRvIGhhbmRsZSB0aGF0IG1ldGhvZCBjYW4gZG8gc28uXG4gICAqXG4gICAqIElmIGEgbWl4aW4gd2FudHMgdG8gaW5kaWNhdGUgdGhhdCBrZXlib2FyZCBldmVudCBoYXMgYmVlbiBoYW5kbGVkLCBhbmQgdGhhdFxuICAgKiBvdGhlciBtaXhpbnMgc2hvdWxkICpub3QqIGhhbmRsZSBpdCwgdGhlIG1peGluJ3MgYGtleWRvd25gIGhhbmRsZXIgc2hvdWxkXG4gICAqIHJldHVybiBhIHZhbHVlIG9mIHRydWUuIFRoZSBjb252ZW50aW9uIHRoYXQgc2VlbXMgdG8gd29yayB3ZWxsIGlzIHRoYXQgYVxuICAgKiBtaXhpbiBzaG91bGQgc2VlIGlmIGl0IHdhbnRzIHRvIGhhbmRsZSB0aGUgZXZlbnQgYW5kLCBpZiBub3QsIHRoZW4gYXNrIHRoZVxuICAgKiBzdXBlcmNsYXNzIHRvIHNlZSBpZiBpdCB3YW50cyB0byBoYW5kbGUgdGhlIGV2ZW50LiBUaGlzIGhhcyB0aGUgZWZmZWN0IG9mXG4gICAqIGdpdmluZyB0aGUgbWl4aW4gdGhhdCB3YXMgYXBwbGllZCBsYXN0IHRoZSBmaXJzdCBjaGFuY2UgYXQgaGFuZGxpbmcgYVxuICAgKiBrZXlib2FyZCBldmVudC5cbiAgICpcbiAgICogRXhhbXBsZTpcbiAgICpcbiAgICogICAgIFtzeW1ib2xzLmtleWRvd25dKGV2ZW50KSB7XG4gICAqICAgICAgIGxldCBoYW5kbGVkO1xuICAgKiAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICogICAgICAgICAvLyBIYW5kbGUgdGhlIGtleXMgeW91IHdhbnQsIHNldHRpbmcgaGFuZGxlZCA9IHRydWUgaWYgYXBwcm9wcmlhdGUuXG4gICAqICAgICAgIH1cbiAgICogICAgICAgLy8gUHJlZmVyIG1peGluIHJlc3VsdCBpZiBpdCdzIGRlZmluZWQsIG90aGVyd2lzZSB1c2UgYmFzZSByZXN1bHQuXG4gICAqICAgICAgIHJldHVybiBoYW5kbGVkIHx8IChzdXBlcltzeW1ib2xzLmtleWRvd25dICYmIHN1cGVyW3N5bWJvbHMua2V5ZG93bl0oZXZlbnQpKTtcbiAgICogICAgIH1cbiAgICpcbiAgICogQSBzZWNvbmQgZmVhdHVyZSBwcm92aWRlZCBieSB0aGlzIG1peGluIGlzIHRoYXQgaXQgaW1wbGljaXRseSBtYWtlcyB0aGVcbiAgICogY29tcG9uZW50IGEgdGFiIHN0b3AgaWYgaXQgaXNuJ3QgYWxyZWFkeSwgYnkgc2V0dGluZyBgdGFiSW5kZXhgIHRvIDAuIFRoaXNcbiAgICogaGFzIHRoZSBlZmZlY3Qgb2YgYWRkaW5nIHRoZSBjb21wb25lbnQgdG8gdGhlIHRhYiBvcmRlciBpbiBkb2N1bWVudCBvcmRlci5cbiAgICpcbiAgICogRmluYWxseSwgdGhpcyBtaXhpbiBpcyBkZXNpZ25lZCB0byB3b3JrIHdpdGggdGhlIG9wdGlvbmFsXG4gICAqIFtDb2xsZWN0aXZlXShDb2xsZWN0aXZlLm1kKSBjbGFzcyB2aWEgYSBtaXhpbiBsaWtlXG4gICAqIFtUYXJnZXRJbkNvbGxlY3RpdmVdKFRhcmdldEluQ29sbGVjdGl2ZS5tZCkuIFRoaXMgYWxsb3dzIGEgc2V0IG9mIHJlbGF0ZWRcbiAgICogY29tcG9uZW50IGluc3RhbmNlcyB0byBjb29wZXJhdGl2ZWx5IGhhbmRsZSB0aGUga2V5Ym9hcmQuIFNlZSB0aGVcbiAgICogQ29sbGVjdGl2ZSBjbGFzcyBmb3IgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzIEtleWJvYXJkIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICAvLyBBc3N1bWUgdGhpcyBjb21wb25lbnQgaXMgZ29pbmcgdG8gaGFuZGxlIHRoZSBrZXlib2FyZCBvbiBpdHMgb3duLlxuICAgICAgc3RhcnRMaXN0ZW5pbmdUb0tleWRvd24odGhpcyk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBJZiB3ZSdyZSBub3cgdGhlIG91dGVybW9zdCBlbGVtZW50IG9mIHRoZSBjb2xsZWN0aXZlLCBzZXQgdXAgdG8gcmVjZWl2ZVxuICAgICAqIGtleWJvYXJkIGV2ZW50cy4gSWYgd2UncmUgbm8gbG9uZ2VyIHRoZSBvdXRlcm1vc3QgZWxlbWVudCwgc3RvcFxuICAgICAqIGxpc3RlbmluZy5cbiAgICAgKi9cbiAgICBjb2xsZWN0aXZlQ2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5jb2xsZWN0aXZlQ2hhbmdlZCkgeyBzdXBlci5jb2xsZWN0aXZlQ2hhbmdlZCgpOyB9XG5cbiAgICAgIGlmICh0aGlzLmNvbGxlY3RpdmUub3V0ZXJtb3N0RWxlbWVudCAhPT0gdGhpcykge1xuICAgICAgICAvLyBXZSdyZSBubyBsb25nZXIgdGhlIG91dGVybW9zdCBlbGVtZW50OyBzdG9wIGxpc3RlbmluZy5cbiAgICAgICAgaWYgKGlzTGlzdGVuaW5nVG9LZXlkb3duKHRoaXMpKSB7XG4gICAgICAgICAgc3RvcExpc3RlbmluZ1RvS2V5ZG93bih0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNMaXN0ZW5pbmdUb0tleWRvd24odGhpcykpIHtcbiAgICAgICAgc3RhcnRMaXN0ZW5pbmdUb0tleWRvd24odGhpcyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgIENvbGxlY3RpdmUucHJvbW90ZUF0dHJpYnV0ZSh0aGlzLCAndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgICBDb2xsZWN0aXZlLnByb21vdGVBdHRyaWJ1dGUodGhpcywgJ2FyaWEtbGFiZWwnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG4gICAgICBzYWZlQXR0cmlidXRlcy5jb25uZWN0ZWQodGhpcyk7XG4gICAgICAvLyBTZXQgYSBkZWZhdWx0IHRhYiBpbmRleCBvZiAwIChkb2N1bWVudCBvcmRlcikgaWYgbm8gdGFiIGluZGV4IGV4aXN0cy5cbiAgICAgIENvbGxlY3RpdmUucHJvbW90ZUF0dHJpYnV0ZSh0aGlzLCAndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgQ29sbGVjdGl2ZS5wcm9tb3RlQXR0cmlidXRlKHRoaXMsICdhcmlhLWxhYmVsJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHRoZSBpbmRpY2F0ZWQga2V5Ym9hcmQgZXZlbnQuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuIFRoaXMgd2lsbFxuICAgICAqIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnQgLSB0aGUga2V5Ym9hcmQgZXZlbnRcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBldmVudCB3YXMgaGFuZGxlZFxuICAgICAqL1xuICAgIFtzeW1ib2xzLmtleWRvd25dKGV2ZW50KSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5rZXlkb3duXSkgeyByZXR1cm4gc3VwZXJbc3ltYm9scy5rZXlkb3duXShldmVudCk7IH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBLZXlib2FyZDtcbn07XG5cblxuLy8gRmlyZSB0aGUga2V5ZG93bigpIG1ldGhvZCBvbiB0aGUgZWxlbWVudCBvciAoaWYgaXQgYmVsb25ncyB0byBhIGNvbGxlY3RpdmUpXG4vLyBhbGwgZWxlbWVudHMgaW4gdGhlIGNvbGxlY3RpdmUuXG4vL1xuLy8gTm90ZTogdGhlIHZhbHVlIG9mICd0aGlzJyBpcyBib3VuZCB0byB0aGUgZWxlbWVudCB3aGljaCByZWNlaXZlZCB0aGUgZXZlbnQuXG5mdW5jdGlvbiBrZXlkb3duKGV2ZW50KSB7XG5cbiAgbGV0IGhhbmRsZWQgPSBmYWxzZTtcblxuICBpZiAodGhpcy5jb2xsZWN0aXZlKSB7XG4gICAgLy8gR2l2ZSBjb2xsZWN0aXZlIGVsZW1lbnRzIGEgc2hvdCBhdCB0aGUgZXZlbnQsIHdvcmtpbmcgZnJvbSBpbm5lcm1vc3QgdG9cbiAgICAvLyBvdXRlcm1vc3QgKHRoaXMgZWxlbWVudCkuXG4gICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLmNvbGxlY3RpdmUuZWxlbWVudHM7XG4gICAgZm9yIChsZXQgaSA9IGVsZW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudHNbaV07XG4gICAgICBoYW5kbGVkID0gZWxlbWVudFtzeW1ib2xzLmtleWRvd25dICYmIGVsZW1lbnRbc3ltYm9scy5rZXlkb3duXShldmVudCk7XG4gICAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gQ29tcG9uZW50IGlzIGhhbmRsaW5nIHRoZSBrZXlib2FyZCBvbiBpdHMgb3duLlxuICAgIGhhbmRsZWQgPSB0aGlzW3N5bWJvbHMua2V5ZG93bl0oZXZlbnQpO1xuICB9XG5cbiAgaWYgKGhhbmRsZWQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG5cblxuZnVuY3Rpb24gaXNMaXN0ZW5pbmdUb0tleWRvd24oZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudFtrZXlkb3duTGlzdGVuZXJTeW1ib2xdICE9IG51bGw7XG59XG5cblxuZnVuY3Rpb24gc3RhcnRMaXN0ZW5pbmdUb0tleWRvd24oZWxlbWVudCkge1xuICBlbGVtZW50W2tleWRvd25MaXN0ZW5lclN5bWJvbF0gPSBrZXlkb3duLmJpbmQoZWxlbWVudCk7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGVsZW1lbnRba2V5ZG93bkxpc3RlbmVyU3ltYm9sXSk7XG59XG5cblxuZnVuY3Rpb24gc3RvcExpc3RlbmluZ1RvS2V5ZG93bihlbGVtZW50KSB7XG4gIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGVsZW1lbnRba2V5ZG93bkxpc3RlbmVyU3ltYm9sXSk7XG4gIGVsZW1lbnRba2V5ZG93bkxpc3RlbmVyU3ltYm9sXSA9IG51bGw7XG59XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcbmltcG9ydCBzeW1ib2xzIGZyb20gJy4vc3ltYm9scyc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IG5hdmlnYXRpb25BeGlzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCduYXZpZ2F0aW9uQXhpcycpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggS2V5Ym9hcmREaXJlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYXBzIGRpcmVjdGlvbiBrZXlzIChMZWZ0LCBSaWdodCwgZXRjLikgdG8gZGlyZWN0aW9uIHNlbWFudGljc1xuICAgKiAoZ28gbGVmdCwgZ28gcmlnaHQsIGV0Yy4pLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgdGhlIGNvbXBvbmVudCB0byBpbnZva2UgYSBga2V5ZG93bmAgbWV0aG9kIHdoZW4gYSBrZXkgaXNcbiAgICogcHJlc3NlZC4gWW91IGNhbiB1c2UgdGhlIFtLZXlib2FyZF0oS2V5Ym9hcmQubWQpIG1peGluIGZvciB0aGF0IHB1cnBvc2UsIG9yXG4gICAqIHdpcmUgdXAgeW91ciBvd24ga2V5Ym9hcmQgaGFuZGxpbmcgYW5kIGNhbGwgYGtleWRvd25gIHlvdXJzZWxmLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGNhbGxzIG1ldGhvZHMgc3VjaCBhcyBgZ29MZWZ0YCBhbmQgYGdvUmlnaHRgLiBZb3UgY2FuIGRlZmluZVxuICAgKiB3aGF0IHRoYXQgbWVhbnMgYnkgaW1wbGVtZW50aW5nIHRob3NlIG1ldGhvZHMgeW91cnNlbGYuIElmIHlvdSB3YW50IHRvIHVzZVxuICAgKiBkaXJlY3Rpb24ga2V5cyB0byBuYXZpZ2F0ZSBhIHNlbGVjdGlvbiwgdXNlIHRoaXMgbWl4aW4gd2l0aCB0aGVcbiAgICogW0RpcmVjdGlvblNlbGVjdGlvbl0oRGlyZWN0aW9uU2VsZWN0aW9uLm1kKSBtaXhpbi5cbiAgICovXG4gIGNsYXNzIEtleWJvYXJkRGlyZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICAvLyBTZXQgZGVmYXVsdHMuXG4gICAgICBpZiAodHlwZW9mIHRoaXMubmF2aWdhdGlvbkF4aXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMubmF2aWdhdGlvbkF4aXMgPSB0aGlzW3N5bWJvbHMuZGVmYXVsdHNdLm5hdmlnYXRpb25BeGlzO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdldCBbc3ltYm9scy5kZWZhdWx0c10oKSB7XG4gICAgICBjb25zdCBkZWZhdWx0cyA9IHN1cGVyW3N5bWJvbHMuZGVmYXVsdHNdIHx8IHt9O1xuICAgICAgZGVmYXVsdHMubmF2aWdhdGlvbkF4aXMgPSAnYm90aCc7XG4gICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIGRvd24uXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIFtzeW1ib2xzLmdvRG93bl0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5nb0Rvd25dKSB7IHJldHVybiBzdXBlcltzeW1ib2xzLmdvRG93bl0oKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSB0byB0aGUgZW5kIChlLmcuLCBvZiBhIGxpc3QpLlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBbc3ltYm9scy5nb0VuZF0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5nb0VuZF0pIHsgcmV0dXJuIHN1cGVyW3N5bWJvbHMuZ29FbmRdKCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgbGVmdC5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgW3N5bWJvbHMuZ29MZWZ0XSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmdvTGVmdF0pIHsgcmV0dXJuIHN1cGVyW3N5bWJvbHMuZ29MZWZ0XSgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHJpZ2h0LlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBbc3ltYm9scy5nb1JpZ2h0XSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmdvUmlnaHRdKSB7IHJldHVybiBzdXBlcltzeW1ib2xzLmdvUmlnaHRdKCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgdG8gdGhlIHN0YXJ0IChlLmcuLCBvZiBhXG4gICAgICogbGlzdCkuIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBbc3ltYm9scy5nb1N0YXJ0XSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmdvU3RhcnRdKSB7IHJldHVybiBzdXBlcltzeW1ib2xzLmdvU3RhcnRdKCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgdXAuXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIFtzeW1ib2xzLmdvVXBdKCkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuZ29VcF0pIHsgcmV0dXJuIHN1cGVyW3N5bWJvbHMuZ29VcF0oKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB0aGUgZGlyZWN0aW9uIG9mIHBlcm1pdHRlZCBuYXZpZ2F0aW9uIHdpdGggdGhlIGtleWJvYXJkLlxuICAgICAqXG4gICAgICogQWNjZXB0ZWQgdmFsdWVzIGFyZSBcImhvcml6b250YWxcIiwgXCJ2ZXJ0aWNhbFwiLCBvciBcImJvdGhcIiAodGhlIGRlZmF1bHQpLlxuICAgICAqIElmIHRoaXMgcHJvcGVydHkgaXMgXCJob3Jpem9udGFsXCIsIHRoZSBVcCBBcnJvdyBhbmQgRG93biBBcnJvdyBrZXlzIHdpbGxcbiAgICAgKiBiZSBpZ25vcmVkLiBDb252ZXJzZWx5LCBpZiB0aGlzIGlzIFwidmVydGljYWxcIiwgdGhlIExlZnQgQXJyb3cgYW5kIFJpZ2h0XG4gICAgICogQXJyb3cga2V5cyB3aWxsIGJlIGlnbm9yZWQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldCBuYXZpZ2F0aW9uQXhpcygpIHtcbiAgICAgIHJldHVybiB0aGlzW25hdmlnYXRpb25BeGlzU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IG5hdmlnYXRpb25BeGlzKHZhbHVlKSB7XG4gICAgICB0aGlzW25hdmlnYXRpb25BeGlzU3ltYm9sXSA9IHZhbHVlO1xuICAgICAgaWYgKCduYXZpZ2F0aW9uQXhpcycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIubmF2aWdhdGlvbkF4aXMgPSB2YWx1ZTsgfVxuICAgIH1cblxuICAgIFtzeW1ib2xzLmtleWRvd25dKGV2ZW50KSB7XG4gICAgICBsZXQgaGFuZGxlZDtcblxuICAgICAgY29uc3QgYXhpcyA9IHRoaXMubmF2aWdhdGlvbkF4aXM7XG4gICAgICBjb25zdCBob3Jpem9udGFsID0gKGF4aXMgPT09ICdob3Jpem9udGFsJyB8fCBheGlzID09PSAnYm90aCcpO1xuICAgICAgY29uc3QgdmVydGljYWwgPSAoYXhpcyA9PT0gJ3ZlcnRpY2FsJyB8fCBheGlzID09PSAnYm90aCcpO1xuXG4gICAgICAvLyBJZ25vcmUgTGVmdC9SaWdodCBrZXlzIHdoZW4gbWV0YUtleSBvciBhbHRLZXkgbW9kaWZpZXIgaXMgYWxzbyBwcmVzc2VkLFxuICAgICAgLy8gYXMgdGhlIHVzZXIgbWF5IGJlIHRyeWluZyB0byBuYXZpZ2F0ZSBiYWNrIG9yIGZvcndhcmQgaW4gdGhlIGJyb3dzZXIuXG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSAzNTogLy8gRW5kXG4gICAgICAgICAgaGFuZGxlZCA9IHRoaXNbc3ltYm9scy5nb0VuZF0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNjogLy8gSG9tZVxuICAgICAgICAgIGhhbmRsZWQgPSB0aGlzW3N5bWJvbHMuZ29TdGFydF0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNzogLy8gTGVmdFxuICAgICAgICAgIGlmIChob3Jpem9udGFsICYmICFldmVudC5tZXRhS2V5ICYmICFldmVudC5hbHRLZXkpIHtcbiAgICAgICAgICAgIGhhbmRsZWQgPSB0aGlzW3N5bWJvbHMuZ29MZWZ0XSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzODogLy8gVXBcbiAgICAgICAgICBpZiAodmVydGljYWwpIHtcbiAgICAgICAgICAgIGhhbmRsZWQgPSBldmVudC5hbHRLZXkgPyB0aGlzW3N5bWJvbHMuZ29TdGFydF0oKSA6IHRoaXNbc3ltYm9scy5nb1VwXSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOTogLy8gUmlnaHRcbiAgICAgICAgICBpZiAoaG9yaXpvbnRhbCAmJiAhZXZlbnQubWV0YUtleSAmJiAhZXZlbnQuYWx0S2V5KSB7XG4gICAgICAgICAgICBoYW5kbGVkID0gdGhpc1tzeW1ib2xzLmdvUmlnaHRdKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQwOiAvLyBEb3duXG4gICAgICAgICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICAgICAgICBoYW5kbGVkID0gZXZlbnQuYWx0S2V5ID8gdGhpc1tzeW1ib2xzLmdvRW5kXSgpIDogdGhpc1tzeW1ib2xzLmdvRG93bl0oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICAvLyBQcmVmZXIgbWl4aW4gcmVzdWx0IGlmIGl0J3MgZGVmaW5lZCwgb3RoZXJ3aXNlIHVzZSBiYXNlIHJlc3VsdC5cbiAgICAgIHJldHVybiBoYW5kbGVkIHx8IChzdXBlcltzeW1ib2xzLmtleWRvd25dICYmIHN1cGVyW3N5bWJvbHMua2V5ZG93bl0oZXZlbnQpKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBLZXlib2FyZERpcmVjdGlvbjtcbn07XG4iLCJpbXBvcnQgc3ltYm9scyBmcm9tICcuL3N5bWJvbHMnO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggS2V5Ym9hcmRQYWdlZFNlbGVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgcGFnZSBrZXlzIChQYWdlIFVwLCBQYWdlIERvd24pIGludG8gb3BlcmF0aW9ucyB0aGF0IG1vdmVcbiAgICogdGhlIHNlbGVjdGlvbiBieSBvbmUgcGFnZS5cbiAgICpcbiAgICogVGhlIGtleWJvYXJkIGludGVyYWN0aW9uIG1vZGVsIGdlbmVyYWxseSBmb2xsb3dzIHRoYXQgb2YgTWljcm9zb2Z0IFdpbmRvd3MnXG4gICAqIGxpc3QgYm94ZXMgaW5zdGVhZCBvZiB0aG9zZSBpbiBPUyBYOlxuICAgKlxuICAgKiAqIFRoZSBQYWdlIFVwL0Rvd24gYW5kIEhvbWUvRW5kIGtleXMgYWN0dWFsbHkgY2hhbmdlIHRoZSBzZWxlY3Rpb24sIHJhdGhlclxuICAgKiAgIHRoYW4ganVzdCBzY3JvbGxpbmcuIFRoZSBmb3JtZXIgYmVoYXZpb3Igc2VlbXMgbW9yZSBnZW5lcmFsbHkgdXNlZnVsIGZvclxuICAgKiAgIGtleWJvYXJkIHVzZXJzLlxuICAgKlxuICAgKiAqIFByZXNzaW5nIFBhZ2UgVXAvRG93biB3aWxsIGNoYW5nZSB0aGUgc2VsZWN0aW9uIHRvIHRoZSB0b3Btb3N0L2JvdHRvbW1vc3RcbiAgICogICB2aXNpYmxlIGl0ZW0gaWYgdGhlIHNlbGVjdGlvbiBpcyBub3QgYWxyZWFkeSB0aGVyZS4gVGhlcmVhZnRlciwgdGhlIGtleVxuICAgKiAgIHdpbGwgbW92ZSB0aGUgc2VsZWN0aW9uIHVwL2Rvd24gYnkgYSBwYWdlLCBhbmQgKHBlciB0aGUgYWJvdmUgcG9pbnQpIG1ha2VcbiAgICogICB0aGUgc2VsZWN0ZWQgaXRlbSB2aXNpYmxlLlxuICAgKlxuICAgKiBUbyBlbnN1cmUgdGhlIHNlbGVjdGVkIGl0ZW0gaXMgaW4gdmlldyBmb2xsb3dpbmcgdXNlIG9mIFBhZ2UgVXAvRG93biwgdXNlXG4gICAqIHRoZSByZWxhdGVkIFtTZWxlY3Rpb25JblZpZXddKFNlbGVjdGlvbkluVmlldy5tZCkgbWl4aW4uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyB0aGUgY29tcG9uZW50IHRvIGludm9rZSBhIGBrZXlkb3duYCBtZXRob2Qgd2hlbiBhIGtleSBpc1xuICAgKiBwcmVzc2VkLiBZb3UgY2FuIHVzZSB0aGUgW0tleWJvYXJkXShLZXlib2FyZC5tZCkgbWl4aW4gZm9yIHRoYXQgcHVycG9zZSwgb3JcbiAgICogd2lyZSB1cCB5b3VyIG93biBrZXlib2FyZCBoYW5kbGluZyBhbmQgY2FsbCBga2V5ZG93bmAgeW91cnNlbGYuXG4gICAqL1xuICBjbGFzcyBLZXlib2FyZFBhZ2VkU2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBbc3ltYm9scy5rZXlkb3duXShldmVudCkge1xuICAgICAgbGV0IGhhbmRsZWQ7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSAzMzogLy8gUGFnZSBVcFxuICAgICAgICAgIGhhbmRsZWQgPSB0aGlzLnBhZ2VVcCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM0OiAvLyBQYWdlIERvd25cbiAgICAgICAgICBoYW5kbGVkID0gdGhpcy5wYWdlRG93bigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgLy8gUHJlZmVyIG1peGluIHJlc3VsdCBpZiBpdCdzIGRlZmluZWQsIG90aGVyd2lzZSB1c2UgYmFzZSByZXN1bHQuXG4gICAgICByZXR1cm4gaGFuZGxlZCB8fCAoc3VwZXJbc3ltYm9scy5rZXlkb3duXSAmJiBzdXBlcltzeW1ib2xzLmtleWRvd25dKGV2ZW50KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xsIGRvd24gb25lIHBhZ2UuXG4gICAgICovXG4gICAgcGFnZURvd24oKSB7XG4gICAgICBpZiAoc3VwZXIucGFnZURvd24pIHsgc3VwZXIucGFnZURvd24oKTsgfVxuICAgICAgcmV0dXJuIHNjcm9sbE9uZVBhZ2UodGhpcywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xsIHVwIG9uZSBwYWdlLlxuICAgICAqL1xuICAgIHBhZ2VVcCgpIHtcbiAgICAgIGlmIChzdXBlci5wYWdlVXApIHsgc3VwZXIucGFnZVVwKCk7IH1cbiAgICAgIHJldHVybiBzY3JvbGxPbmVQYWdlKHRoaXMsIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZWxlbWVudCB0aGF0IHNob3VsZCBiZSBzY3JvbGxlZCB3aXRoIHRoZSBQYWdlIFVwL0Rvd24ga2V5cy5cbiAgICAgKiBEZWZhdWx0IGlzIHRoZSBjdXJyZW50IGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgZ2V0IHNjcm9sbFRhcmdldCgpIHtcbiAgICAgIC8vIFByZWZlciBiYXNlIHJlc3VsdC5cbiAgICAgIHJldHVybiAnc2Nyb2xsVGFyZ2V0JyBpbiBiYXNlLnByb3RvdHlwZSA/IHN1cGVyLnNjcm9sbFRhcmdldCA6IHRoaXM7XG4gICAgfVxuICAgIHNldCBzY3JvbGxUYXJnZXQoZWxlbWVudCkge1xuICAgICAgaWYgKCdzY3JvbGxUYXJnZXQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNjcm9sbFRhcmdldCA9IGVsZW1lbnQ7IH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gS2V5Ym9hcmRQYWdlZFNlbGVjdGlvbjtcbn07XG5cblxuLy8gUmV0dXJuIHRoZSBpdGVtIHdob3NlIGNvbnRlbnQgc3BhbnMgdGhlIGdpdmVuIHkgcG9zaXRpb24gKHJlbGF0aXZlIHRvIHRoZVxuLy8gdG9wIG9mIHRoZSBsaXN0J3Mgc2Nyb2xsaW5nIGNsaWVudCBhcmVhKSwgb3IgbnVsbCBpZiBub3QgZm91bmQuXG4vL1xuLy8gSWYgZG93bndhcmQgaXMgdHJ1ZSwgbW92ZSBkb3duIHRoZSBsaXN0IG9mIGl0ZW1zIHRvIGZpbmQgdGhlIGZpcnN0IGl0ZW1cbi8vIGZvdW5kIGF0IHRoZSBnaXZlbiB5IHBvc2l0aW9uOyBpZiBkb3dud2FyZCBpcyBmYWxzZSwgbW92ZSB1cCB0aGUgbGlzdCBvZlxuLy8gaXRlbXMgdG8gZmluZCB0aGUgbGFzdCBpdGVtIGF0IHRoYXQgcG9zaXRpb24uXG5mdW5jdGlvbiBnZXRJbmRleE9mSXRlbUF0WShlbGVtZW50LCB5LCBkb3dud2FyZCkge1xuICBjb25zdCBpdGVtcyA9IGVsZW1lbnQuaXRlbXM7XG4gIGNvbnN0IHN0YXJ0ID0gZG93bndhcmQgPyAwIDogaXRlbXMubGVuZ3RoIC0gMTtcbiAgY29uc3QgZW5kID0gZG93bndhcmQgPyBpdGVtcy5sZW5ndGggOiAwO1xuICBjb25zdCBzdGVwID0gZG93bndhcmQgPyAxIDogLTE7XG4gIGNvbnN0IHNjcm9sbFRhcmdldCA9IGVsZW1lbnQuc2Nyb2xsVGFyZ2V0O1xuICBjb25zdCB0b3BPZkNsaWVudEFyZWEgPSBzY3JvbGxUYXJnZXQub2Zmc2V0VG9wICsgc2Nyb2xsVGFyZ2V0LmNsaWVudFRvcDtcblxuICAvLyBGaW5kIHRoZSBpdGVtIHNwYW5uaW5nIHRoZSBpbmRpY2F0ZWQgeSBjb29yZGluYXRlLlxuICBsZXQgaXRlbTtcbiAgbGV0IGl0ZW1JbmRleCA9IHN0YXJ0O1xuICBsZXQgaXRlbVRvcDtcbiAgbGV0IGZvdW5kID0gZmFsc2U7XG4gIHdoaWxlIChpdGVtSW5kZXggIT09IGVuZCkge1xuICAgIGl0ZW0gPSBpdGVtc1tpdGVtSW5kZXhdO1xuICAgIGl0ZW1Ub3AgPSBpdGVtLm9mZnNldFRvcCAtIHRvcE9mQ2xpZW50QXJlYTtcbiAgICBjb25zdCBpdGVtQm90dG9tID0gaXRlbVRvcCArIGl0ZW0ub2Zmc2V0SGVpZ2h0O1xuICAgIGlmIChpdGVtVG9wIDw9IHkgJiYgaXRlbUJvdHRvbSA+PSB5KSB7XG4gICAgICAvLyBJdGVtIHNwYW5zIHRoZSBpbmRpY2F0ZWQgeSBjb29yZGluYXRlLlxuICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGl0ZW1JbmRleCArPSBzdGVwO1xuICB9XG5cbiAgaWYgKCFmb3VuZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gV2UgbWF5IGhhdmUgZm91bmQgYW4gaXRlbSB3aG9zZSBwYWRkaW5nIHNwYW5zIHRoZSBnaXZlbiB5IGNvb3JkaW5hdGUsXG4gIC8vIGJ1dCB3aG9zZSBjb250ZW50IGlzIGFjdHVhbGx5IGFib3ZlL2JlbG93IHRoYXQgcG9pbnQuXG4gIC8vIFRPRE86IElmIHRoZSBpdGVtIGhhcyBhIGJvcmRlciwgdGhlbiBwYWRkaW5nIHNob3VsZCBiZSBpbmNsdWRlZCBpblxuICAvLyBjb25zaWRlcmluZyBhIGhpdC5cbiAgY29uc3QgaXRlbVN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShpdGVtKTtcbiAgY29uc3QgaXRlbVBhZGRpbmdUb3AgPSBwYXJzZUZsb2F0KGl0ZW1TdHlsZS5wYWRkaW5nVG9wKTtcbiAgY29uc3QgaXRlbVBhZGRpbmdCb3R0b20gPSBwYXJzZUZsb2F0KGl0ZW1TdHlsZS5wYWRkaW5nQm90dG9tKTtcbiAgY29uc3QgY29udGVudFRvcCA9IGl0ZW1Ub3AgKyBpdGVtLmNsaWVudFRvcCArIGl0ZW1QYWRkaW5nVG9wO1xuICBjb25zdCBjb250ZW50Qm90dG9tID0gY29udGVudFRvcCArIGl0ZW0uY2xpZW50SGVpZ2h0IC0gaXRlbVBhZGRpbmdUb3AgLSBpdGVtUGFkZGluZ0JvdHRvbTtcbiAgaWYgKGRvd253YXJkICYmIGNvbnRlbnRUb3AgPD0geSB8fCAhZG93bndhcmQgJiYgY29udGVudEJvdHRvbSA+PSB5KSB7XG4gICAgLy8gVGhlIGluZGljYXRlZCBjb29yZGluYXRlIGhpdHMgdGhlIGFjdHVhbCBpdGVtIGNvbnRlbnQuXG4gICAgcmV0dXJuIGl0ZW1JbmRleDtcbiAgfVxuICBlbHNlIHtcbiAgICAvLyBUaGUgaW5kaWNhdGVkIGNvb3JkaW5hdGUgZmFsbHMgd2l0aGluIHRoZSBpdGVtJ3MgcGFkZGluZy4gQmFjayB1cCB0b1xuICAgIC8vIHRoZSBpdGVtIGJlbG93L2Fib3ZlIHRoZSBpdGVtIHdlIGZvdW5kIGFuZCByZXR1cm4gdGhhdC5cbiAgICByZXR1cm4gaXRlbUluZGV4IC0gc3RlcDtcbiAgfVxufVxuXG4vLyBNb3ZlIGJ5IG9uZSBwYWdlIGRvd253YXJkIChpZiBkb3dud2FyZCBpcyB0cnVlKSwgb3IgdXB3YXJkIChpZiBmYWxzZSkuXG4vLyBSZXR1cm4gdHJ1ZSBpZiB3ZSBlbmRlZCB1cCBjaGFuZ2luZyB0aGUgc2VsZWN0aW9uLCBmYWxzZSBpZiBub3QuXG4vLyBUT0RPOiBCZXR0ZXIgc3VwcG9ydCBmb3IgaG9yaXpvbnRhbCBsaXN0cy5cbmZ1bmN0aW9uIHNjcm9sbE9uZVBhZ2UoZWxlbWVudCwgZG93bndhcmQpIHtcblxuICAvLyBEZXRlcm1pbmUgdGhlIGl0ZW0gdmlzaWJsZSBqdXN0IGF0IHRoZSBlZGdlIG9mIGRpcmVjdGlvbiB3ZSdyZSBoZWFkaW5nLlxuICAvLyBXZSdsbCBzZWxlY3QgdGhhdCBpdGVtIGlmIGl0J3Mgbm90IGFscmVhZHkgc2VsZWN0ZWQuXG4gIGNvbnN0IHNjcm9sbFRhcmdldCA9IGVsZW1lbnQuc2Nyb2xsVGFyZ2V0O1xuICBjb25zdCBlZGdlID0gc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCArIChkb3dud2FyZCA/IHNjcm9sbFRhcmdldC5jbGllbnRIZWlnaHQgOiAwKTtcbiAgY29uc3QgaW5kZXhPZkl0ZW1BdEVkZ2UgPSBnZXRJbmRleE9mSXRlbUF0WShlbGVtZW50LCBlZGdlLCBkb3dud2FyZCk7XG5cbiAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IGVsZW1lbnQuc2VsZWN0ZWRJbmRleDtcbiAgbGV0IG5ld0luZGV4O1xuICBpZiAoaW5kZXhPZkl0ZW1BdEVkZ2UgJiYgc2VsZWN0ZWRJbmRleCA9PT0gaW5kZXhPZkl0ZW1BdEVkZ2UpIHtcbiAgICAvLyBUaGUgaXRlbSBhdCB0aGUgZWRnZSB3YXMgYWxyZWFkeSBzZWxlY3RlZCwgc28gc2Nyb2xsIGluIHRoZSBpbmRpY2F0ZWRcbiAgICAvLyBkaXJlY3Rpb24gYnkgb25lIHBhZ2UuIExlYXZlIHRoZSBuZXcgaXRlbSBhdCB0aGF0IGVkZ2Ugc2VsZWN0ZWQuXG4gICAgY29uc3QgZGVsdGEgPSAoZG93bndhcmQgPyAxIDogLTEpICogc2Nyb2xsVGFyZ2V0LmNsaWVudEhlaWdodDtcbiAgICBuZXdJbmRleCA9IGdldEluZGV4T2ZJdGVtQXRZKGVsZW1lbnQsIGVkZ2UgKyBkZWx0YSwgZG93bndhcmQpO1xuICB9XG4gIGVsc2Uge1xuICAgIC8vIFRoZSBpdGVtIGF0IHRoZSBlZGdlIHdhc24ndCBzZWxlY3RlZCB5ZXQuIEluc3RlYWQgb2Ygc2Nyb2xsaW5nLCB3ZSdsbFxuICAgIC8vIGp1c3Qgc2VsZWN0IHRoYXQgaXRlbS4gVGhhdCBpcywgdGhlIGZpcnN0IGF0dGVtcHQgdG8gcGFnZSB1cC9kb3duXG4gICAgLy8gdXN1YWxseSBqdXN0IG1vdmVzIHRoZSBzZWxlY3Rpb24gdG8gdGhlIGVkZ2UgaW4gdGhhdCBkaXJlY3Rpb24uXG4gICAgbmV3SW5kZXggPSBpbmRleE9mSXRlbUF0RWRnZTtcbiAgfVxuXG4gIGlmICghbmV3SW5kZXgpIHtcbiAgICAvLyBXZSBjYW4ndCBmaW5kIGFuIGl0ZW0gaW4gdGhlIGRpcmVjdGlvbiB3ZSB3YW50IHRvIHRyYXZlbC4gU2VsZWN0IHRoZVxuICAgIC8vIGxhc3QgaXRlbSAoaWYgbW92aW5nIGRvd253YXJkKSBvciBmaXJzdCBpdGVtIChpZiBtb3ZpbmcgdXB3YXJkKS5cbiAgICBuZXdJbmRleCA9IChkb3dud2FyZCA/IGVsZW1lbnQuaXRlbXMubGVuZ3RoIC0gMSA6IDApO1xuICB9XG5cbiAgaWYgKG5ld0luZGV4ICE9PSBzZWxlY3RlZEluZGV4KSB7XG4gICAgZWxlbWVudC5zZWxlY3RlZEluZGV4ID0gbmV3SW5kZXg7XG4gICAgcmV0dXJuIHRydWU7IC8vIFdlIGhhbmRsZWQgdGhlIHBhZ2UgdXAvZG93biBvdXJzZWx2ZXMuXG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlOyAvLyBXZSBkaWRuJ3QgZG8gYW55dGhpbmcuXG4gIH1cbn1cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi9zeW1ib2xzJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgaXRlbVRleHRDb250ZW50c1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnaXRlbVRleHRDb250ZW50cycpO1xuY29uc3QgdHlwZWRQcmVmaXhTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3R5cGVkUHJlZml4Jyk7XG5jb25zdCBwcmVmaXhUaW1lb3V0U3ltYm9sID0gY3JlYXRlU3ltYm9sKCdwcmVmaXhUaW1lb3V0Jyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBLZXlib2FyZFByZWZpeFNlbGVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHRoYXQgaGFuZGxlcyBsaXN0IGJveC1zdHlsZSBwcmVmaXggdHlwaW5nLCBpbiB3aGljaCB0aGUgdXNlciBjYW4gdHlwZVxuICAgKiBhIHN0cmluZyB0byBzZWxlY3QgdGhlIGZpcnN0IGl0ZW0gdGhhdCBiZWdpbnMgd2l0aCB0aGF0IHN0cmluZy5cbiAgICpcbiAgICogRXhhbXBsZTogc3VwcG9zZSBhIGNvbXBvbmVudCB1c2luZyB0aGlzIG1peGluIGhhcyB0aGUgZm9sbG93aW5nIGl0ZW1zOlxuICAgKlxuICAgKiAgICAgPHNhbXBsZS1saXN0LWNvbXBvbmVudD5cbiAgICogICAgICAgPGRpdj5BcHBsZTwvZGl2PlxuICAgKiAgICAgICA8ZGl2PkFwcmljb3Q8L2Rpdj5cbiAgICogICAgICAgPGRpdj5CYW5hbmE8L2Rpdj5cbiAgICogICAgICAgPGRpdj5CbGFja2JlcnJ5PC9kaXY+XG4gICAqICAgICAgIDxkaXY+Qmx1ZWJlcnJ5PC9kaXY+XG4gICAqICAgICAgIDxkaXY+Q2FudGFsb3VwZTwvZGl2PlxuICAgKiAgICAgICA8ZGl2PkNoZXJyeTwvZGl2PlxuICAgKiAgICAgICA8ZGl2PkxlbW9uPC9kaXY+XG4gICAqICAgICAgIDxkaXY+TGltZTwvZGl2PlxuICAgKiAgICAgPC9zYW1wbGUtbGlzdC1jb21wb25lbnQ+XG4gICAqXG4gICAqIElmIHRoaXMgY29tcG9uZW50IHJlY2VpdmVzIHRoZSBmb2N1cywgYW5kIHRoZSB1c2VyIHByZXNzZXMgdGhlIFwiYlwiIG9yIFwiQlwiXG4gICAqIGtleSwgdGhlIFwiQmFuYW5hXCIgaXRlbSB3aWxsIGJlIHNlbGVjdGVkLCBiZWNhdXNlIGl0J3MgdGhlIGZpcnN0IGl0ZW0gdGhhdFxuICAgKiBtYXRjaGVzIHRoZSBwcmVmaXggXCJiXCIuIChNYXRjaGluZyBpcyBjYXNlLWluc2Vuc2l0aXZlLikgSWYgdGhlIHVzZXIgbm93XG4gICAqIHByZXNzZXMgdGhlIFwibFwiIG9yIFwiTFwiIGtleSBxdWlja2x5LCB0aGUgcHJlZml4IHRvIG1hdGNoIGJlY29tZXMgXCJibFwiLCBzb1xuICAgKiBcIkJsYWNrYmVycnlcIiB3aWxsIGJlIHNlbGVjdGVkLlxuICAgKlxuICAgKiBUaGUgcHJlZml4IHR5cGluZyBmZWF0dXJlIGhhcyBhIG9uZSBzZWNvbmQgdGltZW91dCDigJTCoHRoZSBwcmVmaXggdG8gbWF0Y2hcbiAgICogd2lsbCBiZSByZXNldCBhZnRlciBhIHNlY29uZCBoYXMgcGFzc2VkIHNpbmNlIHRoZSB1c2VyIGxhc3QgdHlwZWQgYSBrZXkuXG4gICAqIElmLCBpbiB0aGUgYWJvdmUgZXhhbXBsZSwgdGhlIHVzZXIgd2FpdHMgYSBzZWNvbmQgYmV0d2VlbiB0eXBpbmcgXCJiXCIgYW5kXG4gICAqIFwibFwiLCB0aGUgcHJlZml4IHdpbGwgYmVjb21lIFwibFwiLCBzbyBcIkxlbW9uXCIgd291bGQgYmUgc2VsZWN0ZWQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyB0aGUgY29tcG9uZW50IHRvIGludm9rZSBhIGBrZXlkb3duYCBtZXRob2Qgd2hlbiBhIGtleSBpc1xuICAgKiBwcmVzc2VkLiBZb3UgY2FuIHVzZSB0aGUgW0tleWJvYXJkXShLZXlib2FyZC5tZCkgbWl4aW4gZm9yIHRoYXQgcHVycG9zZSwgb3JcbiAgICogd2lyZSB1cCB5b3VyIG93biBrZXlib2FyZCBoYW5kbGluZyBhbmQgY2FsbCBga2V5ZG93bmAgeW91cnNlbGYuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gYWxzbyBleHBlY3RzIHRoZSBjb21wb25lbnQgdG8gcHJvdmlkZSBhbiBgaXRlbXNgIHByb3BlcnR5LiBUaGVcbiAgICogYHRleHRDb250ZW50YCBvZiB0aG9zZSBpdGVtcyB3aWxsIGJlIHVzZWQgZm9yIHB1cnBvc2VzIG9mIHByZWZpeCBtYXRjaGluZy5cbiAgICovXG4gIGNsYXNzIEtleWJvYXJkUHJlZml4U2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvLyBUT0RPOiBJZiB0aGUgc2V0IG9mIGl0ZW1zIGlzIGNoYW5nZWQsIHJlc2V0IHRoZSBwcmVmaXguXG4gICAgLy8gaXRlbXNDaGFuZ2VkKCkge1xuICAgIC8vICAgdGhpc1tpdGVtVGV4dENvbnRlbnRzU3ltYm9sXSA9IG51bGw7XG4gICAgLy8gICByZXNldFR5cGVkUHJlZml4KHRoaXMpO1xuICAgIC8vIH1cblxuICAgIC8vIFRPRE86IElmIHRoZSBzZWxlY3Rpb24gaXMgY2hhbmdlZCBieSBzb21lIG90aGVyIG1lYW5zIChlLmcuLCBhcnJvdyBrZXlzKVxuICAgIC8vIG90aGVyIHRoYW4gcHJlZml4IHR5cGluZywgdGhlbiB0aGF0IGFjdCBzaG91bGQgcmVzZXQgdGhlIHByZWZpeC5cblxuICAgIFtzeW1ib2xzLmtleWRvd25dKGV2ZW50KSB7XG4gICAgICBsZXQgaGFuZGxlZDtcbiAgICAgIGxldCByZXNldFByZWZpeCA9IHRydWU7XG5cbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICBjYXNlIDg6IC8vIEJhY2tzcGFjZVxuICAgICAgICAgIGhhbmRsZUJhY2tzcGFjZSh0aGlzKTtcbiAgICAgICAgICBoYW5kbGVkID0gdHJ1ZTtcbiAgICAgICAgICByZXNldFByZWZpeCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI3OiAvLyBFc2NhcGVcbiAgICAgICAgICBoYW5kbGVkID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBpZiAoIWV2ZW50LmN0cmxLZXkgJiYgIWV2ZW50Lm1ldGFLZXkgJiYgIWV2ZW50LmFsdEtleSAmJlxuICAgICAgICAgICAgICBldmVudC53aGljaCAhPT0gMzIgLyogU3BhY2UgKi8pIHtcbiAgICAgICAgICAgIGhhbmRsZVBsYWluQ2hhcmFjdGVyKHRoaXMsIFN0cmluZy5mcm9tQ2hhckNvZGUoZXZlbnQud2hpY2gpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzZXRQcmVmaXggPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc2V0UHJlZml4KSB7XG4gICAgICAgIHJlc2V0VHlwZWRQcmVmaXgodGhpcyk7XG4gICAgICB9XG5cbiAgICAgIC8vIFByZWZlciBtaXhpbiByZXN1bHQgaWYgaXQncyBkZWZpbmVkLCBvdGhlcndpc2UgdXNlIGJhc2UgcmVzdWx0LlxuICAgICAgcmV0dXJuIGhhbmRsZWQgfHwgKHN1cGVyW3N5bWJvbHMua2V5ZG93bl0gJiYgc3VwZXJbc3ltYm9scy5rZXlkb3duXShldmVudCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCB0aGUgZmlyc3QgaXRlbSB3aG9zZSB0ZXh0IGNvbnRlbnQgYmVnaW5zIHdpdGggdGhlIGdpdmVuIHByZWZpeC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwcmVmaXggW1N0cmluZ10gVGhlIHByZWZpeCBzdHJpbmcgdG8gc2VhcmNoIGZvclxuICAgICAqL1xuICAgIHNlbGVjdEl0ZW1XaXRoVGV4dFByZWZpeChwcmVmaXgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RJdGVtV2l0aFRleHRQcmVmaXgpIHsgc3VwZXIuc2VsZWN0SXRlbVdpdGhUZXh0UHJlZml4KHByZWZpeCk7IH1cbiAgICAgIGlmIChwcmVmaXggPT0gbnVsbCB8fCBwcmVmaXgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGluZGV4ID0gZ2V0SW5kZXhPZkl0ZW1XaXRoVGV4dFByZWZpeCh0aGlzLCBwcmVmaXgpO1xuICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gS2V5Ym9hcmRQcmVmaXhTZWxlY3Rpb247XG59O1xuXG5cbi8vIFRpbWUgaW4gbWlsbGlzZWNvbmRzIGFmdGVyIHdoaWNoIHRoZSB1c2VyIGlzIGNvbnNpZGVyZWQgdG8gaGF2ZSBzdG9wcGVkXG4vLyB0eXBpbmcuXG5jb25zdCBQUkVGSVhfVElNRU9VVF9EVVJBVElPTiA9IDEwMDA7XG5cblxuLy8gUmV0dXJuIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgaXRlbSB3aXRoIHRoZSBnaXZlbiBwcmVmaXgsIGVsc2UgLTEuXG5mdW5jdGlvbiBnZXRJbmRleE9mSXRlbVdpdGhUZXh0UHJlZml4KGVsZW1lbnQsIHByZWZpeCkge1xuICBjb25zdCBpdGVtVGV4dENvbnRlbnRzID0gZ2V0SXRlbVRleHRDb250ZW50cyhlbGVtZW50KTtcbiAgY29uc3QgcHJlZml4TGVuZ3RoID0gcHJlZml4Lmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtVGV4dENvbnRlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgaXRlbVRleHRDb250ZW50ID0gaXRlbVRleHRDb250ZW50c1tpXTtcbiAgICBpZiAoaXRlbVRleHRDb250ZW50LnN1YnN0cigwLCBwcmVmaXhMZW5ndGgpID09PSBwcmVmaXgpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbi8vIFJldHVybiBhbiBhcnJheSBvZiB0aGUgdGV4dCBjb250ZW50IChpbiBsb3dlcmNhc2UpIG9mIGFsbCBpdGVtcy5cbi8vIENhY2hlIHRoZXNlIHJlc3VsdHMuXG5mdW5jdGlvbiBnZXRJdGVtVGV4dENvbnRlbnRzKGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50W2l0ZW1UZXh0Q29udGVudHNTeW1ib2xdKSB7XG4gICAgY29uc3QgaXRlbXMgPSBlbGVtZW50Lml0ZW1zO1xuICAgIGVsZW1lbnRbaXRlbVRleHRDb250ZW50c1N5bWJvbF0gPSBpdGVtcy5tYXAoY2hpbGQgPT4ge1xuICAgICAgY29uc3QgdGV4dCA9IGNoaWxkLnRleHRDb250ZW50IHx8IGNoaWxkLmFsdDtcbiAgICAgIHJldHVybiB0ZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnRbaXRlbVRleHRDb250ZW50c1N5bWJvbF07XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUJhY2tzcGFjZShlbGVtZW50KSB7XG4gIGNvbnN0IGxlbmd0aCA9IGVsZW1lbnRbdHlwZWRQcmVmaXhTeW1ib2xdID8gZWxlbWVudFt0eXBlZFByZWZpeFN5bWJvbF0ubGVuZ3RoIDogMDtcbiAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICBlbGVtZW50W3R5cGVkUHJlZml4U3ltYm9sXSA9IGVsZW1lbnRbdHlwZWRQcmVmaXhTeW1ib2xdLnN1YnN0cigwLCBsZW5ndGggLSAxKTtcbiAgfVxuICBlbGVtZW50LnNlbGVjdEl0ZW1XaXRoVGV4dFByZWZpeChlbGVtZW50W3R5cGVkUHJlZml4U3ltYm9sXSk7XG4gIHNldFByZWZpeFRpbWVvdXQoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVBsYWluQ2hhcmFjdGVyKGVsZW1lbnQsIGNoYXIpIHtcbiAgY29uc3QgcHJlZml4ID0gZWxlbWVudFt0eXBlZFByZWZpeFN5bWJvbF0gfHwgJyc7XG4gIGVsZW1lbnRbdHlwZWRQcmVmaXhTeW1ib2xdID0gcHJlZml4ICsgY2hhci50b0xvd2VyQ2FzZSgpO1xuICBlbGVtZW50LnNlbGVjdEl0ZW1XaXRoVGV4dFByZWZpeChlbGVtZW50W3R5cGVkUHJlZml4U3ltYm9sXSk7XG4gIHNldFByZWZpeFRpbWVvdXQoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0UHJlZml4VGltZW91dChlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50W3ByZWZpeFRpbWVvdXRTeW1ib2xdKSB7XG4gICAgY2xlYXJUaW1lb3V0KGVsZW1lbnRbcHJlZml4VGltZW91dFN5bWJvbF0pO1xuICAgIGVsZW1lbnRbcHJlZml4VGltZW91dFN5bWJvbF0gPSBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNldFR5cGVkUHJlZml4KGVsZW1lbnQpIHtcbiAgZWxlbWVudFt0eXBlZFByZWZpeFN5bWJvbF0gPSAnJztcbiAgcmVzZXRQcmVmaXhUaW1lb3V0KGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBzZXRQcmVmaXhUaW1lb3V0KGVsZW1lbnQpIHtcbiAgcmVzZXRQcmVmaXhUaW1lb3V0KGVsZW1lbnQpO1xuICBlbGVtZW50W3ByZWZpeFRpbWVvdXRTeW1ib2xdID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgcmVzZXRUeXBlZFByZWZpeChlbGVtZW50KTtcbiAgfSwgUFJFRklYX1RJTUVPVVRfRFVSQVRJT04pO1xufVxuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuL2NyZWF0ZVN5bWJvbCc7XG5pbXBvcnQgRnJhY3Rpb25hbFNlbGVjdGlvbiBmcm9tICcuL0ZyYWN0aW9uYWxTZWxlY3Rpb24nO1xuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi9zeW1ib2xzJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgYW5pbWF0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdhbmltYXRpb24nKTtcbmNvbnN0IGRyYWdnaW5nU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdkcmFnZ2luZycpO1xuY29uc3QgbGFzdEFuaW1hdGlvblN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnbGFzdEFuaW1hdGlvbicpO1xuY29uc3QgcGxheWluZ0FuaW1hdGlvblN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnYW5pbWF0aW5nU2VsZWN0aW9uJyk7XG5jb25zdCBwcmV2aW91c1NlbGVjdGlvblN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgncHJldmlvdXNTZWxlY3Rpb24nKTtcbmNvbnN0IHNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbicpO1xuY29uc3Qgc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0U3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3Rpb25BbmltYXRpb25FZmZlY3QnKTtcbmNvbnN0IHNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lc1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzJyk7XG5jb25zdCByZXNldEFuaW1hdGlvbnNPbk5leHRSZW5kZXJTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3Jlc2V0QW5pbWF0aW9uc09uTmV4dFJlbmRlcicpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggU2VsZWN0aW9uQW5pbWF0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl4aW4oYmFzZSkge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCB1c2VzIGFuaW1hdGlvbiB0byBzaG93IHRyYW5zaXRpb25zIGJldHdlZW4gc2VsZWN0aW9uIHN0YXRlcy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBjYW4gYmUgdXNlZCBieSBjb21wb25lbnRzIHRoYXQgd2FudCB0byBwcm92aWRlIHZpc2libGVcbiAgICogYW5pbWF0aW9ucyB3aGVuIGNoYW5naW5nIHRoZSBzZWxlY3Rpb24uIEZvciBleGFtcGxlLCBhIGNhcm91c2VsIGNvbXBvbmVudFxuICAgKiBtYXkgd2FudCB0byBkZWZpbmUgYSBzbGlkaW5nIGFuaW1hdGlvbiBlZmZlY3Qgc2hvd24gd2hlbiBtb3ZpbmcgYmV0d2VlblxuICAgKiBpdGVtcy5cbiAgICpcbiAgICogVGhlIGFuaW1hdGlvbiBpcyBkZWZpbmVkIGJ5IGEgYHNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lc2AgcHJvcGVydHk7IHNlZVxuICAgKiB0aGF0IHByb3BlcnR5IGZvciBkZXRhaWxzIG9uIGhvdyB0byBkZWZpbmUgdGhlc2Uga2V5ZnJhbWVzLiBUaGlzIGFuaW1hdGlvblxuICAgKiB3aWxsIGJlIHVzZWQgaW4gdHdvIHdheXMuIEZpcnN0LCB3aGVuIG1vdmluZyBzdHJpY3RseSBiZXR3ZWVuIGl0ZW1zLCB0aGVcbiAgICogYW5pbWF0aW9uIHdpbGwgcGxheSBzbW9vdGhseSB0byBzaG93IHRoZSBzZWxlY3Rpb24gY2hhbmdpbmcuIFNlY29uZCwgdGhlXG4gICAqIGFuaW1hdGlvbiBjYW4gYmUgdXNlZCB0byByZW5kZXIgdGhlIHNlbGVjdGlvbiBhdCBhIGZpeGVkIHBvaW50IGluIHRoZVxuICAgKiB0cmFuc2l0aW9uIGJldHdlZW4gc3RhdGVzLiBFLmcuLCBpZiB0aGUgdXNlciBwYXVzZXMgaGFsZndheSB0aHJvdWdoXG4gICAqIGRyYWdnaW5nIGFuIGVsZW1lbnQgdXNpbmcgdGhlIFtTd2lwZURpcmVjdGlvbl0oU3dpcGVEaXJlY3Rpb24ubWQpIG9yXG4gICAqIFtUcmFja3BhZERpcmVjdGlvbl0oVHJhY2twYWREaXJlY3Rpb24ubWQpIG1peGlucywgdGhlbiB0aGUgc2VsZWN0aW9uXG4gICAqIGFuaW1hdGlvbiB3aWxsIGJlIHNob3duIGF0IHRoZSBwb2ludCBleGFjdGx5IGhhbGZ3YXkgdGhyb3VnaC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGEgY29tcG9uZW50IHRvIHByb3ZpZGUgYW4gYGl0ZW1zYCBhcnJheSBvZiBhbGwgZWxlbWVudHNcbiAgICogaW4gdGhlIGxpc3QsIHdoaWNoIGNhbiBiZSBwcm92aWRlZCB2aWEgdGhlXG4gICAqIFtDb250ZW50QXNJdGVtc10oQ29udGVudEFzSXRlbXMubWQpIG1peGluLiBUaGlzIG1peGluIGFsc28gZXhwZWN0c1xuICAgKiBgc2VsZWN0ZWRJbmRleGAgYW5kIGBzZWxlY3RlZEl0ZW1gIHByb3BlcnRpZXMsIHdoaWNoIGNhbiBiZSBwcm92aWRlZCB2aWFcbiAgICogdGhlIFtTaW5nbGVTZWxlY3Rpb25dKFNpbmdsZVNlbGVjdGlvbi5tZCkgbWl4aW4uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gc3VwcG9ydHMgYSBgc2VsZWN0aW9uV3JhcHNgIHByb3BlcnR5LiBXaGVuIHRydWUsIHRoZSB1c2VyIGNhblxuICAgKiBuYXZpZ2F0ZSBmb3J3YXJkIGZyb20gdGhlIGxhc3QgaXRlbSBpbiB0aGUgbGlzdCBhbmQgd3JhcCBhcm91bmQgdG8gdGhlXG4gICAqIGZpcnN0IGl0ZW0sIG9yIG5hdmlnYXRlIGJhY2t3YXJkIGZyb20gdGhlIGZpcnN0IGl0ZW0gYW5kIHdyYXAgYXJvdW5kIHRvIHRoZVxuICAgKiBsYXN0IGl0ZW0uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gdXNlcyB0aGUgV2ViIEFuaW1hdGlvbnMgQVBJLiBGb3IgdXNlIG9uIGJyb3dzZXJzIHdoaWNoXG4gICAqIGRvIG5vdCBzdXBwb3J0IHRoYXQgQVBJIG5hdGl2ZWx5LCB5b3Ugd2lsbCBuZWVkIHRvIGxvYWQgdGhlXG4gICAqIFtXZWIgQW5pbWF0aW9ucyBwb2x5ZmlsbF0oaHR0cHM6Ly9naXRodWIuY29tL3dlYi1hbmltYXRpb25zL3dlYi1hbmltYXRpb25zLWpzKS5cbiAgICovXG4gIGNsYXNzIFNlbGVjdGlvbkFuaW1hdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuXG4gICAgICAvLyBTZXQgZGVmYXVsdHMuXG4gICAgICBpZiAodHlwZW9mIHRoaXMuc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb24gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb24gPSB0aGlzW3N5bWJvbHMuZGVmYXVsdHNdLnNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnNlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdCA9PT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5zZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXMgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdCA9IHRoaXNbc3ltYm9scy5kZWZhdWx0c10uc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0O1xuICAgICAgfVxuXG4gICAgICB0aGlzW3N5bWJvbHMuZHJhZ2dpbmddID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IFtzeW1ib2xzLmRlZmF1bHRzXSgpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRzID0gc3VwZXJbc3ltYm9scy5kZWZhdWx0c10gfHwge307XG4gICAgICBkZWZhdWx0cy5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbiA9IDI1MDtcbiAgICAgIGRlZmF1bHRzLnNlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdCA9ICdzbGlkZSc7XG4gICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBQcm92aWRlIGJhY2tpbmcgZm9yIHRoZSBkcmFnZ2luZyBwcm9wZXJ0eS5cbiAgICAgKiBBbHNvLCB3aGVuIGEgZHJhZyBiZWdpbnMsIHJlc2V0IHRoZSBhbmltYXRpb25zLlxuICAgICAqL1xuICAgIGdldCBbc3ltYm9scy5kcmFnZ2luZ10oKSB7XG4gICAgICByZXR1cm4gdGhpc1tkcmFnZ2luZ1N5bWJvbF07XG4gICAgfVxuICAgIHNldCBbc3ltYm9scy5kcmFnZ2luZ10odmFsdWUpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSB0aGlzW3N5bWJvbHMuZHJhZ2dpbmddO1xuICAgICAgdGhpc1tkcmFnZ2luZ1N5bWJvbF0gPSB2YWx1ZTtcbiAgICAgIGlmIChzeW1ib2xzLmRyYWdnaW5nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyW3N5bWJvbHMuZHJhZ2dpbmddID0gdmFsdWU7IH1cbiAgICAgIGlmICh2YWx1ZSAmJiAhcHJldmlvdXNWYWx1ZSkge1xuICAgICAgICAvLyBIYXZlIGJlZ3VuIGEgZHJhZy5cbiAgICAgICAgdGhpc1tyZXNldEFuaW1hdGlvbnNPbk5leHRSZW5kZXJTeW1ib2xdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBbc3ltYm9scy5pdGVtQWRkZWRdKGl0ZW0pIHtcbiAgICAgIC8vIFdlIG1hcmsgbmV3IGl0ZW1zIGluIHRoZSBsaXN0IGFzIGV4cGxpY2l0bHkgdmlzaWJsZSB0byBBUklBLiBPdGhlcndpc2UsXG4gICAgICAvLyB3aGVuIGFuIGl0ZW0gaXNuJ3QgdmlzaWJsZSBvbiB0aGUgc2NyZWVuLCBBUklBIHdpbGwgYXNzdW1lIHRoZSBpdGVtIGlzXG4gICAgICAvLyBvZiBubyBpbnRlcmVzdCB0byB0aGUgdXNlciwgYW5kIGxlYXZlIGl0IG91dCBvZiB0aGUgYWNjZXNzaWJpbGl0eSB0cmVlLlxuICAgICAgLy8gSWYgdGhlIGxpc3QgY29udGFpbnMgMTAgaXRlbXMsIGJ1dCBvbmx5IDMgYXJlIHZpc2libGUsIGEgc2NyZWVuIHJlYWRlclxuICAgICAgLy8gbWlnaHQgdGhlbiBhbm5vdW5jZSB0aGUgbGlzdCBvbmx5IGhhcyAzIGl0ZW1zLiBUbyBlbnN1cmUgdGhhdCBzY3JlZW5cbiAgICAgIC8vIHJlYWRlcnMgYW5kIG90aGVyIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMgYW5ub3VuY2UgdGhlIGNvcnJlY3QgdG90YWxcbiAgICAgIC8vIG51bWJlciBvZiBpdGVtcywgd2UgZXhwbGljaXRseSBtYXJrIGFsbCBpdGVtcyBhcyBub3QgaGlkZGVuLiBUaGlzIHdpbGxcbiAgICAgIC8vIGV4cG9zZSB0aGVtIGFsbCBpbiB0aGUgYWNjZXNzaWJpbGl0eSB0cmVlLCBldmVuIHRoZSBpdGVtcyB3aGljaCBhcmVcbiAgICAgIC8vIGN1cnJlbnRseSBub3QgcmVuZGVyZWQuXG4gICAgICAvL1xuICAgICAgLy8gVE9ETzogR2VuZXJhbGx5IHNwZWFraW5nLCB0aGlzIGVudGlyZSBtaXhpbiBhc3N1bWVzIHRoYXQgdGhlIHVzZXIgY2FuXG4gICAgICAvLyBuYXZpZ2F0ZSB0aHJvdWdoIGFsbCBpdGVtcyBpbiBhIGxpc3QuIEJ1dCBhbiBhcHAgY291bGQgc3R5bGUgYW4gaXRlbSBhc1xuICAgICAgLy8gZGlzcGxheTpub25lIG9yIHZpc2liaWxpdHk6aGlkZGVuIGJlY2F1c2UgdGhlIHVzZXIgaXMgbm90IGFsbG93ZWQgdG9cbiAgICAgIC8vIGludGVyYWN0IHdpdGggdGhhdCBpdGVtIGF0IHRoZSBtb21lbnQuIFN1cHBvcnQgZm9yIHRoaXMgc2NlbmFyaW8gc2hvdWxkXG4gICAgICAvLyBiZSBhZGRlZC4gVGhpcyB3b3VsZCBlbnRhaWwgY2hhbmdpbmcgYWxsIGxvY2F0aW9ucyB3aGVyZSBhIG1peGluXG4gICAgICAvLyBmdW5jdGlvbiBpcyBjb3VudGluZyBpdGVtcywgaXRlcmF0aW5nIG92ZXIgdGhlICh2aXNpYmxlKSBpdGVtcywgYW5kXG4gICAgICAvLyBzaG93aW5nIG9yIGhpZGluZyBpdGVtcy4gQW1vbmcgb3RoZXIgdGhpbmdzLCB0aGUgY29kZSBiZWxvdyB0byBtYWtlXG4gICAgICAvLyBpdGVtcyB2aXNpYmxlIHRvIEFSSUEgd291bGQgbmVlZCB0byBkaXNjcmltaW5hdGUgYmV0d2VlbiBpdGVtcyB3aGljaFxuICAgICAgLy8gYXJlIGludmlzaWJsZSBiZWNhdXNlIG9mIGFuaW1hdGlvbiBzdGF0ZSwgb3IgaW52aXNpYmxlIGJlY2F1c2UgdGhlIHVzZXJcbiAgICAgIC8vIHNob3VsZG4ndCBpbnRlcmFjdCB3aXRoIHRoZW0uXG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaXRlbXNDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLml0ZW1zQ2hhbmdlZCkgeyBzdXBlci5pdGVtc0NoYW5nZWQoKTsgfVxuICAgICAgcmVzZXRBbmltYXRpb25zKHRoaXMpO1xuICAgICAgcmVuZGVyU2VsZWN0aW9uKHRoaXMpO1xuICAgIH1cblxuICAgIHJlc2V0QW5pbWF0aW9ucygpIHtcbiAgICAgIHJlc2V0QW5pbWF0aW9ucyh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIGZyYWN0aW9uYWwgdmFsdWUgaW5kaWNhdGluZyBob3cgZmFyIHRoZSB1c2VyIGhhcyBjdXJyZW50bHkgYWR2YW5jZWQgdG9cbiAgICAgKiB0aGUgbmV4dC9wcmV2aW91cyBpdGVtLiBFLmcuLCBhIGBzZWxlY3RlZEZyYWN0aW9uYCBvZiAzLjUgaW5kaWNhdGVzIHRoZVxuICAgICAqIHVzZXIgaXMgaGFsZndheSBiZXR3ZWVuIGl0ZW1zIDMgYW5kIDQuXG4gICAgICpcbiAgICAgKiBGb3IgbW9yZSBkZXRhaWxzLCBzZWUgdGhlIFtGcmFjdGlvbmFsU2VsZWN0aW9uXShGcmFjdGlvbmFsU2VsZWN0aW9uLm1kKVxuICAgICAqIG1peGluLlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWRGcmFjdGlvbigpIHtcbiAgICAgIHJldHVybiBzdXBlci5zZWxlY3RlZEZyYWN0aW9uIHx8IDA7XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEZyYWN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkRnJhY3Rpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgICAgcmVuZGVyU2VsZWN0aW9uKHRoaXMsIHRoaXMuc2VsZWN0ZWRJbmRleCwgdmFsdWUpO1xuICAgIH1cblxuICAgIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRJdGVtO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgICByZW5kZXJTZWxlY3Rpb24odGhpcywgdGhpcy5zZWxlY3RlZEluZGV4LCAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZHVyYXRpb24gb2YgYSBzZWxlY3Rpb24gYW5pbWF0aW9uIGluIG1pbGxpc2Vjb25kcy5cbiAgICAgKlxuICAgICAqIFRoaXMgbWVhc3VyZXMgdGhlIGFtb3VudCBvZiB0aW1lIHJlcXVpcmVkIGZvciBhIHNlbGVjdGlvbiBhbmltYXRpb24gdG9cbiAgICAgKiBjb21wbGV0ZS4gVGhpcyBudW1iZXIgcmVtYWlucyBjb25zdGFudCwgZXZlbiBpZiB0aGUgbnVtYmVyIG9mIGl0ZW1zIGJlaW5nXG4gICAgICogYW5pbWF0ZWQgaW5jcmVhc2VzLlxuICAgICAqXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgMjUwIG1pbGxpc2Vjb25kcyAoYSBxdWFydGVyIGEgc2Vjb25kKS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMjUwXG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXNbc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb25TeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb24odmFsdWUpIHtcbiAgICAgIHRoaXNbc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb25TeW1ib2xdID0gdmFsdWU7XG4gICAgICBpZiAoJ3NlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbiA9IHZhbHVlOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgYSBzdGFuZGFyZCBzZWxlY3Rpb24gYW5pbWF0aW9uIGVmZmVjdC5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgYSBzaG9ydGhhbmQgZm9yIHNldHRpbmcgdGhlIGBzZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXNgXG4gICAgICogcHJvcGVydHkgdG8gc3RhbmRhcmQga2V5ZnJhbWVzLiBTdXBwb3J0ZWQgc3RyaW5nIHZhbHVlczpcbiAgICAgKlxuICAgICAqICogXCJjcm9zc2ZhZGVcIlxuICAgICAqICogXCJyZXZlYWxcIlxuICAgICAqICogXCJyZXZlYWxXaXRoRmFkZVwiXG4gICAgICogKiBcInNob3dBZGphY2VudFwiXG4gICAgICogKiBcInNsaWRlXCJcbiAgICAgKiAqIFwic2xpZGVXaXRoR2FwXCJcbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQGRlZmF1bHQgXCJzbGlkZVwiXG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdCgpIHtcbiAgICAgIHJldHVybiB0aGlzW3NlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdFN5bWJvbF07XG4gICAgfVxuICAgIHNldCBzZWxlY3Rpb25BbmltYXRpb25FZmZlY3QodmFsdWUpIHtcbiAgICAgIHRoaXNbc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0U3ltYm9sXSA9IHZhbHVlO1xuICAgICAgaWYgKCdzZWxlY3Rpb25BbmltYXRpb25FZmZlY3QnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdCA9IHZhbHVlOyB9XG4gICAgICB0aGlzLnNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcyA9IG1peGluLnN0YW5kYXJkRWZmZWN0S2V5ZnJhbWVzW3ZhbHVlXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUga2V5ZnJhbWVzIHRoYXQgZGVmaW5lIGFuIGFuaW1hdGlvbiB0aGF0IHBsYXlzIGZvciBhbiBpdGVtIHdoZW4gbW92aW5nXG4gICAgICogZm9yd2FyZCBpbiB0aGUgc2VxdWVuY2UuXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIGFuIGFycmF5IG9mIENTUyBydWxlcyB0aGF0IHdpbGwgYmUgYXBwbGllZC4gVGhlc2UgYXJlIHVzZWQgYXNcbiAgICAgKiBba2V5ZnJhbWVzXShodHRwOi8vdzNjLmdpdGh1Yi5pby93ZWItYW5pbWF0aW9ucy8ja2V5ZnJhbWVzLXNlY3Rpb24pXG4gICAgICogdG8gYW5pbWF0ZSB0aGUgaXRlbSB3aXRoIHRoZVxuICAgICAqIFtXZWIgQW5pbWF0aW9ucyBBUEldKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9hbmltYXRpb24pLlxuICAgICAqXG4gICAgICogVGhlIGFuaW1hdGlvbiByZXByZXNlbnRzIHRoZSBzdGF0ZSBvZiB0aGUgbmV4dCBpdGVtIGFzIGl0IG1vdmVzIGZyb21cbiAgICAgKiBjb21wbGV0ZWx5IHVuc2VsZWN0ZWQgKG9mZnN0YWdlLCB1c3VhbGx5IHJpZ2h0KSwgdG8gc2VsZWN0ZWQgKGNlbnRlclxuICAgICAqIHN0YWdlKSwgdG8gY29tcGxldGVseSB1bnNlbGVjdGVkIChvZmZzdGFnZSwgdXN1YWxseSBsZWZ0KS4gVGhlIGNlbnRlciB0aW1lXG4gICAgICogb2YgdGhlIGFuaW1hdGlvbiBzaG91bGQgY29ycmVzcG9uZCB0byB0aGUgaXRlbSdzIHF1aXNjZW50IHNlbGVjdGVkIHN0YXRlLFxuICAgICAqIHR5cGljYWxseSBpbiB0aGUgY2VudGVyIG9mIHRoZSBzdGFnZSBhbmQgYXQgdGhlIGl0ZW0ncyBsYXJnZXN0IHNpemUuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBmb3J3YXJkIGFuaW1hdGlvbiBpcyBhIHNtb290aCBzbGlkZSBhdCBmdWxsIHNpemUgZnJvbSByaWdodCB0b1xuICAgICAqIGxlZnQuXG4gICAgICpcbiAgICAgKiBXaGVuIG1vdmluZyB0aGUgc2VsZWN0aW9uIGJhY2t3YXJkLCB0aGlzIGFuaW1hdGlvbiBpcyBwbGF5ZWQgaW4gcmV2ZXJzZS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtjc3NSdWxlc1tdfVxuICAgICAqL1xuICAgIGdldCBzZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXMoKSB7XG4gICAgICAvLyBTdGFuZGFyZCBhbmltYXRpb24gc2xpZGVzIGxlZnQvcmlnaHQsIGtlZXBzIGFkamFjZW50IGl0ZW1zIG91dCBvZiB2aWV3LlxuICAgICAgcmV0dXJuIHRoaXNbc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcyh2YWx1ZSkge1xuICAgICAgdGhpc1tzZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXNTeW1ib2xdID0gdmFsdWU7XG4gICAgICBpZiAoJ3NlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzID0gdmFsdWU7IH1cbiAgICAgIHJlc2V0QW5pbWF0aW9ucyh0aGlzKTtcbiAgICAgIHJlbmRlclNlbGVjdGlvbih0aGlzKTtcbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0aW9uV3JhcHMoKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2VsZWN0aW9uV3JhcHM7XG4gICAgfVxuICAgIHNldCBzZWxlY3Rpb25XcmFwcyh2YWx1ZSkge1xuICAgICAgaWYgKCdzZWxlY3Rpb25XcmFwcycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0aW9uV3JhcHMgPSB2YWx1ZTsgfVxuICAgICAgcmVzZXRBbmltYXRpb25zKHRoaXMpO1xuICAgICAgcmVuZGVyU2VsZWN0aW9uKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBTZWxlY3Rpb25BbmltYXRpb247XG59XG5cblxuLy8gV2UgZXhwb3NlIGhlbHBlcnMgb24gdGhlIG1peGluIGZ1bmN0aW9uIHRoYXQgd2Ugd2FudCB0byBiZSBhYmxlIHRvIHVuaXQgdGVzdC5cbi8vIFNpbmNlIHRoZXNlIGFyZSBvbiB0aGUgZnVuY3Rpb24sIG5vdCBvbiB0aGUgY2xhc3MgZW1pdHRlZCBieSB0aGUgZnVuY3Rpb24sXG4vLyB0aGV5IGRvbid0IGVuZCB1cCBnZXR0aW5nIGV4cG9zZWQgb24gYWN0dWFsIGVsZW1lbnQgaW5zdGFuY2VzLlxubWl4aW4uaGVscGVycyA9IHtcblxuICAvKlxuICAgKiBDYWxjdWxhdGUgdGhlIGFuaW1hdGlvbiBmcmFjdGlvbnMgZm9yIGFuIGVsZW1lbnQncyBpdGVtcyBhdCB0aGUgZ2l2ZW5cbiAgICogc2VsZWN0aW9uIHBvaW50LiBUaGlzIGlzIHVzZWQgd2hlbiByZW5kZXJpbmcgdGhlIGVsZW1lbnQncyBzZWxlY3Rpb24gc3RhdGVcbiAgICogaW5zdGFudGFuZW91c2x5LlxuICAgKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGNvbnNpZGVycyB0aGUgc2VsZWN0ZWRJbmRleCBwYXJhbWV0ZXIsIHdoaWNoIGNhbiBiZSBhIHdob2xlXG4gICAqIG9yIGZyYWN0aW9uYWwgbnVtYmVyLCBhbmQgZGV0ZXJtaW5lcyB3aGljaCBpdGVtcyB3aWxsIGJlIHZpc2libGUgYXQgdGhhdFxuICAgKiBpbmRleC4gVGhpcyBmdW5jdGlvbiB0aGVuIGNhbGN1bGF0ZXMgYSBjb3JyZXNwb25kaW5nIGFuaW1hdGlvbiBmcmFjdGlvbjogYVxuICAgKiBudW1iZXIgYmV0d2VlbiAwIGFuZCAxIGluZGljYXRpbmcgaG93IGZhciB0aHJvdWdoIHRoZSBzZWxlY3Rpb24gYW5pbWF0aW9uXG4gICAqIGFuIGl0ZW0gc2hvdWxkIGJlIHNob3duLCBvciBudWxsIGlmIHRoZSBpdGVtIHNob3VsZCBub3QgYmUgdmlzaWJsZSBhdCB0aGF0XG4gICAqIHNlbGVjdGlvbiBpbmRleC4gVGhlc2UgZnJhY3Rpb25zIGFyZSByZXR1cm5lZCBhcyBhbiBhcnJheSwgd2hlcmUgdGhlXG4gICAqIGFuaW1hdGlvbiBmcmFjdGlvbiBhdCBwb3NpdGlvbiBOIGNvcnJlc3BvbmRzIHRvIGhvdyBpdGVtIE4gc2hvdWxkIGJlIHNob3duLlxuICAgKi9cbiAgYW5pbWF0aW9uRnJhY3Rpb25zRm9yU2VsZWN0aW9uKGVsZW1lbnQsIHNlbGVjdGlvbikge1xuXG4gICAgY29uc3QgaXRlbXMgPSBlbGVtZW50Lml0ZW1zO1xuICAgIGlmICghaXRlbXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpdGVtQ291bnQgPSBpdGVtcy5sZW5ndGg7XG4gICAgY29uc3Qgc2VsZWN0aW9uV3JhcHMgPSBlbGVtZW50LnNlbGVjdGlvbldyYXBzO1xuXG4gICAgcmV0dXJuIGl0ZW1zLm1hcCgoaXRlbSwgaXRlbUluZGV4KSA9PiB7XG4gICAgICAvLyBIb3cgbWFueSBzdGVwcyBmcm9tIHRoZSBzZWxlY3Rpb24gcG9pbnQgdG8gdGhpcyBpdGVtP1xuICAgICAgY29uc3Qgc3RlcHMgPSBzdGVwc1RvSW5kZXgoaXRlbUNvdW50LCBzZWxlY3Rpb25XcmFwcywgc2VsZWN0aW9uLCBpdGVtSW5kZXgpO1xuICAgICAgLy8gVG8gY29udmVydCBzdGVwcyB0byBhbmltYXRpb24gZnJhY3Rpb246XG4gICAgICAvLyBzdGVwcyAgICAgIGFuaW1hdGlvbiBmcmFjdGlvblxuICAgICAgLy8gIDEgICAgICAgICAwICAgICAoc3RhZ2UgcmlnaHQpXG4gICAgICAvLyAgMCAgICAgICAgIDAuNSAgIChjZW50ZXIgc3RhZ2UpXG4gICAgICAvLyAtMSAgICAgICAgIDEgICAgIChzdGFnZSBsZWZ0KVxuICAgICAgY29uc3QgYW5pbWF0aW9uRnJhY3Rpb24gPSAoMSAtIHN0ZXBzKSAvIDI7XG4gICAgICByZXR1cm4gKGFuaW1hdGlvbkZyYWN0aW9uID49IDAgJiYgYW5pbWF0aW9uRnJhY3Rpb24gPD0gMSkgP1xuICAgICAgICBhbmltYXRpb25GcmFjdGlvbiA6XG4gICAgICAgIG51bGw7IC8vIE91dHNpZGUgYW5pbWF0aW9uIHJhbmdlXG4gICAgfSk7XG4gIH0sXG5cbiAgLypcbiAgICogQ2FsY3VsYXRlIHRoZSBhbmltYXRpb24gdGltaW5ncyB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIHNtb290aGx5IGFuaW1hdGUgdGhlXG4gICAqIGVsZW1lbnQncyBpdGVtcyBmcm9tIG9uZSBzZWxlY3Rpb24gc3RhdGUgdG8gYW5vdGhlci5cbiAgICpcbiAgICogVGhpcyByZXR1cm5zIGFuIGFycmF5IG9mIHRpbWluZ3MsIHdoZXJlIHRoZSB0aW1pbmcgYXQgcG9zaXRpb24gTiBzaG91bGQgYmVcbiAgICogdXNlZCB0byBhbmltYXRlIGl0ZW0gTi4gSWYgYW4gaXRlbSdzIHRpbWluZyBpcyBudWxsLCB0aGVuIHRoYXQgaXRlbSBzaG91bGRcbiAgICogbm90IHRha2UgcGxhY2UgaW4gdGhlIGFuaW1hdGlvbiwgYW5kIHNob3VsZCBiZSBoaWRkZW4gaW5zdGVhZC5cbiAgICovXG4gIGVmZmVjdFRpbWluZ3NGb3JTZWxlY3Rpb25BbmltYXRpb24oZWxlbWVudCwgZnJvbVNlbGVjdGlvbiwgdG9TZWxlY3Rpb24pIHtcblxuICAgIGNvbnN0IGl0ZW1zID0gZWxlbWVudC5pdGVtcztcbiAgICBpZiAoIWl0ZW1zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGl0ZW1Db3VudCA9IGl0ZW1zLmxlbmd0aDtcbiAgICBjb25zdCBzZWxlY3Rpb25XcmFwcyA9IGVsZW1lbnQuc2VsZWN0aW9uV3JhcHM7XG4gICAgY29uc3QgdG9JbmRleCA9IEZyYWN0aW9uYWxTZWxlY3Rpb24uaGVscGVycy53cmFwcGVkU2VsZWN0aW9uUGFydHModG9TZWxlY3Rpb24sIGl0ZW1Db3VudCwgc2VsZWN0aW9uV3JhcHMpLmluZGV4O1xuICAgIGNvbnN0IHRvdGFsU3RlcHMgPSBzdGVwc1RvSW5kZXgoaXRlbUNvdW50LCBzZWxlY3Rpb25XcmFwcywgZnJvbVNlbGVjdGlvbiwgdG9TZWxlY3Rpb24pO1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRvdGFsU3RlcHMgPj0gMCA/ICdub3JtYWwnOiAncmV2ZXJzZSc7XG4gICAgY29uc3QgZmlsbCA9ICdib3RoJztcbiAgICBjb25zdCB0b3RhbER1cmF0aW9uID0gZWxlbWVudC5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbjtcbiAgICBjb25zdCBzdGVwRHVyYXRpb24gPSB0b3RhbFN0ZXBzICE9PSAwID9cbiAgICAgIHRvdGFsRHVyYXRpb24gKiAyIC8gTWF0aC5jZWlsKE1hdGguYWJzKHRvdGFsU3RlcHMpKSA6XG4gICAgICAwOyAgLy8gTm8gc3RlcHMgcmVxdWlyZWQsIGFuaW1hdGlvbiB3aWxsIGJlIGluc3RhbnRlbm91cy5cblxuICAgIGNvbnN0IHRpbWluZ3MgPSBpdGVtcy5tYXAoKGl0ZW0sIGl0ZW1JbmRleCkgPT4ge1xuICAgICAgY29uc3Qgc3RlcHMgPSBzdGVwc1RvSW5kZXgoaXRlbUNvdW50LCBzZWxlY3Rpb25XcmFwcywgaXRlbUluZGV4LCB0b1NlbGVjdGlvbik7XG4gICAgICAvLyBJZiB3ZSBpbmNsdWRlIHRoaXMgaXRlbSBpbiB0aGUgc3RhZ2dlcmVkIHNlcXVlbmNlIG9mIGFuaW1hdGlvbnMgd2UncmVcbiAgICAgIC8vIGNyZWF0aW5nLCB3aGVyZSB3b3VsZCB0aGUgaXRlbSBhcHBlYXIgaW4gdGhlIHNlcXVlbmNlP1xuICAgICAgbGV0IHBvc2l0aW9uSW5TZXF1ZW5jZSA9IHRvdGFsU3RlcHMgLSBzdGVwcztcbiAgICAgIGlmICh0b3RhbFN0ZXBzIDwgMCkge1xuICAgICAgICBwb3NpdGlvbkluU2VxdWVuY2UgPSAtcG9zaXRpb25JblNlcXVlbmNlO1xuICAgICAgfVxuICAgICAgLy8gU28sIGlzIHRoaXMgaXRlbSByZWFsbHkgaW5jbHVkZWQgaW4gdGhlIHNlcXVlbmNlP1xuICAgICAgaWYgKE1hdGguY2VpbChwb3NpdGlvbkluU2VxdWVuY2UpID49IDAgJiYgcG9zaXRpb25JblNlcXVlbmNlIDw9IE1hdGguYWJzKHRvdGFsU3RlcHMpKSB7XG4gICAgICAgIC8vIE5vdGUgdGhhdCBkZWxheSBmb3IgZmlyc3QgaXRlbSB3aWxsIGJlIG5lZ2F0aXZlLiBUaGF0IHdpbGwgY2F1c2VcbiAgICAgICAgLy8gdGhlIGFuaW1hdGlvbiB0byBzdGFydCBoYWxmd2F5IHRocm91Z2gsIHdoaWNoIGlzIHdoYXQgd2Ugd2FudC5cbiAgICAgICAgY29uc3QgZGVsYXkgPSBzdGVwRHVyYXRpb24gKiAocG9zaXRpb25JblNlcXVlbmNlIC0gMSkvMjtcbiAgICAgICAgY29uc3QgZW5kRGVsYXkgPSBpdGVtSW5kZXggPT09IHRvSW5kZXggP1xuICAgICAgICAgIC1zdGVwRHVyYXRpb24vMiA6ICAgLy8gU3RvcCBoYWxmd2F5IHRocm91Z2guXG4gICAgICAgICAgMDsgICAgICAgICAgICAgIC8vIFBsYXkgYW5pbWF0aW9uIHVudGlsIGVuZC5cbiAgICAgICAgcmV0dXJuIHsgZHVyYXRpb246IHN0ZXBEdXJhdGlvbiwgZGlyZWN0aW9uLCBmaWxsLCBkZWxheSwgZW5kRGVsYXkgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRpbWluZ3M7XG4gIH1cblxufTtcblxuXG4vLyBLZXlmcmFtZXMgZm9yIHN0YW5kYXJkIHNlbGVjdGlvbiBhbmltYXRpb24gZWZmZWN0cy5cbm1peGluLnN0YW5kYXJkRWZmZWN0S2V5ZnJhbWVzID0ge1xuXG4gIC8vIFNpbXBsZSBjcm9zc2ZhZGVcbiAgY3Jvc3NmYWRlOiBbXG4gICAgeyBvcGFjaXR5OiAwIH0sXG4gICAgeyBvcGFjaXR5OiAxIH0sXG4gICAgeyBvcGFjaXR5OiAwIH1cbiAgXSxcblxuICAvLyBSZXZlYWwsIGFzIGlmIHNsaWRpbmcgdGhlIHRvcCBjYXJkIG9mZiBhIGRlY2sgb2YgY2FyZHNcbiAgcmV2ZWFsOiBbXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDAlKScsIHpJbmRleDogMCB9LFxuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwJSknLCB6SW5kZXg6IDEgfSxcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTEwMCUpJywgekluZGV4OiAyIH1cbiAgXSxcblxuICAvLyBHb29nbGUgUGhvdG9zLXN0eWxlIHJldmVhbC13aXRoLWZhZGUgYW5pbWF0aW9uXG4gIHJldmVhbFdpdGhGYWRlOiBbXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDAlKSBzY2FsZSgwLjc1KScsIG9wYWNpdHk6IDAsIHpJbmRleDogMCB9LFxuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwJSkgc2NhbGUoMS4wKScsIG9wYWNpdHk6IDEsIHpJbmRleDogMSB9LFxuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMTAwJSkgc2NhbGUoMS4wKScsIG9wYWNpdHk6IDEsIHpJbmRleDogMiB9XG4gIF0sXG5cbiAgLy8gQ2Fyb3VzZWwgdmFyaWFudCB3aXRoIGEgYml0IG9mIG9mZi1zdGFnZSBlbGVtZW50cyBzaG93aW5nXG4gIHNob3dBZGphY2VudDogW1xuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCg3OCUpIHNjYWxlKDAuNyknLCB6SW5kZXg6IDAgfSxcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCUpIHNjYWxlKDAuODIpJywgekluZGV4OiAxIH0sXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC03OCUpIHNjYWxlKDAuNyknLCB6SW5kZXg6IDAgfVxuICBdLFxuXG4gIC8vIFNpbXBsZSBzbGlkZVxuICBzbGlkZTogW1xuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMDAlKScgfSxcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTEwMCUpJyB9XG4gIF0sXG5cbiAgLy8gU2xpZGUsIHdpdGggYSBnYXAgYmV0d2VlblxuICBzbGlkZVdpdGhHYXA6IFtcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTEwJSknIH0sXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xMTAlKScgfVxuICBdXG5cbn07XG5cblxuLypcbiAqIFNtb290aGx5IGFuaW1hdGUgdGhlIHNlbGVjdGlvbiBiZXR3ZWVuIHRoZSBpbmRpY2F0ZWQgXCJmcm9tXCIgYW5kIFwidG9cIlxuICogaW5kaWNlcy4gVGhlIGZvcm1lciBjYW4gYmUgYSBmcmFjdGlvbiwgZS5nLiwgd2hlbiB0aGUgdXNlciByZWxlYXNlcyBhIGZpbmdlclxuICogdG8gY29tcGxldGUgYSB0b3VjaCBkcmFnLCBhbmQgdGhlIHNlbGVjdGlvbiB3aWxsIHNuYXAgdG8gdGhlIGNsb3Nlc3Qgd2hvbGVcbiAqIGluZGV4LlxuICovXG5mdW5jdGlvbiBhbmltYXRlU2VsZWN0aW9uKGVsZW1lbnQsIGZyb21TZWxlY3Rpb24sIHRvU2VsZWN0aW9uKSB7XG5cbiAgcmVzZXRBbmltYXRpb25zKGVsZW1lbnQpO1xuXG4gIC8vIENhbGN1bGF0ZSB0aGUgYW5pbWF0aW9uIHRpbWluZ3MuXG4gIGNvbnN0IGl0ZW1zID0gZWxlbWVudC5pdGVtcztcbiAgY29uc3Qga2V5ZnJhbWVzID0gZWxlbWVudC5zZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXM7XG4gIGVsZW1lbnRbcGxheWluZ0FuaW1hdGlvblN5bWJvbF0gPSB0cnVlO1xuICBjb25zdCB0aW1pbmdzID0gbWl4aW4uaGVscGVycy5lZmZlY3RUaW1pbmdzRm9yU2VsZWN0aW9uQW5pbWF0aW9uKGVsZW1lbnQsIGZyb21TZWxlY3Rpb24sIHRvU2VsZWN0aW9uKTtcblxuICAvLyBGaWd1cmUgb3V0IHdoaWNoIGl0ZW0gd2lsbCBiZSB0aGUgb25lICphZnRlciogdGhlIG9uZSB3ZSdyZSBzZWxlY3RpbmcuXG4gIGNvbnN0IGl0ZW1Db3VudCA9IGl0ZW1zLmxlbmd0aDtcbiAgY29uc3Qgc2VsZWN0aW9uV3JhcHMgPSBlbGVtZW50LnNlbGVjdGlvbldyYXBzO1xuICBjb25zdCBzZWxlY3Rpb25JbmRleCA9IEZyYWN0aW9uYWxTZWxlY3Rpb24uaGVscGVycy5zZWxlY3Rpb25QYXJ0cyh0b1NlbGVjdGlvbiwgaXRlbUNvdW50LCBzZWxlY3Rpb25XcmFwcykuaW5kZXg7XG4gIGNvbnN0IHRvdGFsU3RlcHMgPSBzdGVwc1RvSW5kZXgoaXRlbUNvdW50LCBzZWxlY3Rpb25XcmFwcywgZnJvbVNlbGVjdGlvbiwgdG9TZWxlY3Rpb24pO1xuICBjb25zdCBmb3J3YXJkID0gdG90YWxTdGVwcyA+PSAwO1xuICBsZXQgbmV4dFVwSW5kZXggPSBzZWxlY3Rpb25JbmRleCArIChmb3J3YXJkID8gMSA6IC0gMSk7XG4gIGlmIChzZWxlY3Rpb25XcmFwcykge1xuICAgIG5leHRVcEluZGV4ID0gRnJhY3Rpb25hbFNlbGVjdGlvbi5oZWxwZXJzLndyYXBwZWRTZWxlY3Rpb24obmV4dFVwSW5kZXgsIGl0ZW1Db3VudCk7XG4gIH0gZWxzZSBpZiAoIWlzSXRlbUluZGV4SW5Cb3VuZHMoZWxlbWVudCwgbmV4dFVwSW5kZXgpKSB7XG4gICAgbmV4dFVwSW5kZXggPSBudWxsOyAvLyBBdCBzdGFydC9lbmQgb2YgbGlzdDsgZG9uJ3QgaGF2ZSBhIG5leHQgaXRlbSB0byBzaG93LlxuICB9XG5cbiAgLy8gUGxheSB0aGUgYW5pbWF0aW9ucyB1c2luZyB0aG9zZSB0aW1pbmdzLlxuICBsZXQgbGFzdEFuaW1hdGlvbkRldGFpbHM7XG4gIHRpbWluZ3MuZm9yRWFjaCgodGltaW5nLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1tpbmRleF07XG4gICAgaWYgKHRpbWluZykge1xuICAgICAgc2hvd0l0ZW0oaXRlbSwgdHJ1ZSk7XG4gICAgICBjb25zdCBhbmltYXRpb24gPSBpdGVtLmFuaW1hdGUoa2V5ZnJhbWVzLCB0aW1pbmcpO1xuICAgICAgZWxlbWVudFthbmltYXRpb25TeW1ib2xdW2luZGV4XSA9IGFuaW1hdGlvbjtcbiAgICAgIGlmIChpbmRleCA9PT0gbmV4dFVwSW5kZXgpIHtcbiAgICAgICAgLy8gVGhpcyBpdGVtIHdpbGwgYmUgYW5pbWF0ZWQsIHNvIHdpbGwgYWxyZWFkeSBiZSBpbiB0aGUgZGVzaXJlZCBzdGF0ZVxuICAgICAgICAvLyBhZnRlciB0aGUgYW5pbWF0aW9uIGNvbXBsZXRlcy5cbiAgICAgICAgbmV4dFVwSW5kZXggPSBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKHRpbWluZy5lbmREZWxheSAhPT0gMCkge1xuICAgICAgICAvLyBUaGlzIGlzIHRoZSBhbmltYXRpb24gZm9yIHRoZSBpdGVtIHRoYXQgd2lsbCBiZSBsZWZ0IHNlbGVjdGVkLlxuICAgICAgICAvLyBXZSB3YW50IHRvIGNsZWFuIHVwIHdoZW4gdGhpcyBhbmltYXRpb24gY29tcGxldGVzLlxuICAgICAgICBsYXN0QW5pbWF0aW9uRGV0YWlscyA9IHsgYW5pbWF0aW9uLCBpbmRleCwgdGltaW5nLCBmb3J3YXJkIH07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoaXMgaXRlbSBkb2Vzbid0IHBhcnRpY2lwYXRlIGluIHRoZSBhbmltYXRpb24uXG4gICAgICBzaG93SXRlbShpdGVtLCBmYWxzZSk7XG4gICAgfVxuICB9KTtcblxuICBpZiAobGFzdEFuaW1hdGlvbkRldGFpbHMgIT0gbnVsbCkge1xuICAgIC8vIEFycmFuZ2UgZm9yIGNsZWFuLXVwIHdvcmsgdG8gYmUgcGVyZm9ybWVkLlxuICAgIGxhc3RBbmltYXRpb25EZXRhaWxzLm5leHRVcEluZGV4ID0gbmV4dFVwSW5kZXg7XG4gICAgbGFzdEFuaW1hdGlvbkRldGFpbHMuYW5pbWF0aW9uLm9uZmluaXNoID0gZXZlbnQgPT4gc2VsZWN0aW9uQW5pbWF0aW9uRmluaXNoZWQoZWxlbWVudCwgbGFzdEFuaW1hdGlvbkRldGFpbHMpO1xuICAgIGVsZW1lbnRbbGFzdEFuaW1hdGlvblN5bWJvbF0gPSBsYXN0QW5pbWF0aW9uRGV0YWlscy5hbmltYXRpb247XG4gIH0gZWxzZSB7XG4gICAgLy8gU2hvdWxkbid0IGhhcHBlbiAtLSB3ZSBzaG91bGQgYWx3YXlzIGhhdmUgYXQgbGVhc3Qgb25lIGFuaW1hdGlvbi5cbiAgICBlbGVtZW50W3BsYXlpbmdBbmltYXRpb25TeW1ib2xdID0gZmFsc2U7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBnZXRBbmltYXRpb25Gb3JJdGVtSW5kZXgoZWxlbWVudCwgaW5kZXgpIHtcbiAgaWYgKGVsZW1lbnRbYW5pbWF0aW9uU3ltYm9sXSA9PSBudWxsKSB7XG4gICAgLy8gTm90IHJlYWR5IHlldDtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBsZXQgYW5pbWF0aW9uID0gZWxlbWVudFthbmltYXRpb25TeW1ib2xdW2luZGV4XTtcbiAgaWYgKCFhbmltYXRpb24pIHtcbiAgICBjb25zdCBpdGVtID0gZWxlbWVudC5pdGVtc1tpbmRleF07XG4gICAgYW5pbWF0aW9uID0gaXRlbS5hbmltYXRlKGVsZW1lbnQuc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzLCB7XG4gICAgICBkdXJhdGlvbjogZWxlbWVudC5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbixcbiAgICAgIGZpbGw6ICdib3RoJ1xuICAgIH0pO1xuICAgIGFuaW1hdGlvbi5wYXVzZSgpO1xuICAgIGVsZW1lbnRbYW5pbWF0aW9uU3ltYm9sXVtpbmRleF0gPSBhbmltYXRpb247XG4gIH1cbiAgcmV0dXJuIGFuaW1hdGlvbjtcbn1cblxuZnVuY3Rpb24gaXNJdGVtSW5kZXhJbkJvdW5kcyhlbGVtZW50LCBpbmRleCkge1xuICByZXR1cm4gaW5kZXggPj0gMCAmJiBlbGVtZW50Lml0ZW1zICYmIGluZGV4IDwgZWxlbWVudC5pdGVtcy5sZW5ndGg7XG59XG5cbi8qXG4gKiBSZW5kZXIgdGhlIHNlbGVjdGlvbiBzdGF0ZSBvZiB0aGUgZWxlbWVudC5cbiAqXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIHJlLXJlbmRlciBhIHByZXZpb3VzIHNlbGVjdGlvbiBzdGF0ZSAoaWYgdGhlXG4gKiBzZWxlY3RlZEluZGV4IHBhcmFtIGlzIG9taXR0ZWQpLCByZW5kZXIgdGhlIHNlbGVjdGlvbiBpbnN0YW50bHkgYXQgYSBnaXZlblxuICogd2hvbGUgb3IgZnJhY3Rpb25hbCBzZWxlY3Rpb24gaW5kZXgsIG9yIGFuaW1hdGUgdG8gYSBnaXZlbiBzZWxlY3Rpb24gaW5kZXguXG4gKlxuICogVGhlcmUgYXJlIHNldmVyYWwgZGlzdGluY3Qgc2NlbmFyaW9zIHdlIG5lZWQgdG8gY292ZXI6XG4gKlxuICogMS4gSW5pdGlhbCBwb3NpdGlvbmluZywgb3IgcmVwb3NpdGlvbmluZyBhZnRlciBjaGFuZ2luZyBhIHByb3BlcnR5IGxpa2VcbiAqICAgIHNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcyB0aGF0IGFmZmVjdHMgcmVuZGVyaW5nLlxuICogMi4gQW5pbWF0ZSBvbiBzZWxlY3RlZEluZGV4IGNoYW5nZS4gVGhpcyBzaG91bGQgb3ZlcnJpZGUgYW55IGFuaW1hdGlvbi9zd2lwZVxuICogICAgYWxyZWFkeSBpbiBwcm9ncmVzcy5cbiAqIDMuIEluc3RhbnRseSByZW5kZXIgdGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgYSBkcmFnIG9wZXJhdGlvbiBpbiBwcm9ncmVzcy5cbiAqIDQuIENvbXBsZXRlIGEgZHJhZyBvcGVyYXRpb24uIElmIHRoZSBkcmFnIHdhc24ndCBmYXIgZW5vdWdoIHRvIGFmZmVjdFxuICogICAgc2VsZWN0aW9uLCB3ZSdsbCBqdXN0IGJlIHJlc3RvcmluZyB0aGUgc2VsZWN0ZWRGcmFjdGlvbiB0byAwLlxuICpcbiAqIElmIHRoZSBsaXN0IGRvZXMgbm90IHdyYXAsIGFueSBzZWxlY3Rpb24gcG9zaXRpb24gb3V0c2lkZSB0aGUgbGlzdCdzIGJvdW5kc1xuICogd2lsbCBiZSBkYW1wZWQgdG8gcHJvZHVjZSBhIHZpc3VhbCBlZmZlY3Qgb2YgdGVuc2lvbi5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyU2VsZWN0aW9uKGVsZW1lbnQsIHNlbGVjdGVkSW5kZXg9ZWxlbWVudC5zZWxlY3RlZEluZGV4LCBzZWxlY3RlZEZyYWN0aW9uPWVsZW1lbnQuc2VsZWN0ZWRGcmFjdGlvbikge1xuICBjb25zdCBpdGVtQ291bnQgPSBlbGVtZW50Lml0ZW1zID8gZWxlbWVudC5pdGVtcy5sZW5ndGggOiAwO1xuICBpZiAoaXRlbUNvdW50ID09PSAwKSB7XG4gICAgLy8gTm90aGluZyB0byByZW5kZXIuXG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChzZWxlY3RlZEluZGV4IDwgMCkge1xuICAgIC8vIFRPRE86IEhhbmRsZSBubyBzZWxlY3Rpb24uXG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBzZWxlY3Rpb24gPSBzZWxlY3RlZEluZGV4ICsgc2VsZWN0ZWRGcmFjdGlvbjtcbiAgaWYgKGVsZW1lbnQuc2VsZWN0aW9uV3JhcHMpIHtcbiAgICAvLyBBcHBseSB3cmFwcGluZyB0byBlbnN1cmUgY29uc2lzdGVudCByZXByZXNlbnRhdGlvbiBvZiBzZWxlY3Rpb24uXG4gICAgc2VsZWN0aW9uID0gRnJhY3Rpb25hbFNlbGVjdGlvbi5oZWxwZXJzLndyYXBwZWRTZWxlY3Rpb24oc2VsZWN0aW9uLCBpdGVtQ291bnQpO1xuICB9IGVsc2Uge1xuICAgIC8vIEFwcGx5IGRhbXBpbmcgaWYgbmVjZXNzYXJ5LlxuICAgIHNlbGVjdGlvbiA9IEZyYWN0aW9uYWxTZWxlY3Rpb24uaGVscGVycy5kYW1wZWRTZWxlY3Rpb24oc2VsZWN0aW9uLCBpdGVtQ291bnQpO1xuICB9XG4gIGNvbnN0IHByZXZpb3VzU2VsZWN0aW9uID0gZWxlbWVudFtwcmV2aW91c1NlbGVjdGlvblN5bWJvbF07XG4gIGlmICghZWxlbWVudFtzeW1ib2xzLmRyYWdnaW5nXSAmJiBwcmV2aW91c1NlbGVjdGlvbiAhPSBudWxsICYmXG4gICAgICBwcmV2aW91c1NlbGVjdGlvbiAhPT0gc2VsZWN0aW9uKSB7XG4gICAgLy8gQW5pbWF0ZSBzZWxlY3Rpb24gZnJvbSBwcmV2aW91cyBzdGF0ZSB0byBuZXcgc3RhdGUuXG4gICAgYW5pbWF0ZVNlbGVjdGlvbihlbGVtZW50LCBwcmV2aW91c1NlbGVjdGlvbiwgc2VsZWN0aW9uKTtcbiAgfSBlbHNlIGlmIChzZWxlY3RlZEZyYWN0aW9uID09PSAwICYmIGVsZW1lbnRbcGxheWluZ0FuaW1hdGlvblN5bWJvbF0pIHtcbiAgICAvLyBBbHJlYWR5IGluIHByb2Nlc3Mgb2YgYW5pbWF0aW5nIHRvIGZyYWN0aW9uIDAuIER1cmluZyB0aGF0IHByb2Nlc3MsXG4gICAgLy8gaWdub3JlIHN1YnNlcXVlbnQgYXR0ZW1wdHMgdG8gcmVuZGVyU2VsZWN0aW9uIHRvIGZyYWN0aW9uIDAuXG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIC8vIFJlbmRlciBjdXJyZW50IHNlbGVjdGlvbiBzdGF0ZSBpbnN0YW50bHkuXG4gICAgcmVuZGVyU2VsZWN0aW9uSW5zdGFudGx5KGVsZW1lbnQsIHNlbGVjdGlvbik7XG4gIH1cbiAgZWxlbWVudFtwcmV2aW91c1NlbGVjdGlvblN5bWJvbF0gPSBzZWxlY3Rpb247XG59XG5cbi8qXG4gKiBJbnN0YW50bHkgcmVuZGVyIChkb24ndCBhbmltYXRlKSB0aGUgZWxlbWVudCdzIGl0ZW1zIGF0IHRoZSBnaXZlbiB3aG9sZSBvclxuICogZnJhY3Rpb25hbCBzZWxlY3Rpb24gaW5kZXguXG4gKi9cbmZ1bmN0aW9uIHJlbmRlclNlbGVjdGlvbkluc3RhbnRseShlbGVtZW50LCB0b1NlbGVjdGlvbikge1xuICBpZiAoZWxlbWVudFtyZXNldEFuaW1hdGlvbnNPbk5leHRSZW5kZXJTeW1ib2xdKSB7XG4gICAgcmVzZXRBbmltYXRpb25zKGVsZW1lbnQpO1xuICAgIGVsZW1lbnRbcmVzZXRBbmltYXRpb25zT25OZXh0UmVuZGVyU3ltYm9sXSA9IGZhbHNlO1xuICB9XG4gIGNvbnN0IGFuaW1hdGlvbkZyYWN0aW9ucyA9IG1peGluLmhlbHBlcnMuYW5pbWF0aW9uRnJhY3Rpb25zRm9yU2VsZWN0aW9uKGVsZW1lbnQsIHRvU2VsZWN0aW9uKTtcbiAgYW5pbWF0aW9uRnJhY3Rpb25zLm1hcCgoYW5pbWF0aW9uRnJhY3Rpb24sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IGVsZW1lbnQuaXRlbXNbaW5kZXhdO1xuICAgIGlmIChhbmltYXRpb25GcmFjdGlvbiAhPSBudWxsKSB7XG4gICAgICBzaG93SXRlbShpdGVtLCB0cnVlKTtcbiAgICAgIHNldEFuaW1hdGlvbkZyYWN0aW9uKGVsZW1lbnQsIGluZGV4LCBhbmltYXRpb25GcmFjdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3dJdGVtKGl0ZW0sIGZhbHNlKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKlxuICogV2UgbWFpbnRhaW4gYW4gYXJyYXkgY29udGFpbmluZyBhbiBhbmltYXRpb24gcGVyIGl0ZW0uIFRoaXMgaXMgdXNlZCBmb3IgdHdvXG4gKiByZWFzb25zOlxuICpcbiAqICogRHVyaW5nIGEgZHJhZyBvcGVyYXRpb24sIHdlIHdhbnQgdG8gYmUgYWJsZSB0byByZXVzZSBhbmltYXRpb25zIGJldHdlZW5cbiAqICAgZHJhZyB1cGRhdGVzLlxuICogKiBXaGVuIGEgc2VsZWN0aW9uIGFuaW1hdGlvbiBjb21wbGV0ZXMsIHdlIG5lZWQgdG8gYmUgYWJsZSB0byBsZWF2ZSB0aGVcbiAqICAgdmlzaWJpbGUgaXRlbXMgaW4gYSBwYXVzZWQgc3RhdGUuIExhdGVyLCB3ZSdsbCB3YW50IHRvIGJlIGFibGUgdG8gY2xlYW4gdXBcbiAqICAgdGhvc2UgYW5pbWF0aW9ucy5cbiAqXG4gKiBOb3RlIHRoYXQgdGhpcyBhcnJheSBpcyBzcGFyc2U6IGl0IHdpbGwgb25seSBob2xkIHVwIGZyb20gMOKAkzMgYW5pbWF0aW9ucyBhdFxuICogYW55IGdpdmVuIHBvaW50LlxuICovXG5mdW5jdGlvbiByZXNldEFuaW1hdGlvbnMoZWxlbWVudCkge1xuICBjb25zdCBhbmltYXRpb25zID0gZWxlbWVudFthbmltYXRpb25TeW1ib2xdO1xuICBpZiAoYW5pbWF0aW9ucykge1xuICAgIC8vIENhbmNlbCBleGlzdGluZyBhbmltYXRpb25zIHRvIHJlbW92ZSB0aGUgZWZmZWN0cyB0aGV5J3JlIGFwcGx5aW5nLlxuICAgIGFuaW1hdGlvbnMuZm9yRWFjaCgoYW5pbWF0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGFuaW1hdGlvbikge1xuICAgICAgICBhbmltYXRpb24uY2FuY2VsKCk7XG4gICAgICAgIGFuaW1hdGlvbnNbaW5kZXhdID0gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBjb25zdCBpdGVtQ291bnQgPSBlbGVtZW50Lml0ZW1zID8gZWxlbWVudC5pdGVtcy5sZW5ndGggOiAwO1xuICBpZiAoIWFuaW1hdGlvbnMgfHwgYW5pbWF0aW9ucy5sZW5ndGggIT09IGl0ZW1Db3VudCkge1xuICAgIC8vIEhhdmVuJ3QgYW5pbWF0ZWQgYmVmb3JlIHdpdGggdGhpcyBudW1iZXIgb2YgaXRlbXM7IChyZSljcmVhdGUgYXJyYXkuXG4gICAgZWxlbWVudFthbmltYXRpb25TeW1ib2xdID0gbmV3IEFycmF5KGl0ZW1Db3VudCk7XG4gIH1cbn1cblxuLypcbiAqIFRoZSBsYXN0IGFuaW1hdGlvbiBpbiBvdXIgc2VsZWN0aW9uIGFuaW1hdGlvbiBoYXMgY29tcGxldGVkLiBDbGVhbiB1cC5cbiAqL1xuZnVuY3Rpb24gc2VsZWN0aW9uQW5pbWF0aW9uRmluaXNoZWQoZWxlbWVudCwgZGV0YWlscykge1xuXG4gIC8vIFdoZW4gdGhlIGxhc3QgYW5pbWF0aW9uIGNvbXBsZXRlcywgc2hvdyB0aGUgbmV4dCBpdGVtIGluIHRoZSBkaXJlY3Rpb25cbiAgLy8gd2UncmUgZ29pbmcuIFdhaXRpbmcgdG8gdGhhdCB1bnRpbCB0aGlzIHBvaW50IGlzIGEgYml0IG9mIGEgaGFjayB0byBhdm9pZFxuICAvLyBoYXZpbmcgYSBuZXh0IGl0ZW0gdGhhdCdzIGhpZ2hlciBpbiB0aGUgbmF0dXJhbCB6LW9yZGVyIG9ic2N1cmUgb3RoZXIgaXRlbXNcbiAgLy8gZHVyaW5nIGFuaW1hdGlvbi5cbiAgY29uc3QgbmV4dFVwSW5kZXggPSBkZXRhaWxzLm5leHRVcEluZGV4O1xuICBpZiAobmV4dFVwSW5kZXggIT0gbnVsbCkge1xuICAgIGlmIChlbGVtZW50W2FuaW1hdGlvblN5bWJvbF1bbmV4dFVwSW5kZXhdKSB7XG4gICAgICAvLyBDYW5jZWwgZXhpc3Rpbmcgc2VsZWN0aW9uIGFuaW1hdGlvbiBzbyB3ZSBjYW4gY29uc3RydWN0IGEgbmV3IG9uZS5cbiAgICAgIGVsZW1lbnRbYW5pbWF0aW9uU3ltYm9sXVtuZXh0VXBJbmRleF0uY2FuY2VsKCk7XG4gICAgICBlbGVtZW50W2FuaW1hdGlvblN5bWJvbF1bbmV4dFVwSW5kZXhdID0gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgYW5pbWF0aW9uRnJhY3Rpb24gPSBkZXRhaWxzLmZvcndhcmQgPyAwIDogMTtcbiAgICBzZXRBbmltYXRpb25GcmFjdGlvbihlbGVtZW50LCBuZXh0VXBJbmRleCwgYW5pbWF0aW9uRnJhY3Rpb24pO1xuICAgIHNob3dJdGVtKGVsZW1lbnQuaXRlbXNbbmV4dFVwSW5kZXhdLCB0cnVlKTtcbiAgfVxuXG4gIGVsZW1lbnRbbGFzdEFuaW1hdGlvblN5bWJvbF0ub25maW5pc2ggPSBudWxsO1xuICBlbGVtZW50W3BsYXlpbmdBbmltYXRpb25TeW1ib2xdID0gZmFsc2U7XG59XG5cbi8qXG4gKiBQYXVzZSB0aGUgaW5kaWNhdGVkIGFuaW1hdGlvbiBhbmQgaGF2ZSBpdCBzaG93IHRoZSBhbmltYXRpb24gYXQgdGhlIGdpdmVuXG4gKiBmcmFjdGlvbiAoYmV0d2VlbiAwIGFuZCAxKSBvZiB0aGUgd2F5IHRocm91Z2ggdGhlIGFuaW1hdGlvbi5cbiAqL1xuZnVuY3Rpb24gc2V0QW5pbWF0aW9uRnJhY3Rpb24oZWxlbWVudCwgaXRlbUluZGV4LCBmcmFjdGlvbikge1xuICBjb25zdCBhbmltYXRpb24gPSBnZXRBbmltYXRpb25Gb3JJdGVtSW5kZXgoZWxlbWVudCwgaXRlbUluZGV4KTtcbiAgaWYgKGFuaW1hdGlvbikge1xuICAgIGNvbnN0IGR1cmF0aW9uID0gZWxlbWVudC5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbjtcbiAgICBpZiAoZHVyYXRpb24pIHtcbiAgICAgIGFuaW1hdGlvbi5jdXJyZW50VGltZSA9IGZyYWN0aW9uICogZHVyYXRpb247XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dJdGVtKGl0ZW0sIGZsYWcpIHtcbiAgaXRlbS5zdHlsZS52aXNpYmlsaXR5ID0gZmxhZyA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nO1xufVxuXG4vKlxuICogRmlndXJlIG91dCBob3cgbWFueSBzdGVwcyBpdCB3aWxsIHRha2UgdG8gZ28gZnJvbSBmcm9tU2VsZWN0aW9uIHRvXG4gKiB0b1NlbGVjdGlvbi4gVG8gZ28gZnJvbSBpdGVtIDMgdG8gaXRlbSA0IGlzIG9uZSBzdGVwLlxuICpcbiAqIElmIHdyYXBwaW5nIGlzIGFsbG93ZWQsIHRoZW4gZ29pbmcgZnJvbSB0aGUgbGFzdCBpdGVtIHRvIHRoZSBmaXJzdCB3aWxsIHRha2VcbiAqIG9uZSBzdGVwIChmb3J3YXJkKSwgYW5kIGdvaW5nIGZyb20gdGhlIGZpcnN0IGl0ZW0gdG8gdGhlIGxhc3Qgd2lsbCB0YWtlIG9uZVxuICogc3RlcCAoYmFja3dhcmQpLlxuICovXG5mdW5jdGlvbiBzdGVwc1RvSW5kZXgobGVuZ3RoLCBhbGxvd1dyYXAsIGZyb21TZWxlY3Rpb24sIHRvU2VsZWN0aW9uKSB7XG4gIGxldCBzdGVwcyA9IHRvU2VsZWN0aW9uIC0gZnJvbVNlbGVjdGlvbjtcbiAgLy8gV3JhcHBpbmcgb25seSBraWNrcyBpbiB3aGVuIGxpc3QgaGFzIG1vcmUgdGhhbiAxIGl0ZW0uXG4gIGlmIChhbGxvd1dyYXAgJiYgbGVuZ3RoID4gMSkge1xuICAgIGNvbnN0IHdyYXBTdGVwcyA9IGxlbmd0aCAtIE1hdGguYWJzKHN0ZXBzKTtcbiAgICBpZiAod3JhcFN0ZXBzIDw9IDEpIHtcbiAgICAgIC8vIFNwZWNpYWwgY2FzZVxuICAgICAgc3RlcHMgPSBzdGVwcyA8IDAgP1xuICAgICAgICB3cmFwU3RlcHMgOiAgIC8vIFdyYXAgZm9yd2FyZCBmcm9tIGxhc3QgaXRlbSB0byBmaXJzdC5cbiAgICAgICAgLXdyYXBTdGVwczsgICAvLyBXcmFwIGJhY2t3YXJkIGZyb20gZmlyc3QgaXRlbSB0byBsYXN0LlxuICAgIH1cbiAgfVxuICByZXR1cm4gc3RlcHM7XG59XG4iLCJpbXBvcnQgQ29sbGVjdGl2ZSBmcm9tICcuL0NvbGxlY3RpdmUnO1xuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi9zeW1ib2xzJztcblxuXG4vLyBVc2VkIHRvIGFzc2lnbiB1bmlxdWUgSURzIHRvIGl0ZW0gZWxlbWVudHMgd2l0aG91dCBJRHMuXG5sZXQgaWRDb3VudCA9IDA7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTZWxlY3Rpb25BcmlhQWN0aXZlLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggdHJlYXRzIHRoZSBzZWxlY3RlZCBpdGVtIGluIGEgbGlzdCBhcyB0aGUgYWN0aXZlIGl0ZW0gaW4gQVJJQVxuICAgKiBhY2Nlc3NpYmlsaXR5IHRlcm1zLlxuICAgKlxuICAgKiBIYW5kbGluZyBBUklBIHNlbGVjdGlvbiBzdGF0ZSBwcm9wZXJseSBpcyBhY3R1YWxseSBxdWl0ZSBjb21wbGV4OlxuICAgKlxuICAgKiAqIFRoZSBpdGVtcyBpbiB0aGUgbGlzdCBuZWVkIHRvIGJlIGluZGljYXRlZCBhcyBwb3NzaWJsZSBpdGVtcyB2aWEgYW4gQVJJQVxuICAgKiAgIGByb2xlYCBhdHRyaWJ1dGUgdmFsdWUgc3VjaCBhcyBcIm9wdGlvblwiLlxuICAgKiAqIFRoZSBzZWxlY3RlZCBpdGVtIG5lZWQgdG8gYmUgbWFya2VkIGFzIHNlbGVjdGVkIGJ5IHNldHRpbmcgdGhlIGl0ZW0nc1xuICAgKiAgIGBhcmlhLXNlbGVjdGVkYCBhdHRyaWJ1dGUgdG8gdHJ1ZSAqYW5kKiB0aGUgb3RoZXIgaXRlbXMgbmVlZCBiZSBtYXJrZWQgYXNcbiAgICogICAqbm90KiBzZWxlY3RlZCBieSBzZXR0aW5nIGBhcmlhLXNlbGVjdGVkYCB0byBmYWxzZS5cbiAgICogKiBUaGUgb3V0ZXJtb3N0IGVsZW1lbnQgd2l0aCB0aGUga2V5Ym9hcmQgZm9jdXMgbmVlZHMgdG8gaGF2ZSBhdHRyaWJ1dGVzXG4gICAqICAgc2V0IG9uIGl0IHNvIHRoYXQgdGhlIHNlbGVjdGlvbiBpcyBrbm93YWJsZSBhdCB0aGUgbGlzdCBsZXZlbCB2aWEgdGhlXG4gICAqICAgYGFyaWEtYWN0aXZlZGVzY2VuZGFudGAgYXR0cmlidXRlLlxuICAgKiAqIFVzZSBvZiBgYXJpYS1hY3RpdmVkZXNjZW5kYW50YCBpbiB0dXJuIHJlcXVpcmVzIHRoYXQgYWxsIGl0ZW1zIGluIHRoZVxuICAgKiAgIGxpc3QgaGF2ZSBJRCBhdHRyaWJ1dGVzIGFzc2lnbmVkIHRvIHRoZW0uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gdHJpZXMgdG8gYWRkcmVzcyBhbGwgb2YgdGhlIGFib3ZlIHJlcXVpcmVtZW50cy4gVG8gdGhhdCBlbmQsXG4gICAqIHRoaXMgbWl4aW4gd2lsbCBhc3NpZ24gZ2VuZXJhdGVkIElEcyB0byBhbnkgaXRlbSB0aGF0IGRvZXNuJ3QgYWxyZWFkeSBoYXZlXG4gICAqIGFuIElELlxuICAgKlxuICAgKiBBUklBIHJlbGllcyBvbiBlbGVtZW50cyB0byBwcm92aWRlIGByb2xlYCBhdHRyaWJ1dGVzLiBUaGlzIG1peGluIHdpbGwgYXBwbHlcbiAgICogYSBkZWZhdWx0IHJvbGUgb2YgXCJsaXN0Ym94XCIgb24gdGhlIG91dGVyIGxpc3QgaWYgaXQgZG9lc24ndCBhbHJlYWR5IGhhdmUgYW5cbiAgICogZXhwbGljaXQgcm9sZS4gU2ltaWxhcmx5LCB0aGlzIG1peGluIHdpbGwgYXBwbHkgYSBkZWZhdWx0IHJvbGUgb2YgXCJvcHRpb25cIlxuICAgKiB0byBhbnkgbGlzdCBpdGVtIHRoYXQgZG9lcyBub3QgYWxyZWFkeSBoYXZlIGEgcm9sZSBzcGVjaWZpZWQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIHNldCBvZiBtZW1iZXJzIHRoYXQgbWFuYWdlIHRoZSBzdGF0ZSBvZiB0aGUgc2VsZWN0aW9uOlxuICAgKiBgW3N5bWJvbHMuYXBwbHlTZWxlY3Rpb25dYCwgYGl0ZW1BZGRlZGAsIGFuZCBgc2VsZWN0ZWRJbmRleGAuIFlvdSBjYW4gc3VwcGx5IHRoZXNlXG4gICAqIHlvdXJzZWxmLCBvciBkbyBzbyB2aWEgdGhlIFtTaW5nbGVTZWxlY3Rpb25dKFNpbmdsZVNlbGVjdGlvbi5tZCkgbWl4aW4uXG4gICAqL1xuICBjbGFzcyBTZWxlY3Rpb25BcmlhQWN0aXZlIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBbc3ltYm9scy5hcHBseVNlbGVjdGlvbl0oaXRlbSwgc2VsZWN0ZWQpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmFwcGx5U2VsZWN0aW9uXSkgeyBzdXBlcltzeW1ib2xzLmFwcGx5U2VsZWN0aW9uXShpdGVtLCBzZWxlY3RlZCk7IH1cbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgc2VsZWN0ZWQpO1xuICAgICAgY29uc3QgaXRlbUlkID0gaXRlbS5pZDtcbiAgICAgIGlmIChpdGVtSWQpIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgZ2V0T3V0ZXJtb3N0RWxlbWVudCh0aGlzKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsIGl0ZW1JZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb2xsZWN0aXZlQ2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5jb2xsZWN0aXZlQ2hhbmdlZCkgeyBzdXBlci5jb2xsZWN0aXZlQ2hhbmdlZCgpOyB9XG4gICAgICBzZXRBcmlhQXR0cmlidXRlcyh0aGlzKTtcbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG4gICAgICBzZXRBcmlhQXR0cmlidXRlcyh0aGlzKTtcbiAgICB9XG5cbiAgICBbc3ltYm9scy5pdGVtQWRkZWRdKGl0ZW0pIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLml0ZW1BZGRlZF0pIHsgc3VwZXJbc3ltYm9scy5pdGVtQWRkZWRdKGl0ZW0pOyB9XG5cbiAgICAgIGlmICghaXRlbS5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSkge1xuICAgICAgICAvLyBBc3NpZ24gYSBkZWZhdWx0IEFSSUEgcm9sZS5cbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnb3B0aW9uJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIEVuc3VyZSBlYWNoIGl0ZW0gaGFzIGFuIElEIHNvIHdlIGNhbiBzZXQgYXJpYS1hY3RpdmVkZXNjZW5kYW50IG9uIHRoZVxuICAgICAgLy8gb3ZlcmFsbCBsaXN0IHdoZW5ldmVyIHRoZSBzZWxlY3Rpb24gY2hhbmdlcy5cbiAgICAgIC8vXG4gICAgICAvLyBUaGUgSUQgd2lsbCB0YWtlIHRoZSBmb3JtIG9mIGEgYmFzZSBJRCBwbHVzIGEgdW5pcXVlIGludGVnZXIuIFRoZSBiYXNlXG4gICAgICAvLyBJRCB3aWxsIGJlIGluY29ycG9yYXRlIHRoZSBjb21wb25lbnQncyBvd24gSUQuIEUuZy4sIGlmIGEgY29tcG9uZW50IGhhc1xuICAgICAgLy8gSUQgXCJmb29cIiwgdGhlbiBpdHMgaXRlbXMgd2lsbCBoYXZlIElEcyB0aGF0IGxvb2sgbGlrZSBcIl9mb29PcHRpb24xXCIuIElmXG4gICAgICAvLyB0aGUgY29tcG5lbnQgaGFzIG5vIElEIGl0c2VsZiwgaXRzIGl0ZW1zIHdpbGwgZ2V0IElEcyB0aGF0IGxvb2sgbGlrZVxuICAgICAgLy8gXCJfb3B0aW9uMVwiLiBJdGVtIElEcyBhcmUgcHJlZml4ZWQgd2l0aCBhbiB1bmRlcnNjb3JlIHRvIGRpZmZlcmVudGlhdGVcbiAgICAgIC8vIHRoZW0gZnJvbSBtYW51YWxseS1hc3NpZ25lZCBJRHMsIGFuZCB0byBtaW5pbWl6ZSB0aGUgcG90ZW50aWFsIGZvciBJRFxuICAgICAgLy8gY29uZmxpY3RzLlxuICAgICAgaWYgKCFpdGVtLmlkKSB7XG4gICAgICAgIGNvbnN0IGJhc2VJZCA9IHRoaXMuaWQgP1xuICAgICAgICAgICAgXCJfXCIgKyB0aGlzLmlkICsgXCJPcHRpb25cIiA6XG4gICAgICAgICAgICBcIl9vcHRpb25cIjtcbiAgICAgICAgaXRlbS5pZCA9IGJhc2VJZCArIGlkQ291bnQrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkSXRlbTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkSXRlbShpdGVtKSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkSXRlbScgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtID0gaXRlbTsgfVxuICAgICAgaWYgKGl0ZW0gPT0gbnVsbCkge1xuICAgICAgICAvLyBTZWxlY3Rpb24gd2FzIHJlbW92ZWQuXG4gICAgICAgIGdldE91dGVybW9zdEVsZW1lbnQodGhpcykucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBTZWxlY3Rpb25BcmlhQWN0aXZlO1xufTtcblxuXG5mdW5jdGlvbiBnZXRPdXRlcm1vc3RFbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQuY29sbGVjdGl2ZSA/XG4gICAgZWxlbWVudC5jb2xsZWN0aXZlLm91dGVybW9zdEVsZW1lbnQgOlxuICAgIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHNldEFyaWFBdHRyaWJ1dGVzKGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50LmlzQ29ubmVjdGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIENvbGxlY3RpdmUucHJvbW90ZUF0dHJpYnV0ZShlbGVtZW50LCAnYXJpYS1hY3RpdmVkZXNjZW5kYW50Jyk7XG4gIENvbGxlY3RpdmUucHJvbW90ZUF0dHJpYnV0ZShlbGVtZW50LCAncm9sZScsICdsaXN0Ym94JywgJ25vbmUnKTtcbn1cbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggU2VsZWN0aW9uSGlnaGxpZ2h0LiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggYXBwbGllcyBzdGFuZGFyZCBoaWdobGlnaHQgY29sb3JzIHRvIGEgc2VsZWN0ZWQgaXRlbS5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBoaWdobGlnaHRzIHRleHR1YWwgaXRlbXMgKGUuZy4sIGluIGEgbGlzdCkgaW4gYSBzdGFuZGFyZCB3YXkgYnlcbiAgICogdXNpbmcgdGhlIENTUyBgaGlnaGxpZ2h0YCBhbmQgYGhpZ2hsaWdodHRleHRgIGNvbG9yIHZhbHVlcy4gVGhlc2UgdmFsdWVzXG4gICAqIHJlc3BlY3Qgb3BlcmF0aW5nIHN5c3RlbSBkZWZhdWx0cyBhbmQgdXNlciBwcmVmZXJlbmNlcywgYW5kIGhlbmNlIGFyZSBnb29kXG4gICAqIGRlZmF1bHQgdmFsdWVzIGZvciBoaWdobGlnaHQgY29sb3JzLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgYSBgc2VsZWN0ZWRgIGNsYXNzIHRvIGJlIGFwcGxpZWQgdG8gc2VsZWN0ZWQgaXRlbXMuIFlvdVxuICAgKiBjYW4gdXNlIHRoZSBbQ29udGVudEFzSXRlbXNdKENvbnRlbnRBc0l0ZW1zLm1kKSBtaXhpbiBmb3IgdGhhdCBwdXJwb3NlLlxuICAgKi9cbiAgY2xhc3MgU2VsZWN0aW9uSGlnaGxpZ2h0IGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICBpZiAodGhpcy5zaGFkb3dSb290KSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgc3R5bGUuaW5uZXJIVE1MID0gYFxuICAgICAgICAgIDo6c2xvdHRlZCguc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhpZ2hsaWdodDtcbiAgICAgICAgICAgIGNvbG9yOiBoaWdobGlnaHR0ZXh0O1xuICAgICAgICAgIH1cbiAgICAgICAgYDtcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBTZWxlY3Rpb25IaWdobGlnaHQ7XG59O1xuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTZWxlY3Rpb25JblZpZXcuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBzY3JvbGxzIGEgY29udGFpbmVyIHRvIGVuc3VyZSB0aGF0IGEgbmV3bHktc2VsZWN0ZWQgaXRlbSBpc1xuICAgKiB2aXNpYmxlIHRvIHRoZSB1c2VyLlxuICAgKlxuICAgKiBXaGVuIHRoZSBzZWxlY3RlZCBpdGVtIGluIGEgbGlzdC1saWtlIGNvbXBvbmVudCBjaGFuZ2VzLCBpdCdzIGVhc2llciBmb3JcbiAgICogdGhlIHRvIGNvbmZpcm0gdGhhdCB0aGUgc2VsZWN0aW9uIGhhcyBjaGFuZ2VkIHRvIGFuIGFwcHJvcHJpYXRlIGl0ZW0gaWYgdGhlXG4gICAqIHVzZXIgY2FuIGFjdHVhbGx5IHNlZSB0aGF0IGl0ZW0uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIGBzZWxlY3RlZEl0ZW1gIHByb3BlcnR5IHRvIGJlIHNldCB3aGVuIHRoZSBzZWxlY3Rpb25cbiAgICogY2hhbmdlcy4gWW91IGNhbiBzdXBwbHkgdGhhdCB5b3Vyc2VsZiwgb3IgdXNlIHRoZVxuICAgKiBbU2luZ2xlU2VsZWN0aW9uXShTaW5nbGVTZWxlY3Rpb24ubWQpIG1peGluLlxuICAgKi9cbiAgY2xhc3MgU2VsZWN0aW9uSW5WaWV3IGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG4gICAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSB0aGlzLnNlbGVjdGVkSXRlbTtcbiAgICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgdGhpcy5zY3JvbGxJdGVtSW50b1ZpZXcoc2VsZWN0ZWRJdGVtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkSXRlbTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkSXRlbShpdGVtKSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkSXRlbScgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtID0gaXRlbTsgfVxuICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgLy8gS2VlcCB0aGUgc2VsZWN0ZWQgaXRlbSBpbiB2aWV3LlxuICAgICAgICB0aGlzLnNjcm9sbEl0ZW1JbnRvVmlldyhpdGVtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGwgdGhlIGdpdmVuIGVsZW1lbnQgY29tcGxldGVseSBpbnRvIHZpZXcsIG1pbmltaXppbmcgdGhlIGRlZ3JlZSBvZlxuICAgICAqIHNjcm9sbGluZyBwZXJmb3JtZWQuXG4gICAgICpcbiAgICAgKiBCbGluayBoYXMgYSBgc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZCgpYCBmdW5jdGlvbiB0aGF0IGRvZXMgc29tZXRoaW5nXG4gICAgICogc2ltaWxhciwgYnV0IHVuZm9ydHVuYXRlbHkgaXQncyBub24tc3RhbmRhcmQsIGFuZCBpbiBhbnkgZXZlbnQgb2Z0ZW4gZW5kc1xuICAgICAqIHVwIHNjcm9sbGluZyBtb3JlIHRoYW4gaXMgYWJzb2x1dGVseSBuZWNlc3NhcnkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gdGhlIGl0ZW0gdG8gc2Nyb2xsIGludG8gdmlldy5cbiAgICAgKi9cbiAgICBzY3JvbGxJdGVtSW50b1ZpZXcoaXRlbSkge1xuICAgICAgaWYgKHN1cGVyLnNjcm9sbEl0ZW1JbnRvVmlldykgeyBzdXBlci5zY3JvbGxJdGVtSW50b1ZpZXcoKTsgfVxuICAgICAgLy8gR2V0IHRoZSByZWxhdGl2ZSBwb3NpdGlvbiBvZiB0aGUgaXRlbSB3aXRoIHJlc3BlY3QgdG8gdGhlIHRvcCBvZiB0aGVcbiAgICAgIC8vIGxpc3QncyBzY3JvbGxhYmxlIGNhbnZhcy4gQW4gaXRlbSBhdCB0aGUgdG9wIG9mIHRoZSBsaXN0IHdpbGwgaGF2ZSBhXG4gICAgICAvLyBlbGVtZW50VG9wIG9mIDAuXG5cbiAgICAgIGNvbnN0IHNjcm9sbFRhcmdldCA9IHRoaXMuc2Nyb2xsVGFyZ2V0O1xuICAgICAgY29uc3QgZWxlbWVudFRvcCA9IGl0ZW0ub2Zmc2V0VG9wIC0gc2Nyb2xsVGFyZ2V0Lm9mZnNldFRvcCAtIHNjcm9sbFRhcmdldC5jbGllbnRUb3A7XG4gICAgICBjb25zdCBlbGVtZW50Qm90dG9tID0gZWxlbWVudFRvcCArIGl0ZW0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBib3R0b20gb2YgdGhlIHNjcm9sbGFibGUgY2FudmFzLlxuICAgICAgY29uc3Qgc2Nyb2xsQm90dG9tID0gc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCArIHNjcm9sbFRhcmdldC5jbGllbnRIZWlnaHQ7XG4gICAgICBpZiAoZWxlbWVudEJvdHRvbSA+IHNjcm9sbEJvdHRvbSkge1xuICAgICAgICAvLyBTY3JvbGwgdXAgdW50aWwgaXRlbSBpcyBlbnRpcmVseSB2aXNpYmxlLlxuICAgICAgICBzY3JvbGxUYXJnZXQuc2Nyb2xsVG9wICs9IGVsZW1lbnRCb3R0b20gLSBzY3JvbGxCb3R0b207XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChlbGVtZW50VG9wIDwgc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCkge1xuICAgICAgICAvLyBTY3JvbGwgZG93biB1bnRpbCBpdGVtIGlzIGVudGlyZWx5IHZpc2libGUuXG4gICAgICAgIHNjcm9sbFRhcmdldC5zY3JvbGxUb3AgPSBlbGVtZW50VG9wO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBlbGVtZW50IHRoYXQgc2hvdWxkIGJlIHNjcm9sbGVkIHRvIGJyaW5nIGFuIGl0ZW0gaW50byB2aWV3LlxuICAgICAqXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhpcyBwcm9wZXJ0eSBpcyB0aGUgZWxlbWVudCBpdHNlbGYuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgZ2V0IHNjcm9sbFRhcmdldCgpIHtcbiAgICAgIC8vIFByZWZlciBiYXNlIHJlc3VsdC5cbiAgICAgIHJldHVybiAnc2Nyb2xsVGFyZ2V0JyBpbiBiYXNlLnByb3RvdHlwZSA/IHN1cGVyLnNjcm9sbFRhcmdldCA6IHRoaXM7XG4gICAgfVxuICAgIHNldCBzY3JvbGxUYXJnZXQoZWxlbWVudCkge1xuICAgICAgaWYgKCdzY3JvbGxUYXJnZXQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNjcm9sbFRhcmdldCA9IGVsZW1lbnQ7IH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBTZWxlY3Rpb25JblZpZXc7XG59O1xuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcy4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHRvIGNyZWF0ZSByZWZlcmVuY2VzIHRvIGVsZW1lbnRzIGluIGEgY29tcG9uZW50J3MgU2hhZG93IERPTSBzdWJ0cmVlLlxuICAgKlxuICAgKiBUaGlzIGFkZHMgYSBtZW1iZXIgb24gdGhlIGNvbXBvbmVudCBjYWxsZWQgYHRoaXMuJGAgdGhhdCBjYW4gYmUgdXNlZCB0b1xuICAgKiByZWZlcmVuY2Ugc2hhZG93IGVsZW1lbnRzIHdpdGggSURzLiBFLmcuLCBpZiBjb21wb25lbnQncyBzaGFkb3cgY29udGFpbnMgYW5cbiAgICogZWxlbWVudCBgPGJ1dHRvbiBpZD1cImZvb1wiPmAsIHRoZW4gdGhpcyBtaXhpbiB3aWxsIGNyZWF0ZSBhIG1lbWJlclxuICAgKiBgdGhpcy4kLmZvb2AgdGhhdCBwb2ludHMgdG8gdGhhdCBidXR0b24uXG4gICAqXG4gICAqIFN1Y2ggcmVmZXJlbmNlcyBzaW1wbGlmeSBhIGNvbXBvbmVudCdzIGFjY2VzcyB0byBpdHMgb3duIGVsZW1lbnRzLiBJblxuICAgKiBleGNoYW5nZSwgdGhpcyBtaXhpbiB0cmFkZXMgb2ZmIGEgb25lLXRpbWUgY29zdCBvZiBxdWVyeWluZyBhbGwgZWxlbWVudHMgaW5cbiAgICogdGhlIHNoYWRvdyB0cmVlIGluc3RlYWQgb2YgcGF5aW5nIGFuIG9uZ29pbmcgY29zdCB0byBxdWVyeSBmb3IgYW4gZWxlbWVudFxuICAgKiBlYWNoIHRpbWUgdGhlIGNvbXBvbmVudCB3YW50cyB0byBpbnNwZWN0IG9yIG1hbmlwdWxhdGUgaXQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyB0aGUgY29tcG9uZW50IHRvIGRlZmluZSBhIFNoYWRvdyBET00gc3VidHJlZS4gWW91IGNhblxuICAgKiBjcmVhdGUgdGhhdCB0cmVlIHlvdXJzZWxmLCBvciBtYWtlIHVzZSBvZiB0aGVcbiAgICogW1NoYWRvd1RlbXBsYXRlXShTaGFkb3dUZW1wbGF0ZS5tZCkgbWl4aW4uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaXMgaW5zcGlyZWQgYnkgUG9seW1lcidzIFthdXRvbWF0aWNcbiAgICogbm9kZSBmaW5kaW5nXShodHRwczovL3d3dy5wb2x5bWVyLXByb2plY3Qub3JnLzEuMC9kb2NzL2Rldmd1aWRlL2xvY2FsLWRvbS5odG1sI25vZGUtZmluZGluZylcbiAgICogZmVhdHVyZS5cbiAgICovXG4gIGNsYXNzIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICBpZiAodGhpcy5zaGFkb3dSb290KSB7XG4gICAgICAgIC8vIExvb2sgZm9yIGVsZW1lbnRzIGluIHRoZSBzaGFkb3cgc3VidHJlZSB0aGF0IGhhdmUgaWQgYXR0cmlidXRlcy5cbiAgICAgICAgLy8gQW4gYWx0ZXJuYXRpdmVseSBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1peGluIHdvdWxkIGJlIHRvIGp1c3QgZGVmaW5lXG4gICAgICAgIC8vIGEgdGhpcy4kIGdldHRlciB0aGF0IGxhemlseSBkb2VzIHRoaXMgc2VhcmNoIHRoZSBmaXJzdCB0aW1lIHNvbWVvbmVcbiAgICAgICAgLy8gdHJpZXMgdG8gYWNjZXNzIHRoaXMuJC4gVGhhdCBtaWdodCBpbnRyb2R1Y2Ugc29tZSBjb21wbGV4aXR5IOKAkyBpZiB0aGVcbiAgICAgICAgLy8gdGhlIHRyZWUgY2hhbmdlZCBhZnRlciBpdCB3YXMgZmlyc3QgcG9wdWxhdGVkLCB0aGUgcmVzdWx0IG9mXG4gICAgICAgIC8vIHNlYXJjaGluZyBmb3IgYSBub2RlIG1pZ2h0IGJlIHNvbWV3aGF0IHVucHJlZGljdGFibGUuXG4gICAgICAgIHRoaXMuJCA9IHt9O1xuICAgICAgICBjb25zdCBub2Rlc1dpdGhJZHMgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbCgnW2lkXScpO1xuICAgICAgICBbXS5mb3JFYWNoLmNhbGwobm9kZXNXaXRoSWRzLCBub2RlID0+IHtcbiAgICAgICAgICBjb25zdCBpZCA9IG5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICAgIHRoaXMuJFtpZF0gPSBub2RlO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29sbGVjdGlvbiBvZiByZWZlcmVuY2VzIHRvIHRoZSBlbGVtZW50cyB3aXRoIElEcyBpbiBhIGNvbXBvbmVudCdzXG4gICAgICogU2hhZG93IERPTSBzdWJ0cmVlLlxuICAgICAqXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKiBAbWVtYmVyICRcbiAgICAgKi9cbiAgfVxuXG4gIHJldHVybiBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcztcbn07XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFNoYWRvd1RlbXBsYXRlLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gZm9yIHN0YW1waW5nIGEgdGVtcGxhdGUgaW50byBhIFNoYWRvdyBET00gc3VidHJlZSB1cG9uIGNvbXBvbmVudFxuICAgKiBpbnN0YW50aWF0aW9uLlxuICAgKlxuICAgKiBUbyB1c2UgdGhpcyBtaXhpbiwgZGVmaW5lIGEgYHRlbXBsYXRlYCBwcm9wZXJ0eSBhcyBhIHN0cmluZyBvciBIVE1MXG4gICAqIGA8dGVtcGxhdGU+YCBlbGVtZW50OlxuICAgKlxuICAgKiAgICAgY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgU2hhZG93VGVtcGxhdGUoSFRNTEVsZW1lbnQpIHtcbiAgICogICAgICAgZ2V0IHRlbXBsYXRlKCkge1xuICAgKiAgICAgICAgIHJldHVybiBgSGVsbG8sIDxlbT53b3JsZDwvZW0+LmA7XG4gICAqICAgICAgIH1cbiAgICogICAgIH1cbiAgICpcbiAgICogV2hlbiB5b3VyIGNvbXBvbmVudCBjbGFzcyBpcyBpbnN0YW50aWF0ZWQsIGEgc2hhZG93IHJvb3Qgd2lsbCBiZSBjcmVhdGVkIG9uXG4gICAqIHRoZSBpbnN0YW5jZSwgYW5kIHRoZSBjb250ZW50cyBvZiB0aGUgdGVtcGxhdGUgd2lsbCBiZSBjbG9uZWQgaW50byB0aGVcbiAgICogc2hhZG93IHJvb3QuIElmIHlvdXIgY29tcG9uZW50IGRvZXMgbm90IGRlZmluZSBhIGB0ZW1wbGF0ZWAgcHJvcGVydHksIHRoaXNcbiAgICogbWl4aW4gaGFzIG5vIGVmZmVjdC5cbiAgICpcbiAgICogRm9yIHRoZSB0aW1lIGJlaW5nLCB0aGlzIGV4dGVuc2lvbiByZXRhaW5zIHN1cHBvcnQgZm9yIFNoYWRvdyBET00gdjAuIFRoYXRcbiAgICogd2lsbCBldmVudHVhbGx5IGJlIGRlcHJlY2F0ZWQgYXMgYnJvd3NlcnMgKGFuZCB0aGUgU2hhZG93IERPTSBwb2x5ZmlsbClcbiAgICogaW1wbGVtZW50IFNoYWRvdyBET00gdjEuXG4gICAqL1xuICBjbGFzcyBTaGFkb3dUZW1wbGF0ZSBleHRlbmRzIGJhc2Uge1xuXG4gICAgLypcbiAgICAgKiBJZiB0aGUgY29tcG9uZW50IGRlZmluZXMgYSB0ZW1wbGF0ZSwgYSBzaGFkb3cgcm9vdCB3aWxsIGJlIGNyZWF0ZWQgb24gdGhlXG4gICAgICogY29tcG9uZW50IGluc3RhbmNlLCBhbmQgdGhlIHRlbXBsYXRlIHN0YW1wZWQgaW50byBpdC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICBsZXQgdGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlO1xuICAgICAgLy8gVE9ETzogU2F2ZSB0aGUgcHJvY2Vzc2VkIHRlbXBsYXRlIHdpdGggdGhlIGNvbXBvbmVudCdzIGNsYXNzIHByb3RvdHlwZVxuICAgICAgLy8gc28gaXQgZG9lc24ndCBuZWVkIHRvIGJlIHByb2Nlc3NlZCB3aXRoIGV2ZXJ5IGluc3RhbnRpYXRpb24uXG4gICAgICBpZiAodGVtcGxhdGUpIHtcblxuICAgICAgICBpZiAodHlwZW9mIHRlbXBsYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIC8vIFVwZ3JhZGUgcGxhaW4gc3RyaW5nIHRvIHJlYWwgdGVtcGxhdGUuXG4gICAgICAgICAgdGVtcGxhdGUgPSBjcmVhdGVUZW1wbGF0ZVdpdGhJbm5lckhUTUwodGVtcGxhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdpbmRvdy5TaGFkb3dET01Qb2x5ZmlsbCkge1xuICAgICAgICAgIHNoaW1UZW1wbGF0ZVN0eWxlcyh0ZW1wbGF0ZSwgdGhpcy5sb2NhbE5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgcm9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICBjb25zdCBjbG9uZSA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUuY29udGVudCwgdHJ1ZSk7XG4gICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFNoYWRvd1RlbXBsYXRlO1xufTtcblxuXG4vLyBDb252ZXJ0IGEgcGxhaW4gc3RyaW5nIG9mIEhUTUwgaW50byBhIHJlYWwgdGVtcGxhdGUgZWxlbWVudC5cbmZ1bmN0aW9uIGNyZWF0ZVRlbXBsYXRlV2l0aElubmVySFRNTChpbm5lckhUTUwpIHtcbiAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAvLyBSRVZJRVc6IElzIHRoZXJlIGFuIGVhc2llciB3YXkgdG8gZG8gdGhpcz9cbiAgLy8gV2UnZCBsaWtlIHRvIGp1c3Qgc2V0IGlubmVySFRNTCBvbiB0aGUgdGVtcGxhdGUgY29udGVudCwgYnV0IHNpbmNlIGl0J3NcbiAgLy8gYSBEb2N1bWVudEZyYWdtZW50LCB0aGF0IGRvZXNuJ3Qgd29yay5cbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gIHdoaWxlIChkaXYuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgdGVtcGxhdGUuY29udGVudC5hcHBlbmRDaGlsZChkaXYuY2hpbGROb2Rlc1swXSk7XG4gIH1cbiAgcmV0dXJuIHRlbXBsYXRlO1xufVxuXG4vLyBJbnZva2UgYmFzaWMgc3R5bGUgc2hpbW1pbmcgd2l0aCBTaGFkb3dDU1MuXG5mdW5jdGlvbiBzaGltVGVtcGxhdGVTdHlsZXModGVtcGxhdGUsIHRhZykge1xuICB3aW5kb3cuV2ViQ29tcG9uZW50cy5TaGFkb3dDU1Muc2hpbVN0eWxpbmcodGVtcGxhdGUuY29udGVudCwgdGFnKTtcbn1cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IG1pY3JvdGFzayBmcm9tICcuL21pY3JvdGFzayc7XG5pbXBvcnQgc3ltYm9scyBmcm9tICcuL3N5bWJvbHMnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBjYW5TZWxlY3ROZXh0U3ltYm9sID0gY3JlYXRlU3ltYm9sKCdjYW5TZWxlY3ROZXh0Jyk7XG5jb25zdCBjYW5TZWxlY3RQcmV2aW91c1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnY2FuU2VsZWN0UHJldmlvdXMnKTtcbmNvbnN0IHNlbGVjdGVkSXRlbVN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc2VsZWN0ZWRJdGVtJyk7XG5jb25zdCBzZWxlY3Rpb25SZXF1aXJlZFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc2VsZWN0aW9uUmVxdWlyZWQnKTtcbmNvbnN0IHNlbGVjdGlvbldyYXBzU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3Rpb25XcmFwcycpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggU2luZ2xlU2VsZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFuYWdlcyBzaW5nbGUtc2VsZWN0aW9uIHNlbWFudGljcyBmb3IgaXRlbXMgaW4gYSBsaXN0LlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgYSBjb21wb25lbnQgdG8gcHJvdmlkZSBhbiBgaXRlbXNgIGFycmF5IG9mIGFsbCBlbGVtZW50c1xuICAgKiBpbiB0aGUgbGlzdC4gQSBzdGFuZGFyZCB3YXkgdG8gZG8gdGhhdCB3aXRoIGlzIHRoZVxuICAgKiBbQ29udGVudEFzSXRlbXNdKENvbnRlbnRBc0l0ZW1zLm1kKSBtaXhpbiwgd2hpY2ggdGFrZXMgYSBjb21wb25lbnQnc1xuICAgKiBjb250ZW50ICh0eXBpY2FsbHkgaXRzIGRpc3RyaWJ1dGVkIGNoaWxkcmVuKSBhcyB0aGUgc2V0IG9mIGxpc3QgaXRlbXM7IHNlZVxuICAgKiB0aGF0IG1peGluIGZvciBkZXRhaWxzLlxuICAgKlxuICAgKiBUaGlzIG1peGluIHRyYWNrcyBhIHNpbmdsZSBzZWxlY3RlZCBpdGVtIGluIHRoZSBsaXN0LCBhbmQgcHJvdmlkZXMgbWVhbnMgdG9cbiAgICogZ2V0IGFuZCBzZXQgdGhhdCBzdGF0ZSBieSBpdGVtIHBvc2l0aW9uIChgc2VsZWN0ZWRJbmRleGApIG9yIGl0ZW0gaWRlbnRpdHlcbiAgICogKGBzZWxlY3RlZEl0ZW1gKS4gVGhlIHNlbGVjdGlvbiBjYW4gYmUgbW92ZWQgaW4gdGhlIGxpc3QgdmlhIHRoZSBtZXRob2RzXG4gICAqIGBzZWxlY3RGaXJzdGAsIGBzZWxlY3RMYXN0YCwgYHNlbGVjdE5leHRgLCBhbmQgYHNlbGVjdFByZXZpb3VzYC5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBkb2VzIG5vdCBwcm9kdWNlIGFueSB1c2VyLXZpc2libGUgZWZmZWN0cyB0byByZXByZXNlbnRcbiAgICogc2VsZWN0aW9uLiBPdGhlciBtaXhpbnMsIHN1Y2ggYXNcbiAgICogW1NlbGVjdGlvbkFyaWFBY3RpdmVdKFNlbGVjdGlvbkFyaWFBY3RpdmUubWQpLFxuICAgKiBbU2VsZWN0aW9uSGlnaGxpZ2h0XShTZWxlY3Rpb25IaWdobGlnaHQubWQpIGFuZFxuICAgKiBbU2VsZWN0aW9uSW5WaWV3XShTZWxlY3Rpb25JblZpZXcubWQpLCBtb2RpZnkgdGhlIHNlbGVjdGVkIGl0ZW0gaW4gY29tbW9uXG4gICAqIHdheXMgdG8gbGV0IHRoZSB1c2VyIGtub3cgYSBnaXZlbiBpdGVtIGlzIHNlbGVjdGVkIG9yIG5vdCBzZWxlY3RlZC5cbiAgICovXG4gIGNsYXNzIFNpbmdsZVNlbGVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgLy8gU2V0IGRlZmF1bHRzLlxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnNlbGVjdGlvblJlcXVpcmVkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLnNlbGVjdGlvblJlcXVpcmVkID0gdGhpc1tzeW1ib2xzLmRlZmF1bHRzXS5zZWxlY3Rpb25SZXF1aXJlZDtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5zZWxlY3Rpb25XcmFwcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25XcmFwcyA9IHRoaXNbc3ltYm9scy5kZWZhdWx0c10uc2VsZWN0aW9uV3JhcHM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXBwbHkgdGhlIGluZGljYXRlIHNlbGVjdGlvbiBzdGF0ZSB0byB0aGUgaXRlbS5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy4gVXNlci12aXNpYmxlXG4gICAgICogZWZmZWN0cyB3aWxsIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW0gLSB0aGUgaXRlbSBiZWluZyBzZWxlY3RlZC9kZXNlbGVjdGVkXG4gICAgICogQHBhcmFtIHtib29sZWFufSBzZWxlY3RlZCAtIHRydWUgaWYgdGhlIGl0ZW0gaXMgc2VsZWN0ZWQsIGZhbHNlIGlmIG5vdFxuICAgICAqL1xuICAgIFtzeW1ib2xzLmFwcGx5U2VsZWN0aW9uXShpdGVtLCBzZWxlY3RlZCkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuYXBwbHlTZWxlY3Rpb25dKSB7IHN1cGVyW3N5bWJvbHMuYXBwbHlTZWxlY3Rpb25dKGl0ZW0sIHNlbGVjdGVkKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIHNlbGVjdGlvbiBjYW4gYmUgbW92ZWQgdG8gdGhlIG5leHQgaXRlbSwgZmFsc2UgaWYgbm90ICh0aGVcbiAgICAgKiBzZWxlY3RlZCBpdGVtIGlzIHRoZSBsYXN0IGl0ZW0gaW4gdGhlIGxpc3QpLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgZ2V0IGNhblNlbGVjdE5leHQoKSB7XG4gICAgICByZXR1cm4gdGhpc1tjYW5TZWxlY3ROZXh0U3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IGNhblNlbGVjdE5leHQoY2FuU2VsZWN0TmV4dCkge1xuICAgICAgdGhpc1tjYW5TZWxlY3ROZXh0U3ltYm9sXSA9IGNhblNlbGVjdE5leHQ7XG4gICAgICBpZiAoJ2NhblNlbGVjdE5leHQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmNhblNlbGVjdE5leHQgPSBjYW5TZWxlY3ROZXh0OyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgc2VsZWN0aW9uIGNhbiBiZSBtb3ZlZCB0byB0aGUgcHJldmlvdXMgaXRlbSwgZmFsc2UgaWYgbm90XG4gICAgICogKHRoZSBzZWxlY3RlZCBpdGVtIGlzIHRoZSBmaXJzdCBvbmUgaW4gdGhlIGxpc3QpLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgZ2V0IGNhblNlbGVjdFByZXZpb3VzKCkge1xuICAgICAgcmV0dXJuIHRoaXNbY2FuU2VsZWN0UHJldmlvdXNTeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgY2FuU2VsZWN0UHJldmlvdXMoY2FuU2VsZWN0UHJldmlvdXMpIHtcbiAgICAgIHRoaXNbY2FuU2VsZWN0UHJldmlvdXNTeW1ib2xdID0gY2FuU2VsZWN0UHJldmlvdXM7XG4gICAgICBpZiAoJ2NhblNlbGVjdFByZXZpb3VzJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5jYW5TZWxlY3RQcmV2aW91cyA9IGNhblNlbGVjdFByZXZpb3VzOyB9XG4gICAgfVxuXG4gICAgZ2V0IFtzeW1ib2xzLmRlZmF1bHRzXSgpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRzID0gc3VwZXJbc3ltYm9scy5kZWZhdWx0c10gfHwge307XG4gICAgICBkZWZhdWx0cy5zZWxlY3Rpb25SZXF1aXJlZCA9IGZhbHNlO1xuICAgICAgZGVmYXVsdHMuc2VsZWN0aW9uV3JhcHMgPSBmYWxzZTtcbiAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgYSBuZXcgaXRlbSBiZWluZyBhZGRlZCB0byB0aGUgbGlzdC5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIHNpbXBseSBzZXRzIHRoZSBpdGVtJ3NcbiAgICAgKiBzZWxlY3Rpb24gc3RhdGUgdG8gZmFsc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gdGhlIGl0ZW0gYmVpbmcgYWRkZWRcbiAgICAgKi9cbiAgICBbc3ltYm9scy5pdGVtQWRkZWRdKGl0ZW0pIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLml0ZW1BZGRlZF0pIHsgc3VwZXJbc3ltYm9scy5pdGVtQWRkZWRdKGl0ZW0pOyB9XG4gICAgICB0aGlzW3N5bWJvbHMuYXBwbHlTZWxlY3Rpb25dKGl0ZW0sIGl0ZW0gPT09IHRoaXMuc2VsZWN0ZWRJdGVtKTtcbiAgICB9XG5cbiAgICBpdGVtc0NoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuaXRlbXNDaGFuZ2VkKSB7IHN1cGVyLml0ZW1zQ2hhbmdlZCgpOyB9XG5cbiAgICAgIGlmICh0aGlzLnNlbGVjdGlvblJlcXVpcmVkKSB7XG4gICAgICAgIC8vIEVuc3VyZSBzZWxlY3Rpb24sIGJ1dCBkbyB0aGlzIGluIHRoZSBuZXh0IHRpY2sgdG8gZ2l2ZSBvdGhlciBtaXhpbnMgYVxuICAgICAgICAvLyBjaGFuY2UgdG8gZG8gdGhlaXIgb3duIGl0ZW1zQ2hhbmdlZCB3b3JrLlxuICAgICAgICBtaWNyb3Rhc2soKCkgPT4ge1xuICAgICAgICAgIGVuc3VyZVNlbGVjdGlvbih0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjaGFuZ2UgaW4gaXRlbXMgbWF5IGhhdmUgYWZmZWN0ZWQgd2hpY2ggbmF2aWdhdGlvbnMgYXJlIHBvc3NpYmxlLlxuICAgICAgdXBkYXRlUG9zc2libGVOYXZpZ2F0aW9ucyh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5kZXggb2YgdGhlIGl0ZW0gd2hpY2ggaXMgY3VycmVudGx5IHNlbGVjdGVkLlxuICAgICAqXG4gICAgICogSWYgYHNlbGVjdGlvbldyYXBzYCBpcyBmYWxzZSwgdGhlIGluZGV4IGlzIC0xIGlmIHRoZXJlIGlzIG5vIHNlbGVjdGlvbi5cbiAgICAgKiBJbiB0aGF0IGNhc2UsIHNldHRpbmcgdGhlIGluZGV4IHRvIC0xIHdpbGwgZGVzZWxlY3QgYW55XG4gICAgICogY3VycmVudGx5LXNlbGVjdGVkIGl0ZW0uXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldCBzZWxlY3RlZEluZGV4KCkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gdGhpcy5zZWxlY3RlZEl0ZW07XG5cbiAgICAgIC8vIFRPRE86IElmIHNlbGVjdGlvbiB3YXNuJ3QgZm91bmQsIG1vc3QgbGlrZWx5IGNhdXNlIGlzIHRoYXQgdGhlIERPTSB3YXNcbiAgICAgIC8vIG1hbmlwdWxhdGVkIGZyb20gdW5kZXJuZWF0aCB1cy4gT25jZSB3ZSB0cmFjayBjb250ZW50IGNoYW5nZXMsIHR1cm5cbiAgICAgIC8vIHRoaXMgaW50byBhIHdhcm5pbmcuXG4gICAgICAvLyBUT0RPOiBNZW1vaXplXG4gICAgICByZXR1cm4gc2VsZWN0ZWRJdGVtID9cbiAgICAgICAgdGhpcy5pdGVtcy5pbmRleE9mKHNlbGVjdGVkSXRlbSkgOlxuICAgICAgICAtMTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkSW5kZXgoaW5kZXgpIHtcbiAgICAgIC8vIFRPRE86IFB1bGwgc2V0dGluZyBvZiBzZWxlY3RlZEl0ZW0gYWJvdmUgc3VwZXIoKSBjYWxsLiAqL1xuICAgICAgaWYgKCdzZWxlY3RlZEluZGV4JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEluZGV4ID0gaW5kZXg7IH1cbiAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICAgIGNvbnN0IGl0ZW0gPSAoaW5kZXggPCAwIHx8IGl0ZW1zLmxlbmd0aCA9PT0gMCkgP1xuICAgICAgICBudWxsIDpcbiAgICAgICAgaXRlbXNbaW5kZXhdO1xuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuXG4gICAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnc2VsZWN0ZWQtaW5kZXgtY2hhbmdlZCcsIHtcbiAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgc2VsZWN0ZWRJbmRleDogaW5kZXgsXG4gICAgICAgICAgdmFsdWU6IGluZGV4IC8vIGZvciBQb2x5bWVyIGJpbmRpbmdcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbSwgb3IgbnVsbCBpZiB0aGVyZSBpcyBubyBzZWxlY3Rpb24uXG4gICAgICpcbiAgICAgKiBTZXR0aW5nIHRoaXMgcHJvcGVydHkgdG8gbnVsbCBkZXNlbGVjdHMgYW55IGN1cnJlbnRseS1zZWxlY3RlZCBpdGVtLlxuICAgICAqXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xuICAgICAgcmV0dXJuIHRoaXNbc2VsZWN0ZWRJdGVtU3ltYm9sXSB8fCBudWxsO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzSXRlbSA9IHRoaXNbc2VsZWN0ZWRJdGVtU3ltYm9sXTtcbiAgICAgIC8vIFRPRE86IENvbmZpcm0gaXRlbSBpcyBhY3R1YWxseSBpbiB0aGUgbGlzdCBiZWZvcmUgc2VsZWN0aW5nLlxuICAgICAgdGhpc1tzZWxlY3RlZEl0ZW1TeW1ib2xdID0gaXRlbTtcblxuICAgICAgaWYgKCdzZWxlY3RlZEl0ZW0nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSXRlbSA9IGl0ZW07IH1cbiAgICAgIGlmIChwcmV2aW91c0l0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0gPT09IHByZXZpb3VzSXRlbSkge1xuICAgICAgICAgIC8vIFRoZSBpbmRpY2F0ZWQgaXRlbSBpcyBhbHJlYWR5IHRoZSBzZWxlY3RlZCBpdGVtLlxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZW1vdmUgcHJldmlvdXMgc2VsZWN0aW9uLlxuICAgICAgICB0aGlzW3N5bWJvbHMuYXBwbHlTZWxlY3Rpb25dKHByZXZpb3VzSXRlbSwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICB0aGlzW3N5bWJvbHMuYXBwbHlTZWxlY3Rpb25dKGl0ZW0sIHRydWUpO1xuICAgICAgfVxuXG4gICAgICAvLyBUT0RPOiBSYXRpb25hbGl6ZSB3aXRoIHNlbGVjdGVkSW5kZXggc28gd2UncmUgbm90IHJlY2FsY3VsYXRpbmcgaXRlbVxuICAgICAgLy8gb3IgaW5kZXggaW4gZWFjaCBzZXR0ZXIuXG4gICAgICB1cGRhdGVQb3NzaWJsZU5hdmlnYXRpb25zKHRoaXMpO1xuXG4gICAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnc2VsZWN0ZWQtaXRlbS1jaGFuZ2VkJywge1xuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICBzZWxlY3RlZEl0ZW06IGl0ZW0sXG4gICAgICAgICAgcHJldmlvdXNJdGVtOiBwcmV2aW91c0l0ZW0sXG4gICAgICAgICAgdmFsdWU6IGl0ZW0gLy8gZm9yIFBvbHltZXIgYmluZGluZ1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBmaXJzdCBpdGVtIGluIHRoZSBsaXN0LlxuICAgICAqL1xuICAgIHNlbGVjdEZpcnN0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdEZpcnN0KSB7IHN1cGVyLnNlbGVjdEZpcnN0KCk7IH1cbiAgICAgIHJldHVybiBzZWxlY3RJbmRleCh0aGlzLCAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBsaXN0IHNob3VsZCBhbHdheXMgaGF2ZSBhIHNlbGVjdGlvbiAoaWYgaXQgaGFzIGl0ZW1zKS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGlvblJlcXVpcmVkKCkge1xuICAgICAgcmV0dXJuIHRoaXNbc2VsZWN0aW9uUmVxdWlyZWRTeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0aW9uUmVxdWlyZWQoc2VsZWN0aW9uUmVxdWlyZWQpIHtcbiAgICAgIHRoaXNbc2VsZWN0aW9uUmVxdWlyZWRTeW1ib2xdID0gc2VsZWN0aW9uUmVxdWlyZWQ7XG4gICAgICBpZiAoJ3NlbGVjdGlvblJlcXVpcmVkJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3Rpb25SZXF1aXJlZCA9IHNlbGVjdGlvblJlcXVpcmVkOyB9XG4gICAgICBpZiAoc2VsZWN0aW9uUmVxdWlyZWQpIHtcbiAgICAgICAgZW5zdXJlU2VsZWN0aW9uKHRoaXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCB0aGUgbGFzdCBpdGVtIGluIHRoZSBsaXN0LlxuICAgICAqL1xuICAgIHNlbGVjdExhc3QoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0TGFzdCkgeyBzdXBlci5zZWxlY3RMYXN0KCk7IH1cbiAgICAgIHJldHVybiBzZWxlY3RJbmRleCh0aGlzLCB0aGlzLml0ZW1zLmxlbmd0aCAtIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCB0aGUgbmV4dCBpdGVtIGluIHRoZSBsaXN0LlxuICAgICAqL1xuICAgIHNlbGVjdE5leHQoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0TmV4dCkgeyBzdXBlci5zZWxlY3ROZXh0KCk7IH1cbiAgICAgIHJldHVybiBzZWxlY3RJbmRleCh0aGlzLCB0aGlzLnNlbGVjdGVkSW5kZXggKyAxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgdGhlIHByZXZpb3VzIGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAgICpcbiAgICAgKiBJZiB0aGUgbGlzdCBoYXMgbm8gc2VsZWN0aW9uLCB0aGUgbGFzdCBpdGVtIHdpbGwgYmUgc2VsZWN0ZWQuXG4gICAgICovXG4gICAgc2VsZWN0UHJldmlvdXMoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0UHJldmlvdXMpIHsgc3VwZXIuc2VsZWN0UHJldmlvdXMoKTsgfVxuICAgICAgY29uc3QgbmV3SW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXggPCAwID9cbiAgICAgICAgdGhpcy5pdGVtcy5sZW5ndGggLSAxIDogICAgIC8vIE5vIHNlbGVjdGlvbiB5ZXQ7IHNlbGVjdCBsYXN0IGl0ZW0uXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCAtIDE7XG4gICAgICByZXR1cm4gc2VsZWN0SW5kZXgodGhpcywgbmV3SW5kZXgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgc2VsZWN0aW9uIG5hdmlnYXRpb25zIHdyYXAgZnJvbSBsYXN0IHRvIGZpcnN0LCBhbmQgdmljZSB2ZXJzYS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGlvbldyYXBzKCkge1xuICAgICAgcmV0dXJuIHRoaXNbc2VsZWN0aW9uV3JhcHNTeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0aW9uV3JhcHModmFsdWUpIHtcbiAgICAgIHRoaXNbc2VsZWN0aW9uV3JhcHNTeW1ib2xdID0gU3RyaW5nKHZhbHVlKSA9PT0gJ3RydWUnO1xuICAgICAgaWYgKCdzZWxlY3Rpb25XcmFwcycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0aW9uV3JhcHMgPSB2YWx1ZTsgfVxuICAgICAgdXBkYXRlUG9zc2libGVOYXZpZ2F0aW9ucyh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyB3aGVuIHRoZSBzZWxlY3RlZEl0ZW0gcHJvcGVydHkgY2hhbmdlcy5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBTaW5nbGVTZWxlY3Rpb25cbiAgICAgKiBAZXZlbnQgc2VsZWN0ZWQtaXRlbS1jaGFuZ2VkXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZGV0YWlsLnNlbGVjdGVkSXRlbSBUaGUgbmV3IHNlbGVjdGVkIGl0ZW0uXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZGV0YWlsLnByZXZpb3VzSXRlbSBUaGUgcHJldmlvdXNseSBzZWxlY3RlZCBpdGVtLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogRmlyZXMgd2hlbiB0aGUgc2VsZWN0ZWRJbmRleCBwcm9wZXJ0eSBjaGFuZ2VzLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIFNpbmdsZVNlbGVjdGlvblxuICAgICAqIEBldmVudCBzZWxlY3RlZC1pbmRleC1jaGFuZ2VkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRldGFpbC5zZWxlY3RlZEluZGV4IFRoZSBuZXcgc2VsZWN0ZWQgaW5kZXguXG4gICAgICovXG5cbiAgfVxuXG4gIHJldHVybiBTaW5nbGVTZWxlY3Rpb247XG59O1xuXG5cbi8vIElmIG5vIGl0ZW0gaXMgc2VsZWN0ZWQsIHNlbGVjdCBhIGRlZmF1bHQgaXRlbS5cbmZ1bmN0aW9uIGVuc3VyZVNlbGVjdGlvbihlbGVtZW50KSB7XG4gIGNvbnN0IGluZGV4ID0gZWxlbWVudC5zZWxlY3RlZEluZGV4O1xuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgLy8gU2VsZWN0ZWQgaXRlbSBpcyBubyBsb25nZXIgaW4gdGhlIGN1cnJlbnQgc2V0IG9mIGl0ZW1zLlxuICAgIGlmIChlbGVtZW50Lml0ZW1zICYmIGVsZW1lbnQuaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgLy8gU2VsZWN0IHRoZSBmaXJzdCBpdGVtLlxuICAgICAgLy8gVE9ETzogSWYgdGhlIHByZXZpb3VzbHktc2VsZWN0ZWQgaXRlbSBoYXMgYmVlbiBkZWxldGVkLCB0cnkgdG8gc2VsZWN0XG4gICAgICAvLyBhbiBpdGVtIGFkamFjZW50IHRvIHRoZSBwb3NpdGlvbiBpdCBoZWxkLlxuICAgICAgZWxlbWVudC5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTm8gaXRlbXMgZm9yIHVzIHRvIHNlbGVjdCwgYnV0IHdlIGNhbiBhdCBsZWFzdCBzaWduYWwgdGhhdCB0aGVyZSdzIG5vXG4gICAgICAvLyBsb25nZXIgYSBzZWxlY3Rpb24uXG4gICAgICBlbGVtZW50LnNlbGVjdGVkSXRlbSA9IG51bGw7XG4gICAgfVxuICB9XG59XG5cbi8vIEVuc3VyZSB0aGUgZ2l2ZW4gaW5kZXggaXMgd2l0aGluIGJvdW5kcywgYW5kIHNlbGVjdCBpdCBpZiBpdCdzIG5vdCBhbHJlYWR5XG4vLyBzZWxlY3RlZC5cbmZ1bmN0aW9uIHNlbGVjdEluZGV4KGVsZW1lbnQsIGluZGV4KSB7XG4gIGNvbnN0IGNvdW50ID0gZWxlbWVudC5pdGVtcy5sZW5ndGg7XG5cbiAgY29uc3QgYm91bmRlZEluZGV4ID0gKGVsZW1lbnQuc2VsZWN0aW9uV3JhcHMpID9cbiAgICAvLyBKYXZhU2NyaXB0IG1vZCBkb2Vzbid0IGhhbmRsZSBuZWdhdGl2ZSBudW1iZXJzIHRoZSB3YXkgd2Ugd2FudCB0byB3cmFwLlxuICAgIC8vIFNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xODYxODI1MC83NjQ3MlxuICAgICgoaW5kZXggJSBjb3VudCkgKyBjb3VudCkgJSBjb3VudCA6XG5cbiAgICAvLyBLZWVwIGluZGV4IHdpdGhpbiBib3VuZHMgb2YgYXJyYXkuXG4gICAgTWF0aC5tYXgoTWF0aC5taW4oaW5kZXgsIGNvdW50IC0gMSksIDApO1xuXG4gIGNvbnN0IHByZXZpb3VzSW5kZXggPSBlbGVtZW50LnNlbGVjdGVkSW5kZXg7XG4gIGlmIChwcmV2aW91c0luZGV4ICE9PSBib3VuZGVkSW5kZXgpIHtcbiAgICBlbGVtZW50LnNlbGVjdGVkSW5kZXggPSBib3VuZGVkSW5kZXg7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8vIEZvbGxvd2luZyBhIGNoYW5nZSBpbiBzZWxlY3Rpb24sIHJlcG9ydCB3aGV0aGVyIGl0J3Mgbm93IHBvc3NpYmxlIHRvXG4vLyBnbyBuZXh0L3ByZXZpb3VzIGZyb20gdGhlIGdpdmVuIGluZGV4LlxuZnVuY3Rpb24gdXBkYXRlUG9zc2libGVOYXZpZ2F0aW9ucyhlbGVtZW50KSB7XG4gIGxldCBjYW5TZWxlY3ROZXh0O1xuICBsZXQgY2FuU2VsZWN0UHJldmlvdXM7XG4gIGNvbnN0IGl0ZW1zID0gZWxlbWVudC5pdGVtcztcbiAgaWYgKGl0ZW1zID09IG51bGwgfHwgaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gTm8gaXRlbXMgdG8gc2VsZWN0LlxuICAgIGNhblNlbGVjdE5leHQgPSBmYWxzZTtcbiAgICBjYW5TZWxlY3RQcmV2aW91cyA9IGZhbHNlO1xuICB9IGlmIChlbGVtZW50LnNlbGVjdGlvbldyYXBzKSB7XG4gICAgLy8gU2luY2UgdGhlcmUgYXJlIGl0ZW1zLCBjYW4gYWx3YXlzIGdvIG5leHQvcHJldmlvdXMuXG4gICAgY2FuU2VsZWN0TmV4dCA9IHRydWU7XG4gICAgY2FuU2VsZWN0UHJldmlvdXMgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGluZGV4ID0gZWxlbWVudC5zZWxlY3RlZEluZGV4O1xuICAgIGlmIChpbmRleCA8IDAgJiYgaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgLy8gU3BlY2lhbCBjYXNlLiBJZiB0aGVyZSBhcmUgaXRlbXMgYnV0IG5vIHNlbGVjdGlvbiwgZGVjbGFyZSB0aGF0IGl0J3NcbiAgICAgIC8vIGFsd2F5cyBwb3NzaWJsZSB0byBnbyBuZXh0L3ByZXZpb3VzIHRvIGNyZWF0ZSBhIHNlbGVjdGlvbi5cbiAgICAgIGNhblNlbGVjdE5leHQgPSB0cnVlO1xuICAgICAgY2FuU2VsZWN0UHJldmlvdXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBOb3JtYWwgY2FzZTogd2UgaGF2ZSBhbiBpbmRleCBpbiBhIGxpc3QgdGhhdCBoYXMgaXRlbXMuXG4gICAgICBjYW5TZWxlY3RQcmV2aW91cyA9IChpbmRleCA+IDApO1xuICAgICAgY2FuU2VsZWN0TmV4dCA9IChpbmRleCA8IGl0ZW1zLmxlbmd0aCAtIDEpO1xuICAgIH1cbiAgfVxuICBlbGVtZW50LmNhblNlbGVjdE5leHQgPSBjYW5TZWxlY3ROZXh0O1xuICBlbGVtZW50LmNhblNlbGVjdFByZXZpb3VzID0gY2FuU2VsZWN0UHJldmlvdXM7XG59XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcbmltcG9ydCBzeW1ib2xzIGZyb20gJy4vc3ltYm9scyc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IGRlbHRhWFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnZGVsdGFYJyk7XG5jb25zdCBkZWx0YVlTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2RlbHRhWScpO1xuY29uc3QgbXVsdGlUb3VjaFN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnbXVsdGlUb3VjaCcpO1xuY29uc3QgcHJldmlvdXNYU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdwcmV2aW91c1gnKTtcbmNvbnN0IHByZXZpb3VzWVN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgncHJldmlvdXNZJyk7XG5jb25zdCBzdGFydFhTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3N0YXJ0WCcpO1xuY29uc3QgdHJhdmVsRnJhY3Rpb25TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3RyYXZlbEZyYWN0aW9uJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTd2lwZURpcmVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgdG91Y2ggZ2VzdHVyZXMgKHN3aXBlIGxlZnQsIHN3aXBlIHJpZ2h0KSB0byBkaXJlY3Rpb25cbiAgICogc2VtYW50aWNzIChnbyByaWdodCwgZ28gbGVmdCkuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIHRoaXMgbWl4aW4gcHJlc2VudHMgbm8gdXNlci12aXNpYmxlIGVmZmVjdHM7IGl0IGp1c3QgaW5kaWNhdGVzIGFcbiAgICogZGlyZWN0aW9uIGluIHdoaWNoIHRoZSB1c2VyIGlzIGN1cnJlbnRseSBzd2lwaW5nIG9yIGhhcyBmaW5pc2hlZCBzd2lwaW5nLiBUb1xuICAgKiBtYXAgdGhlIGRpcmVjdGlvbiB0byBhIGNoYW5nZSBpbiBzZWxlY3Rpb24sIHVzZSB0aGVcbiAgICogW0RpcmVjdGlvblNlbGVjdGlvbl0oRGlyZWN0aW9uU2VsZWN0aW9uLm1kKSBtaXhpbi5cbiAgICovXG4gIGNsYXNzIFN3aXBlRGlyZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG5cbiAgICAgIHRoaXMudHJhdmVsRnJhY3Rpb24gPSAwO1xuXG4gICAgICAvLyBJbiBhbGwgdG91Y2ggZXZlbnRzLCBvbmx5IGhhbmRsZSBzaW5nbGUgdG91Y2hlcy4gV2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgLy8gaW5hZHZlcnRlbnRseSBkbyB3b3JrIHdoZW4gdGhlIHVzZXIncyB0cnlpbmcgdG8gcGluY2gtem9vbSBmb3IgZXhhbXBsZS5cbiAgICAgIC8vIFRPRE86IEV2ZW4gYmV0dGVyIGFwcHJvYWNoIHRoYW4gYmVsb3cgd291bGQgYmUgdG8gaWdub3JlIHRvdWNoZXMgYWZ0ZXJcbiAgICAgIC8vIHRoZSBmaXJzdCBpZiB0aGUgdXNlciBoYXMgYWxyZWFkeSBiZWd1biBhIHN3aXBlLlxuICAgICAgLy8gVE9ETzogVG91Y2ggZXZlbnRzIHNob3VsZCBwcm9iYWJseSBiZSBmYWN0b3JlZCBvdXQgaW50byBpdHMgb3duIG1peGluLlxuICAgICAgaWYgKHdpbmRvdy5Qb2ludGVyRXZlbnQpIHtcbiAgICAgICAgLy8gUHJlZmVyIGxpc3RlbmluZyB0byBzdGFuZGFyZCBwb2ludGVyIGV2ZW50cy5cbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAoaXNFdmVudEZvclBlbk9yUHJpbWFyeVRvdWNoKGV2ZW50KSkge1xuICAgICAgICAgICAgdG91Y2hTdGFydCh0aGlzLCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmIChpc0V2ZW50Rm9yUGVuT3JQcmltYXJ5VG91Y2goZXZlbnQpKSB7XG4gICAgICAgICAgICBjb25zdCBoYW5kbGVkID0gdG91Y2hNb3ZlKHRoaXMsIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgICAgICAgICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAoaXNFdmVudEZvclBlbk9yUHJpbWFyeVRvdWNoKGV2ZW50KSkge1xuICAgICAgICAgICAgdG91Y2hFbmQodGhpcywgZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFBvaW50ZXIgZXZlbnRzIG5vdCBzdXBwb3J0ZWQgLS0gbGlzdGVuIHRvIG9sZGVyIHRvdWNoIGV2ZW50cy5cbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmICh0aGlzW211bHRpVG91Y2hTeW1ib2xdKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSBlbHNlIGlmIChldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgY29uc3QgY2xpZW50WCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgICAgICBjb25zdCBjbGllbnRZID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgICAgICAgIHRvdWNoU3RhcnQodGhpcywgY2xpZW50WCwgY2xpZW50WSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXNbbXVsdGlUb3VjaFN5bWJvbF0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmICghdGhpc1ttdWx0aVRvdWNoU3ltYm9sXSAmJiBldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgY29uc3QgY2xpZW50WCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgICAgICBjb25zdCBjbGllbnRZID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZWQgPSB0b3VjaE1vdmUodGhpcywgY2xpZW50WCwgY2xpZW50WSk7XG4gICAgICAgICAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBldmVudCA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBBbGwgdG91Y2hlcyByZW1vdmVkOyBnZXN0dXJlIGlzIGNvbXBsZXRlLlxuICAgICAgICAgICAgaWYgKCF0aGlzW211bHRpVG91Y2hTeW1ib2xdKSB7XG4gICAgICAgICAgICAgIC8vIFNpbmdsZS10b3VjaCBzd2lwZSBoYXMgZmluaXNoZWQuXG4gICAgICAgICAgICAgIGNvbnN0IGNsaWVudFggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICAgICAgICBjb25zdCBjbGllbnRZID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgICAgICAgICAgdG91Y2hFbmQodGhpcywgY2xpZW50WCwgY2xpZW50WSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzW211bHRpVG91Y2hTeW1ib2xdID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG5cbiAgICAgIC8vIEZvciB0aGUgY29tcG9uZW50IHRvIHJlY2VpdmUgUG9pbnRlckV2ZW50cyBpbiBJRS9FZGdlLCB3ZSBuZWVkIHRvIHNldFxuICAgICAgLy8gdG91Y2gtYWN0aW9uOiBub25lLiBPbmx5IG1ha2UgdGhpcyBjaGFuZ2UgaWYgdG91Y2gtYWN0aW9uIGlzIGN1cnJlbnRseVxuICAgICAgLy8gdGhlIGRlZmF1bHQgdmFsdWUgKFwiYXV0b1wiKSwgaW4gY2FzZSB0aGUgZGV2ZWxvcGVyIGtub3dzIGJldHRlciB0aGFuIHdlXG4gICAgICAvLyBkbyB3aGF0IHRoZXkgd2FudCBpbiB0aGVpciBwYXJ0aWN1bGFyIGNvbnRleHQuXG4gICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKS50b3VjaEFjdGlvbiA9PT0gJ2F1dG8nKSB7XG4gICAgICAgIHRoaXMuc3R5bGUudG91Y2hBY3Rpb24gPSAnbm9uZSc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXQgW3N5bWJvbHMuZHJhZ2dpbmddKCkge1xuICAgICAgcmV0dXJuIHN1cGVyW3N5bWJvbHMuZHJhZ2dpbmddO1xuICAgIH1cbiAgICBzZXQgW3N5bWJvbHMuZHJhZ2dpbmddKHZhbHVlKSB7XG4gICAgICBpZiAoc3ltYm9scy5kcmFnZ2luZyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlcltzeW1ib2xzLmRyYWdnaW5nXSA9IHZhbHVlOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIGxlZnQuXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIFtzeW1ib2xzLmdvTGVmdF0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5nb0xlZnRdKSB7IHJldHVybiBzdXBlcltzeW1ib2xzLmdvTGVmdF0oKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSByaWdodC5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgW3N5bWJvbHMuZ29SaWdodF0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5nb1JpZ2h0XSkgeyByZXR1cm4gc3VwZXJbc3ltYm9scy5nb1JpZ2h0XSgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGRpc3RhbmNlIHRoZSBmaXJzdCB0b3VjaHBvaW50IGhhcyB0cmF2ZWxlZCBzaW5jZSB0aGUgYmVnaW5uaW5nIG9mIGFcbiAgICAgKiBkcmFnLCBleHByZXNzZWQgYXMgYSBmcmFjdGlvbiBvZiB0aGUgZWxlbWVudCdzIHdpZHRoLlxuICAgICAqXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICovXG4gICAgZ2V0IHRyYXZlbEZyYWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXNbdHJhdmVsRnJhY3Rpb25TeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgdHJhdmVsRnJhY3Rpb24odmFsdWUpIHtcbiAgICAgIHRoaXNbdHJhdmVsRnJhY3Rpb25TeW1ib2xdID0gdmFsdWU7XG4gICAgICBpZiAoJ3RyYXZlbEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci50cmF2ZWxGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gU3dpcGVEaXJlY3Rpb247XG59O1xuXG5cbi8vIFJldHVybiB0cnVlIGlmIHRoZSBwb2ludGVyIGV2ZW50IGlzIGZvciB0aGUgcGVuLCBvciB0aGUgcHJpbWFyeSB0b3VjaCBwb2ludC5cbmZ1bmN0aW9uIGlzRXZlbnRGb3JQZW5PclByaW1hcnlUb3VjaChldmVudCkge1xuICByZXR1cm4gZXZlbnQucG9pbnRlclR5cGUgPT09ICdwZW4nIHx8XG4gICAgICAoZXZlbnQucG9pbnRlclR5cGUgPT09ICd0b3VjaCcgJiYgZXZlbnQuaXNQcmltYXJ5KTtcbn1cblxuLypcbiAqIEludm9rZWQgd2hlbiB0aGUgdXNlciBoYXMgZmluaXNoZWQgYSB0b3VjaCBvcGVyYXRpb24uXG4gKi9cbmZ1bmN0aW9uIHRvdWNoRW5kKGVsZW1lbnQsIGNsaWVudFgsIGNsaWVudFkpIHtcbiAgZWxlbWVudFtzeW1ib2xzLmRyYWdnaW5nXSA9IGZhbHNlO1xuICBpZiAoZWxlbWVudFtkZWx0YVhTeW1ib2xdID49IDIwKSB7XG4gICAgLy8gRmluaXNoZWQgZ29pbmcgcmlnaHQgYXQgaGlnaCBzcGVlZC5cbiAgICBlbGVtZW50W3N5bWJvbHMuZ29MZWZ0XSgpO1xuICB9IGVsc2UgaWYgKGVsZW1lbnRbZGVsdGFYU3ltYm9sXSA8PSAtMjApIHtcbiAgICAvLyBGaW5pc2hlZCBnb2luZyBsZWZ0IGF0IGhpZ2ggc3BlZWQuXG4gICAgZWxlbWVudFtzeW1ib2xzLmdvUmlnaHRdKCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gRmluaXNoZWQgYXQgbG93IHNwZWVkLlxuICAgIHRyYWNrVG8oZWxlbWVudCwgY2xpZW50WCk7XG4gICAgY29uc3QgdHJhdmVsRnJhY3Rpb24gPSBlbGVtZW50LnRyYXZlbEZyYWN0aW9uO1xuICAgIGlmICh0cmF2ZWxGcmFjdGlvbiA+PSAwLjUpIHtcbiAgICAgIGVsZW1lbnRbc3ltYm9scy5nb1JpZ2h0XSgpO1xuICAgIH0gZWxzZSBpZiAodHJhdmVsRnJhY3Rpb24gPD0gLTAuNSkge1xuICAgICAgZWxlbWVudFtzeW1ib2xzLmdvTGVmdF0oKTtcbiAgICB9XG4gIH1cbiAgZWxlbWVudC50cmF2ZWxGcmFjdGlvbiA9IDA7XG4gIGVsZW1lbnRbZGVsdGFYU3ltYm9sXSA9IG51bGw7XG4gIGVsZW1lbnRbZGVsdGFZU3ltYm9sXSA9IG51bGw7XG59XG5cbi8qXG4gKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgaGFzIG1vdmVkIGR1cmluZyBhIHRvdWNoIG9wZXJhdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG91Y2hNb3ZlKGVsZW1lbnQsIGNsaWVudFgsIGNsaWVudFkpIHtcblxuICBlbGVtZW50W2RlbHRhWFN5bWJvbF0gPSBjbGllbnRYIC0gZWxlbWVudFtwcmV2aW91c1hTeW1ib2xdO1xuICBlbGVtZW50W2RlbHRhWVN5bWJvbF0gPSBjbGllbnRZIC0gZWxlbWVudFtwcmV2aW91c1lTeW1ib2xdO1xuICBlbGVtZW50W3ByZXZpb3VzWFN5bWJvbF0gPSBjbGllbnRYO1xuICBlbGVtZW50W3ByZXZpb3VzWVN5bWJvbF0gPSBjbGllbnRZO1xuICBpZiAoTWF0aC5hYnMoZWxlbWVudFtkZWx0YVhTeW1ib2xdKSA+IE1hdGguYWJzKGVsZW1lbnRbZGVsdGFZU3ltYm9sXSkpIHtcbiAgICAvLyBNb3ZlIHdhcyBtb3N0bHkgaG9yaXpvbnRhbC5cbiAgICB0cmFja1RvKGVsZW1lbnQsIGNsaWVudFgpO1xuICAgIC8vIEluZGljYXRlIHRoYXQgdGhlIGV2ZW50IHdhcyBoYW5kbGVkLiBJdCdkIGJlIG5pY2VyIGlmIHdlIGRpZG4ndCBoYXZlXG4gICAgLy8gdG8gZG8gdGhpcyBzbyB0aGF0LCBlLmcuLCBhIHVzZXIgY291bGQgYmUgc3dpcGluZyBsZWZ0IGFuZCByaWdodFxuICAgIC8vIHdoaWxlIHNpbXVsdGFuZW91c2x5IHNjcm9sbGluZyB1cCBhbmQgZG93bi4gKE5hdGl2ZSB0b3VjaCBhcHBzIGNhbiBkb1xuICAgIC8vIHRoYXQuKSBIb3dldmVyLCBNb2JpbGUgU2FmYXJpIHdhbnRzIHRvIGhhbmRsZSBzd2lwZSBldmVudHMgbmVhciB0aGVcbiAgICAvLyBwYWdlIGFuZCBpbnRlcnByZXQgdGhlbSBhcyBuYXZpZ2F0aW9ucy4gVG8gYXZvaWQgaGF2aW5nIGEgaG9yaXppb250YWxcbiAgICAvLyBzd2lwZSBtaXNpbnRlcHJldGVkIGFzIGEgbmF2aWdhdGlvbiwgd2UgaW5kaWNhdGUgdGhhdCB3ZSd2ZSBoYW5kbGVkXG4gICAgLy8gdGhlIGV2ZW50LCBhbmQgcHJldmVudCBkZWZhdWx0IGJlaGF2aW9yLlxuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIC8vIE1vdmUgd2FzIG1vc3RseSB2ZXJ0aWNhbC5cbiAgICByZXR1cm4gZmFsc2U7IC8vIE5vdCBoYW5kbGVkXG4gIH1cbn1cblxuLypcbiAqIEludm9rZWQgd2hlbiB0aGUgdXNlciBoYXMgYmVndW4gYSB0b3VjaCBvcGVyYXRpb24uXG4gKi9cbmZ1bmN0aW9uIHRvdWNoU3RhcnQoZWxlbWVudCwgY2xpZW50WCwgY2xpZW50WSkge1xuICBlbGVtZW50W3N5bWJvbHMuZHJhZ2dpbmddID0gdHJ1ZTtcbiAgZWxlbWVudFtzdGFydFhTeW1ib2xdID0gY2xpZW50WDtcbiAgZWxlbWVudFtwcmV2aW91c1hTeW1ib2xdID0gY2xpZW50WDtcbiAgZWxlbWVudFtwcmV2aW91c1lTeW1ib2xdID0gY2xpZW50WTtcbiAgZWxlbWVudFtkZWx0YVhTeW1ib2xdID0gMDtcbiAgZWxlbWVudFtkZWx0YVlTeW1ib2xdID0gMDtcbn1cblxuZnVuY3Rpb24gdHJhY2tUbyhlbGVtZW50LCB4KSB7XG4gIGNvbnN0IHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgY29uc3QgZHJhZ0Rpc3RhbmNlID0gZWxlbWVudFtzdGFydFhTeW1ib2xdIC0geDtcbiAgY29uc3QgZnJhY3Rpb24gPSB3aWR0aCA+IDAgP1xuICAgIGRyYWdEaXN0YW5jZSAvIHdpZHRoIDpcbiAgICAwO1xuICBlbGVtZW50LnRyYXZlbEZyYWN0aW9uID0gZnJhY3Rpb247XG59XG4iLCJpbXBvcnQgQ29sbGVjdGl2ZSBmcm9tICcuL0NvbGxlY3RpdmUnO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggVGFyZ2V0SW5Db2xsZWN0aXZlLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggYWxsb3dzIGEgY29tcG9uZW50IHRvIHByb3ZpZGUgYWdncmVnYXRlIGJlaGF2aW9yIHdpdGggb3RoZXJcbiAgICogZWxlbWVudHMsIGUuZy4sIGZvciBrZXlib2FyZCBoYW5kbGluZy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBpbXBsaWNpdGx5IGNyZWF0ZXMgYSBjb2xsZWN0aXZlIGZvciBhIGNvbXBvbmVudCBzbyB0aGF0IGl0IGNhblxuICAgKiBwYXJ0aWNpcGF0ZSBpbiBjb2xsZWN0aXZlIGtleWJvYXJkIGhhbmRsaW5nLiBTZWUgdGhlXG4gICAqIFtDb2xsZWN0aXZlXShDb2xsZWN0aXZlLm1kKSBjbGFzcyBmb3IgZGV0YWlscy5cbiAgICpcbiAgICogWW91IGNhbiB1c2UgdGhpcyBtaXhpbiBpbiBjb25qdW5jdGlvbiB3aXRoXG4gICAqIFtDb250ZW50Rmlyc3RDaGlsZFRhcmdldF0oQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQubWQpIHRvIGF1dG9tYXRpY2FsbHkgaGF2ZVxuICAgKiB0aGUgY29tcG9uZW50J3MgY29sbGVjdGl2ZSBleHRlbmRlZCB0byBpdHMgZmlyc3QgY2hpbGQuXG4gICAqL1xuICBjbGFzcyBUYXJnZXRJbkNvbGxlY3RpdmUgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuY29sbGVjdGl2ZSA9IG5ldyBDb2xsZWN0aXZlKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMvc2V0cyB0aGUgY3VycmVudCB0YXJnZXQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIFNldCB0aGlzIHRvIHBvaW50IHRvIGFub3RoZXIgZWxlbWVudC4gVGhhdCB0YXJnZXQgZWxlbWVudCB3aWxsIGJlXG4gICAgICogaW1wbGljaXRseSBhZGRlZCB0byB0aGUgY29tcG9uZW50J3MgY29sbGVjdGl2ZS4gVGhhdCBpcywgdGhlIGNvbXBvbmVudFxuICAgICAqIGFuZCBpdHMgdGFyZ2V0IHdpbGwgc2hhcmUgcmVzcG9uc2liaWxpdHkgZm9yIGhhbmRsaW5nIGtleWJvYXJkIGV2ZW50cy5cbiAgICAgKlxuICAgICAqIFlvdSBjYW4gc2V0IHRoaXMgcHJvcGVydHkgeW91cnNlbGYsIG9yIHlvdSBjYW4gdXNlIHRoZVxuICAgICAqIENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0IG1peGluIHRvIGF1dG9tYXRpY2FsbHkgc2V0IHRoZSB0YXJnZXQgdG8gdGhlXG4gICAgICogY29tcG9uZW50J3MgZmlyc3QgY2hpbGQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgZ2V0IHRhcmdldCgpIHtcbiAgICAgIHJldHVybiBzdXBlci50YXJnZXQ7XG4gICAgfVxuICAgIHNldCB0YXJnZXQoZWxlbWVudCkge1xuICAgICAgaWYgKCd0YXJnZXQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnRhcmdldCA9IGVsZW1lbnQ7IH1cbiAgICAgIHRoaXMuY29sbGVjdGl2ZS5hc3NpbWlsYXRlKGVsZW1lbnQpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFRhcmdldEluQ29sbGVjdGl2ZTtcbn07XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgaXRlbXNDaGFuZ2VkTGlzdGVuZXJTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2l0ZW1zQ2hhbmdlZExpc3RlbmVyJyk7XG5jb25zdCBzZWxlY3RlZEl0ZW1DaGFuZ2VkTGlzdGVuZXJTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3NlbGVjdGVkSXRlbUNoYW5nZWRMaXN0ZW5lcicpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggVGFyZ2V0U2VsZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggYWxsb3dzIGEgY29tcG9uZW50IHRvIGRlbGVnYXRlIGl0cyBvd24gc2VsZWN0aW9uIHNlbWFudGljcyB0byBhXG4gICAqIHRhcmdldCBlbGVtZW50LlxuICAgKlxuICAgKiBUaGlzIGlzIHVzZWZ1bCB3aGVuIGRlZmluaW5nIGNvbXBvbmVudHMgdGhhdCBhY3QgYXMgb3B0aW9uYWwgZmVhdHVyZXMgZm9yIGFcbiAgICogY29tcG9uZW50IHRoYXQgYWN0cyBsaWtlIGEgbGlzdC4gU2VlIGJhc2ljLWFycm93LXNlbGVjdGlvbiBhbmRcbiAgICogYmFzaWMtcGFnZS1kb3RzIGZvciBleGFtcGxlcyBvZiBjb21wb25lbnRzIHVzZWQgYXMgb3B0aW9uYWwgZmVhdHVyZXMgZm9yXG4gICAqIGNvbXBvbmVudHMgbGlrZSBiYXNpYy1jYXJvdXNlbC4gQSB0eXBpY2FsIHVzYWdlIG1pZ2h0IGJlOlxuICAgKlxuICAgKiAgICAgPGJhc2ljLWFycm93LXNlbGVjdGlvbj5cbiAgICogICAgICAgPGJhc2ljLWNhcm91c2VsPlxuICAgKiAgICAgICAgIC4uLiBpbWFnZXMsIGV0Yy4gLi4uXG4gICAqICAgICAgIDwvYmFzaWMtY2Fyb3VzZWw+XG4gICAqICAgICA8L2Jhc2ljLWFycm93LXNlbGVjdGlvbj5cbiAgICpcbiAgICogQmVjYXVzZSBiYXNpYy1hcnJvdy1zZWxlY3Rpb24gdXNlcyB0aGVcbiAgICogW1RhcmdldFNlbGVjdGlvbl0oVGFyZ2V0U2VsZWN0aW9uLm1kKSBtaXhpbiwgaXQgZXhwb3NlcyBtZW1iZXJzIHRvIGFjY2VzcyBhXG4gICAqIHNlbGVjdGlvbjogYHNlbGVjdE5leHRgLCBgc2VsZWN0UHJldmlvdXNgLCBgc2VsZWN0ZWRJbmRleGAsIGV0Yy4gVGhlc2UgYXJlXG4gICAqIGFsbCBkZWxlZ2F0ZWQgdG8gdGhlIGNoaWxkIGNvbXBvbmVudCAoaGVyZSwgYSBiYXNpYy1jYXJvdXNlbCkuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIGB0YXJnZXRgIHByb3BlcnR5IHRvIGJlIHNldCB0byB0aGUgZWxlbWVudCBhY3R1YWxseVxuICAgKiBtYW5hZ2luZyB0aGUgc2VsZWN0aW9uLiBZb3UgY2FuIHNldCB0aGF0IHByb3BlcnR5IHlvdXJzZWxmLCBvciB5b3UgY2FuIHVzZVxuICAgKiB0aGUgW0NvbnRlbnRGaXJzdENoaWxkVGFyZ2V0XShDb250ZW50Rmlyc3RDaGlsZFRhcmdldC5tZCkgbWl4aW4gdG9cbiAgICogaW1wbGljaXRseSB0YWtlIHRoZSBjb21wb25lbnQncyBmaXJzdCBjaGlsZCBhcyB0aGUgdGFyZ2V0LiBUaGlzIGlzIHdoYXRcbiAgICogYmFzaWMtYXJyb3ctc2VsZWN0aW9uIChhYm92ZSkgZG9lcy5cbiAgICovXG4gIGNsYXNzIFRhcmdldFNlbGVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgc2V0IG9mIGl0ZW1zIGluIHRoZSBsaXN0LlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50W119XG4gICAgICovXG4gICAgZ2V0IGl0ZW1zKCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG4gICAgICBjb25zdCBpdGVtcyA9IHRhcmdldCAmJiB0YXJnZXQuaXRlbXM7XG4gICAgICByZXR1cm4gaXRlbXMgfHwgW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuIHRoZSB1bmRlcmx5aW5nIGNvbnRlbnRzIGNoYW5nZS4gSXQgaXMgYWxzb1xuICAgICAqIGludm9rZWQgb24gY29tcG9uZW50IGluaXRpYWxpemF0aW9uIOKAkyBzaW5jZSB0aGUgaXRlbXMgaGF2ZSBcImNoYW5nZWRcIiBmcm9tXG4gICAgICogYmVpbmcgbm90aGluZy5cbiAgICAgKi9cbiAgICBpdGVtc0NoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuaXRlbXNDaGFuZ2VkKSB7IHN1cGVyLml0ZW1zQ2hhbmdlZCgpOyB9XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdpdGVtcy1jaGFuZ2VkJykpO1xuICAgIH1cblxuICAgIGdldCBzZWxlY3RlZEZyYWN0aW9uKCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG4gICAgICByZXR1cm4gdGFyZ2V0ICYmIHRhcmdldC5zZWxlY3RlZEZyYWN0aW9uO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRGcmFjdGlvbihmcmFjdGlvbikge1xuICAgICAgaWYgKCdzZWxlY3RlZEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEZyYWN0aW9uID0gZnJhY3Rpb247IH1cbiAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMudGFyZ2V0O1xuICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQuc2VsZWN0ZWRGcmFjdGlvbiAhPT0gZnJhY3Rpb24pIHtcbiAgICAgICAgdGFyZ2V0LnNlbGVjdGVkRnJhY3Rpb24gPSBmcmFjdGlvbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0sIG9yIG51bGwgaWYgdGhlcmUgaXMgbm8gc2VsZWN0aW9uLlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICAgIHJldHVybiB0YXJnZXQgJiYgdGFyZ2V0LnNlbGVjdGVkSXRlbTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkSXRlbShpdGVtKSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkSXRlbScgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtID0gaXRlbTsgfVxuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG4gICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRoaXMgbWV0aG9kIGV4aXN0cyBzbyB3cmFwcGluZyBjb21wb25lbnRzIGNhbiBoYW5kbGUgYSBjaGFuZ2UgaW4gdGhlXG4gICAgLy8gc2VsZWN0aW9uIHdpdGhvdXQgcG90ZW50aWFsbHkgcmUtaW52b2tpbmcgdGhlIHNlbGVjdGVkSXRlbSBzZXR0ZXIuIFRoaXNcbiAgICAvLyBpcyBraW5kIG9mIHVuc2F0aXNmeWluZywgdGhvdWdoLiBJdCdkIGJlIG5pY2VyIHRvIGxldCBzdWNoIGNvbXBvbmVudHNcbiAgICAvLyBqdXN0IGltcGxlbWVudCB0aGUgZ2V0dGVyL3NldHRlciBmb3Igc2VsZWN0ZWRJdGVtLCBidXQgaGF2ZSBhIHdheSB0b1xuICAgIC8vIGtub3cgd2hldGhlciB0aGV5IG5lZWQgdG8gYWxzbyB0aGF0IHByb3BlcnR5IGdldHRlci9zZXR0ZXIgZm9yIHRoZSB0YXJnZXRcbiAgICAvLyBjb21wb25lbnQuXG4gICAgc2VsZWN0ZWRJdGVtQ2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RlZEl0ZW1DaGFuZ2VkKSB7IHN1cGVyLnNlbGVjdGVkSXRlbUNoYW5nZWQoKTsgfVxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc2VsZWN0ZWQtaXRlbS1jaGFuZ2VkJykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgc2VsZWN0aW9uIG5hdmlnYXRpb25zIHdyYXAgZnJvbSBsYXN0IHRvIGZpcnN0LCBhbmQgdmljZSB2ZXJzYS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBkZWZhdWx0IHtmYWxzZX1cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0aW9uV3JhcHMoKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICAgIHJldHVybiB0YXJnZXQgJiYgdGFyZ2V0LnNlbGVjdGlvbldyYXBzO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0aW9uV3JhcHModmFsdWUpIHtcbiAgICAgIGlmICgnc2VsZWN0aW9uV3JhcHMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGlvbldyYXBzID0gdmFsdWU7IH1cbiAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMudGFyZ2V0O1xuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICB0YXJnZXQuc2VsZWN0aW9uV3JhcHMgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzL3NldHMgdGhlIHRhcmdldCBlbGVtZW50IHRvIHdoaWNoIHRoaXMgY29tcG9uZW50IHdpbGwgZGVsZWdhdGVcbiAgICAgKiBzZWxlY3Rpb24gYWN0aW9ucy5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXQgdGFyZ2V0KCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnRhcmdldDtcbiAgICB9XG4gICAgc2V0IHRhcmdldChlbGVtZW50KSB7XG4gICAgICBpZiAoJ3RhcmdldCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIudGFyZ2V0ID0gZWxlbWVudDsgfVxuICAgICAgaWYgKHRoaXNbaXRlbXNDaGFuZ2VkTGlzdGVuZXJTeW1ib2xdKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignaXRlbXMtY2hhbmdlZCcsIHRoaXNbaXRlbXNDaGFuZ2VkTGlzdGVuZXJTeW1ib2xdKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzW3NlbGVjdGVkSXRlbUNoYW5nZWRMaXN0ZW5lclN5bWJvbF0pIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdzZWxlY3RlZC1pdGVtLWNoYW5nZWQnLCB0aGlzW3NlbGVjdGVkSXRlbUNoYW5nZWRMaXN0ZW5lclN5bWJvbF0pO1xuICAgICAgfVxuICAgICAgdGhpc1tpdGVtc0NoYW5nZWRMaXN0ZW5lclN5bWJvbF0gPSBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2l0ZW1zLWNoYW5nZWQnLCBldmVudCA9PiB7XG4gICAgICAgIHRoaXMuaXRlbXNDaGFuZ2VkKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXNbc2VsZWN0ZWRJdGVtQ2hhbmdlZExpc3RlbmVyU3ltYm9sXSA9IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2VsZWN0ZWQtaXRlbS1jaGFuZ2VkJywgZXZlbnQgPT4ge1xuICAgICAgICAvLyBSRVZJRVc6IENvbXBvbmVudHMgYXBwbHlpbmcgVGFyZ2V0U2VsZWN0aW9uIGJvdGggbGlzdGVuIHRvIHRoaXNcbiAgICAgICAgLy8gZXZlbnQgKG9uIHRoZSB0YXJnZXQpLCBhbmQgcmFpc2UgaXQgdGhlbXNlbHZlcy4gSW4gdGhlb3J5LCB0aGV5J3JlXG4gICAgICAgIC8vIGV4cGVjdGVkIHRvICpub3QqIGNhdGNoIHRoZSBldmVudHMgdGhleSByYWlzZSB0aGVtc2VsdmVzLCBidXQgQ2hyb21lXG4gICAgICAgIC8vIChhdCBsZWFzdCkgYXBwZWFycyB0byB2aW9sYXRlIHRoYXQgZXhwZWN0YXRpb24uIFRoYXQgaXMsIGl0J3NcbiAgICAgICAgLy8gcG9zc2libGUgdG8gaGF2ZSBldmVudC50YXJnZXQgPT09IHRoaXMuIE1vcmUgY29uZnVzaW5nbHksIHRoZSBndWFyZFxuICAgICAgICAvLyBiZWxvdywgd2hpY2ggaXMgaW50ZW5kZWQgdG8gYXZvaWQgcmVjdXJzaXZlIGNhbGxzIHRvXG4gICAgICAgIC8vIHNlbGVjdGVkSXRlbUNoYW5nZWQsIGRvZXNuJ3Qgd29yayBhcyBleHBlY3RlZC4gRXZlbiBpZiB0aGUgZGVidWdnZXJcbiAgICAgICAgLy8gc2hvd3MgZXZlbnQudGFyZ2V0ID09PSB0aGlzLCB0aGUgY29udGVudHMgb2YgdGhlIFwiaWZcIiBzdGF0ZW1lbnQgd2lsbFxuICAgICAgICAvLyBiZSBleGVjdXRlZC5cbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gdGhpcykge1xuICAgICAgICAgIC8vIExldCB0aGUgY29tcG9uZW50IGtub3cgdGhlIHRhcmdldCdzIHNlbGVjdGlvbiBjaGFuZ2VkLCBidXQgd2l0aG91dFxuICAgICAgICAgIC8vIHJlLWludm9raW5nIHRoZSBzZWxlY3RJbmRleC9zZWxlY3RlZEl0ZW0gc2V0dGVyLlxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtQ2hhbmdlZCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEZvcmNlIGluaXRpYWwgcmVmcmVzaC5cbiAgICAgIHRoaXMuaXRlbXNDaGFuZ2VkKCk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gVGFyZ2V0U2VsZWN0aW9uO1xufTtcbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi9zeW1ib2xzJztcblxuXG5jb25zdCBwbGF5aW5nU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdwbGF5aW5nJyk7XG5jb25zdCBzZWxlY3Rpb25UaW1lckR1cmF0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3Rpb25UaW1lckR1cmF0aW9uJyk7XG5jb25zdCB0aW1lclRpbWVvdXRTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3RpbWVyVGltZW91dCcpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggVGltZXJTZWxlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBwcm92aWRlcyBmb3IgYXV0b21hdGljIHRpbWVkIGNoYW5nZXMgaW4gc2VsZWN0aW9uLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGlzIHVzZWZ1bCBmb3IgY3JlYXRpbmcgc2xpZGVzaG93LWxpa2UgZWxlbWVudHMuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyB0aGUgY29tcG9uZW50IHRvIGRlZmluZSBhbiBgaXRlbXNgIHByb3BlcnR5LCBhcyB3ZWxsIGFzXG4gICAqIGBzZWxlY3RGaXJzdGAgYW5kIGBzZWxlY3ROZXh0YCBtZXRob2RzLiBZb3UgY2FuIGltcGxlbWVudCB0aG9zZSB5b3Vyc2VsZixcbiAgICogb3IgdXNlIHRoZSBbQ29udGVudEFzSXRlbXNdKENvbnRlbnRBc0l0ZW1zLm1kKSBhbmRcbiAgICogW1NpbmdsZVNlbGVjdGlvbl0oU2luZ2xlU2VsZWN0aW9uLm1kKSBtaXhpbnMuXG4gICAqL1xuICBjbGFzcyBUaW1lclNlbGVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgLy8gU2V0IGRlZmF1bHRzLlxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnBsYXlpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMucGxheWluZyA9IHRoaXNbc3ltYm9scy5kZWZhdWx0c10ucGxheWluZztcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5zZWxlY3Rpb25UaW1lckR1cmF0aW9uID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLnNlbGVjdGlvblRpbWVyRHVyYXRpb24gPSB0aGlzW3N5bWJvbHMuZGVmYXVsdHNdLnNlbGVjdGlvblRpbWVyRHVyYXRpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGVudENoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuY29udGVudENoYW5nZWQpIHsgc3VwZXIuY29udGVudENoYW5nZWQoKTsgfVxuICAgICAgcmVzdGFydFRpbWVyKHRoaXMpO1xuICAgIH1cblxuICAgIGdldCBbc3ltYm9scy5kZWZhdWx0c10oKSB7XG4gICAgICBjb25zdCBkZWZhdWx0cyA9IHN1cGVyW3N5bWJvbHMuZGVmYXVsdHNdIHx8IHt9O1xuICAgICAgZGVmYXVsdHMucGxheWluZyA9IGZhbHNlO1xuICAgICAgZGVmYXVsdHMuc2VsZWN0aW9uVGltZXJEdXJhdGlvbiA9IDEwMDA7XG4gICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQmVnaW4gYXV0b21hdGljIHByb2dyZXNzaW9uIG9mIHRoZSBzZWxlY3Rpb24uXG4gICAgICovXG4gICAgcGxheSgpIHtcbiAgICAgIGlmIChzdXBlci5wbGF5KSB7IHN1cGVyLnBsYXkoKTsgfVxuICAgICAgc3RhcnRUaW1lcih0aGlzKTtcbiAgICAgIHRoaXNbcGxheWluZ1N5bWJvbF0gPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhdXNlIGF1dG9tYXRpYyBwcm9ncmVzc2lvbiBvZiB0aGUgc2VsZWN0aW9uLlxuICAgICAqL1xuICAgIHBhdXNlKCkge1xuICAgICAgaWYgKHN1cGVyLnBhdXNlKSB7IHN1cGVyLnBhdXNlKCk7IH1cbiAgICAgIGNsZWFyVGltZXIodGhpcyk7XG4gICAgICB0aGlzW3BsYXlpbmdTeW1ib2xdID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgc2VsZWN0aW9uIGlzIGJlaW5nIGF1dG9tYXRpY2FsbHkgYWR2YW5jZWQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIGdldCBwbGF5aW5nKCkge1xuICAgICAgcmV0dXJuIHRoaXNbcGxheWluZ1N5bWJvbF07XG4gICAgfVxuICAgIHNldCBwbGF5aW5nKHBsYXlpbmcpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzUGxheWluZyA9IHRoaXNbcGxheWluZ1N5bWJvbF07XG4gICAgICBjb25zdCBwYXJzZWQgPSBTdHJpbmcocGxheWluZykgPT09ICd0cnVlJzsgLy8gQ2FzdCB0byBib29sZWFuXG4gICAgICBpZiAoJ3BsYXlpbmcnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnBsYXlpbmcgPSBwbGF5aW5nOyB9XG4gICAgICBpZiAocGFyc2VkICE9PSBwcmV2aW91c1BsYXlpbmcpIHtcbiAgICAgICAgaWYgKHBsYXlpbmcpIHtcbiAgICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFdoZW4gdGhlIHNlbGVjdGVkIGl0ZW0gY2hhbmdlcyAoYmVjYXVzZSBvZiBzb21ldGhpbmcgdGhpcyBtaXhpbiBkaWQsIG9yXG4gICAgICogd2FzIGNoYW5nZWQgYnkgYW4gb3V0c2lkZSBhZ2VudCBsaWtlIHRoZSB1c2VyKSwgd2Ugd2FpdCBiZWZvcmUgYWR2YW5jaW5nXG4gICAgICogdG8gdGhlIG5leHQgaXRlbS4gQnkgdHJpZ2dlcmluZyB0aGUgbmV4dCBpdGVtIHRoaXMgd2F5LCB3ZSBpbXBsaWNpdGx5IGdldFxuICAgICAqIGEgZGVzaXJhYmxlIGJlaGF2aW9yOiBpZiB0aGUgdXNlciBjaGFuZ2VzIHRoZSBzZWxlY3Rpb24gKGUuZy4sIGluIGFcbiAgICAgKiBjYXJvdXNlbCksIHdlIGxldCB0aGVtIHNlZSB0aGF0IHNlbGVjdGlvbiBzdGF0ZSBmb3IgYSB3aGlsZSBiZWZvcmVcbiAgICAgKiBhZHZhbmNpbmcgdGhlIHNlbGVjdGlvbiBvdXJzZWx2ZXMuXG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICAgIHJldHVybiBzdXBlci5zZWxlY3RlZEl0ZW07XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEl0ZW0oaXRlbSkge1xuICAgICAgaWYgKCdzZWxlY3RlZEl0ZW0nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSXRlbSA9IGl0ZW07IH1cbiAgICAgIHJlc3RhcnRUaW1lcih0aGlzKTtcbiAgICB9XG5cbiAgICAvLyBJbiBjYXNlIHRoaXMgbWl4aW4gaXMgYmVpbmcgdXNlZCB3aXRoIFRhcmdldFNlbGVjdGlvbi5cbiAgICBzZWxlY3RlZEl0ZW1DaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdGVkSXRlbUNoYW5nZWQpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtQ2hhbmdlZCgpOyB9XG4gICAgICByZXN0YXJ0VGltZXIodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIHRoYXQgd2lsbCBlbGFwc2UgYWZ0ZXIgdGhlIHNlbGVjdGlvbiBjaGFuZ2VzXG4gICAgICogYmVmb3JlIHRoZSBzZWxlY3Rpb24gd2lsbCBiZSBhZHZhbmNlZCB0byB0aGUgbmV4dCBpdGVtIGluIHRoZSBsaXN0LlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn0gLSBUaW1lIGluIG1pbGxpc2Vjb25kc1xuICAgICAqIEBkZWZhdWx0IDEwMDAgKDEgc2Vjb25kKVxuICAgICAqL1xuICAgIGdldCBzZWxlY3Rpb25UaW1lckR1cmF0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXNbc2VsZWN0aW9uVGltZXJEdXJhdGlvblN5bWJvbF07XG4gICAgfVxuICAgIHNldCBzZWxlY3Rpb25UaW1lckR1cmF0aW9uKHZhbHVlKSB7XG4gICAgICB0aGlzW3NlbGVjdGlvblRpbWVyRHVyYXRpb25TeW1ib2xdID0gcGFyc2VJbnQodmFsdWUpO1xuICAgICAgaWYgKCdzZWxlY3Rpb25UaW1lckR1cmF0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3Rpb25UaW1lckR1cmF0aW9uID0gdmFsdWU7IH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBUaW1lclNlbGVjdGlvbjtcbn07XG5cblxuZnVuY3Rpb24gY2xlYXJUaW1lcihlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50W3RpbWVyVGltZW91dFN5bWJvbF0pIHtcbiAgICBjbGVhclRpbWVvdXQoZWxlbWVudFt0aW1lclRpbWVvdXRTeW1ib2xdKTtcbiAgICBlbGVtZW50W3RpbWVyVGltZW91dFN5bWJvbF0gPSBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc3RhcnRUaW1lcihlbGVtZW50KSB7XG4gIGNsZWFyVGltZXIoZWxlbWVudCk7XG4gIGlmIChlbGVtZW50LnBsYXlpbmcgJiYgZWxlbWVudC5pdGVtcyAmJiBlbGVtZW50Lml0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICBzdGFydFRpbWVyKGVsZW1lbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0YXJ0VGltZXIoZWxlbWVudCkge1xuICAvLyBJZiBwbGF5KCkgaXMgY2FsbGVkIG1vcmUgdGhhbiBvbmNlLCBjYW5jZWwgYW55IGV4aXN0aW5nIHRpbWVyLlxuICBjbGVhclRpbWVyKGVsZW1lbnQpO1xuICBlbGVtZW50W3RpbWVyVGltZW91dFN5bWJvbF0gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBzZWxlY3ROZXh0V2l0aFdyYXAoZWxlbWVudCk7XG4gIH0sIGVsZW1lbnQuc2VsZWN0aW9uVGltZXJEdXJhdGlvbik7XG59XG5cbi8vIFNlbGVjdCB0aGUgbmV4dCBpdGVtLCB3cmFwcGluZyB0byBmaXJzdCBpdGVtIGlmIG5lY2Vzc2FyeS5cbmZ1bmN0aW9uIHNlbGVjdE5leHRXaXRoV3JhcChlbGVtZW50KSB7XG4gIGNvbnN0IGl0ZW1zID0gZWxlbWVudC5pdGVtcztcbiAgaWYgKGl0ZW1zICYmIGl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICBpZiAoZWxlbWVudC5zZWxlY3RlZEluZGV4ID09IG51bGwgfHwgZWxlbWVudC5zZWxlY3RlZEluZGV4ID09PSBpdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICBlbGVtZW50LnNlbGVjdEZpcnN0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuc2VsZWN0TmV4dCgpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IGNyZWF0ZVN5bWJvbCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi9zeW1ib2xzJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgYWJzb3JiRGVjZWxlcmF0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdhYnNvcmJEZWNlbGVyYXRpb24nKTtcbmNvbnN0IGxhc3REZWx0YVhTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2xhc3REZWx0YVgnKTtcbmNvbnN0IGxhc3RXaGVlbFRpbWVvdXRTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2xhc3RXaGVlbFRpbWVvdXQnKTtcbmNvbnN0IHBvc3ROYXZpZ2F0ZURlbGF5Q29tcGxldGVTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3Bvc3ROYXZpZ2F0ZURlbGF5Q29tcGxldGUnKTtcbmNvbnN0IHdoZWVsRGlzdGFuY2VTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3doZWVsRGlzdGFuY2UnKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFRyYWNrcGFkRGlyZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFwcyBhIGhvcml6b250YWwgdHJhY2twYWQgc3dpcGUgZ2VzdHVyZXMgKG9yIGhvcml6b250YWwgbW91c2VcbiAgICogd2hlZWwgYWN0aW9ucykgdG8gZGlyZWN0aW9uIHNlbWFudGljcy5cbiAgICpcbiAgICogWW91IGNhbiB1c2UgdGhpcyBtaXhpbiB3aXRoIGEgbWl4aW4gbGlrZVxuICAgKiBbRGlyZWN0aW9uU2VsZWN0aW9uXShEaXJlY3Rpb25TZWxlY3Rpb24ubWQpIHRvIGxldCB0aGUgdXNlciBjaGFuZ2UgdGhlXG4gICAqIHNlbGVjdGlvbiB3aXRoIHRoZSB0cmFja3BhZCBvciBtb3VzZSB3aGVlbC5cbiAgICpcbiAgICogVG8gcmVzcG9uZCB0byB0aGUgdHJhY2twYWQsIHdlIGNhbiBsaXN0ZW4gdG8gdGhlIERPTSdzIFwid2hlZWxcIiBldmVudHMuXG4gICAqIFRoZXNlIGV2ZW50cyBhcmUgZmlyZWQgYXMgdGhlIHVzZXIgZHJhZ3MgdGhlaXIgZmluZ2VycyBhY3Jvc3MgYSB0cmFja3BhZC5cbiAgICogVW5mb3J0dW5hdGVseSwgYnJvd3NlcnMgYXJlIG1pc3NpbmcgYSBjcml0aWNhbCBldmVudCDigJTCoHRoZXJlIGlzIG5vIGV2ZW50XG4gICAqIHdoZW4gdGhlIHVzZXIgKnN0b3BzKiBhIGdlc3R1cmVkIG9uIHRoZSB0cmFja3BhZCBvciBtb3VzZSB3aGVlbC5cbiAgICpcbiAgICogVG8gbWFrZSB0aGluZ3Mgd29yc2UsIHRoZSBtYWluc3RyZWFtIGJyb3dzZXJzIGNvbnRpbnVlIHRvIGdlbmVyYXRlIGZha2VcbiAgICogd2hlZWwgZXZlbnRzIGV2ZW4gYWZ0ZXIgdGhlIHVzZXIgaGFzIHN0b3BwZWQgZHJhZ2dpbmcgdGhlaXIgZmluZ2Vycy4gVGhlc2VcbiAgICogZmFrZSBldmVudHMgc2ltdWxhdGUgdGhlIHVzZXIgZ3JhZHVhbGx5IHNsb3dpbmcgZG93biB0aGUgZHJhZyB1bnRpbCB0aGV5XG4gICAqIGNvbWUgdG8gYSBzbW9vdGggc3RvcC4gSW4gc29tZSBjb250ZXh0cywgdGhlc2UgZmFrZSB3aGVlbCBldmVudHMgbWlnaHQgYmVcbiAgICogaGVscGZ1bCwgYnV0IGluIHRyeWluZyB0byBzdXBwbHkgdHlwaWNhbCB0cmFja3BhZCBzd2lwZSBuYXZpZ2F0aW9uLCB0aGVzZVxuICAgKiBmYWtlIGV2ZW50cyBnZXQgaW4gdGhlIHdheS5cbiAgICpcbiAgICogVGhpcyBjb21wb25lbnQgdXNlcyBoZXVyaXN0aWNzIHRvIHdvcmsgYXJvdW5kIHRoZXNlIHByb2JsZW1zLCBidXQgdGhlXG4gICAqIGNvbXBsZXggbmF0dXJlIG9mIHRoZSBwcm9ibGVtIG1ha2UgaXQgZXh0cmVtZWx5IGRpZmZpY3VsdCB0byBhY2hpZXZlIHRoZVxuICAgKiBzYW1lIGRlZ3JlZSBvZiB0cmFja3BhZCByZXNwb25zaXZlbmVzcyBwb3NzaWJsZSB3aXRoIG5hdGl2ZSBhcHBsaWNhdGlvbnMuXG4gICAqL1xuICBjbGFzcyBUcmFja3BhZERpcmVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlZCA9IHdoZWVsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJlc2V0V2hlZWxUcmFja2luZyh0aGlzKTtcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLlxuICAgIGdldCBbc3ltYm9scy5kcmFnZ2luZ10oKSB7XG4gICAgICByZXR1cm4gc3VwZXJbc3ltYm9scy5kcmFnZ2luZ107XG4gICAgfVxuICAgIHNldCBbc3ltYm9scy5kcmFnZ2luZ10odmFsdWUpIHtcbiAgICAgIGlmIChzeW1ib2xzLmRyYWdnaW5nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyW3N5bWJvbHMuZHJhZ2dpbmddID0gdmFsdWU7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgbGVmdC5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgW3N5bWJvbHMuZ29MZWZ0XSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmdvTGVmdF0pIHsgcmV0dXJuIHN1cGVyW3N5bWJvbHMuZ29MZWZ0XSgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHJpZ2h0LlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBbc3ltYm9scy5nb1JpZ2h0XSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmdvUmlnaHRdKSB7IHJldHVybiBzdXBlcltzeW1ib2xzLmdvUmlnaHRdKCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGlzdGFuY2UgdGhlIHVzZXIgaGFzIG1vdmVkIHRoZSBmaXJzdCB0b3VjaHBvaW50IHNpbmNlIHRoZSBiZWdpbm5pbmdcbiAgICAgKiBvZiBhIHRyYWNrcGFkL3doZWVsIG9wZXJhdGlvbiwgZXhwcmVzc2VkIGFzIGEgZnJhY3Rpb24gb2YgdGhlIGVsZW1lbnQnc1xuICAgICAqIHdpZHRoLlxuICAgICAqXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICovXG4gICAgZ2V0IHRyYXZlbEZyYWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnRyYXZlbEZyYWN0aW9uO1xuICAgIH1cbiAgICBzZXQgdHJhdmVsRnJhY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICgndHJhdmVsRnJhY3Rpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnRyYXZlbEZyYWN0aW9uID0gdmFsdWU7IH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBUcmFja3BhZERpcmVjdGlvbjtcbn07XG5cblxuLy8gVGltZSB3ZSB3YWl0IGZvbGxvd2luZyBhIG5hdmlnYXRpb24gYmVmb3JlIHBheWluZyBhdHRlbnRpb24gdG8gd2hlZWxcbi8vIGV2ZW50cyBhZ2Fpbi5cbmNvbnN0IFBPU1RfTkFWSUdBVEVfVElNRSA9IDI1MDtcblxuLy8gVGltZSB3ZSB3YWl0IGFmdGVyIHRoZSBsYXN0IHdoZWVsIGV2ZW50IGJlZm9yZSB3ZSByZXNldCB0aGluZ3MuXG5jb25zdCBXSEVFTF9USU1FID0gMTAwO1xuXG5cbi8vIEZvbGxvd2luZyBhIG5hdmlnYXRpb24sIHBhcnRpYWxseSByZXNldCBvdXIgd2hlZWwgdHJhY2tpbmcuXG5mdW5jdGlvbiBwb3N0TmF2aWdhdGUoZWxlbWVudCkge1xuICBlbGVtZW50LnRyYXZlbEZyYWN0aW9uID0gMDtcbiAgZWxlbWVudFt3aGVlbERpc3RhbmNlU3ltYm9sXSA9IDA7XG4gIGVsZW1lbnRbcG9zdE5hdmlnYXRlRGVsYXlDb21wbGV0ZVN5bWJvbF0gPSB0cnVlO1xuICBlbGVtZW50W2Fic29yYkRlY2VsZXJhdGlvblN5bWJvbF0gPSB0cnVlO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBlbGVtZW50W3Bvc3ROYXZpZ2F0ZURlbGF5Q29tcGxldGVTeW1ib2xdID0gZmFsc2U7XG4gIH0sIFBPU1RfTkFWSUdBVEVfVElNRSk7XG59XG5cbi8vIFJlc2V0IGFsbCBzdGF0ZSByZWxhdGVkIHRvIHRoZSB0cmFja2luZyBvZiB0aGUgd2hlZWwuXG5mdW5jdGlvbiByZXNldFdoZWVsVHJhY2tpbmcoZWxlbWVudCkge1xuICBlbGVtZW50LnRyYXZlbEZyYWN0aW9uID0gMDtcbiAgZWxlbWVudFt3aGVlbERpc3RhbmNlU3ltYm9sXSA9IDA7XG4gIGVsZW1lbnRbbGFzdERlbHRhWFN5bWJvbF0gPSAwO1xuICBlbGVtZW50W2Fic29yYkRlY2VsZXJhdGlvblN5bWJvbF0gPSBmYWxzZTtcbiAgZWxlbWVudFtwb3N0TmF2aWdhdGVEZWxheUNvbXBsZXRlU3ltYm9sXSA9IGZhbHNlO1xuICBpZiAoZWxlbWVudFtsYXN0V2hlZWxUaW1lb3V0U3ltYm9sXSkge1xuICAgIGNsZWFyVGltZW91dChlbGVtZW50W2xhc3RXaGVlbFRpbWVvdXRTeW1ib2xdKTtcbiAgICBlbGVtZW50W2xhc3RXaGVlbFRpbWVvdXRTeW1ib2xdID0gbnVsbDtcbiAgfVxufVxuXG4vLyBEZWZpbmUgb3VyIG93biBzaWduIGZ1bmN0aW9uLCBzaW5jZSAoYXMgb2YgTWF5IDIwMTUpLCBTYWZhcmkgYW5kIElFIGRvbid0XG4vLyBzdXBwbHkgTWF0aC5zaWduKCkuXG5mdW5jdGlvbiBzaWduKHgpIHtcbiAgcmV0dXJuICh4ID09PSAwKSA/XG4gICAgMCA6XG4gICAgKHggPiAwKSA/XG4gICAgICAxIDpcbiAgICAgIC0xO1xufVxuXG4vLyBUT0RPOiBEYW1waW5nLCBvciBzb21lIG90aGVyIHRyZWF0bWVudCBmb3IgZ29pbmcgcGFzdCB0aGUgZW5kcy5cblxuLypcbiAqIEEgd2hlZWwgZXZlbnQgaGFzIGJlZW4gZ2VuZXJhdGVkLiBUaGlzIGNvdWxkIGJlIGEgcmVhbCB3aGVlbCBldmVudCwgb3IgaXRcbiAqIGNvdWxkIGJlIGZha2UgKHNlZSBub3RlcyBpbiB0aGUgaGVhZGVyKS5cbiAqXG4gKiBUaGlzIGhhbmRsZXIgdXNlcyBzZXZlcmFsIHN0cmF0ZWdpZXMgdG8gdHJ5IHRvIGFwcHJveGltYXRlIG5hdGl2ZSB0cmFja3BhZFxuICogc3dpcGUgbmF2aWdhdGlvbi5cbiAqXG4gKiBJZiB0aGUgdXNlciBoYXMgZHJhZ2dlZCBlbm91Z2ggdG8gY2F1c2UgYSBuYXZpZ2F0aW9uLCB0aGVuIGZvciBhIHNob3J0XG4gKiBkZWxheSBmb2xsb3dpbmcgdGhhdCBuYXZpZ2F0aW9uLCBzdWJzZXF1ZW50IHdoZWVsIGV2ZW50cyB3aWxsIGJlIGlnbm9yZWQuXG4gKlxuICogRnVydGhlcm1vcmUsIGZvbGx3b3dpbmcgYSBuYXZpZ2F0aW9uLCB3ZSBpZ25vcmUgYWxsIHdoZWVsIGV2ZW50cyB1bnRpbCB3ZVxuICogcmVjZWl2ZSBhdCBsZWFzdCBvbmUgZXZlbnQgd2hlcmUgdGhlIGV2ZW50J3MgZGVsdGFYIChkaXN0YW5jZSB0cmF2ZWxlZCkgaXNcbiAqICpncmVhdGVyKiB0aGFuIHRoZSBwcmV2aW91cyBldmVudCdzIGRlbHRhWC4gVGhpcyBoZWxwcyB1cyBmaWx0ZXIgb3V0IHRoZVxuICogZmFrZSB3aGVlbCBldmVudHMgZ2VuZXJhdGVkIGJ5IHRoZSBicm93c2VyIHRvIHNpbXVsYXRlIGRlY2VsZXJhdGlvbi5cbiAqXG4gKi9cbmZ1bmN0aW9uIHdoZWVsKGVsZW1lbnQsIGV2ZW50KSB7XG5cbiAgLy8gU2luY2Ugd2UgaGF2ZSBhIG5ldyB3aGVlbCBldmVudCwgcmVzZXQgb3VyIHRpbWVyIHdhaXRpbmcgZm9yIHRoZSBsYXN0XG4gIC8vIHdoZWVsIGV2ZW50IHRvIHBhc3MuXG4gIGlmIChlbGVtZW50W2xhc3RXaGVlbFRpbWVvdXRTeW1ib2xdKSB7XG4gICAgY2xlYXJUaW1lb3V0KGVsZW1lbnRbbGFzdFdoZWVsVGltZW91dFN5bWJvbF0pO1xuICB9XG4gIGVsZW1lbnRbbGFzdFdoZWVsVGltZW91dFN5bWJvbF0gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB3aGVlbFRpbWVkT3V0KGVsZW1lbnQpO1xuICB9LCBXSEVFTF9USU1FKTtcblxuICBjb25zdCBkZWx0YVggPSBldmVudC5kZWx0YVg7XG4gIGNvbnN0IGRlbHRhWSA9IGV2ZW50LmRlbHRhWTtcblxuICAvLyBTZWUgaWYgZWxlbWVudCBldmVudCByZXByZXNlbnRzIGFjY2VsZXJhdGlvbiBvciBkZWNlbGVyYXRpb24uXG4gIGNvbnN0IGFjY2VsZXJhdGlvbiA9IHNpZ24oZGVsdGFYKSAqIChkZWx0YVggLSBlbGVtZW50W2xhc3REZWx0YVhTeW1ib2xdKTtcbiAgZWxlbWVudFtsYXN0RGVsdGFYU3ltYm9sXSA9IGRlbHRhWDtcblxuICBpZiAoTWF0aC5hYnMoZGVsdGFYKSA8IE1hdGguYWJzKGRlbHRhWSkpIHtcbiAgICAvLyBNb3ZlIHdhcyBtb3N0bHkgdmVydGljYWwuIFRoZSB1c2VyIG1heSBiZSB0cnlpbmcgc2Nyb2xsIHdpdGggdGhlXG4gICAgLy8gdHJhY2twYWQvd2hlZWwuIFRvIGJlIG9uIHRoZSBzYWZlLCB3ZSBpZ25vcmUgc3VjaCBldmVudHMuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGVsZW1lbnRbcG9zdE5hdmlnYXRlRGVsYXlDb21wbGV0ZVN5bWJvbF0pIHtcbiAgICAvLyBJdCdzIHRvbyBzb29uIGFmdGVyIGEgbmF2aWdhdGlvbjsgaWdub3JlIHRoZSBldmVudC5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChhY2NlbGVyYXRpb24gPiAwKSB7XG4gICAgLy8gVGhlIGV2ZW50cyBhcmUgbm90IChvciBhcmUgbm8gbG9uZ2VyKSBkZWNlbGVyYXRpbmcsIHNvIHdlIGNhbiBzdGFydFxuICAgIC8vIHBheWluZyBhdHRlbnRpb24gdG8gdGhlbSBhZ2Fpbi5cbiAgICBlbGVtZW50W2Fic29yYkRlY2VsZXJhdGlvblN5bWJvbF0gPSBmYWxzZTtcbiAgfSBlbHNlIGlmIChlbGVtZW50W2Fic29yYkRlY2VsZXJhdGlvblN5bWJvbF0pIHtcbiAgICAvLyBUaGUgd2hlZWwgZXZlbnQgd2FzIGxpa2VseSBmYWtlZCB0byBzaW11bGF0ZSBkZWNlbGVyYXRpb247IGlnbm9yZSBpdC5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGVsZW1lbnRbd2hlZWxEaXN0YW5jZVN5bWJvbF0gKz0gZGVsdGFYO1xuXG4gIC8vIFVwZGF0ZSB0aGUgdHJhdmVsIGZyYWN0aW9uIG9mIHRoZSBlbGVtZW50IGJlaW5nIG5hdmlnYXRlZC5cbiAgY29uc3Qgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICBsZXQgdHJhdmVsRnJhY3Rpb24gPSB3aWR0aCA+IDAgP1xuICAgIGVsZW1lbnRbd2hlZWxEaXN0YW5jZVN5bWJvbF0gLyB3aWR0aCA6XG4gICAgMDtcbiAgZWxlbWVudFtzeW1ib2xzLmRyYWdnaW5nXSA9IHRydWU7XG4gIHRyYXZlbEZyYWN0aW9uID0gc2lnbih0cmF2ZWxGcmFjdGlvbikgKiBNYXRoLm1pbihNYXRoLmFicyh0cmF2ZWxGcmFjdGlvbiksIDEpO1xuICBlbGVtZW50LnRyYXZlbEZyYWN0aW9uID0gdHJhdmVsRnJhY3Rpb247XG5cbiAgLy8gSWYgdGhlIHVzZXIgaGFzIGRyYWdnZWQgZW5vdWdoIHRvIHJlYWNoIHRoZSBwcmV2aW91cy9uZXh0IGl0ZW0sIHRoZW5cbiAgLy8gY29tcGxldGUgYSBuYXZpZ2F0aW9uIHRvIHRoYXQgaXRlbS5cbiAgaWYgKHRyYXZlbEZyYWN0aW9uID09PSAxKSB7XG4gICAgZWxlbWVudFtzeW1ib2xzLmRyYWdnaW5nXSA9IGZhbHNlO1xuICAgIGVsZW1lbnRbc3ltYm9scy5nb1JpZ2h0XSgpO1xuICAgIHBvc3ROYXZpZ2F0ZShlbGVtZW50KTtcbiAgfSBlbHNlIGlmICh0cmF2ZWxGcmFjdGlvbiA9PT0gLTEpIHtcbiAgICBlbGVtZW50W3N5bWJvbHMuZHJhZ2dpbmddID0gZmFsc2U7XG4gICAgZWxlbWVudFtzeW1ib2xzLmdvTGVmdF0oKTtcbiAgICBwb3N0TmF2aWdhdGUoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gQSBzdWZmaWNpZW50bHkgbG9uZyBwZXJpb2Qgb2YgdGltZSBoYXMgcGFzc2VkIHNpbmNlIHRoZSBsYXN0IHdoZWVsIGV2ZW50LlxuLy8gV2Ugc25hcCB0aGUgc2VsZWN0aW9uIHRvIHRoZSBjbG9zZXN0IGl0ZW0sIHRoZW4gcmVzZXQgb3VyIHN0YXRlLlxuZnVuY3Rpb24gd2hlZWxUaW1lZE91dChlbGVtZW50KSB7XG5cbiAgLy8gU25hcCB0byB0aGUgY2xvc2VzdCBpdGVtLlxuICBlbGVtZW50W3N5bWJvbHMuZHJhZ2dpbmddID0gZmFsc2U7XG4gIGNvbnN0IHRyYXZlbEZyYWN0aW9uID0gZWxlbWVudC50cmF2ZWxGcmFjdGlvbjtcbiAgaWYgKHRyYXZlbEZyYWN0aW9uID49IDAuNSkge1xuICAgIGVsZW1lbnRbc3ltYm9scy5nb1JpZ2h0XSgpO1xuICB9IGVsc2UgaWYgKHRyYXZlbEZyYWN0aW9uIDw9IC0wLjUpIHtcbiAgICBlbGVtZW50W3N5bWJvbHMuZ29MZWZ0XSgpO1xuICB9XG5cbiAgLy8gVE9ETzogTGlzdGVuIGZvciB0aGUgdHJhbnNpdGlvbiB0byBjb21wbGV0ZSwgYW5kIHRoZW4gcmVzdG9yZVxuICAvLyBkcmFnZ2luZyB0byBmYWxzZSAob3IgdGhlIHByZXZpb3VzIHZhbHVlKS5cblxuICByZXNldFdoZWVsVHJhY2tpbmcoZWxlbWVudCk7XG59XG4iLCIvKipcbiAqIEBtZXRob2QgY29tcG9zZVRlbXBsYXRlc1xuICogQGRlc2NyaXB0aW9uIEdpdmVuIHR3byB0ZW1wbGF0ZXMsIHRoaXMgXCJmb2xkc1wiIG9uZSBpbnNpZGUgdGhlIG90aGVyLiBUaGlzIGlzXG4gKiBpcyB1c2VmdWwgZm9yIGRlZmluaW5nIGEgY29tcG9uZW50IHRoYXQgd2FudHMgdG8gZmlsbCBpbiBzbG90cyBpbiB0aGVcbiAqIHRlbXBsYXRlIG9mIGl0cyBiYXNlIGNsYXNzLlxuICpcbiAqIEZvciBub3csIHRoZSBmb2xkaW5nIHByb2Nlc3MganVzdCBlbnRhaWxzIHB1dHRpbmcgdGhlIGZpcnN0IGluc2lkZSB0aGVcbiAqIGxvY2F0aW9uIG9mIHRoZSBmaXJzdCA8c2xvdD4gbm9kZSBpbiB0aGUgc2Vjb25kIHRlbXBsYXRlLlxuICpcbiAqIEV4YW1wbGU6IGlmIHRoZSBmaXJzdCAoYmFzZSkgdGVtcGxhdGUgaXNcbiAqXG4gKiAgICAgPHRlbXBsYXRlPlxuICogICAgICAgPGI+XG4gKiAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAqICAgICAgIDwvYj5cbiAqICAgICA8L3RlbXBsYXRlPlxuICpcbiAqIGFuZCB0aGUgc2Vjb25kIChzdWJjbGFzcykgdGVtcGxhdGUgaXNcbiAqXG4gKiAgICAgPHRlbXBsYXRlPlxuICogICAgICAgSGVsbG8sIDxzbG90Pjwvc2xvdD4uXG4gKiAgICAgPC90ZW1wbGF0ZT5cbiAqXG4gKiBUaGVuIHRoZSByZXN1bHQgb2YgY2FsbGluZyBgY29tcG9zZVRlbXBsYXRlcyhmaXJzdCwgc2Vjb25kKWAgaXNcbiAqXG4gKiAgICAgPHRlbXBsYXRlPlxuICogICAgICAgPGI+XG4gKiAgICAgICAgIEhlbGxvLCA8c2xvdD48L3Nsb3Q+LlxuICogICAgICAgPC9iPlxuICogICAgIDwvdGVtcGxhdGU+XG4gKlxuICogTm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IGEgbWl4aW4sIGJ1dCBhIGhlbHBlciBmb3IgY3JlYXRpbmcgd2ViXG4gKiBjb21wb25lbnRzLlxuICpcbiAqIEBwYXJhbSB7KEhUTUxUZW1wbGF0ZXxzdHJpbmcpfSBiYXNlVGVtcGxhdGUgLSBUaGUgYmFzZSBjbGFzcyB0ZW1wbGF0ZS5cbiAqIEBwYXJhbSB7KEhUTUxUZW1wbGF0ZXxzdHJpbmcpfSBzdWJUZW1wbGF0ZSAtIFRoZSBzdWJjbGFzcyB0ZW1wbGF0ZS5cbiAqL1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBvc2VUZW1wbGF0ZXMoYmFzZVRlbXBsYXRlLCBzdWJUZW1wbGF0ZSkge1xuXG4gIGlmICghYmFzZVRlbXBsYXRlKSB7XG4gICAgLy8gTm8gZm9sZGluZyBuZWNlc3NhcnkuXG4gICAgcmV0dXJuIHN1YlRlbXBsYXRlO1xuICB9XG5cbiAgYmFzZVRlbXBsYXRlID0gbWFrZVRlbXBsYXRlKGJhc2VUZW1wbGF0ZSk7XG4gIHN1YlRlbXBsYXRlID0gbWFrZVRlbXBsYXRlKHN1YlRlbXBsYXRlKTtcbiAgY29uc3QgYmFzZUVsZW1lbnQgPSBiYXNlVGVtcGxhdGUgJiYgYmFzZVRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICBjb25zdCBtaXhpbkVsZW1lbnQgPSBzdWJUZW1wbGF0ZSAmJiBzdWJUZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcblxuICBjb25zdCBmb2xkZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuXG4gIC8vIEZvbGQgbWl4aW4gdGVtcGxhdGUgaW50byBmaXJzdCBzbG90IGVsZW1lbnQgaW4gYmFzZSB0ZW1wbGF0ZS5cbiAgLy8gVE9ETzogU3VwcG9ydCBuYW1lZCBzbG90cy5cbiAgY29uc3Qgc2xvdE5vZGUgPSBiYXNlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzbG90Jyk7XG4gIGlmIChzbG90Tm9kZSkge1xuICAgIHNsb3ROb2RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG1peGluRWxlbWVudCwgc2xvdE5vZGUpO1xuICAgIGZvbGRlZC5jb250ZW50LmFwcGVuZENoaWxkKGJhc2VFbGVtZW50KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBObyBwbGFjZSBpbiBiYXNlIGZvciBtaXhpbiB0ZW1wbGF0ZSAtLSB0aHJvdyBtaXhpbiB0ZW1wbGF0ZSBhd2F5LlxuICAgIGZvbGRlZC5jb250ZW50LmFwcGVuZENoaWxkKGJhc2VFbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb2xkZWQ7XG59XG5cblxuZnVuY3Rpb24gbWFrZVRlbXBsYXRlKGh0bWxPclRlbXBsYXRlKSB7XG4gIHJldHVybiB0eXBlb2YgaHRtbE9yVGVtcGxhdGUgPT09ICdzdHJpbmcnID9cbiAgICBjcmVhdGVUZW1wbGF0ZVdpdGhJbm5lckhUTUwoaHRtbE9yVGVtcGxhdGUpIDpcbiAgICBodG1sT3JUZW1wbGF0ZTtcbn1cblxuXG4vLyBUT0RPOiBTaGFyZSB3aXRoIFNoYWRvd1RlbXBsYXRlLlxuLy8gQ29udmVydCBhIHBsYWluIHN0cmluZyBvZiBIVE1MIGludG8gYSByZWFsIHRlbXBsYXRlIGVsZW1lbnQuXG5mdW5jdGlvbiBjcmVhdGVUZW1wbGF0ZVdpdGhJbm5lckhUTUwoaW5uZXJIVE1MKSB7XG4gIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgLy8gUkVWSUVXOiBJcyB0aGVyZSBhbiBlYXNpZXIgd2F5IHRvIGRvIHRoaXM/XG4gIC8vIFdlJ2QgbGlrZSB0byBqdXN0IHNldCBpbm5lckhUTUwgb24gdGhlIHRlbXBsYXRlIGNvbnRlbnQsIGJ1dCBzaW5jZSBpdCdzXG4gIC8vIGEgRG9jdW1lbnRGcmFnbWVudCwgdGhhdCBkb2Vzbid0IHdvcmsuXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuICB3aGlsZSAoZGl2LmNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgIHRlbXBsYXRlLmNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2LmNoaWxkTm9kZXNbMF0pO1xuICB9XG4gIHJldHVybiB0ZW1wbGF0ZTtcbn1cbiIsIi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIHN5bWJvbCB0aGF0IGNhbiBiZSB1c2VkIGZvciBhc3NvY2lhdGluZyBwcml2YXRlXG4gKiBkYXRhIHdpdGggYW4gZWxlbWVudC5cbiAqXG4gKiBNaXhpbnMgYW5kIGNvbXBvbmVudCBjbGFzc2VzIG9mdGVuIHdhbnQgdG8gYXNzb2NpYXRlIHByaXZhdGUgZGF0YSB3aXRoIGFuXG4gKiBlbGVtZW50IGluc3RhbmNlLCBidXQgSmF2YVNjcmlwdCBkb2VzIG5vdCBoYXZlIGRpcmVjdCBzdXBwb3J0IGZvciB0cnVlXG4gKiBwcml2YXRlIHByb3BlcnRpZXMuIE9uZSBhcHByb2FjaCBpcyB0byB1c2UgdGhlXG4gKiBbU3ltYm9sXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9TeW1ib2wpXG4gKiBkYXRhIHR5cGUgdG8gc2V0IGFuZCByZXRyaWV2ZSBkYXRhIG9uIGFuIGVsZW1lbnQuXG4gKlxuICogVW5mb3J0dW5hdGVseSwgdGhlIFN5bWJvbCB0eXBlIGlzIG5vdCBhdmFpbGFibGUgaW4gSW50ZXJuZXQgRXhwbG9yZXIgMTEuIFRoZVxuICogYGNyZWF0ZVN5bWJvbGAgaGVscGVyIGZ1bmN0aW9uIGV4aXN0cyBhcyBhIHdvcmthcm91bmQgZm9yIElFIDExLiBSYXRoZXIgdGhhblxuICogcmV0dXJuaW5nIGEgdHJ1ZSBTeW1ib2wsIGl0IHNpbXBseSByZXR1cm5zIGFuIHVuZGVyc2NvcmUtcHJlZml4ZWQgc3RyaW5nLlxuICpcbiAqIFVzYWdlOlxuICpcbiAqICAgICBjb25zdCBmb29TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2ZvbycpO1xuICpcbiAqICAgICBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gKiAgICAgICBnZXQgZm9vKCkge1xuICogICAgICAgICByZXR1cm4gdGhpc1tmb29TeW1ib2xdO1xuICogICAgICAgfVxuICogICAgICAgc2V0IGZvbyh2YWx1ZSkge1xuICogICAgICAgICB0aGlzW2Zvb1N5bWJvbF0gPSB2YWx1ZTtcbiAqICAgICAgIH1cbiAqICAgICB9XG4gKlxuICogSW4gSUUgMTEsIHRoaXMgc2FtcGxlIHdpbGwgXCJoaWRlXCIgZGF0YSBiZWhpbmQgYW4gaW5zdGFuY2UgcHJvcGVydHkgdGhpcy5fZm9vLlxuICogVGhlIHVzZSBvZiB0aGUgdW5kZXJzY29yZSBpcyBtZWFudCB0byByZWR1Y2UgKG5vdCBlbGltaW5hdGUpIHRoZSBwb3RlbnRpYWxcbiAqIGZvciBuYW1lIGNvbmZsaWN0cywgYW5kIGRpc2NvdXJhZ2UgKG5vdCBwcmV2ZW50KSBleHRlcm5hbCBhY2Nlc3MgdG8gdGhpc1xuICogZGF0YS4gSW4gbW9kZXJuIGJyb3dzZXJzLCB0aGUgYWJvdmUgY29kZSB3aWxsIGVsaW1pbmF0ZSB0aGUgcG90ZW50aWFsIG9mXG4gKiBuYW1pbmcgY29uZmxpY3RzLCBhbmQgYmV0dGVyIGhpZGUgdGhlIGRhdGEgYmVoaW5kIGEgcmVhbCBTeW1ib2wuXG4gKlxuICogQGZ1bmN0aW9uIGNyZWF0ZVN5bWJvbFxuICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXB0aW9uIC0gQSBzdHJpbmcgdG8gaWRlbnRpZnkgdGhlIHN5bWJvbCB3aGVuIGRlYnVnZ2luZ1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTeW1ib2woZGVzY3JpcHRpb24pIHtcbiAgcmV0dXJuIHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgP1xuICAgIFN5bWJvbChkZXNjcmlwdGlvbikgOlxuICAgIGBfJHtkZXNjcmlwdGlvbn1gO1xufVxuIiwiLypcbiAqIE1pY3JvdGFzayBoZWxwZXIgZm9yIElFIDExLlxuICpcbiAqIEV4ZWN1dGluZyBhIGZ1bmN0aW9uIGFzIGEgbWljcm90YXNrIGlzIHRyaXZpYWwgaW4gYnJvd3NlcnMgdGhhdCBzdXBwb3J0XG4gKiBwcm9taXNlcywgd2hvc2UgdGhlbigpIGNsYXVzZXMgdXNlIG1pY3JvdGFzayB0aW1pbmcuIElFIDExIGRvZXNuJ3Qgc3VwcG9ydFxuICogcHJvbWlzZXMsIGJ1dCBkb2VzIHN1cHBvcnQgTXV0YXRpb25PYnNlcnZlcnMsIHdoaWNoIGFyZSBhbHNvIGV4ZWN1dGVkIGFzXG4gKiBtaWNyb3Rhc2tzLiBTbyB0aGlzIGhlbHBlciB1c2VzIGFuIE11dGF0aW9uT2JzZXJ2ZXIgdG8gYWNoaWV2ZSBtaWNyb3Rhc2tcbiAqIHRpbWluZy5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9qYWtlYXJjaGliYWxkLmNvbS8yMDE1L3Rhc2tzLW1pY3JvdGFza3MtcXVldWVzLWFuZC1zY2hlZHVsZXMvXG4gKlxuICogSW5zcGlyZWQgYnkgUG9seW1lcidzIGFzeW5jKCkgZnVuY3Rpb24uXG4gKi9cblxuXG4vLyBUaGUgcXVldWUgb2YgcGVuZGluZyBjYWxsYmFja3MgdG8gYmUgZXhlY3V0ZWQgYXMgbWljcm90YXNrcy5cbmNvbnN0IGNhbGxiYWNrcyA9IFtdO1xuXG4vLyBDcmVhdGUgYW4gZWxlbWVudCB0aGF0IHdlIHdpbGwgbW9kaWZ5IHRvIGZvcmNlIG9ic2VydmFibGUgbXV0YXRpb25zLlxuY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcblxuLy8gQSBtb25vdG9uaWNhbGx5LWluY3JlYXNpbmcgdmFsdWUuXG5sZXQgY291bnRlciA9IDA7XG5cblxuLyoqXG4gKiBBZGQgYSBjYWxsYmFjayB0byB0aGUgbWljcm90YXNrIHF1ZXVlLlxuICpcbiAqIFRoaXMgdXNlcyBhIE11dGF0aW9uT2JzZXJ2ZXIgc28gdGhhdCBpdCB3b3JrcyBvbiBJRSAxMS5cbiAqXG4gKiBOT1RFOiBJRSAxMSBtYXkgYWN0dWFsbHkgdXNlIHRpbWVvdXQgdGltaW5nIHdpdGggTXV0YXRpb25PYnNlcnZlcnMuIFRoaXNcbiAqIG5lZWRzIG1vcmUgaW52ZXN0aWdhdGlvbi5cbiAqXG4gKiBAZnVuY3Rpb24gbWljcm90YXNrXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaWNyb3Rhc2soY2FsbGJhY2spIHtcbiAgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAvLyBGb3JjZSBhIG11dGF0aW9uLlxuICBlbGVtZW50LnRleHRDb250ZW50ID0gKytjb3VudGVyO1xufVxuXG5cbi8vIEV4ZWN1dGUgYW55IHBlbmRpbmcgY2FsbGJhY2tzLlxuZnVuY3Rpb24gZXhlY3V0ZUNhbGxiYWNrcygpIHtcbiAgd2hpbGUgKGNhbGxiYWNrcy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgY2FsbGJhY2sgPSBjYWxsYmFja3Muc2hpZnQoKTtcbiAgICBjYWxsYmFjaygpO1xuICB9XG59XG5cblxuLy8gQ3JlYXRlIHRoZSBvYnNlcnZlci5cbmNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZXhlY3V0ZUNhbGxiYWNrcyk7XG5vYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIHtcbiAgY2hhcmFjdGVyRGF0YTogdHJ1ZVxufSk7XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcbmltcG9ydCB0b2dnbGVDbGFzcyBmcm9tICcuL3RvZ2dsZUNsYXNzJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3Qgc2FmZVRvU2V0QXR0cmlidXRlc1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc2FmZVRvU2V0QXR0cmlidXRlcycpO1xuY29uc3QgcGVuZGluZ0F0dHJpYnV0ZXNTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3BlbmRpbmdBdHRyaWJ1dGVzJyk7XG5jb25zdCBwZW5kaW5nQ2xhc3Nlc1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgncGVuZGluZ0NsYXNzZXMnKTtcblxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbnMgZm9yIHVwZGF0aW5nIGF0dHJpYnV0ZXMsIGluY2x1ZGluZyB0aGUgYGNsYXNzYCBhdHRyaWJ1dGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAvKipcbiAgICogUGVyZm9ybSBhbnkgcGVuZGluZyB1cGRhdGVzIHRvIGF0dHJpYnV0ZXMgYW5kIGNsYXNzZXMuXG4gICAqXG4gICAqIFRoaXMgd3JpdGVzIGFueSBgc2V0QXR0cmlidXRlYCBvciBgdG9nZ2xlQ2xhc3NgIHZhbHVlcyB0aGF0IHdlcmUgcGVyZm9ybWVkXG4gICAqIGJlZm9yZSBhbiBlbGVtZW50IHdhcyBhdHRhY2hlZCB0byB0aGUgZG9jdW1lbnQgZm9yIHRoZSBmaXJzdCB0aW1lLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkIGJ5IG1peGlucy9jb21wb25lbnRzIGluIHRoZWlyXG4gICAqIGBjb25uZWN0ZWRDYWxsYmFja2AuIElmIG11bGl0cGxlIG1peGlucy9jb21wb25lbnRzIGludm9rZSB0aGlzIGR1cmluZyB0aGVcbiAgICogc2FtZSBgY29ubmVjdGVkQ2FsbGJhY2tgLCBvbmx5IHRoZSBmaXJzdCBjYWxsIHdpbGwgaGF2ZSBhbnkgZWZmZWN0LiBUaGVcbiAgICogc3Vic2VxdWVudCBjYWxscyB3aWxsIGJlIGhhcm1sZXNzLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgYmVpbmcgYWRkZWQgdG8gdGhlIGRvY3VtZW50LlxuICAgKi9cbiAgY29ubmVjdGVkKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50W3NhZmVUb1NldEF0dHJpYnV0ZXNTeW1ib2xdID0gdHJ1ZTtcblxuICAgIC8vIFNldCBhbnkgcGVuZGluZyBhdHRyaWJ1dGVzLlxuICAgIGlmIChlbGVtZW50W3BlbmRpbmdBdHRyaWJ1dGVzU3ltYm9sXSkge1xuICAgICAgZm9yIChsZXQgYXR0cmlidXRlIGluIGVsZW1lbnRbcGVuZGluZ0F0dHJpYnV0ZXNTeW1ib2xdKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudFtwZW5kaW5nQXR0cmlidXRlc1N5bWJvbF1bYXR0cmlidXRlXTtcbiAgICAgICAgc2V0QXR0cmlidXRlVG9FbGVtZW50KGVsZW1lbnQsIGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgICAgfVxuICAgICAgZWxlbWVudFtwZW5kaW5nQXR0cmlidXRlc1N5bWJvbF0gPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNldCBhbnkgcGVuZGluZyBjbGFzc2VzLlxuICAgIGlmIChlbGVtZW50W3BlbmRpbmdDbGFzc2VzU3ltYm9sXSkge1xuICAgICAgZm9yIChsZXQgY2xhc3NOYW1lIGluIGVsZW1lbnRbcGVuZGluZ0NsYXNzZXNTeW1ib2xdKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudFtwZW5kaW5nQ2xhc3Nlc1N5bWJvbF1bY2xhc3NOYW1lXTtcbiAgICAgICAgdG9nZ2xlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgICBlbGVtZW50W3BlbmRpbmdDbGFzc2VzU3ltYm9sXSA9IG51bGw7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBTZXQvdW5zZXQgdGhlIGF0dHJpYnV0ZSB3aXRoIHRoZSBpbmRpY2F0ZWQgbmFtZS5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgZXhpc3RzIHByaW1hcmlseSB0byBoYW5kbGUgdGhlIGNhc2Ugd2hlcmUgYW4gZWxlbWVudCB3YW50cyB0b1xuICAgKiBzZXQgYSBkZWZhdWx0IHByb3BlcnR5IHZhbHVlIHRoYXQgc2hvdWxkIGJlIHJlZmxlY3RlZCBhcyBhbiBhdHRyaWJ1dGUuIEFuXG4gICAqIGltcG9ydGFudCBsaW1pdGF0aW9uIG9mIGN1c3RvbSBlbGVtZW50IGNvbnN0dXJjdG9ycyBpcyB0aGF0IHRoZXkgY2Fubm90XG4gICAqIHNldCBhdHRyaWJ1dGVzLiBBIGNhbGwgdG8gYHNldEF0dHJpYnV0ZWAgZHVyaW5nIHRoZSBjb25zdHJ1Y3RvciB3aWxsXG4gICAqIGJlIGRlZmVycmVkIHVudGlsIHRoZSBlbGVtZW50IGlzIGNvbm5lY3RlZCB0byB0aGUgZG9jdW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGUgLSBUaGUgbmFtZSBvZiB0aGUgKmF0dHJpYnV0ZSogKG5vdCBwcm9wZXJ0eSkgdG8gc2V0LlxuICAgKiBAcGFyYW0ge29iamVjdH0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gc2V0LiBJZiBudWxsLCB0aGUgYXR0cmlidXRlIHdpbGwgYmUgcmVtb3ZlZC5cbiAgICovXG4gIHNldEF0dHJpYnV0ZShlbGVtZW50LCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgaWYgKGVsZW1lbnRbc2FmZVRvU2V0QXR0cmlidXRlc1N5bWJvbF0pIHtcbiAgICAgIC8vIFNhZmUgdG8gc2V0IGF0dHJpYnV0ZXMgaW1tZWRpYXRlbHkuXG4gICAgICBzZXRBdHRyaWJ1dGVUb0VsZW1lbnQoZWxlbWVudCwgYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIERlZmVyIHNldHRpbmcgYXR0cmlidXRlcyB1bnRpbCB0aGUgZmlyc3QgdGltZSB3ZSdyZSBjb25uZWN0ZWQuXG4gICAgICBpZiAoIWVsZW1lbnRbcGVuZGluZ0F0dHJpYnV0ZXNTeW1ib2xdKSB7XG4gICAgICAgIGVsZW1lbnRbcGVuZGluZ0F0dHJpYnV0ZXNTeW1ib2xdID0ge307XG4gICAgICB9XG4gICAgICBlbGVtZW50W3BlbmRpbmdBdHRyaWJ1dGVzU3ltYm9sXVthdHRyaWJ1dGVdID0gdmFsdWU7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBTZXQvdW5zZXQgdGhlIGNsYXNzIHdpdGggdGhlIGluZGljYXRlZCBuYW1lLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBleGlzdHMgcHJpbWFyaWx5IHRvIGhhbmRsZSB0aGUgY2FzZSB3aGVyZSBhbiBlbGVtZW50IHdhbnRzIHRvXG4gICAqIHNldCBhIGRlZmF1bHQgcHJvcGVydHkgdmFsdWUgdGhhdCBzaG91bGQgYmUgcmVmbGVjdGVkIGFzIGFzIGNsYXNzLiBBblxuICAgKiBpbXBvcnRhbnQgbGltaXRhdGlvbiBvZiBjdXN0b20gZWxlbWVudCBjb25zdHVyY3RvcnMgaXMgdGhhdCB0aGV5IGNhbm5vdFxuICAgKiBzZXQgYXR0cmlidXRlcywgaW5jbHVkaW5nIHRoZSBgY2xhc3NgIGF0dHJpYnV0ZS4gQSBjYWxsIHRvXG4gICAqIGB0b2dnbGVDbGFzc2AgZHVyaW5nIHRoZSBjb25zdHJ1Y3RvciB3aWxsIGJlIGRlZmVycmVkIHVudGlsIHRoZSBlbGVtZW50XG4gICAqIGlzIGNvbm5lY3RlZCB0byB0aGUgZG9jdW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgLSBUaGUgbmFtZSBvZiB0aGUgY2xhc3MgdG8gc2V0LlxuICAgKiBAcGFyYW0ge29iamVjdH0gdmFsdWUgLSBUcnVlIHRvIHNldCB0aGUgY2xhc3MsIGZhbHNlIHRvIHJlbW92ZSBpdC5cbiAgICovXG4gIHRvZ2dsZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSwgdmFsdWUpIHtcbiAgICBpZiAoZWxlbWVudFtzYWZlVG9TZXRBdHRyaWJ1dGVzU3ltYm9sXSkge1xuICAgICAgLy8gU2FmZSB0byBzZXQgY2xhc3MgaW1tZWRpYXRlbHkuXG4gICAgICB0b2dnbGVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRGVmZXIgc2V0dGluZyBjbGFzcyB1bnRpbCB0aGUgZmlyc3QgdGltZSB3ZSdyZSBjb25uZWN0ZWQuXG4gICAgICBpZiAoIWVsZW1lbnRbcGVuZGluZ0NsYXNzZXNTeW1ib2xdKSB7XG4gICAgICAgIGVsZW1lbnRbcGVuZGluZ0NsYXNzZXNTeW1ib2xdID0ge307XG4gICAgICB9XG4gICAgICBlbGVtZW50W3BlbmRpbmdDbGFzc2VzU3ltYm9sXVtjbGFzc05hbWVdID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbn07XG5cblxuLy8gUmVmbGVjdCB0aGUgYXR0cmlidXRlIHRvIHRoZSBnaXZlbiBlbGVtZW50LlxuLy8gSWYgdGhlIHZhbHVlIGlzIG51bGwsIHJlbW92ZSB0aGUgYXR0cmlidXRlLlxuZnVuY3Rpb24gc2V0QXR0cmlidXRlVG9FbGVtZW50KGVsZW1lbnQsIGF0dHJpYnV0ZU5hbWUsIHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdGV4dCA9IFN0cmluZyh2YWx1ZSk7XG4gICAgLy8gQXZvaWQgcmVjdXJzaXZlIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayBjYWxscy5cbiAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSkgIT09IHRleHQpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuXG4vKipcbiAqIEEgY29sbGVjdGlvbiBvZiBTeW1ib2wgb2JqZWN0cyBmb3Igc3RhbmRhcmQgY29tcG9uZW50IHByb3BlcnRpZXMgYW5kIG1ldGhvZHMuXG4gKlxuICogVGhlc2UgU3ltYm9sIG9iamVjdHMgYXJlIHVzZWQgdG8gYWxsb3cgbWl4aW5zIGFuZCBhIGNvbXBvbmVudCB0byBpbnRlcm5hbGx5XG4gKiBjb21tdW5pY2F0ZSwgd2l0aG91dCBleHBvc2luZyB0aGVzZSBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIGluIHRoZSBjb21wb25lbnQnc1xuICogcHVibGljIEFQSS5cbiAqXG4gKiBUbyB1c2UgdGhlc2UgU3ltYm9sIG9iamVjdHMgaW4geW91ciBvd24gY29tcG9uZW50LCBpbmNsdWRlIHRoaXMgbW9kdWxlIGFuZFxuICogdGhlbiBjcmVhdGUgYSBwcm9wZXJ0eSBvciBtZXRob2Qgd2hvc2Uga2V5IGlzIHRoZSBkZXNpcmVkIFN5bWJvbC5cbiAqXG4gKiAgICAgaW1wb3J0ICdTaW5nbGVTZWxlY3Rpb24nIGZyb20gJ2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NpbmdsZVNlbGVjdGlvbic7XG4gKiAgICAgaW1wb3J0ICdzeW1ib2xzJyBmcm9tICdiYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9zeW1ib2xzJztcbiAqXG4gKiAgICAgY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgU2luZ2xlU2VsZWN0aW9uKEhUTUxFbGVtZW50KSB7XG4gKiAgICAgICBbc3ltYm9scy5hcHBseVNlbGVjdGlvbl0oaXRlbSwgc2VsZWN0ZWQpIHtcbiAqICAgICAgICAgLy8gVGhpcyB3aWxsIGJlIGludm9rZWQgd2hlbmV2ZXIgYW4gaXRlbSBpcyBzZWxlY3RlZC9kZXNlbGVjdGVkLlxuICogICAgICAgfVxuICogICAgIH1cbiAqXG4gKiBAbW9kdWxlIHN5bWJvbHNcbiAqL1xuY29uc3Qgc3ltYm9scyA9IHtcblxuICAvKipcbiAgICogU3ltYm9sIGZvciB0aGUgYGFwcGx5U2VsZWN0aW9uYCBtZXRob2QuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGFwcGxpZXMgdGhlIGluZGljYXRlZCBzZWxlY3Rpb24gc3RhdGUgdG8gYW4gaXRlbS5cbiAgICpcbiAgICogQGZ1bmN0aW9uIGFwcGx5U2VsZWN0aW9uXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW0gLSB0aGUgaXRlbSBiZWluZyBzZWxlY3RlZC9kZXNlbGVjdGVkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2VsZWN0ZWQgLSB0cnVlIGlmIHRoZSBpdGVtIGlzIHNlbGVjdGVkLCBmYWxzZSBpZiBub3RcbiAgICovXG4gIGFwcGx5U2VsZWN0aW9uOiBjcmVhdGVTeW1ib2woJ2FwcGx5U2VsZWN0aW9uJyksXG5cbiAgLyoqXG4gICAqIFN5bWJvbCBmb3IgdGhlIGBkZWZhdWx0c2AgcHJvcGVydHkuXG4gICAqXG4gICAqIFRoaXMgcHJvcGVydHkgY2FuIGJlIHVzZWQgdG8gc2V0IG9yIG92ZXJyaWRlIGRlZmF1bHRzIHRoYXQgd2lsbCBiZSBhcHBsaWVkXG4gICAqIHRvIGEgbmV3IGNvbXBvbmVudCBpbnN0YW5jZS4gV2hlbiBpbXBsZW1lbnRpbmcgdGhpcyBwcm9wZXJ0eSwgdGFrZSBjYXJlIHRvXG4gICAqIGZpcnN0IGFjcXVpcmUgYW55IGRlZmF1bHRzIGRlZmluZWQgYnkgdGhlIHN1cGVyY2xhc3MuIFRoZSBzdGFuZGFyZCBpZGlvbSBpc1xuICAgKiBhcyBmb2xsb3dzOlxuICAgKlxuICAgKiAgICAgZ2V0IFtzeW1ib2xzLmRlZmF1bHRzXSgpIHtcbiAgICogICAgICAgY29uc3QgZGVmYXVsdHMgPSBzdXBlcltzeW1ib2xzLmRlZmF1bHRzXSB8fCB7fTtcbiAgICogICAgICAgLy8gU2V0IG9yIG92ZXJyaWRlIGRlZmF1bHQgdmFsdWVzIGhlcmVcbiAgICogICAgICAgZGVmYXVsdHMuY3VzdG9tUHJvcGVydHkgPSBmYWxzZTtcbiAgICogICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgKiAgICAgfVxuICAgKlxuICAgKiBAdmFyIHtvYmplY3R9IGRlZmF1bHRzXG4gICAqL1xuICBkZWZhdWx0czogY3JlYXRlU3ltYm9sKCdkZWZhdWx0cycpLFxuXG4gIC8qKlxuICAgKiBTeW1ib2wgZm9yIHRoZSBgZHJhZ2dpbmdgIHByb3BlcnR5LlxuICAgKlxuICAgKiBDb21wb25lbnRzIGxpa2UgY2Fyb3VzZWxzIG9mdGVuIGRlZmluZSBhbmltYXRlZCBDU1MgdHJhbnNpdGlvbnMgZm9yXG4gICAqIHNsaWRpbmcgZWZmZWN0cy4gU3VjaCBhIHRyYW5zaXRpb24gc2hvdWxkIHVzdWFsbHkgKm5vdCogYmUgYXBwbGllZCB3aGlsZVxuICAgKiB0aGUgdXNlciBpcyBkcmFnZ2luZywgYmVjYXVzZSBhIENTUyBhbmltYXRpb24gd2lsbCBpbnRyb2R1Y2UgYSBsYWcgdGhhdFxuICAgKiBtYWtlcyB0aGUgc3dpcGUgZmVlbCBzbHVnZ2lzaC4gSW5zdGVhZCwgYXMgbG9uZyBhcyB0aGUgdXNlciBpcyBkcmFnZ2luZ1xuICAgKiB3aXRoIHRoZWlyIGZpbmdlciBkb3duLCB0aGUgdHJhbnNpdGlvbiBzaG91bGQgYmUgc3VwcHJlc3NlZC4gV2hlbiB0aGVcbiAgICogdXNlciByZWxlYXNlcyB0aGVpciBmaW5nZXIsIHRoZSB0cmFuc2l0aW9uIGNhbiBiZSByZXN0b3JlZCwgYWxsb3dpbmcgdGhlXG4gICAqIGFuaW1hdGlvbiB0byBzaG93IHRoZSBjYXJvdXNlbCBzbGlkaW5nIGludG8gaXRzIGZpbmFsIHBvc2l0aW9uLlxuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn0gdHJ1ZSBpZiBhIGRyYWcgaXMgaW4gcHJvZ3Jlc3MsIGZhbHNlIGlmIG5vdC5cbiAgICovXG4gIGRyYWdnaW5nOiBjcmVhdGVTeW1ib2woJ2RyYWdnaW5nJyksXG5cbiAgLyoqXG4gICAqIFN5bWJvbCBmb3IgdGhlIGBnb0Rvd25gIG1ldGhvZC5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIGRvd24uXG4gICAqXG4gICAqIEBmdW5jdGlvbiBnb0Rvd25cbiAgICovXG4gIGdvRG93bjogY3JlYXRlU3ltYm9sKCdnb0Rvd24nKSxcblxuICAvKipcbiAgICogU3ltYm9sIGZvciB0aGUgYGdvRW5kYCBtZXRob2QuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSB0byB0aGUgZW5kIChlLmcuLFxuICAgKiBvZiBhIGxpc3QpLlxuICAgKlxuICAgKiBAZnVuY3Rpb24gZ29FbmRcbiAgICovXG4gIGdvRW5kOiBjcmVhdGVTeW1ib2woJ2dvRW5kJyksXG5cbiAgLyoqXG4gICAqIFN5bWJvbCBmb3IgdGhlIGBnb0xlZnRgIG1ldGhvZC5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIGxlZnQuXG4gICAqXG4gICAqIEBmdW5jdGlvbiBnb0xlZnRcbiAgICovXG4gIGdvTGVmdDogY3JlYXRlU3ltYm9sKCdnb0xlZnQnKSxcblxuICAvKipcbiAgICogU3ltYm9sIGZvciB0aGUgYGdvUmlnaHRgIG1ldGhvZC5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHJpZ2h0LlxuICAgKlxuICAgKiBAZnVuY3Rpb24gZ29SaWdodFxuICAgKi9cbiAgZ29SaWdodDogY3JlYXRlU3ltYm9sKCdnb1JpZ2h0JyksXG5cbiAgLyoqXG4gICAqIFN5bWJvbCBmb3IgdGhlIGBnb1N0YXJ0YCBtZXRob2QuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSB0byB0aGUgc3RhcnRcbiAgICogKGUuZy4sIG9mIGEgbGlzdCkuXG4gICAqXG4gICAqIEBmdW5jdGlvbiBnb1N0YXJ0XG4gICAqL1xuICBnb1N0YXJ0OiBjcmVhdGVTeW1ib2woJ2dvU3RhcnQnKSxcblxuICAvKipcbiAgICogU3ltYm9sIGZvciB0aGUgYGdvVXBgIG1ldGhvZC5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHVwLlxuICAgKlxuICAgKiBAZnVuY3Rpb24gZ29VcFxuICAgKi9cbiAgZ29VcDogY3JlYXRlU3ltYm9sKCdnb1VwJyksXG5cbiAgLyoqXG4gICAqIFN5bWJvbCBmb3IgdGhlIGBpdGVtQWRkZWRgIG1ldGhvZC5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuIGEgbmV3IGl0ZW0gaXMgYWRkZWQgdG8gYSBsaXN0LlxuICAgKlxuICAgKiBAZnVuY3Rpb24gaXRlbUFkZGVkXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW0gLSB0aGUgaXRlbSBiZWluZyBzZWxlY3RlZC9kZXNlbGVjdGVkXG4gICAqL1xuICBpdGVtQWRkZWQ6IGNyZWF0ZVN5bWJvbCgnaXRlbUFkZGVkJyksXG5cbiAgLyoqXG4gICAqIFN5bWJvbCBmb3IgdGhlIGBrZXlkb3duYCBtZXRob2QuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiBhbiBlbGVtZW50IHJlY2VpdmVzIGEgYGtleWRvd25gIGV2ZW50LlxuICAgKlxuICAgKiBAZnVuY3Rpb24ga2V5ZG93blxuICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50IC0gdGhlIGV2ZW50IGJlaW5nIHByb2Nlc3NlZFxuICAgKi9cbiAga2V5ZG93bjogY3JlYXRlU3ltYm9sKCdrZXlkb3duJylcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN5bWJvbHM7XG4iLCIvKipcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3Igc3RhbmRhcmQgY2xhc3NMaXN0LnRvZ2dsZSgpIGJlaGF2aW9yIG9uIG9sZCBicm93c2VycyxcbiAqIG5hbWVseSBJRSAxMS5cbiAqXG4gKiBUaGUgc3RhbmRhcmRcbiAqIFtjbGFzc2xpc3RdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FbGVtZW50L2NsYXNzTGlzdClcbiAqIG9iamVjdCBoYXMgYSBgdG9nZ2xlKClgIGZ1bmN0aW9uIHRoYXQgc3VwcG9ydHMgYSBzZWNvbmQgQm9vbGVhbiBwYXJhbWV0ZXJcbiAqIHRoYXQgY2FuIGJlIHVzZWQgdG8gc3VjY2luY3RseSB0dXJuIGEgY2xhc3Mgb24gb3Igb2ZmLiBUaGlzIGZlYXR1cmUgaXMgb2Z0ZW5cbiAqIHVzZWZ1bCBpbiBkZXNpZ25pbmcgY3VzdG9tIGVsZW1lbnRzLCB3aGljaCBtYXkgd2FudCB0byBleHRlcm5hbGx5IHJlZmxlY3RcbiAqIGNvbXBvbmVudCBzdGF0ZSBpbiBhIENTUyBjbGFzcyB0aGF0IGNhbiBiZSB1c2VkIGZvciBzdHlsaW5nIHB1cnBvc2VzLlxuICpcbiAqIFVuZm9ydHVuYXRlbHksIElFIDExIGRvZXMgbm90IHN1cHBvcnQgdGhlIEJvb2xlYW4gcGFyYW1ldGVyIHRvXG4gKiBgY2xhc3NMaXN0LnRvZ2dsZSgpYC4gVGhpcyBoZWxwZXIgZnVuY3Rpb24gYmVoYXZlcyBsaWtlIHRoZSBzdGFuZGFyZFxuICogYHRvZ2dsZSgpYCwgaW5jbHVkaW5nIHN1cHBvcnQgZm9yIHRoZSBCb29sZWFuIHBhcmFtZXRlciwgc28gdGhhdCBpdCBjYW4gYmVcbiAqIHVzZWQgZXZlbiBvbiBJRSAxMS5cbiAqXG4gKiBAZnVuY3Rpb24gdG9nZ2xlQ2xhc3NcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZWxlbWVudCB0byBtb2RpZnlcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgLSBUaGUgY2xhc3MgdG8gYWRkL3JlbW92ZVxuICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdIC0gRm9yY2UgdGhlIGNsYXNzIHRvIGJlIGFkZGVkIChpZiB0cnVlKSBvciByZW1vdmVkXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaWYgZmFsc2UpXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSwgZm9yY2UpIHtcbiAgY29uc3QgY2xhc3NMaXN0ID0gZWxlbWVudC5jbGFzc0xpc3Q7XG4gIGNvbnN0IGFkZENsYXNzID0gKHR5cGVvZiBmb3JjZSA9PT0gJ3VuZGVmaW5lZCcpID9cbiAgICAhY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkgOlxuICAgIGZvcmNlO1xuICBpZiAoYWRkQ2xhc3MpIHtcbiAgICBjbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICB9XG4gIHJldHVybiBhZGRDbGFzcztcbn1cbiJdfQ==
