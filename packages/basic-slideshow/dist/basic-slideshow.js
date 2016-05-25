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

},{}],3:[function(require,module,exports){
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

},{"../../basic-component-mixins/src/toggleClass":16}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // TODO: Drop use of "Mixin" in name.

var selectedFractionSymbol = (0, _createSymbol2.default)('selectedFraction');

/* Exported function extends a base class with FractionalSelection. */
function mixin(base) {
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

/*
 * Helper functions for working with a selection as a real number that combines
 * an integer index into a list, and a fraction indicating how far of the way we
 * are to the next or previous item.
 */
mixin.helpers = {

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

  /**
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

  /**
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
  wrappedSelection: function wrappedSelection(selection, itemCount) {
    // Handles possibility of negative mod.
    // See http://stackoverflow.com/a/18618250/76472
    return (selection % itemCount + itemCount) % itemCount;
  },

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
  wrappedSelectionParts: function wrappedSelectionParts(selection, itemCount, wrap) {
    if (wrap) {
      selection = mixin.helpers.wrappedSelection(selection, itemCount);
    }
    return mixin.helpers.selectionParts(selection);
  }
};

},{"./createSymbol":14}],7:[function(require,module,exports){
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

},{"./microtask":15}],8:[function(require,module,exports){
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

},{"./microtask":15}],9:[function(require,module,exports){
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

// Symbols for hanging data off an element.
var animatingSelectionSymbol = (0, _createSymbol2.default)('animatingSelection');
var animationSymbol = (0, _createSymbol2.default)('animations');
var lastAnimationSymbol = (0, _createSymbol2.default)('lastAnimation');
var previousSelectionSymbol = (0, _createSymbol2.default)('previousSelection');
var showTransitionSymbol = (0, _createSymbol2.default)('showTransition');
var selectionAnimationDurationSymbol = (0, _createSymbol2.default)('selectionAnimationDuration');
var selectionAnimationEffectSymbol = (0, _createSymbol2.default)('selectionAnimationEffect');
var selectionAnimationKeyframesSymbol = (0, _createSymbol2.default)('selectionAnimationKeyframes');

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
        if (this.selectionAnimationDuration == null) {
          this.selectionAnimationDuration = this.defaults.selectionAnimationDuration;
        }
        if (this.selectionAnimationEffect == null && this.selectionAnimationKeyframes == null) {
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
       * helper functions.
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
    // Cancel the effects of the last selection animation.
    element[lastAnimationSymbol].onfinish = null;
    element[lastAnimationSymbol] = null;
  }

  // Calculate the animation timings.
  var items = element.items;
  var keyframes = element.selectionAnimationKeyframes;
  element[animatingSelectionSymbol] = true;
  var timings = mixin.helpers.effectTimingsForSelectionAnimation(element, fromSelection, toSelection);
  var lastAnimationDetails = undefined;

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
  timings.forEach(function (timing, index) {
    var item = items[index];
    if (timing) {
      showItem(item, true);
      var animation = item.animate(keyframes, timing);

      // Figure out whether this animation will be the last one to end
      // (possibly concurrent with another animation).
      var endTime = timing.delay + timing.duration + timing.endDelay;
      if (lastAnimationDetails == null || endTime > lastAnimationDetails.endTime) {
        lastAnimationDetails = { animation: animation, endTime: endTime, timing: timing };
      }

      if (index === nextUpIndex) {
        // This item will be animated, so will already be in the desired state
        // after the animation completes.
        nextUpIndex = null;
      }
    } else {
      // This item doesn't participate in the animation.
      showItem(item, false);
    }
  });

  if (lastAnimationDetails && nextUpIndex != null) {
    displayNextItemWhenAnimationCompletes(element, lastAnimationDetails.animation, nextUpIndex, forward);
  } else {
    // Shouldn't happen -- we should always have at least one animation.
    element[animatingSelectionSymbol] = false;
  }
}

/*
 * When the last animation completes, show the next item in the direction we're
 * going. This waiting is a hack to avoid having static items higher in the
 * natural z-order obscure items during animation.
 */
function displayNextItemWhenAnimationCompletes(element, animation, nextUpIndex, forward) {
  animation.onfinish = function (event) {
    var nextUpItem = element.items[nextUpIndex];
    var animationFraction = forward ? 0 : 1;
    setAnimationFraction(element, nextUpIndex, animationFraction);
    showItem(nextUpItem, true);
    element[animatingSelectionSymbol] = false;
    element[lastAnimationSymbol] = null;
  };
  element[lastAnimationSymbol] = animation;
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
  } else if (selectedFraction === 0 && element[animatingSelectionSymbol]) {
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
 * Pause the indicated animation and have it show the animation at the given
 * fraction (between 0 and 1) of the way through the animation.
 */
function setAnimationFraction(element, itemIndex, fraction) {
  var animation = getAnimationForItemIndex(element, itemIndex);
  if (animation) {
    var duration = element.selectionAnimationDuration;
    animation.currentTime = fraction * duration;
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

},{"./FractionalSelection":6,"./createSymbol":14}],10:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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
        if (this.playing == null) {
          this.playing = this.defaults.playing;
        }
        if (this.selectionTimerDuration == null) {
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

},{}],17:[function(require,module,exports){
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

},{"../../basic-component-mixins/src/AttributeMarshalling":1,"../../basic-component-mixins/src/Composable":2,"../../basic-component-mixins/src/DistributedChildren":4,"../../basic-component-mixins/src/ShadowElementReferences":11,"../../basic-component-mixins/src/ShadowTemplate":12}],18:[function(require,module,exports){
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
 * @extends ElementBase
 */

var Slideshow = function (_base) {
  _inherits(Slideshow, _base);

  function Slideshow() {
    _classCallCheck(this, Slideshow);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Slideshow).apply(this, arguments));
  }

  _createClass(Slideshow, [{
    key: 'attachedCallback',
    value: function attachedCallback() {
      if (_get(Object.getPrototypeOf(Slideshow.prototype), 'attachedCallback', this)) {
        _get(Object.getPrototypeOf(Slideshow.prototype), 'attachedCallback', this).call(this);
      }

      // Unless told not to start playing, play by default.
      if (this.playing == null) {
        this.play();
      }
    }
  }, {
    key: 'defaults',
    get: function get() {
      var defaults = _get(Object.getPrototypeOf(Slideshow.prototype), 'defaults', this) || {};
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
      return '\n      <style>\n      :host {\n        position: relative;\n      }\n      </style>\n      <slot></slot>\n    ';
    }
  }]);

  return Slideshow;
}(base);

document.registerElement('basic-slideshow', Slideshow);

},{"../../basic-component-mixins/src/ContentAsItems":3,"../../basic-component-mixins/src/DistributedChildrenAsContent":5,"../../basic-component-mixins/src/FractionalSelection":6,"../../basic-component-mixins/src/ItemsSelection":7,"../../basic-component-mixins/src/ObserveContentChanges":8,"../../basic-component-mixins/src/SelectionAnimation":9,"../../basic-component-mixins/src/SelectionAriaActive":10,"../../basic-component-mixins/src/TimerSelection":13,"../../basic-element-base/src/ElementBase":17}]},{},[18])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9BdHRyaWJ1dGVNYXJzaGFsbGluZy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbXBvc2FibGUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9Db250ZW50QXNJdGVtcy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW4uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9EaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50LmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRnJhY3Rpb25hbFNlbGVjdGlvbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0l0ZW1zU2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uQW5pbWF0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uQXJpYUFjdGl2ZS5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NoYWRvd0VsZW1lbnRSZWZlcmVuY2VzLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2hhZG93VGVtcGxhdGUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9UaW1lclNlbGVjdGlvbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL2NyZWF0ZVN5bWJvbC5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL21pY3JvdGFzay5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL3RvZ2dsZUNsYXNzLmpzIiwicGFja2FnZXMvYmFzaWMtZWxlbWVudC1iYXNlL3NyYy9FbGVtZW50QmFzZS5qcyIsInBhY2thZ2VzL2Jhc2ljLXNsaWRlc2hvdy9zcmMvU2xpZGVzaG93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ0NlLFVBQUMsSUFBSSxFQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQXFDakIsb0JBQW9COzs7Ozs7Ozs7Ozs7Ozs7K0NBS0MsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUU7QUFDakQsMkdBQW9DO0FBQUUsbUhBQWlDO1NBQUU7OztBQUFBLEFBR3pFLFlBQUksWUFBWSxHQUFHLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pELFlBQUksWUFBWSxJQUFJLElBQUksSUFBSSxFQUFFLFlBQVksSUFBSSxXQUFXLENBQUMsU0FBUyxDQUFBLEFBQUMsRUFBRTtBQUNwRSxjQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsUUFBUSxDQUFDO1NBQy9CO09BQ0Y7Ozs7Ozs7Ozs7Ozt3Q0FTaUI7OztBQUNoQixrR0FBMkI7QUFBRSwwR0FBd0I7U0FBRTtBQUN2RCxZQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0FBQUMsQUFDaEQsa0JBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQSxTQUFTLEVBQUk7QUFDOUIsaUJBQUssd0JBQXdCLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNFLENBQUMsQ0FBQztPQUNKOzs7O0lBNUJnQyxJQUFJOztBQWdDdkMsU0FBTyxvQkFBb0IsQ0FBQztDQUM3Qjs7OztBQUlELFNB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SSxTQUFTOzs7Ozs7Ozs7Ozt1Q0FFTTtBQUNqQixzRkFBNEI7QUFBRSw4RkFBeUI7T0FBRTs7O0FBQUEsQUFHekQsVUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTtBQUN4QixZQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7T0FDYjtLQUNGOzs7d0JBRWM7QUFDYixVQUFJLFFBQVEsR0FBRyxzRUFBa0IsRUFBRSxDQUFDO0FBQ3BDLGNBQVEsQ0FBQywwQkFBMEIsR0FBRyxHQUFHLENBQUM7QUFDMUMsY0FBUSxDQUFDLHdCQUF3QixHQUFHLFdBQVcsQ0FBQztBQUNoRCxjQUFRLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO0FBQ2xDLGNBQVEsQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUM7QUFDdkMsY0FBUSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7QUFDL0IsYUFBTyxRQUFRLENBQUM7S0FDakI7Ozt3QkFFYztBQUNiLCtIQU9FO0tBQ0g7Ozs7RUE5QnFCLElBQUk7O0FBbUM1QixRQUFRLENBQUMsZUFBZSxDQUFDLGlCQUFpQixFQUFFLFNBQVMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggQXR0cmlidXRlTWFyc2hhbGxpbmcuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYXJzaGFsbHMgYXR0cmlidXRlcyB0byBwcm9wZXJ0aWVzIChhbmQgZXZlbnR1YWxseSB2aWNlIHZlcnNhKS5cbiAgICpcbiAgICogSWYgeW91ciBjb21wb25lbnQgZXhwb3NlcyBhIHNldHRlciBmb3IgYSBwcm9wZXJ0eSwgaXQncyBnZW5lcmFsbHkgYSBnb29kXG4gICAqIGlkZWEgdG8gbGV0IGRldnMgdXNpbmcgeW91ciBjb21wb25lbnQgYmUgYWJsZSB0byBzZXQgdGhhdCBwcm9wZXJ0eSBpbiBIVE1MXG4gICAqIHZpYSBhbiBlbGVtZW50IGF0dHJpYnV0ZS4gWW91IGNhbiBjb2RlIHRoYXQgeW91cnNlbGYgYnkgd3JpdGluZyBhblxuICAgKiBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYCwgb3IgeW91IGNhbiB1c2UgdGhpcyBtaXhpbiB0byBnZXQgYSBkZWdyZWUgb2ZcbiAgICogYXV0b21hdGljIHN1cHBvcnQuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gaW1wbGVtZW50cyBhbiBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYCB0aGF0IHdpbGwgYXR0ZW1wdCB0b1xuICAgKiBjb252ZXJ0IGEgY2hhbmdlIGluIGFuIGVsZW1lbnQgYXR0cmlidXRlIGludG8gYSBjYWxsIHRvIHRoZSBjb3JyZXNwb25kaW5nXG4gICAqIHByb3BlcnR5IHNldHRlci4gQXR0cmlidXRlcyB0eXBpY2FsbHkgZm9sbG93IGh5cGhlbmF0ZWQgbmFtZXMgKFwiZm9vLWJhclwiKSxcbiAgICogd2hlcmVhcyBwcm9wZXJ0aWVzIHR5cGljYWxseSB1c2UgY2FtZWxDYXNlIG5hbWVzIChcImZvb0JhclwiKS4gVGhpcyBtaXhpblxuICAgKiByZXNwZWN0cyB0aGF0IGNvbnZlbnRpb24sIGF1dG9tYXRpY2FsbHkgbWFwcGluZyB0aGUgaHlwaGVuYXRlZCBhdHRyaWJ1dGVcbiAgICogbmFtZSB0byB0aGUgY29ycmVzcG9uZGluZyBjYW1lbENhc2UgcHJvcGVydHkgbmFtZS5cbiAgICpcbiAgICogRXhhbXBsZTogWW91IGRlZmluZSBhIGNvbXBvbmVudCB1c2luZyB0aGlzIG1peGluOlxuICAgKlxuICAgKiAgICAgY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgQXR0cmlidXRlTWFyc2hhbGxpbmcoSFRNTEVsZW1lbnQpIHtcbiAgICogICAgICAgZ2V0IGZvb0JhcigpIHsgcmV0dXJuIHRoaXMuX2Zvb0JhcjsgfVxuICAgKiAgICAgICBzZXQgZm9vQmFyKHZhbHVlKSB7IHRoaXMuX2Zvb0JhciA9IHZhbHVlOyB9XG4gICAqICAgICB9XG4gICAqICAgICBkb2N1bWVudC5yZWdpc3RlckVsZW1lbnQoJ215LWVsZW1lbnQnLCBNeUVsZW1lbnQpO1xuICAgKlxuICAgKiBJZiBzb21lb25lIHRoZW4gaW5zdGFudGlhdGVzIHlvdXIgY29tcG9uZW50IGluIEhUTUw6XG4gICAqXG4gICAqICAgICA8bXktZWxlbWVudCBmb28tYmFyPVwiSGVsbG9cIj48L215LWVsZW1lbnQ+XG4gICAqXG4gICAqIFRoZW4sIGFmdGVyIHRoZSBlbGVtZW50IGhhcyBiZWVuIHVwZ3JhZGVkLCB0aGUgYGZvb0JhcmAgc2V0dGVyIHdpbGxcbiAgICogYXV0b21hdGljYWxseSBiZSBpbnZva2VkIHdpdGggdGhlIGluaXRpYWwgdmFsdWUgXCJIZWxsb1wiLlxuICAgKlxuICAgKiBGb3IgdGhlIHRpbWUgYmVpbmcsIHRoaXMgbWl4aW4gb25seSBzdXBwb3J0cyBzdHJpbmctdmFsdWVkIHByb3BlcnRpZXMuXG4gICAqIElmIHlvdSdkIGxpa2UgdG8gY29udmVydCBzdHJpbmcgYXR0cmlidXRlcyB0byBvdGhlciB0eXBlcyAobnVtYmVycyxcbiAgICogYm9vbGVhbnMpLCB5b3UgbmVlZCB0byBpbXBsZW1lbnQgYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AgeW91cnNlbGYuXG4gICAqL1xuICBjbGFzcyBBdHRyaWJ1dGVNYXJzaGFsbGluZyBleHRlbmRzIGJhc2Uge1xuXG4gICAgLypcbiAgICAgKiBIYW5kbGUgYSBjaGFuZ2UgdG8gdGhlIGF0dHJpYnV0ZSB3aXRoIHRoZSBnaXZlbiBuYW1lLlxuICAgICAqL1xuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICAgIGlmIChzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2spIHsgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKCk7IH1cbiAgICAgIC8vIElmIHRoZSBhdHRyaWJ1dGUgbmFtZSBjb3JyZXNwb25kcyB0byBhIHByb3BlcnR5IG5hbWUsIHRoZW4gc2V0IHRoYXRcbiAgICAgIC8vIHByb3BlcnR5LiBJZ25vcmUgY2hhbmdlcyBpbiBzdGFuZGFyZCBIVE1MRWxlbWVudCBwcm9wZXJ0aWVzLlxuICAgICAgbGV0IHByb3BlcnR5TmFtZSA9IGF0dHJpYnV0ZVRvUHJvcGVydHlOYW1lKG5hbWUpO1xuICAgICAgaWYgKHByb3BlcnR5TmFtZSBpbiB0aGlzICYmICEocHJvcGVydHlOYW1lIGluIEhUTUxFbGVtZW50LnByb3RvdHlwZSkpIHtcbiAgICAgICAgdGhpc1twcm9wZXJ0eU5hbWVdID0gbmV3VmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBHZW5lcmF0ZSBhbiBpbml0aWFsIGNhbGwgdG8gYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIGZvciBlYWNoIGF0dHJpYnV0ZVxuICAgICAqIG9uIHRoZSBlbGVtZW50LlxuICAgICAqXG4gICAgICogVE9ETzogVGhlIHBsYW4gZm9yIEN1c3RvbSBFbGVtZW50cyB2MSBpcyBmb3IgdGhlIGJyb3dzZXIgdG8gaGFuZGxlIHRoaXMuXG4gICAgICogT25jZSB0aGF0J3MgaGFuZGxlZCAoaW5jbHVkaW5nIGluIHBvbHlmaWxscyksIHRoaXMgY2FsbCBjYW4gZ28gYXdheS5cbiAgICAgKi9cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgICBsZXQgYXR0cmlidXRlcyA9IFtdLnNsaWNlLmNhbGwodGhpcy5hdHRyaWJ1dGVzKTsgLy8gVG8gYXJyYXkgZm9yIElFXG4gICAgICBhdHRyaWJ1dGVzLmZvckVhY2goYXR0cmlidXRlID0+IHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soYXR0cmlidXRlLm5hbWUsIHVuZGVmaW5lZCwgYXR0cmlidXRlLnZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIEF0dHJpYnV0ZU1hcnNoYWxsaW5nO1xufTtcblxuXG4vLyBDb252ZXJ0IGNhbWVsIGNhc2UgZm9vQmFyIG5hbWUgdG8gaHlwaGVuYXRlZCBmb28tYmFyLlxuZnVuY3Rpb24gYXR0cmlidXRlVG9Qcm9wZXJ0eU5hbWUoYXR0cmlidXRlTmFtZSkge1xuICBsZXQgcHJvcGVydHlOYW1lID0gYXR0cmlidXRlTmFtZS5yZXBsYWNlKC8tKFthLXpdKS9nLCBtID0+IG1bMV0udG9VcHBlckNhc2UoKSk7XG4gIHJldHVybiBwcm9wZXJ0eU5hbWU7XG59XG5cbi8vIENvbnZlcnQgaHlwaGVuYXRlZCBmb28tYmFyIG5hbWUgdG8gY2FtZWwgY2FzZSBmb29CYXIuXG4vLyBUT0RPOiBVc2UgdGhpcyB3aGVuIHdlIHN1cHBvcnQgcmVmbGVjdGlvbiBvZiBwcm9wZXJ0aWVzIHRvIGF0dHJpYnV0ZXMuXG4vLyBmdW5jdGlvbiBwcm9wZXJ0eVRvQXR0cmlidXRlTmFtZShwcm9wZXJ0eU5hbWUpIHtcbi8vICAgbGV0IGF0dHJpYnV0ZU5hbWUgPSBwcm9wZXJ0eU5hbWUucmVwbGFjZSgvKFthLXpdW0EtWl0pL2csIGcgPT4gZ1swXSArICctJyArIGdbMV0udG9Mb3dlckNhc2UoKSk7XG4vLyAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuLy8gfVxuIiwiLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBDb21wb3NhYmxlLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gdG8gbWFrZSBhIGNsYXNzIG1vcmUgZWFzaWx5IGNvbXBvc2FibGUgd2l0aCBvdGhlciBtaXhpbnMuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gY29udHJpYnV0ZXMgYSBgY29tcG9zZWAgbWV0aG9kIHRoYXQgYXBwbGllcyBhIHNldCBvZiBtaXhpblxuICAgKiBmdW5jdGlvbnMgYW5kIHJldHVybnMgdGhlIHJlc3VsdGluZyBuZXcgY2xhc3MuIFRoaXMgc3VnYXIgY2FuIG1ha2UgdGhlXG4gICAqIGFwcGxpY2F0aW9uIG9mIG1hbnkgbWl4aW5zIGF0IG9uY2UgZWFzaWVyIHRvIHJlYWQuXG4gICAqL1xuICBjbGFzcyBDb21wb3NhYmxlIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKipcbiAgICAgKiBBcHBseSBhIHNldCBvZiBtaXhpbiBmdW5jdGlvbnMgb3IgbWl4aW4gb2JqZWN0cyB0byB0aGUgcHJlc2VudCBjbGFzcyBhbmRcbiAgICAgKiByZXR1cm4gdGhlIG5ldyBjbGFzcy5cbiAgICAgKlxuICAgICAqIEluc3RlYWQgb2Ygd3JpdGluZzpcbiAgICAgKlxuICAgICAqICAgICBsZXQgTXlDbGFzcyA9IE1peGluMShNaXhpbjIoTWl4aW4zKE1peGluNChNaXhpbjUoQmFzZUNsYXNzKSkpKSk7XG4gICAgICpcbiAgICAgKiBZb3UgY2FuIHdyaXRlOlxuICAgICAqXG4gICAgICogICAgIGxldCBNeUNsYXNzID0gQ29tcG9zYWJsZShCYXNlQ2xhc3MpLmNvbXBvc2UoXG4gICAgICogICAgICAgTWl4aW4xLFxuICAgICAqICAgICAgIE1peGluMixcbiAgICAgKiAgICAgICBNaXhpbjMsXG4gICAgICogICAgICAgTWl4aW40LFxuICAgICAqICAgICAgIE1peGluNVxuICAgICAqICAgICApO1xuICAgICAqXG4gICAgICogVGhpcyBmdW5jdGlvbiBjYW4gYWxzbyB0YWtlIG1peGluIG9iamVjdHMuIEEgbWl4aW4gb2JqZWN0IGlzIGp1c3QgYVxuICAgICAqIHNob3J0aGFuZCBmb3IgYSBtaXhpbiBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSBuZXcgc3ViY2xhc3Mgd2l0aCB0aGUgZ2l2ZW5cbiAgICAgKiBtZW1iZXJzLiBUaGUgbWl4aW4gb2JqZWN0J3MgbWVtYmVycyBhcmUgKm5vdCogY29waWVkIGRpcmVjdGx5IG9udG8gdGhlXG4gICAgICogcHJvdG90eXBlIG9mIHRoZSBiYXNlIGNsYXNzLCBhcyB3aXRoIHRyYWRpdGlvbmFsIG1peGlucy5cbiAgICAgKlxuICAgICAqIEluIGFkZGl0aW9uIHRvIHByb3ZpZGluZyBzeW50YWN0aWMgc3VnYXIsIHRoaXMgbWl4aW4gY2FuIGJlIHVzZWQgdG9cbiAgICAgKiBkZWZpbmUgYSBjbGFzcyBpbiBFUzUsIHdoaWNoIGxhY2tzIEVTNidzIGBjbGFzc2Aga2V5d29yZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Li4ubWl4aW5zfSBtaXhpbnMgLSBBIHNldCBvZiBtaXhpbiBmdW5jdGlvbnMgb3Igb2JqZWN0cyB0byBhcHBseS5cbiAgICAgKi9cbiAgICBzdGF0aWMgY29tcG9zZSguLi5taXhpbnMpIHtcbiAgICAgIC8vIFdlIGNyZWF0ZSBhIG5ldyBzdWJjbGFzcyBmb3IgZWFjaCBtaXhpbiBpbiB0dXJuLiBUaGUgcmVzdWx0IGJlY29tZXNcbiAgICAgIC8vIHRoZSBiYXNlIGNsYXNzIGV4dGVuZGVkIGJ5IGFueSBzdWJzZXF1ZW50IG1peGlucy4gSXQgdHVybnMgb3V0IHRoYXRcbiAgICAgIC8vIHdlIGNhbiB1c2UgQXJyYXkucmVkdWNlKCkgdG8gY29uY2lzZWx5IGV4cHJlc3MgdGhpcywgdXNpbmcgdGhlIGN1cnJlbnRcbiAgICAgIC8vIG9iamVjdCBhcyB0aGUgc2VlZCBmb3IgcmVkdWNlKCkuXG4gICAgICByZXR1cm4gbWl4aW5zLnJlZHVjZShjb21wb3NlQ2xhc3MsIHRoaXMpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIENvbXBvc2FibGU7XG59O1xuXG5cbi8vIFByb3BlcnRpZXMgZGVmaW5lZCBieSBPYmplY3QgdGhhdCB3ZSBkb24ndCB3YW50IHRvIG1peGluLlxuY29uc3QgTk9OX01JWEFCTEVfT0JKRUNUX1BST1BFUlRJRVMgPSBbXG4gICdjb25zdHJ1Y3Rvcidcbl07XG5cbi8qXG4gKiBBcHBseSB0aGUgbWl4aW4gdG8gdGhlIGdpdmVuIGJhc2UgY2xhc3MgdG8gcmV0dXJuIGEgbmV3IGNsYXNzLlxuICogVGhlIG1peGluIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG1vZGlmaWVkIGNsYXNzLCBvciBhXG4gKiBwbGFpbiBvYmplY3Qgd2hvc2UgbWVtYmVycyB3aWxsIGJlIGNvcGllZCB0byB0aGUgbmV3IGNsYXNzJyBwcm90b3R5cGUuXG4gKi9cbmZ1bmN0aW9uIGNvbXBvc2VDbGFzcyhiYXNlLCBtaXhpbikge1xuICBpZiAodHlwZW9mIG1peGluID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gTWl4aW4gZnVuY3Rpb25cbiAgICByZXR1cm4gbWl4aW4oYmFzZSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gTWl4aW4gb2JqZWN0XG4gICAgY2xhc3MgU3ViY2xhc3MgZXh0ZW5kcyBiYXNlIHt9XG4gICAgY29weU93blByb3BlcnRpZXMobWl4aW4sIFN1YmNsYXNzLnByb3RvdHlwZSwgTk9OX01JWEFCTEVfT0JKRUNUX1BST1BFUlRJRVMpO1xuICAgIHJldHVybiBTdWJjbGFzcztcbiAgfVxufVxuXG5cbi8qXG4gKiBDb3B5IHRoZSBnaXZlbiBwcm9wZXJ0aWVzL21ldGhvZHMgdG8gdGhlIHRhcmdldC5cbiAqIFJldHVybiB0aGUgdXBkYXRlZCB0YXJnZXQuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPd25Qcm9wZXJ0aWVzKHNvdXJjZSwgdGFyZ2V0LCBpZ25vcmVQcm9wZXJ0eU5hbWVzID0gW10pIHtcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgIGlmIChpZ25vcmVQcm9wZXJ0eU5hbWVzLmluZGV4T2YobmFtZSkgPCAwKSB7XG4gICAgICBsZXQgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBuYW1lKTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0YXJnZXQ7XG59XG4iLCJpbXBvcnQgdG9nZ2xlQ2xhc3MgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvdG9nZ2xlQ2xhc3MnO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggQ29udGVudEFzSXRlbXMuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYXBzIGNvbnRlbnQgc2VtYW50aWNzIChlbGVtZW50cykgdG8gbGlzdCBpdGVtIHNlbWFudGljcy5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBleHBlY3RzIGEgY29tcG9uZW50IHRvIHByb3ZpZGUgYSBgY29udGVudGAgcHJvcGVydHkgcmV0dXJuaW5nIGFcbiAgICogcmF3IHNldCBvZiBlbGVtZW50cy4gWW91IGNhbiBwcm92aWRlIHRoYXQgeW91cnNlbGYsIG9yIHVzZSB0aGVcbiAgICogW0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnRdKERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQubWQpIG1peGluLlxuICAgKlxuICAgKiBJdGVtcyBkaWZmZXIgZnJvbSBlbGVtZW50IGNvbnRlbnRzIGluIHNldmVyYWwgd2F5czpcbiAgICpcbiAgICogKiBUaGV5IGFyZSBvZnRlbiByZWZlcmVuY2VkIHZpYSBpbmRleC5cbiAgICogKiBUaGV5IG1heSBoYXZlIGEgc2VsZWN0aW9uIHN0YXRlLlxuICAgKiAqIEl0J3MgY29tbW9uIHRvIGRvIHdvcmsgdG8gaW5pdGlhbGl6ZSB0aGUgYXBwZWFyYW5jZSBvciBzdGF0ZSBvZiBhIG5ld1xuICAgKiAgIGl0ZW0uXG4gICAqICogQXV4aWxpYXJ5IGludmlzaWJsZSBjaGlsZCBlbGVtZW50cyBhcmUgZmlsdGVyZWQgb3V0IGFuZCBub3QgY291bnRlZCBhc1xuICAgKiAgIGl0ZW1zLiBBdXhpbGlhcnkgZWxlbWVudHMgaW5jbHVkZSBsaW5rLCBzY3JpcHQsIHN0eWxlLCBhbmQgdGVtcGxhdGVcbiAgICogICBlbGVtZW50cy4gVGhpcyBmaWx0ZXJpbmcgZW5zdXJlcyB0aGF0IHRob3NlIGF1eGlsaWFyeSBlbGVtZW50cyBjYW4gYmVcbiAgICogICB1c2VkIGluIG1hcmt1cCBpbnNpZGUgb2YgYSBsaXN0IHdpdGhvdXQgYmVpbmcgdHJlYXRlZCBhcyBsaXN0IGl0ZW1zLlxuICAgKi9cbiAgY2xhc3MgQ29udGVudEFzSXRlbXMgZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qKlxuICAgICAqIEFwcGx5IHRoZSBzZWxlY3Rpb24gc3RhdGUgdG8gYSBzaW5nbGUgaXRlbS5cbiAgICAgKlxuICAgICAqIEludm9rZSB0aGlzIG1ldGhvZCB0byBzaWduYWwgdGhhdCB0aGUgc2VsZWN0ZWQgc3RhdGUgb2YgdGhlIGluZGljYXRlZCBpdGVtXG4gICAgICogaGFzIGNoYW5nZWQuIEJ5IGRlZmF1bHQsIHRoaXMgYXBwbGllcyBhIGBzZWxlY3RlZGAgQ1NTIGNsYXNzIGlmIHRoZSBpdGVtXG4gICAgICogaXMgc2VsZWN0ZWQsIGFuZCByZW1vdmVkIGl0IGlmIG5vdCBzZWxlY3RlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW0gLSBUaGUgaXRlbSB3aG9zZSBzZWxlY3Rpb24gc3RhdGUgaGFzIGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBzZWxlY3RlZCAtIFRydWUgaWYgdGhlIGl0ZW0gaXMgc2VsZWN0ZWQsIGZhbHNlIGlmIG5vdC5cbiAgICAgKi9cbiAgICBhcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCkge1xuICAgICAgaWYgKHN1cGVyLmFwcGx5U2VsZWN0aW9uKSB7IHN1cGVyLmFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKTsgfVxuICAgICAgdG9nZ2xlQ2xhc3MoaXRlbSwgJ3NlbGVjdGVkJywgc2VsZWN0ZWQpO1xuICAgIH1cblxuICAgIGNvbnRlbnRDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbnRlbnRDaGFuZ2VkKSB7IHN1cGVyLmNvbnRlbnRDaGFuZ2VkKCk7IH1cbiAgICAgIHRoaXMuX2l0ZW1zID0gbnVsbDtcbiAgICAgIHRoaXMuaXRlbXNDaGFuZ2VkKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuZXZlciBhIG5ldyBpdGVtIGlzIGFkZGVkIHRvIHRoZSBsaXN0LlxuICAgICAqXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLiBZb3UgY2FuIG92ZXJyaWRlXG4gICAgICogdGhpcyB0byBwZXJmb3JtIHBlci1pdGVtIGluaXRpYWxpemF0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbSAtIFRoZSBpdGVtIHRoYXQgd2FzIGFkZGVkLlxuICAgICAqL1xuICAgIGl0ZW1BZGRlZChpdGVtKSB7XG4gICAgICBpZiAoc3VwZXIuaXRlbUFkZGVkKSB7IHN1cGVyLml0ZW1BZGRlZChpdGVtKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHNldCBvZiBpdGVtcyBpbiB0aGUgbGlzdC4gU2VlIHRoZSB0b3AtbGV2ZWwgZG9jdW1lbnRhdGlvbiBmb3JcbiAgICAgKiBtaXhpbiBmb3IgYSBkZXNjcmlwdGlvbiBvZiBob3cgaXRlbXMgZGlmZmVyIGZyb20gcGxhaW4gY29udGVudC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIGdldCBpdGVtcygpIHtcbiAgICAgIGlmICh0aGlzLl9pdGVtcyA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX2l0ZW1zID0gZmlsdGVyQXV4aWxpYXJ5RWxlbWVudHModGhpcy5jb250ZW50KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gdGhlIHVuZGVybHlpbmcgY29udGVudHMgY2hhbmdlLiBJdCBpcyBhbHNvXG4gICAgICogaW52b2tlZCBvbiBjb21wb25lbnQgaW5pdGlhbGl6YXRpb24g4oCTIHNpbmNlIHRoZSBpdGVtcyBoYXZlIFwiY2hhbmdlZFwiIGZyb21cbiAgICAgKiBiZWluZyBub3RoaW5nLlxuICAgICAqL1xuICAgIGl0ZW1zQ2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5pdGVtc0NoYW5nZWQpIHsgc3VwZXIuaXRlbXNDaGFuZ2VkKCk7IH1cblxuICAgICAgLy8gUGVyZm9ybSBwZXItaXRlbSBpbml0aWFsaXphdGlvbi5cbiAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKCFpdGVtLl9pdGVtSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICB0aGlzLml0ZW1BZGRlZChpdGVtKTtcbiAgICAgICAgICBpdGVtLl9pdGVtSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnaXRlbXMtY2hhbmdlZCcpKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEBldmVudCBpdGVtcy1jaGFuZ2VkXG4gICAgICpcbiAgICAgKiBUaGlzIGV2ZW50IGlzIHJhaXNlZCB3aGVuIHRoZSBzZXQgb2YgaXRlbXMgY2hhbmdlcy5cbiAgICAgKi9cbiAgfVxuXG4gIHJldHVybiBDb250ZW50QXNJdGVtcztcbn07XG5cblxuLy8gUmV0dXJuIHRoZSBnaXZlbiBlbGVtZW50cywgZmlsdGVyaW5nIG91dCBhdXhpbGlhcnkgZWxlbWVudHMgdGhhdCBhcmVuJ3Rcbi8vIHR5cGljYWxseSB2aXNpYmxlLiBJdGVtcyB3aGljaCBhcmUgbm90IGVsZW1lbnRzIGFyZSByZXR1cm5lZCBhcyBpcy5cbmZ1bmN0aW9uIGZpbHRlckF1eGlsaWFyeUVsZW1lbnRzKGl0ZW1zKSB7XG4gIGxldCBhdXhpbGlhcnlUYWdzID0gW1xuICAgICdsaW5rJyxcbiAgICAnc2NyaXB0JyxcbiAgICAnc3R5bGUnLFxuICAgICd0ZW1wbGF0ZSdcbiAgXTtcbiAgcmV0dXJuIFtdLmZpbHRlci5jYWxsKGl0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuICFpdGVtLmxvY2FsTmFtZSB8fCBhdXhpbGlhcnlUYWdzLmluZGV4T2YoaXRlbS5sb2NhbE5hbWUpIDwgMDtcbiAgfSk7XG59XG5cblxuLyoqXG4gKiBGaXJlcyB3aGVuIHRoZSBpdGVtcyBpbiB0aGUgbGlzdCBjaGFuZ2UuXG4gKlxuICogQG1lbWJlcm9mIENvbnRlbnRBc0l0ZW1zXG4gKiBAZXZlbnQgaXRlbXMtY2hhbmdlZFxuICovXG4iLCIvLyBUT0RPOiBSYXRpb25hbGl6ZSB3aXRoIG5ldyBDdXN0b20gRWxlbWVudHMgQVBJLlxuLy8gVE9ETzogQ29uc2lkZXIgcmVuYW1pbmcgdG8gbWF0Y2ggQ3VzdG9tIEVsZW1lbnRzIEFQSS5cblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIERpc3RyaWJ1dGVkQ2hpbGRyZW4uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBkZWZpbmVzIGhlbHBlcnMgZm9yIGFjY2Vzc2luZyBhIGNvbXBvbmVudCdzIGRpc3RyaWJ1dGVkXG4gICAqIGNoaWxkcmVuIGFzIGEgZmxhdHRlbmVkIGFycmF5IG9yIHN0cmluZy5cbiAgICpcbiAgICogVGhlIHN0YW5kYXJkIERPTSBBUEkgcHJvdmlkZXMgc2V2ZXJhbCB3YXlzIG9mIGFjY2Vzc2luZyBjaGlsZCBjb250ZW50OlxuICAgKiBgY2hpbGRyZW5gLCBgY2hpbGROb2Rlc2AsIGFuZCBgdGV4dENvbnRlbnRgLiBOb25lIG9mIHRoZXNlIGZ1bmN0aW9ucyBhcmVcbiAgICogU2hhZG93IERPTSBhd2FyZS4gVGhpcyBtaXhpbiBkZWZpbmVzIHZhcmlhdGlvbnMgb2YgdGhvc2UgZnVuY3Rpb25zIHRoYXRcbiAgICogKmFyZSogU2hhZG93IERPTSBhd2FyZS5cbiAgICpcbiAgICogRXhhbXBsZTogeW91IGNyZWF0ZSBhIGNvbXBvbmVudCBgPGNvdW50LWNoaWxkcmVuPmAgdGhhdCBkaXNwbGF5cyBhIG51bWJlclxuICAgKiBlcXVhbCB0byB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHBsYWNlZCBpbnNpZGUgdGhhdCBjb21wb25lbnQuIElmIHNvbWVvbmVcbiAgICogaW5zdGFudGlhdGVzIHlvdXIgY29tcG9uZW50IGxpa2U6XG4gICAqXG4gICAqICAgICA8Y291bnQtY2hpbGRyZW4+XG4gICAqICAgICAgIDxkaXY+PC9kaXY+XG4gICAqICAgICAgIDxkaXY+PC9kaXY+XG4gICAqICAgICAgIDxkaXY+PC9kaXY+XG4gICAqICAgICA8L2NvdW50LWNoaWxkcmVuPlxuICAgKlxuICAgKiBUaGVuIHRoZSBjb21wb25lbnQgc2hvdWxkIHNob3cgXCIzXCIsIGJlY2F1c2UgdGhlcmUgYXJlIHRocmVlIGNoaWxkcmVuLiBUb1xuICAgKiBjYWxjdWxhdGUgdGhlIG51bWJlciBvZiBjaGlsZHJlbiwgdGhlIGNvbXBvbmVudCBjYW4ganVzdCBjYWxjdWxhdGVcbiAgICogYHRoaXMuY2hpbGRyZW4ubGVuZ3RoYC4gSG93ZXZlciwgc3VwcG9zZSBzb21lb25lIGluc3RhbnRpYXRlcyB5b3VyXG4gICAqIGNvbXBvbmVudCBpbnNpZGUgb25lIG9mIHRoZWlyIG93biBjb21wb25lbnRzLCBhbmQgcHV0cyBhIGA8c2xvdD5gIGVsZW1lbnRcbiAgICogaW5zaWRlIHlvdXIgY29tcG9uZW50OlxuICAgKlxuICAgKiAgICAgPGNvdW50LWNoaWxkcmVuPlxuICAgKiAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAqICAgICA8L2NvdW50LWNoaWxkcmVuPlxuICAgKlxuICAgKiBJZiB5b3VyIGNvbXBvbmVudCBvbmx5IGxvb2tzIGF0IGB0aGlzLmNoaWxkcmVuYCwgaXQgd2lsbCBhbHdheXMgc2VlIGV4YWN0bHlcbiAgICogb25lIGNoaWxkIOKAlMKgdGhlIGA8c2xvdD5gIGVsZW1lbnQuIEJ1dCB0aGUgdXNlciBsb29raW5nIGF0IHRoZSBwYWdlIHdpbGxcbiAgICogKnNlZSogYW55IG5vZGVzIGRpc3RyaWJ1dGVkIHRvIHRoYXQgc2xvdC4gVG8gbWF0Y2ggd2hhdCB0aGUgdXNlciBzZWVzLCB5b3VyXG4gICAqIGNvbXBvbmVudCBzaG91bGQgZXhwYW5kIGFueSBgPHNsb3Q+YCBlbGVtZW50cyBpdCBjb250YWlucy5cbiAgICpcbiAgICogVGhhdCBpcyB0aGUgcHJvYmxlbSB0aGlzIG1peGluIHNvbHZlcy4gQWZ0ZXIgYXBwbHlpbmcgdGhpcyBtaXhpbiwgeW91clxuICAgKiBjb21wb25lbnQgY29kZSBoYXMgYWNjZXNzIHRvIGB0aGlzLmRpc3RyaWJ1dGVkQ2hpbGRyZW5gLCB3aG9zZSBgbGVuZ3RoYFxuICAgKiB3aWxsIHJldHVybiB0aGUgdG90YWwgbnVtYmVyIG9mIGFsbCBjaGlsZHJlbiBkaXN0cmlidXRlZCB0byB5b3VyIGNvbXBvbmVudFxuICAgKiBpbiB0aGUgY29tcG9zZWQgdHJlZS5cbiAgICpcbiAgICogTm90ZTogVGhlIGxhdGVzdCBDdXN0b20gRWxlbWVudHMgQVBJIGRlc2lnbiBjYWxscyBmb3IgYSBuZXcgZnVuY3Rpb24sXG4gICAqIGBnZXRBc3NpZ25lZE5vZGVzYCB0aGF0IHRha2VzIGFuIG9wdGlvbmFsIGBkZWVwYCBwYXJhbWV0ZXIsIHRoYXQgd2lsbCBzb2x2ZVxuICAgKiB0aGlzIHByb2JsZW0gYXQgdGhlIEFQSSBsZXZlbC5cbiAgICovXG4gIGNsYXNzIERpc3RyaWJ1dGVkQ2hpbGRyZW4gZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qKlxuICAgICAqIEFuIGluLW9yZGVyIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4sIGV4cGFuZGluZyBhbnkgc2xvdCBlbGVtZW50cy4gTGlrZSB0aGVcbiAgICAgKiBzdGFuZGFyZCBjaGlsZHJlbiBwcm9wZXJ0eSwgdGhpcyBza2lwcyB0ZXh0IG5vZGVzLlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50W119XG4gICAgICovXG4gICAgZ2V0IGRpc3RyaWJ1dGVkQ2hpbGRyZW4oKSB7XG4gICAgICByZXR1cm4gZXhwYW5kQ29udGVudEVsZW1lbnRzKHRoaXMuY2hpbGRyZW4sIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbi1vcmRlciBjb2xsZWN0aW9uIG9mIGNoaWxkIG5vZGVzLCBleHBhbmRpbmcgYW55IHNsb3QgZWxlbWVudHMuIExpa2VcbiAgICAgKiB0aGUgc3RhbmRhcmQgY2hpbGROb2RlcyBwcm9wZXJ0eSwgdGhpcyBpbmNsdWRlcyB0ZXh0IG5vZGVzLlxuICAgICAqXG4gICAgICogQHR5cGUge05vZGVbXX1cbiAgICAgKi9cbiAgICBnZXQgZGlzdHJpYnV0ZWRDaGlsZE5vZGVzKCkge1xuICAgICAgcmV0dXJuIGV4cGFuZENvbnRlbnRFbGVtZW50cyh0aGlzLmNoaWxkTm9kZXMsIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjb25jYXRlbmF0ZWQgdGV4dCBjb250ZW50IG9mIGFsbCBjaGlsZCBub2RlcywgZXhwYW5kaW5nIGFueSBzbG90XG4gICAgICogZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldCBkaXN0cmlidXRlZFRleHRDb250ZW50KCkge1xuICAgICAgbGV0IHN0cmluZ3MgPSB0aGlzLmRpc3RyaWJ1dGVkQ2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkLnRleHRDb250ZW50O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gc3RyaW5ncy5qb2luKCcnKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBEaXN0cmlidXRlZENoaWxkcmVuO1xufTtcblxuXG4vKlxuICogR2l2ZW4gYSBhcnJheSBvZiBub2RlcywgcmV0dXJuIGEgbmV3IGFycmF5IHdpdGggYW55IGNvbnRlbnQgZWxlbWVudHMgZXhwYW5kZWRcbiAqIHRvIHRoZSBub2RlcyBkaXN0cmlidXRlZCB0byB0aGF0IGNvbnRlbnQgZWxlbWVudC4gVGhpcyBydWxlIGlzIGFwcGxpZWRcbiAqIHJlY3Vyc2l2ZWx5LlxuICpcbiAqIElmIGluY2x1ZGVUZXh0Tm9kZXMgaXMgdHJ1ZSwgdGV4dCBub2RlcyB3aWxsIGJlIGluY2x1ZGVkLCBhcyBpbiB0aGVcbiAqIHN0YW5kYXJkIGNoaWxkTm9kZXMgcHJvcGVydHk7IGJ5IGRlZmF1bHQsIHRoaXMgc2tpcHMgdGV4dCBub2RlcywgbGlrZSB0aGVcbiAqIHN0YW5kYXJkIGNoaWxkcmVuIHByb3BlcnR5LlxuICovXG5mdW5jdGlvbiBleHBhbmRDb250ZW50RWxlbWVudHMobm9kZXMsIGluY2x1ZGVUZXh0Tm9kZXMpIHtcbiAgbGV0IGV4cGFuZGVkID0gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKG5vZGVzLCBub2RlID0+IHtcbiAgICAvLyBXZSB3YW50IHRvIHNlZSBpZiB0aGUgbm9kZSBpcyBhbiBpbnN0YW5jZW9mIEhUTUxTbG90RUxlbWVudCwgYnV0XG4gICAgLy8gdGhhdCBjbGFzcyB3b24ndCBleGlzdCBpZiB0aGUgYnJvd3NlciB0aGF0IGRvZXNuJ3Qgc3VwcG9ydCBuYXRpdmVcbiAgICAvLyBTaGFkb3cgRE9NIGFuZCBpZiB0aGUgU2hhZG93IERPTSBwb2x5ZmlsbCBoYXNuJ3QgYmVlbiBsb2FkZWQuIEluc3RlYWQsXG4gICAgLy8gd2UgZG8gYSBzaW1wbGlzdGljIGNoZWNrIHRvIHNlZSBpZiB0aGUgdGFnIG5hbWUgaXMgXCJzbG90XCIgb3IgXCJjb250ZW50XCIuXG4gICAgaWYgKG5vZGUubG9jYWxOYW1lICYmIChub2RlLmxvY2FsTmFtZSA9PT0gXCJzbG90XCIgfHwgbm9kZS5sb2NhbE5hbWUgPT09IFwiY29udGVudFwiKSkge1xuICAgICAgLy8gY29udGVudCBlbGVtZW50OyB1c2UgaXRzIGRpc3RyaWJ1dGVkIG5vZGVzIGluc3RlYWQuXG4gICAgICBsZXQgZGlzdHJpYnV0ZWROb2RlcyA9IG5vZGUuZ2V0RGlzdHJpYnV0ZWROb2RlcygpO1xuICAgICAgcmV0dXJuIGRpc3RyaWJ1dGVkTm9kZXMgP1xuICAgICAgICBleHBhbmRDb250ZW50RWxlbWVudHMoZGlzdHJpYnV0ZWROb2RlcywgaW5jbHVkZVRleHROb2RlcykgOlxuICAgICAgICBbXTtcbiAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgLy8gUGxhaW4gZWxlbWVudDsgdXNlIGFzIGlzLlxuICAgICAgcmV0dXJuIFtub2RlXTtcbiAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBUZXh0ICYmIGluY2x1ZGVUZXh0Tm9kZXMpIHtcbiAgICAgIC8vIFRleHQgbm9kZS5cbiAgICAgIHJldHVybiBbbm9kZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENvbW1lbnQsIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb24sIGV0Yy47IHNraXAuXG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9KTtcbiAgbGV0IGZsYXR0ZW5lZCA9IFtdLmNvbmNhdCguLi5leHBhbmRlZCk7XG4gIHJldHVybiBmbGF0dGVuZWQ7XG59XG4iLCIvKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBkZWZpbmVzIGEgY29tcG9uZW50J3MgY29udGVudCBhcyBpdHMgY2hpbGRyZW4sIGV4cGFuZGluZyBhbnlcbiAgICogbm9kZXMgZGlzdHJpYnV0ZWQgdG8gdGhlIGNvbXBvbmVudCdzIHNsb3RzLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGlzIGludGVuZGVkIGZvciB1c2Ugd2l0aCB0aGVcbiAgICogW0Rpc3RyaWJ1dGVkQ2hpbGRyZW5dKERpc3RyaWJ1dGVkQ2hpbGRyZW4ubWQpIG1peGluLiBTZWUgdGhhdCBtaXhpbiBmb3IgYVxuICAgKiBkaXNjdXNzaW9uIG9mIGhvdyB0aGF0IHdvcmtzLiBUaGlzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQgbWl4aW5cbiAgICogcHJvdmlkZXMgYW4gZWFzeSB3YXkgb2YgZGVmaW5pbmcgdGhlIFwiY29udGVudFwiIG9mIGEgY29tcG9uZW50IGFzIHRoZVxuICAgKiBjb21wb25lbnQncyBkaXN0cmlidXRlZCBjaGlsZHJlbi4gVGhhdCBpbiB0dXJuIGxldHMgbWl4aW5zIGxpa2VcbiAgICogW0NvbnRlbnRBc0l0ZW1zXShDb250ZW50QXNJdGVtcy5tZCkgbWFuaXB1bGF0ZSB0aGUgY2hpbGRyZW4gYXMgbGlzdCBpdGVtcy5cbiAgICovXG4gIGNsYXNzIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQgZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb250ZW50IG9mIHRoaXMgY29tcG9uZW50LCBkZWZpbmVkIHRvIGJlIHRoZSBmbGF0dGVuZWQgYXJyYXkgb2ZcbiAgICAgKiBjaGlsZHJlbiBkaXN0cmlidXRlZCB0byB0aGUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50W119XG4gICAgICovXG4gICAgZ2V0IGNvbnRlbnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kaXN0cmlidXRlZENoaWxkcmVuO1xuICAgIH1cbiAgICBzZXQgY29udGVudCh2YWx1ZSkge1xuICAgICAgaWYgKCdjb250ZW50JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5jb250ZW50ID0gdmFsdWU7IH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50O1xufTtcbiIsIi8vIFRPRE86IERyb3AgdXNlIG9mIFwiTWl4aW5cIiBpbiBuYW1lLlxuXG5pbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcblxuY29uc3Qgc2VsZWN0ZWRGcmFjdGlvblN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc2VsZWN0ZWRGcmFjdGlvbicpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggRnJhY3Rpb25hbFNlbGVjdGlvbi4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1peGluKGJhc2UpIHtcblxuICBjbGFzcyBGcmFjdGlvbmFsU2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBhdHRhY2hlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmF0dGFjaGVkQ2FsbGJhY2spIHsgc3VwZXIuYXR0YWNoZWRDYWxsYmFjaygpOyB9XG4gICAgICB0aGlzLnNlbGVjdGVkRnJhY3Rpb24gPSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgZnJhY3Rpb25hbCB2YWx1ZSBpbmRpY2F0aW5nIGhvdyBmYXIgdGhlIHVzZXIgaGFzIGN1cnJlbnRseSBhZHZhbmNlZCB0b1xuICAgICAqIHRoZSBuZXh0L3ByZXZpb3VzIGl0ZW0uIEUuZy4sIGEgYHNlbGVjdGVkRnJhY3Rpb25gIG9mIDMuNSBpbmRpY2F0ZXMgdGhlXG4gICAgICogdXNlciBpcyBoYWxmd2F5IGJldHdlZW4gaXRlbXMgMyBhbmQgNC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGVkRnJhY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpc1tzZWxlY3RlZEZyYWN0aW9uU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkRnJhY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRGcmFjdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRGcmFjdGlvbiA9IHZhbHVlOyB9XG4gICAgICB0aGlzW3NlbGVjdGVkRnJhY3Rpb25TeW1ib2xdID0gdmFsdWU7XG4gICAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3NlbGVjdGlvbi1mcmFjdGlvbi1jaGFuZ2VkJyk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIEZyYWN0aW9uYWxTZWxlY3Rpb247XG59XG5cblxuLypcbiAqIEhlbHBlciBmdW5jdGlvbnMgZm9yIHdvcmtpbmcgd2l0aCBhIHNlbGVjdGlvbiBhcyBhIHJlYWwgbnVtYmVyIHRoYXQgY29tYmluZXNcbiAqIGFuIGludGVnZXIgaW5kZXggaW50byBhIGxpc3QsIGFuZCBhIGZyYWN0aW9uIGluZGljYXRpbmcgaG93IGZhciBvZiB0aGUgd2F5IHdlXG4gKiBhcmUgdG8gdGhlIG5leHQgb3IgcHJldmlvdXMgaXRlbS5cbiAqL1xubWl4aW4uaGVscGVycyA9IHtcblxuICAvKipcbiAgICogRGFtcGVuIGEgc2VsZWN0aW9uIHRoYXQgZ29lcyBwYXN0IHRoZSBiZWdpbm5pbmcgb3IgZW5kIG9mIGEgbGlzdC4gVGhpcyBpc1xuICAgKiBnZW5lcmFsbHkgdXNlZCB0byBwcm9kdWNlIGEgdmlzdWFsIGVmZmVjdCBvZiB0ZW5zaW9uIGFzIHRoZSB1c2VyIHRyaWVzIHRvXG4gICAqIGdvIGZ1cnRoZXIgaW4gYSBkaXJlY3Rpb24gdGhhdCBoYXMgbm8gbW9yZSBpdGVtcy5cbiAgICpcbiAgICogRXhhbXBsZTogc3VwcG9zZSBgaXRlbUNvdW50YCBpcyA1LCBpbmRpY2F0aW5nIGEgbGlzdCBvZiA1IGl0ZW1zLiBUaGUgaW5kZXggb2ZcbiAgICogdGhlIGxhc3QgaXRlbSBpcyA0LiBJZiB0aGUgYHNlbGVjdGlvbmAgcGFyYW1ldGVyIGlzIDQuNSwgdGhlIHVzZXIgaXMgdHJ5aW5nXG4gICAqIHRvIGdvIHBhc3QgdGhpcyBsYXN0IGl0ZW0uIFdoZW4gYSBkYW1waW5nIGZ1bmN0aW9uIGlzIGFwcGxpZWQsIHRoZSByZXN1bHRpbmdcbiAgICogdmFsdWUgd2lsbCBiZSBsZXNzIHRoYW4gNC41ICh0aGUgYWN0dWFsIHZhbHVlIHdpbGwgYmUgNC4yNSkuIFdoZW4gdGhpc1xuICAgKiBzZWxlY3Rpb24gc3RhdGUgaXMgcmVuZGVyZWQsIHRoZSB1c2VyIHdpbGwgc2VlIHRoYXQsIGVhY2ggdW5pdCBkaXN0YW5jZSB0aGVcbiAgICogZHJhZyB0cmF2ZWxzIGhhcyBsZXNzIGFuZCBsZXNzIHZpc2libGUgZWZmZWN0LiBUaGlzIGlzIHBlcmNlaXZlZCBhcyB0ZW5zaW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2VsZWN0aW9uIC0gQSByZWFsIG51bWJlciBpbmRpY2F0aW5nIGEgc2VsZWN0aW9uIHBvc2l0aW9uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpdGVtQ291bnQgLSBBbiBpbnRlZ2VyIGZvciB0aGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBsaXN0XG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IEEgcmVhbCBudW1iZXIgcmVwcmVzZW50aW5nIHRoZSBkYW1wZWQgc2VsZWN0aW9uIHZhbHVlLlxuICAgKi9cbiAgZGFtcGVkU2VsZWN0aW9uKHNlbGVjdGlvbiwgaXRlbUNvdW50KSB7XG4gICAgbGV0IGRhbXBlZDtcbiAgICBsZXQgYm91bmQgPSBpdGVtQ291bnQgLSAxO1xuICAgIGlmIChzZWxlY3Rpb24gPCAwKSB7XG4gICAgICAvLyBUcnlpbmcgdG8gZ28gcGFzdCBiZWdpbm5pbmcgb2YgbGlzdC4gQXBwbHkgdGVuc2lvbiBmcm9tIHRoZSBsZWZ0IGVkZ2UuXG4gICAgICBkYW1wZWQgPSAtbWl4aW4uaGVscGVycy5kYW1waW5nKC1zZWxlY3Rpb24pO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0aW9uID49IGJvdW5kKSB7XG4gICAgICAvLyBUcnlpbmcgdG8gZ28gcGFzdCBlbmQgb2YgbGlzdC4gQXBwbHkgdGVuc2lvbiBmcm9tIHRoZSByaWdodCBlZGdlLlxuICAgICAgZGFtcGVkID0gYm91bmQgKyBtaXhpbi5oZWxwZXJzLmRhbXBpbmcoc2VsZWN0aW9uIC0gYm91bmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBObyBkYW1waW5nIHJlcXVpcmVkLlxuICAgICAgZGFtcGVkID0gc2VsZWN0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gZGFtcGVkO1xuICB9LFxuXG4gIC8qXG4gICAqIENhbGN1bGF0ZSBkYW1waW5nIGFzIGEgZnVuY3Rpb24gb2YgdGhlIGRpc3RhbmNlIHBhc3QgdGhlIG1pbmltdW0vbWF4aW11bVxuICAgKiB2YWx1ZXMuXG4gICAqXG4gICAqIFdlIHdhbnQgdG8gYXN5bXB0b3RpY2FsbHkgYXBwcm9hY2ggYW4gYWJzb2x1dGUgbWluaW11bSBvZiAxIHVuaXRcbiAgICogYmVsb3cvYWJvdmUgdGhlIGFjdHVhbCBtaW5pbXVtL21heGltdW0uIFRoaXMgcmVxdWlyZXMgY2FsY3VsYXRpbmcgYVxuICAgKiBoeXBlcmJvbGljIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBTZWUgaHR0cDovL3d3dy53b2xmcmFtYWxwaGEuY29tL2lucHV0Lz9pPXkrJTNEKy0xJTJGJTI4eCUyQjElMjkrJTJCKzFcbiAgICogZm9yIHRoZSBvbmUgd2UgdXNlLiBUaGUgb25seSBwb3J0aW9uIG9mIHRoYXQgZnVuY3Rpb24gd2UgY2FyZSBhYm91dCBpcyB3aGVuXG4gICAqIHggaXMgemVybyBvciBncmVhdGVyLiBBbiBpbXBvcnRhbnQgY29uc2lkZXJhdGlvbiBpcyB0aGF0IHRoZSBjdXJ2ZSBiZVxuICAgKiB0YW5nZW50IHRvIHRoZSBkaWFnb25hbCBsaW5lIHg9eSBhdCAoMCwgMCkuIFRoaXMgZW5zdXJlcyBzbW9vdGggY29udGludWl0eVxuICAgKiB3aXRoIHRoZSBub3JtYWwgZHJhZyBiZWhhdmlvciwgaW4gd2hpY2ggdGhlIHZpc2libGUgc2xpZGluZyBpcyBsaW5lYXIgd2l0aFxuICAgKiB0aGUgZGlzdGFuY2UgdGhlIHRvdWNocG9pbnQgaGFzIGJlZW4gZHJhZ2dlZC5cbiAgICovXG4gIGRhbXBpbmcoeCkge1xuICAgIGxldCB5ID0gKC0xIC8gKHggKyAxKSkgKyAxO1xuICAgIHJldHVybiB5O1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgZnJhY3Rpb25hbCBzZWxlY3Rpb24gdmFsdWUgZm9yIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKlxuICAgKiBUaGlzIHNpbXBseSBhZGRzIHRoZSBlbGVtZW50J3MgYHNlbGVjdGVkSW5kZXhgIGFuZCBgc2VsZWN0ZWRGcmFjdGlvbmBcbiAgICogcHJvcGVydGllcy5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIEFuIGVsZW1lbnQgdGhhdCBzdXBwb3J0cyBzZWxlY3Rpb25cbiAgICovXG4gIGVsZW1lbnRTZWxlY3Rpb24oZWxlbWVudCkge1xuICAgIGxldCBzZWxlY3RlZEluZGV4ID0gZWxlbWVudC5zZWxlY3RlZEluZGV4O1xuICAgIGlmIChzZWxlY3RlZEluZGV4IDwgMCkge1xuICAgICAgLy8gTm8gc2VsZWN0aW9uXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBzZWxlY3RlZEZyYWN0aW9uID0gZWxlbWVudC5zZWxlY3RlZEZyYWN0aW9uIHx8IDA7XG4gICAgcmV0dXJuIHNlbGVjdGVkSW5kZXggKyBzZWxlY3RlZEZyYWN0aW9uO1xuICB9LFxuXG4gIC8qKlxuICAgKiBCcmVha3MgYSBmcmFjdGlvbmFsIHNlbGVjdGlvbiBpbnRvIGl0cyBpbnRlZ2VyIGFuZCBmcmFjdGlvbmFsIHBhcnRzLlxuICAgKlxuICAgKiBFeGFtcGxlOiBpZiBwYXNzZWQgMy41LCB0aGlzIHJldHVybnMgeyBpbmRleDogMywgZnJhY3Rpb246IDUgfS5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNlbGVjdGlvbiDigJPCoEEgcmVhbCBudW1iZXIgcmVwcmVzZW50aW5nIGEgc2VsZWN0aW9uIHBvaW50XG4gICAqIEByZXR1cm5zIHtvYmplY3R9IC0gQW4gb2JqZWN0IHdpdGggYW4gYGluZGV4YCBwcm9wZXJ0eSBob2xkaW5nIHRoZVxuICAgKiBzZWxlY3Rpb24ncyBpbnRlZ2VyIGNvbXBvbmVudCwgYW5kIGEgYGZyYWN0aW9uYCBwcm9wZXJ0eSBob2xkaW5nIHRoZVxuICAgKiBzZWxlY3Rpb24ncyBmcmFjdGlvbmFsIGNvbXBvbmVudC5cbiAgICovXG4gIHNlbGVjdGlvblBhcnRzKHNlbGVjdGlvbikge1xuICAgIC8vIFN0dXBpZCBJRSBkb2Vzbid0IGhhdmUgTWF0aC50cnVuYy5cbiAgICAvLyBsZXQgaW5kZXggPSBNYXRoLnRydW5jKHNlbGVjdGlvbik7XG4gICAgbGV0IGluZGV4ID0gc2VsZWN0aW9uIDwgMCA/IE1hdGguY2VpbChzZWxlY3Rpb24pIDogTWF0aC5mbG9vcihzZWxlY3Rpb24pO1xuICAgIGxldCBmcmFjdGlvbiA9IHNlbGVjdGlvbiAtIGluZGV4O1xuICAgIHJldHVybiB7IGluZGV4LCBmcmFjdGlvbiB9O1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgZnJhY3Rpb25hbCBzZWxlY3Rpb24gcG9pbnQgYWZ0ZXIgYWNjb3VudGluZyBmb3Igd3JhcHBpbmcsIGVuc3VyaW5nXG4gICAqIHRoYXQgdGhlIGludGVnZXIgcG9ydGlvbiBvZiB0aGUgc2VsZWN0aW9uIHN0YXlzIGJldHdlZW4gMCBhbmQgYGl0ZW1Db3VudGAtMS5cbiAgICogVGhhdCBpcywgdGhlIGludGVnZXIgcG9ydGlvbiB3aWxsIGFsd2F5cyBiZSBhIHZhbGlkIGluZGV4IGludG8gdGhlIGxpc3QuXG4gICAqXG4gICAqIEV4YW1wbGUgb2Ygd3JhcHBpbmcgcGFzdCB0aGUgZW5kIG9mIHRoZSBsaXN0OiBpZiBgc2VsZWN0aW9uYCBpcyA1LjUgYW5kXG4gICAqIGBpdGVtQ291bnRgIGlzIDUsIHRoaXMgcmV0dXJucyAwLjUuIEV4YW1wbGUgb2Ygd3JhcHBpbmcgcGFzdCB0aGUgYmVnaW5uaW5nIG9mXG4gICAqIHRoZSBsaXN0OiBpZiBgc2VsZWN0aW9uYCBpcyAwLjUgYW5kIGBpdGVtQ291bnRgIGlzIDUsIHRoaXMgcmV0dXJucyA0LjUuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzZWxlY3Rpb24gLSBBIHJlYWwgbnVtYmVyIHJlcHJlc2VudGluZyBhIHNlbGVjdGlvbiBwb2ludFxuICAgKiBAcGFyYW0ge251bWJlcn0gaXRlbUNvdW50IC0gVGhlIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgbGlzdFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSAtIFRoZSByZXN1bHQgb2Ygd3JhcHBpbmcgdGhlIHNlbGVjdGlvbiBwb2ludFxuICAgKi9cbiAgd3JhcHBlZFNlbGVjdGlvbihzZWxlY3Rpb24sIGl0ZW1Db3VudCkge1xuICAgIC8vIEhhbmRsZXMgcG9zc2liaWxpdHkgb2YgbmVnYXRpdmUgbW9kLlxuICAgIC8vIFNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xODYxODI1MC83NjQ3MlxuICAgIHJldHVybiAoKHNlbGVjdGlvbiAlIGl0ZW1Db3VudCkgKyBpdGVtQ291bnQpICUgaXRlbUNvdW50O1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHBhcnRzIG9mIGEgc2VsZWN0aW9uLCBmaXJzdCB3cmFwcGluZyBpZiBuZWNlc3NhcnkuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzZWxlY3Rpb24g4oCTIEEgcmVhbCBudW1iZXIgcmVwcmVzZW50aW5nIGEgc2VsZWN0aW9uIHBvaW50XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpdGVtQ291bnQgLSBUaGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBsaXN0XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gd3JhcCDigJMgVHJ1ZSBpZiB0aGUgc2VsZWN0aW9uIHNob3VsZCB3cmFwIHRvIHN0YXkgd2l0aGluIHRoZVxuICAgKiBsaXN0XG4gICAqIEByZXR1cm5zIHtvYmplY3R9IOKAkyBUaGUgcGFydHMgb2YgdGhlIHNlbGVjdGlvbiwgdXNpbmcgdGhlIHNhbWUgZm9ybWF0IGFzXG4gICAqIGBzZWxlY3Rpb25QYXJ0c2AuXG4gICAqL1xuICB3cmFwcGVkU2VsZWN0aW9uUGFydHMoc2VsZWN0aW9uLCBpdGVtQ291bnQsIHdyYXApIHtcbiAgICBpZiAod3JhcCkge1xuICAgICAgc2VsZWN0aW9uID0gbWl4aW4uaGVscGVycy53cmFwcGVkU2VsZWN0aW9uKHNlbGVjdGlvbiwgaXRlbUNvdW50KTtcbiAgICB9XG4gICAgcmV0dXJuIG1peGluLmhlbHBlcnMuc2VsZWN0aW9uUGFydHMoc2VsZWN0aW9uKTtcbiAgfVxuXG59O1xuIiwiaW1wb3J0IG1pY3JvdGFzayBmcm9tICcuL21pY3JvdGFzayc7XG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggSXRlbXNTZWxlY3Rpb24uICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB3aGljaCBtYW5hZ2VzIHNpbmdsZS1zZWxlY3Rpb24gc2VtYW50aWNzIGZvciBpdGVtcyBpbiBhIGxpc3QuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gZXhwZWN0cyBhIGNvbXBvbmVudCB0byBwcm92aWRlIGFuIGBpdGVtc2AgYXJyYXkgb2YgYWxsIGVsZW1lbnRzXG4gICAqIGluIHRoZSBsaXN0LiBBIHN0YW5kYXJkIHdheSB0byBkbyB0aGF0IHdpdGggaXMgdGhlXG4gICAqIFtDb250ZW50QXNJdGVtc10oQ29udGVudEFzSXRlbXMubWQpIG1peGluLCB3aGljaCB0YWtlcyBhIGNvbXBvbmVudCdzXG4gICAqIGNvbnRlbnQgKHR5cGljYWxseSBpdHMgZGlzdHJpYnV0ZWQgY2hpbGRyZW4pIGFzIHRoZSBzZXQgb2YgbGlzdCBpdGVtczsgc2VlXG4gICAqIHRoYXQgbWl4aW4gZm9yIGRldGFpbHMuXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gdHJhY2tzIGEgc2luZ2xlIHNlbGVjdGVkIGl0ZW0gaW4gdGhlIGxpc3QsIGFuZCBwcm92aWRlcyBtZWFucyB0b1xuICAgKiBnZXQgYW5kIHNldCB0aGF0IHN0YXRlIGJ5IGl0ZW0gcG9zaXRpb24gKGBzZWxlY3RlZEluZGV4YCkgb3IgaXRlbSBpZGVudGl0eVxuICAgKiAoYHNlbGVjdGVkSXRlbWApLiBUaGUgc2VsZWN0aW9uIGNhbiBiZSBtb3ZlZCBpbiB0aGUgbGlzdCB2aWEgdGhlIG1ldGhvZHNcbiAgICogYHNlbGVjdEZpcnN0YCwgYHNlbGVjdExhc3RgLCBgc2VsZWN0TmV4dGAsIGFuZCBgc2VsZWN0UHJldmlvdXNgLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGRvZXMgbm90IHByb2R1Y2UgYW55IHVzZXItdmlzaWJsZSBlZmZlY3RzIHRvIHJlcHJlc2VudFxuICAgKiBzZWxlY3Rpb24uIE90aGVyIG1peGlucywgc3VjaCBhc1xuICAgKiBbU2VsZWN0aW9uQXJpYUFjdGl2ZV0oU2VsZWN0aW9uQXJpYUFjdGl2ZS5tZCksXG4gICAqIFtTZWxlY3Rpb25IaWdobGlnaHRdKFNlbGVjdGlvbkhpZ2hsaWdodC5tZCkgYW5kXG4gICAqIFtTZWxlY3Rpb25JblZpZXddKFNlbGVjdGlvbkluVmlldy5tZCksIG1vZGlmeSB0aGUgc2VsZWN0ZWQgaXRlbSBpbiBjb21tb25cbiAgICogd2F5cyB0byBsZXQgdGhlIHVzZXIga25vdyBhIGdpdmVuIGl0ZW0gaXMgc2VsZWN0ZWQgb3Igbm90IHNlbGVjdGVkLlxuICAgKi9cbiAgY2xhc3MgSXRlbXNTZWxlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAgIC8qKlxuICAgICAqIEFwcGx5IHRoZSBpbmRpY2F0ZSBzZWxlY3Rpb24gc3RhdGUgdG8gdGhlIGl0ZW0uXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuIFVzZXItdmlzaWJsZVxuICAgICAqIGVmZmVjdHMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gdGhlIGl0ZW0gYmVpbmcgc2VsZWN0ZWQvZGVzZWxlY3RlZFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2VsZWN0ZWQgLSB0cnVlIGlmIHRoZSBpdGVtIGlzIHNlbGVjdGVkLCBmYWxzZSBpZiBub3RcbiAgICAgKi9cbiAgICBhcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCkge1xuICAgICAgaWYgKHN1cGVyLmFwcGx5U2VsZWN0aW9uKSB7IHN1cGVyLmFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKTsgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIHNlbGVjdGlvbiBjYW4gYmUgbW92ZWQgdG8gdGhlIG5leHQgaXRlbSwgZmFsc2UgaWYgbm90ICh0aGVcbiAgICAgKiBzZWxlY3RlZCBpdGVtIGlzIHRoZSBsYXN0IGl0ZW0gaW4gdGhlIGxpc3QpLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgZ2V0IGNhblNlbGVjdE5leHQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY2FuU2VsZWN0TmV4dDtcbiAgICB9XG4gICAgc2V0IGNhblNlbGVjdE5leHQoY2FuU2VsZWN0TmV4dCkge1xuICAgICAgaWYgKCdjYW5TZWxlY3ROZXh0JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5jYW5TZWxlY3ROZXh0ID0gY2FuU2VsZWN0TmV4dDsgfVxuICAgICAgdGhpcy5fY2FuU2VsZWN0TmV4dCA9IGNhblNlbGVjdE5leHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgc2VsZWN0aW9uIGNhbiBiZSBtb3ZlZCB0byB0aGUgcHJldmlvdXMgaXRlbSwgZmFsc2UgaWYgbm90XG4gICAgICogKHRoZSBzZWxlY3RlZCBpdGVtIGlzIHRoZSBmaXJzdCBvbmUgaW4gdGhlIGxpc3QpLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgZ2V0IGNhblNlbGVjdFByZXZpb3VzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NhblNlbGVjdFByZXZpb3VzO1xuICAgIH1cbiAgICBzZXQgY2FuU2VsZWN0UHJldmlvdXMoY2FuU2VsZWN0UHJldmlvdXMpIHtcbiAgICAgIGlmICgnY2FuU2VsZWN0UHJldmlvdXMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmNhblNlbGVjdFByZXZpb3VzID0gY2FuU2VsZWN0UHJldmlvdXM7IH1cbiAgICAgIHRoaXMuX2NhblNlbGVjdFByZXZpb3VzID0gY2FuU2VsZWN0UHJldmlvdXM7XG4gICAgfVxuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuXG4gICAgICAvLyBTZXQgZGVmYXVsdHMuXG4gICAgICBpZiAodGhpcy5zZWxlY3Rpb25SZXF1aXJlZCA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uUmVxdWlyZWQgPSB0aGlzLmRlZmF1bHRzLnNlbGVjdGlvblJlcXVpcmVkO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uV3JhcHMgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbldyYXBzID0gdGhpcy5kZWZhdWx0cy5zZWxlY3Rpb25XcmFwcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgZGVmYXVsdHMoKSB7XG4gICAgICBsZXQgZGVmYXVsdHMgPSBzdXBlci5kZWZhdWx0cyB8fCB7fTtcbiAgICAgIGRlZmF1bHRzLnNlbGVjdGlvblJlcXVpcmVkID0gZmFsc2U7XG4gICAgICBkZWZhdWx0cy5zZWxlY3Rpb25XcmFwcyA9IGZhbHNlO1xuICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBhIG5ldyBpdGVtIGJlaW5nIGFkZGVkIHRvIHRoZSBsaXN0LlxuICAgICAqXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtZXRob2Qgc2ltcGx5IHNldHMgdGhlIGl0ZW0nc1xuICAgICAqIHNlbGVjdGlvbiBzdGF0ZSB0byBmYWxzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW0gLSB0aGUgaXRlbSBiZWluZyBhZGRlZFxuICAgICAqL1xuICAgIGl0ZW1BZGRlZChpdGVtKSB7XG4gICAgICBpZiAoc3VwZXIuaXRlbUFkZGVkKSB7IHN1cGVyLml0ZW1BZGRlZChpdGVtKTsgfVxuICAgICAgdGhpcy5hcHBseVNlbGVjdGlvbihpdGVtLCBpdGVtID09PSB0aGlzLnNlbGVjdGVkSXRlbSk7XG4gICAgfVxuXG4gICAgaXRlbXNDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLml0ZW1zQ2hhbmdlZCkgeyBzdXBlci5pdGVtc0NoYW5nZWQoKTsgfVxuXG4gICAgICBpZiAodGhpcy5zZWxlY3Rpb25SZXF1aXJlZCkge1xuICAgICAgICAvLyBFbnN1cmUgc2VsZWN0aW9uLCBidXQgZG8gdGhpcyBpbiB0aGUgbmV4dCB0aWNrIHRvIGdpdmUgb3RoZXIgbWl4aW5zIGFcbiAgICAgICAgLy8gY2hhbmNlIHRvIGRvIHRoZWlyIG93biBpdGVtc0NoYW5nZWQgd29yay5cbiAgICAgICAgbWljcm90YXNrKCgpID0+IHtcbiAgICAgICAgICBlbnN1cmVTZWxlY3Rpb24odGhpcyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY2hhbmdlIGluIGl0ZW1zIG1heSBoYXZlIGFmZmVjdGVkIHdoaWNoIG5hdmlnYXRpb25zIGFyZSBwb3NzaWJsZS5cbiAgICAgIHVwZGF0ZVBvc3NpYmxlTmF2aWdhdGlvbnModGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGluZGV4IG9mIHRoZSBpdGVtIHdoaWNoIGlzIGN1cnJlbnRseSBzZWxlY3RlZC5cbiAgICAgKlxuICAgICAqIElmIGBzZWxlY3Rpb25XcmFwc2AgaXMgZmFsc2UsIHRoZSBpbmRleCBpcyAtMSBpZiB0aGVyZSBpcyBubyBzZWxlY3Rpb24uXG4gICAgICogSW4gdGhhdCBjYXNlLCBzZXR0aW5nIHRoZSBpbmRleCB0byAtMSB3aWxsIGRlc2VsZWN0IGFueVxuICAgICAqIGN1cnJlbnRseS1zZWxlY3RlZCBpdGVtLlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICAgIGxldCBzZWxlY3RlZEl0ZW0gPSB0aGlzLnNlbGVjdGVkSXRlbTtcblxuICAgICAgLy8gVE9ETzogSWYgc2VsZWN0aW9uIHdhc24ndCBmb3VuZCwgbW9zdCBsaWtlbHkgY2F1c2UgaXMgdGhhdCB0aGUgRE9NIHdhc1xuICAgICAgLy8gbWFuaXB1bGF0ZWQgZnJvbSB1bmRlcm5lYXRoIHVzLiBPbmNlIHdlIHRyYWNrIGNvbnRlbnQgY2hhbmdlcywgdHVyblxuICAgICAgLy8gdGhpcyBpbnRvIGEgd2FybmluZy5cbiAgICAgIC8vIFRPRE86IE1lbW9pemVcbiAgICAgIHJldHVybiBzZWxlY3RlZEl0ZW0gP1xuICAgICAgICB0aGlzLml0ZW1zLmluZGV4T2Yoc2VsZWN0ZWRJdGVtKSA6XG4gICAgICAgIC0xO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRJbmRleChpbmRleCkge1xuICAgICAgaWYgKCdzZWxlY3RlZEluZGV4JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEluZGV4ID0gaW5kZXg7IH1cbiAgICAgIGxldCBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgICBsZXQgaXRlbTtcbiAgICAgIGlmIChpbmRleCA8IDAgfHwgaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGl0ZW0gPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbSA9IGl0ZW1zW2luZGV4XTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcblxuICAgICAgbGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdzZWxlY3RlZC1pbmRleC1jaGFuZ2VkJywge1xuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICBzZWxlY3RlZEluZGV4OiBpbmRleCxcbiAgICAgICAgICB2YWx1ZTogaW5kZXggLy8gZm9yIFBvbHltZXIgYmluZGluZ1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtLCBvciBudWxsIGlmIHRoZXJlIGlzIG5vIHNlbGVjdGlvbi5cbiAgICAgKlxuICAgICAqIFNldHRpbmcgdGhpcyBwcm9wZXJ0eSB0byBudWxsIGRlc2VsZWN0cyBhbnkgY3VycmVudGx5LXNlbGVjdGVkIGl0ZW0uXG4gICAgICpcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJdGVtIHx8IG51bGw7XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEl0ZW0oaXRlbSkge1xuICAgICAgaWYgKCdzZWxlY3RlZEl0ZW0nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSXRlbSA9IGl0ZW07IH1cbiAgICAgIGxldCBwcmV2aW91c0l0ZW0gPSB0aGlzLl9zZWxlY3RlZEl0ZW07XG4gICAgICBpZiAocHJldmlvdXNJdGVtKSB7XG4gICAgICAgIGlmIChpdGVtID09PSBwcmV2aW91c0l0ZW0pIHtcbiAgICAgICAgICAvLyBUaGUgaW5kaWNhdGVkIGl0ZW0gaXMgYWxyZWFkeSB0aGUgc2VsZWN0ZWQgaXRlbS5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlIHByZXZpb3VzIHNlbGVjdGlvbi5cbiAgICAgICAgdGhpcy5hcHBseVNlbGVjdGlvbihwcmV2aW91c0l0ZW0sIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgLy8gVE9ETzogQ29uZmlybSBpdGVtIGlzIGFjdHVhbGx5IGluIHRoZSBsaXN0IGJlZm9yZSBzZWxlY3RpbmcuXG4gICAgICB0aGlzLl9zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5hcHBseVNlbGVjdGlvbihpdGVtLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgLy8gVE9ETzogUmF0aW9uYWxpemUgd2l0aCBzZWxlY3RlZEluZGV4IHNvIHdlJ3JlIG5vdCByZWNhbGN1bGF0aW5nIGl0ZW1cbiAgICAgIC8vIG9yIGluZGV4IGluIGVhY2ggc2V0dGVyLlxuICAgICAgdXBkYXRlUG9zc2libGVOYXZpZ2F0aW9ucyh0aGlzKTtcblxuICAgICAgbGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdzZWxlY3RlZC1pdGVtLWNoYW5nZWQnLCB7XG4gICAgICAgIGRldGFpbDoge1xuICAgICAgICAgIHNlbGVjdGVkSXRlbTogaXRlbSxcbiAgICAgICAgICBwcmV2aW91c0l0ZW06IHByZXZpb3VzSXRlbSxcbiAgICAgICAgICB2YWx1ZTogaXRlbSAvLyBmb3IgUG9seW1lciBiaW5kaW5nXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgdGhlIGZpcnN0IGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAgICovXG4gICAgc2VsZWN0Rmlyc3QoKSB7XG4gICAgICBpZiAoc3VwZXIuc2VsZWN0Rmlyc3QpIHsgc3VwZXIuc2VsZWN0Rmlyc3QoKTsgfVxuICAgICAgcmV0dXJuIHNlbGVjdEluZGV4KHRoaXMsIDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIGxpc3Qgc2hvdWxkIGFsd2F5cyBoYXZlIGEgc2VsZWN0aW9uIChpZiBpdCBoYXMgaXRlbXMpLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0aW9uUmVxdWlyZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2VsZWN0aW9uUmVxdWlyZWQ7XG4gICAgfVxuICAgIHNldCBzZWxlY3Rpb25SZXF1aXJlZChzZWxlY3Rpb25SZXF1aXJlZCkge1xuICAgICAgaWYgKCdzZWxlY3Rpb25SZXF1aXJlZCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0aW9uUmVxdWlyZWQgPSBzZWxlY3Rpb25SZXF1aXJlZDsgfVxuICAgICAgdGhpcy5fc2VsZWN0aW9uUmVxdWlyZWQgPSBzZWxlY3Rpb25SZXF1aXJlZDtcbiAgICAgIGlmIChzZWxlY3Rpb25SZXF1aXJlZCkge1xuICAgICAgICBlbnN1cmVTZWxlY3Rpb24odGhpcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBsYXN0IGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAgICovXG4gICAgc2VsZWN0TGFzdCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RMYXN0KSB7IHN1cGVyLnNlbGVjdExhc3QoKTsgfVxuICAgICAgcmV0dXJuIHNlbGVjdEluZGV4KHRoaXMsIHRoaXMuaXRlbXMubGVuZ3RoIC0gMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBuZXh0IGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAgICovXG4gICAgc2VsZWN0TmV4dCgpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3ROZXh0KSB7IHN1cGVyLnNlbGVjdE5leHQoKTsgfVxuICAgICAgcmV0dXJuIHNlbGVjdEluZGV4KHRoaXMsIHRoaXMuc2VsZWN0ZWRJbmRleCArIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCB0aGUgcHJldmlvdXMgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBzZWxlY3RQcmV2aW91cygpIHtcbiAgICAgIGlmIChzdXBlci5zZWxlY3RQcmV2aW91cykgeyBzdXBlci5zZWxlY3RQcmV2aW91cygpOyB9XG4gICAgICByZXR1cm4gc2VsZWN0SW5kZXgodGhpcywgdGhpcy5zZWxlY3RlZEluZGV4IC0gMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiBzZWxlY3Rpb24gbmF2aWdhdGlvbnMgd3JhcCBmcm9tIGxhc3QgdG8gZmlyc3QsIGFuZCB2aWNlIHZlcnNhLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0aW9uV3JhcHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2VsZWN0aW9uV3JhcHM7XG4gICAgfVxuICAgIHNldCBzZWxlY3Rpb25XcmFwcyh2YWx1ZSkge1xuICAgICAgaWYgKCdzZWxlY3Rpb25XcmFwcycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0aW9uV3JhcHMgPSB2YWx1ZTsgfVxuICAgICAgdGhpcy5fc2VsZWN0aW9uV3JhcHMgPSBTdHJpbmcodmFsdWUpID09PSAndHJ1ZSc7XG4gICAgICB1cGRhdGVQb3NzaWJsZU5hdmlnYXRpb25zKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpcmVzIHdoZW4gdGhlIHNlbGVjdGVkSXRlbSBwcm9wZXJ0eSBjaGFuZ2VzLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIEl0ZW1zU2VsZWN0aW9uXG4gICAgICogQGV2ZW50IHNlbGVjdGVkLWl0ZW0tY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRldGFpbC5zZWxlY3RlZEl0ZW0gVGhlIG5ldyBzZWxlY3RlZCBpdGVtLlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRldGFpbC5wcmV2aW91c0l0ZW0gVGhlIHByZXZpb3VzbHkgc2VsZWN0ZWQgaXRlbS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEZpcmVzIHdoZW4gdGhlIHNlbGVjdGVkSW5kZXggcHJvcGVydHkgY2hhbmdlcy5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBJdGVtc1NlbGVjdGlvblxuICAgICAqIEBldmVudCBzZWxlY3RlZC1pbmRleC1jaGFuZ2VkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRldGFpbC5zZWxlY3RlZEluZGV4IFRoZSBuZXcgc2VsZWN0ZWQgaW5kZXguXG4gICAgICovXG5cbiAgfVxuXG4gIHJldHVybiBJdGVtc1NlbGVjdGlvbjtcbn07XG5cblxuLy8gSWYgbm8gaXRlbSBpcyBzZWxlY3RlZCwgc2VsZWN0IGEgZGVmYXVsdCBpdGVtLlxuZnVuY3Rpb24gZW5zdXJlU2VsZWN0aW9uKGVsZW1lbnQpIHtcbiAgbGV0IGluZGV4ID0gZWxlbWVudC5zZWxlY3RlZEluZGV4O1xuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgLy8gU2VsZWN0ZWQgaXRlbSBpcyBubyBsb25nZXIgaW4gdGhlIGN1cnJlbnQgc2V0IG9mIGl0ZW1zLlxuICAgIGlmIChlbGVtZW50Lml0ZW1zICYmIGVsZW1lbnQuaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgLy8gU2VsZWN0IHRoZSBmaXJzdCBpdGVtLlxuICAgICAgLy8gVE9ETzogSWYgdGhlIHByZXZpb3VzbHktc2VsZWN0ZWQgaXRlbSBoYXMgYmVlbiBkZWxldGVkLCB0cnkgdG8gc2VsZWN0XG4gICAgICAvLyBhbiBpdGVtIGFkamFjZW50IHRvIHRoZSBwb3NpdGlvbiBpdCBoZWxkLlxuICAgICAgZWxlbWVudC5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTm8gaXRlbXMgZm9yIHVzIHRvIHNlbGVjdCwgYnV0IHdlIGNhbiBhdCBsZWFzdCBzaWduYWwgdGhhdCB0aGVyZSdzIG5vXG4gICAgICAvLyBsb25nZXIgYSBzZWxlY3Rpb24uXG4gICAgICBlbGVtZW50LnNlbGVjdGVkSXRlbSA9IG51bGw7XG4gICAgfVxuICB9XG59XG5cbi8vIEVuc3VyZSB0aGUgZ2l2ZW4gaW5kZXggaXMgd2l0aGluIGJvdW5kcywgYW5kIHNlbGVjdCBpdCBpZiBpdCdzIG5vdCBhbHJlYWR5XG4vLyBzZWxlY3RlZC5cbmZ1bmN0aW9uIHNlbGVjdEluZGV4KGVsZW1lbnQsIGluZGV4KSB7XG4gIGxldCBjb3VudCA9IGVsZW1lbnQuaXRlbXMubGVuZ3RoO1xuICBsZXQgYm91bmRlZEluZGV4O1xuICBpZiAoZWxlbWVudC5zZWxlY3Rpb25XcmFwcykge1xuICAgIC8vIEphdmFTY3JpcHQgbW9kIGRvZXNuJ3QgaGFuZGxlIG5lZ2F0aXZlIG51bWJlcnMgdGhlIHdheSB3ZSB3YW50IHRvIHdyYXAuXG4gICAgLy8gU2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE4NjE4MjUwLzc2NDcyXG4gICAgYm91bmRlZEluZGV4ID0gKChpbmRleCAlIGNvdW50KSArIGNvdW50KSAlIGNvdW50O1xuICB9IGVsc2Uge1xuICAgIC8vIEtlZXAgaW5kZXggd2l0aGluIGJvdW5kcyBvZiBhcnJheS5cbiAgICBib3VuZGVkSW5kZXggPSBNYXRoLm1heChNYXRoLm1pbihpbmRleCwgY291bnQgLSAxKSwgMCk7XG4gIH1cbiAgbGV0IHByZXZpb3VzSW5kZXggPSBlbGVtZW50LnNlbGVjdGVkSW5kZXg7XG4gIGlmIChwcmV2aW91c0luZGV4ICE9PSBib3VuZGVkSW5kZXgpIHtcbiAgICBlbGVtZW50LnNlbGVjdGVkSW5kZXggPSBib3VuZGVkSW5kZXg7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8vIEZvbGxvd2luZyBhIGNoYW5nZSBpbiBzZWxlY3Rpb24sIHJlcG9ydCB3aGV0aGVyIGl0J3Mgbm93IHBvc3NpYmxlIHRvXG4vLyBnbyBuZXh0L3ByZXZpb3VzIGZyb20gdGhlIGdpdmVuIGluZGV4LlxuZnVuY3Rpb24gdXBkYXRlUG9zc2libGVOYXZpZ2F0aW9ucyhlbGVtZW50KSB7XG4gIGxldCBjYW5TZWxlY3ROZXh0O1xuICBsZXQgY2FuU2VsZWN0UHJldmlvdXM7XG4gIGxldCBpdGVtcyA9IGVsZW1lbnQuaXRlbXM7XG4gIGlmIChpdGVtcyA9PSBudWxsIHx8IGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgIC8vIE5vIGl0ZW1zIHRvIHNlbGVjdC5cbiAgICBjYW5TZWxlY3ROZXh0ID0gZmFsc2U7XG4gICAgY2FuU2VsZWN0UHJldmlvdXMgPSBmYWxzZTtcbiAgfSBpZiAoZWxlbWVudC5zZWxlY3Rpb25XcmFwcykge1xuICAgIC8vIFNpbmNlIHRoZXJlIGFyZSBpdGVtcywgY2FuIGFsd2F5cyBnbyBuZXh0L3ByZXZpb3VzLlxuICAgIGNhblNlbGVjdE5leHQgPSB0cnVlO1xuICAgIGNhblNlbGVjdFByZXZpb3VzID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgaW5kZXggPSBlbGVtZW50LnNlbGVjdGVkSW5kZXg7XG4gICAgaWYgKGluZGV4IDwgMCAmJiBpdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBTcGVjaWFsIGNhc2UuIElmIHRoZXJlIGFyZSBpdGVtcyBidXQgbm8gc2VsZWN0aW9uLCBkZWNsYXJlIHRoYXQgaXQnc1xuICAgICAgLy8gYWx3YXlzIHBvc3NpYmxlIHRvIGdvIG5leHQvcHJldmlvdXMgdG8gY3JlYXRlIGEgc2VsZWN0aW9uLlxuICAgICAgY2FuU2VsZWN0TmV4dCA9IHRydWU7XG4gICAgICBjYW5TZWxlY3RQcmV2aW91cyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5vcm1hbCBjYXNlOiB3ZSBoYXZlIGFuIGluZGV4IGluIGEgbGlzdCB0aGF0IGhhcyBpdGVtcy5cbiAgICAgIGNhblNlbGVjdFByZXZpb3VzID0gKGluZGV4ID4gMCk7XG4gICAgICBjYW5TZWxlY3ROZXh0ID0gKGluZGV4IDwgaXRlbXMubGVuZ3RoIC0gMSk7XG4gICAgfVxuICB9XG4gIGVsZW1lbnQuY2FuU2VsZWN0TmV4dCA9IGNhblNlbGVjdE5leHQ7XG4gIGVsZW1lbnQuY2FuU2VsZWN0UHJldmlvdXMgPSBjYW5TZWxlY3RQcmV2aW91cztcbn1cbiIsImltcG9ydCBtaWNyb3Rhc2sgZnJvbSAnLi9taWNyb3Rhc2snO1xuXG4vLyBUT0RPOiBTaG91bGQgdGhpcyBiZSByZW5hbWVkIHRvIHNvbWV0aGluZyBsaWtlIERpc3RyaWJ1dGVkQ2hpbGRyZW5DaGFuZ2VkP1xuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIE9ic2VydmVDb250ZW50Q2hhbmdlcy4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIHdpcmVzIHVwIG11dGF0aW9uIG9ic2VydmVycyB0byByZXBvcnQgYW55IGNoYW5nZXMgaW4gYVxuICAgKiBjb21wb25lbnQncyBjb250ZW50IChkaXJlY3QgY2hpbGRyZW4sIG9yIG5vZGVzIGRpc3RyaWJ1dGVkIHRvIHNsb3RzKS5cbiAgICpcbiAgICogRm9yIHRoZSB0aW1lIGJlaW5nLCB0aGlzIGNhbiBvbmx5IHN1cHBvcnQgYSBzaW5nbGUgbGV2ZWwgb2YgZGlzdHJpYnV0ZWRcbiAgICogY29udGVudC4gVGhhdCBpcywgaWYgYSBjb21wb25lbnQgY29udGFpbnMgYSBzbG90LCBhbmQgdGhlIHNldCBvZiBub2Rlc1xuICAgKiBkaXJlY3RseSBhc3NpZ25lZCB0byB0aGF0IHNsb3QgY2hhbmdlcywgdGhlbiB0aGlzIG1peGluIHdpbGwgZGV0ZWN0IHRoZVxuICAgKiBjaGFuZ2UuIEhvd2V2ZXIsIHRoaXMgbWl4aW4gZG9lcyBub3QgeWV0IGRldGVjdCBjaGFuZ2VzIGluIHJlcHJvamVjdGVkXG4gICAqIG5vZGVzLiBJZiBhIGNvbXBvbmVudCdzIGhvc3QgcGxhY2VzIGEgc2xvdCBhcyBhIGNoaWxkIG9mIHRoZSBjb21wb25lbnRcbiAgICogaW5zdGFuY2UsIG5vZGVzIGFzc2lnbmVkIHRvIHRoZSBvdXRlciBob3N0IHdpbGwgYmUgYXNzaWduZWQgdG8gdGhlIGhvc3Qnc1xuICAgKiBzbG90LCB0aGVuIHJlYXNzaWduZWQgdG8gdGhlIHNsb3QgZWxlbWVudCBpbnNpZGUgdGhlIGNvbXBvbmVudC4gQ2hhbmdlcyBpblxuICAgKiBzdWNoIHJlcHJvamVjdGVkIG5vZGVzIHdpbGwgbm90ICh5ZXQpIGJlIGRldGVjdGVkIGJ5IHRoaXMgbWl4aW4uXG4gICAqXG4gICAqIEZvciBjb21wYXJpc29uLCBzZWUgUG9seW1lcidzIG9ic2VydmVOb2RlcyBBUEksIHdoaWNoIGRvZXMgc29sdmUgdGhlXG4gICAqIHByb2JsZW0gb2YgdHJhY2tpbmcgY2hhbmdlcyBpbiByZXByb2plY3RlZCBjb250ZW50LlxuICAgKlxuICAgKiBOb3RlOiBUaGUgd2ViIHBsYXRmb3JtIHRlYW0gY3JlYXRpbmcgdGhlIHNwZWNpZmljYXRpb25zIGZvciB3ZWIgY29tcG9uZW50c1xuICAgKiBwbGFuIHRvIHJlcXVlc3QgdGhhdCBhIG5ldyB0eXBlIG9mIE11dGF0aW9uT2JzZXJ2ZXIgb3B0aW9uIGJlIGRlZmluZWQgdGhhdFxuICAgKiBsZXRzIGEgY29tcG9uZW50IG1vbml0b3IgY2hhbmdlcyBpbiBkaXN0cmlidXRlZCBjaGlsZHJlbi4gVGhpcyBtaXhpbiB3aWxsXG4gICAqIGJlIHVwZGF0ZWQgdG8gdGFrZSBhZHZhbnRhZ2Ugb2YgdGhhdCBNdXRhdGlvbk9ic2VydmVyIG9wdGlvbiB3aGVuIHRoYXRcbiAgICogYmVjb21lcyBhdmFpbGFibGUuXG4gICAqL1xuICBjbGFzcyBPYnNlcnZlQ29udGVudENoYW5nZXMgZXh0ZW5kcyBiYXNlIHtcblxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICAgIG9ic2VydmVDb250ZW50Q2hhbmdlcyh0aGlzKTtcblxuICAgICAgLy8gTWFrZSBhbiBpbml0aWFsIGNhbGwgdG8gY29udGVudENoYW5nZWQoKSBzbyB0aGF0IHRoZSBjb21wb25lbnQgY2FuIGRvXG4gICAgICAvLyBpbml0aWFsaXphdGlvbiB0aGF0IGl0IG5vcm1hbGx5IGRvZXMgd2hlbiBjb250ZW50IGNoYW5nZXMuXG4gICAgICAvL1xuICAgICAgLy8gVGhpcyB3aWxsIGludm9rZSBjb250ZW50Q2hhbmdlZCgpIGhhbmRsZXJzIGluIG90aGVyIG1peGlucy4gSW4gb3JkZXJcbiAgICAgIC8vIHRoYXQgdGhvc2UgbWl4aW5zIGhhdmUgYSBjaGFuY2UgdG8gY29tcGxldGUgdGhlaXIgb3duIGluaXRpYWxpemF0aW9uLFxuICAgICAgLy8gd2UgYWRkIHRoZSBjb250ZW50Q2hhbmdlZCgpIGNhbGwgdG8gdGhlIG1pY3JvdGFzayBxdWV1ZS5cbiAgICAgIG1pY3JvdGFzaygoKSA9PiB0aGlzLmNvbnRlbnRDaGFuZ2VkKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgY29udGVudHMgb2YgdGhlIGNvbXBvbmVudCAoaW5jbHVkaW5nIGRpc3RyaWJ1dGVkXG4gICAgICogY2hpbGRyZW4pIGhhdmUgY2hhbmdlZC5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGFsc28gaW52b2tlZCB3aGVuIGEgY29tcG9uZW50IGlzIGZpcnN0IGluc3RhbnRpYXRlZDsgdGhlXG4gICAgICogY29udGVudHMgaGF2ZSBlc3NlbnRpYWxseSBcImNoYW5nZWRcIiBmcm9tIGJlaW5nIG5vdGhpbmcuIFRoaXMgYWxsb3dzIHRoZVxuICAgICAqIGNvbXBvbmVudCB0byBwZXJmb3JtIGluaXRpYWwgcHJvY2Vzc2luZyBvZiBpdHMgY2hpbGRyZW4uXG4gICAgICovXG4gICAgY29udGVudENoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuY29udGVudENoYW5nZWQpIHsgc3VwZXIuY29udGVudENoYW5nZWQoKTsgfVxuICAgICAgbGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdjb250ZW50LWNoYW5nZWQnKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBpcyByYWlzZWQgd2hlbiB0aGUgY29tcG9uZW50J3MgY29udGVudHMgKGluY2x1ZGluZyBkaXN0cmlidXRlZFxuICAgICAqIGNoaWxkcmVuKSBoYXZlIGNoYW5nZWQuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgT2JzZXJ2ZUNvbnRlbnRDaGFuZ2VzXG4gICAgICogQGV2ZW50IGNvbnRlbnQtY2hhbmdlZFxuICAgICAqL1xuICB9XG5cbiAgcmV0dXJuIE9ic2VydmVDb250ZW50Q2hhbmdlcztcbn07XG5cblxuLy8gVE9ETzogRGVjaWRlIHdoZXRoZXIgd2Ugd2FudCBhbiBvcHRpb24gdG8gdHJhY2sgY2hhbmdlcyB0byBjaGlsZHJlblxuLy8gYXR0cmlidXRlcy5cbmZ1bmN0aW9uIG9ic2VydmVDb250ZW50Q2hhbmdlcyhlbGVtZW50KSB7XG4gIGVsZW1lbnQuX2NvbnRlbnRDaGFuZ2VPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+XG4gICAgZWxlbWVudC5jb250ZW50Q2hhbmdlZCgpXG4gICk7XG4gIGVsZW1lbnQuX2NvbnRlbnRDaGFuZ2VPYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIHtcbiAgICAvLyBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG4gICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgIHN1YnRyZWU6IHRydWVcbiAgfSk7XG59XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcbmltcG9ydCBGcmFjdGlvbmFsU2VsZWN0aW9uIGZyb20gJy4vRnJhY3Rpb25hbFNlbGVjdGlvbic7XG5cblxuLy8gU3ltYm9scyBmb3IgaGFuZ2luZyBkYXRhIG9mZiBhbiBlbGVtZW50LlxuY29uc3QgYW5pbWF0aW5nU2VsZWN0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdhbmltYXRpbmdTZWxlY3Rpb24nKTtcbmNvbnN0IGFuaW1hdGlvblN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnYW5pbWF0aW9ucycpO1xuY29uc3QgbGFzdEFuaW1hdGlvblN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnbGFzdEFuaW1hdGlvbicpO1xuY29uc3QgcHJldmlvdXNTZWxlY3Rpb25TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ3ByZXZpb3VzU2VsZWN0aW9uJyk7XG5jb25zdCBzaG93VHJhbnNpdGlvblN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc2hvd1RyYW5zaXRpb24nKTtcbmNvbnN0IHNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbicpO1xuY29uc3Qgc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0U3ltYm9sID0gY3JlYXRlU3ltYm9sKCdzZWxlY3Rpb25BbmltYXRpb25FZmZlY3QnKTtcbmNvbnN0IHNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lc1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzJyk7XG5cblxuLyogRXhwb3J0ZWQgZnVuY3Rpb24gZXh0ZW5kcyBhIGJhc2UgY2xhc3Mgd2l0aCBTZWxlY3Rpb25BbmltYXRpb24uICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXhpbihiYXNlKSB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIHVzZXMgYW5pbWF0aW9uIHRvIHNob3cgdHJhbnNpdGlvbnMgYmV0d2VlbiBzZWxlY3Rpb24gc3RhdGVzLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGNhbiBiZSB1c2VkIGJ5IGNvbXBvbmVudHMgdGhhdCB3YW50IHRvIHByb3ZpZGUgdmlzaWJsZVxuICAgKiBhbmltYXRpb25zIHdoZW4gY2hhbmdpbmcgdGhlIHNlbGVjdGlvbi4gRm9yIGV4YW1wbGUsIGEgY2Fyb3VzZWwgY29tcG9uZW50XG4gICAqIG1heSB3YW50IHRvIGRlZmluZSBhIHNsaWRpbmcgYW5pbWF0aW9uIGVmZmVjdCBzaG93biB3aGVuIG1vdmluZyBiZXR3ZWVuXG4gICAqIGl0ZW1zLlxuICAgKlxuICAgKiBUaGUgYW5pbWF0aW9uIGlzIGRlZmluZWQgYnkgYSBgc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzYCBwcm9wZXJ0eTsgc2VlXG4gICAqIHRoYXQgcHJvcGVydHkgZm9yIGRldGFpbHMgb24gaG93IHRvIGRlZmluZSB0aGVzZSBrZXlmcmFtZXMuIFRoaXMgYW5pbWF0aW9uXG4gICAqIHdpbGwgYmUgdXNlZCBpbiB0d28gd2F5cy4gRmlyc3QsIHdoZW4gbW92aW5nIHN0cmljdGx5IGJldHdlZW4gaXRlbXMsIHRoZVxuICAgKiBhbmltYXRpb24gd2lsbCBwbGF5IHNtb290aGx5IHRvIHNob3cgdGhlIHNlbGVjdGlvbiBjaGFuZ2luZy4gU2Vjb25kLCB0aGVcbiAgICogYW5pbWF0aW9uIGNhbiBiZSB1c2VkIHRvIHJlbmRlciB0aGUgc2VsZWN0aW9uIGF0IGEgZml4ZWQgcG9pbnQgaW4gdGhlXG4gICAqIHRyYW5zaXRpb24gYmV0d2VlbiBzdGF0ZXMuIEUuZy4sIGlmIHRoZSB1c2VyIHBhdXNlcyBoYWxmd2F5IHRocm91Z2hcbiAgICogZHJhZ2dpbmcgYW4gZWxlbWVudCB1c2luZyB0aGUgW1N3aXBlRGlyZWN0aW9uXShTd2lwZURpcmVjdGlvbi5tZCkgb3JcbiAgICogW1RyYWNrcGFkRGlyZWN0aW9uXShUcmFja3BhZERpcmVjdGlvbi5tZCkgbWl4aW5zLCB0aGVuIHRoZSBzZWxlY3Rpb25cbiAgICogYW5pbWF0aW9uIHdpbGwgYmUgc2hvd24gYXQgdGhlIHBvaW50IGV4YWN0bHkgaGFsZndheSB0aHJvdWdoLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgYSBjb21wb25lbnQgdG8gcHJvdmlkZSBhbiBgaXRlbXNgIGFycmF5IG9mIGFsbCBlbGVtZW50c1xuICAgKiBpbiB0aGUgbGlzdCwgd2hpY2ggY2FuIGJlIHByb3ZpZGVkIHZpYSB0aGVcbiAgICogW0NvbnRlbnRBc0l0ZW1zXShDb250ZW50QXNJdGVtcy5tZCkgbWl4aW4uIFRoaXMgbWl4aW4gYWxzbyBleHBlY3RzXG4gICAqIGBzZWxlY3RlZEluZGV4YCBhbmQgYHNlbGVjdGVkSXRlbWAgcHJvcGVydGllcywgd2hpY2ggY2FuIGJlIHByb3ZpZGVkIHZpYVxuICAgKiB0aGUgW0l0ZW1zU2VsZWN0aW9uXShJdGVtc1NlbGVjdGlvbi5tZCkgbWl4aW4uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gc3VwcG9ydHMgYSBgc2VsZWN0aW9uV3JhcHNgIHByb3BlcnR5LiBXaGVuIHRydWUsIHRoZSB1c2VyIGNhblxuICAgKiBuYXZpZ2F0ZSBmb3J3YXJkIGZyb20gdGhlIGxhc3QgaXRlbSBpbiB0aGUgbGlzdCBhbmQgd3JhcCBhcm91bmQgdG8gdGhlXG4gICAqIGZpcnN0IGl0ZW0sIG9yIG5hdmlnYXRlIGJhY2t3YXJkIGZyb20gdGhlIGZpcnN0IGl0ZW0gYW5kIHdyYXAgYXJvdW5kIHRvIHRoZVxuICAgKiBsYXN0IGl0ZW0uXG4gICAqXG4gICAqIFRoaXMgbWl4aW4gdXNlcyB0aGUgV2ViIEFuaW1hdGlvbnMgQVBJLiBGb3IgdXNlIG9uIGJyb3dzZXJzIHdoaWNoXG4gICAqIGRvIG5vdCBzdXBwb3J0IHRoYXQgQVBJIG5hdGl2ZWx5LCB5b3Ugd2lsbCBuZWVkIHRvIGxvYWQgdGhlXG4gICAqIFtXZWIgQW5pbWF0aW9ucyBwb2x5ZmlsbF0oaHR0cHM6Ly9naXRodWIuY29tL3dlYi1hbmltYXRpb25zL3dlYi1hbmltYXRpb25zLWpzKS5cbiAgICovXG4gIGNsYXNzIFNlbGVjdGlvbkFuaW1hdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuXG4gICAgICAvLyBTZXQgZGVmYXVsdHMuXG4gICAgICBpZiAodGhpcy5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbiA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb24gPSB0aGlzLmRlZmF1bHRzLnNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0ID09IG51bGwgJiYgdGhpcy5zZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXMgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdCA9IHRoaXMuZGVmYXVsdHMuc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0O1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNob3dUcmFuc2l0aW9uID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXQgZGVmYXVsdHMoKSB7XG4gICAgICBsZXQgZGVmYXVsdHMgPSBzdXBlci5kZWZhdWx0cyB8fCB7fTtcbiAgICAgIGRlZmF1bHRzLnNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uID0gMjUwO1xuICAgICAgZGVmYXVsdHMuc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0ID0gJ3NsaWRlJztcbiAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG5cbiAgICBpdGVtQWRkZWQoaXRlbSkge1xuICAgICAgLy8gV2UgbWFyayBuZXcgaXRlbXMgaW4gdGhlIGxpc3QgYXMgZXhwbGljaXRseSB2aXNpYmxlIHRvIEFSSUEuIE90aGVyd2lzZSxcbiAgICAgIC8vIHdoZW4gYW4gaXRlbSBpc24ndCB2aXNpYmxlIG9uIHRoZSBzY3JlZW4sIEFSSUEgd2lsbCBhc3N1bWUgdGhlIGl0ZW0gaXNcbiAgICAgIC8vIG9mIG5vIGludGVyZXN0IHRvIHRoZSB1c2VyLCBhbmQgbGVhdmUgaXQgb3V0IG9mIHRoZSBhY2Nlc3NpYmlsaXR5IHRyZWUuXG4gICAgICAvLyBJZiB0aGUgbGlzdCBjb250YWlucyAxMCBpdGVtcywgYnV0IG9ubHkgMyBhcmUgdmlzaWJsZSwgYSBzY3JlZW4gcmVhZGVyXG4gICAgICAvLyBtaWdodCB0aGVuIGFubm91bmNlIHRoZSBsaXN0IG9ubHkgaGFzIDMgaXRlbXMuIFRvIGVuc3VyZSB0aGF0IHNjcmVlblxuICAgICAgLy8gcmVhZGVycyBhbmQgb3RoZXIgYXNzaXN0aXZlIHRlY2hub2xvZ2llcyBhbm5vdW5jZSB0aGUgY29ycmVjdCB0b3RhbFxuICAgICAgLy8gbnVtYmVyIG9mIGl0ZW1zLCB3ZSBleHBsaWNpdGx5IG1hcmsgYWxsIGl0ZW1zIGFzIG5vdCBoaWRkZW4uIFRoaXMgd2lsbFxuICAgICAgLy8gZXhwb3NlIHRoZW0gYWxsIGluIHRoZSBhY2Nlc3NpYmlsaXR5IHRyZWUsIGV2ZW4gdGhlIGl0ZW1zIHdoaWNoIGFyZVxuICAgICAgLy8gY3VycmVudGx5IG5vdCByZW5kZXJlZC5cbiAgICAgIC8vXG4gICAgICAvLyBUT0RPOiBHZW5lcmFsbHkgc3BlYWtpbmcsIHRoaXMgZW50aXJlIG1peGluIGFzc3VtZXMgdGhhdCB0aGUgdXNlciBjYW5cbiAgICAgIC8vIG5hdmlnYXRlIHRocm91Z2ggYWxsIGl0ZW1zIGluIGEgbGlzdC4gQnV0IGFuIGFwcCBjb3VsZCBzdHlsZSBhbiBpdGVtIGFzXG4gICAgICAvLyBkaXNwbGF5Om5vbmUgb3IgdmlzaWJpbGl0eTpoaWRkZW4gYmVjYXVzZSB0aGUgdXNlciBpcyBub3QgYWxsb3dlZCB0b1xuICAgICAgLy8gaW50ZXJhY3Qgd2l0aCB0aGF0IGl0ZW0gYXQgdGhlIG1vbWVudC4gU3VwcG9ydCBmb3IgdGhpcyBzY2VuYXJpbyBzaG91bGRcbiAgICAgIC8vIGJlIGFkZGVkLiBUaGlzIHdvdWxkIGVudGFpbCBjaGFuZ2luZyBhbGwgbG9jYXRpb25zIHdoZXJlIGEgbWl4aW5cbiAgICAgIC8vIGZ1bmN0aW9uIGlzIGNvdW50aW5nIGl0ZW1zLCBpdGVyYXRpbmcgb3ZlciB0aGUgKHZpc2libGUpIGl0ZW1zLCBhbmRcbiAgICAgIC8vIHNob3dpbmcgb3IgaGlkaW5nIGl0ZW1zLiBBbW9uZyBvdGhlciB0aGluZ3MsIHRoZSBjb2RlIGJlbG93IHRvIG1ha2VcbiAgICAgIC8vIGl0ZW1zIHZpc2libGUgdG8gQVJJQSB3b3VsZCBuZWVkIHRvIGRpc2NyaW1pbmF0ZSBiZXR3ZWVuIGl0ZW1zIHdoaWNoXG4gICAgICAvLyBhcmUgaW52aXNpYmxlIGJlY2F1c2Ugb2YgYW5pbWF0aW9uIHN0YXRlLCBvciBpbnZpc2libGUgYmVjYXVzZSB0aGUgdXNlclxuICAgICAgLy8gc2hvdWxkbid0IGludGVyYWN0IHdpdGggdGhlbS5cbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBpdGVtc0NoYW5nZWQoKSB7XG4gICAgICBpZiAoc3VwZXIuaXRlbXNDaGFuZ2VkKSB7IHN1cGVyLml0ZW1zQ2hhbmdlZCgpOyB9XG4gICAgICByZXNldEFuaW1hdGlvbnModGhpcyk7XG4gICAgICByZW5kZXJTZWxlY3Rpb24odGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSBmcmFjdGlvbmFsIHZhbHVlIGluZGljYXRpbmcgaG93IGZhciB0aGUgdXNlciBoYXMgY3VycmVudGx5IGFkdmFuY2VkIHRvXG4gICAgICogdGhlIG5leHQvcHJldmlvdXMgaXRlbS4gRS5nLiwgYSBgc2VsZWN0ZWRGcmFjdGlvbmAgb2YgMy41IGluZGljYXRlcyB0aGVcbiAgICAgKiB1c2VyIGlzIGhhbGZ3YXkgYmV0d2VlbiBpdGVtcyAzIGFuZCA0LlxuICAgICAqXG4gICAgICogRm9yIG1vcmUgZGV0YWlscywgc2VlIHRoZSBbRnJhY3Rpb25hbFNlbGVjdGlvbl0oRnJhY3Rpb25hbFNlbGVjdGlvbi5tZClcbiAgICAgKiBoZWxwZXIgZnVuY3Rpb25zLlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWRGcmFjdGlvbigpIHtcbiAgICAgIHJldHVybiBzdXBlci5zZWxlY3RlZEZyYWN0aW9uIHx8IDA7XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEZyYWN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoJ3NlbGVjdGVkRnJhY3Rpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkRnJhY3Rpb24gPSB2YWx1ZTsgfVxuICAgICAgcmVuZGVyU2VsZWN0aW9uKHRoaXMsIHRoaXMuc2VsZWN0ZWRJbmRleCwgdmFsdWUpO1xuICAgIH1cblxuICAgIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRJdGVtO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcbiAgICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgICByZW5kZXJTZWxlY3Rpb24odGhpcywgdGhpcy5zZWxlY3RlZEluZGV4LCAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZHVyYXRpb24gb2YgYSBzZWxlY3Rpb24gYW5pbWF0aW9uIGluIG1pbGxpc2Vjb25kcy5cbiAgICAgKlxuICAgICAqIFRoaXMgbWVhc3VyZXMgdGhlIGFtb3VudCBvZiB0aW1lIHJlcXVpcmVkIGZvciBhIHNlbGVjdGlvbiBhbmltYXRpb24gdG9cbiAgICAgKiBjb21wbGV0ZS4gVGhpcyBudW1iZXIgcmVtYWlucyBjb25zdGFudCwgZXZlbiBpZiB0aGUgbnVtYmVyIG9mIGl0ZW1zIGJlaW5nXG4gICAgICogYW5pbWF0ZWQgaW5jcmVhc2VzLlxuICAgICAqXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgMjUwIG1pbGxpc2Vjb25kcyAoYSBxdWFydGVyIGEgc2Vjb25kKS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMjUwXG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXNbc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb25TeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb24odmFsdWUpIHtcbiAgICAgIGlmICgnc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uID0gdmFsdWU7IH1cbiAgICAgIHRoaXNbc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb25TeW1ib2xdID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgYSBzdGFuZGFyZCBzZWxlY3Rpb24gYW5pbWF0aW9uIGVmZmVjdC5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgYSBzaG9ydGhhbmQgZm9yIHNldHRpbmcgdGhlIGBzZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXNgXG4gICAgICogcHJvcGVydHkgdG8gc3RhbmRhcmQga2V5ZnJhbWVzLiBTdXBwb3J0ZWQgc3RyaW5nIHZhbHVlczpcbiAgICAgKlxuICAgICAqICogXCJjcm9zc2ZhZGVcIlxuICAgICAqICogXCJyZXZlYWxcIlxuICAgICAqICogXCJyZXZlYWxXaXRoRmFkZVwiXG4gICAgICogKiBcInNob3dBZGphY2VudFwiXG4gICAgICogKiBcInNsaWRlXCJcbiAgICAgKiAqIFwic2xpZGVXaXRoR2FwXCJcbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQGRlZmF1bHQgXCJzbGlkZVwiXG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdCgpIHtcbiAgICAgIHJldHVybiB0aGlzW3NlbGVjdGlvbkFuaW1hdGlvbkVmZmVjdFN5bWJvbF07XG4gICAgfVxuICAgIHNldCBzZWxlY3Rpb25BbmltYXRpb25FZmZlY3QodmFsdWUpIHtcbiAgICAgIGlmICgnc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3Rpb25BbmltYXRpb25FZmZlY3QgPSB2YWx1ZTsgfVxuICAgICAgdGhpc1tzZWxlY3Rpb25BbmltYXRpb25FZmZlY3RTeW1ib2xdID0gdmFsdWU7XG4gICAgICB0aGlzLnNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcyA9IG1peGluLnN0YW5kYXJkRWZmZWN0S2V5ZnJhbWVzW3ZhbHVlXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUga2V5ZnJhbWVzIHRoYXQgZGVmaW5lIGFuIGFuaW1hdGlvbiB0aGF0IHBsYXlzIGZvciBhbiBpdGVtIHdoZW4gbW92aW5nXG4gICAgICogZm9yd2FyZCBpbiB0aGUgc2VxdWVuY2UuXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIGFuIGFycmF5IG9mIENTUyBydWxlcyB0aGF0IHdpbGwgYmUgYXBwbGllZC4gVGhlc2UgYXJlIHVzZWQgYXNcbiAgICAgKiBba2V5ZnJhbWVzXShodHRwOi8vdzNjLmdpdGh1Yi5pby93ZWItYW5pbWF0aW9ucy8ja2V5ZnJhbWVzLXNlY3Rpb24pXG4gICAgICogdG8gYW5pbWF0ZSB0aGUgaXRlbSB3aXRoIHRoZVxuICAgICAqIFtXZWIgQW5pbWF0aW9ucyBBUEldKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9hbmltYXRpb24pLlxuICAgICAqXG4gICAgICogVGhlIGFuaW1hdGlvbiByZXByZXNlbnRzIHRoZSBzdGF0ZSBvZiB0aGUgbmV4dCBpdGVtIGFzIGl0IG1vdmVzIGZyb21cbiAgICAgKiBjb21wbGV0ZWx5IHVuc2VsZWN0ZWQgKG9mZnN0YWdlLCB1c3VhbGx5IHJpZ2h0KSwgdG8gc2VsZWN0ZWQgKGNlbnRlclxuICAgICAqIHN0YWdlKSwgdG8gY29tcGxldGVseSB1bnNlbGVjdGVkIChvZmZzdGFnZSwgdXN1YWxseSBsZWZ0KS4gVGhlIGNlbnRlciB0aW1lXG4gICAgICogb2YgdGhlIGFuaW1hdGlvbiBzaG91bGQgY29ycmVzcG9uZCB0byB0aGUgaXRlbSdzIHF1aXNjZW50IHNlbGVjdGVkIHN0YXRlLFxuICAgICAqIHR5cGljYWxseSBpbiB0aGUgY2VudGVyIG9mIHRoZSBzdGFnZSBhbmQgYXQgdGhlIGl0ZW0ncyBsYXJnZXN0IHNpemUuXG4gICAgICpcbiAgICAgKiBUaGUgZGVmYXVsdCBmb3J3YXJkIGFuaW1hdGlvbiBpcyBhIHNtb290aCBzbGlkZSBhdCBmdWxsIHNpemUgZnJvbSByaWdodCB0b1xuICAgICAqIGxlZnQuXG4gICAgICpcbiAgICAgKiBXaGVuIG1vdmluZyB0aGUgc2VsZWN0aW9uIGJhY2t3YXJkLCB0aGlzIGFuaW1hdGlvbiBpcyBwbGF5ZWQgaW4gcmV2ZXJzZS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtjc3NSdWxlc1tdfVxuICAgICAqL1xuICAgIGdldCBzZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXMoKSB7XG4gICAgICAvLyBTdGFuZGFyZCBhbmltYXRpb24gc2xpZGVzIGxlZnQvcmlnaHQsIGtlZXBzIGFkamFjZW50IGl0ZW1zIG91dCBvZiB2aWV3LlxuICAgICAgcmV0dXJuIHRoaXNbc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcyh2YWx1ZSkge1xuICAgICAgaWYgKCdzZWxlY3Rpb25BbmltYXRpb25LZXlmcmFtZXMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcyA9IHZhbHVlOyB9XG4gICAgICB0aGlzW3NlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lc1N5bWJvbF0gPSB2YWx1ZTtcbiAgICAgIHJlc2V0QW5pbWF0aW9ucyh0aGlzKTtcbiAgICAgIHJlbmRlclNlbGVjdGlvbih0aGlzKTtcbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0aW9uV3JhcHMoKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2VsZWN0aW9uV3JhcHM7XG4gICAgfVxuICAgIHNldCBzZWxlY3Rpb25XcmFwcyh2YWx1ZSkge1xuICAgICAgaWYgKCdzZWxlY3Rpb25XcmFwcycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0aW9uV3JhcHMgPSB2YWx1ZTsgfVxuICAgICAgcmVzZXRBbmltYXRpb25zKHRoaXMpO1xuICAgICAgcmVuZGVyU2VsZWN0aW9uKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZSB3aGV0aGVyIGEgdHJhbnNpdGlvbiBzaG91bGQgYmUgc2hvd24gZHVyaW5nIHNlbGVjdGlvbi5cbiAgICAgKlxuICAgICAqIENvbXBvbmVudHMgbGlrZSBjYXJvdXNlbHMgb2Z0ZW4gZGVmaW5lIGFuaW1hdGVkIENTUyB0cmFuc2l0aW9ucyBmb3JcbiAgICAgKiBzbGlkaW5nIGVmZmVjdHMuIFN1Y2ggYSB0cmFuc2l0aW9uIHNob3VsZCB1c3VhbGx5ICpub3QqIGJlIGFwcGxpZWQgd2hpbGVcbiAgICAgKiB0aGUgdXNlciBpcyBkcmFnZ2luZywgYmVjYXVzZSBhIENTUyBhbmltYXRpb24gd2lsbCBpbnRyb2R1Y2UgYSBsYWcgdGhhdFxuICAgICAqIG1ha2VzIHRoZSBzd2lwZSBmZWVsIHNsdWdnaXNoLiBJbnN0ZWFkLCBhcyBsb25nIGFzIHRoZSB1c2VyIGlzIGRyYWdnaW5nXG4gICAgICogd2l0aCB0aGVpciBmaW5nZXIgZG93biwgdGhlIHRyYW5zaXRpb24gc2hvdWxkIGJlIHN1cHByZXNzZWQuIFdoZW4gdGhlXG4gICAgICogdXNlciByZWxlYXNlcyB0aGVpciBmaW5nZXIsIHRoZSB0cmFuc2l0aW9uIGNhbiBiZSByZXN0b3JlZCwgYWxsb3dpbmcgdGhlXG4gICAgICogYW5pbWF0aW9uIHRvIHNob3cgdGhlIGNhcm91c2VsIHNsaWRpbmcgaW50byBpdHMgZmluYWwgcG9zaXRpb24uXG4gICAgICpcbiAgICAgKiBOb3RlOiBUaGlzIHByb3BlcnR5IGlzIG9ubHkgaW50ZW5kZWQgdG8gbGV0IGEgY29tcG9uZW50IGNvb3BlcmF0ZSB3aXRoXG4gICAgICogbWl4aW5zIHRoYXQgbWF5IGJlIGFwcGxpZWQgdG8gaXQsIGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gbGV0IHNvbWVvbmVcbiAgICAgKiB1c2luZyBjb21wb25lbnQgcGVybWFuZW50bHkgZW5hYmxlIG9yIGRpc2FibGUgdHJhbnNpdGlvbiBlZmZlY3RzLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59IHRydWUgaWYgYSBjb21wb25lbnQtcHJvdmlkZWQgdHJhbnNpdGlvbiBzaG91bGQgYmUgc2hvd24sXG4gICAgICogZmFsc2UgaWYgbm90LlxuICAgICAqL1xuICAgIC8vIFRPRE86IFJlbmFtZSAoYW5kIGZsaXAgbWVhbmluZykgdG8gc29tZXRoaW5nIGxpa2UgZHJhZ2dpbmcoKT9cbiAgICBnZXQgc2hvd1RyYW5zaXRpb24oKSB7XG4gICAgICByZXR1cm4gc3VwZXIuc2hvd1RyYW5zaXRpb24gfHwgdGhpc1tzaG93VHJhbnNpdGlvblN5bWJvbF07XG4gICAgfVxuICAgIHNldCBzaG93VHJhbnNpdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCdzaG93VHJhbnNpdGlvbicgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2hvd1RyYW5zaXRpb24gPSB2YWx1ZTsgfVxuICAgICAgdGhpc1tzaG93VHJhbnNpdGlvblN5bWJvbF0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gU2VsZWN0aW9uQW5pbWF0aW9uO1xufVxuXG5cbi8vIFdlIGV4cG9zZSBoZWxwZXJzIG9uIHRoZSBtaXhpbiBmdW5jdGlvbiB0aGF0IHdlIHdhbnQgdG8gYmUgYWJsZSB0byB1bml0IHRlc3QuXG4vLyBTaW5jZSB0aGVzZSBhcmUgb24gdGhlIGZ1bmN0aW9uLCBub3Qgb24gdGhlIGNsYXNzIGVtaXR0ZWQgYnkgdGhlIGZ1bmN0aW9uLFxuLy8gdGhleSBkb24ndCBlbmQgdXAgZ2V0dGluZyBleHBvc2VkIG9uIGFjdHVhbCBlbGVtZW50IGluc3RhbmNlcy5cbm1peGluLmhlbHBlcnMgPSB7XG5cbiAgLypcbiAgICogQ2FsY3VsYXRlIHRoZSBhbmltYXRpb24gZnJhY3Rpb25zIGZvciBhbiBlbGVtZW50J3MgaXRlbXMgYXQgdGhlIGdpdmVuXG4gICAqIHNlbGVjdGlvbiBwb2ludC4gVGhpcyBpcyB1c2VkIHdoZW4gcmVuZGVyaW5nIHRoZSBlbGVtZW50J3Mgc2VsZWN0aW9uIHN0YXRlXG4gICAqIGluc3RhbnRhbmVvdXNseS5cbiAgICpcbiAgICogVGhpcyBmdW5jdGlvbiBjb25zaWRlcnMgdGhlIHNlbGVjdGVkSW5kZXggcGFyYW1ldGVyLCB3aGljaCBjYW4gYmUgYSB3aG9sZVxuICAgKiBvciBmcmFjdGlvbmFsIG51bWJlciwgYW5kIGRldGVybWluZXMgd2hpY2ggaXRlbXMgd2lsbCBiZSB2aXNpYmxlIGF0IHRoYXRcbiAgICogaW5kZXguIFRoaXMgZnVuY3Rpb24gdGhlbiBjYWxjdWxhdGVzIGEgY29ycmVzcG9uZGluZyBhbmltYXRpb24gZnJhY3Rpb246IGFcbiAgICogbnVtYmVyIGJldHdlZW4gMCBhbmQgMSBpbmRpY2F0aW5nIGhvdyBmYXIgdGhyb3VnaCB0aGUgc2VsZWN0aW9uIGFuaW1hdGlvblxuICAgKiBhbiBpdGVtIHNob3VsZCBiZSBzaG93biwgb3IgbnVsbCBpZiB0aGUgaXRlbSBzaG91bGQgbm90IGJlIHZpc2libGUgYXQgdGhhdFxuICAgKiBzZWxlY3Rpb24gaW5kZXguIFRoZXNlIGZyYWN0aW9ucyBhcmUgcmV0dXJuZWQgYXMgYW4gYXJyYXksIHdoZXJlIHRoZVxuICAgKiBhbmltYXRpb24gZnJhY3Rpb24gYXQgcG9zaXRpb24gTiBjb3JyZXNwb25kcyB0byBob3cgaXRlbSBOIHNob3VsZCBiZSBzaG93bi5cbiAgICovXG4gIGFuaW1hdGlvbkZyYWN0aW9uc0ZvclNlbGVjdGlvbihlbGVtZW50LCBzZWxlY3Rpb24pIHtcblxuICAgIGxldCBpdGVtcyA9IGVsZW1lbnQuaXRlbXM7XG4gICAgaWYgKCFpdGVtcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBpdGVtQ291bnQgPSBpdGVtcy5sZW5ndGg7XG4gICAgbGV0IHNlbGVjdGlvbldyYXBzID0gZWxlbWVudC5zZWxlY3Rpb25XcmFwcztcblxuICAgIHJldHVybiBpdGVtcy5tYXAoKGl0ZW0sIGl0ZW1JbmRleCkgPT4ge1xuICAgICAgLy8gSG93IG1hbnkgc3RlcHMgZnJvbSB0aGUgc2VsZWN0aW9uIHBvaW50IHRvIHRoaXMgaXRlbT9cbiAgICAgIGxldCBzdGVwcyA9IHN0ZXBzVG9JbmRleChpdGVtQ291bnQsIHNlbGVjdGlvbldyYXBzLCBzZWxlY3Rpb24sIGl0ZW1JbmRleCk7XG4gICAgICAvLyBUbyBjb252ZXJ0IHN0ZXBzIHRvIGFuaW1hdGlvbiBmcmFjdGlvbjpcbiAgICAgIC8vIHN0ZXBzICAgICAgYW5pbWF0aW9uIGZyYWN0aW9uXG4gICAgICAvLyAgMSAgICAgICAgIDAgICAgIChzdGFnZSByaWdodClcbiAgICAgIC8vICAwICAgICAgICAgMC41ICAgKGNlbnRlciBzdGFnZSlcbiAgICAgIC8vIC0xICAgICAgICAgMSAgICAgKHN0YWdlIGxlZnQpXG4gICAgICBsZXQgYW5pbWF0aW9uRnJhY3Rpb24gPSAoMSAtIHN0ZXBzKSAvIDI7XG4gICAgICByZXR1cm4gKGFuaW1hdGlvbkZyYWN0aW9uID49IDAgJiYgYW5pbWF0aW9uRnJhY3Rpb24gPD0gMSkgP1xuICAgICAgICBhbmltYXRpb25GcmFjdGlvbiA6XG4gICAgICAgIG51bGw7IC8vIE91dHNpZGUgYW5pbWF0aW9uIHJhbmdlXG4gICAgfSk7XG4gIH0sXG5cbiAgLypcbiAgICogQ2FsY3VsYXRlIHRoZSBhbmltYXRpb24gdGltaW5ncyB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIHNtb290aGx5IGFuaW1hdGUgdGhlXG4gICAqIGVsZW1lbnQncyBpdGVtcyBmcm9tIG9uZSBzZWxlY3Rpb24gc3RhdGUgdG8gYW5vdGhlci5cbiAgICpcbiAgICogVGhpcyByZXR1cm5zIGFuIGFycmF5IG9mIHRpbWluZ3MsIHdoZXJlIHRoZSB0aW1pbmcgYXQgcG9zaXRpb24gTiBzaG91bGQgYmVcbiAgICogdXNlZCB0byBhbmltYXRlIGl0ZW0gTi4gSWYgYW4gaXRlbSdzIHRpbWluZyBpcyBudWxsLCB0aGVuIHRoYXQgaXRlbSBzaG91bGRcbiAgICogbm90IHRha2UgcGxhY2UgaW4gdGhlIGFuaW1hdGlvbiwgYW5kIHNob3VsZCBiZSBoaWRkZW4gaW5zdGVhZC5cbiAgICovXG4gIGVmZmVjdFRpbWluZ3NGb3JTZWxlY3Rpb25BbmltYXRpb24oZWxlbWVudCwgZnJvbVNlbGVjdGlvbiwgdG9TZWxlY3Rpb24pIHtcblxuICAgIGxldCBpdGVtcyA9IGVsZW1lbnQuaXRlbXM7XG4gICAgaWYgKCFpdGVtcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgaXRlbUNvdW50ID0gaXRlbXMubGVuZ3RoO1xuICAgIGxldCBzZWxlY3Rpb25XcmFwcyA9IGVsZW1lbnQuc2VsZWN0aW9uV3JhcHM7XG4gICAgbGV0IHRvSW5kZXggPSBGcmFjdGlvbmFsU2VsZWN0aW9uLmhlbHBlcnMud3JhcHBlZFNlbGVjdGlvblBhcnRzKHRvU2VsZWN0aW9uLCBpdGVtQ291bnQsIHNlbGVjdGlvbldyYXBzKS5pbmRleDtcbiAgICBsZXQgdG90YWxTdGVwcyA9IHN0ZXBzVG9JbmRleChpdGVtQ291bnQsIHNlbGVjdGlvbldyYXBzLCBmcm9tU2VsZWN0aW9uLCB0b1NlbGVjdGlvbik7XG4gICAgbGV0IGRpcmVjdGlvbiA9IHRvdGFsU3RlcHMgPj0gMCA/ICdub3JtYWwnOiAncmV2ZXJzZSc7XG4gICAgbGV0IGZpbGwgPSAnYm90aCc7XG4gICAgbGV0IHRvdGFsRHVyYXRpb24gPSBlbGVtZW50LnNlbGVjdGlvbkFuaW1hdGlvbkR1cmF0aW9uO1xuICAgIGxldCBzdGVwRHVyYXRpb24gPSB0b3RhbFN0ZXBzICE9PSAwID9cbiAgICAgIHRvdGFsRHVyYXRpb24gKiAyIC8gTWF0aC5jZWlsKE1hdGguYWJzKHRvdGFsU3RlcHMpKSA6XG4gICAgICAwOyAgLy8gTm8gc3RlcHMgcmVxdWlyZWQsIGFuaW1hdGlvbiB3aWxsIGJlIGluc3RhbnRlbm91cy5cblxuICAgIGxldCB0aW1pbmdzID0gaXRlbXMubWFwKChpdGVtLCBpdGVtSW5kZXgpID0+IHtcbiAgICAgIGxldCBzdGVwcyA9IHN0ZXBzVG9JbmRleChpdGVtQ291bnQsIHNlbGVjdGlvbldyYXBzLCBpdGVtSW5kZXgsIHRvU2VsZWN0aW9uKTtcbiAgICAgIC8vIElmIHdlIGluY2x1ZGUgdGhpcyBpdGVtIGluIHRoZSBzdGFnZ2VyZWQgc2VxdWVuY2Ugb2YgYW5pbWF0aW9ucyB3ZSdyZVxuICAgICAgLy8gY3JlYXRpbmcsIHdoZXJlIHdvdWxkIHRoZSBpdGVtIGFwcGVhciBpbiB0aGUgc2VxdWVuY2U/XG4gICAgICBsZXQgcG9zaXRpb25JblNlcXVlbmNlID0gdG90YWxTdGVwcyAtIHN0ZXBzO1xuICAgICAgaWYgKHRvdGFsU3RlcHMgPCAwKSB7XG4gICAgICAgIHBvc2l0aW9uSW5TZXF1ZW5jZSA9IC1wb3NpdGlvbkluU2VxdWVuY2U7XG4gICAgICB9XG4gICAgICAvLyBTbywgaXMgdGhpcyBpdGVtIHJlYWxseSBpbmNsdWRlZCBpbiB0aGUgc2VxdWVuY2U/XG4gICAgICBpZiAoTWF0aC5jZWlsKHBvc2l0aW9uSW5TZXF1ZW5jZSkgPj0gMCAmJiBwb3NpdGlvbkluU2VxdWVuY2UgPD0gTWF0aC5hYnModG90YWxTdGVwcykpIHtcbiAgICAgICAgLy8gTm90ZSB0aGF0IGRlbGF5IGZvciBmaXJzdCBpdGVtIHdpbGwgYmUgbmVnYXRpdmUuIFRoYXQgd2lsbCBjYXVzZVxuICAgICAgICAvLyB0aGUgYW5pbWF0aW9uIHRvIHN0YXJ0IGhhbGZ3YXkgdGhyb3VnaCwgd2hpY2ggaXMgd2hhdCB3ZSB3YW50LlxuICAgICAgICBsZXQgZGVsYXkgPSBzdGVwRHVyYXRpb24gKiAocG9zaXRpb25JblNlcXVlbmNlIC0gMSkvMjtcbiAgICAgICAgbGV0IGVuZERlbGF5ID0gaXRlbUluZGV4ID09PSB0b0luZGV4ID9cbiAgICAgICAgICAtc3RlcER1cmF0aW9uLzIgOiAgIC8vIFN0b3AgaGFsZndheSB0aHJvdWdoLlxuICAgICAgICAgIDA7ICAgICAgICAgICAgICAvLyBQbGF5IGFuaW1hdGlvbiB1bnRpbCBlbmQuXG4gICAgICAgIHJldHVybiB7IGR1cmF0aW9uOiBzdGVwRHVyYXRpb24sIGRpcmVjdGlvbiwgZmlsbCwgZGVsYXksIGVuZERlbGF5IH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0aW1pbmdzO1xuICB9XG5cbn07XG5cblxuLy8gS2V5ZnJhbWVzIGZvciBzdGFuZGFyZCBzZWxlY3Rpb24gYW5pbWF0aW9uIGVmZmVjdHMuXG5taXhpbi5zdGFuZGFyZEVmZmVjdEtleWZyYW1lcyA9IHtcblxuICAvLyBTaW1wbGUgY3Jvc3NmYWRlXG4gIGNyb3NzZmFkZTogW1xuICAgIHsgb3BhY2l0eTogMCB9LFxuICAgIHsgb3BhY2l0eTogMSB9LFxuICAgIHsgb3BhY2l0eTogMCB9XG4gIF0sXG5cbiAgLy8gUmV2ZWFsLCBhcyBpZiBzbGlkaW5nIHRoZSB0b3AgY2FyZCBvZmYgYSBkZWNrIG9mIGNhcmRzXG4gIHJldmVhbDogW1xuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwJSknLCB6SW5kZXg6IDAgfSxcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCUpJywgekluZGV4OiAxIH0sXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xMDAlKScsIHpJbmRleDogMiB9XG4gIF0sXG5cbiAgLy8gR29vZ2xlIFBob3Rvcy1zdHlsZSByZXZlYWwtd2l0aC1mYWRlIGFuaW1hdGlvblxuICByZXZlYWxXaXRoRmFkZTogW1xuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwJSkgc2NhbGUoMC43NSknLCBvcGFjaXR5OiAwLCB6SW5kZXg6IDAgfSxcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCUpIHNjYWxlKDEuMCknLCBvcGFjaXR5OiAxLCB6SW5kZXg6IDEgfSxcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTEwMCUpIHNjYWxlKDEuMCknLCBvcGFjaXR5OiAxLCB6SW5kZXg6IDIgfVxuICBdLFxuXG4gIC8vIENhcm91c2VsIHZhcmlhbnQgd2l0aCBhIGJpdCBvZiBvZmYtc3RhZ2UgZWxlbWVudHMgc2hvd2luZ1xuICBzaG93QWRqYWNlbnQ6IFtcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoNzglKSBzY2FsZSgwLjcpJywgekluZGV4OiAwIH0sXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDAlKSBzY2FsZSgwLjgyKScsIHpJbmRleDogMSB9LFxuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNzglKSBzY2FsZSgwLjcpJywgekluZGV4OiAwIH1cbiAgXSxcblxuICAvLyBTaW1wbGUgc2xpZGVcbiAgc2xpZGU6IFtcbiAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSknIH0sXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xMDAlKScgfVxuICBdLFxuXG4gIC8vIFNsaWRlLCB3aXRoIGEgZ2FwIGJldHdlZW5cbiAgc2xpZGVXaXRoR2FwOiBbXG4gICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDExMCUpJyB9LFxuICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMTEwJSknIH1cbiAgXVxuXG59O1xuXG5cbi8qXG4gKiBTbW9vdGhseSBhbmltYXRlIHRoZSBzZWxlY3Rpb24gYmV0d2VlbiB0aGUgaW5kaWNhdGVkIFwiZnJvbVwiIGFuZCBcInRvXCJcbiAqIGluZGljZXMuIFRoZSBmb3JtZXIgY2FuIGJlIGEgZnJhY3Rpb24sIGUuZy4sIHdoZW4gdGhlIHVzZXIgcmVsZWFzZXMgYSBmaW5nZXJcbiAqIHRvIGNvbXBsZXRlIGEgdG91Y2ggZHJhZywgYW5kIHRoZSBzZWxlY3Rpb24gd2lsbCBzbmFwIHRvIHRoZSBjbG9zZXN0IHdob2xlXG4gKiBpbmRleC5cbiAqL1xuZnVuY3Rpb24gYW5pbWF0ZVNlbGVjdGlvbihlbGVtZW50LCBmcm9tU2VsZWN0aW9uLCB0b1NlbGVjdGlvbikge1xuXG4gIHJlc2V0QW5pbWF0aW9ucyhlbGVtZW50KTtcblxuICBpZiAoZWxlbWVudFtsYXN0QW5pbWF0aW9uU3ltYm9sXSkge1xuICAgIC8vIENhbmNlbCB0aGUgZWZmZWN0cyBvZiB0aGUgbGFzdCBzZWxlY3Rpb24gYW5pbWF0aW9uLlxuICAgIGVsZW1lbnRbbGFzdEFuaW1hdGlvblN5bWJvbF0ub25maW5pc2ggPSBudWxsO1xuICAgIGVsZW1lbnRbbGFzdEFuaW1hdGlvblN5bWJvbF0gPSBudWxsO1xuICB9XG5cbiAgLy8gQ2FsY3VsYXRlIHRoZSBhbmltYXRpb24gdGltaW5ncy5cbiAgbGV0IGl0ZW1zID0gZWxlbWVudC5pdGVtcztcbiAgbGV0IGtleWZyYW1lcyA9IGVsZW1lbnQuc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzO1xuICBlbGVtZW50W2FuaW1hdGluZ1NlbGVjdGlvblN5bWJvbF0gPSB0cnVlO1xuICBsZXQgdGltaW5ncyA9IG1peGluLmhlbHBlcnMuZWZmZWN0VGltaW5nc0ZvclNlbGVjdGlvbkFuaW1hdGlvbihlbGVtZW50LCBmcm9tU2VsZWN0aW9uLCB0b1NlbGVjdGlvbik7XG4gIGxldCBsYXN0QW5pbWF0aW9uRGV0YWlscztcblxuICAvLyBGaWd1cmUgb3V0IHdoaWNoIGl0ZW0gd2lsbCBiZSB0aGUgb25lICphZnRlciogdGhlIG9uZSB3ZSdyZSBzZWxlY3RpbmcuXG4gIGxldCBpdGVtQ291bnQgPSBpdGVtcy5sZW5ndGg7XG4gIGxldCBzZWxlY3Rpb25XcmFwcyA9IGVsZW1lbnQuc2VsZWN0aW9uV3JhcHM7XG4gIGxldCBzZWxlY3Rpb25JbmRleCA9IEZyYWN0aW9uYWxTZWxlY3Rpb24uaGVscGVycy5zZWxlY3Rpb25QYXJ0cyh0b1NlbGVjdGlvbiwgaXRlbUNvdW50LCBzZWxlY3Rpb25XcmFwcykuaW5kZXg7XG4gIGxldCB0b3RhbFN0ZXBzID0gc3RlcHNUb0luZGV4KGl0ZW1Db3VudCwgc2VsZWN0aW9uV3JhcHMsIGZyb21TZWxlY3Rpb24sIHRvU2VsZWN0aW9uKTtcbiAgbGV0IGZvcndhcmQgPSB0b3RhbFN0ZXBzID49IDA7XG4gIGxldCBuZXh0VXBJbmRleCA9IHNlbGVjdGlvbkluZGV4ICsgKGZvcndhcmQgPyAxIDogLSAxKTtcbiAgaWYgKHNlbGVjdGlvbldyYXBzKSB7XG4gICAgbmV4dFVwSW5kZXggPSBGcmFjdGlvbmFsU2VsZWN0aW9uLmhlbHBlcnMud3JhcHBlZFNlbGVjdGlvbihuZXh0VXBJbmRleCwgaXRlbUNvdW50KTtcbiAgfSBlbHNlIGlmICghaXNJdGVtSW5kZXhJbkJvdW5kcyhlbGVtZW50LCBuZXh0VXBJbmRleCkpIHtcbiAgICBuZXh0VXBJbmRleCA9IG51bGw7IC8vIEF0IHN0YXJ0L2VuZCBvZiBsaXN0OyBkb24ndCBoYXZlIGEgbmV4dCBpdGVtIHRvIHNob3cuXG4gIH1cblxuICAvLyBQbGF5IHRoZSBhbmltYXRpb25zIHVzaW5nIHRob3NlIHRpbWluZ3MuXG4gIHRpbWluZ3MuZm9yRWFjaCgodGltaW5nLCBpbmRleCkgPT4ge1xuICAgIGxldCBpdGVtID0gaXRlbXNbaW5kZXhdO1xuICAgIGlmICh0aW1pbmcpIHtcbiAgICAgIHNob3dJdGVtKGl0ZW0sIHRydWUpO1xuICAgICAgbGV0IGFuaW1hdGlvbiA9IGl0ZW0uYW5pbWF0ZShrZXlmcmFtZXMsIHRpbWluZyk7XG5cbiAgICAgIC8vIEZpZ3VyZSBvdXQgd2hldGhlciB0aGlzIGFuaW1hdGlvbiB3aWxsIGJlIHRoZSBsYXN0IG9uZSB0byBlbmRcbiAgICAgIC8vIChwb3NzaWJseSBjb25jdXJyZW50IHdpdGggYW5vdGhlciBhbmltYXRpb24pLlxuICAgICAgbGV0IGVuZFRpbWUgPSB0aW1pbmcuZGVsYXkgKyB0aW1pbmcuZHVyYXRpb24gKyB0aW1pbmcuZW5kRGVsYXk7XG4gICAgICBpZiAobGFzdEFuaW1hdGlvbkRldGFpbHMgPT0gbnVsbCB8fCBlbmRUaW1lID4gbGFzdEFuaW1hdGlvbkRldGFpbHMuZW5kVGltZSkge1xuICAgICAgICBsYXN0QW5pbWF0aW9uRGV0YWlscyA9IHsgYW5pbWF0aW9uLCBlbmRUaW1lLCB0aW1pbmcgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGluZGV4ID09PSBuZXh0VXBJbmRleCkge1xuICAgICAgICAvLyBUaGlzIGl0ZW0gd2lsbCBiZSBhbmltYXRlZCwgc28gd2lsbCBhbHJlYWR5IGJlIGluIHRoZSBkZXNpcmVkIHN0YXRlXG4gICAgICAgIC8vIGFmdGVyIHRoZSBhbmltYXRpb24gY29tcGxldGVzLlxuICAgICAgICBuZXh0VXBJbmRleCA9IG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoaXMgaXRlbSBkb2Vzbid0IHBhcnRpY2lwYXRlIGluIHRoZSBhbmltYXRpb24uXG4gICAgICBzaG93SXRlbShpdGVtLCBmYWxzZSk7XG4gICAgfVxuICB9KTtcblxuICBpZiAobGFzdEFuaW1hdGlvbkRldGFpbHMgJiYgbmV4dFVwSW5kZXggIT0gbnVsbCkge1xuICAgIGRpc3BsYXlOZXh0SXRlbVdoZW5BbmltYXRpb25Db21wbGV0ZXMoZWxlbWVudCwgbGFzdEFuaW1hdGlvbkRldGFpbHMuYW5pbWF0aW9uLCBuZXh0VXBJbmRleCwgZm9yd2FyZCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gU2hvdWxkbid0IGhhcHBlbiAtLSB3ZSBzaG91bGQgYWx3YXlzIGhhdmUgYXQgbGVhc3Qgb25lIGFuaW1hdGlvbi5cbiAgICBlbGVtZW50W2FuaW1hdGluZ1NlbGVjdGlvblN5bWJvbF0gPSBmYWxzZTtcbiAgfVxufVxuXG4vKlxuICogV2hlbiB0aGUgbGFzdCBhbmltYXRpb24gY29tcGxldGVzLCBzaG93IHRoZSBuZXh0IGl0ZW0gaW4gdGhlIGRpcmVjdGlvbiB3ZSdyZVxuICogZ29pbmcuIFRoaXMgd2FpdGluZyBpcyBhIGhhY2sgdG8gYXZvaWQgaGF2aW5nIHN0YXRpYyBpdGVtcyBoaWdoZXIgaW4gdGhlXG4gKiBuYXR1cmFsIHotb3JkZXIgb2JzY3VyZSBpdGVtcyBkdXJpbmcgYW5pbWF0aW9uLlxuICovXG5mdW5jdGlvbiBkaXNwbGF5TmV4dEl0ZW1XaGVuQW5pbWF0aW9uQ29tcGxldGVzKGVsZW1lbnQsIGFuaW1hdGlvbiwgbmV4dFVwSW5kZXgsIGZvcndhcmQpIHtcbiAgYW5pbWF0aW9uLm9uZmluaXNoID0gZXZlbnQgPT4ge1xuICAgIGxldCBuZXh0VXBJdGVtID0gZWxlbWVudC5pdGVtc1tuZXh0VXBJbmRleF07XG4gICAgbGV0IGFuaW1hdGlvbkZyYWN0aW9uID0gZm9yd2FyZCA/IDAgOiAxO1xuICAgIHNldEFuaW1hdGlvbkZyYWN0aW9uKGVsZW1lbnQsIG5leHRVcEluZGV4LCBhbmltYXRpb25GcmFjdGlvbik7XG4gICAgc2hvd0l0ZW0obmV4dFVwSXRlbSwgdHJ1ZSk7XG4gICAgZWxlbWVudFthbmltYXRpbmdTZWxlY3Rpb25TeW1ib2xdID0gZmFsc2U7XG4gICAgZWxlbWVudFtsYXN0QW5pbWF0aW9uU3ltYm9sXSA9IG51bGw7XG4gIH07XG4gIGVsZW1lbnRbbGFzdEFuaW1hdGlvblN5bWJvbF0gPSBhbmltYXRpb247XG59XG5cbmZ1bmN0aW9uIGdldEFuaW1hdGlvbkZvckl0ZW1JbmRleChlbGVtZW50LCBpbmRleCkge1xuICBpZiAoZWxlbWVudFthbmltYXRpb25TeW1ib2xdID09IG51bGwpIHtcbiAgICAvLyBOb3QgcmVhZHkgeWV0O1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGxldCBhbmltYXRpb24gPSBlbGVtZW50W2FuaW1hdGlvblN5bWJvbF1baW5kZXhdO1xuICBpZiAoIWFuaW1hdGlvbikge1xuICAgIGxldCBpdGVtID0gZWxlbWVudC5pdGVtc1tpbmRleF07XG4gICAgYW5pbWF0aW9uID0gaXRlbS5hbmltYXRlKGVsZW1lbnQuc2VsZWN0aW9uQW5pbWF0aW9uS2V5ZnJhbWVzLCB7XG4gICAgICBkdXJhdGlvbjogZWxlbWVudC5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbixcbiAgICAgIGZpbGw6ICdib3RoJ1xuICAgIH0pO1xuICAgIGFuaW1hdGlvbi5wYXVzZSgpO1xuICAgIGVsZW1lbnRbYW5pbWF0aW9uU3ltYm9sXVtpbmRleF0gPSBhbmltYXRpb247XG4gIH1cbiAgcmV0dXJuIGFuaW1hdGlvbjtcbn1cblxuZnVuY3Rpb24gaXNJdGVtSW5kZXhJbkJvdW5kcyhlbGVtZW50LCBpbmRleCkge1xuICByZXR1cm4gaW5kZXggPj0gMCAmJiBlbGVtZW50Lml0ZW1zICYmIGluZGV4IDwgZWxlbWVudC5pdGVtcy5sZW5ndGg7XG59XG5cbi8qXG4gKiBSZW5kZXIgdGhlIHNlbGVjdGlvbiBzdGF0ZSBvZiB0aGUgZWxlbWVudC5cbiAqXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIHJlLXJlbmRlciBhIHByZXZpb3VzIHNlbGVjdGlvbiBzdGF0ZSAoaWYgdGhlXG4gKiBzZWxlY3RlZEluZGV4IHBhcmFtIGlzIG9taXR0ZWQpLCByZW5kZXIgdGhlIHNlbGVjdGlvbiBpbnN0YW50bHkgYXQgYSBnaXZlblxuICogd2hvbGUgb3IgZnJhY3Rpb25hbCBzZWxlY3Rpb24gaW5kZXgsIG9yIGFuaW1hdGUgdG8gYSBnaXZlbiBzZWxlY3Rpb24gaW5kZXguXG4gKlxuICogVGhlcmUgYXJlIHNldmVyYWwgZGlzdGluY3Qgc2NlbmFyaW9zIHdlIG5lZWQgdG8gY292ZXI6XG4gKlxuICogMS4gSW5pdGlhbCBwb3NpdGlvbmluZywgb3IgcmVwb3NpdGlvbmluZyBhZnRlciBjaGFuZ2luZyBhIHByb3BlcnR5IGxpa2VcbiAqICAgIHNlbGVjdGlvbkFuaW1hdGlvbktleWZyYW1lcyB0aGF0IGFmZmVjdHMgcmVuZGVyaW5nLlxuICogMi4gQW5pbWF0ZSBvbiBzZWxlY3RlZEluZGV4IGNoYW5nZS4gVGhpcyBzaG91bGQgb3ZlcnJpZGUgYW55IGFuaW1hdGlvbi9zd2lwZVxuICogICAgYWxyZWFkeSBpbiBwcm9ncmVzcy5cbiAqIDMuIEluc3RhbnRseSByZW5kZXIgdGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgYSBkcmFnIG9wZXJhdGlvbiBpbiBwcm9ncmVzcy5cbiAqIDQuIENvbXBsZXRlIGEgZHJhZyBvcGVyYXRpb24uIElmIHRoZSBkcmFnIHdhc24ndCBmYXIgZW5vdWdoIHRvIGFmZmVjdFxuICogICAgc2VsZWN0aW9uLCB3ZSdsbCBqdXN0IGJlIHJlc3RvcmluZyB0aGUgc2VsZWN0ZWRGcmFjdGlvbiB0byAwLlxuICpcbiAqIElmIHRoZSBsaXN0IGRvZXMgbm90IHdyYXAsIGFueSBzZWxlY3Rpb24gcG9zaXRpb24gb3V0c2lkZSB0aGUgbGlzdCdzIGJvdW5kc1xuICogd2lsbCBiZSBkYW1wZWQgdG8gcHJvZHVjZSBhIHZpc3VhbCBlZmZlY3Qgb2YgdGVuc2lvbi5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyU2VsZWN0aW9uKGVsZW1lbnQsIHNlbGVjdGVkSW5kZXg9ZWxlbWVudC5zZWxlY3RlZEluZGV4LCBzZWxlY3RlZEZyYWN0aW9uPWVsZW1lbnQuc2VsZWN0ZWRGcmFjdGlvbikge1xuICBsZXQgaXRlbUNvdW50ID0gZWxlbWVudC5pdGVtcyA/IGVsZW1lbnQuaXRlbXMubGVuZ3RoIDogMDtcbiAgaWYgKGl0ZW1Db3VudCA9PT0gMCkge1xuICAgIC8vIE5vdGhpbmcgdG8gcmVuZGVyLlxuICAgIHJldHVybjtcbiAgfVxuICBpZiAoc2VsZWN0ZWRJbmRleCA8IDApIHtcbiAgICAvLyBUT0RPOiBIYW5kbGUgbm8gc2VsZWN0aW9uLlxuICAgIHJldHVybjtcbiAgfVxuICBsZXQgc2VsZWN0aW9uID0gc2VsZWN0ZWRJbmRleCArIHNlbGVjdGVkRnJhY3Rpb247XG4gIGlmIChlbGVtZW50LnNlbGVjdGlvbldyYXBzKSB7XG4gICAgLy8gQXBwbHkgd3JhcHBpbmcgdG8gZW5zdXJlIGNvbnNpc3RlbnQgcmVwcmVzZW50YXRpb24gb2Ygc2VsZWN0aW9uLlxuICAgIHNlbGVjdGlvbiA9IEZyYWN0aW9uYWxTZWxlY3Rpb24uaGVscGVycy53cmFwcGVkU2VsZWN0aW9uKHNlbGVjdGlvbiwgaXRlbUNvdW50KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBBcHBseSBkYW1waW5nIGlmIG5lY2Vzc2FyeS5cbiAgICBzZWxlY3Rpb24gPSBGcmFjdGlvbmFsU2VsZWN0aW9uLmhlbHBlcnMuZGFtcGVkU2VsZWN0aW9uKHNlbGVjdGlvbiwgaXRlbUNvdW50KTtcbiAgfVxuICBsZXQgcHJldmlvdXNTZWxlY3Rpb24gPSBlbGVtZW50W3ByZXZpb3VzU2VsZWN0aW9uU3ltYm9sXTtcbiAgaWYgKGVsZW1lbnRbc2hvd1RyYW5zaXRpb25TeW1ib2xdICYmIHByZXZpb3VzU2VsZWN0aW9uICE9IG51bGwgJiZcbiAgICAgIHByZXZpb3VzU2VsZWN0aW9uICE9PSBzZWxlY3Rpb24pIHtcbiAgICAvLyBBbmltYXRlIHNlbGVjdGlvbiBmcm9tIHByZXZpb3VzIHN0YXRlIHRvIG5ldyBzdGF0ZS5cbiAgICBhbmltYXRlU2VsZWN0aW9uKGVsZW1lbnQsIHByZXZpb3VzU2VsZWN0aW9uLCBzZWxlY3Rpb24pO1xuICB9IGVsc2UgaWYgKHNlbGVjdGVkRnJhY3Rpb24gPT09IDAgJiYgZWxlbWVudFthbmltYXRpbmdTZWxlY3Rpb25TeW1ib2xdKSB7XG4gICAgLy8gQWxyZWFkeSBpbiBwcm9jZXNzIG9mIGFuaW1hdGluZyB0byBmcmFjdGlvbiAwLiBEdXJpbmcgdGhhdCBwcm9jZXNzLFxuICAgIC8vIGlnbm9yZSBzdWJzZXF1ZW50IGF0dGVtcHRzIHRvIHJlbmRlclNlbGVjdGlvbiB0byBmcmFjdGlvbiAwLlxuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICAvLyBSZW5kZXIgY3VycmVudCBzZWxlY3Rpb24gc3RhdGUgaW5zdGFudGx5LlxuICAgIHJlbmRlclNlbGVjdGlvbkluc3RhbnRseShlbGVtZW50LCBzZWxlY3Rpb24pO1xuICB9XG4gIGVsZW1lbnRbcHJldmlvdXNTZWxlY3Rpb25TeW1ib2xdID0gc2VsZWN0aW9uO1xufVxuXG4vKlxuICogSW5zdGFudGx5IHJlbmRlciAoZG9uJ3QgYW5pbWF0ZSkgdGhlIGVsZW1lbnQncyBpdGVtcyBhdCB0aGUgZ2l2ZW4gd2hvbGUgb3JcbiAqIGZyYWN0aW9uYWwgc2VsZWN0aW9uIGluZGV4LlxuICovXG5mdW5jdGlvbiByZW5kZXJTZWxlY3Rpb25JbnN0YW50bHkoZWxlbWVudCwgdG9TZWxlY3Rpb24pIHtcbiAgbGV0IGFuaW1hdGlvbkZyYWN0aW9ucyA9IG1peGluLmhlbHBlcnMuYW5pbWF0aW9uRnJhY3Rpb25zRm9yU2VsZWN0aW9uKGVsZW1lbnQsIHRvU2VsZWN0aW9uKTtcbiAgYW5pbWF0aW9uRnJhY3Rpb25zLm1hcCgoYW5pbWF0aW9uRnJhY3Rpb24sIGluZGV4KSA9PiB7XG4gICAgbGV0IGl0ZW0gPSBlbGVtZW50Lml0ZW1zW2luZGV4XTtcbiAgICBpZiAoYW5pbWF0aW9uRnJhY3Rpb24gIT0gbnVsbCkge1xuICAgICAgc2hvd0l0ZW0oaXRlbSwgdHJ1ZSk7XG4gICAgICBzZXRBbmltYXRpb25GcmFjdGlvbihlbGVtZW50LCBpbmRleCwgYW5pbWF0aW9uRnJhY3Rpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaG93SXRlbShpdGVtLCBmYWxzZSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVzZXRBbmltYXRpb25zKGVsZW1lbnQpIHtcbiAgbGV0IGl0ZW1Db3VudCA9IGVsZW1lbnQuaXRlbXMgPyBlbGVtZW50Lml0ZW1zLmxlbmd0aCA6IDA7XG4gIGVsZW1lbnRbYW5pbWF0aW9uU3ltYm9sXSA9IG5ldyBBcnJheShpdGVtQ291bnQpO1xufVxuXG4vKlxuICogUGF1c2UgdGhlIGluZGljYXRlZCBhbmltYXRpb24gYW5kIGhhdmUgaXQgc2hvdyB0aGUgYW5pbWF0aW9uIGF0IHRoZSBnaXZlblxuICogZnJhY3Rpb24gKGJldHdlZW4gMCBhbmQgMSkgb2YgdGhlIHdheSB0aHJvdWdoIHRoZSBhbmltYXRpb24uXG4gKi9cbmZ1bmN0aW9uIHNldEFuaW1hdGlvbkZyYWN0aW9uKGVsZW1lbnQsIGl0ZW1JbmRleCwgZnJhY3Rpb24pIHtcbiAgbGV0IGFuaW1hdGlvbiA9IGdldEFuaW1hdGlvbkZvckl0ZW1JbmRleChlbGVtZW50LCBpdGVtSW5kZXgpO1xuICBpZiAoYW5pbWF0aW9uKSB7XG4gICAgbGV0IGR1cmF0aW9uID0gZWxlbWVudC5zZWxlY3Rpb25BbmltYXRpb25EdXJhdGlvbjtcbiAgICBhbmltYXRpb24uY3VycmVudFRpbWUgPSBmcmFjdGlvbiAqIGR1cmF0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dJdGVtKGl0ZW0sIGZsYWcpIHtcbiAgaXRlbS5zdHlsZS52aXNpYmlsaXR5ID0gZmxhZyA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nO1xufVxuXG4vKlxuICogRmlndXJlIG91dCBob3cgbWFueSBzdGVwcyBpdCB3aWxsIHRha2UgdG8gZ28gZnJvbSBmcm9tU2VsZWN0aW9uIHRvXG4gKiB0b1NlbGVjdGlvbi4gVG8gZ28gZnJvbSBpdGVtIDMgdG8gaXRlbSA0IGlzIG9uZSBzdGVwLlxuICpcbiAqIElmIHdyYXBwaW5nIGlzIGFsbG93ZWQsIHRoZW4gZ29pbmcgZnJvbSB0aGUgbGFzdCBpdGVtIHRvIHRoZSBmaXJzdCB3aWxsIHRha2VcbiAqIG9uZSBzdGVwIChmb3J3YXJkKSwgYW5kIGdvaW5nIGZyb20gdGhlIGZpcnN0IGl0ZW0gdG8gdGhlIGxhc3Qgd2lsbCB0YWtlIG9uZVxuICogc3RlcCAoYmFja3dhcmQpLlxuICovXG5mdW5jdGlvbiBzdGVwc1RvSW5kZXgobGVuZ3RoLCBhbGxvd1dyYXAsIGZyb21TZWxlY3Rpb24sIHRvU2VsZWN0aW9uKSB7XG4gIGxldCBzdGVwcyA9IHRvU2VsZWN0aW9uIC0gZnJvbVNlbGVjdGlvbjtcbiAgLy8gV3JhcHBpbmcgb25seSBraWNrcyBpbiB3aGVuIGxpc3QgaGFzIG1vcmUgdGhhbiAxIGl0ZW0uXG4gIGlmIChhbGxvd1dyYXAgJiYgbGVuZ3RoID4gMSkge1xuICAgIGxldCB3cmFwU3RlcHMgPSBsZW5ndGggLSBNYXRoLmFicyhzdGVwcyk7XG4gICAgaWYgKHdyYXBTdGVwcyA8PSAxKSB7XG4gICAgICAvLyBTcGVjaWFsIGNhc2VcbiAgICAgIHN0ZXBzID0gc3RlcHMgPCAwID9cbiAgICAgICAgd3JhcFN0ZXBzIDogICAvLyBXcmFwIGZvcndhcmQgZnJvbSBsYXN0IGl0ZW0gdG8gZmlyc3QuXG4gICAgICAgIC13cmFwU3RlcHM7ICAgLy8gV3JhcCBiYWNrd2FyZCBmcm9tIGZpcnN0IGl0ZW0gdG8gbGFzdC5cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0ZXBzO1xufVxuIiwiLy8gVXNlZCB0byBhc3NpZ24gdW5pcXVlIElEcyB0byBpdGVtIGVsZW1lbnRzIHdpdGhvdXQgSURzLlxubGV0IGlkQ291bnQgPSAwO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggU2VsZWN0aW9uQXJpYUFjdGl2ZS4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgLyoqXG4gICAqIE1peGluIHdoaWNoIHRyZWF0cyB0aGUgc2VsZWN0ZWQgaXRlbSBpbiBhIGxpc3QgYXMgdGhlIGFjdGl2ZSBpdGVtIGluIEFSSUFcbiAgICogYWNjZXNzaWJpbGl0eSB0ZXJtcy5cbiAgICpcbiAgICogSGFuZGxpbmcgQVJJQSBzZWxlY3Rpb24gc3RhdGUgcHJvcGVybHkgaXMgYWN0dWFsbHkgcXVpdGUgY29tcGxleDpcbiAgICpcbiAgICogKiBUaGUgaXRlbXMgaW4gdGhlIGxpc3QgbmVlZCB0byBiZSBpbmRpY2F0ZWQgYXMgcG9zc2libGUgaXRlbXMgdmlhIGFuIEFSSUFcbiAgICogICBgcm9sZWAgYXR0cmlidXRlIHZhbHVlIHN1Y2ggYXMgXCJvcHRpb25cIi5cbiAgICogKiBUaGUgc2VsZWN0ZWQgaXRlbSBuZWVkIHRvIGJlIG1hcmtlZCBhcyBzZWxlY3RlZCBieSBzZXR0aW5nIHRoZSBpdGVtJ3NcbiAgICogICBgYXJpYS1zZWxlY3RlZGAgYXR0cmlidXRlIHRvIHRydWUgKmFuZCogdGhlIG90aGVyIGl0ZW1zIG5lZWQgYmUgbWFya2VkIGFzXG4gICAqICAgKm5vdCogc2VsZWN0ZWQgYnkgc2V0dGluZyBgYXJpYS1zZWxlY3RlZGAgdG8gZmFsc2UuXG4gICAqICogVGhlIG91dGVybW9zdCBlbGVtZW50IHdpdGggdGhlIGtleWJvYXJkIGZvY3VzIG5lZWRzIHRvIGhhdmUgYXR0cmlidXRlc1xuICAgKiAgIHNldCBvbiBpdCBzbyB0aGF0IHRoZSBzZWxlY3Rpb24gaXMga25vd2FibGUgYXQgdGhlIGxpc3QgbGV2ZWwgdmlhIHRoZVxuICAgKiAgIGBhcmlhLWFjdGl2ZWRlc2NlbmRhbnRgIGF0dHJpYnV0ZS5cbiAgICogKiBVc2Ugb2YgYGFyaWEtYWN0aXZlZGVzY2VuZGFudGAgaW4gdHVybiByZXF1aXJlcyB0aGF0IGFsbCBpdGVtcyBpbiB0aGVcbiAgICogICBsaXN0IGhhdmUgSUQgYXR0cmlidXRlcyBhc3NpZ25lZCB0byB0aGVtLlxuICAgKlxuICAgKiBUaGlzIG1peGluIHRyaWVzIHRvIGFkZHJlc3MgYWxsIG9mIHRoZSBhYm92ZSByZXF1aXJlbWVudHMuIFRvIHRoYXQgZW5kLFxuICAgKiB0aGlzIG1peGluIHdpbGwgYXNzaWduIGdlbmVyYXRlZCBJRHMgdG8gYW55IGl0ZW0gdGhhdCBkb2Vzbid0IGFscmVhZHkgaGF2ZVxuICAgKiBhbiBJRC5cbiAgICpcbiAgICogQVJJQSByZWxpZXMgb24gZWxlbWVudHMgdG8gcHJvdmlkZSBgcm9sZWAgYXR0cmlidXRlcy4gVGhpcyBtaXhpbiB3aWxsIGFwcGx5XG4gICAqIGEgZGVmYXVsdCByb2xlIG9mIFwibGlzdGJveFwiIG9uIHRoZSBvdXRlciBsaXN0IGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBoYXZlIGFuXG4gICAqIGV4cGxpY2l0IHJvbGUuIFNpbWlsYXJseSwgdGhpcyBtaXhpbiB3aWxsIGFwcGx5IGEgZGVmYXVsdCByb2xlIG9mIFwib3B0aW9uXCJcbiAgICogdG8gYW55IGxpc3QgaXRlbSB0aGF0IGRvZXMgbm90IGFscmVhZHkgaGF2ZSBhIHJvbGUgc3BlY2lmaWVkLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgYSBzZXQgb2YgbWVtYmVycyB0aGF0IG1hbmFnZSB0aGUgc3RhdGUgb2YgdGhlIHNlbGVjdGlvbjpcbiAgICogYGFwcGx5U2VsZWN0aW9uYCwgYGl0ZW1BZGRlZGAsIGFuZCBgc2VsZWN0ZWRJbmRleGAuIFlvdSBjYW4gc3VwcGx5IHRoZXNlXG4gICAqIHlvdXJzZWxmLCBvciBkbyBzbyB2aWEgdGhlIFtJdGVtc1NlbGVjdGlvbl0oSXRlbXNTZWxlY3Rpb24ubWQpIG1peGluLlxuICAgKi9cbiAgY2xhc3MgU2VsZWN0aW9uQXJpYUFjdGl2ZSBleHRlbmRzIGJhc2Uge1xuXG4gICAgYXBwbHlTZWxlY3Rpb24oaXRlbSwgc2VsZWN0ZWQpIHtcbiAgICAgIGlmIChzdXBlci5hcHBseVNlbGVjdGlvbikgeyBzdXBlci5hcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCk7IH1cbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgc2VsZWN0ZWQpO1xuICAgICAgbGV0IGl0ZW1JZCA9IGl0ZW0uaWQ7XG4gICAgICBpZiAoaXRlbUlkKSB7XG4gICAgICAgIGxldCBvdXRlcm1vc3QgPSB0aGlzLmNvbGxlY3RpdmUgP1xuICAgICAgICAgIHRoaXMuY29sbGVjdGl2ZS5vdXRlcm1vc3RFbGVtZW50IDpcbiAgICAgICAgICB0aGlzO1xuICAgICAgICBvdXRlcm1vc3Quc2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnLCBpdGVtSWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbGxlY3RpdmVDaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLmNvbGxlY3RpdmVDaGFuZ2VkKSB7IHN1cGVyLmNvbGxlY3RpdmVDaGFuZ2VkKCk7IH1cblxuICAgICAgLy8gRW5zdXJlIHRoZSBvdXRlcm1vc3QgYXNwZWN0IGhhcyBhbiBBUklBIHJvbGUuXG4gICAgICBsZXQgb3V0ZXJtb3N0RWxlbWVudCA9IHRoaXMuY29sbGVjdGl2ZS5vdXRlcm1vc3RFbGVtZW50O1xuICAgICAgaWYgKCFvdXRlcm1vc3RFbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpKSB7XG4gICAgICAgIC8vIFRyeSB0byBwcm9tb3RlIGFuIEFSSUEgcm9sZSBmcm9tIGFuIGlubmVyIGVsZW1lbnQuIElmIG5vbmUgaXMgZm91bmQsXG4gICAgICAgIC8vIHVzZSBhIGRlZmF1bHQgcm9sZS5cbiAgICAgICAgbGV0IHJvbGUgPSBnZXRDb2xsZWN0aXZlQXJpYVJvbGUodGhpcy5jb2xsZWN0aXZlKSB8fCAnbGlzdGJveCc7XG4gICAgICAgIG91dGVybW9zdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgcm9sZSk7XG4gICAgICB9XG4gICAgICBpZiAoIW91dGVybW9zdEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKSkge1xuICAgICAgICAvLyBUcnkgdG8gcHJvbW90ZSBhbiBBUklBIGFjdGl2ZWRlc2NlbmRhbnQgdmFsdWUgZnJvbSBhbiBpbm5lciBlbGVtZW50LlxuICAgICAgICBsZXQgZGVzY2VuZGFudCA9IGdldENvbGxlY3RpdmVBcmlhQWN0aXZlRGVzY2VuZGFudCh0aGlzLmNvbGxlY3RpdmUpO1xuICAgICAgICBpZiAoZGVzY2VuZGFudCkge1xuICAgICAgICAgIG91dGVybW9zdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnLCBkZXNjZW5kYW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBSZW1vdmUgdGhlIEFSSUEgcm9sZSBhbmQgYWN0aXZlZGVzY2VuZGFudCB2YWx1ZXMgZnJvbSB0aGUgY29sbGVjdGl2ZSdzXG4gICAgICAvLyBpbm5lciBlbGVtZW50cy5cbiAgICAgIHRoaXMuY29sbGVjdGl2ZS5lbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudCAhPT0gb3V0ZXJtb3N0RWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKTtcbiAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsICdub25lJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICAgIGlmICghdGhpcy5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgncm9sZScsICdsaXN0Ym94Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaXRlbUFkZGVkKGl0ZW0pIHtcbiAgICAgIGlmIChzdXBlci5pdGVtQWRkZWQpIHsgc3VwZXIuaXRlbUFkZGVkKGl0ZW0pOyB9XG5cbiAgICAgIGlmICghaXRlbS5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSkge1xuICAgICAgICAvLyBBc3NpZ24gYSBkZWZhdWx0IEFSSUEgcm9sZS5cbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnb3B0aW9uJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIEVuc3VyZSBlYWNoIGl0ZW0gaGFzIGFuIElEIHNvIHdlIGNhbiBzZXQgYXJpYS1hY3RpdmVkZXNjZW5kYW50IG9uIHRoZVxuICAgICAgLy8gb3ZlcmFsbCBsaXN0IHdoZW5ldmVyIHRoZSBzZWxlY3Rpb24gY2hhbmdlcy5cbiAgICAgIC8vXG4gICAgICAvLyBUaGUgSUQgd2lsbCB0YWtlIHRoZSBmb3JtIG9mIGEgYmFzZSBJRCBwbHVzIGEgdW5pcXVlIGludGVnZXIuIFRoZSBiYXNlXG4gICAgICAvLyBJRCB3aWxsIGJlIGluY29ycG9yYXRlIHRoZSBjb21wb25lbnQncyBvd24gSUQuIEUuZy4sIGlmIGEgY29tcG9uZW50IGhhc1xuICAgICAgLy8gSUQgXCJmb29cIiwgdGhlbiBpdHMgaXRlbXMgd2lsbCBoYXZlIElEcyB0aGF0IGxvb2sgbGlrZSBcIl9mb29PcHRpb24xXCIuIElmXG4gICAgICAvLyB0aGUgY29tcG5lbnQgaGFzIG5vIElEIGl0c2VsZiwgaXRzIGl0ZW1zIHdpbGwgZ2V0IElEcyB0aGF0IGxvb2sgbGlrZVxuICAgICAgLy8gXCJfb3B0aW9uMVwiLiBJdGVtIElEcyBhcmUgcHJlZml4ZWQgd2l0aCBhbiB1bmRlcnNjb3JlIHRvIGRpZmZlcmVudGlhdGVcbiAgICAgIC8vIHRoZW0gZnJvbSBtYW51YWxseS1hc3NpZ25lZCBJRHMsIGFuZCB0byBtaW5pbWl6ZSB0aGUgcG90ZW50aWFsIGZvciBJRFxuICAgICAgLy8gY29uZmxpY3RzLlxuICAgICAgaWYgKCFpdGVtLmlkKSB7XG4gICAgICAgIGxldCBiYXNlSWQgPSB0aGlzLmlkID9cbiAgICAgICAgICAgIFwiX1wiICsgdGhpcy5pZCArIFwiT3B0aW9uXCIgOlxuICAgICAgICAgICAgXCJfb3B0aW9uXCI7XG4gICAgICAgIGl0ZW0uaWQgPSBiYXNlSWQgKyBpZENvdW50Kys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICAgIHJldHVybiBzdXBlci5zZWxlY3RlZEl0ZW07XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEl0ZW0oaXRlbSkge1xuICAgICAgaWYgKCdzZWxlY3RlZEl0ZW0nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSXRlbSA9IGl0ZW07IH1cbiAgICAgIC8vIENhdGNoIHRoZSBjYXNlIHdoZXJlIHRoZSBzZWxlY3Rpb24gaXMgcmVtb3ZlZC5cbiAgICAgIGlmIChpdGVtID09IG51bGwpIHtcbiAgICAgICAgbGV0IG91dGVybW9zdCA9IHRoaXMuY29sbGVjdGl2ZSA/XG4gICAgICAgICAgdGhpcy5jb2xsZWN0aXZlLm91dGVybW9zdEVsZW1lbnQgOlxuICAgICAgICAgIHRoaXM7XG4gICAgICAgIG91dGVybW9zdC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIFNlbGVjdGlvbkFyaWFBY3RpdmU7XG59O1xuXG5cbi8vIFJldHVybiB0aGUgZmlyc3QgQVJJQSBhY3RpdmVkZXNjZW5kYW50IGRlZmluZWQgYnkgdGhlIGNvbGxlY3RpdmUuXG5mdW5jdGlvbiBnZXRDb2xsZWN0aXZlQXJpYUFjdGl2ZURlc2NlbmRhbnQoY29sbGVjdGl2ZSkge1xuICBsZXQgZGVzY2VuZGFudHMgPSBjb2xsZWN0aXZlLmVsZW1lbnRzLm1hcChlbGVtZW50ID0+IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKSk7XG4gIGxldCBub25OdWxsRGVzY2VuZGFudHMgPSBkZXNjZW5kYW50cy5maWx0ZXIoZGVzY2VuZGFudCA9PiBkZXNjZW5kYW50ICE9PSBudWxsKTtcbiAgcmV0dXJuIG5vbk51bGxEZXNjZW5kYW50c1swXTtcbn1cblxuXG4vLyBSZXR1cm4gdGhlIGZpcnN0IEFSSUEgbGFiZWwgZGVmaW5lZCBieSB0aGUgY29sbGVjdGl2ZS5cbmZ1bmN0aW9uIGdldENvbGxlY3RpdmVBcmlhUm9sZShjb2xsZWN0aXZlKSB7XG4gIGxldCByb2xlcyA9IGNvbGxlY3RpdmUuZWxlbWVudHMubWFwKGVsZW1lbnQgPT4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSk7XG4gIGxldCBub25OdWxsUm9sZXMgPSByb2xlcy5maWx0ZXIocm9sZSA9PiByb2xlICE9PSBudWxsKTtcbiAgcmV0dXJuIG5vbk51bGxSb2xlc1swXTtcbn1cbiIsIi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggU2hhZG93RWxlbWVudFJlZmVyZW5jZXMuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiB0byBjcmVhdGUgcmVmZXJlbmNlcyB0byBlbGVtZW50cyBpbiBhIGNvbXBvbmVudCdzIFNoYWRvdyBET00gc3VidHJlZS5cbiAgICpcbiAgICogVGhpcyBhZGRzIGEgbWVtYmVyIG9uIHRoZSBjb21wb25lbnQgY2FsbGVkIGB0aGlzLiRgIHRoYXQgY2FuIGJlIHVzZWQgdG9cbiAgICogcmVmZXJlbmNlIHNoYWRvdyBlbGVtZW50cyB3aXRoIElEcy4gRS5nLiwgaWYgY29tcG9uZW50J3Mgc2hhZG93IGNvbnRhaW5zIGFuXG4gICAqIGVsZW1lbnQgYDxidXR0b24gaWQ9XCJmb29cIj5gLCB0aGVuIHRoaXMgbWl4aW4gd2lsbCBjcmVhdGUgYSBtZW1iZXJcbiAgICogYHRoaXMuJC5mb29gIHRoYXQgcG9pbnRzIHRvIHRoYXQgYnV0dG9uLlxuICAgKlxuICAgKiBTdWNoIHJlZmVyZW5jZXMgc2ltcGxpZnkgYSBjb21wb25lbnQncyBhY2Nlc3MgdG8gaXRzIG93biBlbGVtZW50cy4gSW5cbiAgICogZXhjaGFuZ2UsIHRoaXMgbWl4aW4gdHJhZGVzIG9mZiBhIG9uZS10aW1lIGNvc3Qgb2YgcXVlcnlpbmcgYWxsIGVsZW1lbnRzIGluXG4gICAqIHRoZSBzaGFkb3cgdHJlZSBpbnN0ZWFkIG9mIHBheWluZyBhbiBvbmdvaW5nIGNvc3QgdG8gcXVlcnkgZm9yIGFuIGVsZW1lbnRcbiAgICogZWFjaCB0aW1lIHRoZSBjb21wb25lbnQgd2FudHMgdG8gaW5zcGVjdCBvciBtYW5pcHVsYXRlIGl0LlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgdGhlIGNvbXBvbmVudCB0byBkZWZpbmUgYSBTaGFkb3cgRE9NIHN1YnRyZWUuIFlvdSBjYW5cbiAgICogY3JlYXRlIHRoYXQgdHJlZSB5b3Vyc2VsZiwgb3IgbWFrZSB1c2Ugb2YgdGhlXG4gICAqIFtTaGFkb3dUZW1wbGF0ZV0oU2hhZG93VGVtcGxhdGUubWQpIG1peGluLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGlzIGluc3BpcmVkIGJ5IFBvbHltZXIncyBbYXV0b21hdGljXG4gICAqIG5vZGUgZmluZGluZ10oaHR0cHM6Ly93d3cucG9seW1lci1wcm9qZWN0Lm9yZy8xLjAvZG9jcy9kZXZndWlkZS9sb2NhbC1kb20uaHRtbCNub2RlLWZpbmRpbmcpXG4gICAqIGZlYXR1cmUuXG4gICAqL1xuICBjbGFzcyBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcyBleHRlbmRzIGJhc2Uge1xuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgICAgaWYgKHRoaXMuc2hhZG93Um9vdCkge1xuICAgICAgICAvLyBMb29rIGZvciBlbGVtZW50cyBpbiB0aGUgc2hhZG93IHN1YnRyZWUgdGhhdCBoYXZlIGlkIGF0dHJpYnV0ZXMuXG4gICAgICAgIC8vIEFuIGFsdGVybmF0aXZlbHkgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtaXhpbiB3b3VsZCBiZSB0byBqdXN0IGRlZmluZVxuICAgICAgICAvLyBhIHRoaXMuJCBnZXR0ZXIgdGhhdCBsYXppbHkgZG9lcyB0aGlzIHNlYXJjaCB0aGUgZmlyc3QgdGltZSBzb21lb25lXG4gICAgICAgIC8vIHRyaWVzIHRvIGFjY2VzcyB0aGlzLiQuIFRoYXQgbWlnaHQgaW50cm9kdWNlIHNvbWUgY29tcGxleGl0eSDigJMgaWYgdGhlXG4gICAgICAgIC8vIHRoZSB0cmVlIGNoYW5nZWQgYWZ0ZXIgaXQgd2FzIGZpcnN0IHBvcHVsYXRlZCwgdGhlIHJlc3VsdCBvZlxuICAgICAgICAvLyBzZWFyY2hpbmcgZm9yIGEgbm9kZSBtaWdodCBiZSBzb21ld2hhdCB1bnByZWRpY3RhYmxlLlxuICAgICAgICB0aGlzLiQgPSB7fTtcbiAgICAgICAgbGV0IG5vZGVzV2l0aElkcyA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKCdbaWRdJyk7XG4gICAgICAgIFtdLmZvckVhY2guY2FsbChub2Rlc1dpdGhJZHMsIG5vZGUgPT4ge1xuICAgICAgICAgIGxldCBpZCA9IG5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICAgIHRoaXMuJFtpZF0gPSBub2RlO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29sbGVjdGlvbiBvZiByZWZlcmVuY2VzIHRvIHRoZSBlbGVtZW50cyB3aXRoIElEcyBpbiBhIGNvbXBvbmVudCdzXG4gICAgICogU2hhZG93IERPTSBzdWJ0cmVlLlxuICAgICAqXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKiBAbWVtYmVyICRcbiAgICAgKi9cbiAgfVxuXG4gIHJldHVybiBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcztcbn07XG4iLCIvLyBGZWF0dXJlIGRldGVjdGlvbiBmb3Igb2xkIFNoYWRvdyBET00gdjAuXG5jb25zdCBVU0lOR19TSEFET1dfRE9NX1YwID0gKHR5cGVvZiBIVE1MRWxlbWVudC5wcm90b3R5cGUuY3JlYXRlU2hhZG93Um9vdCAhPT0gJ3VuZGVmaW5lZCcpO1xuXG5cbi8qIEV4cG9ydGVkIGZ1bmN0aW9uIGV4dGVuZHMgYSBiYXNlIGNsYXNzIHdpdGggU2hhZG93VGVtcGxhdGUuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBNaXhpbiBmb3Igc3RhbXBpbmcgYSB0ZW1wbGF0ZSBpbnRvIGEgU2hhZG93IERPTSBzdWJ0cmVlIHVwb24gY29tcG9uZW50XG4gICAqIGluc3RhbnRpYXRpb24uXG4gICAqXG4gICAqIFRvIHVzZSB0aGlzIG1peGluLCBkZWZpbmUgYSBgdGVtcGxhdGVgIHByb3BlcnR5IGFzIGEgc3RyaW5nIG9yIEhUTUxcbiAgICogYDx0ZW1wbGF0ZT5gIGVsZW1lbnQ6XG4gICAqXG4gICAqICAgICBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBTaGFkb3dUZW1wbGF0ZShIVE1MRWxlbWVudCkge1xuICAgKiAgICAgICBnZXQgdGVtcGxhdGUoKSB7XG4gICAqICAgICAgICAgcmV0dXJuIGBIZWxsbywgPGVtPndvcmxkPC9lbT4uYDtcbiAgICogICAgICAgfVxuICAgKiAgICAgfVxuICAgKlxuICAgKiBXaGVuIHlvdXIgY29tcG9uZW50IGNsYXNzIGlzIGluc3RhbnRpYXRlZCwgYSBzaGFkb3cgcm9vdCB3aWxsIGJlIGNyZWF0ZWQgb25cbiAgICogdGhlIGluc3RhbmNlLCBhbmQgdGhlIGNvbnRlbnRzIG9mIHRoZSB0ZW1wbGF0ZSB3aWxsIGJlIGNsb25lZCBpbnRvIHRoZVxuICAgKiBzaGFkb3cgcm9vdC4gSWYgeW91ciBjb21wb25lbnQgZG9lcyBub3QgZGVmaW5lIGEgYHRlbXBsYXRlYCBwcm9wZXJ0eSwgdGhpc1xuICAgKiBtaXhpbiBoYXMgbm8gZWZmZWN0LlxuICAgKlxuICAgKiBGb3IgdGhlIHRpbWUgYmVpbmcsIHRoaXMgZXh0ZW5zaW9uIHJldGFpbnMgc3VwcG9ydCBmb3IgU2hhZG93IERPTSB2MC4gVGhhdFxuICAgKiB3aWxsIGV2ZW50dWFsbHkgYmUgZGVwcmVjYXRlZCBhcyBicm93c2VycyAoYW5kIHRoZSBTaGFkb3cgRE9NIHBvbHlmaWxsKVxuICAgKiBpbXBsZW1lbnQgU2hhZG93IERPTSB2MS5cbiAgICovXG4gIGNsYXNzIFNoYWRvd1RlbXBsYXRlIGV4dGVuZHMgYmFzZSB7XG5cbiAgICAvKlxuICAgICAqIElmIHRoZSBjb21wb25lbnQgZGVmaW5lcyBhIHRlbXBsYXRlLCBhIHNoYWRvdyByb290IHdpbGwgYmUgY3JlYXRlZCBvbiB0aGVcbiAgICAgKiBjb21wb25lbnQgaW5zdGFuY2UsIGFuZCB0aGUgdGVtcGxhdGUgc3RhbXBlZCBpbnRvIGl0LlxuICAgICAqL1xuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICAgIGxldCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGU7XG4gICAgICAvLyBUT0RPOiBTYXZlIHRoZSBwcm9jZXNzZWQgdGVtcGxhdGUgd2l0aCB0aGUgY29tcG9uZW50J3MgY2xhc3MgcHJvdG90eXBlXG4gICAgICAvLyBzbyBpdCBkb2Vzbid0IG5lZWQgdG8gYmUgcHJvY2Vzc2VkIHdpdGggZXZlcnkgaW5zdGFudGlhdGlvbi5cbiAgICAgIGlmICh0ZW1wbGF0ZSkge1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGVtcGxhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgLy8gVXBncmFkZSBwbGFpbiBzdHJpbmcgdG8gcmVhbCB0ZW1wbGF0ZS5cbiAgICAgICAgICB0ZW1wbGF0ZSA9IGNyZWF0ZVRlbXBsYXRlV2l0aElubmVySFRNTCh0ZW1wbGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVVNJTkdfU0hBRE9XX0RPTV9WMCkge1xuICAgICAgICAgIHBvbHlmaWxsU2xvdFdpdGhDb250ZW50KHRlbXBsYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3aW5kb3cuU2hhZG93RE9NUG9seWZpbGwpIHtcbiAgICAgICAgICBzaGltVGVtcGxhdGVTdHlsZXModGVtcGxhdGUsIHRoaXMubG9jYWxOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoaXMubG9nKFwiY2xvbmluZyB0ZW1wbGF0ZSBpbnRvIHNoYWRvdyByb290XCIpO1xuICAgICAgICBsZXQgcm9vdCA9IFVTSU5HX1NIQURPV19ET01fVjAgP1xuICAgICAgICAgIHRoaXMuY3JlYXRlU2hhZG93Um9vdCgpIDogICAgICAgICAgICAgLy8gU2hhZG93IERPTSB2MFxuICAgICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pOyAgLy8gU2hhZG93IERPTSB2MVxuICAgICAgICBsZXQgY2xvbmUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xuICAgICAgICByb290LmFwcGVuZENoaWxkKGNsb25lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBTaGFkb3dUZW1wbGF0ZTtcbn07XG5cblxuLy8gQ29udmVydCBhIHBsYWluIHN0cmluZyBvZiBIVE1MIGludG8gYSByZWFsIHRlbXBsYXRlIGVsZW1lbnQuXG5mdW5jdGlvbiBjcmVhdGVUZW1wbGF0ZVdpdGhJbm5lckhUTUwoaW5uZXJIVE1MKSB7XG4gIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gIC8vIFJFVklFVzogSXMgdGhlcmUgYW4gZWFzaWVyIHdheSB0byBkbyB0aGlzP1xuICAvLyBXZSdkIGxpa2UgdG8ganVzdCBzZXQgaW5uZXJIVE1MIG9uIHRoZSB0ZW1wbGF0ZSBjb250ZW50LCBidXQgc2luY2UgaXQnc1xuICAvLyBhIERvY3VtZW50RnJhZ21lbnQsIHRoYXQgZG9lc24ndCB3b3JrLlxuICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gIHdoaWxlIChkaXYuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgdGVtcGxhdGUuY29udGVudC5hcHBlbmRDaGlsZChkaXYuY2hpbGROb2Rlc1swXSk7XG4gIH1cbiAgcmV0dXJuIHRlbXBsYXRlO1xufVxuXG4vLyBSZXBsYWNlIG9jY3VyZW5jZXMgb2YgdjEgc2xvdCBlbGVtZW50cyB3aXRoIHYwIGNvbnRlbnQgZWxlbWVudHMuXG4vLyBUaGlzIGRvZXMgbm90IHlldCBtYXAgbmFtZWQgc2xvdHMgdG8gY29udGVudCBzZWxlY3QgY2xhdXNlcy5cbmZ1bmN0aW9uIHBvbHlmaWxsU2xvdFdpdGhDb250ZW50KHRlbXBsYXRlKSB7XG4gIFtdLmZvckVhY2guY2FsbCh0ZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Nsb3QnKSwgc2xvdEVsZW1lbnQgPT4ge1xuICAgIGxldCBjb250ZW50RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NvbnRlbnQnKTtcbiAgICBzbG90RWxlbWVudC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChjb250ZW50RWxlbWVudCwgc2xvdEVsZW1lbnQpO1xuICB9KTtcbn1cblxuLy8gSW52b2tlIGJhc2ljIHN0eWxlIHNoaW1taW5nIHdpdGggU2hhZG93Q1NTLlxuZnVuY3Rpb24gc2hpbVRlbXBsYXRlU3R5bGVzKHRlbXBsYXRlLCB0YWcpIHtcbiAgd2luZG93LldlYkNvbXBvbmVudHMuU2hhZG93Q1NTLnNoaW1TdHlsaW5nKHRlbXBsYXRlLmNvbnRlbnQsIHRhZyk7XG59XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcblxuY29uc3QgcGxheWluZ1N5bWJvbCA9IGNyZWF0ZVN5bWJvbCgncGxheWluZycpO1xuY29uc3Qgc2VsZWN0aW9uVGltZXJEdXJhdGlvblN5bWJvbCA9IGNyZWF0ZVN5bWJvbCgnc2VsZWN0aW9uVGltZXJEdXJhdGlvbicpO1xuY29uc3QgdGltZXJUaW1lb3V0U3ltYm9sID0gY3JlYXRlU3ltYm9sKCd0aW1lclRpbWVvdXQnKTtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFRpbWVyU2VsZWN0aW9uLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogTWl4aW4gd2hpY2ggcHJvdmlkZXMgZm9yIGF1dG9tYXRpYyB0aW1lZCBjaGFuZ2VzIGluIHNlbGVjdGlvbi5cbiAgICpcbiAgICogVGhpcyBtaXhpbiBpcyB1c2VmdWwgZm9yIGNyZWF0aW5nIHNsaWRlc2hvdy1saWtlIGVsZW1lbnRzLlxuICAgKlxuICAgKiBUaGlzIG1peGluIGV4cGVjdHMgdGhlIGNvbXBvbmVudCB0byBkZWZpbmUgYW4gYGl0ZW1zYCBwcm9wZXJ0eSwgYXMgd2VsbCBhc1xuICAgKiBgc2VsZWN0Rmlyc3RgIGFuZCBgc2VsZWN0TmV4dGAgbWV0aG9kcy4gWW91IGNhbiBpbXBsZW1lbnQgdGhvc2UgeW91cnNlbGYsXG4gICAqIG9yIHVzZSB0aGUgW0NvbnRlbnRBc0l0ZW1zXShDb250ZW50QXNJdGVtcy5tZCkgYW5kXG4gICAqIFtJdGVtc1NlbGVjdGlvbl0oSXRlbXNTZWxlY3Rpb24ubWQpIG1peGlucy5cbiAgICovXG4gIGNsYXNzIFRpbWVyU2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb250ZW50Q2hhbmdlZCgpIHtcbiAgICAgIGlmIChzdXBlci5jb250ZW50Q2hhbmdlZCkgeyBzdXBlci5jb250ZW50Q2hhbmdlZCgpOyB9XG4gICAgICByZXN0YXJ0VGltZXIodGhpcyk7XG4gICAgfVxuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuXG4gICAgICAvLyBTZXQgZGVmYXVsdHMuXG4gICAgICBpZiAodGhpcy5wbGF5aW5nID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5wbGF5aW5nID0gdGhpcy5kZWZhdWx0cy5wbGF5aW5nO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uVGltZXJEdXJhdGlvbiA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uVGltZXJEdXJhdGlvbiA9IHRoaXMuZGVmYXVsdHMuc2VsZWN0aW9uVGltZXJEdXJhdGlvbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgZGVmYXVsdHMoKSB7XG4gICAgICBsZXQgZGVmYXVsdHMgPSBzdXBlci5kZWZhdWx0cyB8fCB7fTtcbiAgICAgIGRlZmF1bHRzLnBsYXlpbmcgPSBmYWxzZTtcbiAgICAgIGRlZmF1bHRzLnNlbGVjdGlvblRpbWVyRHVyYXRpb24gPSAxMDAwO1xuICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJlZ2luIGF1dG9tYXRpYyBwcm9ncmVzc2lvbiBvZiB0aGUgc2VsZWN0aW9uLlxuICAgICAqL1xuICAgIHBsYXkoKSB7XG4gICAgICBpZiAoc3VwZXIucGxheSkgeyBzdXBlci5wbGF5KCk7IH1cbiAgICAgIHN0YXJ0VGltZXIodGhpcyk7XG4gICAgICB0aGlzW3BsYXlpbmdTeW1ib2xdID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXVzZSBhdXRvbWF0aWMgcHJvZ3Jlc3Npb24gb2YgdGhlIHNlbGVjdGlvbi5cbiAgICAgKi9cbiAgICBwYXVzZSgpIHtcbiAgICAgIGlmIChzdXBlci5wYXVzZSkgeyBzdXBlci5wYXVzZSgpOyB9XG4gICAgICBjbGVhclRpbWVyKHRoaXMpO1xuICAgICAgdGhpc1twbGF5aW5nU3ltYm9sXSA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIHNlbGVjdGlvbiBpcyBiZWluZyBhdXRvbWF0aWNhbGx5IGFkdmFuY2VkLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBnZXQgcGxheWluZygpIHtcbiAgICAgIHJldHVybiB0aGlzW3BsYXlpbmdTeW1ib2xdO1xuICAgIH1cbiAgICBzZXQgcGxheWluZyhwbGF5aW5nKSB7XG4gICAgICBpZiAoJ3BsYXlpbmcnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnBsYXlpbmcgPSBwbGF5aW5nOyB9XG4gICAgICBwbGF5aW5nID0gU3RyaW5nKHBsYXlpbmcpID09PSAndHJ1ZSc7IC8vIENhc3QgdG8gYm9vbGVhblxuICAgICAgaWYgKHBsYXlpbmcgIT09IHRoaXNbcGxheWluZ1N5bWJvbF0pIHtcbiAgICAgICAgaWYgKHBsYXlpbmcpIHtcbiAgICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFdoZW4gdGhlIHNlbGVjdGVkIGl0ZW0gY2hhbmdlcyAoYmVjYXVzZSBvZiBzb21ldGhpbmcgdGhpcyBtaXhpbiBkaWQsIG9yXG4gICAgICogd2FzIGNoYW5nZWQgYnkgYW4gb3V0c2lkZSBhZ2VudCBsaWtlIHRoZSB1c2VyKSwgd2Ugd2FpdCBiZWZvcmUgYWR2YW5jaW5nXG4gICAgICogdG8gdGhlIG5leHQgaXRlbS4gQnkgdHJpZ2dlcmluZyB0aGUgbmV4dCBpdGVtIHRoaXMgd2F5LCB3ZSBpbXBsaWNpdGx5IGdldFxuICAgICAqIGEgZGVzaXJhYmxlIGJlaGF2aW9yOiBpZiB0aGUgdXNlciBjaGFuZ2VzIHRoZSBzZWxlY3Rpb24gKGUuZy4sIGluIGFcbiAgICAgKiBjYXJvdXNlbCksIHdlIGxldCB0aGVtIHNlZSB0aGF0IHNlbGVjdGlvbiBzdGF0ZSBmb3IgYSB3aGlsZSBiZWZvcmVcbiAgICAgKiBhZHZhbmNpbmcgdGhlIHNlbGVjdGlvbiBvdXJzZWx2ZXMuXG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICAgIHJldHVybiBzdXBlci5zZWxlY3RlZEl0ZW07XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEl0ZW0oaXRlbSkge1xuICAgICAgaWYgKCdzZWxlY3RlZEl0ZW0nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGVkSXRlbSA9IGl0ZW07IH1cbiAgICAgIHJlc3RhcnRUaW1lcih0aGlzKTtcbiAgICB9XG5cbiAgICAvLyBJbiBjYXNlIHRoaXMgbWl4aW4gaXMgYmVpbmcgdXNlZCB3aXRoIFRhcmdldFNlbGVjdGlvbi5cbiAgICBzZWxlY3RlZEl0ZW1DaGFuZ2VkKCkge1xuICAgICAgaWYgKHN1cGVyLnNlbGVjdGVkSXRlbUNoYW5nZWQpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtQ2hhbmdlZCgpOyB9XG4gICAgICByZXN0YXJ0VGltZXIodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIHRoYXQgd2lsbCBlbGFwc2UgYWZ0ZXIgdGhlIHNlbGVjdGlvbiBjaGFuZ2VzXG4gICAgICogYmVmb3JlIHRoZSBzZWxlY3Rpb24gd2lsbCBiZSBhZHZhbmNlZCB0byB0aGUgbmV4dCBpdGVtIGluIHRoZSBsaXN0LlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn0gLSBUaW1lIGluIG1pbGxpc2Vjb25kc1xuICAgICAqIEBkZWZhdWx0IDEwMDAgKDEgc2Vjb25kKVxuICAgICAqL1xuICAgIGdldCBzZWxlY3Rpb25UaW1lckR1cmF0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXNbc2VsZWN0aW9uVGltZXJEdXJhdGlvblN5bWJvbF07XG4gICAgfVxuICAgIHNldCBzZWxlY3Rpb25UaW1lckR1cmF0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoJ3NlbGVjdGlvblRpbWVyRHVyYXRpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNlbGVjdGlvblRpbWVyRHVyYXRpb24gPSB2YWx1ZTsgfVxuICAgICAgdGhpc1tzZWxlY3Rpb25UaW1lckR1cmF0aW9uU3ltYm9sXSA9IHBhcnNlSW50KHZhbHVlKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBUaW1lclNlbGVjdGlvbjtcbn07XG5cblxuZnVuY3Rpb24gY2xlYXJUaW1lcihlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50W3RpbWVyVGltZW91dFN5bWJvbF0pIHtcbiAgICBjbGVhclRpbWVvdXQoZWxlbWVudFt0aW1lclRpbWVvdXRTeW1ib2xdKTtcbiAgICBlbGVtZW50W3RpbWVyVGltZW91dFN5bWJvbF0gPSBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc3RhcnRUaW1lcihlbGVtZW50KSB7XG4gIGNsZWFyVGltZXIoZWxlbWVudCk7XG4gIGlmIChlbGVtZW50LnBsYXlpbmcgJiYgZWxlbWVudC5pdGVtcyAmJiBlbGVtZW50Lml0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICBzdGFydFRpbWVyKGVsZW1lbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0YXJ0VGltZXIoZWxlbWVudCkge1xuICAvLyBJZiBwbGF5KCkgaXMgY2FsbGVkIG1vcmUgdGhhbiBvbmNlLCBjYW5jZWwgYW55IGV4aXN0aW5nIHRpbWVyLlxuICBjbGVhclRpbWVyKGVsZW1lbnQpO1xuICBlbGVtZW50W3RpbWVyVGltZW91dFN5bWJvbF0gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBzZWxlY3ROZXh0V2l0aFdyYXAoZWxlbWVudCk7XG4gIH0sIGVsZW1lbnQuc2VsZWN0aW9uVGltZXJEdXJhdGlvbik7XG59XG5cbi8vIFNlbGVjdCB0aGUgbmV4dCBpdGVtLCB3cmFwcGluZyB0byBmaXJzdCBpdGVtIGlmIG5lY2Vzc2FyeS5cbmZ1bmN0aW9uIHNlbGVjdE5leHRXaXRoV3JhcChlbGVtZW50KSB7XG4gIGxldCBpdGVtcyA9IGVsZW1lbnQuaXRlbXM7XG4gIGlmIChpdGVtcyAmJiBpdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgaWYgKGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9PSBudWxsIHx8IGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9PT0gaXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgZWxlbWVudC5zZWxlY3RGaXJzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LnNlbGVjdE5leHQoKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIHN5bWJvbCB0aGF0IGNhbiBiZSB1c2VkIGZvciBhc3NvY2lhdGluZyBwcml2YXRlXG4gKiBkYXRhIHdpdGggYW4gZWxlbWVudC5cbiAqXG4gKiBNaXhpbnMgYW5kIGNvbXBvbmVudCBjbGFzc2VzIG9mdGVuIHdhbnQgdG8gYXNzb2NpYXRlIHByaXZhdGUgZGF0YSB3aXRoIGFuXG4gKiBlbGVtZW50IGluc3RhbmNlLCBidXQgSmF2YVNjcmlwdCBkb2VzIG5vdCBoYXZlIGRpcmVjdCBzdXBwb3J0IGZvciB0cnVlXG4gKiBwcml2YXRlIHByb3BlcnRpZXMuIE9uZSBhcHByb2FjaCBpcyB0byB1c2UgdGhlXG4gKiBbU3ltYm9sXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9TeW1ib2wpXG4gKiBkYXRhIHR5cGUgdG8gc2V0IGFuZCByZXRyaWV2ZSBkYXRhIG9uIGFuIGVsZW1lbnQuXG4gKlxuICogVW5mb3J0dW5hdGVseSwgdGhlIFN5bWJvbCB0eXBlIGlzIG5vdCBhdmFpbGFibGUgaW4gSW50ZXJuZXQgRXhwbG9yZXIgMTEuIFRoZVxuICogYGNyZWF0ZVN5bWJvbGAgaGVscGVyIGZ1bmN0aW9uIGV4aXN0cyBhcyBhIHdvcmthcm91bmQgZm9yIElFIDExLiBSYXRoZXIgdGhhblxuICogcmV0dXJuaW5nIGEgdHJ1ZSBTeW1ib2wsIGl0IHNpbXBseSByZXR1cm5zIGFuIHVuZGVyc2NvcmUtcHJlZml4ZWQgc3RyaW5nLlxuICpcbiAqIFVzYWdlOlxuICpcbiAqICAgICBjb25zdCBmb29TeW1ib2wgPSBjcmVhdGVTeW1ib2woJ2ZvbycpO1xuICpcbiAqICAgICBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gKiAgICAgICBnZXQgZm9vKCkge1xuICogICAgICAgICByZXR1cm4gdGhpc1tmb29TeW1ib2xdO1xuICogICAgICAgfVxuICogICAgICAgc2V0IGZvbyh2YWx1ZSkge1xuICogICAgICAgICB0aGlzW2Zvb1N5bWJvbF0gPSB2YWx1ZTtcbiAqICAgICAgIH1cbiAqICAgICB9XG4gKlxuICogSW4gSUUgMTEsIHRoaXMgc2FtcGxlIHdpbGwgXCJoaWRlXCIgZGF0YSBiZWhpbmQgYW4gaW5zdGFuY2UgcHJvcGVydHkgdGhpcy5fZm9vLlxuICogVGhlIHVzZSBvZiB0aGUgdW5kZXJzY29yZSBpcyBtZWFudCB0byByZWR1Y2UgKG5vdCBlbGltaW5hdGUpIHRoZSBwb3RlbnRpYWxcbiAqIGZvciBuYW1lIGNvbmZsaWN0cywgYW5kIGRpc2NvdXJhZ2UgKG5vdCBwcmV2ZW50KSBleHRlcm5hbCBhY2Nlc3MgdG8gdGhpc1xuICogZGF0YS4gSW4gbW9kZXJuIGJyb3dzZXJzLCB0aGUgYWJvdmUgY29kZSB3aWxsIGVsaW1pbmF0ZSB0aGUgcG90ZW50aWFsIG9mXG4gKiBuYW1pbmcgY29uZmxpY3RzLCBhbmQgYmV0dGVyIGhpZGUgdGhlIGRhdGEgYmVoaW5kIGEgcmVhbCBTeW1ib2wuXG4gKlxuICogQGZ1bmN0aW9uIGNyZWF0ZVN5bWJvbFxuICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXB0aW9uIC0gQSBzdHJpbmcgdG8gaWRlbnRpZnkgdGhlIHN5bWJvbCB3aGVuIGRlYnVnZ2luZ1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTeW1ib2woZGVzY3JpcHRpb24pIHtcbiAgcmV0dXJuIHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgP1xuICAgIFN5bWJvbChkZXNjcmlwdGlvbikgOlxuICAgIGBfJHtkZXNjcmlwdGlvbn1gO1xufVxuIiwiLypcbiAqIE1pY3JvdGFzayBoZWxwZXIgZm9yIElFIDExLlxuICpcbiAqIEV4ZWN1dGluZyBhIGZ1bmN0aW9uIGFzIGEgbWljcm90YXNrIGlzIHRyaXZpYWwgaW4gYnJvd3NlcnMgdGhhdCBzdXBwb3J0XG4gKiBwcm9taXNlcywgd2hvc2UgdGhlbigpIGNsYXVzZXMgdXNlIG1pY3JvdGFzayB0aW1pbmcuIElFIDExIGRvZXNuJ3Qgc3VwcG9ydFxuICogcHJvbWlzZXMsIGJ1dCBkb2VzIHN1cHBvcnQgTXV0YXRpb25PYnNlcnZlcnMsIHdoaWNoIGFyZSBhbHNvIGV4ZWN1dGVkIGFzXG4gKiBtaWNyb3Rhc2tzLiBTbyB0aGlzIGhlbHBlciB1c2VzIGFuIE11dGF0aW9uT2JzZXJ2ZXIgdG8gYWNoaWV2ZSBtaWNyb3Rhc2tcbiAqIHRpbWluZy5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9qYWtlYXJjaGliYWxkLmNvbS8yMDE1L3Rhc2tzLW1pY3JvdGFza3MtcXVldWVzLWFuZC1zY2hlZHVsZXMvXG4gKlxuICogSW5zcGlyZWQgYnkgUG9seW1lcidzIGFzeW5jKCkgZnVuY3Rpb24uXG4gKi9cblxuXG4vLyBUaGUgcXVldWUgb2YgcGVuZGluZyBjYWxsYmFja3MgdG8gYmUgZXhlY3V0ZWQgYXMgbWljcm90YXNrcy5cbmxldCBjYWxsYmFja3MgPSBbXTtcblxuLy8gQ3JlYXRlIGFuIGVsZW1lbnQgdGhhdCB3ZSB3aWxsIG1vZGlmeSB0byBmb3JjZSBvYnNlcnZhYmxlIG11dGF0aW9ucy5cbmxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuXG4vLyBBIG1vbm90b25pY2FsbHktaW5jcmVhc2luZyB2YWx1ZS5cbmxldCBjb3VudGVyID0gMDtcblxuXG4vKipcbiAqIEFkZCBhIGNhbGxiYWNrIHRvIHRoZSBtaWNyb3Rhc2sgcXVldWUuXG4gKlxuICogVGhpcyB1c2VzIGEgTXV0YXRpb25PYnNlcnZlciBzbyB0aGF0IGl0IHdvcmtzIG9uIElFIDExLlxuICpcbiAqIE5PVEU6IElFIDExIG1heSBhY3R1YWxseSB1c2UgdGltZW91dCB0aW1pbmcgd2l0aCBNdXRhdGlvbk9ic2VydmVycy4gVGhpc1xuICogbmVlZHMgbW9yZSBpbnZlc3RpZ2F0aW9uLlxuICpcbiAqIEBmdW5jdGlvbiBtaWNyb3Rhc2tcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pY3JvdGFzayhjYWxsYmFjaykge1xuICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gIC8vIEZvcmNlIGEgbXV0YXRpb24uXG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSArK2NvdW50ZXI7XG59XG5cblxuLy8gRXhlY3V0ZSBhbnkgcGVuZGluZyBjYWxsYmFja3MuXG5mdW5jdGlvbiBleGVjdXRlQ2FsbGJhY2tzKCkge1xuICB3aGlsZSAoY2FsbGJhY2tzLmxlbmd0aCA+IDApIHtcbiAgICBsZXQgY2FsbGJhY2sgPSBjYWxsYmFja3Muc2hpZnQoKTtcbiAgICBjYWxsYmFjaygpO1xuICB9XG59XG5cblxuLy8gQ3JlYXRlIHRoZSBvYnNlcnZlci5cbmxldCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGV4ZWN1dGVDYWxsYmFja3MpO1xub2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCB7XG4gIGNoYXJhY3RlckRhdGE6IHRydWVcbn0pO1xuIiwiLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIHN0YW5kYXJkIGNsYXNzTGlzdC50b2dnbGUoKSBiZWhhdmlvciBvbiBvbGQgYnJvd3NlcnMsXG4gKiBuYW1lbHkgSUUgMTEuXG4gKlxuICogVGhlIHN0YW5kYXJkXG4gKiBbY2xhc3NsaXN0XShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9jbGFzc0xpc3QpXG4gKiBvYmplY3QgaGFzIGEgYHRvZ2dsZSgpYCBmdW5jdGlvbiB0aGF0IHN1cHBvcnRzIGEgc2Vjb25kIEJvb2xlYW4gcGFyYW1ldGVyXG4gKiB0aGF0IGNhbiBiZSB1c2VkIHRvIHN1Y2NpbmN0bHkgdHVybiBhIGNsYXNzIG9uIG9yIG9mZi4gVGhpcyBmZWF0dXJlIGlzIG9mdGVuXG4gKiB1c2VmdWwgaW4gZGVzaWduaW5nIGN1c3RvbSBlbGVtZW50cywgd2hpY2ggbWF5IHdhbnQgdG8gZXh0ZXJuYWxseSByZWZsZWN0XG4gKiBjb21wb25lbnQgc3RhdGUgaW4gYSBDU1MgY2xhc3MgdGhhdCBjYW4gYmUgdXNlZCBmb3Igc3R5bGluZyBwdXJwb3Nlcy5cbiAqXG4gKiBVbmZvcnR1bmF0ZWx5LCBJRSAxMSBkb2VzIG5vdCBzdXBwb3J0IHRoZSBCb29sZWFuIHBhcmFtZXRlciB0b1xuICogYGNsYXNzTGlzdC50b2dnbGUoKWAuIFRoaXMgaGVscGVyIGZ1bmN0aW9uIGJlaGF2ZXMgbGlrZSB0aGUgc3RhbmRhcmRcbiAqIGB0b2dnbGUoKWAsIGluY2x1ZGluZyBzdXBwb3J0IGZvciB0aGUgQm9vbGVhbiBwYXJhbWV0ZXIsIHNvIHRoYXQgaXQgY2FuIGJlXG4gKiB1c2VkIGV2ZW4gb24gSUUgMTEuXG4gKlxuICogQGZ1bmN0aW9uIHRvZ2dsZUNsYXNzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgdG8gbW9kaWZ5XG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIC0gVGhlIGNsYXNzIHRvIGFkZC9yZW1vdmVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlXSAtIEZvcmNlIHRoZSBjbGFzcyB0byBiZSBhZGRlZCAoaWYgdHJ1ZSkgb3IgcmVtb3ZlZFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgKGlmIGZhbHNlKVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2dnbGVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUsIGZvcmNlKSB7XG4gIGxldCBjbGFzc0xpc3QgPSBlbGVtZW50LmNsYXNzTGlzdDtcbiAgbGV0IGFkZENsYXNzID0gKHR5cGVvZiBmb3JjZSA9PT0gJ3VuZGVmaW5lZCcpID9cbiAgICAhY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkgOlxuICAgIGZvcmNlO1xuICBpZiAoYWRkQ2xhc3MpIHtcbiAgICBjbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICB9XG4gIHJldHVybiBhZGRDbGFzcztcbn1cbiIsImltcG9ydCBDb21wb3NhYmxlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbXBvc2FibGUnO1xuaW1wb3J0IFNoYWRvd1RlbXBsYXRlIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NoYWRvd1RlbXBsYXRlJztcbmltcG9ydCBTaGFkb3dFbGVtZW50UmVmZXJlbmNlcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TaGFkb3dFbGVtZW50UmVmZXJlbmNlcyc7XG5pbXBvcnQgQXR0cmlidXRlTWFyc2hhbGxpbmcgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvQXR0cmlidXRlTWFyc2hhbGxpbmcnO1xuaW1wb3J0IERpc3RyaWJ1dGVkQ2hpbGRyZW4gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRGlzdHJpYnV0ZWRDaGlsZHJlbic7XG5cblxuLyoqXG4gKiBBIHNhbXBsZSBnZW5lcmFsLXB1cnBvc2UgYmFzZSBjbGFzcyBmb3IgZGVmaW5pbmcgY3VzdG9tIGVsZW1lbnRzIHRoYXQgbWl4ZXNcbiAqIGluIHNvbWUgY29tbW9uIGZlYXR1cmVzOiB0ZW1wbGF0ZSBzdGFtcGluZyBpbnRvIGEgc2hhZG93IHJvb3QsIHNoYWRvdyBlbGVtZW50XG4gKiByZWZlcmVuY2VzLCBtYXJzaGFsbGluZyBhdHRyaWJ1dGVzIHRvIHByb3BlcnRpZXMsIGFuZCByZXRyaWV2aW5nIHRoZSBjaGlsZHJlblxuICogZGlzdHJpYnV0ZWQgdG8gYSBjb21wb25lbnQuXG4gKlxuICogVGhpcyBiYXNlIGNsYXNzIGlzIG5vdCBzcGVjaWFsIGluIGFueSB3YXksIGFuZCBpcyBkZWZpbmVkIG9ubHkgYXMgYVxuICogY29udmVuaWVudCBzaG9ydGhhbmQgZm9yIGFwcGx5aW5nIHRoZSBtaXhpbnMgbGlzdGVkIGFib3ZlLiBZb3UgY2FuIHVzZSB0aGlzXG4gKiBjbGFzcyBhcyBhIGJhc2UgY2xhc3MgZm9yIHlvdXIgb3duIGVsZW1lbnRzLCBvciBlYXNpbHkgY3JlYXRlIHlvdXIgb3duIGJhc2VcbiAqIGNsYXNzIGJ5IGFwcGx5aW5nIHRoZSBzYW1lIHNldCBvZiBtaXhpbnMuXG4gKlxuICogVGhlIEVsZW1lbnRCYXNlIGJhc2UgY2xhc3MgZG9lcyBub3QgcmVnaXN0ZXIgaXRzZWxmIGFzIGEgY3VzdG9tIGVsZW1lbnQgd2l0aFxuICogdGhlIGJyb3dzZXIsIGFuZCBoZW5jZSBjYW5ub3QgYmUgaW5kZXBlbmRlbnRseSBpbnN0YW50aWF0ZWQuXG4gKlxuICogQG1peGVzIEF0dHJpYnV0ZU1hcnNoYWxsaW5nIFxuICogQG1peGVzIENvbXBvc2FibGVcbiAqIEBtaXhlcyBEaXN0cmlidXRlZENoaWxkcmVuXG4gKiBAbWl4ZXMgU2hhZG93RWxlbWVudFJlZmVyZW5jZXNcbiAqIEBtaXhlcyBTaGFkb3dUZW1wbGF0ZVxuICovXG5jbGFzcyBFbGVtZW50QmFzZSBleHRlbmRzIENvbXBvc2FibGUoSFRNTEVsZW1lbnQpLmNvbXBvc2UoXG4gIFNoYWRvd1RlbXBsYXRlLCAgICAgICAgICAvLyBiZWZvcmUgbm9kZSBmaW5kaW5nLCBzbyBzaGFkb3cgcm9vdCBpcyBwb3B1bGF0ZWRcbiAgU2hhZG93RWxlbWVudFJlZmVyZW5jZXMsIC8vIGJlZm9yZSBtYXJzaGFsbGluZywgc28gcHJvcGVydGllcyBjYW4gdXNlIHJlZnNcbiAgQXR0cmlidXRlTWFyc2hhbGxpbmcsXG4gIERpc3RyaWJ1dGVkQ2hpbGRyZW5cbikge1xuXG4gIC8qXG4gICAqIERlYnVnZ2luZyB1dGlsaXR5OiBsb2dzIGEgbWVzc2FnZSwgcHJlZml4ZWQgYnkgdGhlIGNvbXBvbmVudCdzIHRhZy5cbiAgICovXG4gIGxvZyh0ZXh0KSB7XG4gICAgaWYgKHN1cGVyLmxvZykgeyBzdXBlci5sb2codGV4dCk7IH1cbiAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmxvY2FsTmFtZX06ICR7dGV4dH1gKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVsZW1lbnRCYXNlO1xuIiwiaW1wb3J0IEVsZW1lbnRCYXNlIGZyb20gJy4uLy4uL2Jhc2ljLWVsZW1lbnQtYmFzZS9zcmMvRWxlbWVudEJhc2UnO1xuaW1wb3J0IENvbnRlbnRBc0l0ZW1zIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0NvbnRlbnRBc0l0ZW1zJztcbmltcG9ydCBEaXN0cmlidXRlZENoaWxkcmVuQXNDb250ZW50IGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL0Rpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQnO1xuaW1wb3J0IEZyYWN0aW9uYWxTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvRnJhY3Rpb25hbFNlbGVjdGlvbic7XG5pbXBvcnQgSXRlbXNTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvSXRlbXNTZWxlY3Rpb24nO1xuaW1wb3J0IE9ic2VydmVDb250ZW50Q2hhbmdlcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9PYnNlcnZlQ29udGVudENoYW5nZXMnO1xuaW1wb3J0IFNlbGVjdGlvbkFuaW1hdGlvbiBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9TZWxlY3Rpb25BbmltYXRpb24nO1xuaW1wb3J0IFNlbGVjdGlvbkFyaWFBY3RpdmUgZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvU2VsZWN0aW9uQXJpYUFjdGl2ZSc7XG5pbXBvcnQgVGltZXJTZWxlY3Rpb24gZnJvbSAnLi4vLi4vYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvVGltZXJTZWxlY3Rpb24nO1xuXG5cbmxldCBiYXNlID0gRWxlbWVudEJhc2UuY29tcG9zZShcbiAgQ29udGVudEFzSXRlbXMsXG4gIERpc3RyaWJ1dGVkQ2hpbGRyZW5Bc0NvbnRlbnQsXG4gIEZyYWN0aW9uYWxTZWxlY3Rpb24sXG4gIEl0ZW1zU2VsZWN0aW9uLFxuICBPYnNlcnZlQ29udGVudENoYW5nZXMsXG4gIFNlbGVjdGlvbkFuaW1hdGlvbixcbiAgU2VsZWN0aW9uQXJpYUFjdGl2ZSxcbiAgVGltZXJTZWxlY3Rpb25cbik7XG5cbi8qKlxuICogU2xpZGVzaG93IHdpdGggYW5pbWF0ZWQgdHJhbnNpdGlvbnMuXG4gKlxuICogQnkgZGVmYXVsdCB0aGUgc2xpZGVzaG93IHdpbGwgaW1tZWRpYXRlbHkgYmVnaW4gcGxheWluZyB3aGVuIGl0IGlzIGNvbm5lY3RlZFxuICogdG8gdGhlIGRvY3VtZW50LCBhZHZhbmNlIGV2ZXJ5IDMwMDAgbXMgKDMgc2Vjb25kcyksIGFuZCB1c2UgYSBzaW1wbGVcbiAqIGNyb3NzZmFkZSBlZmZlY3QuXG4gKlxuICogQGV4dGVuZHMgRWxlbWVudEJhc2VcbiAqL1xuY2xhc3MgU2xpZGVzaG93IGV4dGVuZHMgYmFzZSB7XG5cbiAgYXR0YWNoZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoc3VwZXIuYXR0YWNoZWRDYWxsYmFjaykgeyBzdXBlci5hdHRhY2hlZENhbGxiYWNrKCk7IH1cblxuICAgIC8vIFVubGVzcyB0b2xkIG5vdCB0byBzdGFydCBwbGF5aW5nLCBwbGF5IGJ5IGRlZmF1bHQuXG4gICAgaWYgKHRoaXMucGxheWluZyA9PSBudWxsKSB7XG4gICAgICB0aGlzLnBsYXkoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgZGVmYXVsdHMoKSB7XG4gICAgbGV0IGRlZmF1bHRzID0gc3VwZXIuZGVmYXVsdHMgfHwge307XG4gICAgZGVmYXVsdHMuc2VsZWN0aW9uQW5pbWF0aW9uRHVyYXRpb24gPSA1MDA7XG4gICAgZGVmYXVsdHMuc2VsZWN0aW9uQW5pbWF0aW9uRWZmZWN0ID0gJ2Nyb3NzZmFkZSc7XG4gICAgZGVmYXVsdHMuc2VsZWN0aW9uUmVxdWlyZWQgPSB0cnVlO1xuICAgIGRlZmF1bHRzLnNlbGVjdGlvblRpbWVyRHVyYXRpb24gPSAzMDAwO1xuICAgIGRlZmF1bHRzLnNlbGVjdGlvbldyYXBzID0gdHJ1ZTtcbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICBgO1xuICB9XG5cbn1cblxuXG5kb2N1bWVudC5yZWdpc3RlckVsZW1lbnQoJ2Jhc2ljLXNsaWRlc2hvdycsIFNsaWRlc2hvdyk7XG4iXX0=
