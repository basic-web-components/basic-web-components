(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./safeAttributes":17}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{"./createSymbol":14}],5:[function(require,module,exports){
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

},{"./symbols":18}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{"./microtask":15}],8:[function(require,module,exports){
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

},{"./Collective":2,"./createSymbol":14,"./safeAttributes":17,"./symbols":18}],9:[function(require,module,exports){
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

},{"./createSymbol":14,"./symbols":18}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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

},{"./Collective":2}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

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
      // know whether they need to also invoke the property getter/setter for the
      // target component.
      value: function selectedItemChanged() {
        if (_get(TargetSelection.prototype.__proto__ || Object.getPrototypeOf(TargetSelection.prototype), 'selectedItemChanged', this)) {
          _get(TargetSelection.prototype.__proto__ || Object.getPrototypeOf(TargetSelection.prototype), 'selectedItemChanged', this).call(this);
        }
        this.dispatchEvent(new CustomEvent('selected-item-changed'));
      }

      /**
       * Select the first item in the list.
       */

    }, {
      key: 'selectFirst',
      value: function selectFirst() {
        if (_get(TargetSelection.prototype.__proto__ || Object.getPrototypeOf(TargetSelection.prototype), 'selectFirst', this)) {
          _get(TargetSelection.prototype.__proto__ || Object.getPrototypeOf(TargetSelection.prototype), 'selectFirst', this).call(this);
        }
        return this.target && this.target.selectFirst();
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
        if (_get(TargetSelection.prototype.__proto__ || Object.getPrototypeOf(TargetSelection.prototype), 'selectLast', this)) {
          _get(TargetSelection.prototype.__proto__ || Object.getPrototypeOf(TargetSelection.prototype), 'selectLast', this).call(this);
        }
        return this.target && this.target.selectLast();
      }

      /**
       * Select the next item in the list.
       */

    }, {
      key: 'selectNext',
      value: function selectNext() {
        if (_get(TargetSelection.prototype.__proto__ || Object.getPrototypeOf(TargetSelection.prototype), 'selectNext', this)) {
          _get(TargetSelection.prototype.__proto__ || Object.getPrototypeOf(TargetSelection.prototype), 'selectNext', this).call(this);
        }
        return this.target && this.target.selectNext();
      }

      /**
       * Select the previous item in the list.
       *
       * If the list has no selection, the last item will be selected.
       */

    }, {
      key: 'selectPrevious',
      value: function selectPrevious() {
        if (_get(TargetSelection.prototype.__proto__ || Object.getPrototypeOf(TargetSelection.prototype), 'selectPrevious', this)) {
          _get(TargetSelection.prototype.__proto__ || Object.getPrototypeOf(TargetSelection.prototype), 'selectPrevious', this).call(this);
        }
        return this.target && this.target.selectPrevious();
      }

      /**
       * Gets/sets the target element to which this component will delegate
       * selection actions.
       *
       * @type {HTMLElement}
       */

    }, {
      key: 'canSelectNext',


      /**
       * True if the selection can be moved to the next item, false if not (the
       * selected item is the last item in the list).
       *
       * @type {boolean}
       */
      get: function get() {
        return this.target && this.target.canSelectNext;
      },
      set: function set(canSelectNext) {
        if ('canSelectNext' in base.prototype) {
          _set(TargetSelection.prototype.__proto__ || Object.getPrototypeOf(TargetSelection.prototype), 'canSelectNext', canSelectNext, this);
        }
        var target = this.target;
        if (target) {
          target.canSelectNext = canSelectNext;
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
        return this.target && this.target.canSelectPrevious;
      },
      set: function set(canSelectPrevious) {
        if ('canSelectPrevious' in base.prototype) {
          _set(TargetSelection.prototype.__proto__ || Object.getPrototypeOf(TargetSelection.prototype), 'canSelectPrevious', canSelectPrevious, this);
        }
        var target = this.target;
        if (target) {
          target.canSelectPrevious = canSelectPrevious;
        }
      }

      /**
       * The current set of items in the list.
       *
       * @type {HTMLElement[]}
       */

    }, {
      key: 'items',
      get: function get() {
        var items = this.target && this.target.items;
        return items || [];
      }
    }, {
      key: 'selectedFraction',
      get: function get() {
        return this.target && this.target.selectedFraction;
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
       * Index of the currently selected item, or -1 if there is no selection.
       *
       * @type {number}
       */

    }, {
      key: 'selectedIndex',
      get: function get() {
        return this.target && this.target.selectedIndex;
      },
      set: function set(index) {
        if ('selectedIndex' in base.prototype) {
          _set(TargetSelection.prototype.__proto__ || Object.getPrototypeOf(TargetSelection.prototype), 'selectedIndex', index, this);
        }
        var target = this.target;
        if (target) {
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
        return this.target && this.target.selectedItem;
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
      key: 'selectionRequired',
      get: function get() {
        return this.target && this.target.selectionRequired;
      },
      set: function set(selectionRequired) {
        if ('selectionRequired' in base.prototype) {
          _set(TargetSelection.prototype.__proto__ || Object.getPrototypeOf(TargetSelection.prototype), 'selectionRequired', selectionRequired, this);
        }
        var target = this.target;
        if (target) {
          target.selectionRequired = selectionRequired;
        }
      }

      /**
       * True if selection navigations wrap from last to first, and vice versa.
       *
       * @type {boolean}
       * @default {false}
       */

    }, {
      key: 'selectionWraps',
      get: function get() {
        return this.target && this.target.selectionWraps;
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

},{"./createSymbol":14}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
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

},{"./createSymbol":14,"./toggleClass":19}],18:[function(require,module,exports){
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

},{"./createSymbol":14}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AttributeMarshalling = require('../../basic-component-mixins/src/AttributeMarshalling');

var _AttributeMarshalling2 = _interopRequireDefault(_AttributeMarshalling);

var _Composable = require('../../basic-component-mixins/src/Composable');

var _Composable2 = _interopRequireDefault(_Composable);

var _DistributedChildren = require('../../basic-component-mixins/src/DistributedChildren');

var _DistributedChildren2 = _interopRequireDefault(_DistributedChildren);

var _ShadowElementReferences = require('../../basic-component-mixins/src/ShadowElementReferences');

var _ShadowElementReferences2 = _interopRequireDefault(_ShadowElementReferences);

var _ShadowTemplate = require('../../basic-component-mixins/src/ShadowTemplate');

var _ShadowTemplate2 = _interopRequireDefault(_ShadowTemplate);

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

  return ElementBase;
}((0, _Composable2.default)(HTMLElement).compose(_ShadowTemplate2.default, // before node finding, so shadow root is populated
_ShadowElementReferences2.default, // before marshalling, so properties can use refs
_AttributeMarshalling2.default, _DistributedChildren2.default));

exports.default = ElementBase;

},{"../../basic-component-mixins/src/AttributeMarshalling":1,"../../basic-component-mixins/src/Composable":3,"../../basic-component-mixins/src/DistributedChildren":6,"../../basic-component-mixins/src/ShadowElementReferences":10,"../../basic-component-mixins/src/ShadowTemplate":11}],21:[function(require,module,exports){
'use strict';

var _PageDots = require('./src/PageDots');

var _PageDots2 = _interopRequireDefault(_PageDots);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Basic = window.Basic || {}; /*
                                    * This file is transpiled to create an ES5-compatible distribution in which
                                    * the package's main feature(s) are available via the window.Basic global.
                                    * If you're already using ES6 yourself, ignore this file, and instead import
                                    * the source file(s) you want from the src folder.
                                    */

window.Basic.PageDots = _PageDots2.default;

},{"./src/PageDots":22}],22:[function(require,module,exports){
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

var _symbols = require('../../basic-component-mixins/src/symbols');

var _symbols2 = _interopRequireDefault(_symbols);

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

var base = _ElementBase2.default.compose(_ContentFirstChildTarget2.default, _DirectionSelection2.default, _DistributedChildrenAsContent2.default, _Keyboard2.default, _KeyboardDirection2.default, _TargetInCollective2.default, _TargetSelection2.default);

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
    key: _symbols2.default.applySelection,
    value: function value(item, selected) {
      if (_get(PageDots.prototype.__proto__ || Object.getPrototypeOf(PageDots.prototype), _symbols2.default.applySelection, this)) {
        _get(PageDots.prototype.__proto__ || Object.getPrototypeOf(PageDots.prototype), _symbols2.default.applySelection, this).call(this, item, selected);
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
    key: _symbols2.default.defaults,
    get: function get() {
      var defaults = _get(PageDots.prototype.__proto__ || Object.getPrototypeOf(PageDots.prototype), _symbols2.default.defaults, this) || {};
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
      return '\n      <style>\n      :host {\n        display: -webkit-flex;\n        display: flex;\n        position: relative;\n      }\n\n      #dots {\n        bottom: 0;\n        display: -webkit-flex;\n        display: flex;\n        -webkit-justify-content: center;\n        justify-content: center;\n        position: absolute;\n        width: 100%;\n        z-index: 1;\n      }\n\n      #container {\n        display: -webkit-flex;\n        display: flex;\n        -webkit-flex: 1;\n        flex: 1;\n        position: relative;\n        z-index: 0;\n      }\n\n      #container ::slotted(*) {\n        -webkit-flex: 1;\n        flex: 1;\n      }\n\n      .dot {\n        background: rgb(255, 255, 255);\n        border-radius: 7px;\n        box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.5);\n        box-sizing: border-box;\n        cursor: pointer;\n        height: 8px;\n        margin: 7px 5px;\n        opacity: 0.4;\n        padding: 0;\n        transition: background 0.2s box-shadow 0.2s;\n        width: 8px;\n      }\n\n      .dot:hover {\n        background: rgba(0, 0, 0, 0.75);\n        box-shadow: 0 0 1px 3px rgba(255, 255, 255, 0.5);\n      }\n\n      .dot.selected {\n        opacity: 0.95;\n      }\n\n      @media (min-width: 768px) {\n        .dot {\n          height: 12px;\n          width: 12px;\n        }\n      }\n      </style>\n\n      <div id="dots" role="none"></div>\n      <div id="container" role="none">\n        <slot></slot>\n      </div>\n    ';
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
  // const truncatedSelectedFraction = Math.trunc(selectedFraction);
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

},{"../../basic-component-mixins/src/ContentFirstChildTarget":4,"../../basic-component-mixins/src/DirectionSelection":5,"../../basic-component-mixins/src/DistributedChildrenAsContent":7,"../../basic-component-mixins/src/Keyboard":8,"../../basic-component-mixins/src/KeyboardDirection":9,"../../basic-component-mixins/src/TargetInCollective":12,"../../basic-component-mixins/src/TargetSelection":13,"../../basic-component-mixins/src/createSymbol":14,"../../basic-component-mixins/src/renderArrayAsElements":16,"../../basic-component-mixins/src/symbols":18,"../../basic-component-mixins/src/toggleClass":19,"../../basic-element-base/src/ElementBase":20}]},{},[21])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9BdHRyaWJ1dGVNYXJzaGFsbGluZy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbGxlY3RpdmUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db21wb3NhYmxlLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXJlY3Rpb25TZWxlY3Rpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudC5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0tleWJvYXJkLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmREaXJlY3Rpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaGFkb3dFbGVtZW50UmVmZXJlbmNlcy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NoYWRvd1RlbXBsYXRlLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGFyZ2V0SW5Db2xsZWN0aXZlLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGFyZ2V0U2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvY3JlYXRlU3ltYm9sLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvbWljcm90YXNrLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvcmVuZGVyQXJyYXlBc0VsZW1lbnRzLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvc2FmZUF0dHJpYnV0ZXMuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9zeW1ib2xzLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvdG9nZ2xlQ2xhc3MuanMiLCJwYWNrYWdlcy9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlLmpzIiwicGFja2FnZXMvYmFzaWMtcGFnZS1kb3RzL2dsb2JhbHMuanMiLCJwYWNrYWdlcy9iYXNpYy1wYWdlLWRvdHMvc3JjL1BhZ2VEb3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUFHQTtBQUNBLElBQU0sMkJBQTJCLEVBQWpDO0FBQ0EsSUFBTSw0QkFBNEIsRUFBbEM7O0FBR0E7O2tCQUNlLFVBQUMsSUFBRCxFQUFVOztBQUV2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFGdUIsTUFxQ2pCLG9CQXJDaUI7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7O0FBdUNyQjs7O0FBdkNxQiwrQ0EwQ0ksYUExQ0osRUEwQ21CLFFBMUNuQixFQTBDNkIsUUExQzdCLEVBMEN1QztBQUMxRCx1SkFBb0M7QUFBRTtBQUFtQztBQUN6RSxZQUFNLGVBQWUsd0JBQXdCLGFBQXhCLENBQXJCO0FBQ0E7QUFDQTtBQUNBLFlBQUksZ0JBQWdCLElBQWhCLElBQXdCLEVBQUUsZ0JBQWdCLFlBQVksU0FBOUIsQ0FBNUIsRUFBc0U7QUFDcEUsZUFBSyxZQUFMLElBQXFCLFFBQXJCO0FBQ0Q7QUFDRjtBQWxEb0I7QUFB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TSxNQUVBO0FBQ0wsbUJBQWEsY0FBYjtBQUNEO0FBQ0QsUUFBSSxLQUFKLENBQVUsT0FBVixHQUFvQixVQUFwQjtBQUNELEdBYkQ7QUFjRDs7QUFHRCxlQUFlLE1BQWYsQ0FBc0IsaUJBQXRCLEVBQXlDLFFBQXpDO2tCQUNlLFEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHNhZmVBdHRyaWJ1dGVzIGZyb20gJy4vc2FmZUF0dHJpYnV0ZXMnO1xuXG5cbi8vIE1lbW9pemVkIG1hcHMgb2YgYXR0cmlidXRlIHRvIHByb3BlcnR5IG5hbWVzIGFuZCB2aWNlIHZlcnNhLlxuY29uc3QgYXR0cmlidXRlVG9Qcm9wZXJ0eU5hbWVzID0ge307XG5jb25zdCBwcm9wZXJ0eU5hbWVzVG9BdHRyaWJ1dGVzID0ge307XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBBdHRyaWJ1dGVNYXJzaGFsbGluZy4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcnNoYWxscyBhdHRyaWJ1dGVzIHRvIHByb3BlcnRpZXMgYW5kIHZpY2UgdmVyc2EuXG4gICAqXG4gICAqIElmIHlvdXIgY29tcG9uZW50IGV4cG9zZXMgYSBzZXR0ZXIgZm9yIGEgcHJvcGVydHksIGl0J3MgZ2VuZXJhbGx5IGEgZ29vZFxuICAgKiBpZGVhIHRvIGxldCBkZXZzIHVzaW5nIHlvdXIgY29tcG9uZW50IGJlIGFibGUgdG8gc2V0IHRoYXQgcHJvcGVydHkgaW4gSFRNTFxuICAgKiB2aWEgYW4gZWxlbWVudCBhdHRyaWJ1dGUuIFlvdSBjYW4gY29kZSB0aGF0IHlvdXJzZWxmIGJ5IHdyaXRpbmcgYW5cbiAgICogYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AsIG9yIHlvdSBjYW4gdXNlIHRoaXMgbWl4aW4gdG8gZ2V0IGEgZGVncmVlIG9mXG4gICAqIGF1dG9tYXRpYyBzdXBwb3J0LlxuICAgKlxuICAgKiBUaGlzIG1peGluIGltcGxlbWVudHMgYW4gYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AgdGhhdCB3aWxsIGF0dGVtcHQgdG9cbiAgICogY29udmVydCBhIGNoYW5nZSBpbiBhbiBlbGVtZW50IGF0dHJpYnV0ZSBpbnRvIGEgY2FsbCB0byB0aGUgY29ycmVzcG9uZGluZ1xuICAgKiBwcm9wZXJ0eSBzZXR0ZXIuIEF0dHJpYnV0ZXMgdHlwaWNhbGx5IGZvbGxvdyBoeXBoZW5hdGVkIG5hbWVzIChcImZvby1iYXJcIiksXG4gICAqIHdoZXJlYXMgcHJvcGVydGllcyB0eXBpY2FsbHkgdXNlIGNhbWVsQ2FzZSBuYW1lcyAoXCJmb29CYXJcIikuIFRoaXMgbWl4aW5cbiAgICogcmVzcGVjdHMgdGhhdCBjb252ZW50aW9uLCBhdXRvbWF0aWNhbGx5IG1hcHBpbmcgdGhlIGh5cGhlbmF0ZWQgYXR0cmlidXRlXG4gICAqIG5hbWUgdG8gdGhlIGNvcnJlc3BvbmRpbmcgY2FtZWxDYXNlIHByb3BlcnR5IG5hbWUuXG4gICAqXG4gICAqIEV4YW1wbGU6IFlvdSBkZWZpbmUgYSBjb21wb25lbnQgdXNpbmcgdGhpcyBtaXhpbjpcbiAgICpcbiAgICogICAgIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIEF0dHJpYnV0ZU1hcnNoYWxsaW5nKEhUTUxFbGVtZW50KSB7XG4gICAqICAgICAgIGdldCBmb29CYXIoKSB7IHJldHVybiB0aGlzLl9mb29CYXI7IH1cbiAgICogICAgICAgc2V0IGZvb0Jhcih2YWx1ZSkgeyB0aGlzLl9mb29CYXIgPSB2YWx1ZTsgfVxuICAgKiAgICAgfVxuICAgKiAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdteS1lbGVtZW50JywgTXlFbGVtZW50KTtcbiAgICpcbiAgICogSWYgc29tZW9uZSB0aGVuIGluc3RhbnRpYXRlcyB5b3VyIGNvbXBvbmVudCBpbiBIVE1MOlxuICAgKlxuICAgKiAgICAgPG15LWVsZW1lbnQgZm9vLWJhcj1cIkhlbGxvXCI+PC9teS1lbGVtZW50PlxuICAgKlxuICAgKiBUaGVuLCBhZnRlciB0aGUgZWxlbWVudCBoYXMgYmVlbiB1cGdyYWRlZCwgdGhlIGBmb29CYXJgIHNldHRlciB3aWxsXG4gICAqIGF1dG9tYXRpY2FsbHkgYmUgaW52b2tlZCB3aXRoIHRoZSBpbml0aWFsIHZhbHVlIFwiSGVsbG9cIi5cbiAgICpcbiAgICogRm9yIHRoZSB0aW1lIGJlaW5nLCB0aGlzIG1peGluIG9ubHkgc3VwcG9ydHMgc3RyaW5nLXZhbHVlZCBwcm9wZXJ0aWVzLlxuICAgKiBJZiB5b3UnZCBsaWtlIHRvIGNvbnZlcnQgc3RyaW5nIGF0dHJpYnV0ZXMgdG8gb3RoZXIgdHlwZXMgKG51bWJlcnMsXG4gICAqIGJvb2xlYW5zKSwgeW91IG5lZWQgdG8gaW1wbGVtZW50IGBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tgIHlvdXJzZWxmLlxuICAgKi9cbiAgY2xhc3MgQXR0cmlidXRlTWFyc2hhbGxpbmcgZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qXG4gICAgICogSGFuZGxlIGEgY2hhbmdlIHRvIHRoZSBhdHRyaWJ1dGUgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cbiAgICAgKi9cbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soYXR0cmlidXRlTmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgICBpZiAoc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKSB7IHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaygpOyB9XG4gICAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSBhdHRyaWJ1dGVUb1Byb3BlcnR5TmFtZShhdHRyaWJ1dGVOYW1lKTtcbiAgICAgIC8vIElmIHRoZSBhdHRyaWJ1dGUgbmFtZSBjb3JyZXNwb25kcyB0byBhIHByb3BlcnR5IG5hbWUsIHNldCB0aGUgcHJvcGVydHkuXG4gICAgICAvLyBJZ25vcmUgc3RhbmRhcmQgSFRNTEVsZW1lbnQgcHJvcGVydGllcyBoYW5kbGVkIGJ5IHRoZSBET00uXG4gICAgICBpZiAocHJvcGVydHlOYW1lIGluIHRoaXMgJiYgIShwcm9wZXJ0eU5hbWUgaW4gSFRNTEVsZW1lbnQucHJvdG90eXBlKSkge1xuICAgICAgICB0aGlzW3Byb3BlcnR5TmFtZV0gPSBuZXdWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jb25uZWN0ZWRDYWxsYmFjaykgeyBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpOyB9XG4gICAgICBzYWZlQXR0cmlidXRlcy5jb25uZWN0ZWQodGhpcyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgICByZXR1cm4gYXR0cmlidXRlc0ZvckNsYXNzKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldC91bnNldCB0aGUgYXR0cmlidXRlIHdpdGggdGhlIGluZGljYXRlZCBuYW1lLlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgZXhpc3RzIHByaW1hcmlseSB0byBoYW5kbGUgdGhlIGNhc2Ugd2hlcmUgYW4gZWxlbWVudCB3YW50cyB0b1xuICAgICAqIHNldCBhIGRlZmF1bHQgcHJvcGVydHkgdmFsdWUgdGhhdCBzaG91bGQgYmUgcmVmbGVjdGVkIGFzIGFuIGF0dHJpYnV0ZS4gQW5cbiAgICAgKiBpbXBvcnRhbnQgbGltaXRhdGlvbiBvZiBjdXN0b20gZWxlbWVudCBjb25zdHVyY3RvcnMgaXMgdGhhdCB0aGV5IGNhbm5vdFxuICAgICAqIHNldCBhdHRyaWJ1dGVzLiBBIGNhbGwgdG8gYHJlZmxlY3RBdHRyaWJ1dGVgIGR1cmluZyB0aGUgY29uc3RydWN0b3Igd2lsbFxuICAgICAqIGJlIGRlZmVycmVkIHVudGlsIHRoZSBlbGVtZW50IGlzIGNvbm5lY3RlZCB0byB0aGUgZG9jdW1lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlIC0gVGhlIG5hbWUgb2YgdGhlICphdHRyaWJ1dGUqIChub3QgcHJvcGVydHkpIHRvIHNldC5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gc2V0LiBJZiBudWxsLCB0aGUgYXR0cmlidXRlIHdpbGwgYmUgcmVtb3ZlZC5cbiAgICAgKi9cbiAgICByZWZsZWN0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBzYWZlQXR0cmlidXRlcy5zZXRBdHRyaWJ1dGUodGhpcywgYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0L3Vuc2V0IHRoZSBjbGFzcyB3aXRoIHRoZSBpbmRpY2F0ZWQgbmFtZS5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGV4aXN0cyBwcmltYXJpbHkgdG8gaGFuZGxlIHRoZSBjYXNlIHdoZXJlIGFuIGVsZW1lbnQgd2FudHMgdG9cbiAgICAgKiBzZXQgYSBkZWZhdWx0IHByb3BlcnR5IHZhbHVlIHRoYXQgc2hvdWxkIGJlIHJlZmxlY3RlZCBhcyBhcyBjbGFzcy4gQW5cbiAgICAgKiBpbXBvcnRhbnQgbGltaXRhdGlvbiBvZiBjdXN0b20gZWxlbWVudCBjb25zdHVyY3RvcnMgaXMgdGhhdCB0aGV5IGNhbm5vdFxuICAgICAqIHNldCBhdHRyaWJ1dGVzLCBpbmNsdWRpbmcgdGhlIGBjbGFzc2AgYXR0cmlidXRlLiBBIGNhbGwgdG9cbiAgICAgKiBgcmVmbGVjdENsYXNzYCBkdXJpbmcgdGhlIGNvbnN0cnVjdG9yIHdpbGwgYmUgZGVmZXJyZWQgdW50aWwgdGhlIGVsZW1lbnRcbiAgICAgKiBpcyBjb25uZWN0ZWQgdG8gdGhlIGRvY3VtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBjbGFzcyB0byBzZXQuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHZhbHVlIC0gVHJ1ZSB0byBzZXQgdGhlIGNsYXNzLCBmYWxzZSB0byByZW1vdmUgaXQuXG4gICAgICovXG4gICAgcmVmbGVjdENsYXNzKGNsYXNzTmFtZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBzYWZlQXR0cmlidXRlcy50b2dnbGVDbGFzcyh0aGlzLCBjbGFzc05hbWUsIHZhbHVlKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBBdHRyaWJ1dGVNYXJzaGFsbGluZztcbn07XG5cblxuLy8gQ29udmVydCBoeXBoZW5hdGVkIGZvby1iYXIgYXR0cmlidXRlIG5hbWUgdG8gY2FtZWwgY2FzZSBmb29CYXIgcHJvcGVydHkgbmFtZS5cbmZ1bmN0aW9uIGF0dHJpYnV0ZVRvUHJvcGVydHlOYW1lKGF0dHJpYnV0ZU5hbWUpIHtcbiAgbGV0IHByb3BlcnR5TmFtZSA9IGF0dHJpYnV0ZVRvUHJvcGVydHlOYW1lc1thdHRyaWJ1dGVOYW1lXTtcbiAgaWYgKCFwcm9wZXJ0eU5hbWUpIHtcbiAgICAvLyBDb252ZXJ0IGFuZCBtZW1vaXplLlxuICAgIGNvbnN0IGh5cGVuUmVnRXggPSAvLShbYS16XSkvZztcbiAgICBwcm9wZXJ0eU5hbWUgPSBhdHRyaWJ1dGVOYW1lLnJlcGxhY2UoaHlwZW5SZWdFeCxcbiAgICAgICAgbWF0Y2ggPT4gbWF0Y2hbMV0udG9VcHBlckNhc2UoKSk7XG4gICAgYXR0cmlidXRlVG9Qcm9wZXJ0eU5hbWVzW2F0dHJpYnV0ZU5hbWVdID0gcHJvcGVydHlOYW1lO1xuICB9XG4gIHJldHVybiBwcm9wZXJ0eU5hbWU7XG59XG5cbmZ1bmN0aW9uIGF0dHJpYnV0ZXNGb3JDbGFzcyhjbGFzc0ZuKSB7XG5cbiAgLy8gV2UgdHJlYXQgdGhlIGVsZW1lbnQgYmFzZSBjbGFzc2VzIGFzIGlmIHRoZXkgaGF2ZSBubyBhdHRyaWJ1dGVzLCBzaW5jZSB3ZVxuICAvLyBkb24ndCB3YW50IHRvIHJlY2VpdmUgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIGZvciB0aGVtLlxuICBpZiAoY2xhc3NGbiA9PT0gSFRNTEVsZW1lbnQgfHwgY2xhc3NGbiA9PT0gT2JqZWN0KSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLy8gR2V0IGF0dHJpYnV0ZXMgZm9yIHBhcmVudCBjbGFzcy5cbiAgY29uc3QgYmFzZUNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGNsYXNzRm4ucHJvdG90eXBlKS5jb25zdHJ1Y3RvcjtcbiAgY29uc3QgYmFzZUF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzRm9yQ2xhc3MoYmFzZUNsYXNzKTtcblxuICAvLyBHZXQgYXR0cmlidXRlcyBmb3IgdGhpcyBjbGFzcy5cbiAgY29uc3QgcHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGNsYXNzRm4ucHJvdG90eXBlKTtcbiAgY29uc3Qgc2V0dGVyTmFtZXMgPSBwcm9wZXJ0eU5hbWVzLmZpbHRlcihwcm9wZXJ0eU5hbWUgPT5cbiAgICB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihcbiAgICAgICAgY2xhc3NGbi5wcm90b3R5cGUsIHByb3BlcnR5TmFtZSkuc2V0ID09PSAnZnVuY3Rpb24nKTtcbiAgY29uc3QgYXR0cmlidXRlcyA9IHNldHRlck5hbWVzLm1hcChzZXR0ZXJOYW1lID0+XG4gICAgICBwcm9wZXJ0eU5hbWVUb0F0dHJpYnV0ZShzZXR0ZXJOYW1lKSk7XG5cbiAgLy8gTWVyZ2UuXG4gIGNvbnN0IGRpZmYgPSBhdHRyaWJ1dGVzLmZpbHRlcihhdHRyaWJ1dGUgPT5cbiAgICAgIGJhc2VBdHRyaWJ1dGVzLmluZGV4T2YoYXR0cmlidXRlKSA8IDApO1xuICByZXR1cm4gYmFzZUF0dHJpYnV0ZXMuY29uY2F0KGRpZmYpO1xufVxuXG4vLyBDb252ZXJ0IGEgY2FtZWwgY2FzZSBmb29CYXIgcHJvcGVydHkgbmFtZSB0byBhIGh5cGhlbmF0ZWQgZm9vLWJhciBhdHRyaWJ1dGUuXG5mdW5jdGlvbiBwcm9wZXJ0eU5hbWVUb0F0dHJpYnV0ZShwcm9wZXJ0eU5hbWUpIHtcbiAgbGV0IGF0dHJpYnV0ZSA9IHByb3BlcnR5TmFtZXNUb0F0dHJpYnV0ZXNbcHJvcGVydHlOYW1lXTtcbiAgaWYgKCFhdHRyaWJ1dGUpIHtcbiAgICAvLyBDb252ZXJ0IGFuZCBtZW1vaXplLlxuICAgIGNvbnN0IHVwcGVyY2FzZVJlZ0V4ID0gLyhbQS1aXSkvZztcbiAgICBhdHRyaWJ1dGUgPSBwcm9wZXJ0eU5hbWUucmVwbGFjZSh1cHBlcmNhc2VSZWdFeCwgJy0kMScpLnRvTG93ZXJDYXNlKCk7XG4gIH1cbiAgcmV0dXJuIGF0dHJpYnV0ZTtcbn1cbiIsIi8qKlxuICogQSBncm91cCBvZiBlbGVtZW50cyB0aGF0IGhhdmUgYmVlbiBhc3NvY2lhdGVkIGZvciB0aGUgcHVycG9zZSBvZlxuICogYWNjb21wbGlzaGluZyBzb21lIGNvbGxlY3RpdmUgYmVoYXZpb3IsIGUuZy4sIGtleWJvYXJkIGhhbmRsaW5nLlxuICpcbiAqIFRoZXJlIGFyZSBjZXJ0YWluIGNvbXBvbmVudHMgdGhhdCB3YW50IHRvIGNvb3BlcmF0aXZlbHkgaGFuZGxlIHRoZSBrZXlib2FyZC5cbiAqIEZvciBleGFtcGxlLCB0aGUgYmFzaWMtYXJyb3ctc2VsZWN0aW9uIGFuZCBiYXNpYy1wYWdlLWRvdHMgY29tcG9uZW50cyBhcmVcbiAqIG9wdGlvbmFsIGNvbXBvbmVudHMgdGhhdCBjYW4gYXVnbWVudCB0aGUgYXBwZWFyYW5jZSBhbmQgYmVoYXZpb3Igb2YgYW4gaW5uZXJcbiAqIGJhc2ljLWNhcm91c2VsLCBhZGRpbmcgYXJyb3cgYnV0dG9ucyBhbmQgZG90IGJ1dHRvbnMsIHJlc3BlY3RpdmVseS4gV2hlblxuICogdGhlc2UgY29tcG9uZW50cyBhcmUgbmVzdGVkIHRvZ2V0aGVyLCB0aGV5IGZvcm0gYW4gaW1wbGljaXQgdW5pdCBjYWxsZWQgYVxuICogKmNvbGxlY3RpdmUqOlxuICpcbiAqICAgICA8YmFzaWMtYXJyb3ctc2VsZWN0aW9uPlxuICogICAgICAgPGJhc2ljLXBhZ2UtZG90cz5cbiAqICAgICAgICAgPGJhc2ljLWNhcm91c2VsPlxuICogICAgICAgICAgIC4uLiBpbWFnZXMsIGV0Yy4gLi4uXG4gKiAgICAgICAgIDwvYmFzaWMtY2Fyb3VzZWw+XG4gKiAgICAgICA8L2Jhc2ljLXBhZ2UtZG90cz5cbiAqICAgICA8L2Jhc2ljLWFycm93LXNlbGVjdGlvbj5cbiAqXG4gKiBJbiB0aGlzIGNvbmZpZ3VyYXRpb24sIHRoZSB0aHJlZSBjb21wb25lbnRzIHdpbGwgYWxsIGhhdmUgYSBgdGhpcy5jb2xsZWN0aXZlYFxuICogcmVmZXJlbmNlIHRoYXQgcmVmZXJzIHRvIGEgc2hhcmVkIGluc3RhbmNlIG9mIHRoZSBgQ29sbGVjdGl2ZWAgY2xhc3MuXG4gKlxuICogVGhlIFtLZXlib2FyZF0oS2V5Ym9hcmQubWQpIG1peGluIHRoZXkgdXNlIGlzIHNlbnNpdGl2ZSB0byB0aGUgcHJlc2VuY2Ugb2ZcbiAqIHRoZSBjb2xsZWN0aXZlLiBBbW9uZyBvdGhlciB0aGluZ3MsIGl0IHdpbGwgZW5zdXJlIHRoYXQgb25seSB0aGUgb3V0ZXJtb3N0XG4gKiBlbGVtZW50IGFib3ZlIOKAlMKgdGhlIGJhc2ljLWFycm93LXNlbGVjdGlvbiDigJTCoHdpbGwgYmUgYSB0YWIgc3RvcCB0aGF0IGNhblxuICogcmVjZWl2ZSB0aGUga2V5Ym9hcmQgZm9jdXMuIFRoaXMgbGV0cyB0aGUgdXNlciBwZXJjZWl2ZSB0aGUgY29tcG9uZW50XG4gKiBhcnJhbmdlbWVudCBhYm92ZSBhcyBhIHNpbmdsZSB1bml0LiBUaGUgS2V5Ym9hcmQgbWl4aW4gd2lsbCBhbHNvIGdpdmUgZWFjaFxuICogZWxlbWVudCBpbiB0aGUgY29sbGVjdGl2ZSBhIGNoYW5jZSB0byBwcm9jZXNzIGFueSBrZXlib2FyZCBldmVudHMuIFNvLCBldmVuXG4gKiB0aG91Z2ggdGhlIGJhc2ljLWFycm93LXNlbGVjdGlvbiBlbGVtZW50IHdpbGwgaGF2ZSB0aGUgZm9jdXMsIHRoZSBzdGFuZGFyZFxuICoga2V5Ym9hcmQgbmF2aWdhdGlvbiBwcm92aWRlZCBieSBiYXNpYy1jYXJvdXNlbCB3aWxsIGNvbnRpbnVlIHRvIHdvcmsuXG4gKlxuICogVGhlIFtTZWxlY3Rpb25BcmlhQWN0aXZlXShTZWxlY3Rpb25BcmlhQWN0aXZlLm1kKSBtaXhpbiBhbHNvIHJlc3BlY3RzXG4gKiBjb2xsZWN0aXZlcyB3aGVuIHVzaW5nIHRoZSBgYXJpYS1hY3RpdmVkZXNjZW5kYW50YCBhbmQgYHJvbGVgIGF0dHJpYnV0ZXMuXG4gKiBUaG9zZSB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIG91dGVybW9zdCBlbGVtZW50IChiYXNpYy1hcnJvdy1zZWxlY3Rpb24sIGFib3ZlKVxuICogc28gdGhhdCBBUklBIGNhbiBjb3JyZWN0bHkgdW5kZXJzdGFuZCB0aGUgYXJyYW5nZW1lbnQgb2YgdGhlIGVsZW1lbnRzLlxuICpcbiAqIFlvdSBjYW4gcHV0IGVsZW1lbnRzIGludG8gY29sbGVjdGl2ZXMgeW91cnNlbGYsIG9yIHlvdSBjYW4gdXNlIHRoZVxuICogW1RhcmdldEluQ29sbGVjdGl2ZV0oVGFyZ2V0SW5Db2xsZWN0aXZlLm1kKSBtaXhpbi5cbiAqL1xuY2xhc3MgQ29sbGVjdGl2ZSB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGNvbGxlY3RpdmUuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVMZW1lbnRbXX0gW2VsZW1lbnRzXSAtIEluaXRpYWwgZWxlbWVudHMgdG8gYWRkLlxuICAgKi9cbiAgY29uc3RydWN0b3IoLi4uZWxlbWVudHMpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgZWxlbWVudHMgaW4gdGhlIGNvbGxlY3RpdmUuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX1cbiAgICAgKi9cbiAgICB0aGlzLmVsZW1lbnRzID0gW107XG4gICAgdGhpcy5hc3NpbWlsYXRlKGVsZW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgdGhlIGluZGljYXRlZCB0YXJnZXQgdG8gdGhlIGNvbGxlY3RpdmUuXG4gICAqXG4gICAqIEJ5IGNvbnZlbnRpb24sIGlmIHR3byBlbGVtZW50cyB3YW50cyB0byBwYXJ0aWNpcGF0ZSBpbiBhIGNvbGxlY3RpdmUsIGFuZFxuICAgKiBvbmUgZWxlbWVudCBpcyBhbiBhbmNlc3RvciBvZiB0aGUgb3RoZXIgaW4gdGhlIERPTSwgdGhlIGFuY2VzdG9yIHNob3VsZFxuICAgKiBhc3NpbWlsYXRlIHRoZSBkZXNjZW5kYW50IGluc3RlYWQgb2YgdGhlIG90aGVyIHdheSBhcm91bmQuXG4gICAqXG4gICAqIEFmdGVyIGFzc2ltaWxhdGlvbiwgYW55IGVsZW1lbnQgaW4gdGhlIGNvbGxlY3RpdmUgdGhhdCBkZWZpbmVzIGFcbiAgICogYGNvbGxlY3RpdmVDaGFuZ2VkYCBtZXRob2Qgd2lsbCBoYXZlIHRoYXQgbWV0aG9kIGludm9rZWQuIFRoaXMgYWxsb3dzXG4gICAqIHRoZSBjb2xsZWN0aXZlJ3MgZWxlbWVudHMgdG8gcmVzcG9uZCB0byBjaGFuZ2VzIGluIHRoZSBjb2xsZWN0aXZlLlxuICAgKlxuICAgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxDb2xsZWN0aXZlKX0gdGFyZ2V0IC0gVGhlIGVsZW1lbnQgb3IgY29sbGVjdGl2ZSB0byBhZGQuXG4gICAqL1xuICBhc3NpbWlsYXRlKHRhcmdldCkge1xuICAgIGxldCBjb2xsZWN0aXZlQ2hhbmdlZDtcbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgQ29sbGVjdGl2ZSkge1xuICAgICAgLy8gQXNzaW1sYXRlIGFub3RoZXIgY29sbGVjdGl2ZS5cbiAgICAgIGNvbGxlY3RpdmVDaGFuZ2VkID0gYXNzaW1pbGF0ZUNvbGxlY3RpdmUodGhpcywgdGFyZ2V0KTtcbiAgICB9IGVsc2UgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAvLyBBc3NpbWlsYXRlIGFuIGFycmF5IG9mIGVsZW1lbnRzLlxuICAgICAgdGFyZ2V0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRBZGRlZCA9IGFzc2ltaWxhdGVFbGVtZW50KHRoaXMsIGVsZW1lbnQpO1xuICAgICAgICBjb2xsZWN0aXZlQ2hhbmdlZCA9IGNvbGxlY3RpdmVDaGFuZ2VkIHx8IGVsZW1lbnRBZGRlZDtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGFyZ2V0LmNvbGxlY3RpdmUpIHtcbiAgICAgIC8vIFRhcmdldCBpcyBhbHJlYWR5IHBhcnQgb2YgYSBjb2xsZWN0aXZlLCBhc3NpbWlsYXRlIGl0LlxuICAgICAgY29sbGVjdGl2ZUNoYW5nZWQgPSBhc3NpbWlsYXRlQ29sbGVjdGl2ZSh0aGlzLCB0YXJnZXQuY29sbGVjdGl2ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEFzc2ltaWxhdGUgYW4gaW5kaXZpZHVhbCBlbGVtZW50LlxuICAgICAgY29sbGVjdGl2ZUNoYW5nZWQgPSBhc3NpbWlsYXRlRWxlbWVudCh0aGlzLCB0YXJnZXQpO1xuICAgIH1cblxuICAgIGlmIChjb2xsZWN0aXZlQ2hhbmdlZCkge1xuICAgICAgdGhpcy5pbnZva2VNZXRob2QoJ2NvbGxlY3RpdmVDaGFuZ2VkJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEludm9rZSBhIG1ldGhvZCBvbiBhbGwgZWxlbWVudHMgaW4gdGhlIGNvbGxlY3RpdmUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2QgLSBUaGUgbmFtZSBvZiB0aGUgbWV0aG9kIHRvIGludm9rZSBvbiBhbGwgZWxlbWVudHMuXG4gICAqIEBwYXJhbSB7b2JqZWN0W119IFthcmdzXSAtIFRoZSBhcmd1bWVudHMgdG8gdGhlIG1ldGhvZFxuICAgKi9cbiAgaW52b2tlTWV0aG9kKG1ldGhvZCwgLi4uYXJncykge1xuICAgIC8vIEludm9rZSBmcm9tIGlubmVybW9zdCB0byBvdXRlcm1vc3QuXG4gICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzO1xuICAgIGZvciAobGV0IGkgPSBlbGVtZW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuICAgICAgaWYgKGVsZW1lbnRbbWV0aG9kXSkge1xuICAgICAgICBlbGVtZW50W21ldGhvZF0uYXBwbHkoZWxlbWVudCwgYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBvdXRlcm1vc3QgZWxlbWVudCBpbiB0aGUgY29sbGVjdGl2ZS5cbiAgICogQnkgY29udmVudGlvbiwgdGhpcyBpcyB0aGUgZmlyc3QgZWxlbWVudCBpbiB0aGUgYGVsZW1lbnRzYCBhcnJheS5cbiAgICovXG4gIGdldCBvdXRlcm1vc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRzWzBdO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBhIGRlZmF1bHQgYXR0cmlidXRlIG9uIGFuIGVsZW1lbnQgdGhhdCBtYXkgYmUgaW4gYSBjb2xsZWN0aXZlLiBUaGlzXG4gICAqIGZ1bmN0aW9uIGlzIGRlc2lnbmVkIHRvIGhlbHAgY29sbGVjdGl2ZXMgd29yayB3aXRoIGJyb3dzZXIgZmVhdHVyZXMgbGlrZVxuICAgKiBrZXlib2FyZCBzdXBwb3J0IGFuZCBBUklBLCB3aGVyZSBvbmx5IHRoZSBvdXRlcm1vc3QgbWVtYmVyIG9mIGEgY29sbGVjdGl2ZVxuICAgKiBzaG91bGQgZXhwb3NlLCBlLmcuLCB0YWJpbmRleCBvciBBUklBIGF0dHJpYnV0ZXMuXG4gICAqXG4gICAqIElmIHRoZSBlbGVtZW50IGlzIG5vdCBpbiBhIGNvbGxlY3RpdmUsIGFuZCB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgdGhlXG4gICAqIGdpdmVuIGF0dHJpYnV0ZSwgc2V0IHRoZSBhdHRyaWJ1dGUgb24gdGhlIGVsZW1lbnQgdG8gdGhlIGRlZmF1bHQgdmFsdWUuXG4gICAqXG4gICAqIElmIHRoZSBlbGVtZW50ICppcyogaW4gYSBjb2xsZWN0aXZlLCBzY2FuIHRoZSBjb2xsZWN0aXZlJ3MgaW5uZXIgbWVtYmVyc1xuICAgKiB0byBzZWUgaWYgYW55IG9mIHRoZW0gaGF2ZSB0aGUgYXR0cmlidXRlLiBJZiBzbywgcHJvbW90ZSB0aGF0IHZhbHVlIHRvIHRoZVxuICAgKiBvdXRlcm1vc3QgZWxlbWVudC4gSWYgYSBgcmVzaWR1YWxWYWx1ZWAgaXMgc3VwcGxpZWQsIHNldCB0aGUgaW5uZXIgbWVtYmVycydcbiAgICogYXR0cmlidXRlIHRvIHRoYXQgdmFsdWU7IG90aGVyd2lzZSwgcmVtb3ZlIHRoZSBhdHRyaWJ1dGUgZnJvbSB0aGUgaW5uZXJcbiAgICogbWVtYmVyLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gQW4gZWxlbWVudCB0aGF0IG1heSBvciBtYXkgbm90IGJlIGluIGEgY29sbGVjdGl2ZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZU5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgYXR0cmlidXRlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2RlZmF1bHRWYWx1ZV0gLSBUaGUgZGVmYXVsdCB2YWx1ZSBmb3IgdGhlIGF0dHJpYnV0ZS5cbiAgICovXG4gIHN0YXRpYyBwcm9tb3RlQXR0cmlidXRlKGVsZW1lbnQsIGF0dHJpYnV0ZU5hbWUsIGRlZmF1bHRWYWx1ZSwgcmVzaWR1YWxWYWx1ZSkge1xuICAgIGxldCBvdXRlcm1vc3Q7XG4gICAgbGV0IGF0dHJpYnV0ZVZhbHVlID0gZGVmYXVsdFZhbHVlO1xuICAgIGlmICghZWxlbWVudC5jb2xsZWN0aXZlKSB7XG4gICAgICAvLyBFbGVtZW50IGlzbid0IHBhcnQgb2YgYSBjb2xsZWN0aXZlOyB0cmVhdCBpdCBhcyBvdXRlcm1vc3QuXG4gICAgICBvdXRlcm1vc3QgPSBlbGVtZW50O1xuXG4gICAgLy8gUkVWSUVXOiBVbmNvbW1lbnRpbmcgdGhlc2UgbGluZXMgbWFrZXMgY29sbGVjdGl2ZXMgbW9yZSBlZmZpY2llbnQsIGFzXG4gICAgLy8gb25seSB0aGUgb3V0ZXJtb3N0IGVsZW1lbnQgaW4gdGhlIGNvbGxlY3RpdmUgd2lsbCBkbyB0aGUgYXR0cmlidXRlIHdvcmsuXG4gICAgLy8gSG93ZXZlciwgdGhhdCByZXF1aXJlcyB0aGF0IGFsbCBtZW1iZXJzIG9mIGEgY29sbGVjdGl2ZSBpbXBsZW1lbnQgdGhlXG4gICAgLy8gc2FtZSBtaXhpbnMgKGUuZy4sIFNlbGVjdGlvbkFyaWFBY3RpdmUpLCB3aGljaCBmZWVscyBsaW1pdGluZy4gTGVhdmluZ1xuICAgIC8vIHRoaXMgaW4gaGVyZSBhcyBhIGNvbW1lbnQgdW50aWwgdGhpcyBjYW4gYmUgY29uc2lkZXJlZCBmdXJ0aGVyLlxuXG4gICAgLy8gfSBlbHNlIGlmIChlbGVtZW50ICE9PSBlbGVtZW50LmNvbGxlY3RpdmUub3V0ZXJtb3N0RWxlbWVudCkge1xuICAgIC8vICAgLy8gTGV0IHRoZSBvdXRlcm1vc3QgZWxlbWVudCBoYW5kbGUgdGhpcy5cbiAgICAvLyAgIHJldHVybjtcblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTY2FuIGlubmVyIGVsZW1lbnRzLCB3b3JraW5nIGZyb20gaW5zaWRlIChlbmQpIHRvd2FyZCBvdXQgKHN0YXJ0KS5cbiAgICAgIC8vIFBpY2sgdXAgYW55IGF0dHJpYnV0ZSB2YWx1ZSB0aGV5IGhhdmUgYW5kIHJlbW92ZSBpdC5cbiAgICAgIGxldCBlbGVtZW50cyA9IGVsZW1lbnQuY29sbGVjdGl2ZS5lbGVtZW50cztcbiAgICAgIG91dGVybW9zdCA9IGVsZW1lbnRzWzBdO1xuICAgICAgZm9yIChsZXQgaSA9IGVsZW1lbnRzLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgaW5uZXJFbGVtZW50ID0gZWxlbWVudHNbaV07XG4gICAgICAgIGNvbnN0IGlubmVyQXR0cmlidXRlVmFsdWUgPSBpbm5lckVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICBpZiAoaW5uZXJBdHRyaWJ1dGVWYWx1ZSAmJiBpbm5lckF0dHJpYnV0ZVZhbHVlICE9PSByZXNpZHVhbFZhbHVlKSB7XG4gICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBpbm5lckF0dHJpYnV0ZVZhbHVlO1xuICAgICAgICAgIGlmIChyZXNpZHVhbFZhbHVlKSB7XG4gICAgICAgICAgICBpbm5lckVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIHJlc2lkdWFsVmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbm5lckVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghaW5uZXJBdHRyaWJ1dGVWYWx1ZSAmJiByZXNpZHVhbFZhbHVlKSB7XG4gICAgICAgICAgaW5uZXJFbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCByZXNpZHVhbFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYXR0cmlidXRlVmFsdWUpIHtcbiAgICAgIC8vIFNldCBhdHRyaWJ1dGUgb24gb3V0ZXJtb3N0IGVsZW1lbnQgaWYgaXQgZG9lc24ndCBhbHJlYWR5IGhhdmUgaXQsIG9yXG4gICAgICAvLyBpZiB0aGUgZXhpc3RpbmcgYXR0cmlidXRlIHZhbHVlIGlzIHRoZSBkZWZhdWx0LlxuICAgICAgY29uc3QgZXhpc3RpbmdBdHRyaWJ1dGVWYWx1ZSA9IG91dGVybW9zdC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gICAgICBpZiAoIWV4aXN0aW5nQXR0cmlidXRlVmFsdWUgfHxcbiAgICAgICAgICAoZXhpc3RpbmdBdHRyaWJ1dGVWYWx1ZSA9PT0gZGVmYXVsdFZhbHVlICYmIGF0dHJpYnV0ZVZhbHVlICE9PSBkZWZhdWx0VmFsdWUpKSB7XG4gICAgICAgIG91dGVybW9zdC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG5cblxuLy8gVGhlIGZpcnN0IGNvbGxlY3RpdmUgYXNzaW1pbGF0ZXMgdGhlIHNlY29uZC5cbmZ1bmN0aW9uIGFzc2ltaWxhdGVDb2xsZWN0aXZlKGNvbGxlY3RpdmUxLCBjb2xsZWN0aXZlMikge1xuICBpZiAoY29sbGVjdGl2ZTEgPT09IGNvbGxlY3RpdmUyKSB7XG4gICAgLy8gQ29sbGVjdGl2ZXMgYXJlIHNhbWU7IGlnbm9yZS5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IGNvbGxlY3RpdmUyLmVsZW1lbnRzO1xuXG4gIC8vIE9sZCBjb2xsZWN0aXZlIHdpbGwgbm8gbG9uZ2VyIGhhdmUgYW55IGVsZW1lbnRzIG9mIGl0cyBvd24uXG4gIGNvbGxlY3RpdmUyLmVsZW1lbnRzID0gW107XG5cbiAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBhc3NpbWlsYXRlRWxlbWVudChjb2xsZWN0aXZlMSwgZWxlbWVudCk7XG4gIH0pO1xuXG4gIHJldHVybiB0cnVlO1xufVxuXG5cbi8vIEFzc2ltaWxhdGUgdGhlIGluZGljYXRlZCBlbGVtZW50LlxuZnVuY3Rpb24gYXNzaW1pbGF0ZUVsZW1lbnQoY29sbGVjdGl2ZSwgZWxlbWVudCkge1xuICBpZiAoZWxlbWVudC5jb2xsZWN0aXZlID09PSBjb2xsZWN0aXZlKSB7XG4gICAgLy8gQWxyZWFkeSBwYXJ0IG9mIHRoaXMgY29sbGVjdGl2ZS5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZWxlbWVudC5jb2xsZWN0aXZlID0gY29sbGVjdGl2ZTtcbiAgY29sbGVjdGl2ZS5lbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBDb2xsZWN0aXZlO1xuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBDb21wb3NhYmxlLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gdG8gbWFrZSBhIGNsYXNzIG1vcmUgZWFzaWx5IGNvbXBvc2FibGUgd2l0aCBvdGhlciBtaXhpbnMuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gY29udHJpYnV0ZXMgYSBgY29tcG9zZWAgbWV0aG9kIHRoYXQgYXBwbGllcyBhIHNldCBvZiBtaXhpblxuICAgKiBmdW5jdGlvbnMgYW5kIHJldHVybnMgdGhlIHJlc3VsdGluZyBuZXcgY2xhc3MuIFRoaXMgc3VnYXIgY2FuIG1ha2UgdGhlXG4gICAqIGFwcGxpY2F0aW9uIG9mIG1hbnkgbWl4aW5zIGF0IG9uY2UgZWFzaWVyIHRvIHJlYWQuXG4gICAqL1xuICBjbGFzcyBDb21wb3NhYmxlIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKipcbiAgICAgKiBBcHBseSBhIHNldCBvZiBtaXhpbiBmdW5jdGlvbnMgb3IgbWl4aW4gb2JqZWN0cyB0byB0aGUgcHJlc2VudCBjbGFzcyBhbmRcbiAgICAgKiByZXR1cm4gdGhlIG5ldyBjbGFzcy5cbiAgICAgKlxuICAgICAqIEluc3RlYWQgb2Ygd3JpdGluZzpcbiAgICAgKlxuICAgICAqICAgICBsZXQgTXlDbGFzcyA9IE1peGluMShNaXhpbjIoTWl4aW4zKE1peGluNChNaXhpbjUoQmFzZUNsYXNzKSkpKSk7XG4gICAgICpcbiAgICAgKiBZb3UgY2FuIHdyaXRlOlxuICAgICAqXG4gICAgICogICAgIGxldCBNeUNsYXNzID0gQ29tcG9zYWJsZShCYXNlQ2xhc3MpLmNvbXBvc2UoXG4gICAgICogICAgICAgTWl4aW4xLFxuICAgICAqICAgICAgIE1peGluMixcbiAgICAgKiAgICAgICBNaXhpbjMsXG4gICAgICogICAgICAgTWl4aW40LFxuICAgICAqICAgICAgIE1peGluNVxuICAgICAqICAgICApO1xuICAgICAqXG4gICAgICogVGhpcyBmdW5jdGlvbiBjYW4gYWxzbyB0YWtlIG1peGluIG9iamVjdHMuIEEgbWl4aW4gb2JqZWN0IGlzIGp1c3QgYVxuICAgICAqIHNob3J0aGFuZCBmb3IgYSBtaXhpbiBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSBuZXcgc3ViY2xhc3Mgd2l0aCB0aGUgZ2l2ZW5cbiAgICAgKiBtZW1iZXJzLiBUaGUgbWl4aW4gb2JqZWN0J3MgbWVtYmVycyBhcmUgKm5vdCogY29waWVkIGRpcmVjdGx5IG9udG8gdGhlXG4gICAgICogcHJvdG90eXBlIG9mIHRoZSBiYXNlIGNsYXNzLCBhcyB3aXRoIHRyYWRpdGlvbmFsIG1peGlucy5cbiAgICAgKlxuICAgICAqIEluIGFkZGl0aW9uIHRvIHByb3ZpZGluZyBzeW50YWN0aWMgc3VnYXIsIHRoaXMgbWl4aW4gY2FuIGJlIHVzZWQgdG9cbiAgICAgKiBkZWZpbmUgYSBjbGFzcyBpbiBFUzUsIHdoaWNoIGxhY2tzIEVTNidzIGBjbGFzc2Aga2V5d29yZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Li4ubWl4aW5zfSBtaXhpbnMgLSBBIHNldCBvZiBtaXhpbiBmdW5jdGlvbnMgb3Igb2JqZWN0cyB0byBhcHBseS5cbiAgICAgKi9cbiAgICBzdGF0aWMgY29tcG9zZSguLi5taXhpbnMpIHtcbiAgICAgIC8vIFdlIGNyZWF0ZSBhIG5ldyBzdWJjbGFzcyBmb3IgZWFjaCBtaXhpbiBpbiB0dXJuLiBUaGUgcmVzdWx0IGJlY29tZXNcbiAgICAgIC8vIHRoZSBiYXNlIGNsYXNzIGV4dGVuZGVkIGJ5IGFueSBzdWJzZXF1ZW50IG1peGlucy4gSXQgdHVybnMgb3V0IHRoYXRcbiAgICAgIC8vIHdlIGNhbiB1c2UgQXJyYXkucmVkdWNlKCkgdG8gY29uY2lzZWx5IGV4cHJlc3MgdGhpcywgdXNpbmcgdGhlIGN1cnJlbnRcbiAgICAgIC8vIG9iamVjdCBhcyB0aGUgc2VlZCBmb3IgcmVkdWNlKCkuXG4gICAgICByZXR1cm4gbWl4aW5zLnJlZHVjZShjb21wb3NlQ2xhc3MsIHRoaXMpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIENvbXBvc2FibGU7XG59O1xuXG5cbi8vIFByb3BlcnRpZXMgZGVmaW5lZCBieSBPYmplY3QgdGhhdCB3ZSBkb24ndCB3YW50IHRvIG1peGluLlxuY29uc3QgTk9OX01JWEFCTEVfT0JKRUNUX1BST1BFUlRJRVMgPSBbXG4gICdjb25zdHJ1Y3Rvcidcbl07XG5cbi8qXG4gKiBBcHBseSB0aGUgbWl4aW4gdG8gdGhlIGdpdmVuIGJhc2UgY2xhc3MgdG8gcmV0dXJuIGEgbmV3IGNsYXNzLlxuICogVGhlIG1peGluIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG1vZGlmaWVkIGNsYXNzLCBvciBhXG4gKiBwbGFpbiBvYmplY3Qgd2hvc2UgbWVtYmVycyB3aWxsIGJlIGNvcGllZCB0byB0aGUgbmV3IGNsYXNzJyBwcm90b3R5cGUuXG4gKi9cbmZ1bmN0aW9uIGNvbXBvc2VDbGFzcyhiYXNlLCBtaXhpbikge1xuICBpZiAodHlwZW9mIG1peGluID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gTWl4aW4gZnVuY3Rpb25cbiAgICByZXR1cm4gbWl4aW4oYmFzZSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gTWl4aW4gb2JqZWN0XG4gICAgY2xhc3MgU3ViY2xhc3MgZXh0ZW5kcyBiYXNlIHt9XG4gICAgY29weU93blByb3BlcnRpZXMobWl4aW4sIFN1YmNsYXNzLnByb3RvdHlwZSwgTk9OX01JWEFCTEVfT0JKRUNUX1BST1BFUlRJRVMpO1xuICAgIHJldHVybiBTdWJjbGFzcztcbiAgfVxufVxuXG5cbi8qXG4gKiBDb3B5IHRoZSBnaXZlbiBwcm9wZXJ0aWVzL21ldGhvZHMgdG8gdGhlIHRhcmdldC5cbiAqIFJldHVybiB0aGUgdXBkYXRlZCB0YXJnZXQuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPd25Qcm9wZXJ0aWVzKHNvdXJjZSwgdGFyZ2V0LCBpZ25vcmVQcm9wZXJ0eU5hbWVzID0gW10pIHtcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgIGlmIChpZ25vcmVQcm9wZXJ0eU5hbWVzLmluZGV4T2YobmFtZSkgPCAwKSB7XG4gICAgICBjb25zdCBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIG5hbWUpO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHRhcmdldDtcbn1cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCB0YXJnZXRTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3RhcmdldCcpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB0aGF0IGRlZmluZXMgdGhlIHRhcmdldCBvZiBhIGNvbXBvbmVudCDigJQgdGhlIGVsZW1lbnQgdGhlIGNvbXBvbmVudCBpc1xuICAgKiBtYW5hZ2luZyBvciBzb21laG93IHJlc3BvbnNpYmxlIGZvciDigJQgYXMgaXRzIGZpcnN0IGNoaWxkLlxuICAgKlxuICAgKiBTb21lIGNvbXBvbmVudHMgc2VydmUgdG8gZGVjb3JhdGUgb3IgbW9kaWZ5IG90aGVyIGVsZW1lbnRzLiBBIGNvbW1vblxuICAgKiBwYXR0ZXJuIGlzIHRvIGhhdmUgb25lIGNvbXBvbmVudCB3cmFwIGFub3RoZXIsIGFuZCBoYXZlIHRoZSBvdXRlciwgcGFyZW50XG4gICAqIGNvbXBvbmVudCBpbXBsaWNpdGx5IG1vZGlmeSB0aGUgY2hpbGQuIFRoaXMgbWl4aW4gZmFjaWxpdGF0ZXMgdGhpcyBieVxuICAgKiBpbXBsaWNpdGx5IHRha2luZyBhbiBlbGVtZW50J3MgZmlyc3QgY2hpbGQgYXMgaXRzIFwidGFyZ2V0XCIuXG4gICAqXG4gICAqIEV4YW1wbGU6XG4gICAqXG4gICAqICAgICA8b3V0ZXItZWxlbWVudD5cbiAgICogICAgICAgPGlubmVyLWVsZW1lbnQ+PC9pbm5lci1lbGVtZW50PlxuICAgKiAgICAgPC9vdXRlci1lbGVtZW50PlxuICAgKlxuICAgKiBJZiBgb3V0ZXItZWxlbWVudGAgdXNlcyB0aGlzIG1peGluLCB0aGVuIGl0cyBgdGFyZ2V0YCBwcm9wZXJ0eSB3aWxsIGJlXG4gICAqIHNldCB0byBwb2ludCB0byB0aGUgYGlubmVyLWVsZW1lbnRgLCBiZWNhdXNlIHRoYXQgaXMgaXRzIGZpcnN0IGNoaWxkLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgYSBgY29udGVudGAgcHJvcGVydHkgdGhhdCByZXR1cm5zIHRoZSBlbGVtZW50J3MgY29udGVudC5cbiAgICogWW91IGNhbiBpbXBsZW1lbnQgdGhhdCB5b3Vyc2VsZiwgb3IgdXNlIHRoZVxuICAgKiBbRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudF0oRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudC5tZCkgbWl4aW4uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gY2FuIGJlIGNvbWJpbmVkIHdpdGggdGhlXG4gICAqIFtUYXJnZXRJbkNvbGxlY3RpdmVdKFRhcmdldEluQ29sbGVjdGl2ZS5tZCkgbWl4aW4gdG8gaGF2ZSBhIGNvbXBvbmVudFxuICAgKiBwYXJ0aWNpcGF0ZSBpbiBjb2xsZWN0aXZlIGtleWJvYXJkIGhhbmRsaW5nLlxuICAgKi9cbiAgY2xhc3MgQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnRlbnRDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbnRlbnRDaGFuZ2VkKSB7IHN1cGVyLmNvbnRlbnRDaGFuZ2VkKCk7IH1cbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQ7XG4gICAgICBjb25zdCB0YXJnZXQgPSBjb250ZW50ICYmIGNvbnRlbnRbMF07XG4gICAgICAvLyBBIGNvbXBvbmVudCB1c2luZyBhIHRhcmdldCB3aWxsIGxpa2VseSBkbyBhIGJ1bmNoIG9mIHdvcmsgd2hlbiB0aGVcbiAgICAgIC8vIHRhcmdldCBjaGFuZ2VzLCBzbyBvbmx5IHNldCB0aGUgdGFyZ2V0IGlmIGl0J3MgYWN0dWFsbHkgY2hhbmdlZC5cbiAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSB0aGlzLnRhcmdldCkge1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzL3NldHMgdGhlIGN1cnJlbnQgdGFyZ2V0IG9mIHRoZSBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgZ2V0IHRhcmdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzW3RhcmdldFN5bWJvbF07XG4gICAgfVxuICAgIHNldCB0YXJnZXQoZWxlbWVudCkge1xuICAgICAgdGhpc1t0YXJnZXRTeW1ib2xdID0gZWxlbWVudDtcbiAgICAgIGlmICgndGFyZ2V0JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci50YXJnZXQgPSBlbGVtZW50OyB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQ7XG59O1xuIiwiaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi9zeW1ib2xzJztcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIERpcmVjdGlvblNlbGVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgZGlyZWN0aW9uIHNlbWFudGljcyAoZ29MZWZ0LCBnb1JpZ2h0LCBldGMuKSB0byBzZWxlY3Rpb25cbiAgICogc2VtYW50aWNzIChzZWxlY3RQcmV2aW91cywgc2VsZWN0TmV4dCwgZXRjLikuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gY2FuIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGVcbiAgICogW0tleWJvYXJkRGlyZWN0aW9uXShLZXlib2FyZERpcmVjdGlvbi5tZCkgbWl4aW4gKHdoaWNoIG1hcHMga2V5Ym9hcmQgZXZlbnRzXG4gICAqIHRvIGRpcmVjdGlvbnMpIGFuZCBhIG1peGluIHRoYXQgaGFuZGxlcyBzZWxlY3Rpb24gbGlrZVxuICAgKiBbU2luZ2xlU2VsZWN0aW9uXShTaW5nbGVTZWxlY3Rpb24ubWQpLlxuICAgKi9cbiAgY2xhc3MgRGlyZWN0aW9uU2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBbc3ltYm9scy5nb0Rvd25dKCkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuZ29Eb3duXSkgeyBzdXBlcltzeW1ib2xzLmdvRG93bl0oKTsgfVxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0TmV4dCgpO1xuICAgIH1cblxuICAgIFtzeW1ib2xzLmdvRW5kXSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmdvRW5kXSkgeyBzdXBlcltzeW1ib2xzLmdvRW5kXSgpOyB9XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RMYXN0KCk7XG4gICAgfVxuXG4gICAgW3N5bWJvbHMuZ29MZWZ0XSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmdvTGVmdF0pIHsgc3VwZXJbc3ltYm9scy5nb0xlZnRdKCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdFByZXZpb3VzKCk7XG4gICAgfVxuXG4gICAgW3N5bWJvbHMuZ29SaWdodF0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5nb1JpZ2h0XSkgeyBzdXBlcltzeW1ib2xzLmdvUmlnaHRdKCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdE5leHQoKTtcbiAgICB9XG5cbiAgICBbc3ltYm9scy5nb1N0YXJ0XSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmdvU3RhcnRdKSB7IHN1cGVyW3N5bWJvbHMuZ29TdGFydF0oKTsgfVxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0Rmlyc3QoKTtcbiAgICB9XG5cbiAgICBbc3ltYm9scy5nb1VwXSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmdvVXBdKSB7IHN1cGVyW3N5bWJvbHMuZ29VcF0oKTsgfVxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0UHJldmlvdXMoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLiBUaGlzIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgIGdldCBzZWxlY3RlZEZyYWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkRnJhY3Rpb247XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEZyYWN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkRnJhY3Rpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb24uIFRoaXMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgc2VsZWN0Rmlyc3QoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0Rmlyc3QpIHsgcmV0dXJuIHN1cGVyLnNlbGVjdEZpcnN0KCk7IH1cbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLiBUaGlzIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgIHNlbGVjdExhc3QoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0TGFzdCkgeyByZXR1cm4gc3VwZXIuc2VsZWN0TGFzdCgpOyB9XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbi4gVGhpcyB3aWxsIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAgICBzZWxlY3ROZXh0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdE5leHQpIHsgcmV0dXJuIHN1cGVyLnNlbGVjdE5leHQoKTsgfVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb24uIFRoaXMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgc2VsZWN0UHJldmlvdXMoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0UHJldmlvdXMpIHsgcmV0dXJuIHN1cGVyLnNlbGVjdFByZXZpb3VzKCk7IH1cbiAgICB9XG5cbiAgICAvLyBNYXAgZHJhZyB0cmF2ZWwgZnJhY3Rpb24gdG8gc2VsZWN0aW9uIGZyYWN0aW9uLlxuICAgIGdldCB0cmF2ZWxGcmFjdGlvbigpIHtcbiAgICAgIHJldHVybiBzdXBlci50cmF2ZWxGcmFjdGlvbjtcbiAgICB9XG4gICAgc2V0IHRyYXZlbEZyYWN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoJ3RyYXZlbEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci50cmF2ZWxGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgICB0aGlzLnNlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBEaXJlY3Rpb25TZWxlY3Rpb247XG59O1xuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBEaXN0cmlidXRlZENoaWxkcmVuLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggZGVmaW5lcyBoZWxwZXJzIGZvciBhY2Nlc3NpbmcgYSBjb21wb25lbnQncyBkaXN0cmlidXRlZFxuICAgKiBjaGlsZHJlbiBhcyBhIGZsYXR0ZW5lZCBhcnJheSBvciBzdHJpbmcuXG4gICAqXG4gICAqIFRoZSBzdGFuZGFyZCBET00gQVBJIHByb3ZpZGVzIHNldmVyYWwgd2F5cyBvZiBhY2Nlc3NpbmcgY2hpbGQgY29udGVudDpcbiAgICogYGNoaWxkcmVuYCwgYGNoaWxkTm9kZXNgLCBhbmQgYHRleHRDb250ZW50YC4gTm9uZSBvZiB0aGVzZSBmdW5jdGlvbnMgYXJlXG4gICAqIFNoYWRvdyBET00gYXdhcmUuIFRoaXMgbWl4aW4gZGVmaW5lcyB2YXJpYXRpb25zIG9mIHRob3NlIGZ1bmN0aW9ucyB0aGF0XG4gICAqICphcmUqIFNoYWRvdyBET00gYXdhcmUuXG4gICAqXG4gICAqIEV4YW1wbGU6IHlvdSBjcmVhdGUgYSBjb21wb25lbnQgYDxjb3VudC1jaGlsZHJlbj5gIHRoYXQgZGlzcGxheXMgYSBudW1iZXJcbiAgICogZXF1YWwgdG8gdGhlIG51bWJlciBvZiBjaGlsZHJlbiBwbGFjZWQgaW5zaWRlIHRoYXQgY29tcG9uZW50LiBJZiBzb21lb25lXG4gICAqIGluc3RhbnRpYXRlcyB5b3VyIGNvbXBvbmVudCBsaWtlOlxuICAgKlxuICAgKiAgICAgPGNvdW50LWNoaWxkcmVuPlxuICAgKiAgICAgICA8ZGl2PjwvZGl2PlxuICAgKiAgICAgICA8ZGl2PjwvZGl2PlxuICAgKiAgICAgICA8ZGl2PjwvZGl2PlxuICAgKiAgICAgPC9jb3VudC1jaGlsZHJlbj5cbiAgICpcbiAgICogVGhlbiB0aGUgY29tcG9uZW50IHNob3VsZCBzaG93IFwiM1wiLCBiZWNhdXNlIHRoZXJlIGFyZSB0aHJlZSBjaGlsZHJlbi4gVG9cbiAgICogY2FsY3VsYXRlIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4sIHRoZSBjb21wb25lbnQgY2FuIGp1c3QgY2FsY3VsYXRlXG4gICAqIGB0aGlzLmNoaWxkcmVuLmxlbmd0aGAuIEhvd2V2ZXIsIHN1cHBvc2Ugc29tZW9uZSBpbnN0YW50aWF0ZXMgeW91clxuICAgKiBjb21wb25lbnQgaW5zaWRlIG9uZSBvZiB0aGVpciBvd24gY29tcG9uZW50cywgYW5kIHB1dHMgYSBgPHNsb3Q+YCBlbGVtZW50XG4gICAqIGluc2lkZSB5b3VyIGNvbXBvbmVudDpcbiAgICpcbiAgICogICAgIDxjb3VudC1jaGlsZHJlbj5cbiAgICogICAgICAgPHNsb3Q+PC9zbG90PlxuICAgKiAgICAgPC9jb3VudC1jaGlsZHJlbj5cbiAgICpcbiAgICogSWYgeW91ciBjb21wb25lbnQgb25seSBsb29rcyBhdCBgdGhpcy5jaGlsZHJlbmAsIGl0IHdpbGwgYWx3YXlzIHNlZSBleGFjdGx5XG4gICAqIG9uZSBjaGlsZCDigJTCoHRoZSBgPHNsb3Q+YCBlbGVtZW50LiBCdXQgdGhlIHVzZXIgbG9va2luZyBhdCB0aGUgcGFnZSB3aWxsXG4gICAqICpzZWUqIGFueSBub2RlcyBkaXN0cmlidXRlZCB0byB0aGF0IHNsb3QuIFRvIG1hdGNoIHdoYXQgdGhlIHVzZXIgc2VlcywgeW91clxuICAgKiBjb21wb25lbnQgc2hvdWxkIGV4cGFuZCBhbnkgYDxzbG90PmAgZWxlbWVudHMgaXQgY29udGFpbnMuXG4gICAqXG4gICAqIFRoYXQgaXMgdGhlIHByb2JsZW0gdGhpcyBtaXhpbiBzb2x2ZXMuIEFmdGVyIGFwcGx5aW5nIHRoaXMgbWl4aW4sIHlvdXJcbiAgICogY29tcG9uZW50IGNvZGUgaGFzIGFjY2VzcyB0byBgdGhpcy5kaXN0cmlidXRlZENoaWxkcmVuYCwgd2hvc2UgYGxlbmd0aGBcbiAgICogd2lsbCByZXR1cm4gdGhlIHRvdGFsIG51bWJlciBvZiBhbGwgY2hpbGRyZW4gZGlzdHJpYnV0ZWQgdG8geW91ciBjb21wb25lbnRcbiAgICogaW4gdGhlIGNvbXBvc2VkIHRyZWUuXG4gICAqXG4gICAqIE5vdGU6IFRoZSBsYXRlc3QgQ3VzdG9tIEVsZW1lbnRzIEFQSSBkZXNpZ24gY2FsbHMgZm9yIGEgbmV3IGZ1bmN0aW9uLFxuICAgKiBgZ2V0QXNzaWduZWROb2Rlc2AgdGhhdCB0YWtlcyBhbiBvcHRpb25hbCBgZGVlcGAgcGFyYW1ldGVyLCB0aGF0IHdpbGwgc29sdmVcbiAgICogdGhpcyBwcm9ibGVtIGF0IHRoZSBBUEkgbGV2ZWwuXG4gICAqL1xuICBjbGFzcyBEaXN0cmlidXRlZENoaWxkcmVuIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbi1vcmRlciBjb2xsZWN0aW9uIG9mIGRpc3RyaWJ1dGVkIGNoaWxkcmVuLCBleHBhbmRpbmcgYW55IHNsb3RcbiAgICAgKiBlbGVtZW50cy4gTGlrZSB0aGUgc3RhbmRhcmQgY2hpbGRyZW4gcHJvcGVydHksIHRoaXMgc2tpcHMgdGV4dCBub2Rlcy5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIGdldCBkaXN0cmlidXRlZENoaWxkcmVuKCkge1xuICAgICAgcmV0dXJuIGV4cGFuZENvbnRlbnRFbGVtZW50cyh0aGlzLmNoaWxkcmVuLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQW4gaW4tb3JkZXIgY29sbGVjdGlvbiBvZiBkaXN0cmlidXRlZCBjaGlsZCBub2RlcywgZXhwYW5kaW5nIGFueSBzbG90XG4gICAgICogZWxlbWVudHMuIExpa2UgdGhlIHN0YW5kYXJkIGNoaWxkTm9kZXMgcHJvcGVydHksIHRoaXMgaW5jbHVkZXMgdGV4dFxuICAgICAqIG5vZGVzLlxuICAgICAqXG4gICAgICogQHR5cGUge05vZGVbXX1cbiAgICAgKi9cbiAgICBnZXQgZGlzdHJpYnV0ZWRDaGlsZE5vZGVzKCkge1xuICAgICAgcmV0dXJuIGV4cGFuZENvbnRlbnRFbGVtZW50cyh0aGlzLmNoaWxkTm9kZXMsIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjb25jYXRlbmF0ZWQgdGV4dCBjb250ZW50IG9mIGFsbCBkaXN0cmlidXRlZCBjaGlsZCBub2RlcywgZXhwYW5kaW5nXG4gICAgICogYW55IHNsb3QgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldCBkaXN0cmlidXRlZFRleHRDb250ZW50KCkge1xuICAgICAgY29uc3Qgc3RyaW5ncyA9IHRoaXMuZGlzdHJpYnV0ZWRDaGlsZE5vZGVzLm1hcChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgICByZXR1cm4gY2hpbGQudGV4dENvbnRlbnQ7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzdHJpbmdzLmpvaW4oJycpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIERpc3RyaWJ1dGVkQ2hpbGRyZW47XG59O1xuXG5cbi8qXG4gKiBHaXZlbiBhIGFycmF5IG9mIG5vZGVzLCByZXR1cm4gYSBuZXcgYXJyYXkgd2l0aCBhbnkgY29udGVudCBlbGVtZW50cyBleHBhbmRlZFxuICogdG8gdGhlIG5vZGVzIGRpc3RyaWJ1dGVkIHRvIHRoYXQgY29udGVudCBlbGVtZW50LiBUaGlzIHJ1bGUgaXMgYXBwbGllZFxuICogcmVjdXJzaXZlbHkuXG4gKlxuICogSWYgaW5jbHVkZVRleHROb2RlcyBpcyB0cnVlLCB0ZXh0IG5vZGVzIHdpbGwgYmUgaW5jbHVkZWQsIGFzIGluIHRoZVxuICogc3RhbmRhcmQgY2hpbGROb2RlcyBwcm9wZXJ0eTsgYnkgZGVmYXVsdCwgdGhpcyBza2lwcyB0ZXh0IG5vZGVzLCBsaWtlIHRoZVxuICogc3RhbmRhcmQgY2hpbGRyZW4gcHJvcGVydHkuXG4gKi9cbmZ1bmN0aW9uIGV4cGFuZENvbnRlbnRFbGVtZW50cyhub2RlcywgaW5jbHVkZVRleHROb2Rlcykge1xuICBjb25zdCBleHBhbmRlZCA9IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChub2Rlcywgbm9kZSA9PiB7XG4gICAgLy8gV2Ugd2FudCB0byBzZWUgaWYgdGhlIG5vZGUgaXMgYW4gaW5zdGFuY2VvZiBIVE1MU2xvdEVMZW1lbnQsIGJ1dFxuICAgIC8vIHRoYXQgY2xhc3Mgd29uJ3QgZXhpc3QgaWYgdGhlIGJyb3dzZXIgdGhhdCBkb2Vzbid0IHN1cHBvcnQgbmF0aXZlXG4gICAgLy8gU2hhZG93IERPTSBhbmQgaWYgdGhlIFNoYWRvdyBET00gcG9seWZpbGwgaGFzbid0IGJlZW4gbG9hZGVkLiBJbnN0ZWFkLFxuICAgIC8vIHdlIGRvIGEgc2ltcGxpc3RpYyBjaGVjayB0byBzZWUgaWYgdGhlIHRhZyBuYW1lIGlzIFwic2xvdFwiLlxuICAgIGNvbnN0IGlzU2xvdCA9IHR5cGVvZiBIVE1MU2xvdEVsZW1lbnQgIT09ICd1bmRlZmluZWQnID9cbiAgICAgIG5vZGUgaW5zdGFuY2VvZiBIVE1MU2xvdEVsZW1lbnQgOlxuICAgICAgbm9kZS5sb2NhbE5hbWUgPT09ICdzbG90JztcbiAgICBpZiAoaXNTbG90KSB7XG4gICAgICAvLyBVc2UgdGhlIG5vZGVzIGFzc2lnbmVkIHRvIHRoaXMgbm9kZSBpbnN0ZWFkLlxuICAgICAgY29uc3QgYXNzaWduZWROb2RlcyA9IG5vZGUuYXNzaWduZWROb2Rlcyh7IGZsYXR0ZW46IHRydWUgfSk7XG4gICAgICByZXR1cm4gYXNzaWduZWROb2RlcyA/XG4gICAgICAgIGV4cGFuZENvbnRlbnRFbGVtZW50cyhhc3NpZ25lZE5vZGVzLCBpbmNsdWRlVGV4dE5vZGVzKSA6XG4gICAgICAgIFtdO1xuICAgIH0gZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAvLyBQbGFpbiBlbGVtZW50OyB1c2UgYXMgaXMuXG4gICAgICByZXR1cm4gW25vZGVdO1xuICAgIH0gZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIFRleHQgJiYgaW5jbHVkZVRleHROb2Rlcykge1xuICAgICAgLy8gVGV4dCBub2RlLlxuICAgICAgcmV0dXJuIFtub2RlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ29tbWVudCwgcHJvY2Vzc2luZyBpbnN0cnVjdGlvbiwgZXRjLjsgc2tpcC5cbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH0pO1xuICBjb25zdCBmbGF0dGVuZWQgPSBbXS5jb25jYXQoLi4uZXhwYW5kZWQpO1xuICByZXR1cm4gZmxhdHRlbmVkO1xufVxuIiwiaW1wb3J0IG1pY3JvdGFzayBmcm9tICcuL21pY3JvdGFzayc7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50LiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggZGVmaW5lcyBhIGNvbXBvbmVudCdzIGNvbnRlbnQgYXMgaXRzIGNoaWxkcmVuLCBleHBhbmRpbmcgYW55XG4gICAqIG5vZGVzIGRpc3RyaWJ1dGVkIHRvIHRoZSBjb21wb25lbnQncyBzbG90cy5cbiAgICpcbiAgICogVGhpcyBhbHNvIHByb3ZpZGVzIG5vdGlmaWNhdGlvbiBvZiBjaGFuZ2VzIHRvIGEgY29tcG9uZW50J3MgY29udGVudC4gSXRcbiAgICogd2lsbCBpbnZva2UgYSBgY29udGVudENoYW5nZWRgIG1ldGhvZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgZmlyc3RcbiAgICogaW5zdGFudGlhdGVkLCBhbmQgd2hlbmV2ZXIgaXRzIGRpc3RyaWJ1dGVkIGNoaWxkcmVuIGNoYW5nZS4gVGhpcyBpcyBhblxuICAgKiBlYXN5IHdheSB0byBzYXRpc2Z5IHRoZSBHb2xkIFN0YW5kYXJkIGNoZWNrbGlzdCBpdGVtIGZvciBtb25pdG9yaW5nXG4gICAqIFtDb250ZW50IENoYW5nZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJjb21wb25lbnRzL2dvbGQtc3RhbmRhcmQvd2lraS9Db250ZW50LUNoYW5nZXMpLlxuICAgKlxuICAgKiBFeGFtcGxlOlxuICAgKlxuICAgKiBgYGBcbiAgICogbGV0IGJhc2UgPSBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50KERpc3RyaWJ1dGVkQ2hpbGRyZW4oSFRNTEVsZW1lbnQpKTtcbiAgICogY2xhc3MgQ291bnRpbmdFbGVtZW50IGV4dGVuZHMgYmFzZSB7XG4gICAqXG4gICAqICAgY29uc3RydWN0b3IoKSB7XG4gICAqICAgICBzdXBlcigpO1xuICAgKiAgICAgbGV0IHJvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICogICAgIHJvb3QuaW5uZXJIVE1MID0gYDxzbG90Pjwvc2xvdD5gO1xuICAgKiAgIH1cbiAgICpcbiAgICogICBjb250ZW50Q2hhbmdlZCgpIHtcbiAgICogICAgIC8vIENvdW50IHRoZSBjb21wb25lbnQncyBjaGlsZHJlbiwgYm90aCBpbml0aWFsbHkgYW5kIHdoZW4gY2hhbmdlZC5cbiAgICogICAgIHRoaXMuY291bnQgPSB0aGlzLmRpc3RyaWJ1dGVkQ2hpbGRyZW4ubGVuZ3RoO1xuICAgKiAgIH1cbiAgICpcbiAgICogfVxuICAgKiBgYGBcbiAgICpcbiAgICogTm90ZSB0aGF0IGNvbnRlbnQgY2hhbmdlIGRldGVjdGlvbiBkZXBlbmRzIHVwb24gdGhlIGVsZW1lbnQgaGF2aW5nIGF0IGxlYXN0XG4gICAqIG9uZSBgc2xvdGAgZWxlbWVudCBpbiBpdHMgc2hhZG93IHN1YnRyZWUuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaXMgaW50ZW5kZWQgZm9yIHVzZSB3aXRoIHRoZVxuICAgKiBbRGlzdHJpYnV0ZWRDaGlsZHJlbl0oRGlzdHJpYnV0ZWRDaGlsZHJlbi5tZCkgbWl4aW4uIFNlZSB0aGF0IG1peGluIGZvciBhXG4gICAqIGRpc2N1c3Npb24gb2YgaG93IHRoYXQgd29ya3MuIFRoaXMgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCBtaXhpblxuICAgKiBwcm92aWRlcyBhbiBlYXN5IHdheSBvZiBkZWZpbmluZyB0aGUgXCJjb250ZW50XCIgb2YgYSBjb21wb25lbnQgYXMgdGhlXG4gICAqIGNvbXBvbmVudCdzIGRpc3RyaWJ1dGVkIGNoaWxkcmVuLiBUaGF0IGluIHR1cm4gbGV0cyBtaXhpbnMgbGlrZVxuICAgKiBbQ29udGVudEFzSXRlbXNdKENvbnRlbnRBc0l0ZW1zLm1kKSBtYW5pcHVsYXRlIHRoZSBjaGlsZHJlbiBhcyBsaXN0IGl0ZW1zLlxuICAgKi9cbiAgY2xhc3MgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuXG4gICAgICBpZiAodGhpcy5zaGFkb3dSb290KSB7XG4gICAgICAgIC8vIExpc3RlbiB0byBjaGFuZ2VzIG9uIGFsbCBzbG90cy5cbiAgICAgICAgY29uc3Qgc2xvdHMgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbCgnc2xvdCcpO1xuICAgICAgICBzbG90cy5mb3JFYWNoKHNsb3QgPT4gc2xvdC5hZGRFdmVudExpc3RlbmVyKCdzbG90Y2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgICAgIHRoaXMuY29udGVudENoYW5nZWQoKTtcbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICAvLyBNYWtlIGFuIGluaXRpYWwgY2FsbCB0byBjb250ZW50Q2hhbmdlZCgpIHNvIHRoYXQgdGhlIGNvbXBvbmVudCBjYW4gZG9cbiAgICAgIC8vIGluaXRpYWxpemF0aW9uIHRoYXQgaXQgbm9ybWFsbHkgZG9lcyB3aGVuIGNvbnRlbnQgY2hhbmdlcy5cbiAgICAgIC8vXG4gICAgICAvLyBUaGlzIHdpbGwgaW52b2tlIGNvbnRlbnRDaGFuZ2VkKCkgaGFuZGxlcnMgaW4gb3RoZXIgbWl4aW5zLiBJbiBvcmRlclxuICAgICAgLy8gdGhhdCB0aG9zZSBtaXhpbnMgaGF2ZSBhIGNoYW5jZSB0byBjb21wbGV0ZSB0aGVpciBvd24gaW5pdGlhbGl6YXRpb24sXG4gICAgICAvLyB3ZSBhZGQgdGhlIGNvbnRlbnRDaGFuZ2VkKCkgY2FsbCB0byB0aGUgbWljcm90YXNrIHF1ZXVlLlxuICAgICAgbWljcm90YXNrKCgpID0+IHRoaXMuY29udGVudENoYW5nZWQoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSBjb250ZW50cyBvZiB0aGUgY29tcG9uZW50IChpbmNsdWRpbmcgZGlzdHJpYnV0ZWRcbiAgICAgKiBjaGlsZHJlbikgaGF2ZSBjaGFuZ2VkLlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgaXMgYWxzbyBpbnZva2VkIHdoZW4gYSBjb21wb25lbnQgaXMgZmlyc3QgaW5zdGFudGlhdGVkOyB0aGVcbiAgICAgKiBjb250ZW50cyBoYXZlIGVzc2VudGlhbGx5IFwiY2hhbmdlZFwiIGZyb20gYmVpbmcgbm90aGluZy4gVGhpcyBhbGxvd3MgdGhlXG4gICAgICogY29tcG9uZW50IHRvIHBlcmZvcm0gaW5pdGlhbCBwcm9jZXNzaW5nIG9mIGl0cyBjaGlsZHJlbi5cbiAgICAgKi9cbiAgICBjb250ZW50Q2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5jb250ZW50Q2hhbmdlZCkgeyBzdXBlci5jb250ZW50Q2hhbmdlZCgpOyB9XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnY29udGVudC1jaGFuZ2VkJyk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjb250ZW50IG9mIHRoaXMgY29tcG9uZW50LCBkZWZpbmVkIHRvIGJlIHRoZSBmbGF0dGVuZWQgYXJyYXkgb2ZcbiAgICAgKiBjaGlsZHJlbiBkaXN0cmlidXRlZCB0byB0aGUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50W119XG4gICAgICovXG4gICAgZ2V0IGNvbnRlbnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kaXN0cmlidXRlZENoaWxkcmVuO1xuICAgIH1cbiAgICBzZXQgY29udGVudCh2YWx1ZSkge1xuICAgICAgaWYgKCdjb250ZW50JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5jb250ZW50ID0gdmFsdWU7IH1cbiAgICAgIC8vIFRPRE86IFNldCB0aGUgY2hpbGRyZW4gdG8gdGhlIGdpdmVuIHZhbHVlICh3aGljaCBzaG91bGQgYmUgYW4gYXJyYXkgb2ZcbiAgICAgIC8vIGVsZW1lbnRzKT9cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIHJhaXNlZCB3aGVuIHRoZSBjb21wb25lbnQncyBjb250ZW50cyAoaW5jbHVkaW5nIGRpc3RyaWJ1dGVkXG4gICAgICogY2hpbGRyZW4pIGhhdmUgY2hhbmdlZC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50XG4gICAgICogQGV2ZW50IGNvbnRlbnQtY2hhbmdlZFxuICAgICAqL1xuICB9XG5cbiAgcmV0dXJuIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQ7XG59O1xuIiwiaW1wb3J0IENvbGxlY3RpdmUgZnJvbSAnLi9Db2xsZWN0aXZlJztcbmltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IHNhZmVBdHRyaWJ1dGVzIGZyb20gJy4vc2FmZUF0dHJpYnV0ZXMnO1xuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi9zeW1ib2xzJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3Qga2V5ZG93bkxpc3RlbmVyU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdrZXlkb3duTGlzdGVuZXInKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIEtleWJvYXJkLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggbWFuYWdlcyB0aGUga2V5ZG93biBoYW5kbGluZyBmb3IgYSBjb21wb25lbnQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaGFuZGxlcyBzZXZlcmFsIGtleWJvYXJkLXJlbGF0ZWQgZmVhdHVyZXMuXG4gICAqXG4gICAqIEZpcnN0LCBpdCB3aXJlcyB1cCBhIHNpbmdsZSBrZXlkb3duIGV2ZW50IGhhbmRsZXIgdGhhdCBjYW4gYmUgc2hhcmVkIGJ5XG4gICAqIG11bHRpcGxlIG1peGlucyBvbiBhIGNvbXBvbmVudC4gVGhlIGV2ZW50IGhhbmRsZXIgd2lsbCBpbnZva2UgYSBga2V5ZG93bmBcbiAgICogbWV0aG9kIHdpdGggdGhlIGV2ZW50IG9iamVjdCwgYW5kIGFueSBtaXhpbiBhbG9uZyB0aGUgcHJvdG90eXBlIGNoYWluIHRoYXRcbiAgICogd2FudHMgdG8gaGFuZGxlIHRoYXQgbWV0aG9kIGNhbiBkbyBzby5cbiAgICpcbiAgICogSWYgYSBtaXhpbiB3YW50cyB0byBpbmRpY2F0ZSB0aGF0IGtleWJvYXJkIGV2ZW50IGhhcyBiZWVuIGhhbmRsZWQsIGFuZCB0aGF0XG4gICAqIG90aGVyIG1peGlucyBzaG91bGQgKm5vdCogaGFuZGxlIGl0LCB0aGUgbWl4aW4ncyBga2V5ZG93bmAgaGFuZGxlciBzaG91bGRcbiAgICogcmV0dXJuIGEgdmFsdWUgb2YgdHJ1ZS4gVGhlIGNvbnZlbnRpb24gdGhhdCBzZWVtcyB0byB3b3JrIHdlbGwgaXMgdGhhdCBhXG4gICAqIG1peGluIHNob3VsZCBzZWUgaWYgaXQgd2FudHMgdG8gaGFuZGxlIHRoZSBldmVudCBhbmQsIGlmIG5vdCwgdGhlbiBhc2sgdGhlXG4gICAqIHN1cGVyY2xhc3MgdG8gc2VlIGlmIGl0IHdhbnRzIHRvIGhhbmRsZSB0aGUgZXZlbnQuIFRoaXMgaGFzIHRoZSBlZmZlY3Qgb2ZcbiAgICogZ2l2aW5nIHRoZSBtaXhpbiB0aGF0IHdhcyBhcHBsaWVkIGxhc3QgdGhlIGZpcnN0IGNoYW5jZSBhdCBoYW5kbGluZyBhXG4gICAqIGtleWJvYXJkIGV2ZW50LlxuICAgKlxuICAgKiBFeGFtcGxlOlxuICAgKlxuICAgKiAgICAgW3N5bWJvbHMua2V5ZG93bl0oZXZlbnQpIHtcbiAgICogICAgICAgbGV0IGhhbmRsZWQ7XG4gICAqICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgKiAgICAgICAgIC8vIEhhbmRsZSB0aGUga2V5cyB5b3Ugd2FudCwgc2V0dGluZyBoYW5kbGVkID0gdHJ1ZSBpZiBhcHByb3ByaWF0ZS5cbiAgICogICAgICAgfVxuICAgKiAgICAgICAvLyBQcmVmZXIgbWl4aW4gcmVzdWx0IGlmIGl0J3MgZGVmaW5lZCwgb3RoZXJ3aXNlIHVzZSBiYXNlIHJlc3VsdC5cbiAgICogICAgICAgcmV0dXJuIGhhbmRsZWQgfHwgKHN1cGVyW3N5bWJvbHMua2V5ZG93bl0gJiYgc3VwZXJbc3ltYm9scy5rZXlkb3duXShldmVudCkpO1xuICAgKiAgICAgfVxuICAgKlxuICAgKiBBIHNlY29uZCBmZWF0dXJlIHByb3ZpZGVkIGJ5IHRoaXMgbWl4aW4gaXMgdGhhdCBpdCBpbXBsaWNpdGx5IG1ha2VzIHRoZVxuICAgKiBjb21wb25lbnQgYSB0YWIgc3RvcCBpZiBpdCBpc24ndCBhbHJlYWR5LCBieSBzZXR0aW5nIGB0YWJJbmRleGAgdG8gMC4gVGhpc1xuICAgKiBoYXMgdGhlIGVmZmVjdCBvZiBhZGRpbmcgdGhlIGNvbXBvbmVudCB0byB0aGUgdGFiIG9yZGVyIGluIGRvY3VtZW50IG9yZGVyLlxuICAgKlxuICAgKiBGaW5hbGx5LCB0aGlzIG1peGluIGlzIGRlc2lnbmVkIHRvIHdvcmsgd2l0aCB0aGUgb3B0aW9uYWxcbiAgICogW0NvbGxlY3RpdmVdKENvbGxlY3RpdmUubWQpIGNsYXNzIHZpYSBhIG1peGluIGxpa2VcbiAgICogW1RhcmdldEluQ29sbGVjdGl2ZV0oVGFyZ2V0SW5Db2xsZWN0aXZlLm1kKS4gVGhpcyBhbGxvd3MgYSBzZXQgb2YgcmVsYXRlZFxuICAgKiBjb21wb25lbnQgaW5zdGFuY2VzIHRvIGNvb3BlcmF0aXZlbHkgaGFuZGxlIHRoZSBrZXlib2FyZC4gU2VlIHRoZVxuICAgKiBDb2xsZWN0aXZlIGNsYXNzIGZvciBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3MgS2V5Ym9hcmQgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIC8vIEFzc3VtZSB0aGlzIGNvbXBvbmVudCBpcyBnb2luZyB0byBoYW5kbGUgdGhlIGtleWJvYXJkIG9uIGl0cyBvd24uXG4gICAgICBzdGFydExpc3RlbmluZ1RvS2V5ZG93bih0aGlzKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIElmIHdlJ3JlIG5vdyB0aGUgb3V0ZXJtb3N0IGVsZW1lbnQgb2YgdGhlIGNvbGxlY3RpdmUsIHNldCB1cCB0byByZWNlaXZlXG4gICAgICoga2V5Ym9hcmQgZXZlbnRzLiBJZiB3ZSdyZSBubyBsb25nZXIgdGhlIG91dGVybW9zdCBlbGVtZW50LCBzdG9wXG4gICAgICogbGlzdGVuaW5nLlxuICAgICAqL1xuICAgIGNvbGxlY3RpdmVDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbGxlY3RpdmVDaGFuZ2VkKSB7IHN1cGVyLmNvbGxlY3RpdmVDaGFuZ2VkKCk7IH1cblxuICAgICAgaWYgKHRoaXMuY29sbGVjdGl2ZS5vdXRlcm1vc3RFbGVtZW50ICE9PSB0aGlzKSB7XG4gICAgICAgIC8vIFdlJ3JlIG5vIGxvbmdlciB0aGUgb3V0ZXJtb3N0IGVsZW1lbnQ7IHN0b3AgbGlzdGVuaW5nLlxuICAgICAgICBpZiAoaXNMaXN0ZW5pbmdUb0tleWRvd24odGhpcykpIHtcbiAgICAgICAgICBzdG9wTGlzdGVuaW5nVG9LZXlkb3duKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc0xpc3RlbmluZ1RvS2V5ZG93bih0aGlzKSkge1xuICAgICAgICBzdGFydExpc3RlbmluZ1RvS2V5ZG93bih0aGlzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgQ29sbGVjdGl2ZS5wcm9tb3RlQXR0cmlidXRlKHRoaXMsICd0YWJpbmRleCcsICcwJyk7XG4gICAgICAgIENvbGxlY3RpdmUucHJvbW90ZUF0dHJpYnV0ZSh0aGlzLCAnYXJpYS1sYWJlbCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKSB7IHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7IH1cbiAgICAgIHNhZmVBdHRyaWJ1dGVzLmNvbm5lY3RlZCh0aGlzKTtcbiAgICAgIC8vIFNldCBhIGRlZmF1bHQgdGFiIGluZGV4IG9mIDAgKGRvY3VtZW50IG9yZGVyKSBpZiBubyB0YWIgaW5kZXggZXhpc3RzLlxuICAgICAgQ29sbGVjdGl2ZS5wcm9tb3RlQXR0cmlidXRlKHRoaXMsICd0YWJpbmRleCcsICcwJyk7XG4gICAgICBDb2xsZWN0aXZlLnByb21vdGVBdHRyaWJ1dGUodGhpcywgJ2FyaWEtbGFiZWwnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgdGhlIGluZGljYXRlZCBrZXlib2FyZCBldmVudC5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy4gVGhpcyB3aWxsXG4gICAgICogdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudCAtIHRoZSBrZXlib2FyZCBldmVudFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIGV2ZW50IHdhcyBoYW5kbGVkXG4gICAgICovXG4gICAgW3N5bWJvbHMua2V5ZG93bl0oZXZlbnQpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmtleWRvd25dKSB7IHJldHVybiBzdXBlcltzeW1ib2xzLmtleWRvd25dKGV2ZW50KTsgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIEtleWJvYXJkO1xufTtcblxuXG4vLyBGaXJlIHRoZSBrZXlkb3duKCkgbWV0aG9kIG9uIHRoZSBlbGVtZW50IG9yIChpZiBpdCBiZWxvbmdzIHRvIGEgY29sbGVjdGl2ZSlcbi8vIGFsbCBlbGVtZW50cyBpbiB0aGUgY29sbGVjdGl2ZS5cbi8vXG4vLyBOb3RlOiB0aGUgdmFsdWUgb2YgJ3RoaXMnIGlzIGJvdW5kIHRvIHRoZSBlbGVtZW50IHdoaWNoIHJlY2VpdmVkIHRoZSBldmVudC5cbmZ1bmN0aW9uIGtleWRvd24oZXZlbnQpIHtcblxuICBsZXQgaGFuZGxlZCA9IGZhbHNlO1xuXG4gIGlmICh0aGlzLmNvbGxlY3RpdmUpIHtcbiAgICAvLyBHaXZlIGNvbGxlY3RpdmUgZWxlbWVudHMgYSBzaG90IGF0IHRoZSBldmVudCwgd29ya2luZyBmcm9tIGlubmVybW9zdCB0b1xuICAgIC8vIG91dGVybW9zdCAodGhpcyBlbGVtZW50KS5cbiAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuY29sbGVjdGl2ZS5lbGVtZW50cztcbiAgICBmb3IgKGxldCBpID0gZWxlbWVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcbiAgICAgIGhhbmRsZWQgPSBlbGVtZW50W3N5bWJvbHMua2V5ZG93bl0gJiYgZWxlbWVudFtzeW1ib2xzLmtleWRvd25dKGV2ZW50KTtcbiAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBDb21wb25lbnQgaXMgaGFuZGxpbmcgdGhlIGtleWJvYXJkIG9uIGl0cyBvd24uXG4gICAgaGFuZGxlZCA9IHRoaXNbc3ltYm9scy5rZXlkb3duXShldmVudCk7XG4gIH1cblxuICBpZiAoaGFuZGxlZCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBpc0xpc3RlbmluZ1RvS2V5ZG93bihlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50W2tleWRvd25MaXN0ZW5lclN5bWJvbF0gIT0gbnVsbDtcbn1cblxuXG5mdW5jdGlvbiBzdGFydExpc3RlbmluZ1RvS2V5ZG93bihlbGVtZW50KSB7XG4gIGVsZW1lbnRba2V5ZG93bkxpc3RlbmVyU3ltYm9sXSA9IGtleWRvd24uYmluZChlbGVtZW50KTtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZWxlbWVudFtrZXlkb3duTGlzdGVuZXJTeW1ib2xdKTtcbn1cblxuXG5mdW5jdGlvbiBzdG9wTGlzdGVuaW5nVG9LZXlkb3duKGVsZW1lbnQpIHtcbiAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZWxlbWVudFtrZXlkb3duTGlzdGVuZXJTeW1ib2xdKTtcbiAgZWxlbWVudFtrZXlkb3duTGlzdGVuZXJTeW1ib2xdID0gbnVsbDtcbn1cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi9zeW1ib2xzJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgbmF2aWdhdGlvbkF4aXNTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ25hdmlnYXRpb25BeGlzJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBLZXlib2FyZERpcmVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgZGlyZWN0aW9uIGtleXMgKExlZnQsIFJpZ2h0LCBldGMuKSB0byBkaXJlY3Rpb24gc2VtYW50aWNzXG4gICAqIChnbyBsZWZ0LCBnbyByaWdodCwgZXRjLikuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyB0aGUgY29tcG9uZW50IHRvIGludm9rZSBhIGBrZXlkb3duYCBtZXRob2Qgd2hlbiBhIGtleSBpc1xuICAgKiBwcmVzc2VkLiBZb3UgY2FuIHVzZSB0aGUgW0tleWJvYXJkXShLZXlib2FyZC5tZCkgbWl4aW4gZm9yIHRoYXQgcHVycG9zZSwgb3JcbiAgICogd2lyZSB1cCB5b3VyIG93biBrZXlib2FyZCBoYW5kbGluZyBhbmQgY2FsbCBga2V5ZG93bmAgeW91cnNlbGYuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gY2FsbHMgbWV0aG9kcyBzdWNoIGFzIGBnb0xlZnRgIGFuZCBgZ29SaWdodGAuIFlvdSBjYW4gZGVmaW5lXG4gICAqIHdoYXQgdGhhdCBtZWFucyBieSBpbXBsZW1lbnRpbmcgdGhvc2UgbWV0aG9kcyB5b3Vyc2VsZi4gSWYgeW91IHdhbnQgdG8gdXNlXG4gICAqIGRpcmVjdGlvbiBrZXlzIHRvIG5hdmlnYXRlIGEgc2VsZWN0aW9uLCB1c2UgdGhpcyBtaXhpbiB3aXRoIHRoZVxuICAgKiBbRGlyZWN0aW9uU2VsZWN0aW9uXShEaXJlY3Rpb25TZWxlY3Rpb24ubWQpIG1peGluLlxuICAgKi9cbiAgY2xhc3MgS2V5Ym9hcmREaXJlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIC8vIFNldCBkZWZhdWx0cy5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5uYXZpZ2F0aW9uQXhpcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uQXhpcyA9IHRoaXNbc3ltYm9scy5kZWZhdWx0c10ubmF2aWdhdGlvbkF4aXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IFtzeW1ib2xzLmRlZmF1bHRzXSgpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRzID0gc3VwZXJbc3ltYm9scy5kZWZhdWx0c10gfHwge307XG4gICAgICBkZWZhdWx0cy5uYXZpZ2F0aW9uQXhpcyA9ICdib3RoJztcbiAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgZG93bi5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgW3N5bWJvbHMuZ29Eb3duXSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmdvRG93bl0pIHsgcmV0dXJuIHN1cGVyW3N5bWJvbHMuZ29Eb3duXSgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHRvIHRoZSBlbmQgKGUuZy4sIG9mIGEgbGlzdCkuXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIFtzeW1ib2xzLmdvRW5kXSgpIHtcbiAgICAgIGlmIChzdXBlcltzeW1ib2xzLmdvRW5kXSkgeyByZXR1cm4gc3VwZXJbc3ltYm9scy5nb0VuZF0oKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSBsZWZ0LlxuICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAgICAgKi9cbiAgICBbc3ltYm9scy5nb0xlZnRdKCkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuZ29MZWZ0XSkgeyByZXR1cm4gc3VwZXJbc3ltYm9scy5nb0xlZnRdKCk7IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgcmlnaHQuXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIFtzeW1ib2xzLmdvUmlnaHRdKCkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuZ29SaWdodF0pIHsgcmV0dXJuIHN1cGVyW3N5bWJvbHMuZ29SaWdodF0oKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSB0byB0aGUgc3RhcnQgKGUuZy4sIG9mIGFcbiAgICAgKiBsaXN0KS4gVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAqL1xuICAgIFtzeW1ib2xzLmdvU3RhcnRdKCkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuZ29TdGFydF0pIHsgcmV0dXJuIHN1cGVyW3N5bWJvbHMuZ29TdGFydF0oKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSB1cC5cbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICovXG4gICAgW3N5bWJvbHMuZ29VcF0oKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5nb1VwXSkgeyByZXR1cm4gc3VwZXJbc3ltYm9scy5nb1VwXSgpOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHRoZSBkaXJlY3Rpb24gb2YgcGVybWl0dGVkIG5hdmlnYXRpb24gd2l0aCB0aGUga2V5Ym9hcmQuXG4gICAgICpcbiAgICAgKiBBY2NlcHRlZCB2YWx1ZXMgYXJlIFwiaG9yaXpvbnRhbFwiLCBcInZlcnRpY2FsXCIsIG9yIFwiYm90aFwiICh0aGUgZGVmYXVsdCkuXG4gICAgICogSWYgdGhpcyBwcm9wZXJ0eSBpcyBcImhvcml6b250YWxcIiwgdGhlIFVwIEFycm93IGFuZCBEb3duIEFycm93IGtleXMgd2lsbFxuICAgICAqIGJlIGlnbm9yZWQuIENvbnZlcnNlbHksIGlmIHRoaXMgaXMgXCJ2ZXJ0aWNhbFwiLCB0aGUgTGVmdCBBcnJvdyBhbmQgUmlnaHRcbiAgICAgKiBBcnJvdyBrZXlzIHdpbGwgYmUgaWdub3JlZC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0IG5hdmlnYXRpb25BeGlzKCkge1xuICAgICAgcmV0dXJuIHRoaXNbbmF2aWdhdGlvbkF4aXNTeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgbmF2aWdhdGlvbkF4aXModmFsdWUpIHtcbiAgICAgIHRoaXNbbmF2aWdhdGlvbkF4aXNTeW1ib2xdID0gdmFsdWU7XG4gICAgICBpZiAoJ25hdmlnYXRpb25BeGlzJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5uYXZpZ2F0aW9uQXhpcyA9IHZhbHVlOyB9XG4gICAgfVxuXG4gICAgW3N5bWJvbHMua2V5ZG93bl0oZXZlbnQpIHtcbiAgICAgIGxldCBoYW5kbGVkO1xuXG4gICAgICBjb25zdCBheGlzID0gdGhpcy5uYXZpZ2F0aW9uQXhpcztcbiAgICAgIGNvbnN0IGhvcml6b250YWwgPSAoYXhpcyA9PT0gJ2hvcml6b250YWwnIHx8IGF4aXMgPT09ICdib3RoJyk7XG4gICAgICBjb25zdCB2ZXJ0aWNhbCA9IChheGlzID09PSAndmVydGljYWwnIHx8IGF4aXMgPT09ICdib3RoJyk7XG5cbiAgICAgIC8vIElnbm9yZSBMZWZ0L1JpZ2h0IGtleXMgd2hlbiBtZXRhS2V5IG9yIGFsdEtleSBtb2RpZmllciBpcyBhbHNvIHByZXNzZWQsXG4gICAgICAvLyBhcyB0aGUgdXNlciBtYXkgYmUgdHJ5aW5nIHRvIG5hdmlnYXRlIGJhY2sgb3IgZm9yd2FyZCBpbiB0aGUgYnJvd3Nlci5cbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICBjYXNlIDM1OiAvLyBFbmRcbiAgICAgICAgICBoYW5kbGVkID0gdGhpc1tzeW1ib2xzLmdvRW5kXSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM2OiAvLyBIb21lXG4gICAgICAgICAgaGFuZGxlZCA9IHRoaXNbc3ltYm9scy5nb1N0YXJ0XSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM3OiAvLyBMZWZ0XG4gICAgICAgICAgaWYgKGhvcml6b250YWwgJiYgIWV2ZW50Lm1ldGFLZXkgJiYgIWV2ZW50LmFsdEtleSkge1xuICAgICAgICAgICAgaGFuZGxlZCA9IHRoaXNbc3ltYm9scy5nb0xlZnRdKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM4OiAvLyBVcFxuICAgICAgICAgIGlmICh2ZXJ0aWNhbCkge1xuICAgICAgICAgICAgaGFuZGxlZCA9IGV2ZW50LmFsdEtleSA/IHRoaXNbc3ltYm9scy5nb1N0YXJ0XSgpIDogdGhpc1tzeW1ib2xzLmdvVXBdKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM5OiAvLyBSaWdodFxuICAgICAgICAgIGlmIChob3Jpem9udGFsICYmICFldmVudC5tZXRhS2V5ICYmICFldmVudC5hbHRLZXkpIHtcbiAgICAgICAgICAgIGhhbmRsZWQgPSB0aGlzW3N5bWJvbHMuZ29SaWdodF0oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDA6IC8vIERvd25cbiAgICAgICAgICBpZiAodmVydGljYWwpIHtcbiAgICAgICAgICAgIGhhbmRsZWQgPSBldmVudC5hbHRLZXkgPyB0aGlzW3N5bWJvbHMuZ29FbmRdKCkgOiB0aGlzW3N5bWJvbHMuZ29Eb3duXSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIC8vIFByZWZlciBtaXhpbiByZXN1bHQgaWYgaXQncyBkZWZpbmVkLCBvdGhlcndpc2UgdXNlIGJhc2UgcmVzdWx0LlxuICAgICAgcmV0dXJuIGhhbmRsZWQgfHwgKHN1cGVyW3N5bWJvbHMua2V5ZG93bl0gJiYgc3VwZXJbc3ltYm9scy5rZXlkb3duXShldmVudCkpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIEtleWJvYXJkRGlyZWN0aW9uO1xufTtcbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggU2hhZG93RWxlbWVudFJlZmVyZW5jZXMuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB0byBjcmVhdGUgcmVmZXJlbmNlcyB0byBlbGVtZW50cyBpbiBhIGNvbXBvbmVudCdzIFNoYWRvdyBET00gc3VidHJlZS5cbiAgICpcbiAgICogVGhpcyBhZGRzIGEgbWVtYmVyIG9uIHRoZSBjb21wb25lbnQgY2FsbGVkIGB0aGlzLiRgIHRoYXQgY2FuIGJlIHVzZWQgdG9cbiAgICogcmVmZXJlbmNlIHNoYWRvdyBlbGVtZW50cyB3aXRoIElEcy4gRS5nLiwgaWYgY29tcG9uZW50J3Mgc2hhZG93IGNvbnRhaW5zIGFuXG4gICAqIGVsZW1lbnQgYDxidXR0b24gaWQ9XCJmb29cIj5gLCB0aGVuIHRoaXMgbWl4aW4gd2lsbCBjcmVhdGUgYSBtZW1iZXJcbiAgICogYHRoaXMuJC5mb29gIHRoYXQgcG9pbnRzIHRvIHRoYXQgYnV0dG9uLlxuICAgKlxuICAgKiBTdWNoIHJlZmVyZW5jZXMgc2ltcGxpZnkgYSBjb21wb25lbnQncyBhY2Nlc3MgdG8gaXRzIG93biBlbGVtZW50cy4gSW5cbiAgICogZXhjaGFuZ2UsIHRoaXMgbWl4aW4gdHJhZGVzIG9mZiBhIG9uZS10aW1lIGNvc3Qgb2YgcXVlcnlpbmcgYWxsIGVsZW1lbnRzIGluXG4gICAqIHRoZSBzaGFkb3cgdHJlZSBpbnN0ZWFkIG9mIHBheWluZyBhbiBvbmdvaW5nIGNvc3QgdG8gcXVlcnkgZm9yIGFuIGVsZW1lbnRcbiAgICogZWFjaCB0aW1lIHRoZSBjb21wb25lbnQgd2FudHMgdG8gaW5zcGVjdCBvciBtYW5pcHVsYXRlIGl0LlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgdGhlIGNvbXBvbmVudCB0byBkZWZpbmUgYSBTaGFkb3cgRE9NIHN1YnRyZWUuIFlvdSBjYW5cbiAgICogY3JlYXRlIHRoYXQgdHJlZSB5b3Vyc2VsZiwgb3IgbWFrZSB1c2Ugb2YgdGhlXG4gICAqIFtTaGFkb3dUZW1wbGF0ZV0oU2hhZG93VGVtcGxhdGUubWQpIG1peGluLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGlzIGluc3BpcmVkIGJ5IFBvbHltZXIncyBbYXV0b21hdGljXG4gICAqIG5vZGUgZmluZGluZ10oaHR0cHM6Ly93d3cucG9seW1lci1wcm9qZWN0Lm9yZy8xLjAvZG9jcy9kZXZndWlkZS9sb2NhbC1kb20uaHRtbCNub2RlLWZpbmRpbmcpXG4gICAqIGZlYXR1cmUuXG4gICAqL1xuICBjbGFzcyBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcyBleHRlbmRzIGJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgaWYgKHRoaXMuc2hhZG93Um9vdCkge1xuICAgICAgICAvLyBMb29rIGZvciBlbGVtZW50cyBpbiB0aGUgc2hhZG93IHN1YnRyZWUgdGhhdCBoYXZlIGlkIGF0dHJpYnV0ZXMuXG4gICAgICAgIC8vIEFuIGFsdGVybmF0aXZlbHkgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtaXhpbiB3b3VsZCBiZSB0byBqdXN0IGRlZmluZVxuICAgICAgICAvLyBhIHRoaXMuJCBnZXR0ZXIgdGhhdCBsYXppbHkgZG9lcyB0aGlzIHNlYXJjaCB0aGUgZmlyc3QgdGltZSBzb21lb25lXG4gICAgICAgIC8vIHRyaWVzIHRvIGFjY2VzcyB0aGlzLiQuIFRoYXQgbWlnaHQgaW50cm9kdWNlIHNvbWUgY29tcGxleGl0eSDigJMgaWYgdGhlXG4gICAgICAgIC8vIHRoZSB0cmVlIGNoYW5nZWQgYWZ0ZXIgaXQgd2FzIGZpcnN0IHBvcHVsYXRlZCwgdGhlIHJlc3VsdCBvZlxuICAgICAgICAvLyBzZWFyY2hpbmcgZm9yIGEgbm9kZSBtaWdodCBiZSBzb21ld2hhdCB1bnByZWRpY3RhYmxlLlxuICAgICAgICB0aGlzLiQgPSB7fTtcbiAgICAgICAgY29uc3Qgbm9kZXNXaXRoSWRzID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZF0nKTtcbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKG5vZGVzV2l0aElkcywgbm9kZSA9PiB7XG4gICAgICAgICAgY29uc3QgaWQgPSBub2RlLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgICB0aGlzLiRbaWRdID0gbm9kZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbGxlY3Rpb24gb2YgcmVmZXJlbmNlcyB0byB0aGUgZWxlbWVudHMgd2l0aCBJRHMgaW4gYSBjb21wb25lbnQnc1xuICAgICAqIFNoYWRvdyBET00gc3VidHJlZS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQG1lbWJlciAkXG4gICAgICovXG4gIH1cblxuICByZXR1cm4gU2hhZG93RWxlbWVudFJlZmVyZW5jZXM7XG59O1xuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTaGFkb3dUZW1wbGF0ZS4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIGZvciBzdGFtcGluZyBhIHRlbXBsYXRlIGludG8gYSBTaGFkb3cgRE9NIHN1YnRyZWUgdXBvbiBjb21wb25lbnRcbiAgICogaW5zdGFudGlhdGlvbi5cbiAgICpcbiAgICogVG8gdXNlIHRoaXMgbWl4aW4sIGRlZmluZSBhIGB0ZW1wbGF0ZWAgcHJvcGVydHkgYXMgYSBzdHJpbmcgb3IgSFRNTFxuICAgKiBgPHRlbXBsYXRlPmAgZWxlbWVudDpcbiAgICpcbiAgICogICAgIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIFNoYWRvd1RlbXBsYXRlKEhUTUxFbGVtZW50KSB7XG4gICAqICAgICAgIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICogICAgICAgICByZXR1cm4gYEhlbGxvLCA8ZW0+d29ybGQ8L2VtPi5gO1xuICAgKiAgICAgICB9XG4gICAqICAgICB9XG4gICAqXG4gICAqIFdoZW4geW91ciBjb21wb25lbnQgY2xhc3MgaXMgaW5zdGFudGlhdGVkLCBhIHNoYWRvdyByb290IHdpbGwgYmUgY3JlYXRlZCBvblxuICAgKiB0aGUgaW5zdGFuY2UsIGFuZCB0aGUgY29udGVudHMgb2YgdGhlIHRlbXBsYXRlIHdpbGwgYmUgY2xvbmVkIGludG8gdGhlXG4gICAqIHNoYWRvdyByb290LiBJZiB5b3VyIGNvbXBvbmVudCBkb2VzIG5vdCBkZWZpbmUgYSBgdGVtcGxhdGVgIHByb3BlcnR5LCB0aGlzXG4gICAqIG1peGluIGhhcyBubyBlZmZlY3QuXG4gICAqXG4gICAqIEZvciB0aGUgdGltZSBiZWluZywgdGhpcyBleHRlbnNpb24gcmV0YWlucyBzdXBwb3J0IGZvciBTaGFkb3cgRE9NIHYwLiBUaGF0XG4gICAqIHdpbGwgZXZlbnR1YWxseSBiZSBkZXByZWNhdGVkIGFzIGJyb3dzZXJzIChhbmQgdGhlIFNoYWRvdyBET00gcG9seWZpbGwpXG4gICAqIGltcGxlbWVudCBTaGFkb3cgRE9NIHYxLlxuICAgKi9cbiAgY2xhc3MgU2hhZG93VGVtcGxhdGUgZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qXG4gICAgICogSWYgdGhlIGNvbXBvbmVudCBkZWZpbmVzIGEgdGVtcGxhdGUsIGEgc2hhZG93IHJvb3Qgd2lsbCBiZSBjcmVhdGVkIG9uIHRoZVxuICAgICAqIGNvbXBvbmVudCBpbnN0YW5jZSwgYW5kIHRoZSB0ZW1wbGF0ZSBzdGFtcGVkIGludG8gaXQuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgbGV0IHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZTtcbiAgICAgIC8vIFRPRE86IFNhdmUgdGhlIHByb2Nlc3NlZCB0ZW1wbGF0ZSB3aXRoIHRoZSBjb21wb25lbnQncyBjbGFzcyBwcm90b3R5cGVcbiAgICAgIC8vIHNvIGl0IGRvZXNuJ3QgbmVlZCB0byBiZSBwcm9jZXNzZWQgd2l0aCBldmVyeSBpbnN0YW50aWF0aW9uLlxuICAgICAgaWYgKHRlbXBsYXRlKSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAvLyBVcGdyYWRlIHBsYWluIHN0cmluZyB0byByZWFsIHRlbXBsYXRlLlxuICAgICAgICAgIHRlbXBsYXRlID0gY3JlYXRlVGVtcGxhdGVXaXRoSW5uZXJIVE1MKHRlbXBsYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3aW5kb3cuU2hhZG93RE9NUG9seWZpbGwpIHtcbiAgICAgICAgICBzaGltVGVtcGxhdGVTdHlsZXModGVtcGxhdGUsIHRoaXMubG9jYWxOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICAgICAgY29uc3QgY2xvbmUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xuICAgICAgICByb290LmFwcGVuZENoaWxkKGNsb25lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBTaGFkb3dUZW1wbGF0ZTtcbn07XG5cblxuLy8gQ29udmVydCBhIHBsYWluIHN0cmluZyBvZiBIVE1MIGludG8gYSByZWFsIHRlbXBsYXRlIGVsZW1lbnQuXG5mdW5jdGlvbiBjcmVhdGVUZW1wbGF0ZVdpdGhJbm5lckhUTUwoaW5uZXJIVE1MKSB7XG4gIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgLy8gUkVWSUVXOiBJcyB0aGVyZSBhbiBlYXNpZXIgd2F5IHRvIGRvIHRoaXM/XG4gIC8vIFdlJ2QgbGlrZSB0byBqdXN0IHNldCBpbm5lckhUTUwgb24gdGhlIHRlbXBsYXRlIGNvbnRlbnQsIGJ1dCBzaW5jZSBpdCdzXG4gIC8vIGEgRG9jdW1lbnRGcmFnbWVudCwgdGhhdCBkb2Vzbid0IHdvcmsuXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuICB3aGlsZSAoZGl2LmNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgIHRlbXBsYXRlLmNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2LmNoaWxkTm9kZXNbMF0pO1xuICB9XG4gIHJldHVybiB0ZW1wbGF0ZTtcbn1cblxuLy8gSW52b2tlIGJhc2ljIHN0eWxlIHNoaW1taW5nIHdpdGggU2hhZG93Q1NTLlxuZnVuY3Rpb24gc2hpbVRlbXBsYXRlU3R5bGVzKHRlbXBsYXRlLCB0YWcpIHtcbiAgd2luZG93LldlYkNvbXBvbmVudHMuU2hhZG93Q1NTLnNoaW1TdHlsaW5nKHRlbXBsYXRlLmNvbnRlbnQsIHRhZyk7XG59XG4iLCJpbXBvcnQgQ29sbGVjdGl2ZSBmcm9tICcuL0NvbGxlY3RpdmUnO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggVGFyZ2V0SW5Db2xsZWN0aXZlLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggYWxsb3dzIGEgY29tcG9uZW50IHRvIHByb3ZpZGUgYWdncmVnYXRlIGJlaGF2aW9yIHdpdGggb3RoZXJcbiAgICogZWxlbWVudHMsIGUuZy4sIGZvciBrZXlib2FyZCBoYW5kbGluZy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBpbXBsaWNpdGx5IGNyZWF0ZXMgYSBjb2xsZWN0aXZlIGZvciBhIGNvbXBvbmVudCBzbyB0aGF0IGl0IGNhblxuICAgKiBwYXJ0aWNpcGF0ZSBpbiBjb2xsZWN0aXZlIGtleWJvYXJkIGhhbmRsaW5nLiBTZWUgdGhlXG4gICAqIFtDb2xsZWN0aXZlXShDb2xsZWN0aXZlLm1kKSBjbGFzcyBmb3IgZGV0YWlscy5cbiAgICpcbiAgICogWW91IGNhbiB1c2UgdGhpcyBtaXhpbiBpbiBjb25qdW5jdGlvbiB3aXRoXG4gICAqIFtDb250ZW50Rmlyc3RDaGlsZFRhcmdldF0oQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQubWQpIHRvIGF1dG9tYXRpY2FsbHkgaGF2ZVxuICAgKiB0aGUgY29tcG9uZW50J3MgY29sbGVjdGl2ZSBleHRlbmRlZCB0byBpdHMgZmlyc3QgY2hpbGQuXG4gICAqL1xuICBjbGFzcyBUYXJnZXRJbkNvbGxlY3RpdmUgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuY29sbGVjdGl2ZSA9IG5ldyBDb2xsZWN0aXZlKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMvc2V0cyB0aGUgY3VycmVudCB0YXJnZXQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIFNldCB0aGlzIHRvIHBvaW50IHRvIGFub3RoZXIgZWxlbWVudC4gVGhhdCB0YXJnZXQgZWxlbWVudCB3aWxsIGJlXG4gICAgICogaW1wbGljaXRseSBhZGRlZCB0byB0aGUgY29tcG9uZW50J3MgY29sbGVjdGl2ZS4gVGhhdCBpcywgdGhlIGNvbXBvbmVudFxuICAgICAqIGFuZCBpdHMgdGFyZ2V0IHdpbGwgc2hhcmUgcmVzcG9uc2liaWxpdHkgZm9yIGhhbmRsaW5nIGtleWJvYXJkIGV2ZW50cy5cbiAgICAgKlxuICAgICAqIFlvdSBjYW4gc2V0IHRoaXMgcHJvcGVydHkgeW91cnNlbGYsIG9yIHlvdSBjYW4gdXNlIHRoZVxuICAgICAqIENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0IG1peGluIHRvIGF1dG9tYXRpY2FsbHkgc2V0IHRoZSB0YXJnZXQgdG8gdGhlXG4gICAgICogY29tcG9uZW50J3MgZmlyc3QgY2hpbGQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgZ2V0IHRhcmdldCgpIHtcbiAgICAgIHJldHVybiBzdXBlci50YXJnZXQ7XG4gICAgfVxuICAgIHNldCB0YXJnZXQoZWxlbWVudCkge1xuICAgICAgaWYgKCd0YXJnZXQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnRhcmdldCA9IGVsZW1lbnQ7IH1cbiAgICAgIHRoaXMuY29sbGVjdGl2ZS5hc3NpbWlsYXRlKGVsZW1lbnQpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFRhcmdldEluQ29sbGVjdGl2ZTtcbn07XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3QgaXRlbXNDaGFuZ2VkTGlzdGVuZXJTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2l0ZW1zQ2hhbmdlZExpc3RlbmVyJyk7XG5jb25zdCBzZWxlY3RlZEl0ZW1DaGFuZ2VkTGlzdGVuZXJTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3NlbGVjdGVkSXRlbUNoYW5nZWRMaXN0ZW5lcicpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggVGFyZ2V0U2VsZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggYWxsb3dzIGEgY29tcG9uZW50IHRvIGRlbGVnYXRlIGl0cyBvd24gc2VsZWN0aW9uIHNlbWFudGljcyB0byBhXG4gICAqIHRhcmdldCBlbGVtZW50LlxuICAgKlxuICAgKiBUaGlzIGlzIHVzZWZ1bCB3aGVuIGRlZmluaW5nIGNvbXBvbmVudHMgdGhhdCBhY3QgYXMgb3B0aW9uYWwgZmVhdHVyZXMgZm9yIGFcbiAgICogY29tcG9uZW50IHRoYXQgYWN0cyBsaWtlIGEgbGlzdC4gU2VlIGJhc2ljLWFycm93LXNlbGVjdGlvbiBhbmRcbiAgICogYmFzaWMtcGFnZS1kb3RzIGZvciBleGFtcGxlcyBvZiBjb21wb25lbnRzIHVzZWQgYXMgb3B0aW9uYWwgZmVhdHVyZXMgZm9yXG4gICAqIGNvbXBvbmVudHMgbGlrZSBiYXNpYy1jYXJvdXNlbC4gQSB0eXBpY2FsIHVzYWdlIG1pZ2h0IGJlOlxuICAgKlxuICAgKiAgICAgPGJhc2ljLWFycm93LXNlbGVjdGlvbj5cbiAgICogICAgICAgPGJhc2ljLWNhcm91c2VsPlxuICAgKiAgICAgICAgIC4uLiBpbWFnZXMsIGV0Yy4gLi4uXG4gICAqICAgICAgIDwvYmFzaWMtY2Fyb3VzZWw+XG4gICAqICAgICA8L2Jhc2ljLWFycm93LXNlbGVjdGlvbj5cbiAgICpcbiAgICogQmVjYXVzZSBiYXNpYy1hcnJvdy1zZWxlY3Rpb24gdXNlcyB0aGVcbiAgICogW1RhcmdldFNlbGVjdGlvbl0oVGFyZ2V0U2VsZWN0aW9uLm1kKSBtaXhpbiwgaXQgZXhwb3NlcyBtZW1iZXJzIHRvIGFjY2VzcyBhXG4gICAqIHNlbGVjdGlvbjogYHNlbGVjdE5leHRgLCBgc2VsZWN0UHJldmlvdXNgLCBgc2VsZWN0ZWRJbmRleGAsIGV0Yy4gVGhlc2UgYXJlXG4gICAqIGFsbCBkZWxlZ2F0ZWQgdG8gdGhlIGNoaWxkIGNvbXBvbmVudCAoaGVyZSwgYSBiYXNpYy1jYXJvdXNlbCkuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIGB0YXJnZXRgIHByb3BlcnR5IHRvIGJlIHNldCB0byB0aGUgZWxlbWVudCBhY3R1YWxseVxuICAgKiBtYW5hZ2luZyB0aGUgc2VsZWN0aW9uLiBZb3UgY2FuIHNldCB0aGF0IHByb3BlcnR5IHlvdXJzZWxmLCBvciB5b3UgY2FuIHVzZVxuICAgKiB0aGUgW0NvbnRlbnRGaXJzdENoaWxkVGFyZ2V0XShDb250ZW50Rmlyc3RDaGlsZFRhcmdldC5tZCkgbWl4aW4gdG9cbiAgICogaW1wbGljaXRseSB0YWtlIHRoZSBjb21wb25lbnQncyBmaXJzdCBjaGlsZCBhcyB0aGUgdGFyZ2V0LiBUaGlzIGlzIHdoYXRcbiAgICogYmFzaWMtYXJyb3ctc2VsZWN0aW9uIChhYm92ZSkgZG9lcy5cbiAgICovXG4gIGNsYXNzIFRhcmdldFNlbGVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgc2VsZWN0aW9uIGNhbiBiZSBtb3ZlZCB0byB0aGUgbmV4dCBpdGVtLCBmYWxzZSBpZiBub3QgKHRoZVxuICAgICAqIHNlbGVjdGVkIGl0ZW0gaXMgdGhlIGxhc3QgaXRlbSBpbiB0aGUgbGlzdCkuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBnZXQgY2FuU2VsZWN0TmV4dCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnRhcmdldCAmJiB0aGlzLnRhcmdldC5jYW5TZWxlY3ROZXh0O1xuICAgIH1cbiAgICBzZXQgY2FuU2VsZWN0TmV4dChjYW5TZWxlY3ROZXh0KSB7XG4gICAgICBpZiAoJ2NhblNlbGVjdE5leHQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmNhblNlbGVjdE5leHQgPSBjYW5TZWxlY3ROZXh0OyB9XG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgdGFyZ2V0LmNhblNlbGVjdE5leHQgPSBjYW5TZWxlY3ROZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIHNlbGVjdGlvbiBjYW4gYmUgbW92ZWQgdG8gdGhlIHByZXZpb3VzIGl0ZW0sIGZhbHNlIGlmIG5vdFxuICAgICAqICh0aGUgc2VsZWN0ZWQgaXRlbSBpcyB0aGUgZmlyc3Qgb25lIGluIHRoZSBsaXN0KS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIGdldCBjYW5TZWxlY3RQcmV2aW91cygpIHtcbiAgICAgIHJldHVybiB0aGlzLnRhcmdldCAmJiB0aGlzLnRhcmdldC5jYW5TZWxlY3RQcmV2aW91cztcbiAgICB9XG4gICAgc2V0IGNhblNlbGVjdFByZXZpb3VzKGNhblNlbGVjdFByZXZpb3VzKSB7XG4gICAgICBpZiAoJ2NhblNlbGVjdFByZXZpb3VzJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5jYW5TZWxlY3RQcmV2aW91cyA9IGNhblNlbGVjdFByZXZpb3VzOyB9XG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgdGFyZ2V0LmNhblNlbGVjdFByZXZpb3VzID0gY2FuU2VsZWN0UHJldmlvdXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgc2V0IG9mIGl0ZW1zIGluIHRoZSBsaXN0LlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50W119XG4gICAgICovXG4gICAgZ2V0IGl0ZW1zKCkge1xuICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLnRhcmdldCAmJiB0aGlzLnRhcmdldC5pdGVtcztcbiAgICAgIHJldHVybiBpdGVtcyB8fCBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gdGhlIHVuZGVybHlpbmcgY29udGVudHMgY2hhbmdlLiBJdCBpcyBhbHNvXG4gICAgICogaW52b2tlZCBvbiBjb21wb25lbnQgaW5pdGlhbGl6YXRpb24g4oCTIHNpbmNlIHRoZSBpdGVtcyBoYXZlIFwiY2hhbmdlZFwiIGZyb21cbiAgICAgKiBiZWluZyBub3RoaW5nLlxuICAgICAqL1xuICAgIGl0ZW1zQ2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5pdGVtc0NoYW5nZWQpIHsgc3VwZXIuaXRlbXNDaGFuZ2VkKCk7IH1cbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2l0ZW1zLWNoYW5nZWQnKSk7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkRnJhY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50YXJnZXQgJiYgdGhpcy50YXJnZXQuc2VsZWN0ZWRGcmFjdGlvbjtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkRnJhY3Rpb24oZnJhY3Rpb24pIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRGcmFjdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRGcmFjdGlvbiA9IGZyYWN0aW9uOyB9XG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LnNlbGVjdGVkRnJhY3Rpb24gIT09IGZyYWN0aW9uKSB7XG4gICAgICAgIHRhcmdldC5zZWxlY3RlZEZyYWN0aW9uID0gZnJhY3Rpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5kZXggb2YgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtLCBvciAtMSBpZiB0aGVyZSBpcyBubyBzZWxlY3Rpb24uXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldCBzZWxlY3RlZEluZGV4KCkge1xuICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0ICYmIHRoaXMudGFyZ2V0LnNlbGVjdGVkSW5kZXg7XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEluZGV4KGluZGV4KSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkSW5kZXgnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSW5kZXggPSBpbmRleDsgfVxuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG4gICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtLCBvciBudWxsIGlmIHRoZXJlIGlzIG5vIHNlbGVjdGlvbi5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0ICYmIHRoaXMudGFyZ2V0LnNlbGVjdGVkSXRlbTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkSXRlbShpdGVtKSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkSXRlbScgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtID0gaXRlbTsgfVxuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG4gICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRoaXMgbWV0aG9kIGV4aXN0cyBzbyB3cmFwcGluZyBjb21wb25lbnRzIGNhbiBoYW5kbGUgYSBjaGFuZ2UgaW4gdGhlXG4gICAgLy8gc2VsZWN0aW9uIHdpdGhvdXQgcG90ZW50aWFsbHkgcmUtaW52b2tpbmcgdGhlIHNlbGVjdGVkSXRlbSBzZXR0ZXIuIFRoaXNcbiAgICAvLyBpcyBraW5kIG9mIHVuc2F0aXNmeWluZywgdGhvdWdoLiBJdCdkIGJlIG5pY2VyIHRvIGxldCBzdWNoIGNvbXBvbmVudHNcbiAgICAvLyBqdXN0IGltcGxlbWVudCB0aGUgZ2V0dGVyL3NldHRlciBmb3Igc2VsZWN0ZWRJdGVtLCBidXQgaGF2ZSBhIHdheSB0b1xuICAgIC8vIGtub3cgd2hldGhlciB0aGV5IG5lZWQgdG8gYWxzbyBpbnZva2UgdGhlIHByb3BlcnR5IGdldHRlci9zZXR0ZXIgZm9yIHRoZVxuICAgIC8vIHRhcmdldCBjb21wb25lbnQuXG4gICAgc2VsZWN0ZWRJdGVtQ2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RlZEl0ZW1DaGFuZ2VkKSB7IHN1cGVyLnNlbGVjdGVkSXRlbUNoYW5nZWQoKTsgfVxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc2VsZWN0ZWQtaXRlbS1jaGFuZ2VkJykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCB0aGUgZmlyc3QgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBzZWxlY3RGaXJzdCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RGaXJzdCkgeyBzdXBlci5zZWxlY3RGaXJzdCgpOyB9XG4gICAgICByZXR1cm4gdGhpcy50YXJnZXQgJiYgdGhpcy50YXJnZXQuc2VsZWN0Rmlyc3QoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBsaXN0IHNob3VsZCBhbHdheXMgaGF2ZSBhIHNlbGVjdGlvbiAoaWYgaXQgaGFzIGl0ZW1zKS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGlvblJlcXVpcmVkKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0ICYmIHRoaXMudGFyZ2V0LnNlbGVjdGlvblJlcXVpcmVkO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0aW9uUmVxdWlyZWQoc2VsZWN0aW9uUmVxdWlyZWQpIHtcbiAgICAgIGlmICgnc2VsZWN0aW9uUmVxdWlyZWQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGlvblJlcXVpcmVkID0gc2VsZWN0aW9uUmVxdWlyZWQ7IH1cbiAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMudGFyZ2V0O1xuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICB0YXJnZXQuc2VsZWN0aW9uUmVxdWlyZWQgPSBzZWxlY3Rpb25SZXF1aXJlZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHNlbGVjdGlvbiBuYXZpZ2F0aW9ucyB3cmFwIGZyb20gbGFzdCB0byBmaXJzdCwgYW5kIHZpY2UgdmVyc2EuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAZGVmYXVsdCB7ZmFsc2V9XG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGlvbldyYXBzKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0ICYmIHRoaXMudGFyZ2V0LnNlbGVjdGlvbldyYXBzO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0aW9uV3JhcHModmFsdWUpIHtcbiAgICAgIGlmICgnc2VsZWN0aW9uV3JhcHMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGlvbldyYXBzID0gdmFsdWU7IH1cbiAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMudGFyZ2V0O1xuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICB0YXJnZXQuc2VsZWN0aW9uV3JhcHMgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgdGhlIGxhc3QgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBzZWxlY3RMYXN0KCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdExhc3QpIHsgc3VwZXIuc2VsZWN0TGFzdCgpOyB9XG4gICAgICByZXR1cm4gdGhpcy50YXJnZXQgJiYgdGhpcy50YXJnZXQuc2VsZWN0TGFzdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCB0aGUgbmV4dCBpdGVtIGluIHRoZSBsaXN0LlxuICAgICAqL1xuICAgIHNlbGVjdE5leHQoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0TmV4dCkgeyBzdXBlci5zZWxlY3ROZXh0KCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnRhcmdldCAmJiB0aGlzLnRhcmdldC5zZWxlY3ROZXh0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBwcmV2aW91cyBpdGVtIGluIHRoZSBsaXN0LlxuICAgICAqXG4gICAgICogSWYgdGhlIGxpc3QgaGFzIG5vIHNlbGVjdGlvbiwgdGhlIGxhc3QgaXRlbSB3aWxsIGJlIHNlbGVjdGVkLlxuICAgICAqL1xuICAgIHNlbGVjdFByZXZpb3VzKCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdFByZXZpb3VzKSB7IHN1cGVyLnNlbGVjdFByZXZpb3VzKCk7IH1cbiAgICAgIHJldHVybiB0aGlzLnRhcmdldCAmJiB0aGlzLnRhcmdldC5zZWxlY3RQcmV2aW91cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMvc2V0cyB0aGUgdGFyZ2V0IGVsZW1lbnQgdG8gd2hpY2ggdGhpcyBjb21wb25lbnQgd2lsbCBkZWxlZ2F0ZVxuICAgICAqIHNlbGVjdGlvbiBhY3Rpb25zLlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGdldCB0YXJnZXQoKSB7XG4gICAgICByZXR1cm4gc3VwZXIudGFyZ2V0O1xuICAgIH1cbiAgICBzZXQgdGFyZ2V0KGVsZW1lbnQpIHtcbiAgICAgIGlmICgndGFyZ2V0JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci50YXJnZXQgPSBlbGVtZW50OyB9XG4gICAgICBpZiAodGhpc1tpdGVtc0NoYW5nZWRMaXN0ZW5lclN5bWJvbF0pIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdpdGVtcy1jaGFuZ2VkJywgdGhpc1tpdGVtc0NoYW5nZWRMaXN0ZW5lclN5bWJvbF0pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXNbc2VsZWN0ZWRJdGVtQ2hhbmdlZExpc3RlbmVyU3ltYm9sXSkge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3NlbGVjdGVkLWl0ZW0tY2hhbmdlZCcsIHRoaXNbc2VsZWN0ZWRJdGVtQ2hhbmdlZExpc3RlbmVyU3ltYm9sXSk7XG4gICAgICB9XG4gICAgICB0aGlzW2l0ZW1zQ2hhbmdlZExpc3RlbmVyU3ltYm9sXSA9IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaXRlbXMtY2hhbmdlZCcsIGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy5pdGVtc0NoYW5nZWQoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpc1tzZWxlY3RlZEl0ZW1DaGFuZ2VkTGlzdGVuZXJTeW1ib2xdID0gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzZWxlY3RlZC1pdGVtLWNoYW5nZWQnLCBldmVudCA9PiB7XG4gICAgICAgIC8vIFJFVklFVzogQ29tcG9uZW50cyBhcHBseWluZyBUYXJnZXRTZWxlY3Rpb24gYm90aCBsaXN0ZW4gdG8gdGhpc1xuICAgICAgICAvLyBldmVudCAob24gdGhlIHRhcmdldCksIGFuZCByYWlzZSBpdCB0aGVtc2VsdmVzLiBJbiB0aGVvcnksIHRoZXkncmVcbiAgICAgICAgLy8gZXhwZWN0ZWQgdG8gKm5vdCogY2F0Y2ggdGhlIGV2ZW50cyB0aGV5IHJhaXNlIHRoZW1zZWx2ZXMsIGJ1dCBDaHJvbWVcbiAgICAgICAgLy8gKGF0IGxlYXN0KSBhcHBlYXJzIHRvIHZpb2xhdGUgdGhhdCBleHBlY3RhdGlvbi4gVGhhdCBpcywgaXQnc1xuICAgICAgICAvLyBwb3NzaWJsZSB0byBoYXZlIGV2ZW50LnRhcmdldCA9PT0gdGhpcy4gTW9yZSBjb25mdXNpbmdseSwgdGhlIGd1YXJkXG4gICAgICAgIC8vIGJlbG93LCB3aGljaCBpcyBpbnRlbmRlZCB0byBhdm9pZCByZWN1cnNpdmUgY2FsbHMgdG9cbiAgICAgICAgLy8gc2VsZWN0ZWRJdGVtQ2hhbmdlZCwgZG9lc24ndCB3b3JrIGFzIGV4cGVjdGVkLiBFdmVuIGlmIHRoZSBkZWJ1Z2dlclxuICAgICAgICAvLyBzaG93cyBldmVudC50YXJnZXQgPT09IHRoaXMsIHRoZSBjb250ZW50cyBvZiB0aGUgXCJpZlwiIHN0YXRlbWVudCB3aWxsXG4gICAgICAgIC8vIGJlIGV4ZWN1dGVkLlxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSB0aGlzKSB7XG4gICAgICAgICAgLy8gTGV0IHRoZSBjb21wb25lbnQga25vdyB0aGUgdGFyZ2V0J3Mgc2VsZWN0aW9uIGNoYW5nZWQsIGJ1dCB3aXRob3V0XG4gICAgICAgICAgLy8gcmUtaW52b2tpbmcgdGhlIHNlbGVjdEluZGV4L3NlbGVjdGVkSXRlbSBzZXR0ZXIuXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1DaGFuZ2VkKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gRm9yY2UgaW5pdGlhbCByZWZyZXNoLlxuICAgICAgdGhpcy5pdGVtc0NoYW5nZWQoKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBUYXJnZXRTZWxlY3Rpb247XG59O1xuIiwiLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIGEgc3ltYm9sIHRoYXQgY2FuIGJlIHVzZWQgZm9yIGFzc29jaWF0aW5nIHByaXZhdGVcbiAqIGRhdGEgd2l0aCBhbiBlbGVtZW50LlxuICpcbiAqIE1peGlucyBhbmQgY29tcG9uZW50IGNsYXNzZXMgb2Z0ZW4gd2FudCB0byBhc3NvY2lhdGUgcHJpdmF0ZSBkYXRhIHdpdGggYW5cbiAqIGVsZW1lbnQgaW5zdGFuY2UsIGJ1dCBKYXZhU2NyaXB0IGRvZXMgbm90IGhhdmUgZGlyZWN0IHN1cHBvcnQgZm9yIHRydWVcbiAqIHByaXZhdGUgcHJvcGVydGllcy4gT25lIGFwcHJvYWNoIGlzIHRvIHVzZSB0aGVcbiAqIFtTeW1ib2xdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1N5bWJvbClcbiAqIGRhdGEgdHlwZSB0byBzZXQgYW5kIHJldHJpZXZlIGRhdGEgb24gYW4gZWxlbWVudC5cbiAqXG4gKiBVbmZvcnR1bmF0ZWx5LCB0aGUgU3ltYm9sIHR5cGUgaXMgbm90IGF2YWlsYWJsZSBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMS4gVGhlXG4gKiBgY3JlYXRlU3ltYm9sYCBoZWxwZXIgZnVuY3Rpb24gZXhpc3RzIGFzIGEgd29ya2Fyb3VuZCBmb3IgSUUgMTEuIFJhdGhlciB0aGFuXG4gKiByZXR1cm5pbmcgYSB0cnVlIFN5bWJvbCwgaXQgc2ltcGx5IHJldHVybnMgYW4gdW5kZXJzY29yZS1wcmVmaXhlZCBzdHJpbmcuXG4gKlxuICogVXNhZ2U6XG4gKlxuICogICAgIGNvbnN0IGZvb1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnZm9vJyk7XG4gKlxuICogICAgIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAqICAgICAgIGdldCBmb28oKSB7XG4gKiAgICAgICAgIHJldHVybiB0aGlzW2Zvb1N5bWJvbF07XG4gKiAgICAgICB9XG4gKiAgICAgICBzZXQgZm9vKHZhbHVlKSB7XG4gKiAgICAgICAgIHRoaXNbZm9vU3ltYm9sXSA9IHZhbHVlO1xuICogICAgICAgfVxuICogICAgIH1cbiAqXG4gKiBJbiBJRSAxMSwgdGhpcyBzYW1wbGUgd2lsbCBcImhpZGVcIiBkYXRhIGJlaGluZCBhbiBpbnN0YW5jZSBwcm9wZXJ0eSB0aGlzLl9mb28uXG4gKiBUaGUgdXNlIG9mIHRoZSB1bmRlcnNjb3JlIGlzIG1lYW50IHRvIHJlZHVjZSAobm90IGVsaW1pbmF0ZSkgdGhlIHBvdGVudGlhbFxuICogZm9yIG5hbWUgY29uZmxpY3RzLCBhbmQgZGlzY291cmFnZSAobm90IHByZXZlbnQpIGV4dGVybmFsIGFjY2VzcyB0byB0aGlzXG4gKiBkYXRhLiBJbiBtb2Rlcm4gYnJvd3NlcnMsIHRoZSBhYm92ZSBjb2RlIHdpbGwgZWxpbWluYXRlIHRoZSBwb3RlbnRpYWwgb2ZcbiAqIG5hbWluZyBjb25mbGljdHMsIGFuZCBiZXR0ZXIgaGlkZSB0aGUgZGF0YSBiZWhpbmQgYSByZWFsIFN5bWJvbC5cbiAqXG4gKiBAZnVuY3Rpb24gY3JlYXRlU3ltYm9sXG4gKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb24gLSBBIHN0cmluZyB0byBpZGVudGlmeSB0aGUgc3ltYm9sIHdoZW4gZGVidWdnaW5nXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVN5bWJvbChkZXNjcmlwdGlvbikge1xuICByZXR1cm4gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgU3ltYm9sKGRlc2NyaXB0aW9uKSA6XG4gICAgYF8ke2Rlc2NyaXB0aW9ufWA7XG59XG4iLCIvKlxuICogTWljcm90YXNrIGhlbHBlciBmb3IgSUUgMTEuXG4gKlxuICogRXhlY3V0aW5nIGEgZnVuY3Rpb24gYXMgYSBtaWNyb3Rhc2sgaXMgdHJpdmlhbCBpbiBicm93c2VycyB0aGF0IHN1cHBvcnRcbiAqIHByb21pc2VzLCB3aG9zZSB0aGVuKCkgY2xhdXNlcyB1c2UgbWljcm90YXNrIHRpbWluZy4gSUUgMTEgZG9lc24ndCBzdXBwb3J0XG4gKiBwcm9taXNlcywgYnV0IGRvZXMgc3VwcG9ydCBNdXRhdGlvbk9ic2VydmVycywgd2hpY2ggYXJlIGFsc28gZXhlY3V0ZWQgYXNcbiAqIG1pY3JvdGFza3MuIFNvIHRoaXMgaGVscGVyIHVzZXMgYW4gTXV0YXRpb25PYnNlcnZlciB0byBhY2hpZXZlIG1pY3JvdGFza1xuICogdGltaW5nLlxuICpcbiAqIFNlZSBodHRwczovL2pha2VhcmNoaWJhbGQuY29tLzIwMTUvdGFza3MtbWljcm90YXNrcy1xdWV1ZXMtYW5kLXNjaGVkdWxlcy9cbiAqXG4gKiBJbnNwaXJlZCBieSBQb2x5bWVyJ3MgYXN5bmMoKSBmdW5jdGlvbi5cbiAqL1xuXG5cbi8vIFRoZSBxdWV1ZSBvZiBwZW5kaW5nIGNhbGxiYWNrcyB0byBiZSBleGVjdXRlZCBhcyBtaWNyb3Rhc2tzLlxuY29uc3QgY2FsbGJhY2tzID0gW107XG5cbi8vIENyZWF0ZSBhbiBlbGVtZW50IHRoYXQgd2Ugd2lsbCBtb2RpZnkgdG8gZm9yY2Ugb2JzZXJ2YWJsZSBtdXRhdGlvbnMuXG5jb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuXG4vLyBBIG1vbm90b25pY2FsbHktaW5jcmVhc2luZyB2YWx1ZS5cbmxldCBjb3VudGVyID0gMDtcblxuXG4vKipcbiAqIEFkZCBhIGNhbGxiYWNrIHRvIHRoZSBtaWNyb3Rhc2sgcXVldWUuXG4gKlxuICogVGhpcyB1c2VzIGEgTXV0YXRpb25PYnNlcnZlciBzbyB0aGF0IGl0IHdvcmtzIG9uIElFIDExLlxuICpcbiAqIE5PVEU6IElFIDExIG1heSBhY3R1YWxseSB1c2UgdGltZW91dCB0aW1pbmcgd2l0aCBNdXRhdGlvbk9ic2VydmVycy4gVGhpc1xuICogbmVlZHMgbW9yZSBpbnZlc3RpZ2F0aW9uLlxuICpcbiAqIEBmdW5jdGlvbiBtaWNyb3Rhc2tcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pY3JvdGFzayhjYWxsYmFjaykge1xuICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gIC8vIEZvcmNlIGEgbXV0YXRpb24uXG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSArK2NvdW50ZXI7XG59XG5cblxuLy8gRXhlY3V0ZSBhbnkgcGVuZGluZyBjYWxsYmFja3MuXG5mdW5jdGlvbiBleGVjdXRlQ2FsbGJhY2tzKCkge1xuICB3aGlsZSAoY2FsbGJhY2tzLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBjYWxsYmFjayA9IGNhbGxiYWNrcy5zaGlmdCgpO1xuICAgIGNhbGxiYWNrKCk7XG4gIH1cbn1cblxuXG4vLyBDcmVhdGUgdGhlIG9ic2VydmVyLlxuY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihleGVjdXRlQ2FsbGJhY2tzKTtcbm9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwge1xuICBjaGFyYWN0ZXJEYXRhOiB0cnVlXG59KTtcbiIsIi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciByZW5kZXJpbmcgYW4gYXJyYXkgb2YgaXRlbXMgYXMgZWxlbWVudHMuXG4gKlxuICogVGhpcyBpcyBub3QgYSBtaXhpbiwgYnV0IGEgZnVuY3Rpb24gY29tcG9uZW50cyBjYW4gdXNlIGlmIHRoZXkgbmVlZCB0b1xuICogZ2VuZXJhdGUgYSBzZXQgb2YgZWxlbWVudHMgZm9yIHRoZSBpdGVtcyBpbiBhbiBhcnJheS5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHdpbGwgcmV1c2UgZXhpc3RpbmcgZWxlbWVudHMgaWYgcG9zc2libGUuIEUuZy4sIGlmIGl0IGlzIGNhbGxlZFxuICogdG8gcmVuZGVyIGFuIGFycmF5IG9mIDQgaXRlbXMsIGFuZCBsYXRlciBjYWxsZWQgdG8gcmVuZGVyIGFuIGFycmF5IG9mIDVcbiAqIGl0ZW1zLCBpdCBjYW4gcmV1c2UgdGhlIGV4aXN0aW5nIDQgaXRlbXMsIGNyZWF0aW5nIGp1c3Qgb25lIG5ldyBlbGVtZW50LlxuICogTm90ZSwgaG93ZXZlciwgdGhhdCB0aGlzIHJlLXJlbmRlcmluZyBpcyBub3QgYXV0b21hdGljLiBJZiwgYWZ0ZXIgY2FsbGluZ1xuICogdGhpcyBmdW5jdGlvbiwgeW91IG1hbmlwdWxhdGUgdGhlIGFycmF5IHlvdSB1c2VkLCB5b3UgbXVzdCBzdGlsbCBjYWxsIHRoaXNcbiAqIGZ1bmN0aW9uIGFnYWluIHRvIHJlLXJlbmRlciB0aGUgYXJyYXkuXG4gKlxuICogVGhlIGByZW5kZXJJdGVtYCBwYXJhbWV0ZXIgdGFrZXMgYSBmdW5jdGlvbiBvZiB0d28gYXJndW1lbnRzOiBhbiBpdGVtIHRvXG4gKiB0byByZW5kZXIsIGFuZCBhbiBleGlzdGluZyBlbGVtZW50IChpZiBvbmUgZXhpc3RzKSB3aGljaCBjYW4gYmUgcmVwdXJwb3NlZCB0b1xuICogcmVuZGVyIHRoYXQgaXRlbS4gSWYgdGhlIGxhdHRlciBhcmd1bWVudCBpcyBudWxsLCB0aGUgYHJlbmRlckl0ZW0oKWAgZnVuY3Rpb25cbiAqIHNob3VsZCBjcmVhdGUgYSBuZXcgZWxlbWVudCBhbmQgcmV0dXJuIGl0LiBUaGUgZnVuY3Rpb24gc2hvdWxkIGRvIHRoZSBzYW1lXG4gKiBpZiB0aGUgc3VwcGxpZWQgZXhpc3RpbmcgZWxlbWVudCBpcyBub3Qgc3VpdGFibGUgZm9yIHJlbmRlcmluZyB0aGUgZ2l2ZW5cbiAqIGl0ZW07IHRoZSByZXR1cm5lZCBlbGVtZW50IHdpbGwgYmUgdXNlZCB0byByZXBsYWNlIHRoZSBleGlzdGluZyBvbmUuIElmIHRoZVxuICogZXhpc3RpbmcgZWxlbWVudCAqaXMqIHN1aXRhYmxlLCB0aGUgZnVuY3Rpb24gY2FuIHNpbXBseSB1cGRhdGUgaXQgYW5kIHJldHVyblxuICogaXQgYXMgaXMuXG4gKlxuICogRXhhbXBsZTogVGhlIGZvbGxvd2luZyB3aWxsIHJlbmRlciBhbiBhcnJheSBvZiBzdHJpbmdzIGluIGRpdnMgYXMgY2hpbGRyZW5cbiAqIG9mIHRoZSBgY29udGFpbmVyYCBlbGVtZW50OlxuICpcbiAqICAgICBsZXQgc3RyaW5ncyA9IFsnYScsICdiJywgJ2MnLCAuLi5dO1xuICogICAgIGxldCBjb250YWluZXIgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoLi4uKTtcbiAqICAgICByZW5kZXJBcnJheUFzRWxlbWVudHMoc3RyaW5ncywgY29udGFpbmVyLCAoc3RyaW5nLCBlbGVtZW50KSA9PiB7XG4gKiAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAqICAgICAgICAgLy8gTm8gZWxlbWVudCBleGlzdHMgeWV0LCBzbyBjcmVhdGUgYSBuZXcgb25lLlxuICogICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gKiAgICAgICB9XG4gKiAgICAgICAvLyBTZXQvdXBkYXRlIHRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIGVsZW1lbnQuXG4gKiAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gc3RyaW5nO1xuICogICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gKiAgICAgfSk7XG4gKlxuICogQHBhcmFtIHtBcnJheX0gaXRlbXMgLSB0aGUgaXRlbXMgdG8gcmVuZGVyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXIgLSB0aGUgcGFyZW50IHRoYXQgd2lsbCBob2xkIHRoZSBlbGVtZW50c1xuICogQHBhcmFtIHtmdW5jdGlvbn0gcmVuZGVySXRlbSAtIHJldHVybnMgYSBuZXcgZWxlbWVudCBmb3IgYW4gaXRlbSwgb3JcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXB1cnBvc2VzIGFuIGV4aXN0aW5nIGVsZW1lbnQgZm9yIGFuIGl0ZW1cbiAqL1xuZnVuY3Rpb24gcmVuZGVyQXJyYXlBc0VsZW1lbnRzKGl0ZW1zLCBjb250YWluZXIsIHJlbmRlckl0ZW0pIHtcbiAgLy8gQ3JlYXRlIGEgbmV3IHNldCBvZiBlbGVtZW50cyBmb3IgdGhlIGN1cnJlbnQgaXRlbXMuXG4gIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgY29uc3Qgb2xkRWxlbWVudCA9IGNvbnRhaW5lci5jaGlsZE5vZGVzW2luZGV4XTtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gcmVuZGVySXRlbShpdGVtLCBvbGRFbGVtZW50KTtcbiAgICBpZiAobmV3RWxlbWVudCkge1xuICAgICAgaWYgKCFvbGRFbGVtZW50KSB7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcbiAgICAgIH0gZWxzZSBpZiAobmV3RWxlbWVudCAhPT0gb2xkRWxlbWVudCkge1xuICAgICAgICBjb250YWluZXIucmVwbGFjZUNoaWxkKG5ld0VsZW1lbnQsIG9sZEVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gSWYgdGhlIGFycmF5IHNocmFuaywgcmVtb3ZlIHRoZSBleHRyYSBlbGVtZW50cyB3aGljaCBhcmUgbm8gbG9uZ2VyIG5lZWRlZC5cbiAgd2hpbGUgKGNvbnRhaW5lci5jaGlsZE5vZGVzLmxlbmd0aCA+IGl0ZW1zLmxlbmd0aCkge1xuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIuY2hpbGROb2Rlc1tpdGVtcy5sZW5ndGhdKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJBcnJheUFzRWxlbWVudHM7XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcbmltcG9ydCB0b2dnbGVDbGFzcyBmcm9tICcuL3RvZ2dsZUNsYXNzJztcblxuXG4vLyBTeW1ib2xzIGZvciBwcml2YXRlIGRhdGEgbWVtYmVycyBvbiBhbiBlbGVtZW50LlxuY29uc3Qgc2FmZVRvU2V0QXR0cmlidXRlc1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc2FmZVRvU2V0QXR0cmlidXRlcycpO1xuY29uc3QgcGVuZGluZ0F0dHJpYnV0ZXNTeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3BlbmRpbmdBdHRyaWJ1dGVzJyk7XG5jb25zdCBwZW5kaW5nQ2xhc3Nlc1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgncGVuZGluZ0NsYXNzZXMnKTtcblxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbnMgZm9yIHVwZGF0aW5nIGF0dHJpYnV0ZXMsIGluY2x1ZGluZyB0aGUgYGNsYXNzYCBhdHRyaWJ1dGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAvKipcbiAgICogUGVyZm9ybSBhbnkgcGVuZGluZyB1cGRhdGVzIHRvIGF0dHJpYnV0ZXMgYW5kIGNsYXNzZXMuXG4gICAqXG4gICAqIFRoaXMgd3JpdGVzIGFueSBgc2V0QXR0cmlidXRlYCBvciBgdG9nZ2xlQ2xhc3NgIHZhbHVlcyB0aGF0IHdlcmUgcGVyZm9ybWVkXG4gICAqIGJlZm9yZSBhbiBlbGVtZW50IHdhcyBhdHRhY2hlZCB0byB0aGUgZG9jdW1lbnQgZm9yIHRoZSBmaXJzdCB0aW1lLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkIGJ5IG1peGlucy9jb21wb25lbnRzIGluIHRoZWlyXG4gICAqIGBjb25uZWN0ZWRDYWxsYmFja2AuIElmIG11bGl0cGxlIG1peGlucy9jb21wb25lbnRzIGludm9rZSB0aGlzIGR1cmluZyB0aGVcbiAgICogc2FtZSBgY29ubmVjdGVkQ2FsbGJhY2tgLCBvbmx5IHRoZSBmaXJzdCBjYWxsIHdpbGwgaGF2ZSBhbnkgZWZmZWN0LiBUaGVcbiAgICogc3Vic2VxdWVudCBjYWxscyB3aWxsIGJlIGhhcm1sZXNzLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgYmVpbmcgYWRkZWQgdG8gdGhlIGRvY3VtZW50LlxuICAgKi9cbiAgY29ubmVjdGVkKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50W3NhZmVUb1NldEF0dHJpYnV0ZXNTeW1ib2xdID0gdHJ1ZTtcblxuICAgIC8vIFNldCBhbnkgcGVuZGluZyBhdHRyaWJ1dGVzLlxuICAgIGlmIChlbGVtZW50W3BlbmRpbmdBdHRyaWJ1dGVzU3ltYm9sXSkge1xuICAgICAgZm9yIChsZXQgYXR0cmlidXRlIGluIGVsZW1lbnRbcGVuZGluZ0F0dHJpYnV0ZXNTeW1ib2xdKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudFtwZW5kaW5nQXR0cmlidXRlc1N5bWJvbF1bYXR0cmlidXRlXTtcbiAgICAgICAgc2V0QXR0cmlidXRlVG9FbGVtZW50KGVsZW1lbnQsIGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgICAgfVxuICAgICAgZWxlbWVudFtwZW5kaW5nQXR0cmlidXRlc1N5bWJvbF0gPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNldCBhbnkgcGVuZGluZyBjbGFzc2VzLlxuICAgIGlmIChlbGVtZW50W3BlbmRpbmdDbGFzc2VzU3ltYm9sXSkge1xuICAgICAgZm9yIChsZXQgY2xhc3NOYW1lIGluIGVsZW1lbnRbcGVuZGluZ0NsYXNzZXNTeW1ib2xdKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudFtwZW5kaW5nQ2xhc3Nlc1N5bWJvbF1bY2xhc3NOYW1lXTtcbiAgICAgICAgdG9nZ2xlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgICBlbGVtZW50W3BlbmRpbmdDbGFzc2VzU3ltYm9sXSA9IG51bGw7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBTZXQvdW5zZXQgdGhlIGF0dHJpYnV0ZSB3aXRoIHRoZSBpbmRpY2F0ZWQgbmFtZS5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgZXhpc3RzIHByaW1hcmlseSB0byBoYW5kbGUgdGhlIGNhc2Ugd2hlcmUgYW4gZWxlbWVudCB3YW50cyB0b1xuICAgKiBzZXQgYSBkZWZhdWx0IHByb3BlcnR5IHZhbHVlIHRoYXQgc2hvdWxkIGJlIHJlZmxlY3RlZCBhcyBhbiBhdHRyaWJ1dGUuIEFuXG4gICAqIGltcG9ydGFudCBsaW1pdGF0aW9uIG9mIGN1c3RvbSBlbGVtZW50IGNvbnN0dXJjdG9ycyBpcyB0aGF0IHRoZXkgY2Fubm90XG4gICAqIHNldCBhdHRyaWJ1dGVzLiBBIGNhbGwgdG8gYHNldEF0dHJpYnV0ZWAgZHVyaW5nIHRoZSBjb25zdHJ1Y3RvciB3aWxsXG4gICAqIGJlIGRlZmVycmVkIHVudGlsIHRoZSBlbGVtZW50IGlzIGNvbm5lY3RlZCB0byB0aGUgZG9jdW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGUgLSBUaGUgbmFtZSBvZiB0aGUgKmF0dHJpYnV0ZSogKG5vdCBwcm9wZXJ0eSkgdG8gc2V0LlxuICAgKiBAcGFyYW0ge29iamVjdH0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gc2V0LiBJZiBudWxsLCB0aGUgYXR0cmlidXRlIHdpbGwgYmUgcmVtb3ZlZC5cbiAgICovXG4gIHNldEF0dHJpYnV0ZShlbGVtZW50LCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgaWYgKGVsZW1lbnRbc2FmZVRvU2V0QXR0cmlidXRlc1N5bWJvbF0pIHtcbiAgICAgIC8vIFNhZmUgdG8gc2V0IGF0dHJpYnV0ZXMgaW1tZWRpYXRlbHkuXG4gICAgICBzZXRBdHRyaWJ1dGVUb0VsZW1lbnQoZWxlbWVudCwgYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIERlZmVyIHNldHRpbmcgYXR0cmlidXRlcyB1bnRpbCB0aGUgZmlyc3QgdGltZSB3ZSdyZSBjb25uZWN0ZWQuXG4gICAgICBpZiAoIWVsZW1lbnRbcGVuZGluZ0F0dHJpYnV0ZXNTeW1ib2xdKSB7XG4gICAgICAgIGVsZW1lbnRbcGVuZGluZ0F0dHJpYnV0ZXNTeW1ib2xdID0ge307XG4gICAgICB9XG4gICAgICBlbGVtZW50W3BlbmRpbmdBdHRyaWJ1dGVzU3ltYm9sXVthdHRyaWJ1dGVdID0gdmFsdWU7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBTZXQvdW5zZXQgdGhlIGNsYXNzIHdpdGggdGhlIGluZGljYXRlZCBuYW1lLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBleGlzdHMgcHJpbWFyaWx5IHRvIGhhbmRsZSB0aGUgY2FzZSB3aGVyZSBhbiBlbGVtZW50IHdhbnRzIHRvXG4gICAqIHNldCBhIGRlZmF1bHQgcHJvcGVydHkgdmFsdWUgdGhhdCBzaG91bGQgYmUgcmVmbGVjdGVkIGFzIGFzIGNsYXNzLiBBblxuICAgKiBpbXBvcnRhbnQgbGltaXRhdGlvbiBvZiBjdXN0b20gZWxlbWVudCBjb25zdHVyY3RvcnMgaXMgdGhhdCB0aGV5IGNhbm5vdFxuICAgKiBzZXQgYXR0cmlidXRlcywgaW5jbHVkaW5nIHRoZSBgY2xhc3NgIGF0dHJpYnV0ZS4gQSBjYWxsIHRvXG4gICAqIGB0b2dnbGVDbGFzc2AgZHVyaW5nIHRoZSBjb25zdHJ1Y3RvciB3aWxsIGJlIGRlZmVycmVkIHVudGlsIHRoZSBlbGVtZW50XG4gICAqIGlzIGNvbm5lY3RlZCB0byB0aGUgZG9jdW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgLSBUaGUgbmFtZSBvZiB0aGUgY2xhc3MgdG8gc2V0LlxuICAgKiBAcGFyYW0ge29iamVjdH0gdmFsdWUgLSBUcnVlIHRvIHNldCB0aGUgY2xhc3MsIGZhbHNlIHRvIHJlbW92ZSBpdC5cbiAgICovXG4gIHRvZ2dsZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSwgdmFsdWUpIHtcbiAgICBpZiAoZWxlbWVudFtzYWZlVG9TZXRBdHRyaWJ1dGVzU3ltYm9sXSkge1xuICAgICAgLy8gU2FmZSB0byBzZXQgY2xhc3MgaW1tZWRpYXRlbHkuXG4gICAgICB0b2dnbGVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRGVmZXIgc2V0dGluZyBjbGFzcyB1bnRpbCB0aGUgZmlyc3QgdGltZSB3ZSdyZSBjb25uZWN0ZWQuXG4gICAgICBpZiAoIWVsZW1lbnRbcGVuZGluZ0NsYXNzZXNTeW1ib2xdKSB7XG4gICAgICAgIGVsZW1lbnRbcGVuZGluZ0NsYXNzZXNTeW1ib2xdID0ge307XG4gICAgICB9XG4gICAgICBlbGVtZW50W3BlbmRpbmdDbGFzc2VzU3ltYm9sXVtjbGFzc05hbWVdID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbn07XG5cblxuLy8gUmVmbGVjdCB0aGUgYXR0cmlidXRlIHRvIHRoZSBnaXZlbiBlbGVtZW50LlxuLy8gSWYgdGhlIHZhbHVlIGlzIG51bGwsIHJlbW92ZSB0aGUgYXR0cmlidXRlLlxuZnVuY3Rpb24gc2V0QXR0cmlidXRlVG9FbGVtZW50KGVsZW1lbnQsIGF0dHJpYnV0ZU5hbWUsIHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdGV4dCA9IFN0cmluZyh2YWx1ZSk7XG4gICAgLy8gQXZvaWQgcmVjdXJzaXZlIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayBjYWxscy5cbiAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSkgIT09IHRleHQpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi9jcmVhdGVTeW1ib2wnO1xuXG4vKipcbiAqIEEgY29sbGVjdGlvbiBvZiBTeW1ib2wgb2JqZWN0cyBmb3Igc3RhbmRhcmQgY29tcG9uZW50IHByb3BlcnRpZXMgYW5kIG1ldGhvZHMuXG4gKlxuICogVGhlc2UgU3ltYm9sIG9iamVjdHMgYXJlIHVzZWQgdG8gYWxsb3cgbWl4aW5zIGFuZCBhIGNvbXBvbmVudCB0byBpbnRlcm5hbGx5XG4gKiBjb21tdW5pY2F0ZSwgd2l0aG91dCBleHBvc2luZyB0aGVzZSBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIGluIHRoZSBjb21wb25lbnQnc1xuICogcHVibGljIEFQSS5cbiAqXG4gKiBUbyB1c2UgdGhlc2UgU3ltYm9sIG9iamVjdHMgaW4geW91ciBvd24gY29tcG9uZW50LCBpbmNsdWRlIHRoaXMgbW9kdWxlIGFuZFxuICogdGhlbiBjcmVhdGUgYSBwcm9wZXJ0eSBvciBtZXRob2Qgd2hvc2Uga2V5IGlzIHRoZSBkZXNpcmVkIFN5bWJvbC5cbiAqXG4gKiAgICAgaW1wb3J0ICdTaW5nbGVTZWxlY3Rpb24nIGZyb20gJ2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NpbmdsZVNlbGVjdGlvbic7XG4gKiAgICAgaW1wb3J0ICdzeW1ib2xzJyBmcm9tICdiYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9zeW1ib2xzJztcbiAqXG4gKiAgICAgY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgU2luZ2xlU2VsZWN0aW9uKEhUTUxFbGVtZW50KSB7XG4gKiAgICAgICBbc3ltYm9scy5hcHBseVNlbGVjdGlvbl0oaXRlbSwgc2VsZWN0ZWQpIHtcbiAqICAgICAgICAgLy8gVGhpcyB3aWxsIGJlIGludm9rZWQgd2hlbmV2ZXIgYW4gaXRlbSBpcyBzZWxlY3RlZC9kZXNlbGVjdGVkLlxuICogICAgICAgfVxuICogICAgIH1cbiAqXG4gKiBAbW9kdWxlIHN5bWJvbHNcbiAqL1xuY29uc3Qgc3ltYm9scyA9IHtcblxuICAvKipcbiAgICogU3ltYm9sIGZvciB0aGUgYGFwcGx5U2VsZWN0aW9uYCBtZXRob2QuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGFwcGxpZXMgdGhlIGluZGljYXRlZCBzZWxlY3Rpb24gc3RhdGUgdG8gYW4gaXRlbS5cbiAgICpcbiAgICogQGZ1bmN0aW9uIGFwcGx5U2VsZWN0aW9uXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW0gLSB0aGUgaXRlbSBiZWluZyBzZWxlY3RlZC9kZXNlbGVjdGVkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2VsZWN0ZWQgLSB0cnVlIGlmIHRoZSBpdGVtIGlzIHNlbGVjdGVkLCBmYWxzZSBpZiBub3RcbiAgICovXG4gIGFwcGx5U2VsZWN0aW9uOiBjcmVhdGVTeW1ib2woJ2FwcGx5U2VsZWN0aW9uJyksXG5cbiAgLyoqXG4gICAqIFN5bWJvbCBmb3IgdGhlIGBkZWZhdWx0c2AgcHJvcGVydHkuXG4gICAqXG4gICAqIFRoaXMgcHJvcGVydHkgY2FuIGJlIHVzZWQgdG8gc2V0IG9yIG92ZXJyaWRlIGRlZmF1bHRzIHRoYXQgd2lsbCBiZSBhcHBsaWVkXG4gICAqIHRvIGEgbmV3IGNvbXBvbmVudCBpbnN0YW5jZS4gV2hlbiBpbXBsZW1lbnRpbmcgdGhpcyBwcm9wZXJ0eSwgdGFrZSBjYXJlIHRvXG4gICAqIGZpcnN0IGFjcXVpcmUgYW55IGRlZmF1bHRzIGRlZmluZWQgYnkgdGhlIHN1cGVyY2xhc3MuIFRoZSBzdGFuZGFyZCBpZGlvbSBpc1xuICAgKiBhcyBmb2xsb3dzOlxuICAgKlxuICAgKiAgICAgZ2V0IFtzeW1ib2xzLmRlZmF1bHRzXSgpIHtcbiAgICogICAgICAgY29uc3QgZGVmYXVsdHMgPSBzdXBlcltzeW1ib2xzLmRlZmF1bHRzXSB8fCB7fTtcbiAgICogICAgICAgLy8gU2V0IG9yIG92ZXJyaWRlIGRlZmF1bHQgdmFsdWVzIGhlcmVcbiAgICogICAgICAgZGVmYXVsdHMuY3VzdG9tUHJvcGVydHkgPSBmYWxzZTtcbiAgICogICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgKiAgICAgfVxuICAgKlxuICAgKiBAdmFyIHtvYmplY3R9IGRlZmF1bHRzXG4gICAqL1xuICBkZWZhdWx0czogY3JlYXRlU3ltYm9sKCdkZWZhdWx0cycpLFxuXG4gIC8qKlxuICAgKiBTeW1ib2wgZm9yIHRoZSBgZHJhZ2dpbmdgIHByb3BlcnR5LlxuICAgKlxuICAgKiBDb21wb25lbnRzIGxpa2UgY2Fyb3VzZWxzIG9mdGVuIGRlZmluZSBhbmltYXRlZCBDU1MgdHJhbnNpdGlvbnMgZm9yXG4gICAqIHNsaWRpbmcgZWZmZWN0cy4gU3VjaCBhIHRyYW5zaXRpb24gc2hvdWxkIHVzdWFsbHkgKm5vdCogYmUgYXBwbGllZCB3aGlsZVxuICAgKiB0aGUgdXNlciBpcyBkcmFnZ2luZywgYmVjYXVzZSBhIENTUyBhbmltYXRpb24gd2lsbCBpbnRyb2R1Y2UgYSBsYWcgdGhhdFxuICAgKiBtYWtlcyB0aGUgc3dpcGUgZmVlbCBzbHVnZ2lzaC4gSW5zdGVhZCwgYXMgbG9uZyBhcyB0aGUgdXNlciBpcyBkcmFnZ2luZ1xuICAgKiB3aXRoIHRoZWlyIGZpbmdlciBkb3duLCB0aGUgdHJhbnNpdGlvbiBzaG91bGQgYmUgc3VwcHJlc3NlZC4gV2hlbiB0aGVcbiAgICogdXNlciByZWxlYXNlcyB0aGVpciBmaW5nZXIsIHRoZSB0cmFuc2l0aW9uIGNhbiBiZSByZXN0b3JlZCwgYWxsb3dpbmcgdGhlXG4gICAqIGFuaW1hdGlvbiB0byBzaG93IHRoZSBjYXJvdXNlbCBzbGlkaW5nIGludG8gaXRzIGZpbmFsIHBvc2l0aW9uLlxuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn0gdHJ1ZSBpZiBhIGRyYWcgaXMgaW4gcHJvZ3Jlc3MsIGZhbHNlIGlmIG5vdC5cbiAgICovXG4gIGRyYWdnaW5nOiBjcmVhdGVTeW1ib2woJ2RyYWdnaW5nJyksXG5cbiAgLyoqXG4gICAqIFN5bWJvbCBmb3IgdGhlIGBnb0Rvd25gIG1ldGhvZC5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIGRvd24uXG4gICAqXG4gICAqIEBmdW5jdGlvbiBnb0Rvd25cbiAgICovXG4gIGdvRG93bjogY3JlYXRlU3ltYm9sKCdnb0Rvd24nKSxcblxuICAvKipcbiAgICogU3ltYm9sIGZvciB0aGUgYGdvRW5kYCBtZXRob2QuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSB0byB0aGUgZW5kIChlLmcuLFxuICAgKiBvZiBhIGxpc3QpLlxuICAgKlxuICAgKiBAZnVuY3Rpb24gZ29FbmRcbiAgICovXG4gIGdvRW5kOiBjcmVhdGVTeW1ib2woJ2dvRW5kJyksXG5cbiAgLyoqXG4gICAqIFN5bWJvbCBmb3IgdGhlIGBnb0xlZnRgIG1ldGhvZC5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIGxlZnQuXG4gICAqXG4gICAqIEBmdW5jdGlvbiBnb0xlZnRcbiAgICovXG4gIGdvTGVmdDogY3JlYXRlU3ltYm9sKCdnb0xlZnQnKSxcblxuICAvKipcbiAgICogU3ltYm9sIGZvciB0aGUgYGdvUmlnaHRgIG1ldGhvZC5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHJpZ2h0LlxuICAgKlxuICAgKiBAZnVuY3Rpb24gZ29SaWdodFxuICAgKi9cbiAgZ29SaWdodDogY3JlYXRlU3ltYm9sKCdnb1JpZ2h0JyksXG5cbiAgLyoqXG4gICAqIFN5bWJvbCBmb3IgdGhlIGBnb1N0YXJ0YCBtZXRob2QuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSB0byB0aGUgc3RhcnRcbiAgICogKGUuZy4sIG9mIGEgbGlzdCkuXG4gICAqXG4gICAqIEBmdW5jdGlvbiBnb1N0YXJ0XG4gICAqL1xuICBnb1N0YXJ0OiBjcmVhdGVTeW1ib2woJ2dvU3RhcnQnKSxcblxuICAvKipcbiAgICogU3ltYm9sIGZvciB0aGUgYGdvVXBgIG1ldGhvZC5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIGdvL25hdmlnYXRlIHVwLlxuICAgKlxuICAgKiBAZnVuY3Rpb24gZ29VcFxuICAgKi9cbiAgZ29VcDogY3JlYXRlU3ltYm9sKCdnb1VwJyksXG5cbiAgLyoqXG4gICAqIFN5bWJvbCBmb3IgdGhlIGBpdGVtQWRkZWRgIG1ldGhvZC5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuIGEgbmV3IGl0ZW0gaXMgYWRkZWQgdG8gYSBsaXN0LlxuICAgKlxuICAgKiBAZnVuY3Rpb24gaXRlbUFkZGVkXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW0gLSB0aGUgaXRlbSBiZWluZyBzZWxlY3RlZC9kZXNlbGVjdGVkXG4gICAqL1xuICBpdGVtQWRkZWQ6IGNyZWF0ZVN5bWJvbCgnaXRlbUFkZGVkJyksXG5cbiAgLyoqXG4gICAqIFN5bWJvbCBmb3IgdGhlIGBrZXlkb3duYCBtZXRob2QuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiBhbiBlbGVtZW50IHJlY2VpdmVzIGEgYGtleWRvd25gIGV2ZW50LlxuICAgKlxuICAgKiBAZnVuY3Rpb24ga2V5ZG93blxuICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50IC0gdGhlIGV2ZW50IGJlaW5nIHByb2Nlc3NlZFxuICAgKi9cbiAga2V5ZG93bjogY3JlYXRlU3ltYm9sKCdrZXlkb3duJylcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN5bWJvbHM7XG4iLCIvKipcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3Igc3RhbmRhcmQgY2xhc3NMaXN0LnRvZ2dsZSgpIGJlaGF2aW9yIG9uIG9sZCBicm93c2VycyxcbiAqIG5hbWVseSBJRSAxMS5cbiAqXG4gKiBUaGUgc3RhbmRhcmRcbiAqIFtjbGFzc2xpc3RdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FbGVtZW50L2NsYXNzTGlzdClcbiAqIG9iamVjdCBoYXMgYSBgdG9nZ2xlKClgIGZ1bmN0aW9uIHRoYXQgc3VwcG9ydHMgYSBzZWNvbmQgQm9vbGVhbiBwYXJhbWV0ZXJcbiAqIHRoYXQgY2FuIGJlIHVzZWQgdG8gc3VjY2luY3RseSB0dXJuIGEgY2xhc3Mgb24gb3Igb2ZmLiBUaGlzIGZlYXR1cmUgaXMgb2Z0ZW5cbiAqIHVzZWZ1bCBpbiBkZXNpZ25pbmcgY3VzdG9tIGVsZW1lbnRzLCB3aGljaCBtYXkgd2FudCB0byBleHRlcm5hbGx5IHJlZmxlY3RcbiAqIGNvbXBvbmVudCBzdGF0ZSBpbiBhIENTUyBjbGFzcyB0aGF0IGNhbiBiZSB1c2VkIGZvciBzdHlsaW5nIHB1cnBvc2VzLlxuICpcbiAqIFVuZm9ydHVuYXRlbHksIElFIDExIGRvZXMgbm90IHN1cHBvcnQgdGhlIEJvb2xlYW4gcGFyYW1ldGVyIHRvXG4gKiBgY2xhc3NMaXN0LnRvZ2dsZSgpYC4gVGhpcyBoZWxwZXIgZnVuY3Rpb24gYmVoYXZlcyBsaWtlIHRoZSBzdGFuZGFyZFxuICogYHRvZ2dsZSgpYCwgaW5jbHVkaW5nIHN1cHBvcnQgZm9yIHRoZSBCb29sZWFuIHBhcmFtZXRlciwgc28gdGhhdCBpdCBjYW4gYmVcbiAqIHVzZWQgZXZlbiBvbiBJRSAxMS5cbiAqXG4gKiBAZnVuY3Rpb24gdG9nZ2xlQ2xhc3NcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZWxlbWVudCB0byBtb2RpZnlcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgLSBUaGUgY2xhc3MgdG8gYWRkL3JlbW92ZVxuICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdIC0gRm9yY2UgdGhlIGNsYXNzIHRvIGJlIGFkZGVkIChpZiB0cnVlKSBvciByZW1vdmVkXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaWYgZmFsc2UpXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSwgZm9yY2UpIHtcbiAgY29uc3QgY2xhc3NMaXN0ID0gZWxlbWVudC5jbGFzc0xpc3Q7XG4gIGNvbnN0IGFkZENsYXNzID0gKHR5cGVvZiBmb3JjZSA9PT0gJ3VuZGVmaW5lZCcpID9cbiAgICAhY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkgOlxuICAgIGZvcmNlO1xuICBpZiAoYWRkQ2xhc3MpIHtcbiAgICBjbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICB9XG4gIHJldHVybiBhZGRDbGFzcztcbn1cbiIsImltcG9ydCBBdHRyaWJ1dGVNYXJzaGFsbGluZyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9BdHRyaWJ1dGVNYXJzaGFsbGluZyc7XG5pbXBvcnQgQ29tcG9zYWJsZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db21wb3NhYmxlJztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW4nO1xuaW1wb3J0IFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NoYWRvd0VsZW1lbnRSZWZlcmVuY2VzJztcbmltcG9ydCBTaGFkb3dUZW1wbGF0ZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaGFkb3dUZW1wbGF0ZSc7XG5cblxuLyoqXG4gKiBBIHNhbXBsZSBnZW5lcmFsLXB1cnBvc2UgYmFzZSBjbGFzcyBmb3IgZGVmaW5pbmcgY3VzdG9tIGVsZW1lbnRzIHRoYXQgbWl4ZXNcbiAqIGluIHNvbWUgY29tbW9uIGZlYXR1cmVzOiB0ZW1wbGF0ZSBzdGFtcGluZyBpbnRvIGEgc2hhZG93IHJvb3QsIHNoYWRvdyBlbGVtZW50XG4gKiByZWZlcmVuY2VzLCBtYXJzaGFsbGluZyBhdHRyaWJ1dGVzIHRvIHByb3BlcnRpZXMsIGFuZCByZXRyaWV2aW5nIHRoZSBjaGlsZHJlblxuICogZGlzdHJpYnV0ZWQgdG8gYSBjb21wb25lbnQuXG4gKlxuICogVGhpcyBiYXNlIGNsYXNzIGlzIG5vdCBzcGVjaWFsIGluIGFueSB3YXksIGFuZCBpcyBkZWZpbmVkIG9ubHkgYXMgYVxuICogY29udmVuaWVudCBzaG9ydGhhbmQgZm9yIGFwcGx5aW5nIHRoZSBtaXhpbnMgbGlzdGVkIGFib3ZlLiBZb3UgY2FuIHVzZSB0aGlzXG4gKiBjbGFzcyBhcyBhIGJhc2UgY2xhc3MgZm9yIHlvdXIgb3duIGVsZW1lbnRzLCBvciBlYXNpbHkgY3JlYXRlIHlvdXIgb3duIGJhc2VcbiAqIGNsYXNzIGJ5IGFwcGx5aW5nIHRoZSBzYW1lIHNldCBvZiBtaXhpbnMuXG4gKlxuICogVGhlIEVsZW1lbnRCYXNlIGJhc2UgY2xhc3MgZG9lcyBub3QgcmVnaXN0ZXIgaXRzZWxmIGFzIGEgY3VzdG9tIGVsZW1lbnQgd2l0aFxuICogdGhlIGJyb3dzZXIsIGFuZCBoZW5jZSBjYW5ub3QgYmUgaW5kZXBlbmRlbnRseSBpbnN0YW50aWF0ZWQuXG4gKlxuICogQG1peGVzIEF0dHJpYnV0ZU1hcnNoYWxsaW5nXG4gKiBAbWl4ZXMgQ29tcG9zYWJsZVxuICogQG1peGVzIERpc3RyaWJ1dGVkQ2hpbGRyZW5cbiAqIEBtaXhlcyBTaGFkb3dFbGVtZW50UmVmZXJlbmNlc1xuICogQG1peGVzIFNoYWRvd1RlbXBsYXRlXG4gKi9cbmNsYXNzIEVsZW1lbnRCYXNlIGV4dGVuZHMgQ29tcG9zYWJsZShIVE1MRWxlbWVudCkuY29tcG9zZShcbiAgU2hhZG93VGVtcGxhdGUsICAgICAgICAgIC8vIGJlZm9yZSBub2RlIGZpbmRpbmcsIHNvIHNoYWRvdyByb290IGlzIHBvcHVsYXRlZFxuICBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcywgLy8gYmVmb3JlIG1hcnNoYWxsaW5nLCBzbyBwcm9wZXJ0aWVzIGNhbiB1c2UgcmVmc1xuICBBdHRyaWJ1dGVNYXJzaGFsbGluZyxcbiAgRGlzdHJpYnV0ZWRDaGlsZHJlblxuKSB7fVxuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50QmFzZTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgdHJhbnNwaWxlZCB0byBjcmVhdGUgYW4gRVM1LWNvbXBhdGlibGUgZGlzdHJpYnV0aW9uIGluIHdoaWNoXG4gKiB0aGUgcGFja2FnZSdzIG1haW4gZmVhdHVyZShzKSBhcmUgYXZhaWxhYmxlIHZpYSB0aGUgd2luZG93LkJhc2ljIGdsb2JhbC5cbiAqIElmIHlvdSdyZSBhbHJlYWR5IHVzaW5nIEVTNiB5b3Vyc2VsZiwgaWdub3JlIHRoaXMgZmlsZSwgYW5kIGluc3RlYWQgaW1wb3J0XG4gKiB0aGUgc291cmNlIGZpbGUocykgeW91IHdhbnQgZnJvbSB0aGUgc3JjIGZvbGRlci5cbiAqL1xuXG5pbXBvcnQgUGFnZURvdHMgZnJvbSAnLi9zcmMvUGFnZURvdHMnO1xuXG53aW5kb3cuQmFzaWMgPSB3aW5kb3cuQmFzaWMgfHwge307XG53aW5kb3cuQmFzaWMuUGFnZURvdHMgPSBQYWdlRG90cztcbiIsImltcG9ydCBjcmVhdGVTeW1ib2wgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvY3JlYXRlU3ltYm9sJztcbmltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcbmltcG9ydCBDb250ZW50Rmlyc3RDaGlsZFRhcmdldCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db250ZW50Rmlyc3RDaGlsZFRhcmdldCc7XG5pbXBvcnQgRGlyZWN0aW9uU2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0RpcmVjdGlvblNlbGVjdGlvbic7XG5pbXBvcnQgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50JztcbmltcG9ydCBLZXlib2FyZCBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9LZXlib2FyZCc7XG5pbXBvcnQgS2V5Ym9hcmREaXJlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvS2V5Ym9hcmREaXJlY3Rpb24nO1xuaW1wb3J0IHJlbmRlckFycmF5QXNFbGVtZW50cyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9yZW5kZXJBcnJheUFzRWxlbWVudHMnO1xuaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvc3ltYm9scyc7XG5pbXBvcnQgVGFyZ2V0SW5Db2xsZWN0aXZlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RhcmdldEluQ29sbGVjdGl2ZSc7XG5pbXBvcnQgVGFyZ2V0U2VsZWN0aW9uIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1RhcmdldFNlbGVjdGlvbic7XG5pbXBvcnQgdG9nZ2xlQ2xhc3MgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvdG9nZ2xlQ2xhc3MnO1xuXG5cbi8vIFN5bWJvbHMgZm9yIHByaXZhdGUgZGF0YSBtZW1iZXJzIG9uIGFuIGVsZW1lbnQuXG5jb25zdCBzZWxlY3RlZEZyYWN0aW9uQ2hhbmdlZExpc3RlbmVyU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3RlZEZyYWN0aW9uQ2hhbmdlZExpc3RlbmVyJyk7XG5cblxuY29uc3QgYmFzZSA9IEVsZW1lbnRCYXNlLmNvbXBvc2UoXG4gIENvbnRlbnRGaXJzdENoaWxkVGFyZ2V0LFxuICBEaXJlY3Rpb25TZWxlY3Rpb24sXG4gIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQsXG4gIEtleWJvYXJkLFxuICBLZXlib2FyZERpcmVjdGlvbixcbiAgVGFyZ2V0SW5Db2xsZWN0aXZlLFxuICBUYXJnZXRTZWxlY3Rpb25cbik7XG5cbi8qKlxuICogUHJlc2VudHMgYSBzZXQgb2Ygc21hbGwgZG90cyB0byBzaG93IGxpc3QgaXRlbSBjb3VudCBhbmQgc2VsZWN0IGxpc3QgaXRlbXMuXG4gKlxuICogWW91IGNhbiBzZWUgYSBbbGl2ZSBkZW1vXShodHRwOi8vYmFzaWN3ZWJjb21wb25lbnRzLm9yZy9iYXNpYy13ZWItY29tcG9uZW50cy9wYWNrYWdlcy9iYXNpYy1jYXJvdXNlbC9jYXJvdXNlbFdpdGhEb3RzLmh0bWwpXG4gKiBvZiB0aGlzIGNvbXBvbmVudCBhcHBsaWVkIHRvIGEgY2Fyb3VzZWwuXG4gKlxuICogVGhlcmUgd2lsbCBiZSBvbmUgZG90IGZvciBlYWNoIGl0ZW0sIGFuZCB0aGUgZG90IGZvciB0aGUgY3VycmVudGx5IHNlbGVjdGVkXG4gKiBpdGVtIHdpbGwgYmUgc2hvd24gc2VsZWN0ZWQuXG4gKlxuICogVHlwaWNhbCB1c2FnZTpcbiAqXG4gKiAgICAgPGJhc2ljLXBhZ2UtZG90cz5cbiAqICAgICAgIDxiYXNpYy1jYXJvdXNlbD5cbiAqICAgICAgICAgLi4uIGltYWdlcywgZXRjLiAuLi5cbiAqICAgICAgIDwvYmFzaWMtY2Fyb3VzZWw+XG4gKiAgICAgPC9iYXNpYy1wYWdlLWRvdHM+XG4gKlxuICogQWx0aG91Z2ggdGhlIGRvdHMgYXJlIHF1aXRlIHNtYWxsIGJ5IGRlZmF1bHQsIGNsaWNraW5nL3RhcHBpbmcgYSBkb3Qgd2lsbFxuICogd2lsbCBzZWxlY3QgdGhlIGNvcnJlc3BvbmRpbmcgbGlzdCBpdGVtLlxuICpcbiAqIEBleHRlbmRzIEVsZW1lbnRCYXNlXG4gKiBAbWl4ZXMgQ29udGVudEZpcnN0Q2hpbGRUYXJnZXRcbiAqIEBtaXhlcyBEaXJlY3Rpb25TZWxlY3Rpb25cbiAqIEBtaXhlcyBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50XG4gKiBAbWl4ZXMgS2V5Ym9hcmRcbiAqIEBtaXhlcyBLZXlib2FyZERpcmVjdGlvblxuICogQG1peGVzIFRhcmdldEluQ29sbGVjdGl2ZVxuICogQG1peGVzIFRhcmdldFNlbGVjdGlvblxuICovXG5jbGFzcyBQYWdlRG90cyBleHRlbmRzIGJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLiQuZG90cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IGRvdCA9IGV2ZW50LnRhcmdldDtcbiAgICAgIGNvbnN0IGRvdEluZGV4ID0gdGhpcy5kb3RzLmluZGV4T2YoZG90KTtcbiAgICAgIGlmIChkb3RJbmRleCA+PSAwKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGRvdEluZGV4O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgW3N5bWJvbHMuYXBwbHlTZWxlY3Rpb25dKGl0ZW0sIHNlbGVjdGVkKSB7XG4gICAgaWYgKHN1cGVyW3N5bWJvbHMuYXBwbHlTZWxlY3Rpb25dKSB7IHN1cGVyW3N5bWJvbHMuYXBwbHlTZWxlY3Rpb25dKGl0ZW0sIHNlbGVjdGVkKTsgfVxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pO1xuICAgIC8vIFNlZSBpZiB0aGUgY29ycmVzcG9uZGluZyBkb3QgaGFzIGFscmVhZHkgYmVlbiBjcmVhdGVkLlxuICAgIC8vIElmIG5vdCwgdGhlIGNvcnJlY3QgZG90IHdpbGwgYmUgc2VsZWN0ZWQgd2hlbiBpdCBnZXRzIGNyZWF0ZWQuXG4gICAgY29uc3QgZG90cyA9IHRoaXMuZG90cztcbiAgICBpZiAoZG90cyAmJiBkb3RzLmxlbmd0aCA+IGluZGV4KSB7XG4gICAgICBjb25zdCBkb3QgPSB0aGlzLmRvdHNbaW5kZXhdO1xuICAgICAgaWYgKGRvdCkge1xuICAgICAgICB0b2dnbGVDbGFzcyhkb3QsICdzZWxlY3RlZCcsIHNlbGVjdGVkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXQgW3N5bWJvbHMuZGVmYXVsdHNdKCkge1xuICAgIGNvbnN0IGRlZmF1bHRzID0gc3VwZXJbc3ltYm9scy5kZWZhdWx0c10gfHwge307XG4gICAgZGVmYXVsdHMubmF2aWdhdGlvbkF4aXMgPSAnaG9yaXpvbnRhbCc7XG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9XG5cbiAgZ2V0IGRvdHMoKSB7XG4gICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwodGhpcy4kLmRvdHMucXVlcnlTZWxlY3RvckFsbCgnLmRvdCcpKTtcbiAgfVxuXG4gIGl0ZW1zQ2hhbmdlZCgpIHtcbiAgICBpZiAoc3VwZXIuaXRlbXNDaGFuZ2VkKSB7IHN1cGVyLml0ZW1zQ2hhbmdlZCgpOyB9XG4gICAgcmVuZGVyQXJyYXlBc0VsZW1lbnRzKHRoaXMuaXRlbXMsIHRoaXMuJC5kb3RzLCAoaXRlbSwgZWxlbWVudCkgPT4ge1xuICAgICAgLy8gV2UgZG9uJ3QgdXNlIHRoZSBpdGVtIHBhcmFtZXRlciwgYmVjYXVzZSBhbnkgaXRlbSB3aWxsIHByb2R1Y2UgYW5cbiAgICAgIC8vIGlkZW50aWNhbCBjb3JyZXNwb25kaW5nIGRvdC5cbiAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZG90Jyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3R5bGUtc2NvcGUnKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdiYXNpYy1wYWdlLWRvdHMnKTtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnbm9uZScpO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbUNoYW5nZWQoKTsgIC8vIEluIGNhc2UgcG9zaXRpb24gb2Ygc2VsZWN0ZWQgaXRlbSBtb3ZlZC5cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZGlzdGFuY2UgdGhlIHVzZXIgaGFzIG1vdmVkIHRoZSBmaXJzdCB0b3VjaHBvaW50IHNpbmNlIHRoZSBiZWdpbm5pbmdcbiAgICogb2YgYSBkcmFnLCBleHByZXNzZWQgYXMgYSBmcmFjdGlvbiBvZiB0aGUgZWxlbWVudCdzIHdpZHRoLlxuICAgKlxuICAgKiBAdHlwZSBudW1iZXJcbiAgICovXG4gIGdldCBzZWxlY3RlZEZyYWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldCAmJiB0aGlzLnRhcmdldC5zZWxlY3RlZEZyYWN0aW9uO1xuICB9XG4gIHNldCBzZWxlY3RlZEZyYWN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKCdzZWxlY3RlZEZyYWN0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEZyYWN0aW9uID0gdmFsdWU7IH1cbiAgICBpZiAodGhpcy50YXJnZXQgJiYgdGhpcy50YXJnZXQuc2VsZWN0ZWRGcmFjdGlvbiAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMudGFyZ2V0LnNlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVuZGVyVHJhbnNpdGlvbih0aGlzLCB0aGlzLnNlbGVjdGVkSW5kZXgsIHZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc2VsZWN0ZWQtZnJhY3Rpb24tY2hhbmdlZCcpKTtcbiAgfVxuXG4gIHNlbGVjdGVkSXRlbUNoYW5nZWQoKSB7XG4gICAgaWYgKHN1cGVyLnNlbGVjdGVkSXRlbUNoYW5nZWQpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtQ2hhbmdlZCgpOyB9XG4gICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleDtcbiAgICB0aGlzLmRvdHMuZm9yRWFjaCgoZG90LCBpKSA9PiB7XG4gICAgICB0b2dnbGVDbGFzcyhkb3QsICdzZWxlY3RlZCcsIGkgPT09IHNlbGVjdGVkSW5kZXgpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IHRhcmdldCgpIHtcbiAgICByZXR1cm4gc3VwZXIudGFyZ2V0O1xuICB9XG4gIHNldCB0YXJnZXQoZWxlbWVudCkge1xuICAgIGlmICgndGFyZ2V0JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci50YXJnZXQgPSBlbGVtZW50OyB9XG4gICAgaWYgKHRoaXNbc2VsZWN0ZWRGcmFjdGlvbkNoYW5nZWRMaXN0ZW5lclN5bWJvbF0pIHtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2VsZWN0ZWQtZnJhY3Rpb24tY2hhbmdlZCcsIHRoaXNbc2VsZWN0ZWRGcmFjdGlvbkNoYW5nZWRMaXN0ZW5lclN5bWJvbF0pO1xuICAgIH1cbiAgICB0aGlzW3NlbGVjdGVkRnJhY3Rpb25DaGFuZ2VkTGlzdGVuZXJTeW1ib2xdID0gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzZWxlY3RlZC1mcmFjdGlvbi1jaGFuZ2VkJywgZXZlbnQgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RlZEZyYWN0aW9uID0gZWxlbWVudC5zZWxlY3RlZEZyYWN0aW9uO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAjZG90cyB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgIH1cblxuICAgICAgI2NvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICB9XG5cbiAgICAgICNjb250YWluZXIgOjpzbG90dGVkKCopIHtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuXG4gICAgICAuZG90IHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgbWFyZ2luOiA3cHggNXB4O1xuICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBib3gtc2hhZG93IDAuMnM7XG4gICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICB9XG5cbiAgICAgIC5kb3Q6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMXB4IDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgICB9XG5cbiAgICAgIC5kb3Quc2VsZWN0ZWQge1xuICAgICAgICBvcGFjaXR5OiAwLjk1O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgLmRvdCB7XG4gICAgICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGlkPVwiZG90c1wiIHJvbGU9XCJub25lXCI+PC9kaXY+XG4gICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCIgcm9sZT1cIm5vbmVcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG59XG5cblxuLy8gUmV0dXJuIHRoZSBpbmRleCwgZW5zdXJpbmcgaXQgc3RheXMgYmV0d2VlbiAwIGFuZCB0aGUgZ2l2ZW4gbGVuZ3RoLlxuZnVuY3Rpb24ga2VlcEluZGV4V2l0aGluQm91bmRzKGxlbmd0aCwgaW5kZXgpIHtcbiAgLy8gSGFuZGxlIHBvc3NpYmlsaXR5IG9mIG5lZ2F0aXZlIG1vZC5cbiAgLy8gU2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE4NjE4MjUwLzc2NDcyXG4gIHJldHVybiAoKGluZGV4ICUgbGVuZ3RoKSArIGxlbmd0aCkgJSBsZW5ndGg7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRyYW5zaXRpb24oZWxlbWVudCwgc2VsZWN0ZWRJbmRleCwgc2VsZWN0ZWRGcmFjdGlvbikge1xuICBjb25zdCBkb3RzID0gZWxlbWVudC5kb3RzO1xuICBpZiAoIWRvdHMgfHwgZG90cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZG90Q291bnQgPSBkb3RzLmxlbmd0aDtcbiAgY29uc3Qgb3BhY2l0eU1pbmltdW0gPSAwLjQ7XG4gIGNvbnN0IG9wYWNpdHlNYXhpbXVtID0gMC45NTtcbiAgY29uc3Qgb3BhY2l0eVJhbmdlID0gb3BhY2l0eU1heGltdW0gLSBvcGFjaXR5TWluaW11bTtcbiAgY29uc3QgZnJhY3Rpb25hbEluZGV4ID0gc2VsZWN0ZWRJbmRleCArIHNlbGVjdGVkRnJhY3Rpb247XG4gIGNvbnN0IGxlZnRJbmRleCA9IE1hdGguZmxvb3IoZnJhY3Rpb25hbEluZGV4KTtcbiAgY29uc3QgcmlnaHRJbmRleCA9IE1hdGguY2VpbChmcmFjdGlvbmFsSW5kZXgpO1xuICBjb25zdCBzZWxlY3Rpb25XcmFwcyA9IGVsZW1lbnQuc2VsZWN0aW9uV3JhcHM7XG4gIGxldCBhd2F5SW5kZXggPSBzZWxlY3RlZEZyYWN0aW9uID49IDAgPyBsZWZ0SW5kZXggOiByaWdodEluZGV4O1xuICBsZXQgdG93YXJkSW5kZXggPSBzZWxlY3RlZEZyYWN0aW9uID49IDAgPyByaWdodEluZGV4IDogbGVmdEluZGV4O1xuICBpZiAoc2VsZWN0aW9uV3JhcHMpIHtcbiAgICBhd2F5SW5kZXggPSBrZWVwSW5kZXhXaXRoaW5Cb3VuZHMoZG90Q291bnQsIGF3YXlJbmRleCk7XG4gICAgdG93YXJkSW5kZXggPSBrZWVwSW5kZXhXaXRoaW5Cb3VuZHMoZG90Q291bnQsIHRvd2FyZEluZGV4KTtcbiAgfVxuICAvLyBTdHVwaWQgSUUgZG9lc24ndCBoYXZlIE1hdGgudHJ1bmMuXG4gIC8vIGNvbnN0IHRydW5jYXRlZFNlbGVjdGVkRnJhY3Rpb24gPSBNYXRoLnRydW5jKHNlbGVjdGVkRnJhY3Rpb24pO1xuICBjb25zdCB0cnVuY2F0ZWRTZWxlY3RlZEZyYWN0aW9uID0gc2VsZWN0ZWRGcmFjdGlvbiA8IDAgPyBNYXRoLmNlaWwoc2VsZWN0ZWRGcmFjdGlvbikgOiBNYXRoLmZsb29yKHNlbGVjdGVkRnJhY3Rpb24pO1xuICBjb25zdCBwcm9ncmVzcyA9IHNlbGVjdGVkRnJhY3Rpb24gLSB0cnVuY2F0ZWRTZWxlY3RlZEZyYWN0aW9uO1xuICBjb25zdCBvcGFjaXR5UHJvZ3Jlc3NUaHJvdWdoUmFuZ2UgPSBNYXRoLmFicyhwcm9ncmVzcykgKiBvcGFjaXR5UmFuZ2U7XG4gIGRvdHMuZm9yRWFjaCgoZG90LCBpbmRleCkgPT4ge1xuICAgIGxldCBkb3RPcGFjaXR5O1xuICAgIGlmIChzZWxlY3RlZEZyYWN0aW9uID09PSAwKSB7XG4gICAgICAvLyBSZW1vdmUgZXhwbGljaXQgb3BhY2l0eSBhbmQgcmVseSBvbiBzdHlsaW5nLlxuICAgICAgZG90T3BhY2l0eSA9ICcnO1xuICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IGF3YXlJbmRleCkge1xuICAgICAgZG90T3BhY2l0eSA9IG9wYWNpdHlNYXhpbXVtIC0gb3BhY2l0eVByb2dyZXNzVGhyb3VnaFJhbmdlO1xuICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IHRvd2FyZEluZGV4KSB7XG4gICAgICBkb3RPcGFjaXR5ID0gb3BhY2l0eU1pbmltdW0gKyBvcGFjaXR5UHJvZ3Jlc3NUaHJvdWdoUmFuZ2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvdE9wYWNpdHkgPSBvcGFjaXR5TWluaW11bTtcbiAgICB9XG4gICAgZG90LnN0eWxlLm9wYWNpdHkgPSBkb3RPcGFjaXR5O1xuICB9KTtcbn1cblxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Jhc2ljLXBhZ2UtZG90cycsIFBhZ2VEb3RzKTtcbmV4cG9ydCBkZWZhdWx0IFBhZ2VEb3RzO1xuIl19
