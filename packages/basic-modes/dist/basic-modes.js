(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{"../../basic-component-mixins/src/toggleClass":14}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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
        if (this.selectionRequired == null) {
          this.selectionRequired = this.defaults.selectionRequired;
        }
        if (this.selectionWraps == null) {
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
        return this._selectionWraps;
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

},{"./microtask":13}],8:[function(require,module,exports){
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

},{"./microtask":13}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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

},{"./Collective":2}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
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

},{"../../basic-component-mixins/src/AttributeMarshalling":1,"../../basic-component-mixins/src/Composable":3,"../../basic-component-mixins/src/DistributedChildren":5,"../../basic-component-mixins/src/ShadowElementReferences":10,"../../basic-component-mixins/src/ShadowTemplate":11}],16:[function(require,module,exports){
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
 * Shows exactly one child element at a time.
 *
 * This can be useful, for example, if a given UI element has multiple modes
 * that present substantially different elements.
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
    key: 'attachedCallback',
    value: function attachedCallback() {
      this.selectionRequired = true;
    }
  }]);

  return Modes;
}(base);

document.registerElement('basic-modes', Modes);
exports.default = Modes;

},{"../../basic-component-mixins/src/ContentAsItems":4,"../../basic-component-mixins/src/DistributedChildrenAsContent":6,"../../basic-component-mixins/src/ItemsSelection":7,"../../basic-component-mixins/src/ObserveContentChanges":8,"../../basic-component-mixins/src/SelectionAriaActive":9,"../../basic-component-mixins/src/TargetInCollective":12,"../../basic-element-base/src/ElementBase":15}]},{},[16])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9BdHRyaWJ1dGVNYXJzaGFsbGluZy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbGxlY3RpdmUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db21wb3NhYmxlLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQ29udGVudEFzSXRlbXMuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudC5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0l0ZW1zU2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uQXJpYUFjdGl2ZS5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NoYWRvd0VsZW1lbnRSZWZlcmVuY2VzLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2hhZG93VGVtcGxhdGUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UYXJnZXRJbkNvbGxlY3RpdmUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9taWNyb3Rhc2suanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy90b2dnbGVDbGFzcy5qcyIsInBhY2thZ2VzL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UuanMiLCJwYWNrYWdlcy9iYXNpYy1tb2Rlcy9zcmMvTW9kZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDQ2UsVUFBQyxJQUFJLEVBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BcUNqQixvQkFBb0I7Ozs7Ozs7Ozs7Ozs7OzsrQ0FLQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTtBQUNqRCwyR0FBb0M7QUFBRSxtSEFBaUM7U0FBRTs7O0FBQUEsQUFHekUsWUFBSSxZQUFZLEdBQUcsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakQsWUFBSSxZQUFZLElBQUksSUFBSSxJQUFJLEVBQUUsWUFBWSxJQUFJLFdBQVcsQ0FBQyxTQUFTLENBQUEsQUFBQyxFQUFFO0FBQ3BFLGNBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxRQUFRLENBQUM7U0FDL0I7T0FDRjs7Ozs7Ozs7Ozs7O3dDQVNpQjs7O0FBQ2hCLGtHQUEyQjtBQUFFLDBHQUF3QjtTQUFFO0FBQ3ZELFlBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7QUFBQyxBQUNoRCxrQkFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFBLFNBQVMsRUFBSTtBQUM5QixpQkFBSyx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0UsQ0FBQyxDQUFDO09BQ0o7Ozs7SUE1QmdDLElBQUk7O0FBZ0N2QyxTQUFPLG9CQUFvQixDQUFDO0NBQzdCOzs7O0FBSUQsU0FBUyx1QkFBdUIsQ0FBQyxhQUFhLEVBQUU7QUFDOUMsTUFBSSxZQUFZLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsVUFBQSxDQUFDO1dBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRTtH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QUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO2tCQUNoQyxLQUFLIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggQXR0cmlidXRlTWFyc2hhbGxpbmcuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYXJzaGFsbHMgYXR0cmlidXRlcyB0byBwcm9wZXJ0aWVzIChhbmQgZXZlbnR1YWxseSB2aWNlIHZlcnNhKS5cbiAgICpcbiAgICogSWYgeW91ciBjb21wb25lbnQgZXhwb3NlcyBhIHNldHRlciBmb3IgYSBwcm9wZXJ0eSwgaXQncyBnZW5lcmFsbHkgYSBnb29kXG4gICAqIGlkZWEgdG8gbGV0IGRldnMgdXNpbmcgeW91ciBjb21wb25lbnQgYmUgYWJsZSB0byBzZXQgdGhhdCBwcm9wZXJ0eSBpbiBIVE1MXG4gICAqIHZpYSBhbiBlbGVtZW50IGF0dHJpYnV0ZS4gWW91IGNhbiBjb2RlIHRoYXQgeW91cnNlbGYgYnkgd3JpdGluZyBhblxuICAgKiBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYCwgb3IgeW91IGNhbiB1c2UgdGhpcyBtaXhpbiB0byBnZXQgYSBkZWdyZWUgb2ZcbiAgICogYXV0b21hdGljIHN1cHBvcnQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaW1wbGVtZW50cyBhbiBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYCB0aGF0IHdpbGwgYXR0ZW1wdCB0b1xuICAgKiBjb252ZXJ0IGEgY2hhbmdlIGluIGFuIGVsZW1lbnQgYXR0cmlidXRlIGludG8gYSBjYWxsIHRvIHRoZSBjb3JyZXNwb25kaW5nXG4gICAqIHByb3BlcnR5IHNldHRlci4gQXR0cmlidXRlcyB0eXBpY2FsbHkgZm9sbG93IGh5cGhlbmF0ZWQgbmFtZXMgKFwiZm9vLWJhclwiKSxcbiAgICogd2hlcmVhcyBwcm9wZXJ0aWVzIHR5cGljYWxseSB1c2UgY2FtZWxDYXNlIG5hbWVzIChcImZvb0JhclwiKS4gVGhpcyBtaXhpblxuICAgKiByZXNwZWN0cyB0aGF0IGNvbnZlbnRpb24sIGF1dG9tYXRpY2FsbHkgbWFwcGluZyB0aGUgaHlwaGVuYXRlZCBhdHRyaWJ1dGVcbiAgICogbmFtZSB0byB0aGUgY29ycmVzcG9uZGluZyBjYW1lbENhc2UgcHJvcGVydHkgbmFtZS5cbiAgICpcbiAgICogRXhhbXBsZTogWW91IGRlZmluZSBhIGNvbXBvbmVudCB1c2luZyB0aGlzIG1peGluOlxuICAgKlxuICAgKiAgICAgY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgQXR0cmlidXRlTWFyc2hhbGxpbmcoSFRNTEVsZW1lbnQpIHtcbiAgICogICAgICAgZ2V0IGZvb0JhcigpIHsgcmV0dXJuIHRoaXMuX2Zvb0JhcjsgfVxuICAgKiAgICAgICBzZXQgZm9vQmFyKHZhbHVlKSB7IHRoaXMuX2Zvb0JhciA9IHZhbHVlOyB9XG4gICAqICAgICB9XG4gICAqICAgICBkb2N1bWVudC5yZWdpc3RlckVsZW1lbnQoJ215LWVsZW1lbnQnLCBNeUVsZW1lbnQpO1xuICAgKlxuICAgKiBJZiBzb21lb25lIHRoZW4gaW5zdGFudGlhdGVzIHlvdXIgY29tcG9uZW50IGluIEhUTUw6XG4gICAqXG4gICAqICAgICA8bXktZWxlbWVudCBmb28tYmFyPVwiSGVsbG9cIj48L215LWVsZW1lbnQ+XG4gICAqXG4gICAqIFRoZW4sIGFmdGVyIHRoZSBlbGVtZW50IGhhcyBiZWVuIHVwZ3JhZGVkLCB0aGUgYGZvb0JhcmAgc2V0dGVyIHdpbGxcbiAgICogYXV0b21hdGljYWxseSBiZSBpbnZva2VkIHdpdGggdGhlIGluaXRpYWwgdmFsdWUgXCJIZWxsb1wiLlxuICAgKlxuICAgKiBGb3IgdGhlIHRpbWUgYmVpbmcsIHRoaXMgbWl4aW4gb25seSBzdXBwb3J0cyBzdHJpbmctdmFsdWVkIHByb3BlcnRpZXMuXG4gICAqIElmIHlvdSdkIGxpa2UgdG8gY29udmVydCBzdHJpbmcgYXR0cmlidXRlcyB0byBvdGhlciB0eXBlcyAobnVtYmVycyxcbiAgICogYm9vbGVhbnMpLCB5b3UgbmVlZCB0byBpbXBsZW1lbnQgYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AgeW91cnNlbGYuXG4gICAqL1xuICBjbGFzcyBBdHRyaWJ1dGVNYXJzaGFsbGluZyBleHRlbmRzIGJhc2Uge1xuXG4gICAgLypcbiAgICAgKiBIYW5kbGUgYSBjaGFuZ2UgdG8gdGhlIGF0dHJpYnV0ZSB3aXRoIHRoZSBnaXZlbiBuYW1lLlxuICAgICAqL1xuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICAgIGlmIChzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2spIHsgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKCk7IH1cbiAgICAgIC8vIElmIHRoZSBhdHRyaWJ1dGUgbmFtZSBjb3JyZXNwb25kcyB0byBhIHByb3BlcnR5IG5hbWUsIHRoZW4gc2V0IHRoYXRcbiAgICAgIC8vIHByb3BlcnR5LiBJZ25vcmUgY2hhbmdlcyBpbiBzdGFuZGFyZCBIVE1MRWxlbWVudCBwcm9wZXJ0aWVzLlxuICAgICAgbGV0IHByb3BlcnR5TmFtZSA9IGF0dHJpYnV0ZVRvUHJvcGVydHlOYW1lKG5hbWUpO1xuICAgICAgaWYgKHByb3BlcnR5TmFtZSBpbiB0aGlzICYmICEocHJvcGVydHlOYW1lIGluIEhUTUxFbGVtZW50LnByb3RvdHlwZSkpIHtcbiAgICAgICAgdGhpc1twcm9wZXJ0eU5hbWVdID0gbmV3VmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBHZW5lcmF0ZSBhbiBpbml0aWFsIGNhbGwgdG8gYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIGZvciBlYWNoIGF0dHJpYnV0ZVxuICAgICAqIG9uIHRoZSBlbGVtZW50LlxuICAgICAqXG4gICAgICogVE9ETzogVGhlIHBsYW4gZm9yIEN1c3RvbSBFbGVtZW50cyB2MSBpcyBmb3IgdGhlIGJyb3dzZXIgdG8gaGFuZGxlIHRoaXMuXG4gICAgICogT25jZSB0aGF0J3MgaGFuZGxlZCAoaW5jbHVkaW5nIGluIHBvbHlmaWxscyksIHRoaXMgY2FsbCBjYW4gZ28gYXdheS5cbiAgICAgKi9cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgICBsZXQgYXR0cmlidXRlcyA9IFtdLnNsaWNlLmNhbGwodGhpcy5hdHRyaWJ1dGVzKTsgLy8gVG8gYXJyYXkgZm9yIElFXG4gICAgICBhdHRyaWJ1dGVzLmZvckVhY2goYXR0cmlidXRlID0+IHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soYXR0cmlidXRlLm5hbWUsIHVuZGVmaW5lZCwgYXR0cmlidXRlLnZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIEF0dHJpYnV0ZU1hcnNoYWxsaW5nO1xufTtcblxuXG4vLyBDb252ZXJ0IGNhbWVsIGNhc2UgZm9vQmFyIG5hbWUgdG8gaHlwaGVuYXRlZCBmb28tYmFyLlxuZnVuY3Rpb24gYXR0cmlidXRlVG9Qcm9wZXJ0eU5hbWUoYXR0cmlidXRlTmFtZSkge1xuICBsZXQgcHJvcGVydHlOYW1lID0gYXR0cmlidXRlTmFtZS5yZXBsYWNlKC8tKFthLXpdKS9nLCBtID0+IG1bMV0udG9VcHBlckNhc2UoKSk7XG4gIHJldHVybiBwcm9wZXJ0eU5hbWU7XG59XG5cbi8vIENvbnZlcnQgaHlwaGVuYXRlZCBmb28tYmFyIG5hbWUgdG8gY2FtZWwgY2FzZSBmb29CYXIuXG4vLyBUT0RPOiBVc2UgdGhpcyB3aGVuIHdlIHN1cHBvcnQgcmVmbGVjdGlvbiBvZiBwcm9wZXJ0aWVzIHRvIGF0dHJpYnV0ZXMuXG4vLyBmdW5jdGlvbiBwcm9wZXJ0eVRvQXR0cmlidXRlTmFtZShwcm9wZXJ0eU5hbWUpIHtcbi8vICAgbGV0IGF0dHJpYnV0ZU5hbWUgPSBwcm9wZXJ0eU5hbWUucmVwbGFjZSgvKFthLXpdW0EtWl0pL2csIGcgPT4gZ1swXSArICctJyArIGdbMV0udG9Mb3dlckNhc2UoKSk7XG4vLyAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuLy8gfVxuIiwiLyoqXG4gKiBBIGdyb3VwIG9mIGVsZW1lbnRzIHRoYXQgaGF2ZSBiZWVuIGFzc29jaWF0ZWQgZm9yIHRoZSBwdXJwb3NlIG9mXG4gKiBhY2NvbXBsaXNoaW5nIHNvbWUgY29sbGVjdGl2ZSBiZWhhdmlvciwgZS5nLiwga2V5Ym9hcmQgaGFuZGxpbmcuXG4gKlxuICogVGhlcmUgYXJlIGNlcnRhaW4gY29tcG9uZW50cyB0aGF0IHdhbnQgdG8gY29vcGVyYXRpdmVseSBoYW5kbGUgdGhlIGtleWJvYXJkLlxuICogRm9yIGV4YW1wbGUsIHRoZSBiYXNpYy1hcnJvdy1zZWxlY3Rpb24gYW5kIGJhc2ljLXBhZ2UtZG90cyBjb21wb25lbnRzIGFyZVxuICogb3B0aW9uYWwgY29tcG9uZW50cyB0aGF0IGNhbiBhdWdtZW50IHRoZSBhcHBlYXJhbmNlIGFuZCBiZWhhdmlvciBvZiBhbiBpbm5lclxuICogYmFzaWMtY2Fyb3VzZWwsIGFkZGluZyBhcnJvdyBidXR0b25zIGFuZCBkb3QgYnV0dG9ucywgcmVzcGVjdGl2ZWx5LiBXaGVuXG4gKiB0aGVzZSBjb21wb25lbnRzIGFyZSBuZXN0ZWQgdG9nZXRoZXIsIHRoZXkgZm9ybSBhbiBpbXBsaWNpdCB1bml0IGNhbGxlZCBhXG4gKiAqY29sbGVjdGl2ZSo6XG4gKlxuICogICAgIDxiYXNpYy1hcnJvdy1zZWxlY3Rpb24+XG4gKiAgICAgICA8YmFzaWMtcGFnZS1kb3RzPlxuICogICAgICAgICA8YmFzaWMtY2Fyb3VzZWw+XG4gKiAgICAgICAgICAgLi4uIGltYWdlcywgZXRjLiAuLi5cbiAqICAgICAgICAgPC9iYXNpYy1jYXJvdXNlbD5cbiAqICAgICAgIDwvYmFzaWMtcGFnZS1kb3RzPlxuICogICAgIDwvYmFzaWMtYXJyb3ctc2VsZWN0aW9uPlxuICpcbiAqIEluIHRoaXMgY29uZmlndXJhdGlvbiwgdGhlIHRocmVlIGNvbXBvbmVudHMgd2lsbCBhbGwgaGF2ZSBhIGB0aGlzLmNvbGxlY3RpdmVgXG4gKiByZWZlcmVuY2UgdGhhdCByZWZlcnMgdG8gYSBzaGFyZWQgaW5zdGFuY2Ugb2YgdGhlIGBDb2xsZWN0aXZlYCBjbGFzcy5cbiAqXG4gKiBUaGUgW0tleWJvYXJkXShLZXlib2FyZC5tZCkgbWl4aW4gdGhleSB1c2UgaXMgc2Vuc2l0aXZlIHRvIHRoZSBwcmVzZW5jZSBvZlxuICogdGhlIGNvbGxlY3RpdmUuIEFtb25nIG90aGVyIHRoaW5ncywgaXQgd2lsbCBlbnN1cmUgdGhhdCBvbmx5IHRoZSBvdXRlcm1vc3RcbiAqIGVsZW1lbnQgYWJvdmUg4oCUwqB0aGUgYmFzaWMtYXJyb3ctc2VsZWN0aW9uIOKAlMKgd2lsbCBiZSBhIHRhYiBzdG9wIHRoYXQgY2FuXG4gKiByZWNlaXZlIHRoZSBrZXlib2FyZCBmb2N1cy4gVGhpcyBsZXRzIHRoZSB1c2VyIHBlcmNlaXZlIHRoZSBjb21wb25lbnRcbiAqIGFycmFuZ2VtZW50IGFib3ZlIGFzIGEgc2luZ2xlIHVuaXQuIFRoZSBLZXlib2FyZCBtaXhpbiB3aWxsIGFsc28gZ2l2ZSBlYWNoXG4gKiBlbGVtZW50IGluIHRoZSBjb2xsZWN0aXZlIGEgY2hhbmNlIHRvIHByb2Nlc3MgYW55IGtleWJvYXJkIGV2ZW50cy4gU28sIGV2ZW5cbiAqIHRob3VnaCB0aGUgYmFzaWMtYXJyb3ctc2VsZWN0aW9uIGVsZW1lbnQgd2lsbCBoYXZlIHRoZSBmb2N1cywgdGhlIHN0YW5kYXJkXG4gKiBrZXlib2FyZCBuYXZpZ2F0aW9uIHByb3ZpZGVkIGJ5IGJhc2ljLWNhcm91c2VsIHdpbGwgY29udGludWUgdG8gd29yay5cbiAqXG4gKiBUaGUgW1NlbGVjdGlvbkFyaWFBY3RpdmVdKFNlbGVjdGlvbkFyaWFBY3RpdmUubWQpIG1peGluIGFsc28gcmVzcGVjdHNcbiAqIGNvbGxlY3RpdmVzIHdoZW4gdXNpbmcgdGhlIGBhcmlhLWFjdGl2ZWRlc2NlbmRhbnRgIGFuZCBgcm9sZWAgYXR0cmlidXRlcy5cbiAqIFRob3NlIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgb3V0ZXJtb3N0IGVsZW1lbnQgKGJhc2ljLWFycm93LXNlbGVjdGlvbiwgYWJvdmUpXG4gKiBzbyB0aGF0IEFSSUEgY2FuIGNvcnJlY3RseSB1bmRlcnN0YW5kIHRoZSBhcnJhbmdlbWVudCBvZiB0aGUgZWxlbWVudHMuXG4gKlxuICogWW91IGNhbiBwdXQgZWxlbWVudHMgaW50byBjb2xsZWN0aXZlcyB5b3Vyc2VsZiwgb3IgeW91IGNhbiB1c2UgdGhlXG4gKiBbVGFyZ2V0SW5Db2xsZWN0aXZlXShUYXJnZXRJbkNvbGxlY3RpdmUubWQpIG1peGluLlxuICovXG5jbGFzcyBDb2xsZWN0aXZlIHtcblxuICAvKipcbiAgICogQ3JlYXRlIGEgY29sbGVjdGl2ZS5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRUxlbWVudFtdfSBbZWxlbWVudHNdIC0gSW5pdGlhbCBlbGVtZW50cyB0byBhZGQuXG4gICAqL1xuICBjb25zdHJ1Y3RvciguLi5lbGVtZW50cykge1xuICAgIC8qKlxuICAgICAqIFRoZSBlbGVtZW50cyBpbiB0aGUgY29sbGVjdGl2ZS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIHRoaXMuZWxlbWVudHMgPSBbXTtcbiAgICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4gdGhpcy5hc3NpbWlsYXRlKGVsZW1lbnQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgdGhlIGluZGljYXRlZCB0YXJnZXQgdG8gdGhlIGNvbGxlY3RpdmUuXG4gICAqXG4gICAqIEJ5IGNvbnZlbnRpb24sIGlmIHR3byBlbGVtZW50cyB3YW50cyB0byBwYXJ0aWNpcGF0ZSBpbiBhIGNvbGxlY3RpdmUsIGFuZFxuICAgKiBvbmUgZWxlbWVudCBpcyBhbiBhbmNlc3RvciBvZiB0aGUgb3RoZXIgaW4gdGhlIERPTSwgdGhlIGFuY2VzdG9yIHNob3VsZFxuICAgKiBhc3NpbWlsYXRlIHRoZSBkZXNjZW5kYW50IGluc3RlYWQgb2YgdGhlIG90aGVyIHdheSBhcm91bmQuXG4gICAqXG4gICAqIEFmdGVyIGFzc2ltaWxhdGlvbiwgYW55IGVsZW1lbnQgaW4gdGhlIGNvbGxlY3RpdmUgdGhhdCBkZWZpbmVzIGFcbiAgICogYGNvbGxlY3RpdmVDaGFuZ2VkYCBtZXRob2Qgd2lsbCBoYXZlIHRoYXQgbWV0aG9kIGludm9rZWQuIFRoaXMgYWxsb3dzXG4gICAqIHRoZSBjb2xsZWN0aXZlJ3MgZWxlbWVudHMgdG8gcmVzcG9uZCB0byBjaGFuZ2VzIGluIHRoZSBjb2xsZWN0aXZlLlxuICAgKlxuICAgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxDb2xsZWN0aXZlKX0gdGFyZ2V0IC0gVGhlIGVsZW1lbnQgb3IgY29sbGVjdGl2ZSB0byBhZGQuXG4gICAqL1xuICBhc3NpbWlsYXRlKHRhcmdldCkge1xuICAgIGxldCBjb2xsZWN0aXZlQ2hhbmdlZDtcbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgQ29sbGVjdGl2ZSkge1xuICAgICAgY29sbGVjdGl2ZUNoYW5nZWQgPSBhc3NpbWlsYXRlQ29sbGVjdGl2ZSh0aGlzLCB0YXJnZXQpO1xuICAgIH0gZWxzZSBpZiAodGFyZ2V0LmNvbGxlY3RpdmUpIHtcbiAgICAgIC8vIFRhcmdldCBpcyBhbHJlYWR5IHBhcnQgb2YgYSBjb2xsZWN0aXZlLCBhc3NpbWlsYXRlIGl0LlxuICAgICAgY29sbGVjdGl2ZUNoYW5nZWQgPSBhc3NpbWlsYXRlQ29sbGVjdGl2ZSh0aGlzLCB0YXJnZXQuY29sbGVjdGl2ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEFzc2ltaWxhdGUgYW4gaW5kaXZpZHVhbCBlbGVtZW50LlxuICAgICAgY29sbGVjdGl2ZUNoYW5nZWQgPSBhc3NpbWlsYXRlRWxlbWVudCh0aGlzLCB0YXJnZXQpO1xuICAgIH1cblxuICAgIGlmIChjb2xsZWN0aXZlQ2hhbmdlZCkge1xuICAgICAgdGhpcy5pbnZva2VNZXRob2QoJ2NvbGxlY3RpdmVDaGFuZ2VkJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEludm9rZSBhIG1ldGhvZCBvbiBhbGwgZWxlbWVudHMgaW4gdGhlIGNvbGxlY3RpdmUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2QgLSBUaGUgbmFtZSBvZiB0aGUgbWV0aG9kIHRvIGludm9rZSBvbiBhbGwgZWxlbWVudHMuXG4gICAqIEBwYXJhbSB7b2JqZWN0W119IFthcmdzXSAtIFRoZSBhcmd1bWVudHMgdG8gdGhlIG1ldGhvZFxuICAgKi9cbiAgaW52b2tlTWV0aG9kKG1ldGhvZCwgLi4uYXJncykge1xuICAgIC8vIEludm9rZSBmcm9tIGlubmVybW9zdCB0byBvdXRlcm1vc3QuXG4gICAgbGV0IGVsZW1lbnRzID0gdGhpcy5lbGVtZW50cztcbiAgICBmb3IgKGxldCBpID0gZWxlbWVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCBlbGVtZW50ID0gZWxlbWVudHNbaV07XG4gICAgICBpZiAoZWxlbWVudFttZXRob2RdKSB7XG4gICAgICAgIGVsZW1lbnRbbWV0aG9kXS5hcHBseShlbGVtZW50LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhlIG91dGVybW9zdCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aXZlLlxuICAgKiBCeSBjb252ZW50aW9uLCB0aGlzIGlzIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBgZWxlbWVudHNgIGFycmF5LlxuICAgKi9cbiAgZ2V0IG91dGVybW9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudHNbMF07XG4gIH1cblxufVxuXG5cbi8vIFRoZSBmaXJzdCBjb2xsZWN0aXZlIGFzc2ltaWxhdGVzIHRoZSBzZWNvbmQuXG5mdW5jdGlvbiBhc3NpbWlsYXRlQ29sbGVjdGl2ZShjb2xsZWN0aXZlMSwgY29sbGVjdGl2ZTIpIHtcbiAgaWYgKGNvbGxlY3RpdmUxID09PSBjb2xsZWN0aXZlMikge1xuICAgIC8vIENvbGxlY3RpdmVzIGFyZSBzYW1lOyBpZ25vcmUuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbGV0IGVsZW1lbnRzID0gY29sbGVjdGl2ZTIuZWxlbWVudHM7XG5cbiAgLy8gT2xkIGNvbGxlY3RpdmUgd2lsbCBubyBsb25nZXIgaGF2ZSBhbnkgZWxlbWVudHMgb2YgaXRzIG93bi5cbiAgY29sbGVjdGl2ZTIuZWxlbWVudHMgPSBbXTtcblxuICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGFzc2ltaWxhdGVFbGVtZW50KGNvbGxlY3RpdmUxLCBlbGVtZW50KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cblxuLy8gQXNzaW1pbGF0ZSB0aGUgaW5kaWNhdGVkIGVsZW1lbnQuXG5mdW5jdGlvbiBhc3NpbWlsYXRlRWxlbWVudChjb2xsZWN0aXZlLCBlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50LmNvbGxlY3RpdmUgPT09IGNvbGxlY3RpdmUpIHtcbiAgICAvLyBBbHJlYWR5IHBhcnQgb2YgdGhpcyBjb2xsZWN0aXZlLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBlbGVtZW50LmNvbGxlY3RpdmUgPSBjb2xsZWN0aXZlO1xuICBjb2xsZWN0aXZlLmVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gIHJldHVybiB0cnVlO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IENvbGxlY3RpdmU7XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIENvbXBvc2FibGUuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB0byBtYWtlIGEgY2xhc3MgbW9yZSBlYXNpbHkgY29tcG9zYWJsZSB3aXRoIG90aGVyIG1peGlucy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBjb250cmlidXRlcyBhIGBjb21wb3NlYCBtZXRob2QgdGhhdCBhcHBsaWVzIGEgc2V0IG9mIG1peGluXG4gICAqIGZ1bmN0aW9ucyBhbmQgcmV0dXJucyB0aGUgcmVzdWx0aW5nIG5ldyBjbGFzcy4gVGhpcyBzdWdhciBjYW4gbWFrZSB0aGVcbiAgICogYXBwbGljYXRpb24gb2YgbWFueSBtaXhpbnMgYXQgb25jZSBlYXNpZXIgdG8gcmVhZC5cbiAgICovXG4gIGNsYXNzIENvbXBvc2FibGUgZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qKlxuICAgICAqIEFwcGx5IGEgc2V0IG9mIG1peGluIGZ1bmN0aW9ucyBvciBtaXhpbiBvYmplY3RzIHRvIHRoZSBwcmVzZW50IGNsYXNzIGFuZFxuICAgICAqIHJldHVybiB0aGUgbmV3IGNsYXNzLlxuICAgICAqXG4gICAgICogSW5zdGVhZCBvZiB3cml0aW5nOlxuICAgICAqXG4gICAgICogICAgIGxldCBNeUNsYXNzID0gTWl4aW4xKE1peGluMihNaXhpbjMoTWl4aW40KE1peGluNShCYXNlQ2xhc3MpKSkpKTtcbiAgICAgKlxuICAgICAqIFlvdSBjYW4gd3JpdGU6XG4gICAgICpcbiAgICAgKiAgICAgbGV0IE15Q2xhc3MgPSBDb21wb3NhYmxlKEJhc2VDbGFzcykuY29tcG9zZShcbiAgICAgKiAgICAgICBNaXhpbjEsXG4gICAgICogICAgICAgTWl4aW4yLFxuICAgICAqICAgICAgIE1peGluMyxcbiAgICAgKiAgICAgICBNaXhpbjQsXG4gICAgICogICAgICAgTWl4aW41XG4gICAgICogICAgICk7XG4gICAgICpcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGNhbiBhbHNvIHRha2UgbWl4aW4gb2JqZWN0cy4gQSBtaXhpbiBvYmplY3QgaXMganVzdCBhXG4gICAgICogc2hvcnRoYW5kIGZvciBhIG1peGluIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIG5ldyBzdWJjbGFzcyB3aXRoIHRoZSBnaXZlblxuICAgICAqIG1lbWJlcnMuIFRoZSBtaXhpbiBvYmplY3QncyBtZW1iZXJzIGFyZSAqbm90KiBjb3BpZWQgZGlyZWN0bHkgb250byB0aGVcbiAgICAgKiBwcm90b3R5cGUgb2YgdGhlIGJhc2UgY2xhc3MsIGFzIHdpdGggdHJhZGl0aW9uYWwgbWl4aW5zLlxuICAgICAqXG4gICAgICogSW4gYWRkaXRpb24gdG8gcHJvdmlkaW5nIHN5bnRhY3RpYyBzdWdhciwgdGhpcyBtaXhpbiBjYW4gYmUgdXNlZCB0b1xuICAgICAqIGRlZmluZSBhIGNsYXNzIGluIEVTNSwgd2hpY2ggbGFja3MgRVM2J3MgYGNsYXNzYCBrZXl3b3JkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHsuLi5taXhpbnN9IG1peGlucyAtIEEgc2V0IG9mIG1peGluIGZ1bmN0aW9ucyBvciBvYmplY3RzIHRvIGFwcGx5LlxuICAgICAqL1xuICAgIHN0YXRpYyBjb21wb3NlKC4uLm1peGlucykge1xuICAgICAgLy8gV2UgY3JlYXRlIGEgbmV3IHN1YmNsYXNzIGZvciBlYWNoIG1peGluIGluIHR1cm4uIFRoZSByZXN1bHQgYmVjb21lc1xuICAgICAgLy8gdGhlIGJhc2UgY2xhc3MgZXh0ZW5kZWQgYnkgYW55IHN1YnNlcXVlbnQgbWl4aW5zLiBJdCB0dXJucyBvdXQgdGhhdFxuICAgICAgLy8gd2UgY2FuIHVzZSBBcnJheS5yZWR1Y2UoKSB0byBjb25jaXNlbHkgZXhwcmVzcyB0aGlzLCB1c2luZyB0aGUgY3VycmVudFxuICAgICAgLy8gb2JqZWN0IGFzIHRoZSBzZWVkIGZvciByZWR1Y2UoKS5cbiAgICAgIHJldHVybiBtaXhpbnMucmVkdWNlKGNvbXBvc2VDbGFzcywgdGhpcyk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gQ29tcG9zYWJsZTtcbn07XG5cblxuLy8gUHJvcGVydGllcyBkZWZpbmVkIGJ5IE9iamVjdCB0aGF0IHdlIGRvbid0IHdhbnQgdG8gbWl4aW4uXG5jb25zdCBOT05fTUlYQUJMRV9PQkpFQ1RfUFJPUEVSVElFUyA9IFtcbiAgJ2NvbnN0cnVjdG9yJ1xuXTtcblxuLypcbiAqIEFwcGx5IHRoZSBtaXhpbiB0byB0aGUgZ2l2ZW4gYmFzZSBjbGFzcyB0byByZXR1cm4gYSBuZXcgY2xhc3MuXG4gKiBUaGUgbWl4aW4gY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbW9kaWZpZWQgY2xhc3MsIG9yIGFcbiAqIHBsYWluIG9iamVjdCB3aG9zZSBtZW1iZXJzIHdpbGwgYmUgY29waWVkIHRvIHRoZSBuZXcgY2xhc3MnIHByb3RvdHlwZS5cbiAqL1xuZnVuY3Rpb24gY29tcG9zZUNsYXNzKGJhc2UsIG1peGluKSB7XG4gIGlmICh0eXBlb2YgbWl4aW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBNaXhpbiBmdW5jdGlvblxuICAgIHJldHVybiBtaXhpbihiYXNlKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBNaXhpbiBvYmplY3RcbiAgICBjbGFzcyBTdWJjbGFzcyBleHRlbmRzIGJhc2Uge31cbiAgICBjb3B5T3duUHJvcGVydGllcyhtaXhpbiwgU3ViY2xhc3MucHJvdG90eXBlLCBOT05fTUlYQUJMRV9PQkpFQ1RfUFJPUEVSVElFUyk7XG4gICAgcmV0dXJuIFN1YmNsYXNzO1xuICB9XG59XG5cblxuLypcbiAqIENvcHkgdGhlIGdpdmVuIHByb3BlcnRpZXMvbWV0aG9kcyB0byB0aGUgdGFyZ2V0LlxuICogUmV0dXJuIHRoZSB1cGRhdGVkIHRhcmdldC5cbiAqL1xuZnVuY3Rpb24gY29weU93blByb3BlcnRpZXMoc291cmNlLCB0YXJnZXQsIGlnbm9yZVByb3BlcnR5TmFtZXMgPSBbXSkge1xuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2UpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgaWYgKGlnbm9yZVByb3BlcnR5TmFtZXMuaW5kZXhPZihuYW1lKSA8IDApIHtcbiAgICAgIGxldCBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIG5hbWUpO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHRhcmdldDtcbn1cbiIsImltcG9ydCB0b2dnbGVDbGFzcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy90b2dnbGVDbGFzcyc7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBDb250ZW50QXNJdGVtcy4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIG1hcHMgY29udGVudCBzZW1hbnRpY3MgKGVsZW1lbnRzKSB0byBsaXN0IGl0ZW0gc2VtYW50aWNzLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgYSBjb21wb25lbnQgdG8gcHJvdmlkZSBhIGBjb250ZW50YCBwcm9wZXJ0eSByZXR1cm5pbmcgYVxuICAgKiByYXcgc2V0IG9mIGVsZW1lbnRzLiBZb3UgY2FuIHByb3ZpZGUgdGhhdCB5b3Vyc2VsZiwgb3IgdXNlIHRoZVxuICAgKiBbRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudF0oRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudC5tZCkgbWl4aW4uXG4gICAqXG4gICAqIEl0ZW1zIGRpZmZlciBmcm9tIGVsZW1lbnQgY29udGVudHMgaW4gc2V2ZXJhbCB3YXlzOlxuICAgKlxuICAgKiAqIFRoZXkgYXJlIG9mdGVuIHJlZmVyZW5jZWQgdmlhIGluZGV4LlxuICAgKiAqIFRoZXkgbWF5IGhhdmUgYSBzZWxlY3Rpb24gc3RhdGUuXG4gICAqICogSXQncyBjb21tb24gdG8gZG8gd29yayB0byBpbml0aWFsaXplIHRoZSBhcHBlYXJhbmNlIG9yIHN0YXRlIG9mIGEgbmV3XG4gICAqICAgaXRlbS5cbiAgICogKiBBdXhpbGlhcnkgaW52aXNpYmxlIGNoaWxkIGVsZW1lbnRzIGFyZSBmaWx0ZXJlZCBvdXQgYW5kIG5vdCBjb3VudGVkIGFzXG4gICAqICAgaXRlbXMuIEF1eGlsaWFyeSBlbGVtZW50cyBpbmNsdWRlIGxpbmssIHNjcmlwdCwgc3R5bGUsIGFuZCB0ZW1wbGF0ZVxuICAgKiAgIGVsZW1lbnRzLiBUaGlzIGZpbHRlcmluZyBlbnN1cmVzIHRoYXQgdGhvc2UgYXV4aWxpYXJ5IGVsZW1lbnRzIGNhbiBiZVxuICAgKiAgIHVzZWQgaW4gbWFya3VwIGluc2lkZSBvZiBhIGxpc3Qgd2l0aG91dCBiZWluZyB0cmVhdGVkIGFzIGxpc3QgaXRlbXMuXG4gICAqL1xuICBjbGFzcyBDb250ZW50QXNJdGVtcyBleHRlbmRzIGJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogQXBwbHkgdGhlIHNlbGVjdGlvbiBzdGF0ZSB0byBhIHNpbmdsZSBpdGVtLlxuICAgICAqXG4gICAgICogSW52b2tlIHRoaXMgbWV0aG9kIHRvIHNpZ25hbCB0aGF0IHRoZSBzZWxlY3RlZCBzdGF0ZSBvZiB0aGUgaW5kaWNhdGVkIGl0ZW1cbiAgICAgKiBoYXMgY2hhbmdlZC4gQnkgZGVmYXVsdCwgdGhpcyBhcHBsaWVzIGEgYHNlbGVjdGVkYCBDU1MgY2xhc3MgaWYgdGhlIGl0ZW1cbiAgICAgKiBpcyBzZWxlY3RlZCwgYW5kIHJlbW92ZWQgaXQgaWYgbm90IHNlbGVjdGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbSAtIFRoZSBpdGVtIHdob3NlIHNlbGVjdGlvbiBzdGF0ZSBoYXMgY2hhbmdlZC5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNlbGVjdGVkIC0gVHJ1ZSBpZiB0aGUgaXRlbSBpcyBzZWxlY3RlZCwgZmFsc2UgaWYgbm90LlxuICAgICAqL1xuICAgIGFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKSB7XG4gICAgICBpZiAoc3VwZXIuYXBwbHlTZWxlY3Rpb24pIHsgc3VwZXIuYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpOyB9XG4gICAgICB0b2dnbGVDbGFzcyhpdGVtLCAnc2VsZWN0ZWQnLCBzZWxlY3RlZCk7XG4gICAgfVxuXG4gICAgY29udGVudENoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuY29udGVudENoYW5nZWQpIHsgc3VwZXIuY29udGVudENoYW5nZWQoKTsgfVxuICAgICAgdGhpcy5faXRlbXMgPSBudWxsO1xuICAgICAgdGhpcy5pdGVtc0NoYW5nZWQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW5ldmVyIGEgbmV3IGl0ZW0gaXMgYWRkZWQgdG8gdGhlIGxpc3QuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuIFlvdSBjYW4gb3ZlcnJpZGVcbiAgICAgKiB0aGlzIHRvIHBlcmZvcm0gcGVyLWl0ZW0gaW5pdGlhbGl6YXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gVGhlIGl0ZW0gdGhhdCB3YXMgYWRkZWQuXG4gICAgICovXG4gICAgaXRlbUFkZGVkKGl0ZW0pIHtcbiAgICAgIGlmIChzdXBlci5pdGVtQWRkZWQpIHsgc3VwZXIuaXRlbUFkZGVkKGl0ZW0pOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgc2V0IG9mIGl0ZW1zIGluIHRoZSBsaXN0LiBTZWUgdGhlIHRvcC1sZXZlbCBkb2N1bWVudGF0aW9uIGZvclxuICAgICAqIG1peGluIGZvciBhIGRlc2NyaXB0aW9uIG9mIGhvdyBpdGVtcyBkaWZmZXIgZnJvbSBwbGFpbiBjb250ZW50LlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50W119XG4gICAgICovXG4gICAgZ2V0IGl0ZW1zKCkge1xuICAgICAgaWYgKHRoaXMuX2l0ZW1zID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5faXRlbXMgPSBmaWx0ZXJBdXhpbGlhcnlFbGVtZW50cyh0aGlzLmNvbnRlbnQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiB0aGUgdW5kZXJseWluZyBjb250ZW50cyBjaGFuZ2UuIEl0IGlzIGFsc29cbiAgICAgKiBpbnZva2VkIG9uIGNvbXBvbmVudCBpbml0aWFsaXphdGlvbiDigJMgc2luY2UgdGhlIGl0ZW1zIGhhdmUgXCJjaGFuZ2VkXCIgZnJvbVxuICAgICAqIGJlaW5nIG5vdGhpbmcuXG4gICAgICovXG4gICAgaXRlbXNDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLml0ZW1zQ2hhbmdlZCkgeyBzdXBlci5pdGVtc0NoYW5nZWQoKTsgfVxuXG4gICAgICAvLyBQZXJmb3JtIHBlci1pdGVtIGluaXRpYWxpemF0aW9uLlxuICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoIWl0ZW0uX2l0ZW1Jbml0aWFsaXplZCkge1xuICAgICAgICAgIHRoaXMuaXRlbUFkZGVkKGl0ZW0pO1xuICAgICAgICAgIGl0ZW0uX2l0ZW1Jbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdpdGVtcy1jaGFuZ2VkJykpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQGV2ZW50IGl0ZW1zLWNoYW5nZWRcbiAgICAgKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgcmFpc2VkIHdoZW4gdGhlIHNldCBvZiBpdGVtcyBjaGFuZ2VzLlxuICAgICAqL1xuICB9XG5cbiAgcmV0dXJuIENvbnRlbnRBc0l0ZW1zO1xufTtcblxuXG4vLyBSZXR1cm4gdGhlIGdpdmVuIGVsZW1lbnRzLCBmaWx0ZXJpbmcgb3V0IGF1eGlsaWFyeSBlbGVtZW50cyB0aGF0IGFyZW4ndFxuLy8gdHlwaWNhbGx5IHZpc2libGUuIEl0ZW1zIHdoaWNoIGFyZSBub3QgZWxlbWVudHMgYXJlIHJldHVybmVkIGFzIGlzLlxuZnVuY3Rpb24gZmlsdGVyQXV4aWxpYXJ5RWxlbWVudHMoaXRlbXMpIHtcbiAgbGV0IGF1eGlsaWFyeVRhZ3MgPSBbXG4gICAgJ2xpbmsnLFxuICAgICdzY3JpcHQnLFxuICAgICdzdHlsZScsXG4gICAgJ3RlbXBsYXRlJ1xuICBdO1xuICByZXR1cm4gW10uZmlsdGVyLmNhbGwoaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gIWl0ZW0ubG9jYWxOYW1lIHx8IGF1eGlsaWFyeVRhZ3MuaW5kZXhPZihpdGVtLmxvY2FsTmFtZSkgPCAwO1xuICB9KTtcbn1cblxuXG4vKipcbiAqIEZpcmVzIHdoZW4gdGhlIGl0ZW1zIGluIHRoZSBsaXN0IGNoYW5nZS5cbiAqXG4gKiBAbWVtYmVyb2YgQ29udGVudEFzSXRlbXNcbiAqIEBldmVudCBpdGVtcy1jaGFuZ2VkXG4gKi9cbiIsIi8vIFRPRE86IFJhdGlvbmFsaXplIHdpdGggbmV3IEN1c3RvbSBFbGVtZW50cyBBUEkuXG4vLyBUT0RPOiBDb25zaWRlciByZW5hbWluZyB0byBtYXRjaCBDdXN0b20gRWxlbWVudHMgQVBJLlxuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggRGlzdHJpYnV0ZWRDaGlsZHJlbi4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIGRlZmluZXMgaGVscGVycyBmb3IgYWNjZXNzaW5nIGEgY29tcG9uZW50J3MgZGlzdHJpYnV0ZWRcbiAgICogY2hpbGRyZW4gYXMgYSBmbGF0dGVuZWQgYXJyYXkgb3Igc3RyaW5nLlxuICAgKlxuICAgKiBUaGUgc3RhbmRhcmQgRE9NIEFQSSBwcm92aWRlcyBzZXZlcmFsIHdheXMgb2YgYWNjZXNzaW5nIGNoaWxkIGNvbnRlbnQ6XG4gICAqIGBjaGlsZHJlbmAsIGBjaGlsZE5vZGVzYCwgYW5kIGB0ZXh0Q29udGVudGAuIE5vbmUgb2YgdGhlc2UgZnVuY3Rpb25zIGFyZVxuICAgKiBTaGFkb3cgRE9NIGF3YXJlLiBUaGlzIG1peGluIGRlZmluZXMgdmFyaWF0aW9ucyBvZiB0aG9zZSBmdW5jdGlvbnMgdGhhdFxuICAgKiAqYXJlKiBTaGFkb3cgRE9NIGF3YXJlLlxuICAgKlxuICAgKiBFeGFtcGxlOiB5b3UgY3JlYXRlIGEgY29tcG9uZW50IGA8Y291bnQtY2hpbGRyZW4+YCB0aGF0IGRpc3BsYXlzIGEgbnVtYmVyXG4gICAqIGVxdWFsIHRvIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gcGxhY2VkIGluc2lkZSB0aGF0IGNvbXBvbmVudC4gSWYgc29tZW9uZVxuICAgKiBpbnN0YW50aWF0ZXMgeW91ciBjb21wb25lbnQgbGlrZTpcbiAgICpcbiAgICogICAgIDxjb3VudC1jaGlsZHJlbj5cbiAgICogICAgICAgPGRpdj48L2Rpdj5cbiAgICogICAgICAgPGRpdj48L2Rpdj5cbiAgICogICAgICAgPGRpdj48L2Rpdj5cbiAgICogICAgIDwvY291bnQtY2hpbGRyZW4+XG4gICAqXG4gICAqIFRoZW4gdGhlIGNvbXBvbmVudCBzaG91bGQgc2hvdyBcIjNcIiwgYmVjYXVzZSB0aGVyZSBhcmUgdGhyZWUgY2hpbGRyZW4uIFRvXG4gICAqIGNhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuLCB0aGUgY29tcG9uZW50IGNhbiBqdXN0IGNhbGN1bGF0ZVxuICAgKiBgdGhpcy5jaGlsZHJlbi5sZW5ndGhgLiBIb3dldmVyLCBzdXBwb3NlIHNvbWVvbmUgaW5zdGFudGlhdGVzIHlvdXJcbiAgICogY29tcG9uZW50IGluc2lkZSBvbmUgb2YgdGhlaXIgb3duIGNvbXBvbmVudHMsIGFuZCBwdXRzIGEgYDxzbG90PmAgZWxlbWVudFxuICAgKiBpbnNpZGUgeW91ciBjb21wb25lbnQ6XG4gICAqXG4gICAqICAgICA8Y291bnQtY2hpbGRyZW4+XG4gICAqICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICogICAgIDwvY291bnQtY2hpbGRyZW4+XG4gICAqXG4gICAqIElmIHlvdXIgY29tcG9uZW50IG9ubHkgbG9va3MgYXQgYHRoaXMuY2hpbGRyZW5gLCBpdCB3aWxsIGFsd2F5cyBzZWUgZXhhY3RseVxuICAgKiBvbmUgY2hpbGQg4oCUwqB0aGUgYDxzbG90PmAgZWxlbWVudC4gQnV0IHRoZSB1c2VyIGxvb2tpbmcgYXQgdGhlIHBhZ2Ugd2lsbFxuICAgKiAqc2VlKiBhbnkgbm9kZXMgZGlzdHJpYnV0ZWQgdG8gdGhhdCBzbG90LiBUbyBtYXRjaCB3aGF0IHRoZSB1c2VyIHNlZXMsIHlvdXJcbiAgICogY29tcG9uZW50IHNob3VsZCBleHBhbmQgYW55IGA8c2xvdD5gIGVsZW1lbnRzIGl0IGNvbnRhaW5zLlxuICAgKlxuICAgKiBUaGF0IGlzIHRoZSBwcm9ibGVtIHRoaXMgbWl4aW4gc29sdmVzLiBBZnRlciBhcHBseWluZyB0aGlzIG1peGluLCB5b3VyXG4gICAqIGNvbXBvbmVudCBjb2RlIGhhcyBhY2Nlc3MgdG8gYHRoaXMuZGlzdHJpYnV0ZWRDaGlsZHJlbmAsIHdob3NlIGBsZW5ndGhgXG4gICAqIHdpbGwgcmV0dXJuIHRoZSB0b3RhbCBudW1iZXIgb2YgYWxsIGNoaWxkcmVuIGRpc3RyaWJ1dGVkIHRvIHlvdXIgY29tcG9uZW50XG4gICAqIGluIHRoZSBjb21wb3NlZCB0cmVlLlxuICAgKlxuICAgKiBOb3RlOiBUaGUgbGF0ZXN0IEN1c3RvbSBFbGVtZW50cyBBUEkgZGVzaWduIGNhbGxzIGZvciBhIG5ldyBmdW5jdGlvbixcbiAgICogYGdldEFzc2lnbmVkTm9kZXNgIHRoYXQgdGFrZXMgYW4gb3B0aW9uYWwgYGRlZXBgIHBhcmFtZXRlciwgdGhhdCB3aWxsIHNvbHZlXG4gICAqIHRoaXMgcHJvYmxlbSBhdCB0aGUgQVBJIGxldmVsLlxuICAgKi9cbiAgY2xhc3MgRGlzdHJpYnV0ZWRDaGlsZHJlbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogQW4gaW4tb3JkZXIgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgZXhwYW5kaW5nIGFueSBzbG90IGVsZW1lbnRzLiBMaWtlIHRoZVxuICAgICAqIHN0YW5kYXJkIGNoaWxkcmVuIHByb3BlcnR5LCB0aGlzIHNraXBzIHRleHQgbm9kZXMuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX1cbiAgICAgKi9cbiAgICBnZXQgZGlzdHJpYnV0ZWRDaGlsZHJlbigpIHtcbiAgICAgIHJldHVybiBleHBhbmRDb250ZW50RWxlbWVudHModGhpcy5jaGlsZHJlbiwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIGluLW9yZGVyIGNvbGxlY3Rpb24gb2YgY2hpbGQgbm9kZXMsIGV4cGFuZGluZyBhbnkgc2xvdCBlbGVtZW50cy4gTGlrZVxuICAgICAqIHRoZSBzdGFuZGFyZCBjaGlsZE5vZGVzIHByb3BlcnR5LCB0aGlzIGluY2x1ZGVzIHRleHQgbm9kZXMuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Tm9kZVtdfVxuICAgICAqL1xuICAgIGdldCBkaXN0cmlidXRlZENoaWxkTm9kZXMoKSB7XG4gICAgICByZXR1cm4gZXhwYW5kQ29udGVudEVsZW1lbnRzKHRoaXMuY2hpbGROb2RlcywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbmNhdGVuYXRlZCB0ZXh0IGNvbnRlbnQgb2YgYWxsIGNoaWxkIG5vZGVzLCBleHBhbmRpbmcgYW55IHNsb3RcbiAgICAgKiBlbGVtZW50cy5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0IGRpc3RyaWJ1dGVkVGV4dENvbnRlbnQoKSB7XG4gICAgICBsZXQgc3RyaW5ncyA9IHRoaXMuZGlzdHJpYnV0ZWRDaGlsZE5vZGVzLm1hcChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgICByZXR1cm4gY2hpbGQudGV4dENvbnRlbnQ7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzdHJpbmdzLmpvaW4oJycpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIERpc3RyaWJ1dGVkQ2hpbGRyZW47XG59O1xuXG5cbi8qXG4gKiBHaXZlbiBhIGFycmF5IG9mIG5vZGVzLCByZXR1cm4gYSBuZXcgYXJyYXkgd2l0aCBhbnkgY29udGVudCBlbGVtZW50cyBleHBhbmRlZFxuICogdG8gdGhlIG5vZGVzIGRpc3RyaWJ1dGVkIHRvIHRoYXQgY29udGVudCBlbGVtZW50LiBUaGlzIHJ1bGUgaXMgYXBwbGllZFxuICogcmVjdXJzaXZlbHkuXG4gKlxuICogSWYgaW5jbHVkZVRleHROb2RlcyBpcyB0cnVlLCB0ZXh0IG5vZGVzIHdpbGwgYmUgaW5jbHVkZWQsIGFzIGluIHRoZVxuICogc3RhbmRhcmQgY2hpbGROb2RlcyBwcm9wZXJ0eTsgYnkgZGVmYXVsdCwgdGhpcyBza2lwcyB0ZXh0IG5vZGVzLCBsaWtlIHRoZVxuICogc3RhbmRhcmQgY2hpbGRyZW4gcHJvcGVydHkuXG4gKi9cbmZ1bmN0aW9uIGV4cGFuZENvbnRlbnRFbGVtZW50cyhub2RlcywgaW5jbHVkZVRleHROb2Rlcykge1xuICBsZXQgZXhwYW5kZWQgPSBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwobm9kZXMsIG5vZGUgPT4ge1xuICAgIC8vIFdlIHdhbnQgdG8gc2VlIGlmIHRoZSBub2RlIGlzIGFuIGluc3RhbmNlb2YgSFRNTFNsb3RFTGVtZW50LCBidXRcbiAgICAvLyB0aGF0IGNsYXNzIHdvbid0IGV4aXN0IGlmIHRoZSBicm93c2VyIHRoYXQgZG9lc24ndCBzdXBwb3J0IG5hdGl2ZVxuICAgIC8vIFNoYWRvdyBET00gYW5kIGlmIHRoZSBTaGFkb3cgRE9NIHBvbHlmaWxsIGhhc24ndCBiZWVuIGxvYWRlZC4gSW5zdGVhZCxcbiAgICAvLyB3ZSBkbyBhIHNpbXBsaXN0aWMgY2hlY2sgdG8gc2VlIGlmIHRoZSB0YWcgbmFtZSBpcyBcInNsb3RcIiBvciBcImNvbnRlbnRcIi5cbiAgICBpZiAobm9kZS5sb2NhbE5hbWUgJiYgKG5vZGUubG9jYWxOYW1lID09PSBcInNsb3RcIiB8fCBub2RlLmxvY2FsTmFtZSA9PT0gXCJjb250ZW50XCIpKSB7XG4gICAgICAvLyBjb250ZW50IGVsZW1lbnQ7IHVzZSBpdHMgZGlzdHJpYnV0ZWQgbm9kZXMgaW5zdGVhZC5cbiAgICAgIGxldCBkaXN0cmlidXRlZE5vZGVzID0gbm9kZS5nZXREaXN0cmlidXRlZE5vZGVzKCk7XG4gICAgICByZXR1cm4gZGlzdHJpYnV0ZWROb2RlcyA/XG4gICAgICAgIGV4cGFuZENvbnRlbnRFbGVtZW50cyhkaXN0cmlidXRlZE5vZGVzLCBpbmNsdWRlVGV4dE5vZGVzKSA6XG4gICAgICAgIFtdO1xuICAgIH0gZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAvLyBQbGFpbiBlbGVtZW50OyB1c2UgYXMgaXMuXG4gICAgICByZXR1cm4gW25vZGVdO1xuICAgIH0gZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIFRleHQgJiYgaW5jbHVkZVRleHROb2Rlcykge1xuICAgICAgLy8gVGV4dCBub2RlLlxuICAgICAgcmV0dXJuIFtub2RlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ29tbWVudCwgcHJvY2Vzc2luZyBpbnN0cnVjdGlvbiwgZXRjLjsgc2tpcC5cbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH0pO1xuICBsZXQgZmxhdHRlbmVkID0gW10uY29uY2F0KC4uLmV4cGFuZGVkKTtcbiAgcmV0dXJuIGZsYXR0ZW5lZDtcbn1cbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudC4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIGRlZmluZXMgYSBjb21wb25lbnQncyBjb250ZW50IGFzIGl0cyBjaGlsZHJlbiwgZXhwYW5kaW5nIGFueVxuICAgKiBub2RlcyBkaXN0cmlidXRlZCB0byB0aGUgY29tcG9uZW50J3Mgc2xvdHMuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaXMgaW50ZW5kZWQgZm9yIHVzZSB3aXRoIHRoZVxuICAgKiBbRGlzdHJpYnV0ZWRDaGlsZHJlbl0oRGlzdHJpYnV0ZWRDaGlsZHJlbi5tZCkgbWl4aW4uIFNlZSB0aGF0IG1peGluIGZvciBhXG4gICAqIGRpc2N1c3Npb24gb2YgaG93IHRoYXQgd29ya3MuIFRoaXMgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCBtaXhpblxuICAgKiBwcm92aWRlcyBhbiBlYXN5IHdheSBvZiBkZWZpbmluZyB0aGUgXCJjb250ZW50XCIgb2YgYSBjb21wb25lbnQgYXMgdGhlXG4gICAqIGNvbXBvbmVudCdzIGRpc3RyaWJ1dGVkIGNoaWxkcmVuLiBUaGF0IGluIHR1cm4gbGV0cyBtaXhpbnMgbGlrZVxuICAgKiBbQ29udGVudEFzSXRlbXNdKENvbnRlbnRBc0l0ZW1zLm1kKSBtYW5pcHVsYXRlIHRoZSBjaGlsZHJlbiBhcyBsaXN0IGl0ZW1zLlxuICAgKi9cbiAgY2xhc3MgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCBleHRlbmRzIGJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbnRlbnQgb2YgdGhpcyBjb21wb25lbnQsIGRlZmluZWQgdG8gYmUgdGhlIGZsYXR0ZW5lZCBhcnJheSBvZlxuICAgICAqIGNoaWxkcmVuIGRpc3RyaWJ1dGVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX1cbiAgICAgKi9cbiAgICBnZXQgY29udGVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmRpc3RyaWJ1dGVkQ2hpbGRyZW47XG4gICAgfVxuICAgIHNldCBjb250ZW50KHZhbHVlKSB7XG4gICAgICBpZiAoJ2NvbnRlbnQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmNvbnRlbnQgPSB2YWx1ZTsgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQ7XG59O1xuIiwiaW1wb3J0IG1pY3JvdGFzayBmcm9tICcuL21pY3JvdGFzayc7XG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggSXRlbXNTZWxlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYW5hZ2VzIHNpbmdsZS1zZWxlY3Rpb24gc2VtYW50aWNzIGZvciBpdGVtcyBpbiBhIGxpc3QuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIGNvbXBvbmVudCB0byBwcm92aWRlIGFuIGBpdGVtc2AgYXJyYXkgb2YgYWxsIGVsZW1lbnRzXG4gICAqIGluIHRoZSBsaXN0LiBBIHN0YW5kYXJkIHdheSB0byBkbyB0aGF0IHdpdGggaXMgdGhlXG4gICAqIFtDb250ZW50QXNJdGVtc10oQ29udGVudEFzSXRlbXMubWQpIG1peGluLCB3aGljaCB0YWtlcyBhIGNvbXBvbmVudCdzXG4gICAqIGNvbnRlbnQgKHR5cGljYWxseSBpdHMgZGlzdHJpYnV0ZWQgY2hpbGRyZW4pIGFzIHRoZSBzZXQgb2YgbGlzdCBpdGVtczsgc2VlXG4gICAqIHRoYXQgbWl4aW4gZm9yIGRldGFpbHMuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gdHJhY2tzIGEgc2luZ2xlIHNlbGVjdGVkIGl0ZW0gaW4gdGhlIGxpc3QsIGFuZCBwcm92aWRlcyBtZWFucyB0b1xuICAgKiBnZXQgYW5kIHNldCB0aGF0IHN0YXRlIGJ5IGl0ZW0gcG9zaXRpb24gKGBzZWxlY3RlZEluZGV4YCkgb3IgaXRlbSBpZGVudGl0eVxuICAgKiAoYHNlbGVjdGVkSXRlbWApLiBUaGUgc2VsZWN0aW9uIGNhbiBiZSBtb3ZlZCBpbiB0aGUgbGlzdCB2aWEgdGhlIG1ldGhvZHNcbiAgICogYHNlbGVjdEZpcnN0YCwgYHNlbGVjdExhc3RgLCBgc2VsZWN0TmV4dGAsIGFuZCBgc2VsZWN0UHJldmlvdXNgLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGRvZXMgbm90IHByb2R1Y2UgYW55IHVzZXItdmlzaWJsZSBlZmZlY3RzIHRvIHJlcHJlc2VudFxuICAgKiBzZWxlY3Rpb24uIE90aGVyIG1peGlucywgc3VjaCBhc1xuICAgKiBbU2VsZWN0aW9uQXJpYUFjdGl2ZV0oU2VsZWN0aW9uQXJpYUFjdGl2ZS5tZCksXG4gICAqIFtTZWxlY3Rpb25IaWdobGlnaHRdKFNlbGVjdGlvbkhpZ2hsaWdodC5tZCkgYW5kXG4gICAqIFtTZWxlY3Rpb25JblZpZXddKFNlbGVjdGlvbkluVmlldy5tZCksIG1vZGlmeSB0aGUgc2VsZWN0ZWQgaXRlbSBpbiBjb21tb25cbiAgICogd2F5cyB0byBsZXQgdGhlIHVzZXIga25vdyBhIGdpdmVuIGl0ZW0gaXMgc2VsZWN0ZWQgb3Igbm90IHNlbGVjdGVkLlxuICAgKi9cbiAgY2xhc3MgSXRlbXNTZWxlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qKlxuICAgICAqIEFwcGx5IHRoZSBpbmRpY2F0ZSBzZWxlY3Rpb24gc3RhdGUgdG8gdGhlIGl0ZW0uXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuIFVzZXItdmlzaWJsZVxuICAgICAqIGVmZmVjdHMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gdGhlIGl0ZW0gYmVpbmcgc2VsZWN0ZWQvZGVzZWxlY3RlZFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2VsZWN0ZWQgLSB0cnVlIGlmIHRoZSBpdGVtIGlzIHNlbGVjdGVkLCBmYWxzZSBpZiBub3RcbiAgICAgKi9cbiAgICBhcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCkge1xuICAgICAgaWYgKHN1cGVyLmFwcGx5U2VsZWN0aW9uKSB7IHN1cGVyLmFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIHNlbGVjdGlvbiBjYW4gYmUgbW92ZWQgdG8gdGhlIG5leHQgaXRlbSwgZmFsc2UgaWYgbm90ICh0aGVcbiAgICAgKiBzZWxlY3RlZCBpdGVtIGlzIHRoZSBsYXN0IGl0ZW0gaW4gdGhlIGxpc3QpLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgZ2V0IGNhblNlbGVjdE5leHQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY2FuU2VsZWN0TmV4dDtcbiAgICB9XG4gICAgc2V0IGNhblNlbGVjdE5leHQoY2FuU2VsZWN0TmV4dCkge1xuICAgICAgaWYgKCdjYW5TZWxlY3ROZXh0JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5jYW5TZWxlY3ROZXh0ID0gY2FuU2VsZWN0TmV4dDsgfVxuICAgICAgdGhpcy5fY2FuU2VsZWN0TmV4dCA9IGNhblNlbGVjdE5leHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgc2VsZWN0aW9uIGNhbiBiZSBtb3ZlZCB0byB0aGUgcHJldmlvdXMgaXRlbSwgZmFsc2UgaWYgbm90XG4gICAgICogKHRoZSBzZWxlY3RlZCBpdGVtIGlzIHRoZSBmaXJzdCBvbmUgaW4gdGhlIGxpc3QpLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgZ2V0IGNhblNlbGVjdFByZXZpb3VzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NhblNlbGVjdFByZXZpb3VzO1xuICAgIH1cbiAgICBzZXQgY2FuU2VsZWN0UHJldmlvdXMoY2FuU2VsZWN0UHJldmlvdXMpIHtcbiAgICAgIGlmICgnY2FuU2VsZWN0UHJldmlvdXMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmNhblNlbGVjdFByZXZpb3VzID0gY2FuU2VsZWN0UHJldmlvdXM7IH1cbiAgICAgIHRoaXMuX2NhblNlbGVjdFByZXZpb3VzID0gY2FuU2VsZWN0UHJldmlvdXM7XG4gICAgfVxuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuXG4gICAgICAvLyBTZXQgZGVmYXVsdHMuXG4gICAgICBpZiAodGhpcy5zZWxlY3Rpb25SZXF1aXJlZCA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uUmVxdWlyZWQgPSB0aGlzLmRlZmF1bHRzLnNlbGVjdGlvblJlcXVpcmVkO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uV3JhcHMgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbldyYXBzID0gdGhpcy5kZWZhdWx0cy5zZWxlY3Rpb25XcmFwcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgZGVmYXVsdHMoKSB7XG4gICAgICBsZXQgZGVmYXVsdHMgPSBzdXBlci5kZWZhdWx0cyB8fCB7fTtcbiAgICAgIGRlZmF1bHRzLnNlbGVjdGlvblJlcXVpcmVkID0gZmFsc2U7XG4gICAgICBkZWZhdWx0cy5zZWxlY3Rpb25XcmFwcyA9IGZhbHNlO1xuICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBhIG5ldyBpdGVtIGJlaW5nIGFkZGVkIHRvIHRoZSBsaXN0LlxuICAgICAqXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2Qgc2ltcGx5IHNldHMgdGhlIGl0ZW0nc1xuICAgICAqIHNlbGVjdGlvbiBzdGF0ZSB0byBmYWxzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW0gLSB0aGUgaXRlbSBiZWluZyBhZGRlZFxuICAgICAqL1xuICAgIGl0ZW1BZGRlZChpdGVtKSB7XG4gICAgICBpZiAoc3VwZXIuaXRlbUFkZGVkKSB7IHN1cGVyLml0ZW1BZGRlZChpdGVtKTsgfVxuICAgICAgdGhpcy5hcHBseVNlbGVjdGlvbihpdGVtLCBpdGVtID09PSB0aGlzLnNlbGVjdGVkSXRlbSk7XG4gICAgfVxuXG4gICAgaXRlbXNDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLml0ZW1zQ2hhbmdlZCkgeyBzdXBlci5pdGVtc0NoYW5nZWQoKTsgfVxuXG4gICAgICBpZiAodGhpcy5zZWxlY3Rpb25SZXF1aXJlZCkge1xuICAgICAgICAvLyBFbnN1cmUgc2VsZWN0aW9uLCBidXQgZG8gdGhpcyBpbiB0aGUgbmV4dCB0aWNrIHRvIGdpdmUgb3RoZXIgbWl4aW5zIGFcbiAgICAgICAgLy8gY2hhbmNlIHRvIGRvIHRoZWlyIG93biBpdGVtc0NoYW5nZWQgd29yay5cbiAgICAgICAgbWljcm90YXNrKCgpID0+IHtcbiAgICAgICAgICBlbnN1cmVTZWxlY3Rpb24odGhpcyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY2hhbmdlIGluIGl0ZW1zIG1heSBoYXZlIGFmZmVjdGVkIHdoaWNoIG5hdmlnYXRpb25zIGFyZSBwb3NzaWJsZS5cbiAgICAgIHVwZGF0ZVBvc3NpYmxlTmF2aWdhdGlvbnModGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGluZGV4IG9mIHRoZSBpdGVtIHdoaWNoIGlzIGN1cnJlbnRseSBzZWxlY3RlZC5cbiAgICAgKlxuICAgICAqIElmIGBzZWxlY3Rpb25XcmFwc2AgaXMgZmFsc2UsIHRoZSBpbmRleCBpcyAtMSBpZiB0aGVyZSBpcyBubyBzZWxlY3Rpb24uXG4gICAgICogSW4gdGhhdCBjYXNlLCBzZXR0aW5nIHRoZSBpbmRleCB0byAtMSB3aWxsIGRlc2VsZWN0IGFueVxuICAgICAqIGN1cnJlbnRseS1zZWxlY3RlZCBpdGVtLlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICAgIGxldCBzZWxlY3RlZEl0ZW0gPSB0aGlzLnNlbGVjdGVkSXRlbTtcblxuICAgICAgLy8gVE9ETzogSWYgc2VsZWN0aW9uIHdhc24ndCBmb3VuZCwgbW9zdCBsaWtlbHkgY2F1c2UgaXMgdGhhdCB0aGUgRE9NIHdhc1xuICAgICAgLy8gbWFuaXB1bGF0ZWQgZnJvbSB1bmRlcm5lYXRoIHVzLiBPbmNlIHdlIHRyYWNrIGNvbnRlbnQgY2hhbmdlcywgdHVyblxuICAgICAgLy8gdGhpcyBpbnRvIGEgd2FybmluZy5cbiAgICAgIC8vIFRPRE86IE1lbW9pemVcbiAgICAgIHJldHVybiBzZWxlY3RlZEl0ZW0gP1xuICAgICAgICB0aGlzLml0ZW1zLmluZGV4T2Yoc2VsZWN0ZWRJdGVtKSA6XG4gICAgICAgIC0xO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRJbmRleChpbmRleCkge1xuICAgICAgaWYgKCdzZWxlY3RlZEluZGV4JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEluZGV4ID0gaW5kZXg7IH1cbiAgICAgIGxldCBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgICBsZXQgaXRlbTtcbiAgICAgIGlmIChpbmRleCA8IDAgfHwgaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGl0ZW0gPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbSA9IGl0ZW1zW2luZGV4XTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcblxuICAgICAgbGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdzZWxlY3RlZC1pbmRleC1jaGFuZ2VkJywge1xuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICBzZWxlY3RlZEluZGV4OiBpbmRleCxcbiAgICAgICAgICB2YWx1ZTogaW5kZXggLy8gZm9yIFBvbHltZXIgYmluZGluZ1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtLCBvciBudWxsIGlmIHRoZXJlIGlzIG5vIHNlbGVjdGlvbi5cbiAgICAgKlxuICAgICAqIFNldHRpbmcgdGhpcyBwcm9wZXJ0eSB0byBudWxsIGRlc2VsZWN0cyBhbnkgY3VycmVudGx5LXNlbGVjdGVkIGl0ZW0uXG4gICAgICpcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJdGVtIHx8IG51bGw7XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEl0ZW0oaXRlbSkge1xuICAgICAgaWYgKCdzZWxlY3RlZEl0ZW0nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSXRlbSA9IGl0ZW07IH1cbiAgICAgIGxldCBwcmV2aW91c0l0ZW0gPSB0aGlzLl9zZWxlY3RlZEl0ZW07XG4gICAgICBpZiAocHJldmlvdXNJdGVtKSB7XG4gICAgICAgIGlmIChpdGVtID09PSBwcmV2aW91c0l0ZW0pIHtcbiAgICAgICAgICAvLyBUaGUgaW5kaWNhdGVkIGl0ZW0gaXMgYWxyZWFkeSB0aGUgc2VsZWN0ZWQgaXRlbS5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlIHByZXZpb3VzIHNlbGVjdGlvbi5cbiAgICAgICAgdGhpcy5hcHBseVNlbGVjdGlvbihwcmV2aW91c0l0ZW0sIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgLy8gVE9ETzogQ29uZmlybSBpdGVtIGlzIGFjdHVhbGx5IGluIHRoZSBsaXN0IGJlZm9yZSBzZWxlY3RpbmcuXG4gICAgICB0aGlzLl9zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5hcHBseVNlbGVjdGlvbihpdGVtLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgLy8gVE9ETzogUmF0aW9uYWxpemUgd2l0aCBzZWxlY3RlZEluZGV4IHNvIHdlJ3JlIG5vdCByZWNhbGN1bGF0aW5nIGl0ZW1cbiAgICAgIC8vIG9yIGluZGV4IGluIGVhY2ggc2V0dGVyLlxuICAgICAgdXBkYXRlUG9zc2libGVOYXZpZ2F0aW9ucyh0aGlzKTtcblxuICAgICAgbGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdzZWxlY3RlZC1pdGVtLWNoYW5nZWQnLCB7XG4gICAgICAgIGRldGFpbDoge1xuICAgICAgICAgIHNlbGVjdGVkSXRlbTogaXRlbSxcbiAgICAgICAgICBwcmV2aW91c0l0ZW06IHByZXZpb3VzSXRlbSxcbiAgICAgICAgICB2YWx1ZTogaXRlbSAvLyBmb3IgUG9seW1lciBiaW5kaW5nXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgdGhlIGZpcnN0IGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAgICovXG4gICAgc2VsZWN0Rmlyc3QoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0Rmlyc3QpIHsgc3VwZXIuc2VsZWN0Rmlyc3QoKTsgfVxuICAgICAgcmV0dXJuIHNlbGVjdEluZGV4KHRoaXMsIDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIGxpc3Qgc2hvdWxkIGFsd2F5cyBoYXZlIGEgc2VsZWN0aW9uIChpZiBpdCBoYXMgaXRlbXMpLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0aW9uUmVxdWlyZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2VsZWN0aW9uUmVxdWlyZWQ7XG4gICAgfVxuICAgIHNldCBzZWxlY3Rpb25SZXF1aXJlZChzZWxlY3Rpb25SZXF1aXJlZCkge1xuICAgICAgaWYgKCdzZWxlY3Rpb25SZXF1aXJlZCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0aW9uUmVxdWlyZWQgPSBzZWxlY3Rpb25SZXF1aXJlZDsgfVxuICAgICAgdGhpcy5fc2VsZWN0aW9uUmVxdWlyZWQgPSBzZWxlY3Rpb25SZXF1aXJlZDtcbiAgICAgIGlmIChzZWxlY3Rpb25SZXF1aXJlZCkge1xuICAgICAgICBlbnN1cmVTZWxlY3Rpb24odGhpcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBsYXN0IGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAgICovXG4gICAgc2VsZWN0TGFzdCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RMYXN0KSB7IHN1cGVyLnNlbGVjdExhc3QoKTsgfVxuICAgICAgcmV0dXJuIHNlbGVjdEluZGV4KHRoaXMsIHRoaXMuaXRlbXMubGVuZ3RoIC0gMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBuZXh0IGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAgICovXG4gICAgc2VsZWN0TmV4dCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3ROZXh0KSB7IHN1cGVyLnNlbGVjdE5leHQoKTsgfVxuICAgICAgcmV0dXJuIHNlbGVjdEluZGV4KHRoaXMsIHRoaXMuc2VsZWN0ZWRJbmRleCArIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCB0aGUgcHJldmlvdXMgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBzZWxlY3RQcmV2aW91cygpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RQcmV2aW91cykgeyBzdXBlci5zZWxlY3RQcmV2aW91cygpOyB9XG4gICAgICByZXR1cm4gc2VsZWN0SW5kZXgodGhpcywgdGhpcy5zZWxlY3RlZEluZGV4IC0gMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiBzZWxlY3Rpb24gbmF2aWdhdGlvbnMgd3JhcCBmcm9tIGxhc3QgdG8gZmlyc3QsIGFuZCB2aWNlIHZlcnNhLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0aW9uV3JhcHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2VsZWN0aW9uV3JhcHM7XG4gICAgfVxuICAgIHNldCBzZWxlY3Rpb25XcmFwcyh2YWx1ZSkge1xuICAgICAgaWYgKCdzZWxlY3Rpb25XcmFwcycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0aW9uV3JhcHMgPSB2YWx1ZTsgfVxuICAgICAgdGhpcy5fc2VsZWN0aW9uV3JhcHMgPSBTdHJpbmcodmFsdWUpID09PSAndHJ1ZSc7XG4gICAgICB1cGRhdGVQb3NzaWJsZU5hdmlnYXRpb25zKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpcmVzIHdoZW4gdGhlIHNlbGVjdGVkSXRlbSBwcm9wZXJ0eSBjaGFuZ2VzLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIEl0ZW1zU2VsZWN0aW9uXG4gICAgICogQGV2ZW50IHNlbGVjdGVkLWl0ZW0tY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRldGFpbC5zZWxlY3RlZEl0ZW0gVGhlIG5ldyBzZWxlY3RlZCBpdGVtLlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRldGFpbC5wcmV2aW91c0l0ZW0gVGhlIHByZXZpb3VzbHkgc2VsZWN0ZWQgaXRlbS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEZpcmVzIHdoZW4gdGhlIHNlbGVjdGVkSW5kZXggcHJvcGVydHkgY2hhbmdlcy5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBJdGVtc1NlbGVjdGlvblxuICAgICAqIEBldmVudCBzZWxlY3RlZC1pbmRleC1jaGFuZ2VkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRldGFpbC5zZWxlY3RlZEluZGV4IFRoZSBuZXcgc2VsZWN0ZWQgaW5kZXguXG4gICAgICovXG5cbiAgfVxuXG4gIHJldHVybiBJdGVtc1NlbGVjdGlvbjtcbn07XG5cblxuLy8gSWYgbm8gaXRlbSBpcyBzZWxlY3RlZCwgc2VsZWN0IGEgZGVmYXVsdCBpdGVtLlxuZnVuY3Rpb24gZW5zdXJlU2VsZWN0aW9uKGVsZW1lbnQpIHtcbiAgbGV0IGluZGV4ID0gZWxlbWVudC5zZWxlY3RlZEluZGV4O1xuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgLy8gU2VsZWN0ZWQgaXRlbSBpcyBubyBsb25nZXIgaW4gdGhlIGN1cnJlbnQgc2V0IG9mIGl0ZW1zLlxuICAgIGlmIChlbGVtZW50Lml0ZW1zICYmIGVsZW1lbnQuaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgLy8gU2VsZWN0IHRoZSBmaXJzdCBpdGVtLlxuICAgICAgLy8gVE9ETzogSWYgdGhlIHByZXZpb3VzbHktc2VsZWN0ZWQgaXRlbSBoYXMgYmVlbiBkZWxldGVkLCB0cnkgdG8gc2VsZWN0XG4gICAgICAvLyBhbiBpdGVtIGFkamFjZW50IHRvIHRoZSBwb3NpdGlvbiBpdCBoZWxkLlxuICAgICAgZWxlbWVudC5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTm8gaXRlbXMgZm9yIHVzIHRvIHNlbGVjdCwgYnV0IHdlIGNhbiBhdCBsZWFzdCBzaWduYWwgdGhhdCB0aGVyZSdzIG5vXG4gICAgICAvLyBsb25nZXIgYSBzZWxlY3Rpb24uXG4gICAgICBlbGVtZW50LnNlbGVjdGVkSXRlbSA9IG51bGw7XG4gICAgfVxuICB9XG59XG5cbi8vIEVuc3VyZSB0aGUgZ2l2ZW4gaW5kZXggaXMgd2l0aGluIGJvdW5kcywgYW5kIHNlbGVjdCBpdCBpZiBpdCdzIG5vdCBhbHJlYWR5XG4vLyBzZWxlY3RlZC5cbmZ1bmN0aW9uIHNlbGVjdEluZGV4KGVsZW1lbnQsIGluZGV4KSB7XG4gIGxldCBjb3VudCA9IGVsZW1lbnQuaXRlbXMubGVuZ3RoO1xuICBsZXQgYm91bmRlZEluZGV4O1xuICBpZiAoZWxlbWVudC5zZWxlY3Rpb25XcmFwcykge1xuICAgIC8vIEphdmFTY3JpcHQgbW9kIGRvZXNuJ3QgaGFuZGxlIG5lZ2F0aXZlIG51bWJlcnMgdGhlIHdheSB3ZSB3YW50IHRvIHdyYXAuXG4gICAgLy8gU2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE4NjE4MjUwLzc2NDcyXG4gICAgYm91bmRlZEluZGV4ID0gKChpbmRleCAlIGNvdW50KSArIGNvdW50KSAlIGNvdW50O1xuICB9IGVsc2Uge1xuICAgIC8vIEtlZXAgaW5kZXggd2l0aGluIGJvdW5kcyBvZiBhcnJheS5cbiAgICBib3VuZGVkSW5kZXggPSBNYXRoLm1heChNYXRoLm1pbihpbmRleCwgY291bnQgLSAxKSwgMCk7XG4gIH1cbiAgbGV0IHByZXZpb3VzSW5kZXggPSBlbGVtZW50LnNlbGVjdGVkSW5kZXg7XG4gIGlmIChwcmV2aW91c0luZGV4ICE9PSBib3VuZGVkSW5kZXgpIHtcbiAgICBlbGVtZW50LnNlbGVjdGVkSW5kZXggPSBib3VuZGVkSW5kZXg7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8vIEZvbGxvd2luZyBhIGNoYW5nZSBpbiBzZWxlY3Rpb24sIHJlcG9ydCB3aGV0aGVyIGl0J3Mgbm93IHBvc3NpYmxlIHRvXG4vLyBnbyBuZXh0L3ByZXZpb3VzIGZyb20gdGhlIGdpdmVuIGluZGV4LlxuZnVuY3Rpb24gdXBkYXRlUG9zc2libGVOYXZpZ2F0aW9ucyhlbGVtZW50KSB7XG4gIGxldCBjYW5TZWxlY3ROZXh0O1xuICBsZXQgY2FuU2VsZWN0UHJldmlvdXM7XG4gIGxldCBpdGVtcyA9IGVsZW1lbnQuaXRlbXM7XG4gIGlmIChpdGVtcyA9PSBudWxsIHx8IGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgIC8vIE5vIGl0ZW1zIHRvIHNlbGVjdC5cbiAgICBjYW5TZWxlY3ROZXh0ID0gZmFsc2U7XG4gICAgY2FuU2VsZWN0UHJldmlvdXMgPSBmYWxzZTtcbiAgfSBpZiAoZWxlbWVudC5zZWxlY3Rpb25XcmFwcykge1xuICAgIC8vIFNpbmNlIHRoZXJlIGFyZSBpdGVtcywgY2FuIGFsd2F5cyBnbyBuZXh0L3ByZXZpb3VzLlxuICAgIGNhblNlbGVjdE5leHQgPSB0cnVlO1xuICAgIGNhblNlbGVjdFByZXZpb3VzID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgaW5kZXggPSBlbGVtZW50LnNlbGVjdGVkSW5kZXg7XG4gICAgaWYgKGluZGV4IDwgMCAmJiBpdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBTcGVjaWFsIGNhc2UuIElmIHRoZXJlIGFyZSBpdGVtcyBidXQgbm8gc2VsZWN0aW9uLCBkZWNsYXJlIHRoYXQgaXQnc1xuICAgICAgLy8gYWx3YXlzIHBvc3NpYmxlIHRvIGdvIG5leHQvcHJldmlvdXMgdG8gY3JlYXRlIGEgc2VsZWN0aW9uLlxuICAgICAgY2FuU2VsZWN0TmV4dCA9IHRydWU7XG4gICAgICBjYW5TZWxlY3RQcmV2aW91cyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5vcm1hbCBjYXNlOiB3ZSBoYXZlIGFuIGluZGV4IGluIGEgbGlzdCB0aGF0IGhhcyBpdGVtcy5cbiAgICAgIGNhblNlbGVjdFByZXZpb3VzID0gKGluZGV4ID4gMCk7XG4gICAgICBjYW5TZWxlY3ROZXh0ID0gKGluZGV4IDwgaXRlbXMubGVuZ3RoIC0gMSk7XG4gICAgfVxuICB9XG4gIGVsZW1lbnQuY2FuU2VsZWN0TmV4dCA9IGNhblNlbGVjdE5leHQ7XG4gIGVsZW1lbnQuY2FuU2VsZWN0UHJldmlvdXMgPSBjYW5TZWxlY3RQcmV2aW91cztcbn1cbiIsImltcG9ydCBtaWNyb3Rhc2sgZnJvbSAnLi9taWNyb3Rhc2snO1xuXG4vLyBUT0RPOiBTaG91bGQgdGhpcyBiZSByZW5hbWVkIHRvIHNvbWV0aGluZyBsaWtlIERpc3RyaWJ1dGVkQ2hpbGRyZW5DaGFuZ2VkP1xuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIE9ic2VydmVDb250ZW50Q2hhbmdlcy4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIHdpcmVzIHVwIG11dGF0aW9uIG9ic2VydmVycyB0byByZXBvcnQgYW55IGNoYW5nZXMgaW4gYVxuICAgKiBjb21wb25lbnQncyBjb250ZW50IChkaXJlY3QgY2hpbGRyZW4sIG9yIG5vZGVzIGRpc3RyaWJ1dGVkIHRvIHNsb3RzKS5cbiAgICpcbiAgICogRm9yIHRoZSB0aW1lIGJlaW5nLCB0aGlzIGNhbiBvbmx5IHN1cHBvcnQgYSBzaW5nbGUgbGV2ZWwgb2YgZGlzdHJpYnV0ZWRcbiAgICogY29udGVudC4gVGhhdCBpcywgaWYgYSBjb21wb25lbnQgY29udGFpbnMgYSBzbG90LCBhbmQgdGhlIHNldCBvZiBub2Rlc1xuICAgKiBkaXJlY3RseSBhc3NpZ25lZCB0byB0aGF0IHNsb3QgY2hhbmdlcywgdGhlbiB0aGlzIG1peGluIHdpbGwgZGV0ZWN0IHRoZVxuICAgKiBjaGFuZ2UuIEhvd2V2ZXIsIHRoaXMgbWl4aW4gZG9lcyBub3QgeWV0IGRldGVjdCBjaGFuZ2VzIGluIHJlcHJvamVjdGVkXG4gICAqIG5vZGVzLiBJZiBhIGNvbXBvbmVudCdzIGhvc3QgcGxhY2VzIGEgc2xvdCBhcyBhIGNoaWxkIG9mIHRoZSBjb21wb25lbnRcbiAgICogaW5zdGFuY2UsIG5vZGVzIGFzc2lnbmVkIHRvIHRoZSBvdXRlciBob3N0IHdpbGwgYmUgYXNzaWduZWQgdG8gdGhlIGhvc3Qnc1xuICAgKiBzbG90LCB0aGVuIHJlYXNzaWduZWQgdG8gdGhlIHNsb3QgZWxlbWVudCBpbnNpZGUgdGhlIGNvbXBvbmVudC4gQ2hhbmdlcyBpblxuICAgKiBzdWNoIHJlcHJvamVjdGVkIG5vZGVzIHdpbGwgbm90ICh5ZXQpIGJlIGRldGVjdGVkIGJ5IHRoaXMgbWl4aW4uXG4gICAqXG4gICAqIEZvciBjb21wYXJpc29uLCBzZWUgUG9seW1lcidzIG9ic2VydmVOb2RlcyBBUEksIHdoaWNoIGRvZXMgc29sdmUgdGhlXG4gICAqIHByb2JsZW0gb2YgdHJhY2tpbmcgY2hhbmdlcyBpbiByZXByb2plY3RlZCBjb250ZW50LlxuICAgKlxuICAgKiBOb3RlOiBUaGUgd2ViIHBsYXRmb3JtIHRlYW0gY3JlYXRpbmcgdGhlIHNwZWNpZmljYXRpb25zIGZvciB3ZWIgY29tcG9uZW50c1xuICAgKiBwbGFuIHRvIHJlcXVlc3QgdGhhdCBhIG5ldyB0eXBlIG9mIE11dGF0aW9uT2JzZXJ2ZXIgb3B0aW9uIGJlIGRlZmluZWQgdGhhdFxuICAgKiBsZXRzIGEgY29tcG9uZW50IG1vbml0b3IgY2hhbmdlcyBpbiBkaXN0cmlidXRlZCBjaGlsZHJlbi4gVGhpcyBtaXhpbiB3aWxsXG4gICAqIGJlIHVwZGF0ZWQgdG8gdGFrZSBhZHZhbnRhZ2Ugb2YgdGhhdCBNdXRhdGlvbk9ic2VydmVyIG9wdGlvbiB3aGVuIHRoYXRcbiAgICogYmVjb21lcyBhdmFpbGFibGUuXG4gICAqL1xuICBjbGFzcyBPYnNlcnZlQ29udGVudENoYW5nZXMgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICAgIG9ic2VydmVDb250ZW50Q2hhbmdlcyh0aGlzKTtcblxuICAgICAgLy8gTWFrZSBhbiBpbml0aWFsIGNhbGwgdG8gY29udGVudENoYW5nZWQoKSBzbyB0aGF0IHRoZSBjb21wb25lbnQgY2FuIGRvXG4gICAgICAvLyBpbml0aWFsaXphdGlvbiB0aGF0IGl0IG5vcm1hbGx5IGRvZXMgd2hlbiBjb250ZW50IGNoYW5nZXMuXG4gICAgICAvL1xuICAgICAgLy8gVGhpcyB3aWxsIGludm9rZSBjb250ZW50Q2hhbmdlZCgpIGhhbmRsZXJzIGluIG90aGVyIG1peGlucy4gSW4gb3JkZXJcbiAgICAgIC8vIHRoYXQgdGhvc2UgbWl4aW5zIGhhdmUgYSBjaGFuY2UgdG8gY29tcGxldGUgdGhlaXIgb3duIGluaXRpYWxpemF0aW9uLFxuICAgICAgLy8gd2UgYWRkIHRoZSBjb250ZW50Q2hhbmdlZCgpIGNhbGwgdG8gdGhlIG1pY3JvdGFzayBxdWV1ZS5cbiAgICAgIG1pY3JvdGFzaygoKSA9PiB0aGlzLmNvbnRlbnRDaGFuZ2VkKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgY29udGVudHMgb2YgdGhlIGNvbXBvbmVudCAoaW5jbHVkaW5nIGRpc3RyaWJ1dGVkXG4gICAgICogY2hpbGRyZW4pIGhhdmUgY2hhbmdlZC5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGFsc28gaW52b2tlZCB3aGVuIGEgY29tcG9uZW50IGlzIGZpcnN0IGluc3RhbnRpYXRlZDsgdGhlXG4gICAgICogY29udGVudHMgaGF2ZSBlc3NlbnRpYWxseSBcImNoYW5nZWRcIiBmcm9tIGJlaW5nIG5vdGhpbmcuIFRoaXMgYWxsb3dzIHRoZVxuICAgICAqIGNvbXBvbmVudCB0byBwZXJmb3JtIGluaXRpYWwgcHJvY2Vzc2luZyBvZiBpdHMgY2hpbGRyZW4uXG4gICAgICovXG4gICAgY29udGVudENoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuY29udGVudENoYW5nZWQpIHsgc3VwZXIuY29udGVudENoYW5nZWQoKTsgfVxuICAgICAgbGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdjb250ZW50LWNoYW5nZWQnKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBpcyByYWlzZWQgd2hlbiB0aGUgY29tcG9uZW50J3MgY29udGVudHMgKGluY2x1ZGluZyBkaXN0cmlidXRlZFxuICAgICAqIGNoaWxkcmVuKSBoYXZlIGNoYW5nZWQuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzXG4gICAgICogQGV2ZW50IGNvbnRlbnQtY2hhbmdlZFxuICAgICAqL1xuICB9XG5cbiAgcmV0dXJuIE9ic2VydmVDb250ZW50Q2hhbmdlcztcbn07XG5cblxuLy8gVE9ETzogRGVjaWRlIHdoZXRoZXIgd2Ugd2FudCBhbiBvcHRpb24gdG8gdHJhY2sgY2hhbmdlcyB0byBjaGlsZHJlblxuLy8gYXR0cmlidXRlcy5cbmZ1bmN0aW9uIG9ic2VydmVDb250ZW50Q2hhbmdlcyhlbGVtZW50KSB7XG4gIGVsZW1lbnQuX2NvbnRlbnRDaGFuZ2VPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+XG4gICAgZWxlbWVudC5jb250ZW50Q2hhbmdlZCgpXG4gICk7XG4gIGVsZW1lbnQuX2NvbnRlbnRDaGFuZ2VPYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIHtcbiAgICAvLyBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG4gICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgIHN1YnRyZWU6IHRydWVcbiAgfSk7XG59XG4iLCIvLyBVc2VkIHRvIGFzc2lnbiB1bmlxdWUgSURzIHRvIGl0ZW0gZWxlbWVudHMgd2l0aG91dCBJRHMuXG5sZXQgaWRDb3VudCA9IDA7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTZWxlY3Rpb25BcmlhQWN0aXZlLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggdHJlYXRzIHRoZSBzZWxlY3RlZCBpdGVtIGluIGEgbGlzdCBhcyB0aGUgYWN0aXZlIGl0ZW0gaW4gQVJJQVxuICAgKiBhY2Nlc3NpYmlsaXR5IHRlcm1zLlxuICAgKlxuICAgKiBIYW5kbGluZyBBUklBIHNlbGVjdGlvbiBzdGF0ZSBwcm9wZXJseSBpcyBhY3R1YWxseSBxdWl0ZSBjb21wbGV4OlxuICAgKlxuICAgKiAqIFRoZSBpdGVtcyBpbiB0aGUgbGlzdCBuZWVkIHRvIGJlIGluZGljYXRlZCBhcyBwb3NzaWJsZSBpdGVtcyB2aWEgYW4gQVJJQVxuICAgKiAgIGByb2xlYCBhdHRyaWJ1dGUgdmFsdWUgc3VjaCBhcyBcIm9wdGlvblwiLlxuICAgKiAqIFRoZSBzZWxlY3RlZCBpdGVtIG5lZWQgdG8gYmUgbWFya2VkIGFzIHNlbGVjdGVkIGJ5IHNldHRpbmcgdGhlIGl0ZW0nc1xuICAgKiAgIGBhcmlhLXNlbGVjdGVkYCBhdHRyaWJ1dGUgdG8gdHJ1ZSAqYW5kKiB0aGUgb3RoZXIgaXRlbXMgbmVlZCBiZSBtYXJrZWQgYXNcbiAgICogICAqbm90KiBzZWxlY3RlZCBieSBzZXR0aW5nIGBhcmlhLXNlbGVjdGVkYCB0byBmYWxzZS5cbiAgICogKiBUaGUgb3V0ZXJtb3N0IGVsZW1lbnQgd2l0aCB0aGUga2V5Ym9hcmQgZm9jdXMgbmVlZHMgdG8gaGF2ZSBhdHRyaWJ1dGVzXG4gICAqICAgc2V0IG9uIGl0IHNvIHRoYXQgdGhlIHNlbGVjdGlvbiBpcyBrbm93YWJsZSBhdCB0aGUgbGlzdCBsZXZlbCB2aWEgdGhlXG4gICAqICAgYGFyaWEtYWN0aXZlZGVzY2VuZGFudGAgYXR0cmlidXRlLlxuICAgKiAqIFVzZSBvZiBgYXJpYS1hY3RpdmVkZXNjZW5kYW50YCBpbiB0dXJuIHJlcXVpcmVzIHRoYXQgYWxsIGl0ZW1zIGluIHRoZVxuICAgKiAgIGxpc3QgaGF2ZSBJRCBhdHRyaWJ1dGVzIGFzc2lnbmVkIHRvIHRoZW0uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gdHJpZXMgdG8gYWRkcmVzcyBhbGwgb2YgdGhlIGFib3ZlIHJlcXVpcmVtZW50cy4gVG8gdGhhdCBlbmQsXG4gICAqIHRoaXMgbWl4aW4gd2lsbCBhc3NpZ24gZ2VuZXJhdGVkIElEcyB0byBhbnkgaXRlbSB0aGF0IGRvZXNuJ3QgYWxyZWFkeSBoYXZlXG4gICAqIGFuIElELlxuICAgKlxuICAgKiBBUklBIHJlbGllcyBvbiBlbGVtZW50cyB0byBwcm92aWRlIGByb2xlYCBhdHRyaWJ1dGVzLiBUaGlzIG1peGluIHdpbGwgYXBwbHlcbiAgICogYSBkZWZhdWx0IHJvbGUgb2YgXCJsaXN0Ym94XCIgb24gdGhlIG91dGVyIGxpc3QgaWYgaXQgZG9lc24ndCBhbHJlYWR5IGhhdmUgYW5cbiAgICogZXhwbGljaXQgcm9sZS4gU2ltaWxhcmx5LCB0aGlzIG1peGluIHdpbGwgYXBwbHkgYSBkZWZhdWx0IHJvbGUgb2YgXCJvcHRpb25cIlxuICAgKiB0byBhbnkgbGlzdCBpdGVtIHRoYXQgZG9lcyBub3QgYWxyZWFkeSBoYXZlIGEgcm9sZSBzcGVjaWZpZWQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIHNldCBvZiBtZW1iZXJzIHRoYXQgbWFuYWdlIHRoZSBzdGF0ZSBvZiB0aGUgc2VsZWN0aW9uOlxuICAgKiBgYXBwbHlTZWxlY3Rpb25gLCBgaXRlbUFkZGVkYCwgYW5kIGBzZWxlY3RlZEluZGV4YC4gWW91IGNhbiBzdXBwbHkgdGhlc2VcbiAgICogeW91cnNlbGYsIG9yIGRvIHNvIHZpYSB0aGUgW0l0ZW1zU2VsZWN0aW9uXShJdGVtc1NlbGVjdGlvbi5tZCkgbWl4aW4uXG4gICAqL1xuICBjbGFzcyBTZWxlY3Rpb25BcmlhQWN0aXZlIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBhcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCkge1xuICAgICAgaWYgKHN1cGVyLmFwcGx5U2VsZWN0aW9uKSB7IHN1cGVyLmFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKTsgfVxuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBzZWxlY3RlZCk7XG4gICAgICBsZXQgaXRlbUlkID0gaXRlbS5pZDtcbiAgICAgIGlmIChpdGVtSWQpIHtcbiAgICAgICAgbGV0IG91dGVybW9zdCA9IHRoaXMuY29sbGVjdGl2ZSA/XG4gICAgICAgICAgdGhpcy5jb2xsZWN0aXZlLm91dGVybW9zdEVsZW1lbnQgOlxuICAgICAgICAgIHRoaXM7XG4gICAgICAgIG91dGVybW9zdC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsIGl0ZW1JZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29sbGVjdGl2ZUNoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuY29sbGVjdGl2ZUNoYW5nZWQpIHsgc3VwZXIuY29sbGVjdGl2ZUNoYW5nZWQoKTsgfVxuXG4gICAgICAvLyBFbnN1cmUgdGhlIG91dGVybW9zdCBhc3BlY3QgaGFzIGFuIEFSSUEgcm9sZS5cbiAgICAgIGxldCBvdXRlcm1vc3RFbGVtZW50ID0gdGhpcy5jb2xsZWN0aXZlLm91dGVybW9zdEVsZW1lbnQ7XG4gICAgICBpZiAoIW91dGVybW9zdEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyb2xlJykpIHtcbiAgICAgICAgLy8gVHJ5IHRvIHByb21vdGUgYW4gQVJJQSByb2xlIGZyb20gYW4gaW5uZXIgZWxlbWVudC4gSWYgbm9uZSBpcyBmb3VuZCxcbiAgICAgICAgLy8gdXNlIGEgZGVmYXVsdCByb2xlLlxuICAgICAgICBsZXQgcm9sZSA9IGdldENvbGxlY3RpdmVBcmlhUm9sZSh0aGlzLmNvbGxlY3RpdmUpIHx8ICdsaXN0Ym94JztcbiAgICAgICAgb3V0ZXJtb3N0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCByb2xlKTtcbiAgICAgIH1cbiAgICAgIGlmICghb3V0ZXJtb3N0RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpKSB7XG4gICAgICAgIC8vIFRyeSB0byBwcm9tb3RlIGFuIEFSSUEgYWN0aXZlZGVzY2VuZGFudCB2YWx1ZSBmcm9tIGFuIGlubmVyIGVsZW1lbnQuXG4gICAgICAgIGxldCBkZXNjZW5kYW50ID0gZ2V0Q29sbGVjdGl2ZUFyaWFBY3RpdmVEZXNjZW5kYW50KHRoaXMuY29sbGVjdGl2ZSk7XG4gICAgICAgIGlmIChkZXNjZW5kYW50KSB7XG4gICAgICAgICAgb3V0ZXJtb3N0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsIGRlc2NlbmRhbnQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFJlbW92ZSB0aGUgQVJJQSByb2xlIGFuZCBhY3RpdmVkZXNjZW5kYW50IHZhbHVlcyBmcm9tIHRoZSBjb2xsZWN0aXZlJ3NcbiAgICAgIC8vIGlubmVyIGVsZW1lbnRzLlxuICAgICAgdGhpcy5jb2xsZWN0aXZlLmVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50ICE9PSBvdXRlcm1vc3RFbGVtZW50KSB7XG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ25vbmUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgaWYgKCF0aGlzLmdldEF0dHJpYnV0ZSgncm9sZScpKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2xpc3Rib3gnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpdGVtQWRkZWQoaXRlbSkge1xuICAgICAgaWYgKHN1cGVyLml0ZW1BZGRlZCkgeyBzdXBlci5pdGVtQWRkZWQoaXRlbSk7IH1cblxuICAgICAgaWYgKCFpdGVtLmdldEF0dHJpYnV0ZSgncm9sZScpKSB7XG4gICAgICAgIC8vIEFzc2lnbiBhIGRlZmF1bHQgQVJJQSByb2xlLlxuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgncm9sZScsICdvcHRpb24nKTtcbiAgICAgIH1cblxuICAgICAgLy8gRW5zdXJlIGVhY2ggaXRlbSBoYXMgYW4gSUQgc28gd2UgY2FuIHNldCBhcmlhLWFjdGl2ZWRlc2NlbmRhbnQgb24gdGhlXG4gICAgICAvLyBvdmVyYWxsIGxpc3Qgd2hlbmV2ZXIgdGhlIHNlbGVjdGlvbiBjaGFuZ2VzLlxuICAgICAgLy9cbiAgICAgIC8vIFRoZSBJRCB3aWxsIHRha2UgdGhlIGZvcm0gb2YgYSBiYXNlIElEIHBsdXMgYSB1bmlxdWUgaW50ZWdlci4gVGhlIGJhc2VcbiAgICAgIC8vIElEIHdpbGwgYmUgaW5jb3Jwb3JhdGUgdGhlIGNvbXBvbmVudCdzIG93biBJRC4gRS5nLiwgaWYgYSBjb21wb25lbnQgaGFzXG4gICAgICAvLyBJRCBcImZvb1wiLCB0aGVuIGl0cyBpdGVtcyB3aWxsIGhhdmUgSURzIHRoYXQgbG9vayBsaWtlIFwiX2Zvb09wdGlvbjFcIi4gSWZcbiAgICAgIC8vIHRoZSBjb21wbmVudCBoYXMgbm8gSUQgaXRzZWxmLCBpdHMgaXRlbXMgd2lsbCBnZXQgSURzIHRoYXQgbG9vayBsaWtlXG4gICAgICAvLyBcIl9vcHRpb24xXCIuIEl0ZW0gSURzIGFyZSBwcmVmaXhlZCB3aXRoIGFuIHVuZGVyc2NvcmUgdG8gZGlmZmVyZW50aWF0ZVxuICAgICAgLy8gdGhlbSBmcm9tIG1hbnVhbGx5LWFzc2lnbmVkIElEcywgYW5kIHRvIG1pbmltaXplIHRoZSBwb3RlbnRpYWwgZm9yIElEXG4gICAgICAvLyBjb25mbGljdHMuXG4gICAgICBpZiAoIWl0ZW0uaWQpIHtcbiAgICAgICAgbGV0IGJhc2VJZCA9IHRoaXMuaWQgP1xuICAgICAgICAgICAgXCJfXCIgKyB0aGlzLmlkICsgXCJPcHRpb25cIiA6XG4gICAgICAgICAgICBcIl9vcHRpb25cIjtcbiAgICAgICAgaXRlbS5pZCA9IGJhc2VJZCArIGlkQ291bnQrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkSXRlbTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkSXRlbShpdGVtKSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkSXRlbScgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtID0gaXRlbTsgfVxuICAgICAgLy8gQ2F0Y2ggdGhlIGNhc2Ugd2hlcmUgdGhlIHNlbGVjdGlvbiBpcyByZW1vdmVkLlxuICAgICAgaWYgKGl0ZW0gPT0gbnVsbCkge1xuICAgICAgICBsZXQgb3V0ZXJtb3N0ID0gdGhpcy5jb2xsZWN0aXZlID9cbiAgICAgICAgICB0aGlzLmNvbGxlY3RpdmUub3V0ZXJtb3N0RWxlbWVudCA6XG4gICAgICAgICAgdGhpcztcbiAgICAgICAgb3V0ZXJtb3N0LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gU2VsZWN0aW9uQXJpYUFjdGl2ZTtcbn07XG5cblxuLy8gUmV0dXJuIHRoZSBmaXJzdCBBUklBIGFjdGl2ZWRlc2NlbmRhbnQgZGVmaW5lZCBieSB0aGUgY29sbGVjdGl2ZS5cbmZ1bmN0aW9uIGdldENvbGxlY3RpdmVBcmlhQWN0aXZlRGVzY2VuZGFudChjb2xsZWN0aXZlKSB7XG4gIGxldCBkZXNjZW5kYW50cyA9IGNvbGxlY3RpdmUuZWxlbWVudHMubWFwKGVsZW1lbnQgPT4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpKTtcbiAgbGV0IG5vbk51bGxEZXNjZW5kYW50cyA9IGRlc2NlbmRhbnRzLmZpbHRlcihkZXNjZW5kYW50ID0+IGRlc2NlbmRhbnQgIT09IG51bGwpO1xuICByZXR1cm4gbm9uTnVsbERlc2NlbmRhbnRzWzBdO1xufVxuXG5cbi8vIFJldHVybiB0aGUgZmlyc3QgQVJJQSBsYWJlbCBkZWZpbmVkIGJ5IHRoZSBjb2xsZWN0aXZlLlxuZnVuY3Rpb24gZ2V0Q29sbGVjdGl2ZUFyaWFSb2xlKGNvbGxlY3RpdmUpIHtcbiAgbGV0IHJvbGVzID0gY29sbGVjdGl2ZS5lbGVtZW50cy5tYXAoZWxlbWVudCA9PiBlbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpKTtcbiAgbGV0IG5vbk51bGxSb2xlcyA9IHJvbGVzLmZpbHRlcihyb2xlID0+IHJvbGUgIT09IG51bGwpO1xuICByZXR1cm4gbm9uTnVsbFJvbGVzWzBdO1xufVxuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcy4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHRvIGNyZWF0ZSByZWZlcmVuY2VzIHRvIGVsZW1lbnRzIGluIGEgY29tcG9uZW50J3MgU2hhZG93IERPTSBzdWJ0cmVlLlxuICAgKlxuICAgKiBUaGlzIGFkZHMgYSBtZW1iZXIgb24gdGhlIGNvbXBvbmVudCBjYWxsZWQgYHRoaXMuJGAgdGhhdCBjYW4gYmUgdXNlZCB0b1xuICAgKiByZWZlcmVuY2Ugc2hhZG93IGVsZW1lbnRzIHdpdGggSURzLiBFLmcuLCBpZiBjb21wb25lbnQncyBzaGFkb3cgY29udGFpbnMgYW5cbiAgICogZWxlbWVudCBgPGJ1dHRvbiBpZD1cImZvb1wiPmAsIHRoZW4gdGhpcyBtaXhpbiB3aWxsIGNyZWF0ZSBhIG1lbWJlclxuICAgKiBgdGhpcy4kLmZvb2AgdGhhdCBwb2ludHMgdG8gdGhhdCBidXR0b24uXG4gICAqXG4gICAqIFN1Y2ggcmVmZXJlbmNlcyBzaW1wbGlmeSBhIGNvbXBvbmVudCdzIGFjY2VzcyB0byBpdHMgb3duIGVsZW1lbnRzLiBJblxuICAgKiBleGNoYW5nZSwgdGhpcyBtaXhpbiB0cmFkZXMgb2ZmIGEgb25lLXRpbWUgY29zdCBvZiBxdWVyeWluZyBhbGwgZWxlbWVudHMgaW5cbiAgICogdGhlIHNoYWRvdyB0cmVlIGluc3RlYWQgb2YgcGF5aW5nIGFuIG9uZ29pbmcgY29zdCB0byBxdWVyeSBmb3IgYW4gZWxlbWVudFxuICAgKiBlYWNoIHRpbWUgdGhlIGNvbXBvbmVudCB3YW50cyB0byBpbnNwZWN0IG9yIG1hbmlwdWxhdGUgaXQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyB0aGUgY29tcG9uZW50IHRvIGRlZmluZSBhIFNoYWRvdyBET00gc3VidHJlZS4gWW91IGNhblxuICAgKiBjcmVhdGUgdGhhdCB0cmVlIHlvdXJzZWxmLCBvciBtYWtlIHVzZSBvZiB0aGVcbiAgICogW1NoYWRvd1RlbXBsYXRlXShTaGFkb3dUZW1wbGF0ZS5tZCkgbWl4aW4uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaXMgaW5zcGlyZWQgYnkgUG9seW1lcidzIFthdXRvbWF0aWNcbiAgICogbm9kZSBmaW5kaW5nXShodHRwczovL3d3dy5wb2x5bWVyLXByb2plY3Qub3JnLzEuMC9kb2NzL2Rldmd1aWRlL2xvY2FsLWRvbS5odG1sI25vZGUtZmluZGluZylcbiAgICogZmVhdHVyZS5cbiAgICovXG4gIGNsYXNzIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgICBpZiAodGhpcy5zaGFkb3dSb290KSB7XG4gICAgICAgIC8vIExvb2sgZm9yIGVsZW1lbnRzIGluIHRoZSBzaGFkb3cgc3VidHJlZSB0aGF0IGhhdmUgaWQgYXR0cmlidXRlcy5cbiAgICAgICAgLy8gQW4gYWx0ZXJuYXRpdmVseSBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1peGluIHdvdWxkIGJlIHRvIGp1c3QgZGVmaW5lXG4gICAgICAgIC8vIGEgdGhpcy4kIGdldHRlciB0aGF0IGxhemlseSBkb2VzIHRoaXMgc2VhcmNoIHRoZSBmaXJzdCB0aW1lIHNvbWVvbmVcbiAgICAgICAgLy8gdHJpZXMgdG8gYWNjZXNzIHRoaXMuJC4gVGhhdCBtaWdodCBpbnRyb2R1Y2Ugc29tZSBjb21wbGV4aXR5IOKAkyBpZiB0aGVcbiAgICAgICAgLy8gdGhlIHRyZWUgY2hhbmdlZCBhZnRlciBpdCB3YXMgZmlyc3QgcG9wdWxhdGVkLCB0aGUgcmVzdWx0IG9mXG4gICAgICAgIC8vIHNlYXJjaGluZyBmb3IgYSBub2RlIG1pZ2h0IGJlIHNvbWV3aGF0IHVucHJlZGljdGFibGUuXG4gICAgICAgIHRoaXMuJCA9IHt9O1xuICAgICAgICBsZXQgbm9kZXNXaXRoSWRzID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZF0nKTtcbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKG5vZGVzV2l0aElkcywgbm9kZSA9PiB7XG4gICAgICAgICAgbGV0IGlkID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgICAgdGhpcy4kW2lkXSA9IG5vZGU7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjb2xsZWN0aW9uIG9mIHJlZmVyZW5jZXMgdG8gdGhlIGVsZW1lbnRzIHdpdGggSURzIGluIGEgY29tcG9uZW50J3NcbiAgICAgKiBTaGFkb3cgRE9NIHN1YnRyZWUuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqIEBtZW1iZXIgJFxuICAgICAqL1xuICB9XG5cbiAgcmV0dXJuIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzO1xufTtcbiIsIi8vIEZlYXR1cmUgZGV0ZWN0aW9uIGZvciBvbGQgU2hhZG93IERPTSB2MC5cbmNvbnN0IFVTSU5HX1NIQURPV19ET01fVjAgPSAodHlwZW9mIEhUTUxFbGVtZW50LnByb3RvdHlwZS5jcmVhdGVTaGFkb3dSb290ICE9PSAndW5kZWZpbmVkJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTaGFkb3dUZW1wbGF0ZS4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIGZvciBzdGFtcGluZyBhIHRlbXBsYXRlIGludG8gYSBTaGFkb3cgRE9NIHN1YnRyZWUgdXBvbiBjb21wb25lbnRcbiAgICogaW5zdGFudGlhdGlvbi5cbiAgICpcbiAgICogVG8gdXNlIHRoaXMgbWl4aW4sIGRlZmluZSBhIGB0ZW1wbGF0ZWAgcHJvcGVydHkgYXMgYSBzdHJpbmcgb3IgSFRNTFxuICAgKiBgPHRlbXBsYXRlPmAgZWxlbWVudDpcbiAgICpcbiAgICogICAgIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIFNoYWRvd1RlbXBsYXRlKEhUTUxFbGVtZW50KSB7XG4gICAqICAgICAgIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICogICAgICAgICByZXR1cm4gYEhlbGxvLCA8ZW0+d29ybGQ8L2VtPi5gO1xuICAgKiAgICAgICB9XG4gICAqICAgICB9XG4gICAqXG4gICAqIFdoZW4geW91ciBjb21wb25lbnQgY2xhc3MgaXMgaW5zdGFudGlhdGVkLCBhIHNoYWRvdyByb290IHdpbGwgYmUgY3JlYXRlZCBvblxuICAgKiB0aGUgaW5zdGFuY2UsIGFuZCB0aGUgY29udGVudHMgb2YgdGhlIHRlbXBsYXRlIHdpbGwgYmUgY2xvbmVkIGludG8gdGhlXG4gICAqIHNoYWRvdyByb290LiBJZiB5b3VyIGNvbXBvbmVudCBkb2VzIG5vdCBkZWZpbmUgYSBgdGVtcGxhdGVgIHByb3BlcnR5LCB0aGlzXG4gICAqIG1peGluIGhhcyBubyBlZmZlY3QuXG4gICAqXG4gICAqIEZvciB0aGUgdGltZSBiZWluZywgdGhpcyBleHRlbnNpb24gcmV0YWlucyBzdXBwb3J0IGZvciBTaGFkb3cgRE9NIHYwLiBUaGF0XG4gICAqIHdpbGwgZXZlbnR1YWxseSBiZSBkZXByZWNhdGVkIGFzIGJyb3dzZXJzIChhbmQgdGhlIFNoYWRvdyBET00gcG9seWZpbGwpXG4gICAqIGltcGxlbWVudCBTaGFkb3cgRE9NIHYxLlxuICAgKi9cbiAgY2xhc3MgU2hhZG93VGVtcGxhdGUgZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qXG4gICAgICogSWYgdGhlIGNvbXBvbmVudCBkZWZpbmVzIGEgdGVtcGxhdGUsIGEgc2hhZG93IHJvb3Qgd2lsbCBiZSBjcmVhdGVkIG9uIHRoZVxuICAgICAqIGNvbXBvbmVudCBpbnN0YW5jZSwgYW5kIHRoZSB0ZW1wbGF0ZSBzdGFtcGVkIGludG8gaXQuXG4gICAgICovXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgbGV0IHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZTtcbiAgICAgIC8vIFRPRE86IFNhdmUgdGhlIHByb2Nlc3NlZCB0ZW1wbGF0ZSB3aXRoIHRoZSBjb21wb25lbnQncyBjbGFzcyBwcm90b3R5cGVcbiAgICAgIC8vIHNvIGl0IGRvZXNuJ3QgbmVlZCB0byBiZSBwcm9jZXNzZWQgd2l0aCBldmVyeSBpbnN0YW50aWF0aW9uLlxuICAgICAgaWYgKHRlbXBsYXRlKSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAvLyBVcGdyYWRlIHBsYWluIHN0cmluZyB0byByZWFsIHRlbXBsYXRlLlxuICAgICAgICAgIHRlbXBsYXRlID0gY3JlYXRlVGVtcGxhdGVXaXRoSW5uZXJIVE1MKHRlbXBsYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChVU0lOR19TSEFET1dfRE9NX1YwKSB7XG4gICAgICAgICAgcG9seWZpbGxTbG90V2l0aENvbnRlbnQodGVtcGxhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdpbmRvdy5TaGFkb3dET01Qb2x5ZmlsbCkge1xuICAgICAgICAgIHNoaW1UZW1wbGF0ZVN0eWxlcyh0ZW1wbGF0ZSwgdGhpcy5sb2NhbE5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhpcy5sb2coXCJjbG9uaW5nIHRlbXBsYXRlIGludG8gc2hhZG93IHJvb3RcIik7XG4gICAgICAgIGxldCByb290ID0gVVNJTkdfU0hBRE9XX0RPTV9WMCA/XG4gICAgICAgICAgdGhpcy5jcmVhdGVTaGFkb3dSb290KCkgOiAgICAgICAgICAgICAvLyBTaGFkb3cgRE9NIHYwXG4gICAgICAgICAgdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7ICAvLyBTaGFkb3cgRE9NIHYxXG4gICAgICAgIGxldCBjbG9uZSA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUuY29udGVudCwgdHJ1ZSk7XG4gICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFNoYWRvd1RlbXBsYXRlO1xufTtcblxuXG4vLyBDb252ZXJ0IGEgcGxhaW4gc3RyaW5nIG9mIEhUTUwgaW50byBhIHJlYWwgdGVtcGxhdGUgZWxlbWVudC5cbmZ1bmN0aW9uIGNyZWF0ZVRlbXBsYXRlV2l0aElubmVySFRNTChpbm5lckhUTUwpIHtcbiAgbGV0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgLy8gUkVWSUVXOiBJcyB0aGVyZSBhbiBlYXNpZXIgd2F5IHRvIGRvIHRoaXM/XG4gIC8vIFdlJ2QgbGlrZSB0byBqdXN0IHNldCBpbm5lckhUTUwgb24gdGhlIHRlbXBsYXRlIGNvbnRlbnQsIGJ1dCBzaW5jZSBpdCdzXG4gIC8vIGEgRG9jdW1lbnRGcmFnbWVudCwgdGhhdCBkb2Vzbid0IHdvcmsuXG4gIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgd2hpbGUgKGRpdi5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICB0ZW1wbGF0ZS5jb250ZW50LmFwcGVuZENoaWxkKGRpdi5jaGlsZE5vZGVzWzBdKTtcbiAgfVxuICByZXR1cm4gdGVtcGxhdGU7XG59XG5cbi8vIFJlcGxhY2Ugb2NjdXJlbmNlcyBvZiB2MSBzbG90IGVsZW1lbnRzIHdpdGggdjAgY29udGVudCBlbGVtZW50cy5cbi8vIFRoaXMgZG9lcyBub3QgeWV0IG1hcCBuYW1lZCBzbG90cyB0byBjb250ZW50IHNlbGVjdCBjbGF1c2VzLlxuZnVuY3Rpb24gcG9seWZpbGxTbG90V2l0aENvbnRlbnQodGVtcGxhdGUpIHtcbiAgW10uZm9yRWFjaC5jYWxsKHRlbXBsYXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnc2xvdCcpLCBzbG90RWxlbWVudCA9PiB7XG4gICAgbGV0IGNvbnRlbnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY29udGVudCcpO1xuICAgIHNsb3RFbGVtZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGNvbnRlbnRFbGVtZW50LCBzbG90RWxlbWVudCk7XG4gIH0pO1xufVxuXG4vLyBJbnZva2UgYmFzaWMgc3R5bGUgc2hpbW1pbmcgd2l0aCBTaGFkb3dDU1MuXG5mdW5jdGlvbiBzaGltVGVtcGxhdGVTdHlsZXModGVtcGxhdGUsIHRhZykge1xuICB3aW5kb3cuV2ViQ29tcG9uZW50cy5TaGFkb3dDU1Muc2hpbVN0eWxpbmcodGVtcGxhdGUuY29udGVudCwgdGFnKTtcbn1cbiIsImltcG9ydCBDb2xsZWN0aXZlIGZyb20gJy4vQ29sbGVjdGl2ZSc7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBUYXJnZXRJbkNvbGxlY3RpdmUuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBhbGxvd3MgYSBjb21wb25lbnQgdG8gcHJvdmlkZSBhZ2dyZWdhdGUgYmVoYXZpb3Igd2l0aCBvdGhlclxuICAgKiBlbGVtZW50cywgZS5nLiwgZm9yIGtleWJvYXJkIGhhbmRsaW5nLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGltcGxpY2l0bHkgY3JlYXRlcyBhIGNvbGxlY3RpdmUgZm9yIGEgY29tcG9uZW50IHNvIHRoYXQgaXQgY2FuXG4gICAqIHBhcnRpY2lwYXRlIGluIGNvbGxlY3RpdmUga2V5Ym9hcmQgaGFuZGxpbmcuIFNlZSB0aGVcbiAgICogW0NvbGxlY3RpdmVdKENvbGxlY3RpdmUubWQpIGNsYXNzIGZvciBkZXRhaWxzLlxuICAgKlxuICAgKiBZb3UgY2FuIHVzZSB0aGlzIG1peGluIGluIGNvbmp1bmN0aW9uIHdpdGhcbiAgICogW0NvbnRlbnRGaXJzdENoaWxkVGFyZ2V0XShDb250ZW50Rmlyc3RDaGlsZFRhcmdldC5tZCkgdG8gYXV0b21hdGljYWxseSBoYXZlXG4gICAqIHRoZSBjb21wb25lbnQncyBjb2xsZWN0aXZlIGV4dGVuZGVkIHRvIGl0cyBmaXJzdCBjaGlsZC5cbiAgICovXG4gIGNsYXNzIFRhcmdldEluQ29sbGVjdGl2ZSBleHRlbmRzIGJhc2Uge1xuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgdGhpcy5jb2xsZWN0aXZlID0gbmV3IENvbGxlY3RpdmUodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cy9zZXRzIHRoZSBjdXJyZW50IHRhcmdldCBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogU2V0IHRoaXMgdG8gcG9pbnQgdG8gYW5vdGhlciBlbGVtZW50LiBUaGF0IHRhcmdldCBlbGVtZW50IHdpbGwgYmVcbiAgICAgKiBpbXBsaWNpdGx5IGFkZGVkIHRvIHRoZSBjb21wb25lbnQncyBjb2xsZWN0aXZlLiBUaGF0IGlzLCB0aGUgY29tcG9uZW50XG4gICAgICogYW5kIGl0cyB0YXJnZXQgd2lsbCBzaGFyZSByZXNwb25zaWJpbGl0eSBmb3IgaGFuZGxpbmcga2V5Ym9hcmQgZXZlbnRzLlxuICAgICAqXG4gICAgICogWW91IGNhbiBzZXQgdGhpcyBwcm9wZXJ0eSB5b3Vyc2VsZiwgb3IgeW91IGNhbiB1c2UgdGhlXG4gICAgICogQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQgbWl4aW4gdG8gYXV0b21hdGljYWxseSBzZXQgdGhlIHRhcmdldCB0byB0aGVcbiAgICAgKiBjb21wb25lbnQncyBmaXJzdCBjaGlsZC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXQgdGFyZ2V0KCkge1xuICAgICAgcmV0dXJuIHN1cGVyLnRhcmdldDtcbiAgICB9XG4gICAgc2V0IHRhcmdldChlbGVtZW50KSB7XG4gICAgICBpZiAoJ3RhcmdldCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIudGFyZ2V0ID0gZWxlbWVudDsgfVxuICAgICAgdGhpcy5jb2xsZWN0aXZlLmFzc2ltaWxhdGUoZWxlbWVudCk7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gVGFyZ2V0SW5Db2xsZWN0aXZlO1xufTtcbiIsIi8qXG4gKiBNaWNyb3Rhc2sgaGVscGVyIGZvciBJRSAxMS5cbiAqXG4gKiBFeGVjdXRpbmcgYSBmdW5jdGlvbiBhcyBhIG1pY3JvdGFzayBpcyB0cml2aWFsIGluIGJyb3dzZXJzIHRoYXQgc3VwcG9ydFxuICogcHJvbWlzZXMsIHdob3NlIHRoZW4oKSBjbGF1c2VzIHVzZSBtaWNyb3Rhc2sgdGltaW5nLiBJRSAxMSBkb2Vzbid0IHN1cHBvcnRcbiAqIHByb21pc2VzLCBidXQgZG9lcyBzdXBwb3J0IE11dGF0aW9uT2JzZXJ2ZXJzLCB3aGljaCBhcmUgYWxzbyBleGVjdXRlZCBhc1xuICogbWljcm90YXNrcy4gU28gdGhpcyBoZWxwZXIgdXNlcyBhbiBNdXRhdGlvbk9ic2VydmVyIHRvIGFjaGlldmUgbWljcm90YXNrXG4gKiB0aW1pbmcuXG4gKlxuICogU2VlIGh0dHBzOi8vamFrZWFyY2hpYmFsZC5jb20vMjAxNS90YXNrcy1taWNyb3Rhc2tzLXF1ZXVlcy1hbmQtc2NoZWR1bGVzL1xuICpcbiAqIEluc3BpcmVkIGJ5IFBvbHltZXIncyBhc3luYygpIGZ1bmN0aW9uLlxuICovXG5cblxuLy8gVGhlIHF1ZXVlIG9mIHBlbmRpbmcgY2FsbGJhY2tzIHRvIGJlIGV4ZWN1dGVkIGFzIG1pY3JvdGFza3MuXG5sZXQgY2FsbGJhY2tzID0gW107XG5cbi8vIENyZWF0ZSBhbiBlbGVtZW50IHRoYXQgd2Ugd2lsbCBtb2RpZnkgdG8gZm9yY2Ugb2JzZXJ2YWJsZSBtdXRhdGlvbnMuXG5sZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcblxuLy8gQSBtb25vdG9uaWNhbGx5LWluY3JlYXNpbmcgdmFsdWUuXG5sZXQgY291bnRlciA9IDA7XG5cblxuLyoqXG4gKiBBZGQgYSBjYWxsYmFjayB0byB0aGUgbWljcm90YXNrIHF1ZXVlLlxuICpcbiAqIFRoaXMgdXNlcyBhIE11dGF0aW9uT2JzZXJ2ZXIgc28gdGhhdCBpdCB3b3JrcyBvbiBJRSAxMS5cbiAqXG4gKiBOT1RFOiBJRSAxMSBtYXkgYWN0dWFsbHkgdXNlIHRpbWVvdXQgdGltaW5nIHdpdGggTXV0YXRpb25PYnNlcnZlcnMuIFRoaXNcbiAqIG5lZWRzIG1vcmUgaW52ZXN0aWdhdGlvbi5cbiAqXG4gKiBAZnVuY3Rpb24gbWljcm90YXNrXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaWNyb3Rhc2soY2FsbGJhY2spIHtcbiAgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAvLyBGb3JjZSBhIG11dGF0aW9uLlxuICBlbGVtZW50LnRleHRDb250ZW50ID0gKytjb3VudGVyO1xufVxuXG5cbi8vIEV4ZWN1dGUgYW55IHBlbmRpbmcgY2FsbGJhY2tzLlxuZnVuY3Rpb24gZXhlY3V0ZUNhbGxiYWNrcygpIHtcbiAgd2hpbGUgKGNhbGxiYWNrcy5sZW5ndGggPiAwKSB7XG4gICAgbGV0IGNhbGxiYWNrID0gY2FsbGJhY2tzLnNoaWZ0KCk7XG4gICAgY2FsbGJhY2soKTtcbiAgfVxufVxuXG5cbi8vIENyZWF0ZSB0aGUgb2JzZXJ2ZXIuXG5sZXQgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihleGVjdXRlQ2FsbGJhY2tzKTtcbm9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwge1xuICBjaGFyYWN0ZXJEYXRhOiB0cnVlXG59KTtcbiIsIi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBzdGFuZGFyZCBjbGFzc0xpc3QudG9nZ2xlKCkgYmVoYXZpb3Igb24gb2xkIGJyb3dzZXJzLFxuICogbmFtZWx5IElFIDExLlxuICpcbiAqIFRoZSBzdGFuZGFyZFxuICogW2NsYXNzbGlzdF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0VsZW1lbnQvY2xhc3NMaXN0KVxuICogb2JqZWN0IGhhcyBhIGB0b2dnbGUoKWAgZnVuY3Rpb24gdGhhdCBzdXBwb3J0cyBhIHNlY29uZCBCb29sZWFuIHBhcmFtZXRlclxuICogdGhhdCBjYW4gYmUgdXNlZCB0byBzdWNjaW5jdGx5IHR1cm4gYSBjbGFzcyBvbiBvciBvZmYuIFRoaXMgZmVhdHVyZSBpcyBvZnRlblxuICogdXNlZnVsIGluIGRlc2lnbmluZyBjdXN0b20gZWxlbWVudHMsIHdoaWNoIG1heSB3YW50IHRvIGV4dGVybmFsbHkgcmVmbGVjdFxuICogY29tcG9uZW50IHN0YXRlIGluIGEgQ1NTIGNsYXNzIHRoYXQgY2FuIGJlIHVzZWQgZm9yIHN0eWxpbmcgcHVycG9zZXMuXG4gKlxuICogVW5mb3J0dW5hdGVseSwgSUUgMTEgZG9lcyBub3Qgc3VwcG9ydCB0aGUgQm9vbGVhbiBwYXJhbWV0ZXIgdG9cbiAqIGBjbGFzc0xpc3QudG9nZ2xlKClgLiBUaGlzIGhlbHBlciBmdW5jdGlvbiBiZWhhdmVzIGxpa2UgdGhlIHN0YW5kYXJkXG4gKiBgdG9nZ2xlKClgLCBpbmNsdWRpbmcgc3VwcG9ydCBmb3IgdGhlIEJvb2xlYW4gcGFyYW1ldGVyLCBzbyB0aGF0IGl0IGNhbiBiZVxuICogdXNlZCBldmVuIG9uIElFIDExLlxuICpcbiAqIEBmdW5jdGlvbiB0b2dnbGVDbGFzc1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIFRoZSBlbGVtZW50IHRvIG1vZGlmeVxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAtIFRoZSBjbGFzcyB0byBhZGQvcmVtb3ZlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZV0gLSBGb3JjZSB0aGUgY2xhc3MgdG8gYmUgYWRkZWQgKGlmIHRydWUpIG9yIHJlbW92ZWRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpZiBmYWxzZSlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lLCBmb3JjZSkge1xuICBsZXQgY2xhc3NMaXN0ID0gZWxlbWVudC5jbGFzc0xpc3Q7XG4gIGxldCBhZGRDbGFzcyA9ICh0eXBlb2YgZm9yY2UgPT09ICd1bmRlZmluZWQnKSA/XG4gICAgIWNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpIDpcbiAgICBmb3JjZTtcbiAgaWYgKGFkZENsYXNzKSB7XG4gICAgY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICB9IGVsc2Uge1xuICAgIGNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgfVxuICByZXR1cm4gYWRkQ2xhc3M7XG59XG4iLCJpbXBvcnQgQ29tcG9zYWJsZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db21wb3NhYmxlJztcbmltcG9ydCBTaGFkb3dUZW1wbGF0ZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaGFkb3dUZW1wbGF0ZSc7XG5pbXBvcnQgU2hhZG93RWxlbWVudFJlZmVyZW5jZXMgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2hhZG93RWxlbWVudFJlZmVyZW5jZXMnO1xuaW1wb3J0IEF0dHJpYnV0ZU1hcnNoYWxsaW5nIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0F0dHJpYnV0ZU1hcnNoYWxsaW5nJztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW4nO1xuXG5cbi8qKlxuICogQSBzYW1wbGUgZ2VuZXJhbC1wdXJwb3NlIGJhc2UgY2xhc3MgZm9yIGRlZmluaW5nIGN1c3RvbSBlbGVtZW50cyB0aGF0IG1peGVzXG4gKiBpbiBzb21lIGNvbW1vbiBmZWF0dXJlczogdGVtcGxhdGUgc3RhbXBpbmcgaW50byBhIHNoYWRvdyByb290LCBzaGFkb3cgZWxlbWVudFxuICogcmVmZXJlbmNlcywgbWFyc2hhbGxpbmcgYXR0cmlidXRlcyB0byBwcm9wZXJ0aWVzLCBhbmQgcmV0cmlldmluZyB0aGUgY2hpbGRyZW5cbiAqIGRpc3RyaWJ1dGVkIHRvIGEgY29tcG9uZW50LlxuICpcbiAqIFRoaXMgYmFzZSBjbGFzcyBpcyBub3Qgc3BlY2lhbCBpbiBhbnkgd2F5LCBhbmQgaXMgZGVmaW5lZCBvbmx5IGFzIGFcbiAqIGNvbnZlbmllbnQgc2hvcnRoYW5kIGZvciBhcHBseWluZyB0aGUgbWl4aW5zIGxpc3RlZCBhYm92ZS4gWW91IGNhbiB1c2UgdGhpc1xuICogY2xhc3MgYXMgYSBiYXNlIGNsYXNzIGZvciB5b3VyIG93biBlbGVtZW50cywgb3IgZWFzaWx5IGNyZWF0ZSB5b3VyIG93biBiYXNlXG4gKiBjbGFzcyBieSBhcHBseWluZyB0aGUgc2FtZSBzZXQgb2YgbWl4aW5zLlxuICpcbiAqIFRoZSBFbGVtZW50QmFzZSBiYXNlIGNsYXNzIGRvZXMgbm90IHJlZ2lzdGVyIGl0c2VsZiBhcyBhIGN1c3RvbSBlbGVtZW50IHdpdGhcbiAqIHRoZSBicm93c2VyLCBhbmQgaGVuY2UgY2Fubm90IGJlIGluZGVwZW5kZW50bHkgaW5zdGFudGlhdGVkLlxuICpcbiAqIEBtaXhlcyBBdHRyaWJ1dGVNYXJzaGFsbGluZyBcbiAqIEBtaXhlcyBDb21wb3NhYmxlXG4gKiBAbWl4ZXMgRGlzdHJpYnV0ZWRDaGlsZHJlblxuICogQG1peGVzIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzXG4gKiBAbWl4ZXMgU2hhZG93VGVtcGxhdGVcbiAqL1xuY2xhc3MgRWxlbWVudEJhc2UgZXh0ZW5kcyBDb21wb3NhYmxlKEhUTUxFbGVtZW50KS5jb21wb3NlKFxuICBTaGFkb3dUZW1wbGF0ZSwgICAgICAgICAgLy8gYmVmb3JlIG5vZGUgZmluZGluZywgc28gc2hhZG93IHJvb3QgaXMgcG9wdWxhdGVkXG4gIFNoYWRvd0VsZW1lbnRSZWZlcmVuY2VzLCAvLyBiZWZvcmUgbWFyc2hhbGxpbmcsIHNvIHByb3BlcnRpZXMgY2FuIHVzZSByZWZzXG4gIEF0dHJpYnV0ZU1hcnNoYWxsaW5nLFxuICBEaXN0cmlidXRlZENoaWxkcmVuXG4pIHtcblxuICAvKlxuICAgKiBEZWJ1Z2dpbmcgdXRpbGl0eTogbG9ncyBhIG1lc3NhZ2UsIHByZWZpeGVkIGJ5IHRoZSBjb21wb25lbnQncyB0YWcuXG4gICAqL1xuICBsb2codGV4dCkge1xuICAgIGlmIChzdXBlci5sb2cpIHsgc3VwZXIubG9nKHRleHQpOyB9XG4gICAgY29uc29sZS5sb2coYCR7dGhpcy5sb2NhbE5hbWV9OiAke3RleHR9YCk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50QmFzZTtcbiIsImltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuLi8uLi9iYXNpYy1lbGVtZW50LWJhc2Uvc3JjL0VsZW1lbnRCYXNlJztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50IGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQnO1xuaW1wb3J0IENvbnRlbnRBc0l0ZW1zIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbnRlbnRBc0l0ZW1zJztcbmltcG9ydCBJdGVtc1NlbGVjdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9JdGVtc1NlbGVjdGlvbic7XG5pbXBvcnQgT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL09ic2VydmVDb250ZW50Q2hhbmdlcyc7XG5pbXBvcnQgU2VsZWN0aW9uQXJpYUFjdGl2ZSBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25BcmlhQWN0aXZlJztcbmltcG9ydCBUYXJnZXRJbkNvbGxlY3RpdmUgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGFyZ2V0SW5Db2xsZWN0aXZlJztcblxubGV0IGJhc2UgPSBFbGVtZW50QmFzZS5jb21wb3NlKFxuICBDb250ZW50QXNJdGVtcyxcbiAgRGlzdHJpYnV0ZWRDaGlsZHJlbkFzQ29udGVudCxcbiAgSXRlbXNTZWxlY3Rpb24sXG4gIE9ic2VydmVDb250ZW50Q2hhbmdlcyxcbiAgU2VsZWN0aW9uQXJpYUFjdGl2ZSxcbiAgVGFyZ2V0SW5Db2xsZWN0aXZlXG4pO1xuXG5cbi8qKlxuICogU2hvd3MgZXhhY3RseSBvbmUgY2hpbGQgZWxlbWVudCBhdCBhIHRpbWUuXG4gKlxuICogVGhpcyBjYW4gYmUgdXNlZnVsLCBmb3IgZXhhbXBsZSwgaWYgYSBnaXZlbiBVSSBlbGVtZW50IGhhcyBtdWx0aXBsZSBtb2Rlc1xuICogdGhhdCBwcmVzZW50IHN1YnN0YW50aWFsbHkgZGlmZmVyZW50IGVsZW1lbnRzLlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGRvZXNuJ3QgcHJvdmlkZSBhbnkgVUkgZm9yIGNoYW5naW5nIHdoaWNoIG1vZGUgaXMgc2hvd24uXG4gKlxuICogQGV4dGVuZHMgRWxlbWVudEJhc2VcbiAqIEBtaXhlcyBDb250ZW50QXNJdGVtc1xuICogQG1peGVzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnRcbiAqIEBtaXhlcyBJdGVtc1NlbGVjdGlvblxuICogQG1peGVzIE9ic2VydmVDb250ZW50Q2hhbmdlc1xuICogQG1peGVzIFNlbGVjdGlvbkFyaWFBY3RpdmVcbiAqIEBtaXhlcyBUYXJnZXRJbkNvbGxlY3RpdmVcbiAqL1xuY2xhc3MgTW9kZXMgZXh0ZW5kcyBiYXNlIHtcblxuICBhcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCkge1xuICAgIGlmIChzdXBlci5hcHBseVNlbGVjdGlvbikgeyBzdXBlci5hcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCk7IH1cbiAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSBzZWxlY3RlZCA/ICcnIDogJ25vbmUnO1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICFzZWxlY3RlZCk7XG4gIH1cblxuICBhdHRhY2hlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuc2VsZWN0aW9uUmVxdWlyZWQgPSB0cnVlO1xuICB9XG5cbn1cblxuXG5kb2N1bWVudC5yZWdpc3RlckVsZW1lbnQoJ2Jhc2ljLW1vZGVzJywgTW9kZXMpO1xuZXhwb3J0IGRlZmF1bHQgTW9kZXM7XG4iXX0=
