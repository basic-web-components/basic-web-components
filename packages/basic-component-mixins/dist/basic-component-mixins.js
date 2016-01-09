(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Marshall attributes to properties (and eventually vice versa).
 * Only supports string properties for now.
 *
 * @mixin AttributeMarshalling
 */

exports.default = function (base) {
  return function (_base) {
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Mixin to support Polymer-style automatic node finding.
 *
 * This adds a member on the component called `$` that can be used to reference
 * elements with IDs. E.g., if component's shadow contains an element
 * `<button id="foo">`, then this mixin will create a member `this.$.foo` that
 * points to that button. Such references simplify a component's access to its
 * own elements.
 *
 * This trades off a one-time cost of querying all elements in the shadow tree
 * against having to query for an element each time the component wants to
 * inspect or manipulate it.
 *
 * See https://www.polymer-project.org/1.0/docs/devguide/local-dom.html#node-finding.
 *
 * @mixin AutomaticNodeFinding
 */

exports.default = function (base) {
  return function (_base) {
    _inherits(AutomaticNodeFinding, _base);

    function AutomaticNodeFinding() {
      _classCallCheck(this, AutomaticNodeFinding);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(AutomaticNodeFinding).apply(this, arguments));
    }

    _createClass(AutomaticNodeFinding, [{
      key: 'createdCallback',
      value: function createdCallback() {
        var _this2 = this;

        if (_get(Object.getPrototypeOf(AutomaticNodeFinding.prototype), 'createdCallback', this)) {
          _get(Object.getPrototypeOf(AutomaticNodeFinding.prototype), 'createdCallback', this).call(this);
        }
        if (this.shadowRoot) {
          this.$ = {};
          var nodesWithIds = this.shadowRoot.querySelectorAll('[id]');
          [].forEach.call(nodesWithIds, function (node) {
            var id = node.getAttribute('id');
            _this2.$[id] = node;
          });
        }
      }
    }]);

    return AutomaticNodeFinding;
  }(base);
};

},{}],3:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Mixin that defines a component's content as its children.
 *
 * @mixin ChildrenContent
 */

// TODO: Factor content change tracking into its own mixin.
// TODO: Don't respond to changes in attributes, or at least offer that as an
// option.

exports.default = function (base) {
  return function (_base) {
    _inherits(ChildrenContent, _base);

    function ChildrenContent() {
      _classCallCheck(this, ChildrenContent);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(ChildrenContent).apply(this, arguments));
    }

    _createClass(ChildrenContent, [{
      key: 'createdCallback',
      value: function createdCallback() {
        var _this2 = this;

        if (_get(Object.getPrototypeOf(ChildrenContent.prototype), 'createdCallback', this)) {
          _get(Object.getPrototypeOf(ChildrenContent.prototype), 'createdCallback', this).call(this);
        }
        // Until we have content observing again, force a call to contentChanged().
        // HACK: Do this asynchronously, so other mixins have a chance to set up
        // before this call.
        setTimeout(function () {
          return _this2.contentChanged();
        });

        observeContentChanges(this);
      }
    }, {
      key: 'contentChanged',
      value: function contentChanged() {
        if (_get(Object.getPrototypeOf(ChildrenContent.prototype), 'contentChanged', this)) {
          _get(Object.getPrototypeOf(ChildrenContent.prototype), 'contentChanged', this).call(this);
        }
        var event = new CustomEvent('content-changed');
        this.dispatchEvent(event);
      }

      /**
       * The flattened content of this component.
       *
       * @property content
       * @type [Object]
       */

    }, {
      key: 'content',
      get: function get() {
        return expandContentElements(this.children);
      },
      set: function set(value) {
        if ('content' in base.prototype) {
          _set(Object.getPrototypeOf(ChildrenContent.prototype), 'content', value, this);
        }
      }

      /*
       * Returns an in-order collection of children, expanding any content nodes.
       * Like the standard children property, this skips text nodes.
       *
       * TODO: This walks the whole content tree every time the list is requested.
       * It'd be nice to cache the answer and invalidate it only when content
       * actually changes.
       */

    }, {
      key: 'distributedChildren',
      get: function get() {
        return expandContentElements(this.children, false);
      }

      /*
       * Returns an in-order collection of child nodes, expanding any content nodes.
       * Like the standard childNodes property, this includes text nodes.
       */

    }, {
      key: 'distributedChildNodes',
      get: function get() {
        return expandContentElements(this.childNodes, true);
      }

      /*
       * Returns the concatenated text content of all child nodes, expanding any
       * content nodes.
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

    return ChildrenContent;
  }(base);
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
    // We want to see if the node is an instanceof HTMLContentElement, but
    // that class won't exist if the browser that doesn't support native
    // Shadow DOM and if the Shadow DOM polyfill hasn't been loaded. Instead,
    // we do a simplistic check to see if the tag name is "content".
    if (node.localName && node.localName === "content") {
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

},{}],4:[function(require,module,exports){
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

/**
 * Mixin which maps a click (actually, a mousedown) to selection.
 *
 * If the user clicks an element, and the element is an item in the list, then
 * the component's selectedIndex will be set to the index for that item.
 *
 * @mixin ClickSelection
 */

exports.default = function (base) {
  return function (_base) {
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
};

// TODO: Handle the case where a list item has subelements. Walk up the DOM
// hierarchy until we find an item in the list, or come back to this element,
// in which case the element that was tapped isn't an item (and should be
// ignored).

function selectTarget(element, target) {
  var index = element.indexOfItem && element.indexOfItem(target);
  if (index >= 0) {
    element.selectedIndex = index;
  }
}

},{}],5:[function(require,module,exports){
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

/**
 * Mixin which allows a component to provide aggregate behavior with other
 * elements, e.g., for keyboard handling.
 *
 * @mixin CollectiveElement
 */

exports.default = function (base) {
  return function (_base) {
    _inherits(CollectiveElement, _base);

    function CollectiveElement() {
      _classCallCheck(this, CollectiveElement);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(CollectiveElement).apply(this, arguments));
    }

    _createClass(CollectiveElement, [{
      key: 'createdCallback',
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(CollectiveElement.prototype), 'createdCallback', this)) {
          _get(Object.getPrototypeOf(CollectiveElement.prototype), 'createdCallback', this).call(this);
        }
        this.collective = new Collective(this);
      }
    }, {
      key: 'target',
      get: function get() {
        return _get(Object.getPrototypeOf(CollectiveElement.prototype), 'target', this);
      },
      set: function set(element) {
        if ('target' in base.prototype) {
          _set(Object.getPrototypeOf(CollectiveElement.prototype), 'target', element, this);
        }
        this.collective.assimilate(element);
      }
    }]);

    return CollectiveElement;
  }(base);
};

var Collective = function () {
  function Collective(element) {
    _classCallCheck(this, Collective);

    this._elements = [];
    this.assimilate(element);
  }

  _createClass(Collective, [{
    key: 'assimilate',
    value: function assimilate(target) {
      var _this2 = this;

      var elements = target.collective ? target.collective.elements : [target];
      elements.forEach(function (element) {
        element.collective = _this2;
        _this2._elements.push(element);
      });
      this.invokeCollectiveMethod('collectiveChanged');
    }
  }, {
    key: 'invokeCollectiveMethod',
    value: function invokeCollectiveMethod(method) {
      // Invoke from innermost to outermost.
      var elements = this.elements;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      for (var i = elements.length - 1; i >= 0; i--) {
        var element = elements[i];
        if (element[method]) {
          element[method].apply(element, args);
        }
      }
    }
  }, {
    key: 'elements',
    get: function get() {
      return this._elements;
    }
  }, {
    key: 'outermostElement',
    get: function get() {
      return this.elements[0];
    }
  }]);

  return Collective;
}();

},{}],6:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Mixin to make a class more easily composable with other mixins.
 *
 * The main contribution is the introduction of a `compose` method that applies
 * a set of mixin functions and returns the resulting new class. This sugar
 * can make the application of many mixins at once easier to read.
 *
 * @mixin Composable
 */

exports.default = function (base) {
  return function (_base) {
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
       * A call like
       *
       *     let MyClass = Mixin1(Mixin2(Mixin3(Mixin4(Mixin5(BaseClass)))));
       *
       * Can be converted to:
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

/**
 * Mixin that defines the target of a component -- the element the component is
 * managing or somehow responsible for -- as its first child.
 *
 * @mixin ContentFirstChildTarget
 */

exports.default = function (base) {
  return function (_base) {
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
};

},{}],8:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Mixin that maps content semantics (children) to list item semantics.
 *
 * Items differ from children in several ways:
 *
 * * They can be referenced via index.
 * * They can have a selection state.
 * * Auxiliary invisible child elements are filtered out and not counted as
 *   items. Auxiliary elements include link, script, style, and template
 *   elements.
 *
 * @mixin ContentItems
 */

exports.default = function (base) {
  return function (_base) {
    _inherits(ContentItems, _base);

    function ContentItems() {
      _classCallCheck(this, ContentItems);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(ContentItems).apply(this, arguments));
    }

    _createClass(ContentItems, [{
      key: 'applySelection',
      value: function applySelection(item, selected) {
        if (_get(Object.getPrototypeOf(ContentItems.prototype), 'applySelection', this)) {
          _get(Object.getPrototypeOf(ContentItems.prototype), 'applySelection', this).call(this, item, selected);
        }
        item.classList.toggle('selected', selected);
      }
    }, {
      key: 'contentChanged',
      value: function contentChanged() {
        if (_get(Object.getPrototypeOf(ContentItems.prototype), 'contentChanged', this)) {
          _get(Object.getPrototypeOf(ContentItems.prototype), 'contentChanged', this).call(this);
        }
        this._items = null;
        this.itemsChanged();
      }

      /**
       * Returns the positional index for the indicated item.
       *
       * @method indexOfItem
       * @param {Object} item The item whose index is requested.
       * @returns {Number} The index of the item, or -1 if not found.
       */

    }, {
      key: 'indexOfItem',
      value: function indexOfItem(item) {
        if (_get(Object.getPrototypeOf(ContentItems.prototype), 'indexOfItem', this)) {
          _get(Object.getPrototypeOf(ContentItems.prototype), 'indexOfItem', this).call(this, item);
        }
        return this.items.indexOf(item);
      }

      // Default implementation does nothing.

    }, {
      key: 'itemAdded',
      value: function itemAdded(item) {
        if (_get(Object.getPrototypeOf(ContentItems.prototype), 'itemAdded', this)) {
          _get(Object.getPrototypeOf(ContentItems.prototype), 'itemAdded', this).call(this, item);
        }
      }
    }, {
      key: 'itemsChanged',
      value: function itemsChanged() {
        var _this2 = this;

        if (_get(Object.getPrototypeOf(ContentItems.prototype), 'itemsChanged', this)) {
          _get(Object.getPrototypeOf(ContentItems.prototype), 'itemsChanged', this).call(this);
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

      /**
       * The current set of items in the list.
       *
       * @property items
       * @type [Object]
       */
      // TODO: property notifications so elements can bind to this property

    }, {
      key: 'items',
      get: function get() {
        if (this._items == null) {
          this._items = filterAuxiliaryElements(this.content);
        }
        return this._items;
      }
    }]);

    return ContentItems;
  }(base);
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

},{}],9:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Mixin which maps direction semantics (goLeft, goRight, etc.) to selection
 * semantics (selectPrevious, selectNext, etc.).
 *
 * @mixin DirectionSelection
 */

exports.default = function (base) {
  return function (_base) {
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
};

},{}],10:[function(require,module,exports){
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

/**
 * Mixin that allows a component to support a "generic" style: a minimalist
 * style that can easily be removed to reset its visual appearance to a baseline
 * state.
 *
 * By default, a component should provide a minimal visual presentation that
 * allows the component to function. However, the more styling the component
 * provides by default, the harder it becomes to get the component to fit in
 * in other settings. Each CSS rule has to be overridden. Worse, new CSS rules
 * added to the default style won't be overridden by default, making it hard to
 * know whether a new version of a component will still look okay.
 *
 * As a compromise, the simple Polymer behavior here defines a "generic"
 * attribute. This attribute is normally set by default, and styles can be
 * written that apply only when the generic attribute is set. This allows the
 * construction of CSS rules that will only apply to generic components like
 *
 *     :host([generic=""]) {
 *       ...
 *     }
 *
 * This makes it easy to remove all default styling -- set the generic attribute
 * to false, and all default styling will be removed.
 */

exports.default = function (base) {
  return function (_base) {
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
       * @property generic
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
        // We roll our own attribute setting so that an explicitly false value shows
        // up as generic="false".
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

/**
 * Mixin which manages selection semantics for items in a list.
 *
 * @mixin ItemSelection
 */

/**
 * Fires when the selectedItem property changes.
 *
 * @event selected-item-changed
 * @param detail.selectedItem The new selected item.
 * @param detail.previousItem The previously selected item.
 */

/**
 * Fires when the selectedIndex property changes.
 *
 * @event selected-item-changed
 * @param detail.selectedIndex The new selected index.
 */

exports.default = function (base) {
  return function (_base) {
    _inherits(ItemSelection, _base);

    function ItemSelection() {
      _classCallCheck(this, ItemSelection);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(ItemSelection).apply(this, arguments));
    }

    _createClass(ItemSelection, [{
      key: 'applySelection',

      // Default implementation. This will typically be handled by other mixins.
      value: function applySelection(item, selected) {
        if (_get(Object.getPrototypeOf(ItemSelection.prototype), 'applySelection', this)) {
          _get(Object.getPrototypeOf(ItemSelection.prototype), 'applySelection', this).call(this, item, selected);
        }
      }
    }, {
      key: 'itemAdded',
      value: function itemAdded(item) {
        if (_get(Object.getPrototypeOf(ItemSelection.prototype), 'itemAdded', this)) {
          _get(Object.getPrototypeOf(ItemSelection.prototype), 'itemAdded', this).call(this, item);
        }
        this.applySelection(item, item === this.selectedItem);
      }
    }, {
      key: 'itemsChanged',
      value: function itemsChanged() {
        if (_get(Object.getPrototypeOf(ItemSelection.prototype), 'itemsChanged', this)) {
          _get(Object.getPrototypeOf(ItemSelection.prototype), 'itemsChanged', this).call(this);
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
       * @property selectedIndex
       * @type Number
       */

    }, {
      key: 'selectFirst',

      /**
       * Select the first item in the list.
       *
       * @method selectFirst
       */
      value: function selectFirst() {
        if (_get(Object.getPrototypeOf(ItemSelection.prototype), 'selectFirst', this)) {
          _get(Object.getPrototypeOf(ItemSelection.prototype), 'selectFirst', this).call(this);
        }
        return selectIndex(this, 0);
      }

      /**
       * True if the list should always have a selection (if it has items).
       *
       * @property selectionRequired
       * @type Boolean
       */

    }, {
      key: 'selectLast',

      /**
       * Select the last item in the list.
       *
       * @method selectLast
       */
      value: function selectLast() {
        if (_get(Object.getPrototypeOf(ItemSelection.prototype), 'selectLast', this)) {
          _get(Object.getPrototypeOf(ItemSelection.prototype), 'selectLast', this).call(this);
        }
        return selectIndex(this, this.items.length - 1);
      }

      /**
       * Select the next item in the list.
       *
       * @method selectNext
       */

    }, {
      key: 'selectNext',
      value: function selectNext() {
        if (_get(Object.getPrototypeOf(ItemSelection.prototype), 'selectNext', this)) {
          _get(Object.getPrototypeOf(ItemSelection.prototype), 'selectNext', this).call(this);
        }
        return selectIndex(this, this.selectedIndex + 1);
      }

      /**
       * Select the previous item in the list.
       *
       * @method selectPrevious
       */

    }, {
      key: 'selectPrevious',
      value: function selectPrevious() {
        if (_get(Object.getPrototypeOf(ItemSelection.prototype), 'selectPrevious', this)) {
          _get(Object.getPrototypeOf(ItemSelection.prototype), 'selectPrevious', this).call(this);
        }
        return selectIndex(this, this.selectedIndex - 1);
      }
    }, {
      key: 'canSelectNext',
      get: function get() {
        return this._canSelectNext;
      },
      set: function set(canSelectNext) {
        if ('canSelectNext' in base.prototype) {
          _set(Object.getPrototypeOf(ItemSelection.prototype), 'canSelectNext', canSelectNext, this);
        }
        this._canSelectNext = canSelectNext;
      }
    }, {
      key: 'canSelectPrevious',
      get: function get() {
        return this._canSelectPrevious;
      },
      set: function set(canSelectPrevious) {
        if ('canSelectPrevious' in base.prototype) {
          _set(Object.getPrototypeOf(ItemSelection.prototype), 'canSelectPrevious', canSelectPrevious, this);
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
        var index = this.indexOfItem(selectedItem);

        // If index = -1, selection wasn't found. Most likely cause is that the
        // DOM was manipulated from underneath us.
        // TODO: Once we track content changes, turn this into an exception.
        return index;
      },
      set: function set(index) {
        if ('selectedIndex' in base.prototype) {
          _set(Object.getPrototypeOf(ItemSelection.prototype), 'selectedIndex', index, this);
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
       * @property selectedItem
       * @type Object
       */
      // TODO: Confirm item is in items before selecting.

    }, {
      key: 'selectedItem',
      get: function get() {
        return this._selectedItem;
      },
      set: function set(item) {
        if ('selectedItem' in base.prototype) {
          _set(Object.getPrototypeOf(ItemSelection.prototype), 'selectedItem', item, this);
        }
        var previousItem = this._selectedItem;
        if (previousItem) {
          // Remove previous selection.
          this.applySelection(previousItem, false);
        }
        this._selectedItem = item;
        if (item) {
          this.applySelection(item, true);
        }

        // TODO: Rationalize with selectedIndex so we're not recalculating item
        // or index in each setter.
        var index = this.indexOfItem(item);
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
          _set(Object.getPrototypeOf(ItemSelection.prototype), 'selectionRequired', selectionRequired, this);
        }
        this._selectionRequired = selectionRequired;
        ensureSelection(this);
      }
    }]);

    return ItemSelection;
  }(base);
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

/**
 * Mixin which manages ARIA roles for a component that wants to act as a list.
 *
 * @mixin ItemsAccessible
 */

// Used to assign unique IDs to item elements without IDs.
var idCount = 0;

exports.default = function (base) {
  return function (_base) {
    _inherits(ItemsAccessible, _base);

    function ItemsAccessible() {
      _classCallCheck(this, ItemsAccessible);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(ItemsAccessible).apply(this, arguments));
    }

    _createClass(ItemsAccessible, [{
      key: 'applySelection',
      value: function applySelection(item, selected) {
        if (_get(Object.getPrototypeOf(ItemsAccessible.prototype), 'applySelection', this)) {
          _get(Object.getPrototypeOf(ItemsAccessible.prototype), 'applySelection', this).call(this, item, selected);
        }
        item.setAttribute('aria-selected', selected);
        var itemId = item.getAttribute('id');
        if (itemId) {
          this.collective.outermostElement.setAttribute('aria-activedescendant', itemId);
        }
      }
    }, {
      key: 'collectiveChanged',
      value: function collectiveChanged() {
        if (_get(Object.getPrototypeOf(ItemsAccessible.prototype), 'collectiveChanged', this)) {
          _get(Object.getPrototypeOf(ItemsAccessible.prototype), 'collectiveChanged', this).call(this);
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
        if (_get(Object.getPrototypeOf(ItemsAccessible.prototype), 'createdCallback', this)) {
          _get(Object.getPrototypeOf(ItemsAccessible.prototype), 'createdCallback', this).call(this);
        }

        // Determine a base item ID based on this component's host's own ID. This
        // will be combined with a unique integer to assign IDs to items that don't
        // have an explicit ID. If the basic-list-box has ID "foo", then its items
        // will have IDs that look like "_fooOption1". If the list has no ID itself,
        // its items will get IDs that look like "_option1". Item IDs are prefixed
        // with an underscore to differentiate them from manually-assigned IDs, and
        // to minimize the potential for ID conflicts.
        var elementId = this.getAttribute("id");
        this.itemBaseId = elementId ? "_" + elementId + "Option" : "_option";
      }
    }, {
      key: 'itemAdded',
      value: function itemAdded(item) {
        if (_get(Object.getPrototypeOf(ItemsAccessible.prototype), 'itemAdded', this)) {
          _get(Object.getPrototypeOf(ItemsAccessible.prototype), 'itemAdded', this).call(this, item);
        }

        item.setAttribute('role', 'option');

        // Ensure each item has an ID so we can set aria-activedescendant on the
        // overall list whenever the selection changes.
        if (!item.getAttribute('id')) {
          item.setAttribute('id', this.itemBaseId + idCount++);
        }
      }
    }, {
      key: 'selectedItem',
      get: function get() {
        return _get(Object.getPrototypeOf(ItemsAccessible.prototype), 'selectedItem', this);
      },
      set: function set(item) {
        if ('selectedItem' in base.prototype) {
          _set(Object.getPrototypeOf(ItemsAccessible.prototype), 'selectedItem', item, this);
        }
        // Catch the case where the selection is removed.
        if (item == null) {
          this.collective.outermostElement.removeAttribute('aria-activedescendant');
        }
      }
    }]);

    return ItemsAccessible;
  }(base);
};

// Return the first ARIA activedescendant defined by the collective.

function getCollectiveAriaActiveDescendant(collective) {
  var descendants = collective.elements.map(function (element) {
    return element.getAttribute('aria-activedescendant');
  });
  return descendants.find(function (descendant) {
    return descendant !== null;
  });
}

// Return the first ARIA label defined by the collective.
function getCollectiveAriaRole(collective) {
  var roles = collective.elements.map(function (element) {
    return element.getAttribute('role');
  });
  return roles.find(function (role) {
    return role !== null;
  });
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

/**
 * Mixin which manages the keydown handling for a component.
 *
 * TODO: Document collective behavior.
 * TODO: Provide baseline behavior outside of a collective.
 *
 * @mixin Keyboard
 */

exports.default = function (base) {
  return function (_base) {
    _inherits(Keyboard, _base);

    function Keyboard() {
      _classCallCheck(this, Keyboard);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Keyboard).apply(this, arguments));
    }

    _createClass(Keyboard, [{
      key: 'keydown',

      // Default keydown handler. This will typically be handled by other mixins.
      value: function keydown(event) {
        if (_get(Object.getPrototypeOf(Keyboard.prototype), 'keydown', this)) {
          return _get(Object.getPrototypeOf(Keyboard.prototype), 'keydown', this).call(this, event);
        }
      }

      /*
       * If we're now the outermost element of the collective, set up to receive
       * keyboard events. If we're no longer the outermost element, stop listening.
       */

    }, {
      key: 'collectiveChanged',
      value: function collectiveChanged() {
        if (_get(Object.getPrototypeOf(Keyboard.prototype), 'collectiveChanged', this)) {
          _get(Object.getPrototypeOf(Keyboard.prototype), 'collectiveChanged', this).call(this);
        }

        var outermostElement = this.collective.outermostElement;
        if (outermostElement === this && !this.getAttribute('aria-label')) {
          // Since we're handling the keyboard, see if we can adopt an ARIA label
          // from an inner element of the collective.
          var label = getCollectiveAriaLabel(this.collective);
          if (label) {
            this.setAttribute('aria-label', label);
          }
        }

        // Make sure only the outermost element in the collective is listening to
        // the keyboard.
        this.collective.elements.forEach(function (element) {

          var shouldListen = element === outermostElement;
          var isListening = isListeningToKeydown(element);
          if (isListening !== shouldListen) {
            if (shouldListen) {
              startListeningToKeydown(element);
            } else {
              stopListeningToKeydown(element);
            }
          }
          if (!shouldListen && element.getAttribute('aria-label')) {
            // Remove the ARIA label from inner element's not handling the keyboard.
            element.removeAttribute('aria-label');
          }
        });
      }
    }]);

    return Keyboard;
  }(base);
};

function keydown(event) {

  // Give collective elements a shot at the event, working from innermost to
  // outermost (this element).
  var handled = undefined;
  var elements = this.collective.elements;
  for (var i = elements.length - 1; i >= 0; i--) {
    var element = elements[i];
    handled = element.keydown && element.keydown(event);
    if (handled) {
      break;
    }
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
  return labels.find(function (label) {
    return label !== null;
  });
}

function isListeningToKeydown(element) {
  return element._keydownListener != null;
}

function startListeningToKeydown(element) {
  element._keydownListener = keydown.bind(element);
  element.addEventListener('keydown', element._keydownListener);
  if (element.tabIndex < 0) {
    element.setAttribute('tabIndex', 0);
  }
}

function stopListeningToKeydown(element) {
  element.removeEventListener('keydown', element._keydownListener);
  element._keydownListener = null;
  element.removeAttribute('tabIndex');
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

/**
 * Mixin which maps direction keys (Left, Right, etc.) to direction semantics
 * (goLeft, goRight, etc.).
 *
 * @mixin KeyboardDirection
 */

exports.default = function (base) {
  return function (_base) {
    _inherits(KeyboardDirection, _base);

    function KeyboardDirection() {
      _classCallCheck(this, KeyboardDirection);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(KeyboardDirection).apply(this, arguments));
    }

    _createClass(KeyboardDirection, [{
      key: "goDown",

      // Default implementations. These will typically be handled by other mixins.
      value: function goDown() {
        if (_get(Object.getPrototypeOf(KeyboardDirection.prototype), "goDown", this)) {
          return _get(Object.getPrototypeOf(KeyboardDirection.prototype), "goDown", this).call(this);
        }
      }
    }, {
      key: "goEnd",
      value: function goEnd() {
        if (_get(Object.getPrototypeOf(KeyboardDirection.prototype), "goEnd", this)) {
          return _get(Object.getPrototypeOf(KeyboardDirection.prototype), "goEnd", this).call(this);
        }
      }
    }, {
      key: "goLeft",
      value: function goLeft() {
        if (_get(Object.getPrototypeOf(KeyboardDirection.prototype), "goLeft", this)) {
          return _get(Object.getPrototypeOf(KeyboardDirection.prototype), "goLeft", this).call(this);
        }
      }
    }, {
      key: "goRight",
      value: function goRight() {
        if (_get(Object.getPrototypeOf(KeyboardDirection.prototype), "goRight", this)) {
          return _get(Object.getPrototypeOf(KeyboardDirection.prototype), "goRight", this).call(this);
        }
      }
    }, {
      key: "goStart",
      value: function goStart() {
        if (_get(Object.getPrototypeOf(KeyboardDirection.prototype), "goStart", this)) {
          return _get(Object.getPrototypeOf(KeyboardDirection.prototype), "goStart", this).call(this);
        }
      }
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
 *   visible item if the selection is not already there. Thereafter, the key will
 *   move the selection up/down by a page, and (per the above point) make the
 *   selected item visible.
 *
 * To ensure the selected item is in view following use of Page Up/Down, use the
 * related SelectionScroll mixin.
 *
 * @mixin KeyboardPagedSelection
 */

exports.default = function (base) {
  return function (_base) {
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
       *
       * @method pageDown
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
       *
       * @method pageUp
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
       * @property scrollTarget
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

/**
 * Mixin that handles list box-style prefix typing, in which the user can type a
 * string to select the first item that begins with that string.
 *
 * @mixin KeyboardPrefixSelection
 */

// TODO: If the selection is changed by some other means (e.g., arrow keys) other
// than prefix typing, then that act should reset the prefix.

exports.default = function (base) {
  return function (_base) {
    _inherits(KeyboardPrefixSelection, _base);

    function KeyboardPrefixSelection() {
      _classCallCheck(this, KeyboardPrefixSelection);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(KeyboardPrefixSelection).apply(this, arguments));
    }

    _createClass(KeyboardPrefixSelection, [{
      key: 'keydown',

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
       * @method selectItemWithTextPrefix
       * @param prefix [String] The string to search for
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Mixin which applies standard highlight colors to a selected item.
 *
 * @mixin SelectionHighlight
 */

exports.default = function (base) {
  return function (_base) {
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
};

},{}],18:[function(require,module,exports){
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

/**
 * Mixin which scrolls a container to keep the selected item visible.
 *
 * @mixin SelectionScroll
 */

exports.default = function (base) {
  return function (_base) {
    _inherits(SelectionScroll, _base);

    function SelectionScroll() {
      _classCallCheck(this, SelectionScroll);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(SelectionScroll).apply(this, arguments));
    }

    _createClass(SelectionScroll, [{
      key: 'scrollItemIntoView',

      /**
       * Scroll the given element completely into view, minimizing the degree of
       * scrolling performed.
       *
       * Blink has a scrollIntoViewIfNeeded() function that almost the same thing,
       * but unfortunately it's non-standard, and in any event often ends up
       * scrolling more than is absolutely necessary.
       *
       * @method scrollItemIntoView
       */
      value: function scrollItemIntoView(item) {
        if (_get(Object.getPrototypeOf(SelectionScroll.prototype), 'scrollItemIntoView', this)) {
          _get(Object.getPrototypeOf(SelectionScroll.prototype), 'scrollItemIntoView', this).call(this);
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
       * The element that should be scrolled with the Page Up/Down keys.
       * Default is the current element.
       *
       * @property scrollTarget
       */

    }, {
      key: 'selectedItem',
      get: function get() {
        return _get(Object.getPrototypeOf(SelectionScroll.prototype), 'selectedItem', this);
      },
      set: function set(item) {
        if ('selectedItem' in base.prototype) {
          _set(Object.getPrototypeOf(SelectionScroll.prototype), 'selectedItem', item, this);
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
        return 'scrollTarget' in base.prototype ? _get(Object.getPrototypeOf(SelectionScroll.prototype), 'scrollTarget', this) : this;
      },
      set: function set(element) {
        if ('scrollTarget' in base.prototype) {
          _set(Object.getPrototypeOf(SelectionScroll.prototype), 'scrollTarget', element, this);
        }
      }
    }]);

    return SelectionScroll;
  }(base);
};

},{}],19:[function(require,module,exports){
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

/**
 * Mixin which maps touch gestures (swipe left, swipe right) to direction
 * semantics (goRight, goLeft).
 *
 * @mixin SwipeDirection
 */

exports.default = function (base) {
  return function (_base) {
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
        this.addEventListener('touchstart', function (event) {
          if (_this2._multiTouch) {
            return;
          } else if (event.touches.length === 1) {
            touchStart(_this2, event);
          } else {
            _this2._multiTouch = true;
          }
        });
        this.addEventListener('touchmove', function (event) {
          if (!_this2._multiTouch && event.touches.length === 1) {
            var handled = touchMove(_this2, event);
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
              touchEnd(_this2, event);
            }
            _this2._multiTouch = false;
          }
        });
      }

      // Default implementations

    }, {
      key: 'goLeft',
      value: function goLeft() {
        if (_get(Object.getPrototypeOf(SwipeDirection.prototype), 'goLeft', this)) {
          return _get(Object.getPrototypeOf(SwipeDirection.prototype), 'goLeft', this).call(this);
        }
      }
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
       * @property position
       * @type Number
       */

    }, {
      key: 'showTransition',

      // Default implementation
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
};

function touchStart(element, event) {
  element.showTransition(false);
  var x = event.changedTouches[0].clientX;
  var y = event.changedTouches[0].clientY;
  element._startX = x;
  element._previousX = x;
  element._previousY = y;
  element._deltaX = 0;
  element._deltaY = 0;
}

function touchMove(element, event) {
  var x = event.changedTouches[0].clientX;
  var y = event.changedTouches[0].clientY;
  element._deltaX = x - element._previousX;
  element._deltaY = y - element._previousY;
  element._previousX = x;
  element._previousY = y;
  if (Math.abs(element._deltaX) > Math.abs(element._deltaY)) {
    // Move was mostly horizontal.
    trackTo(element, x);
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

function touchEnd(element, event) {
  element.showTransition(true);
  var x = event.changedTouches[0].clientX;
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
    trackTo(element, x);
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

/**
 * Mixin that allows a component to delegate its own selection semantics to a
 * target element. This is useful when defining components that act as
 * optional decorators for a component that acts like a list.
 *
 * @mixin TargetSelection
 */

exports.default = function (base) {
  return function (_base) {
    _inherits(TargetSelection, _base);

    function TargetSelection() {
      _classCallCheck(this, TargetSelection);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(TargetSelection).apply(this, arguments));
    }

    _createClass(TargetSelection, [{
      key: 'indexOfItem',

      // attachedCallback() {
      //   // Apply any selection made before assimilation.
      //   if (this._prematureSelectedIndex
      //       && 'selectedIndex' in this && this.selectedIndex === -1) {
      //     this.selectedIndex = this._prematureSelectedIndex;
      //     this._prematureSelectedIndex = null;
      //   }
      // }

      value: function indexOfItem(item) {
        if (_get(Object.getPrototypeOf(TargetSelection.prototype), 'indexOfItem', this)) {
          _get(Object.getPrototypeOf(TargetSelection.prototype), 'indexOfItem', this).call(this, item);
        }
        var target = this.target;
        return target ? target.indexOfItem(item) : -1;
      }
    }, {
      key: 'itemsChanged',
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
       * @property selectedIndex
       * @type Number
       */

    }, {
      key: 'selectedItemChanged',
      value: function selectedItemChanged() {
        if (_get(Object.getPrototypeOf(TargetSelection.prototype), 'selectedItemChanged', this)) {
          _get(Object.getPrototypeOf(TargetSelection.prototype), 'selectedItemChanged', this).call(this);
        }
      }
    }, {
      key: 'items',
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
        // if ('selectedIndex' in this {
        //   this.selectedIndex = index;
        // } else {
        //   // Selection is being made before the collective supports it.
        //   this._prematureSelectedIndex = index;
        // }
        var target = this.target;
        if (target && target.selectedIndex !== index) {
          target.selectedIndex = index;
        }
      }

      /**
       * The currently selected item, or null if there is no selection.
       *
       * @property selectedItem
       * @type Object
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

/**
 * Mixin for template stamping. If a component defines a template property (as a
 * string or referencing a HTML template), when the component class is
 * instantiated, a shadow root will be created on the instance, and the contents
 * of the template will be cloned into the shadow root.
 *
 * For the time being, this extension retains support for Shadow DOM v0.
 * That will eventually be deprecated as browsers implement Shadow DOM v1.
 *
 * @mixin TemplateStamping
 */

// Feature detection for old Shadow DOM v0.
var USING_SHADOW_DOM_V0 = typeof HTMLElement.prototype.createShadowRoot !== 'undefined';

exports.default = function (base) {
  return function (_base) {
    _inherits(TemplateStamping, _base);

    function TemplateStamping() {
      _classCallCheck(this, TemplateStamping);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(TemplateStamping).apply(this, arguments));
    }

    _createClass(TemplateStamping, [{
      key: 'createdCallback',

      /*
       * If the component defines a template, a shadow root will be created on the
       * component instance, and the template stamped into it.
       */
      value: function createdCallback() {
        if (_get(Object.getPrototypeOf(TemplateStamping.prototype), 'createdCallback', this)) {
          _get(Object.getPrototypeOf(TemplateStamping.prototype), 'createdCallback', this).call(this);
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

    return TemplateStamping;
  }(base);
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

},{}],22:[function(require,module,exports){
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

/**
 * Mixin provides for automatic timed changes in selection, as in a
 * automated slideshow.
 *
 * @mixin TimerSelection
 */

exports.default = function (base) {
  return function (_base) {
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
       *
       * @method play
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
       *
       * @method pause
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
       * @property playing
       * @type Boolean
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

      // Whether the user has selected an item manually, or we've automatically
      // advanced the selection, we wait for a bit before advancing again.

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
};

function clearTimer(element) {
  if (element._timeout) {
    clearTimeout(element._timeout);
    element._timeout = null;
  }
}

function setTimer(element) {
  element._timeout = setTimeout(selectNextWithWrap.bind(this), 2000);
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

/**
 * Mixin which maps a horizontal trackpad swipe gestures (or horizontal mouse
 * wheel actions) to direction semantics.
 *
 * To respond to the trackpad, we can listen to the DOM's "wheel" events. These
 * events are fired as the user drags their fingers across a trackpad.
 * Unfortunately, this scheme is missing a critical event — there is no event
 * when the user *stops* a gestured on the trackpad.
 *
 * To complicate matters, the mainstream browsers continue to generate wheel
 * events even after the user has stopped dragging their fingers. These fake
 * events simulate the user gradually slowing down the drag until they come to a
 * smooth stop. In some contexts, these fake wheel events might be helpful, but
 * in trying to supply typical trackpad swipe navigation, these fake events get
 * in the way.
 *
 * This component uses some heuristics to work around these problems, but the
 * complex nature of the problem make it extremely difficult to achieve the same
 * degree of trackpad responsiveness possible with native applications.
 *
 * @mixin TrackpadDirection
 */

exports.default = function (base) {
  return function (_base) {
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

      // Default implementations

    }, {
      key: 'goLeft',
      value: function goLeft() {
        if (_get(Object.getPrototypeOf(TrackpadDirection.prototype), 'goLeft', this)) {
          return _get(Object.getPrototypeOf(TrackpadDirection.prototype), 'goLeft', this).call(this);
        }
      }
    }, {
      key: 'goRight',
      value: function goRight() {
        if (_get(Object.getPrototypeOf(TrackpadDirection.prototype), 'goRight', this)) {
          return _get(Object.getPrototypeOf(TrackpadDirection.prototype), 'goRight', this).call(this);
        }
      }
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

},{}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = composeTemplates;
/*
 * Given two templates, "fold" one inside the other. For now, this just entails
 * putting the first inside the location of the first <content> node in the
 * second template.
 *
 * Example: if the first (sub) template is
 *
 *   <template>
 *     Hello, <slot></slot>.
 *   </template>
 *
 * and the second (base) template is
 *
 *   <template>
 *     <b>
 *       <slot></slot>
 *     </b>
 *   </template>
 *
 * Then the returned folded template is
 *
 *   <template>
 *     <b>
 *       Hello, <slot></slot>.
 *     </b>
 *   </template>
 */
function composeTemplates(baseTemplate, mixinTemplate) {

  if (!baseTemplate) {
    // No folding necessary.
    return mixinTemplate;
  }

  baseTemplate = makeTemplate(baseTemplate);
  mixinTemplate = makeTemplate(mixinTemplate);
  var baseElement = baseTemplate && baseTemplate.content.cloneNode(true);
  var mixinElement = mixinTemplate && mixinTemplate.content.cloneNode(true);

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

// TODO: Share with TemplateStamping.
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

},{}]},{},[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL0F0dHJpYnV0ZU1hcnNoYWxsaW5nLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9BdXRvbWF0aWNOb2RlRmluZGluZy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvQ2hpbGRyZW5Db250ZW50LmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9DbGlja1NlbGVjdGlvbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvQ29sbGVjdGl2ZUVsZW1lbnQuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL0NvbXBvc2FibGUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL0NvbnRlbnRGaXJzdENoaWxkVGFyZ2V0LmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9Db250ZW50SXRlbXMuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL0RpcmVjdGlvblNlbGVjdGlvbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvR2VuZXJpYy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvSXRlbVNlbGVjdGlvbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvSXRlbXNBY2Nlc3NpYmxlLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9LZXlib2FyZC5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvS2V5Ym9hcmREaXJlY3Rpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL0tleWJvYXJkUGFnZWRTZWxlY3Rpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL0tleWJvYXJkUHJlZml4U2VsZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9TZWxlY3Rpb25IaWdobGlnaHQuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL1NlbGVjdGlvblNjcm9sbC5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvU3dpcGVEaXJlY3Rpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL1RhcmdldFNlbGVjdGlvbi5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvVGVtcGxhdGVTdGFtcGluZy5qcyIsInBhY2thZ2VzL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvVGltZXJTZWxlY3Rpb24uanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL1RyYWNrcGFkRGlyZWN0aW9uLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9jb21wb3NlVGVtcGxhdGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDT2UsVUFBQyxJQUFJOztjQUFXLG9CQUFvQjs7YUFBcEIsb0JBQW9COzRCQUFwQixvQkFBb0I7O29FQUFwQixvQkFBb0I7OztpQkFBcEIsb0JBQW9COzs7Ozs7K0NBS3hCLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFO0FBQ2pELHVDQU4yQixvQkFBb0IsZ0RBTVg7QUFBRSxxQ0FOWCxvQkFBb0IsMERBTXdCO1NBQUU7OztBQUFBLEFBR3pFLFlBQUksWUFBWSxHQUFHLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pELFlBQUksWUFBWSxJQUFJLElBQUksSUFBSSxFQUFFLFlBQVksSUFBSSxXQUFXLENBQUMsU0FBUyxDQUFBLEFBQUMsRUFBRTtBQUNwRSxjQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsUUFBUSxDQUFDO1NBQy9CO09BQ0Y7Ozt3Q0FFaUI7OztBQUNoQix1Q0FoQjJC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QUFVLENBQUM7Ozs7QUFBQyxBQUlsRCxNQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3hDLEtBQUcsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQzFCLFNBQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ2hDLFlBQVEsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztHQUNqRDtBQUNELFNBQU8sUUFBUSxDQUFDO0NBQ2pCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogTWFyc2hhbGwgYXR0cmlidXRlcyB0byBwcm9wZXJ0aWVzIChhbmQgZXZlbnR1YWxseSB2aWNlIHZlcnNhKS5cbiAqIE9ubHkgc3VwcG9ydHMgc3RyaW5nIHByb3BlcnRpZXMgZm9yIG5vdy5cbiAqXG4gKiBAbWl4aW4gQXR0cmlidXRlTWFyc2hhbGxpbmdcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4gY2xhc3MgQXR0cmlidXRlTWFyc2hhbGxpbmcgZXh0ZW5kcyBiYXNlIHtcblxuICAvKlxuICAgKiBIYW5kbGUgYSBjaGFuZ2UgdG8gdGhlIGF0dHJpYnV0ZSB3aXRoIHRoZSBnaXZlbiBuYW1lLlxuICAgKi9cbiAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgIGlmIChzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2spIHsgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKCk7IH1cbiAgICAvLyBJZiB0aGUgYXR0cmlidXRlIG5hbWUgY29ycmVzcG9uZHMgdG8gYSBwcm9wZXJ0eSBuYW1lLCB0aGVuIHNldCB0aGF0XG4gICAgLy8gcHJvcGVydHkuIElnbm9yZSBjaGFuZ2VzIGluIHN0YW5kYXJkIEhUTUxFbGVtZW50IHByb3BlcnRpZXMuXG4gICAgbGV0IHByb3BlcnR5TmFtZSA9IGF0dHJpYnV0ZVRvUHJvcGVydHlOYW1lKG5hbWUpO1xuICAgIGlmIChwcm9wZXJ0eU5hbWUgaW4gdGhpcyAmJiAhKHByb3BlcnR5TmFtZSBpbiBIVE1MRWxlbWVudC5wcm90b3R5cGUpKSB7XG4gICAgICB0aGlzW3Byb3BlcnR5TmFtZV0gPSBuZXdWYWx1ZTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgIFtdLmZvckVhY2guY2FsbCh0aGlzLmF0dHJpYnV0ZXMsIGF0dHJpYnV0ZSA9PiB7XG4gICAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhhdHRyaWJ1dGUubmFtZSwgdW5kZWZpbmVkLCBhdHRyaWJ1dGUudmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbn07XG5cblxuLy8gQ29udmVydCBjYW1lbCBjYXNlIGZvb0JhciBuYW1lIHRvIGh5cGhlbmF0ZWQgZm9vLWJhci5cbmZ1bmN0aW9uIGF0dHJpYnV0ZVRvUHJvcGVydHlOYW1lKGF0dHJpYnV0ZU5hbWUpIHtcbiAgbGV0IHByb3BlcnR5TmFtZSA9IGF0dHJpYnV0ZU5hbWUucmVwbGFjZSgvLShbYS16XSkvZywgbSA9PiBtWzFdLnRvVXBwZXJDYXNlKCkpO1xuICByZXR1cm4gcHJvcGVydHlOYW1lO1xufVxuXG4vLyBDb252ZXJ0IGh5cGhlbmF0ZWQgZm9vLWJhciBuYW1lIHRvIGNhbWVsIGNhc2UgZm9vQmFyLlxuLy8gVE9ETzogVXNlIHRoaXMgd2hlbiB3ZSBzdXBwb3J0IHJlZmxlY3Rpb24gb2YgcHJvcGVydGllcyB0byBhdHRyaWJ1dGVzLlxuLy8gZnVuY3Rpb24gcHJvcGVydHlUb0F0dHJpYnV0ZU5hbWUocHJvcGVydHlOYW1lKSB7XG4vLyAgIGxldCBhdHRyaWJ1dGVOYW1lID0gcHJvcGVydHlOYW1lLnJlcGxhY2UoLyhbYS16XVtBLVpdKS9nLCBnID0+IGdbMF0gKyAnLScgKyBnWzFdLnRvTG93ZXJDYXNlKCkpO1xuLy8gICByZXR1cm4gYXR0cmlidXRlTmFtZTtcbi8vIH1cbiIsIi8qKlxuICogTWl4aW4gdG8gc3VwcG9ydCBQb2x5bWVyLXN0eWxlIGF1dG9tYXRpYyBub2RlIGZpbmRpbmcuXG4gKlxuICogVGhpcyBhZGRzIGEgbWVtYmVyIG9uIHRoZSBjb21wb25lbnQgY2FsbGVkIGAkYCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlZmVyZW5jZVxuICogZWxlbWVudHMgd2l0aCBJRHMuIEUuZy4sIGlmIGNvbXBvbmVudCdzIHNoYWRvdyBjb250YWlucyBhbiBlbGVtZW50XG4gKiBgPGJ1dHRvbiBpZD1cImZvb1wiPmAsIHRoZW4gdGhpcyBtaXhpbiB3aWxsIGNyZWF0ZSBhIG1lbWJlciBgdGhpcy4kLmZvb2AgdGhhdFxuICogcG9pbnRzIHRvIHRoYXQgYnV0dG9uLiBTdWNoIHJlZmVyZW5jZXMgc2ltcGxpZnkgYSBjb21wb25lbnQncyBhY2Nlc3MgdG8gaXRzXG4gKiBvd24gZWxlbWVudHMuXG4gKlxuICogVGhpcyB0cmFkZXMgb2ZmIGEgb25lLXRpbWUgY29zdCBvZiBxdWVyeWluZyBhbGwgZWxlbWVudHMgaW4gdGhlIHNoYWRvdyB0cmVlXG4gKiBhZ2FpbnN0IGhhdmluZyB0byBxdWVyeSBmb3IgYW4gZWxlbWVudCBlYWNoIHRpbWUgdGhlIGNvbXBvbmVudCB3YW50cyB0b1xuICogaW5zcGVjdCBvciBtYW5pcHVsYXRlIGl0LlxuICpcbiAqIFNlZSBodHRwczovL3d3dy5wb2x5bWVyLXByb2plY3Qub3JnLzEuMC9kb2NzL2Rldmd1aWRlL2xvY2FsLWRvbS5odG1sI25vZGUtZmluZGluZy5cbiAqXG4gKiBAbWl4aW4gQXV0b21hdGljTm9kZUZpbmRpbmdcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4gY2xhc3MgQXV0b21hdGljTm9kZUZpbmRpbmcgZXh0ZW5kcyBiYXNlIHtcblxuICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgIGlmICh0aGlzLnNoYWRvd1Jvb3QpIHtcbiAgICAgIHRoaXMuJCA9IHt9O1xuICAgICAgbGV0IG5vZGVzV2l0aElkcyA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKCdbaWRdJyk7XG4gICAgICBbXS5mb3JFYWNoLmNhbGwobm9kZXNXaXRoSWRzLCBub2RlID0+IHtcbiAgICAgICAgbGV0IGlkID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgIHRoaXMuJFtpZF0gPSBub2RlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbn07XG4iLCIvKipcbiAqIE1peGluIHRoYXQgZGVmaW5lcyBhIGNvbXBvbmVudCdzIGNvbnRlbnQgYXMgaXRzIGNoaWxkcmVuLlxuICpcbiAqIEBtaXhpbiBDaGlsZHJlbkNvbnRlbnRcbiAqL1xuXG4vLyBUT0RPOiBGYWN0b3IgY29udGVudCBjaGFuZ2UgdHJhY2tpbmcgaW50byBpdHMgb3duIG1peGluLlxuLy8gVE9ETzogRG9uJ3QgcmVzcG9uZCB0byBjaGFuZ2VzIGluIGF0dHJpYnV0ZXMsIG9yIGF0IGxlYXN0IG9mZmVyIHRoYXQgYXMgYW5cbi8vIG9wdGlvbi5cblxuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IGNsYXNzIENoaWxkcmVuQ29udGVudCBleHRlbmRzIGJhc2Uge1xuXG4gIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgLy8gVW50aWwgd2UgaGF2ZSBjb250ZW50IG9ic2VydmluZyBhZ2FpbiwgZm9yY2UgYSBjYWxsIHRvIGNvbnRlbnRDaGFuZ2VkKCkuXG4gICAgLy8gSEFDSzogRG8gdGhpcyBhc3luY2hyb25vdXNseSwgc28gb3RoZXIgbWl4aW5zIGhhdmUgYSBjaGFuY2UgdG8gc2V0IHVwXG4gICAgLy8gYmVmb3JlIHRoaXMgY2FsbC5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY29udGVudENoYW5nZWQoKSk7XG5cbiAgICBvYnNlcnZlQ29udGVudENoYW5nZXModGhpcyk7XG4gIH1cblxuICBjb250ZW50Q2hhbmdlZCgpIHtcbiAgICBpZiAoc3VwZXIuY29udGVudENoYW5nZWQpIHsgc3VwZXIuY29udGVudENoYW5nZWQoKTsgfVxuICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnY29udGVudC1jaGFuZ2VkJyk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZmxhdHRlbmVkIGNvbnRlbnQgb2YgdGhpcyBjb21wb25lbnQuXG4gICAqXG4gICAqIEBwcm9wZXJ0eSBjb250ZW50XG4gICAqIEB0eXBlIFtPYmplY3RdXG4gICAqL1xuICBnZXQgY29udGVudCgpIHtcbiAgICByZXR1cm4gZXhwYW5kQ29udGVudEVsZW1lbnRzKHRoaXMuY2hpbGRyZW4pO1xuICB9XG4gIHNldCBjb250ZW50KHZhbHVlKSB7XG4gICAgaWYgKCdjb250ZW50JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5jb250ZW50ID0gdmFsdWU7IH1cbiAgfVxuXG4gIC8qXG4gICAqIFJldHVybnMgYW4gaW4tb3JkZXIgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgZXhwYW5kaW5nIGFueSBjb250ZW50IG5vZGVzLlxuICAgKiBMaWtlIHRoZSBzdGFuZGFyZCBjaGlsZHJlbiBwcm9wZXJ0eSwgdGhpcyBza2lwcyB0ZXh0IG5vZGVzLlxuICAgKlxuICAgKiBUT0RPOiBUaGlzIHdhbGtzIHRoZSB3aG9sZSBjb250ZW50IHRyZWUgZXZlcnkgdGltZSB0aGUgbGlzdCBpcyByZXF1ZXN0ZWQuXG4gICAqIEl0J2QgYmUgbmljZSB0byBjYWNoZSB0aGUgYW5zd2VyIGFuZCBpbnZhbGlkYXRlIGl0IG9ubHkgd2hlbiBjb250ZW50XG4gICAqIGFjdHVhbGx5IGNoYW5nZXMuXG4gICAqL1xuICBnZXQgZGlzdHJpYnV0ZWRDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gZXhwYW5kQ29udGVudEVsZW1lbnRzKHRoaXMuY2hpbGRyZW4sIGZhbHNlKTtcbiAgfVxuXG4gIC8qXG4gICAqIFJldHVybnMgYW4gaW4tb3JkZXIgY29sbGVjdGlvbiBvZiBjaGlsZCBub2RlcywgZXhwYW5kaW5nIGFueSBjb250ZW50IG5vZGVzLlxuICAgKiBMaWtlIHRoZSBzdGFuZGFyZCBjaGlsZE5vZGVzIHByb3BlcnR5LCB0aGlzIGluY2x1ZGVzIHRleHQgbm9kZXMuXG4gICAqL1xuICBnZXQgZGlzdHJpYnV0ZWRDaGlsZE5vZGVzKCkge1xuICAgIHJldHVybiBleHBhbmRDb250ZW50RWxlbWVudHModGhpcy5jaGlsZE5vZGVzLCB0cnVlKTtcbiAgfVxuXG4gIC8qXG4gICAqIFJldHVybnMgdGhlIGNvbmNhdGVuYXRlZCB0ZXh0IGNvbnRlbnQgb2YgYWxsIGNoaWxkIG5vZGVzLCBleHBhbmRpbmcgYW55XG4gICAqIGNvbnRlbnQgbm9kZXMuXG4gICAqL1xuICBnZXQgZGlzdHJpYnV0ZWRUZXh0Q29udGVudCgpIHtcbiAgICBsZXQgc3RyaW5ncyA9IHRoaXMuZGlzdHJpYnV0ZWRDaGlsZE5vZGVzLm1hcChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgcmV0dXJuIGNoaWxkLnRleHRDb250ZW50O1xuICAgIH0pO1xuICAgIHJldHVybiBzdHJpbmdzLmpvaW4oJycpO1xuICB9XG5cbn07XG5cblxuLypcbiAqIEdpdmVuIGEgYXJyYXkgb2Ygbm9kZXMsIHJldHVybiBhIG5ldyBhcnJheSB3aXRoIGFueSBjb250ZW50IGVsZW1lbnRzIGV4cGFuZGVkXG4gKiB0byB0aGUgbm9kZXMgZGlzdHJpYnV0ZWQgdG8gdGhhdCBjb250ZW50IGVsZW1lbnQuIFRoaXMgcnVsZSBpcyBhcHBsaWVkXG4gKiByZWN1cnNpdmVseS5cbiAqXG4gKiBJZiBpbmNsdWRlVGV4dE5vZGVzIGlzIHRydWUsIHRleHQgbm9kZXMgd2lsbCBiZSBpbmNsdWRlZCwgYXMgaW4gdGhlXG4gKiBzdGFuZGFyZCBjaGlsZE5vZGVzIHByb3BlcnR5OyBieSBkZWZhdWx0LCB0aGlzIHNraXBzIHRleHQgbm9kZXMsIGxpa2UgdGhlXG4gKiBzdGFuZGFyZCBjaGlsZHJlbiBwcm9wZXJ0eS5cbiAqL1xuZnVuY3Rpb24gZXhwYW5kQ29udGVudEVsZW1lbnRzKG5vZGVzLCBpbmNsdWRlVGV4dE5vZGVzKSB7XG4gIGxldCBleHBhbmRlZCA9IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChub2Rlcywgbm9kZSA9PiB7XG4gICAgLy8gV2Ugd2FudCB0byBzZWUgaWYgdGhlIG5vZGUgaXMgYW4gaW5zdGFuY2VvZiBIVE1MQ29udGVudEVsZW1lbnQsIGJ1dFxuICAgIC8vIHRoYXQgY2xhc3Mgd29uJ3QgZXhpc3QgaWYgdGhlIGJyb3dzZXIgdGhhdCBkb2Vzbid0IHN1cHBvcnQgbmF0aXZlXG4gICAgLy8gU2hhZG93IERPTSBhbmQgaWYgdGhlIFNoYWRvdyBET00gcG9seWZpbGwgaGFzbid0IGJlZW4gbG9hZGVkLiBJbnN0ZWFkLFxuICAgIC8vIHdlIGRvIGEgc2ltcGxpc3RpYyBjaGVjayB0byBzZWUgaWYgdGhlIHRhZyBuYW1lIGlzIFwiY29udGVudFwiLlxuICAgIGlmIChub2RlLmxvY2FsTmFtZSAmJiBub2RlLmxvY2FsTmFtZSA9PT0gXCJjb250ZW50XCIpIHtcbiAgICAgIC8vIGNvbnRlbnQgZWxlbWVudDsgdXNlIGl0cyBkaXN0cmlidXRlZCBub2RlcyBpbnN0ZWFkLlxuICAgICAgbGV0IGRpc3RyaWJ1dGVkTm9kZXMgPSBub2RlLmdldERpc3RyaWJ1dGVkTm9kZXMoKTtcbiAgICAgIHJldHVybiBkaXN0cmlidXRlZE5vZGVzID9cbiAgICAgICAgZXhwYW5kQ29udGVudEVsZW1lbnRzKGRpc3RyaWJ1dGVkTm9kZXMsIGluY2x1ZGVUZXh0Tm9kZXMpIDpcbiAgICAgICAgW107XG4gICAgfSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIC8vIFBsYWluIGVsZW1lbnQ7IHVzZSBhcyBpcy5cbiAgICAgIHJldHVybiBbbm9kZV07XG4gICAgfSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgVGV4dCAmJiBpbmNsdWRlVGV4dE5vZGVzKSB7XG4gICAgICAvLyBUZXh0IG5vZGUuXG4gICAgICByZXR1cm4gW25vZGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDb21tZW50LCBwcm9jZXNzaW5nIGluc3RydWN0aW9uLCBldGMuOyBza2lwLlxuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfSk7XG4gIGxldCBmbGF0dGVuZWQgPSBbXS5jb25jYXQoLi4uZXhwYW5kZWQpO1xuICByZXR1cm4gZmxhdHRlbmVkO1xufVxuXG5cbmZ1bmN0aW9uIG9ic2VydmVDb250ZW50Q2hhbmdlcyhlbGVtZW50KSB7XG4gIGVsZW1lbnQuX2NvbnRlbnRDaGFuZ2VPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+XG4gICAgZWxlbWVudC5jb250ZW50Q2hhbmdlZCgpXG4gICk7XG4gIGVsZW1lbnQuX2NvbnRlbnRDaGFuZ2VPYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIHtcbiAgICAvLyBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG4gICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgIHN1YnRyZWU6IHRydWVcbiAgfSk7XG59XG4iLCIvKipcbiAqIE1peGluIHdoaWNoIG1hcHMgYSBjbGljayAoYWN0dWFsbHksIGEgbW91c2Vkb3duKSB0byBzZWxlY3Rpb24uXG4gKlxuICogSWYgdGhlIHVzZXIgY2xpY2tzIGFuIGVsZW1lbnQsIGFuZCB0aGUgZWxlbWVudCBpcyBhbiBpdGVtIGluIHRoZSBsaXN0LCB0aGVuXG4gKiB0aGUgY29tcG9uZW50J3Mgc2VsZWN0ZWRJbmRleCB3aWxsIGJlIHNldCB0byB0aGUgaW5kZXggZm9yIHRoYXQgaXRlbS5cbiAqXG4gKiBAbWl4aW4gQ2xpY2tTZWxlY3Rpb25cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4gY2xhc3MgQ2xpY2tTZWxlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgIC8qXG4gICAgICogUkVWSUVXOiBXaGljaCBldmVudCBzaG91bGQgd2UgbGlzdGVuIHRvIGhlcmU/XG4gICAgICpcbiAgICAgKiBUaGUgc3RhbmRhcmQgdXNlIGZvciB0aGlzIG1peGluIGlzIGluIGxpc3QgYm94ZXMuIExpc3QgYm94ZXMgZG9uJ3RcbiAgICAgKiBhcHBlYXIgdG8gYmUgY29uc2lzdGVudCB3aXRoIHJlZ2FyZCB0byB3aGV0aGVyIHRoZXkgc2VsZWN0IG9uIG1vdXNlZG93blxuICAgICAqIG9yIGNsaWNrL21vdXNldXAuXG4gICAgICovXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBldmVudCA9PiB7XG4gICAgICBzZWxlY3RUYXJnZXQodGhpcywgZXZlbnQudGFyZ2V0KTtcbiAgICAgIC8vIE5vdGU6IFdlIGRvbid0IGNhbGwgcHJldmVudERlZmF1bHQgaGVyZS4gVGhlIGRlZmF1bHQgYmVoYXZpb3IgZm9yXG4gICAgICAvLyBtb3VzZWRvd24gaW5jbHVkZXMgc2V0dGluZyBrZXlib2FyZCBmb2N1cyBpZiB0aGUgZWxlbWVudCBkb2Vzbid0XG4gICAgICAvLyBhbHJlYWR5IGhhdmUgdGhlIGZvY3VzLCBhbmQgd2Ugd2FudCB0byBwcmVzZXJ2ZSB0aGF0IGJlaGF2aW9yLlxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9uLiBUaGlzIHdpbGwgdHlwaWNhbGx5IGJlIGhhbmRsZWQgYnkgb3RoZXIgbWl4aW5zLlxuICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRJbmRleDtcbiAgfVxuICBzZXQgc2VsZWN0ZWRJbmRleChpbmRleCkge1xuICAgIGlmICgnc2VsZWN0ZWRJbmRleCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJbmRleCA9IGluZGV4OyB9XG4gIH1cblxufTtcblxuLy8gVE9ETzogSGFuZGxlIHRoZSBjYXNlIHdoZXJlIGEgbGlzdCBpdGVtIGhhcyBzdWJlbGVtZW50cy4gV2FsayB1cCB0aGUgRE9NXG4vLyBoaWVyYXJjaHkgdW50aWwgd2UgZmluZCBhbiBpdGVtIGluIHRoZSBsaXN0LCBvciBjb21lIGJhY2sgdG8gdGhpcyBlbGVtZW50LFxuLy8gaW4gd2hpY2ggY2FzZSB0aGUgZWxlbWVudCB0aGF0IHdhcyB0YXBwZWQgaXNuJ3QgYW4gaXRlbSAoYW5kIHNob3VsZCBiZVxuLy8gaWdub3JlZCkuXG5mdW5jdGlvbiBzZWxlY3RUYXJnZXQoZWxlbWVudCwgdGFyZ2V0KSB7XG4gIGxldCBpbmRleCA9IGVsZW1lbnQuaW5kZXhPZkl0ZW0gJiYgZWxlbWVudC5pbmRleE9mSXRlbSh0YXJnZXQpO1xuICBpZiAoaW5kZXggPj0gMCkge1xuICAgIGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICB9XG59XG4iLCIvKipcbiAqIE1peGluIHdoaWNoIGFsbG93cyBhIGNvbXBvbmVudCB0byBwcm92aWRlIGFnZ3JlZ2F0ZSBiZWhhdmlvciB3aXRoIG90aGVyXG4gKiBlbGVtZW50cywgZS5nLiwgZm9yIGtleWJvYXJkIGhhbmRsaW5nLlxuICpcbiAqIEBtaXhpbiBDb2xsZWN0aXZlRWxlbWVudFxuICovXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4gY2xhc3MgQ29sbGVjdGl2ZUVsZW1lbnQgZXh0ZW5kcyBiYXNlIHtcblxuICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgIHRoaXMuY29sbGVjdGl2ZSA9IG5ldyBDb2xsZWN0aXZlKHRoaXMpO1xuICB9XG5cbiAgZ2V0IHRhcmdldCgpIHtcbiAgICByZXR1cm4gc3VwZXIudGFyZ2V0O1xuICB9XG4gIHNldCB0YXJnZXQoZWxlbWVudCkge1xuICAgIGlmICgndGFyZ2V0JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci50YXJnZXQgPSBlbGVtZW50OyB9XG4gICAgdGhpcy5jb2xsZWN0aXZlLmFzc2ltaWxhdGUoZWxlbWVudCk7XG4gIH1cblxufTtcblxuXG5jbGFzcyBDb2xsZWN0aXZlIHtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5fZWxlbWVudHMgPSBbXTtcbiAgICB0aGlzLmFzc2ltaWxhdGUoZWxlbWVudCk7XG4gIH1cblxuICBhc3NpbWlsYXRlKHRhcmdldCkge1xuICAgIGxldCBlbGVtZW50cyA9IHRhcmdldC5jb2xsZWN0aXZlID9cbiAgICAgIHRhcmdldC5jb2xsZWN0aXZlLmVsZW1lbnRzIDpcbiAgICAgIFt0YXJnZXRdO1xuICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBlbGVtZW50LmNvbGxlY3RpdmUgPSB0aGlzO1xuICAgICAgdGhpcy5fZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9KTtcbiAgICB0aGlzLmludm9rZUNvbGxlY3RpdmVNZXRob2QoJ2NvbGxlY3RpdmVDaGFuZ2VkJyk7XG4gIH1cblxuICBnZXQgZWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRzO1xuICB9XG5cbiAgaW52b2tlQ29sbGVjdGl2ZU1ldGhvZChtZXRob2QsIC4uLmFyZ3MpIHtcbiAgICAvLyBJbnZva2UgZnJvbSBpbm5lcm1vc3QgdG8gb3V0ZXJtb3N0LlxuICAgIGxldCBlbGVtZW50cyA9IHRoaXMuZWxlbWVudHM7XG4gICAgZm9yIChsZXQgaSA9IGVsZW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuICAgICAgaWYgKGVsZW1lbnRbbWV0aG9kXSkge1xuICAgICAgICBlbGVtZW50W21ldGhvZF0uYXBwbHkoZWxlbWVudCwgYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0IG91dGVybW9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudHNbMF07XG4gIH1cblxufVxuIiwiLyoqXG4gKiBNaXhpbiB0byBtYWtlIGEgY2xhc3MgbW9yZSBlYXNpbHkgY29tcG9zYWJsZSB3aXRoIG90aGVyIG1peGlucy5cbiAqXG4gKiBUaGUgbWFpbiBjb250cmlidXRpb24gaXMgdGhlIGludHJvZHVjdGlvbiBvZiBhIGBjb21wb3NlYCBtZXRob2QgdGhhdCBhcHBsaWVzXG4gKiBhIHNldCBvZiBtaXhpbiBmdW5jdGlvbnMgYW5kIHJldHVybnMgdGhlIHJlc3VsdGluZyBuZXcgY2xhc3MuIFRoaXMgc3VnYXJcbiAqIGNhbiBtYWtlIHRoZSBhcHBsaWNhdGlvbiBvZiBtYW55IG1peGlucyBhdCBvbmNlIGVhc2llciB0byByZWFkLlxuICpcbiAqIEBtaXhpbiBDb21wb3NhYmxlXG4gKi9cblxuXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4gY2xhc3MgQ29tcG9zYWJsZSBleHRlbmRzIGJhc2Uge1xuXG4gIC8qKlxuICAgKiBBcHBseSBhIHNldCBvZiBtaXhpbiBmdW5jdGlvbnMgb3IgbWl4aW4gb2JqZWN0cyB0byB0aGUgcHJlc2VudCBjbGFzcyBhbmRcbiAgICogcmV0dXJuIHRoZSBuZXcgY2xhc3MuXG4gICAqXG4gICAqIEEgY2FsbCBsaWtlXG4gICAqXG4gICAqICAgICBsZXQgTXlDbGFzcyA9IE1peGluMShNaXhpbjIoTWl4aW4zKE1peGluNChNaXhpbjUoQmFzZUNsYXNzKSkpKSk7XG4gICAqXG4gICAqIENhbiBiZSBjb252ZXJ0ZWQgdG86XG4gICAqXG4gICAqICAgICBsZXQgTXlDbGFzcyA9IENvbXBvc2FibGUoQmFzZUNsYXNzKS5jb21wb3NlKFxuICAgKiAgICAgICBNaXhpbjEsXG4gICAqICAgICAgIE1peGluMixcbiAgICogICAgICAgTWl4aW4zLFxuICAgKiAgICAgICBNaXhpbjQsXG4gICAqICAgICAgIE1peGluNVxuICAgKiAgICAgKTtcbiAgICpcbiAgICogVGhpcyBmdW5jdGlvbiBjYW4gYWxzbyB0YWtlIG1peGluIG9iamVjdHMuIEEgbWl4aW4gb2JqZWN0IGlzIGp1c3QgYVxuICAgKiBzaG9ydGhhbmQgZm9yIGEgbWl4aW4gZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgbmV3IHN1YmNsYXNzIHdpdGggdGhlIGdpdmVuXG4gICAqIG1lbWJlcnMuIFRoZSBtaXhpbiBvYmplY3QncyBtZW1iZXJzIGFyZSAqbm90KiBjb3BpZWQgZGlyZWN0bHkgb250byB0aGVcbiAgICogcHJvdG90eXBlIG9mIHRoZSBiYXNlIGNsYXNzLCBhcyB3aXRoIHRyYWRpdGlvbmFsIG1peGlucy5cbiAgICovXG4gIHN0YXRpYyBjb21wb3NlKC4uLm1peGlucykge1xuICAgIC8vIFdlIGNyZWF0ZSBhIG5ldyBzdWJjbGFzcyBmb3IgZWFjaCBtaXhpbiBpbiB0dXJuLiBUaGUgcmVzdWx0IGJlY29tZXNcbiAgICAvLyB0aGUgYmFzZSBjbGFzcyBleHRlbmRlZCBieSBhbnkgc3Vic2VxdWVudCBtaXhpbnMuIEl0IHR1cm5zIG91dCB0aGF0XG4gICAgLy8gd2UgY2FuIHVzZSBBcnJheS5yZWR1Y2UoKSB0byBjb25jaXNlbHkgZXhwcmVzcyB0aGlzLCB1c2luZyB0aGUgY3VycmVudFxuICAgIC8vIG9iamVjdCBhcyB0aGUgc2VlZCBmb3IgcmVkdWNlKCkuXG4gICAgcmV0dXJuIG1peGlucy5yZWR1Y2UoY29tcG9zZUNsYXNzLCB0aGlzKTtcbiAgfVxuXG59O1xuXG5cbi8vIFByb3BlcnRpZXMgZGVmaW5lZCBieSBPYmplY3QgdGhhdCB3ZSBkb24ndCB3YW50IHRvIG1peGluLlxuY29uc3QgTk9OX01JWEFCTEVfT0JKRUNUX1BST1BFUlRJRVMgPSBbXG4gICdjb25zdHJ1Y3Rvcidcbl07XG5cbi8qXG4gKiBBcHBseSB0aGUgbWl4aW4gdG8gdGhlIGdpdmVuIGJhc2UgY2xhc3MgdG8gcmV0dXJuIGEgbmV3IGNsYXNzLlxuICogVGhlIG1peGluIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG1vZGlmaWVkIGNsYXNzLCBvciBhXG4gKiBwbGFpbiBvYmplY3Qgd2hvc2UgbWVtYmVycyB3aWxsIGJlIGNvcGllZCB0byB0aGUgbmV3IGNsYXNzJyBwcm90b3R5cGUuXG4gKi9cbmZ1bmN0aW9uIGNvbXBvc2VDbGFzcyhiYXNlLCBtaXhpbikge1xuICBpZiAodHlwZW9mIG1peGluID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gTWl4aW4gZnVuY3Rpb25cbiAgICByZXR1cm4gbWl4aW4oYmFzZSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gTWl4aW4gb2JqZWN0XG4gICAgY2xhc3MgU3ViY2xhc3MgZXh0ZW5kcyBiYXNlIHt9XG4gICAgY29weU93blByb3BlcnRpZXMobWl4aW4sIFN1YmNsYXNzLnByb3RvdHlwZSwgTk9OX01JWEFCTEVfT0JKRUNUX1BST1BFUlRJRVMpO1xuICAgIHJldHVybiBTdWJjbGFzcztcbiAgfVxufVxuXG5cbi8qXG4gKiBDb3B5IHRoZSBnaXZlbiBwcm9wZXJ0aWVzL21ldGhvZHMgdG8gdGhlIHRhcmdldC5cbiAqIFJldHVybiB0aGUgdXBkYXRlZCB0YXJnZXQuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPd25Qcm9wZXJ0aWVzKHNvdXJjZSwgdGFyZ2V0LCBpZ25vcmVQcm9wZXJ0eU5hbWVzID0gW10pIHtcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgIGlmIChpZ25vcmVQcm9wZXJ0eU5hbWVzLmluZGV4T2YobmFtZSkgPCAwKSB7XG4gICAgICBsZXQgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBuYW1lKTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0YXJnZXQ7XG59XG4iLCIvKipcbiAqIE1peGluIHRoYXQgZGVmaW5lcyB0aGUgdGFyZ2V0IG9mIGEgY29tcG9uZW50IC0tIHRoZSBlbGVtZW50IHRoZSBjb21wb25lbnQgaXNcbiAqIG1hbmFnaW5nIG9yIHNvbWVob3cgcmVzcG9uc2libGUgZm9yIC0tIGFzIGl0cyBmaXJzdCBjaGlsZC5cbiAqXG4gKiBAbWl4aW4gQ29udGVudEZpcnN0Q2hpbGRUYXJnZXRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4gY2xhc3MgQ29udGVudEZpcnN0Q2hpbGRUYXJnZXQgZXh0ZW5kcyBiYXNlIHtcblxuICBjb250ZW50Q2hhbmdlZCgpIHtcbiAgICBpZiAoc3VwZXIuY29udGVudENoYW5nZWQpIHsgc3VwZXIuY29udGVudENoYW5nZWQoKTsgfVxuICAgIGxldCBjb250ZW50ID0gdGhpcy5jb250ZW50O1xuICAgIGxldCB0YXJnZXQgPSBjb250ZW50ICYmIGNvbnRlbnRbMF07XG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFyZ2V0O1xuICB9XG4gIHNldCB0YXJnZXQoZWxlbWVudCkge1xuICAgIGlmICgndGFyZ2V0JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci50YXJnZXQgPSBlbGVtZW50OyB9XG4gICAgdGhpcy5fdGFyZ2V0ID0gZWxlbWVudDtcbiAgfVxuXG59O1xuIiwiLyoqXG4gKiBNaXhpbiB0aGF0IG1hcHMgY29udGVudCBzZW1hbnRpY3MgKGNoaWxkcmVuKSB0byBsaXN0IGl0ZW0gc2VtYW50aWNzLlxuICpcbiAqIEl0ZW1zIGRpZmZlciBmcm9tIGNoaWxkcmVuIGluIHNldmVyYWwgd2F5czpcbiAqXG4gKiAqIFRoZXkgY2FuIGJlIHJlZmVyZW5jZWQgdmlhIGluZGV4LlxuICogKiBUaGV5IGNhbiBoYXZlIGEgc2VsZWN0aW9uIHN0YXRlLlxuICogKiBBdXhpbGlhcnkgaW52aXNpYmxlIGNoaWxkIGVsZW1lbnRzIGFyZSBmaWx0ZXJlZCBvdXQgYW5kIG5vdCBjb3VudGVkIGFzXG4gKiAgIGl0ZW1zLiBBdXhpbGlhcnkgZWxlbWVudHMgaW5jbHVkZSBsaW5rLCBzY3JpcHQsIHN0eWxlLCBhbmQgdGVtcGxhdGVcbiAqICAgZWxlbWVudHMuXG4gKlxuICogQG1peGluIENvbnRlbnRJdGVtc1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiBjbGFzcyBDb250ZW50SXRlbXMgZXh0ZW5kcyBiYXNlIHtcblxuICBhcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCkge1xuICAgIGlmIChzdXBlci5hcHBseVNlbGVjdGlvbikgeyBzdXBlci5hcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCk7IH1cbiAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJywgc2VsZWN0ZWQpO1xuICB9XG5cbiAgY29udGVudENoYW5nZWQoKSB7XG4gICAgaWYgKHN1cGVyLmNvbnRlbnRDaGFuZ2VkKSB7IHN1cGVyLmNvbnRlbnRDaGFuZ2VkKCk7IH1cbiAgICB0aGlzLl9pdGVtcyA9IG51bGw7XG4gICAgdGhpcy5pdGVtc0NoYW5nZWQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBwb3NpdGlvbmFsIGluZGV4IGZvciB0aGUgaW5kaWNhdGVkIGl0ZW0uXG4gICAqXG4gICAqIEBtZXRob2QgaW5kZXhPZkl0ZW1cbiAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gVGhlIGl0ZW0gd2hvc2UgaW5kZXggaXMgcmVxdWVzdGVkLlxuICAgKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgaW5kZXggb2YgdGhlIGl0ZW0sIG9yIC0xIGlmIG5vdCBmb3VuZC5cbiAgICovXG4gIGluZGV4T2ZJdGVtKGl0ZW0pIHtcbiAgICBpZiAoc3VwZXIuaW5kZXhPZkl0ZW0pIHsgc3VwZXIuaW5kZXhPZkl0ZW0oaXRlbSk7IH1cbiAgICByZXR1cm4gdGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pO1xuICB9XG5cbiAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBkb2VzIG5vdGhpbmcuXG4gIGl0ZW1BZGRlZChpdGVtKSB7XG4gICAgaWYgKHN1cGVyLml0ZW1BZGRlZCkgeyBzdXBlci5pdGVtQWRkZWQoaXRlbSk7IH1cbiAgfVxuXG4gIGl0ZW1zQ2hhbmdlZCgpIHtcbiAgICBpZiAoc3VwZXIuaXRlbXNDaGFuZ2VkKSB7IHN1cGVyLml0ZW1zQ2hhbmdlZCgpOyB9XG5cbiAgICAvLyBQZXJmb3JtIHBlci1pdGVtIGluaXRpYWxpemF0aW9uLlxuICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmICghaXRlbS5faXRlbUluaXRpYWxpemVkKSB7XG4gICAgICAgIHRoaXMuaXRlbUFkZGVkKGl0ZW0pO1xuICAgICAgICBpdGVtLl9pdGVtSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnaXRlbXMtY2hhbmdlZCcpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCBzZXQgb2YgaXRlbXMgaW4gdGhlIGxpc3QuXG4gICAqXG4gICAqIEBwcm9wZXJ0eSBpdGVtc1xuICAgKiBAdHlwZSBbT2JqZWN0XVxuICAgKi9cbiAgLy8gVE9ETzogcHJvcGVydHkgbm90aWZpY2F0aW9ucyBzbyBlbGVtZW50cyBjYW4gYmluZCB0byB0aGlzIHByb3BlcnR5XG4gIGdldCBpdGVtcygpIHtcbiAgICBpZiAodGhpcy5faXRlbXMgPT0gbnVsbCkge1xuICAgICAgdGhpcy5faXRlbXMgPSBmaWx0ZXJBdXhpbGlhcnlFbGVtZW50cyh0aGlzLmNvbnRlbnQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gIH1cblxufTtcblxuXG4vLyBSZXR1cm4gdGhlIGdpdmVuIGVsZW1lbnRzLCBmaWx0ZXJpbmcgb3V0IGF1eGlsaWFyeSBlbGVtZW50cyB0aGF0IGFyZW4ndFxuLy8gdHlwaWNhbGx5IHZpc2libGUuIEl0ZW1zIHdoaWNoIGFyZSBub3QgZWxlbWVudHMgYXJlIHJldHVybmVkIGFzIGlzLlxuZnVuY3Rpb24gZmlsdGVyQXV4aWxpYXJ5RWxlbWVudHMoaXRlbXMpIHtcbiAgbGV0IGF1eGlsaWFyeVRhZ3MgPSBbXG4gICAgJ2xpbmsnLFxuICAgICdzY3JpcHQnLFxuICAgICdzdHlsZScsXG4gICAgJ3RlbXBsYXRlJ1xuICBdO1xuICByZXR1cm4gW10uZmlsdGVyLmNhbGwoaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gIWl0ZW0ubG9jYWxOYW1lIHx8IGF1eGlsaWFyeVRhZ3MuaW5kZXhPZihpdGVtLmxvY2FsTmFtZSkgPCAwO1xuICB9KTtcbn1cblxuXG4vKipcbiAqIEZpcmVzIHdoZW4gdGhlIGl0ZW1zIGluIHRoZSBsaXN0IGNoYW5nZS5cbiAqXG4gKiBAZXZlbnQgaXRlbXMtY2hhbmdlZFxuICovXG4iLCIvKipcbiAqIE1peGluIHdoaWNoIG1hcHMgZGlyZWN0aW9uIHNlbWFudGljcyAoZ29MZWZ0LCBnb1JpZ2h0LCBldGMuKSB0byBzZWxlY3Rpb25cbiAqIHNlbWFudGljcyAoc2VsZWN0UHJldmlvdXMsIHNlbGVjdE5leHQsIGV0Yy4pLlxuICpcbiAqIEBtaXhpbiBEaXJlY3Rpb25TZWxlY3Rpb25cbiAqL1xuXG5cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiBjbGFzcyBEaXJlY3Rpb25TZWxlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICBnb0Rvd24oKSB7XG4gICAgaWYgKHN1cGVyLmdvRG93bikgeyBzdXBlci5nb0Rvd24oKTsgfVxuICAgIHJldHVybiB0aGlzLnNlbGVjdE5leHQoKTtcbiAgfVxuXG4gIGdvRW5kKCkge1xuICAgIGlmIChzdXBlci5nb0VuZCkgeyBzdXBlci5nb0VuZCgpOyB9XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0TGFzdCgpO1xuICB9XG5cbiAgZ29MZWZ0KCkge1xuICAgIGlmIChzdXBlci5nb0xlZnQpIHsgc3VwZXIuZ29MZWZ0KCk7IH1cbiAgICByZXR1cm4gdGhpcy5zZWxlY3RQcmV2aW91cygpO1xuICB9XG5cbiAgZ29SaWdodCgpIHtcbiAgICBpZiAoc3VwZXIuZ29SaWdodCkgeyBzdXBlci5nb1JpZ2h0KCk7IH1cbiAgICByZXR1cm4gdGhpcy5zZWxlY3ROZXh0KCk7XG4gIH1cblxuICBnb1N0YXJ0KCkge1xuICAgIGlmIChzdXBlci5nb1N0YXJ0KSB7IHN1cGVyLmdvU3RhcnQoKTsgfVxuICAgIHJldHVybiB0aGlzLnNlbGVjdEZpcnN0KCk7XG4gIH1cblxuICBnb1VwKCkge1xuICAgIGlmIChzdXBlci5nb1VwKSB7IHN1cGVyLmdvVXAoKTsgfVxuICAgIHJldHVybiB0aGlzLnNlbGVjdFByZXZpb3VzKCk7XG4gIH1cblxuICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9ucy4gVGhlc2Ugd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gIHNlbGVjdEZpcnN0KCkge1xuICAgIGlmIChzdXBlci5zZWxlY3RGaXJzdCkgeyByZXR1cm4gc3VwZXIuc2VsZWN0Rmlyc3QoKTsgfVxuICB9XG4gIHNlbGVjdExhc3QoKSB7XG4gICAgaWYgKHN1cGVyLnNlbGVjdExhc3QpIHsgcmV0dXJuIHN1cGVyLnNlbGVjdExhc3QoKTsgfVxuICB9XG4gIHNlbGVjdE5leHQoKSB7XG4gICAgaWYgKHN1cGVyLnNlbGVjdE5leHQpIHsgcmV0dXJuIHN1cGVyLnNlbGVjdE5leHQoKTsgfVxuICB9XG4gIHNlbGVjdFByZXZpb3VzKCkge1xuICAgIGlmIChzdXBlci5zZWxlY3RQcmV2aW91cykgeyByZXR1cm4gc3VwZXIuc2VsZWN0UHJldmlvdXMoKTsgfVxuICB9XG5cblxufTtcbiIsIi8qKlxuICogTWl4aW4gdGhhdCBhbGxvd3MgYSBjb21wb25lbnQgdG8gc3VwcG9ydCBhIFwiZ2VuZXJpY1wiIHN0eWxlOiBhIG1pbmltYWxpc3RcbiAqIHN0eWxlIHRoYXQgY2FuIGVhc2lseSBiZSByZW1vdmVkIHRvIHJlc2V0IGl0cyB2aXN1YWwgYXBwZWFyYW5jZSB0byBhIGJhc2VsaW5lXG4gKiBzdGF0ZS5cbiAqXG4gKiBCeSBkZWZhdWx0LCBhIGNvbXBvbmVudCBzaG91bGQgcHJvdmlkZSBhIG1pbmltYWwgdmlzdWFsIHByZXNlbnRhdGlvbiB0aGF0XG4gKiBhbGxvd3MgdGhlIGNvbXBvbmVudCB0byBmdW5jdGlvbi4gSG93ZXZlciwgdGhlIG1vcmUgc3R5bGluZyB0aGUgY29tcG9uZW50XG4gKiBwcm92aWRlcyBieSBkZWZhdWx0LCB0aGUgaGFyZGVyIGl0IGJlY29tZXMgdG8gZ2V0IHRoZSBjb21wb25lbnQgdG8gZml0IGluXG4gKiBpbiBvdGhlciBzZXR0aW5ncy4gRWFjaCBDU1MgcnVsZSBoYXMgdG8gYmUgb3ZlcnJpZGRlbi4gV29yc2UsIG5ldyBDU1MgcnVsZXNcbiAqIGFkZGVkIHRvIHRoZSBkZWZhdWx0IHN0eWxlIHdvbid0IGJlIG92ZXJyaWRkZW4gYnkgZGVmYXVsdCwgbWFraW5nIGl0IGhhcmQgdG9cbiAqIGtub3cgd2hldGhlciBhIG5ldyB2ZXJzaW9uIG9mIGEgY29tcG9uZW50IHdpbGwgc3RpbGwgbG9vayBva2F5LlxuICpcbiAqIEFzIGEgY29tcHJvbWlzZSwgdGhlIHNpbXBsZSBQb2x5bWVyIGJlaGF2aW9yIGhlcmUgZGVmaW5lcyBhIFwiZ2VuZXJpY1wiXG4gKiBhdHRyaWJ1dGUuIFRoaXMgYXR0cmlidXRlIGlzIG5vcm1hbGx5IHNldCBieSBkZWZhdWx0LCBhbmQgc3R5bGVzIGNhbiBiZVxuICogd3JpdHRlbiB0aGF0IGFwcGx5IG9ubHkgd2hlbiB0aGUgZ2VuZXJpYyBhdHRyaWJ1dGUgaXMgc2V0LiBUaGlzIGFsbG93cyB0aGVcbiAqIGNvbnN0cnVjdGlvbiBvZiBDU1MgcnVsZXMgdGhhdCB3aWxsIG9ubHkgYXBwbHkgdG8gZ2VuZXJpYyBjb21wb25lbnRzIGxpa2VcbiAqXG4gKiAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl0pIHtcbiAqICAgICAgIC4uLlxuICogICAgIH1cbiAqXG4gKiBUaGlzIG1ha2VzIGl0IGVhc3kgdG8gcmVtb3ZlIGFsbCBkZWZhdWx0IHN0eWxpbmcgLS0gc2V0IHRoZSBnZW5lcmljIGF0dHJpYnV0ZVxuICogdG8gZmFsc2UsIGFuZCBhbGwgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZC5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4gY2xhc3MgR2VuZXJpYyBleHRlbmRzIGJhc2Uge1xuXG4gIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG4gICAgdGhpcy5nZW5lcmljID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2dlbmVyaWMnKSB8fCB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRydWUgaWYgdGhlIGNvbXBvbmVudCB3b3VsZCBsaWtlIHRvIHJlY2VpdmUgZ2VuZXJpYyBzdHlsaW5nLlxuICAgKlxuICAgKiBUaGlzIHByb3BlcnR5IGlzIHRydWUgYnkgZGVmYXVsdCDigJTCoHNldCBpdCB0byBmYWxzZSB0byB0dXJuIG9mZiBhbGxcbiAgICogZ2VuZXJpYyBzdHlsZXMuIFRoaXMgbWFrZXMgaXQgZWFzaWVyIHRvIGFwcGx5IGN1c3RvbSBzdHlsaW5nOyB5b3Ugd29uJ3RcbiAgICogaGF2ZSB0byBleHBsaWNpdGx5IG92ZXJyaWRlIHN0eWxpbmcgeW91IGRvbid0IHdhbnQuXG4gICAqXG4gICAqIEBwcm9wZXJ0eSBnZW5lcmljXG4gICAqIEB0eXBlIEJvb2xlYW5cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgZ2V0IGdlbmVyaWMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dlbmVyaWM7XG4gIH1cbiAgc2V0IGdlbmVyaWModmFsdWUpIHtcbiAgICBpZiAoJ2dlbmVyaWMnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLmdlbmVyaWMgPSB2YWx1ZTsgfVxuICAgIC8vIFdlIHJvbGwgb3VyIG93biBhdHRyaWJ1dGUgc2V0dGluZyBzbyB0aGF0IGFuIGV4cGxpY2l0bHkgZmFsc2UgdmFsdWUgc2hvd3NcbiAgICAvLyB1cCBhcyBnZW5lcmljPVwiZmFsc2VcIi5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSAodmFsdWUgIT09ICdmYWxzZScpO1xuICAgIH1cbiAgICB0aGlzLl9nZW5lcmljID0gdmFsdWU7XG4gICAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgLy8gRXhwbGljaXRseSB1c2UgZmFsc2Ugc3RyaW5nLlxuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2dlbmVyaWMnLCAnZmFsc2UnKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgIC8vIEV4cGxpY2l0bHkgcmVtb3ZlIGF0dHJpYnV0ZS5cbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdnZW5lcmljJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFVzZSB0aGUgZW1wdHkgc3RyaW5nIHRvIGdldCBhdHRyaWJ1dGUgdG8gYXBwZWFyIHdpdGggbm8gdmFsdWUuXG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZ2VuZXJpYycsICcnKTtcbiAgICB9XG4gIH1cblxufTtcbiIsIi8qKlxuICogTWl4aW4gd2hpY2ggbWFuYWdlcyBzZWxlY3Rpb24gc2VtYW50aWNzIGZvciBpdGVtcyBpbiBhIGxpc3QuXG4gKlxuICogQG1peGluIEl0ZW1TZWxlY3Rpb25cbiAqL1xuXG5cbi8qKlxuICogRmlyZXMgd2hlbiB0aGUgc2VsZWN0ZWRJdGVtIHByb3BlcnR5IGNoYW5nZXMuXG4gKlxuICogQGV2ZW50IHNlbGVjdGVkLWl0ZW0tY2hhbmdlZFxuICogQHBhcmFtIGRldGFpbC5zZWxlY3RlZEl0ZW0gVGhlIG5ldyBzZWxlY3RlZCBpdGVtLlxuICogQHBhcmFtIGRldGFpbC5wcmV2aW91c0l0ZW0gVGhlIHByZXZpb3VzbHkgc2VsZWN0ZWQgaXRlbS5cbiAqL1xuXG4vKipcbiAqIEZpcmVzIHdoZW4gdGhlIHNlbGVjdGVkSW5kZXggcHJvcGVydHkgY2hhbmdlcy5cbiAqXG4gKiBAZXZlbnQgc2VsZWN0ZWQtaXRlbS1jaGFuZ2VkXG4gKiBAcGFyYW0gZGV0YWlsLnNlbGVjdGVkSW5kZXggVGhlIG5ldyBzZWxlY3RlZCBpbmRleC5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4gY2xhc3MgSXRlbVNlbGVjdGlvbiBleHRlbmRzIGJhc2Uge1xuXG4gIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb24uIFRoaXMgd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gIGFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKSB7XG4gICAgaWYgKHN1cGVyLmFwcGx5U2VsZWN0aW9uKSB7IHN1cGVyLmFwcGx5U2VsZWN0aW9uKGl0ZW0sIHNlbGVjdGVkKTsgfVxuICB9XG5cbiAgZ2V0IGNhblNlbGVjdE5leHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhblNlbGVjdE5leHQ7XG4gIH1cbiAgc2V0IGNhblNlbGVjdE5leHQoY2FuU2VsZWN0TmV4dCkge1xuICAgIGlmICgnY2FuU2VsZWN0TmV4dCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuY2FuU2VsZWN0TmV4dCA9IGNhblNlbGVjdE5leHQ7IH1cbiAgICB0aGlzLl9jYW5TZWxlY3ROZXh0ID0gY2FuU2VsZWN0TmV4dDtcbiAgfVxuXG4gIGdldCBjYW5TZWxlY3RQcmV2aW91cygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FuU2VsZWN0UHJldmlvdXM7XG4gIH1cbiAgc2V0IGNhblNlbGVjdFByZXZpb3VzKGNhblNlbGVjdFByZXZpb3VzKSB7XG4gICAgaWYgKCdjYW5TZWxlY3RQcmV2aW91cycgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuY2FuU2VsZWN0UHJldmlvdXMgPSBjYW5TZWxlY3RQcmV2aW91czsgfVxuICAgIHRoaXMuX2NhblNlbGVjdFByZXZpb3VzID0gY2FuU2VsZWN0UHJldmlvdXM7XG4gIH1cblxuICBpdGVtQWRkZWQoaXRlbSkge1xuICAgIGlmIChzdXBlci5pdGVtQWRkZWQpIHsgc3VwZXIuaXRlbUFkZGVkKGl0ZW0pOyB9XG4gICAgdGhpcy5hcHBseVNlbGVjdGlvbihpdGVtLCBpdGVtID09PSB0aGlzLnNlbGVjdGVkSXRlbSk7XG4gIH1cblxuICBpdGVtc0NoYW5nZWQoKSB7XG4gICAgaWYgKHN1cGVyLml0ZW1zQ2hhbmdlZCkgeyBzdXBlci5pdGVtc0NoYW5nZWQoKTsgfVxuICAgIGxldCBpbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZih0aGlzLnNlbGVjdGVkSXRlbSk7XG4gICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgLy8gU2VsZWN0ZWQgaXRlbSBpcyBubyBsb25nZXIgaW4gdGhlIGN1cnJlbnQgc2V0IG9mIGl0ZW1zLlxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBudWxsO1xuICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uUmVxdWlyZWQpIHtcbiAgICAgICAgLy8gRW5zdXJlIHNlbGVjdGlvbiwgYnV0IGRvIHRoaXMgaW4gdGhlIG5leHQgdGljayB0byBnaXZlIG90aGVyXG4gICAgICAgIC8vIG1peGlucyBhIGNoYW5jZSB0byBkbyB0aGVpciBvd24gaXRlbXNDaGFuZ2VkIHdvcmsuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZW5zdXJlU2VsZWN0aW9uKHRoaXMpO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRoZSBjaGFuZ2UgaW4gaXRlbXMgbWF5IGhhdmUgYWZmZWN0ZWQgd2hpY2ggbmF2aWdhdGlvbnMgYXJlIHBvc3NpYmxlLlxuICAgIHVwZGF0ZVBvc3NpYmxlTmF2aWdhdGlvbnModGhpcywgaW5kZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBpbmRleCBvZiB0aGUgaXRlbSB3aGljaCBpcyBjdXJyZW50bHkgc2VsZWN0ZWQsIG9yIC0xIGlmIHRoZXJlIGlzIG5vXG4gICAqIHNlbGVjdGlvbi5cbiAgICpcbiAgICogQHByb3BlcnR5IHNlbGVjdGVkSW5kZXhcbiAgICogQHR5cGUgTnVtYmVyXG4gICAqL1xuICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICBsZXQgc2VsZWN0ZWRJdGVtID0gdGhpcy5zZWxlY3RlZEl0ZW07XG5cbiAgICBpZiAoc2VsZWN0ZWRJdGVtID09IG51bGwpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBNZW1vaXplXG4gICAgbGV0IGluZGV4ID0gdGhpcy5pbmRleE9mSXRlbShzZWxlY3RlZEl0ZW0pO1xuXG4gICAgLy8gSWYgaW5kZXggPSAtMSwgc2VsZWN0aW9uIHdhc24ndCBmb3VuZC4gTW9zdCBsaWtlbHkgY2F1c2UgaXMgdGhhdCB0aGVcbiAgICAvLyBET00gd2FzIG1hbmlwdWxhdGVkIGZyb20gdW5kZXJuZWF0aCB1cy5cbiAgICAvLyBUT0RPOiBPbmNlIHdlIHRyYWNrIGNvbnRlbnQgY2hhbmdlcywgdHVybiB0aGlzIGludG8gYW4gZXhjZXB0aW9uLlxuICAgIHJldHVybiBpbmRleDtcbiAgfVxuICBzZXQgc2VsZWN0ZWRJbmRleChpbmRleCkge1xuICAgIGlmICgnc2VsZWN0ZWRJbmRleCcgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJbmRleCA9IGluZGV4OyB9XG4gICAgbGV0IGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICBsZXQgaXRlbTtcbiAgICBpZiAoaW5kZXggPCAwIHx8IGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaXRlbSA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZW0gPSBpdGVtc1tpbmRleF07XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcblxuICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnc2VsZWN0ZWQtaW5kZXgtY2hhbmdlZCcsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICBzZWxlY3RlZEluZGV4OiBpbmRleCxcbiAgICAgICAgdmFsdWU6IGluZGV4IC8vIGZvciBQb2x5bWVyIGJpbmRpbmdcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbSwgb3IgbnVsbCBpZiB0aGVyZSBpcyBubyBzZWxlY3Rpb24uXG4gICAqXG4gICAqIEBwcm9wZXJ0eSBzZWxlY3RlZEl0ZW1cbiAgICogQHR5cGUgT2JqZWN0XG4gICAqL1xuICAvLyBUT0RPOiBDb25maXJtIGl0ZW0gaXMgaW4gaXRlbXMgYmVmb3JlIHNlbGVjdGluZy5cbiAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJdGVtO1xuICB9XG4gIHNldCBzZWxlY3RlZEl0ZW0oaXRlbSkge1xuICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgbGV0IHByZXZpb3VzSXRlbSA9IHRoaXMuX3NlbGVjdGVkSXRlbTtcbiAgICBpZiAocHJldmlvdXNJdGVtKSB7XG4gICAgICAvLyBSZW1vdmUgcHJldmlvdXMgc2VsZWN0aW9uLlxuICAgICAgdGhpcy5hcHBseVNlbGVjdGlvbihwcmV2aW91c0l0ZW0sIGZhbHNlKTtcbiAgICB9XG4gICAgdGhpcy5fc2VsZWN0ZWRJdGVtID0gaXRlbTtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgdGhpcy5hcHBseVNlbGVjdGlvbihpdGVtLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBSYXRpb25hbGl6ZSB3aXRoIHNlbGVjdGVkSW5kZXggc28gd2UncmUgbm90IHJlY2FsY3VsYXRpbmcgaXRlbVxuICAgIC8vIG9yIGluZGV4IGluIGVhY2ggc2V0dGVyLlxuICAgIGxldCBpbmRleCA9IHRoaXMuaW5kZXhPZkl0ZW0oaXRlbSk7XG4gICAgdXBkYXRlUG9zc2libGVOYXZpZ2F0aW9ucyh0aGlzLCBpbmRleCk7XG5cbiAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3NlbGVjdGVkLWl0ZW0tY2hhbmdlZCcsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICBzZWxlY3RlZEl0ZW06IGl0ZW0sXG4gICAgICAgIHByZXZpb3VzSXRlbTogcHJldmlvdXNJdGVtLFxuICAgICAgICB2YWx1ZTogaXRlbSAvLyBmb3IgUG9seW1lciBiaW5kaW5nXG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3QgdGhlIGZpcnN0IGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAqXG4gICAqIEBtZXRob2Qgc2VsZWN0Rmlyc3RcbiAgICovXG4gIHNlbGVjdEZpcnN0KCkge1xuICAgIGlmIChzdXBlci5zZWxlY3RGaXJzdCkgeyBzdXBlci5zZWxlY3RGaXJzdCgpOyB9XG4gICAgcmV0dXJuIHNlbGVjdEluZGV4KHRoaXMsIDApO1xuICB9XG5cbiAgLyoqXG4gICAqIFRydWUgaWYgdGhlIGxpc3Qgc2hvdWxkIGFsd2F5cyBoYXZlIGEgc2VsZWN0aW9uIChpZiBpdCBoYXMgaXRlbXMpLlxuICAgKlxuICAgKiBAcHJvcGVydHkgc2VsZWN0aW9uUmVxdWlyZWRcbiAgICogQHR5cGUgQm9vbGVhblxuICAgKi9cbiAgZ2V0IHNlbGVjdGlvblJlcXVpcmVkKCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3Rpb25SZXF1aXJlZDtcbiAgfVxuICBzZXQgc2VsZWN0aW9uUmVxdWlyZWQoc2VsZWN0aW9uUmVxdWlyZWQpIHtcbiAgICBpZiAoJ3NlbGVjdGlvblJlcXVpcmVkJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3Rpb25SZXF1aXJlZCA9IHNlbGVjdGlvblJlcXVpcmVkOyB9XG4gICAgdGhpcy5fc2VsZWN0aW9uUmVxdWlyZWQgPSBzZWxlY3Rpb25SZXF1aXJlZDtcbiAgICBlbnN1cmVTZWxlY3Rpb24odGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogU2VsZWN0IHRoZSBsYXN0IGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAqXG4gICAqIEBtZXRob2Qgc2VsZWN0TGFzdFxuICAgKi9cbiAgc2VsZWN0TGFzdCgpIHtcbiAgICBpZiAoc3VwZXIuc2VsZWN0TGFzdCkgeyBzdXBlci5zZWxlY3RMYXN0KCk7IH1cbiAgICByZXR1cm4gc2VsZWN0SW5kZXgodGhpcywgdGhpcy5pdGVtcy5sZW5ndGggLSAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3QgdGhlIG5leHQgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICpcbiAgICogQG1ldGhvZCBzZWxlY3ROZXh0XG4gICAqL1xuICBzZWxlY3ROZXh0KCkge1xuICAgIGlmIChzdXBlci5zZWxlY3ROZXh0KSB7IHN1cGVyLnNlbGVjdE5leHQoKTsgfVxuICAgIHJldHVybiBzZWxlY3RJbmRleCh0aGlzLCB0aGlzLnNlbGVjdGVkSW5kZXggKyAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3QgdGhlIHByZXZpb3VzIGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAqXG4gICAqIEBtZXRob2Qgc2VsZWN0UHJldmlvdXNcbiAgICovXG4gIHNlbGVjdFByZXZpb3VzKCkge1xuICAgIGlmIChzdXBlci5zZWxlY3RQcmV2aW91cykgeyBzdXBlci5zZWxlY3RQcmV2aW91cygpOyB9XG4gICAgcmV0dXJuIHNlbGVjdEluZGV4KHRoaXMsIHRoaXMuc2VsZWN0ZWRJbmRleCAtIDEpO1xuICB9XG5cbn07XG5cblxuLy8gSWYgbm8gaXRlbSBpcyBzZWxlY3RlZCwgc2VsZWN0IGEgZGVmYXVsdCBpdGVtLlxuLy8gVE9ETzogSWYgdGhlIHByZXZpb3VzbHktc2VsZWN0ZWQgaXRlbSBoYXMgYmVlbiBkZWxldGVkLCB0cnkgdG8gc2VsZWN0IGFuXG4vLyBpdGVtIGFkamFjZW50IHRvIHRoZSBwb3NpdGlvbiBpdCBoZWxkLlxuZnVuY3Rpb24gZW5zdXJlU2VsZWN0aW9uKGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50LnNlbGVjdGVkSXRlbSAmJiBlbGVtZW50Lml0ZW1zICYmIGVsZW1lbnQuaXRlbXMubGVuZ3RoID4gMCkge1xuICAgIGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IDA7XG4gIH1cbn1cblxuLy8gRW5zdXJlIHRoZSBnaXZlbiBpbmRleCBpcyB3aXRoaW4gYm91bmRzLCBhbmQgc2VsZWN0IGl0IGlmIGl0J3Mgbm90IGFscmVhZHlcbi8vIHNlbGVjdGVkLlxuZnVuY3Rpb24gc2VsZWN0SW5kZXgoZWxlbWVudCwgaW5kZXgpIHtcbiAgbGV0IGJvdW5kZWRJbmRleCA9IE1hdGgubWF4KE1hdGgubWluKGluZGV4LCBlbGVtZW50Lml0ZW1zLmxlbmd0aCAtIDEpLCAwKTtcbiAgbGV0IHByZXZpb3VzSW5kZXggPSBlbGVtZW50LnNlbGVjdGVkSW5kZXg7XG4gIGlmIChwcmV2aW91c0luZGV4ICE9PSBib3VuZGVkSW5kZXgpIHtcbiAgICBlbGVtZW50LnNlbGVjdGVkSW5kZXggPSBib3VuZGVkSW5kZXg7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8vIEZvbGxvd2luZyBhIGNoYW5nZSBpbiBzZWxlY3Rpb24sIHJlcG9ydCB3aGV0aGVyIGl0J3Mgbm93IHBvc3NpYmxlIHRvXG4vLyBnbyBuZXh0L3ByZXZpb3VzIGZyb20gdGhlIGdpdmVuIGluZGV4LlxuZnVuY3Rpb24gdXBkYXRlUG9zc2libGVOYXZpZ2F0aW9ucyhlbGVtZW50LCBpbmRleCkge1xuICBsZXQgY2FuU2VsZWN0TmV4dDtcbiAgbGV0IGNhblNlbGVjdFByZXZpb3VzO1xuICBsZXQgaXRlbXMgPSBlbGVtZW50Lml0ZW1zO1xuICBpZiAoaXRlbXMgPT0gbnVsbCB8fCBpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICBjYW5TZWxlY3ROZXh0ID0gZmFsc2U7XG4gICAgY2FuU2VsZWN0UHJldmlvdXMgPSBmYWxzZTtcbiAgfSBlbHNlIGlmIChpdGVtcy5sZW5ndGggPT09IDEpIHtcbiAgICAvLyBTcGVjaWFsIGNhc2UuIElmIHRoZXJlJ3Mgbm8gc2VsZWN0aW9uLCB3ZSBkZWNsYXJlIHRoYXQgaXQncyBhbHdheXNcbiAgICAvLyBwb3NzaWJsZSB0byBnbyBuZXh0L3ByZXZpb3VzIHRvIGNyZWF0ZSBhIHNlbGVjdGlvbi5cbiAgICBjYW5TZWxlY3ROZXh0ID0gdHJ1ZTtcbiAgICBjYW5TZWxlY3RQcmV2aW91cyA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgLy8gTm9ybWFsIGNhc2U6IHdlIGhhdmUgYW4gaW5kZXggaW4gYSBsaXN0IHRoYXQgaGFzIGl0ZW1zLlxuICAgIGNhblNlbGVjdFByZXZpb3VzID0gKGluZGV4ID4gMCk7XG4gICAgY2FuU2VsZWN0TmV4dCA9IChpbmRleCA8IGl0ZW1zLmxlbmd0aCAtIDEpO1xuICB9XG4gIGVsZW1lbnQuY2FuU2VsZWN0TmV4dCA9IGNhblNlbGVjdE5leHQ7XG4gIGVsZW1lbnQuY2FuU2VsZWN0UHJldmlvdXMgPSBjYW5TZWxlY3RQcmV2aW91cztcbn1cbiIsIi8qKlxuICogTWl4aW4gd2hpY2ggbWFuYWdlcyBBUklBIHJvbGVzIGZvciBhIGNvbXBvbmVudCB0aGF0IHdhbnRzIHRvIGFjdCBhcyBhIGxpc3QuXG4gKlxuICogQG1peGluIEl0ZW1zQWNjZXNzaWJsZVxuICovXG5cblxuLy8gVXNlZCB0byBhc3NpZ24gdW5pcXVlIElEcyB0byBpdGVtIGVsZW1lbnRzIHdpdGhvdXQgSURzLlxubGV0IGlkQ291bnQgPSAwO1xuXG5cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiBjbGFzcyBJdGVtc0FjY2Vzc2libGUgZXh0ZW5kcyBiYXNlIHtcblxuICBhcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCkge1xuICAgIGlmIChzdXBlci5hcHBseVNlbGVjdGlvbikgeyBzdXBlci5hcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCk7IH1cbiAgICBpdGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIHNlbGVjdGVkKTtcbiAgICBsZXQgaXRlbUlkID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgaWYgKGl0ZW1JZCkge1xuICAgICAgdGhpcy5jb2xsZWN0aXZlLm91dGVybW9zdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnLCBpdGVtSWQpO1xuICAgIH1cbiAgfVxuXG4gIGNvbGxlY3RpdmVDaGFuZ2VkKCkge1xuICAgIGlmIChzdXBlci5jb2xsZWN0aXZlQ2hhbmdlZCkgeyBzdXBlci5jb2xsZWN0aXZlQ2hhbmdlZCgpOyB9XG5cbiAgICAvLyBFbnN1cmUgdGhlIG91dGVybW9zdCBhc3BlY3QgaGFzIGFuIEFSSUEgcm9sZS5cbiAgICBsZXQgb3V0ZXJtb3N0RWxlbWVudCA9IHRoaXMuY29sbGVjdGl2ZS5vdXRlcm1vc3RFbGVtZW50O1xuICAgIGlmICghb3V0ZXJtb3N0RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSkge1xuICAgICAgLy8gVHJ5IHRvIHByb21vdGUgYW4gQVJJQSByb2xlIGZyb20gYW4gaW5uZXIgZWxlbWVudC4gSWYgbm9uZSBpcyBmb3VuZCxcbiAgICAgIC8vIHVzZSBhIGRlZmF1bHQgcm9sZS5cbiAgICAgIGxldCByb2xlID0gZ2V0Q29sbGVjdGl2ZUFyaWFSb2xlKHRoaXMuY29sbGVjdGl2ZSkgfHwgJ2xpc3Rib3gnO1xuICAgICAgb3V0ZXJtb3N0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCByb2xlKTtcbiAgICB9XG4gICAgaWYgKCFvdXRlcm1vc3RFbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50JykpIHtcbiAgICAgIC8vIFRyeSB0byBwcm9tb3RlIGFuIEFSSUEgYWN0aXZlZGVzY2VuZGFudCB2YWx1ZSBmcm9tIGFuIGlubmVyIGVsZW1lbnQuXG4gICAgICBsZXQgZGVzY2VuZGFudCA9IGdldENvbGxlY3RpdmVBcmlhQWN0aXZlRGVzY2VuZGFudCh0aGlzLmNvbGxlY3RpdmUpO1xuICAgICAgaWYgKGRlc2NlbmRhbnQpIHtcbiAgICAgICAgb3V0ZXJtb3N0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsIGRlc2NlbmRhbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSB0aGUgQVJJQSByb2xlIGFuZCBhY3RpdmVkZXNjZW5kYW50IHZhbHVlcyBmcm9tIHRoZSBjb2xsZWN0aXZlJ3NcbiAgICAvLyBpbm5lciBlbGVtZW50cy5cbiAgICB0aGlzLmNvbGxlY3RpdmUuZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGlmIChlbGVtZW50ICE9PSBvdXRlcm1vc3RFbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKTtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoc3VwZXIuY3JlYXRlZENhbGxiYWNrKSB7IHN1cGVyLmNyZWF0ZWRDYWxsYmFjaygpOyB9XG5cbiAgICAvLyBEZXRlcm1pbmUgYSBiYXNlIGl0ZW0gSUQgYmFzZWQgb24gdGhpcyBjb21wb25lbnQncyBob3N0J3Mgb3duIElELiBUaGlzXG4gICAgLy8gd2lsbCBiZSBjb21iaW5lZCB3aXRoIGEgdW5pcXVlIGludGVnZXIgdG8gYXNzaWduIElEcyB0byBpdGVtcyB0aGF0IGRvbid0XG4gICAgLy8gaGF2ZSBhbiBleHBsaWNpdCBJRC4gSWYgdGhlIGJhc2ljLWxpc3QtYm94IGhhcyBJRCBcImZvb1wiLCB0aGVuIGl0cyBpdGVtc1xuICAgIC8vIHdpbGwgaGF2ZSBJRHMgdGhhdCBsb29rIGxpa2UgXCJfZm9vT3B0aW9uMVwiLiBJZiB0aGUgbGlzdCBoYXMgbm8gSUQgaXRzZWxmLFxuICAgIC8vIGl0cyBpdGVtcyB3aWxsIGdldCBJRHMgdGhhdCBsb29rIGxpa2UgXCJfb3B0aW9uMVwiLiBJdGVtIElEcyBhcmUgcHJlZml4ZWRcbiAgICAvLyB3aXRoIGFuIHVuZGVyc2NvcmUgdG8gZGlmZmVyZW50aWF0ZSB0aGVtIGZyb20gbWFudWFsbHktYXNzaWduZWQgSURzLCBhbmRcbiAgICAvLyB0byBtaW5pbWl6ZSB0aGUgcG90ZW50aWFsIGZvciBJRCBjb25mbGljdHMuXG4gICAgbGV0IGVsZW1lbnRJZCA9IHRoaXMuZ2V0QXR0cmlidXRlKCBcImlkXCIgKTtcbiAgICB0aGlzLml0ZW1CYXNlSWQgPSBlbGVtZW50SWQgP1xuICAgICAgICBcIl9cIiArIGVsZW1lbnRJZCArIFwiT3B0aW9uXCIgOlxuICAgICAgICBcIl9vcHRpb25cIjtcbiAgfVxuXG4gIGl0ZW1BZGRlZChpdGVtKSB7XG4gICAgaWYgKHN1cGVyLml0ZW1BZGRlZCkgeyBzdXBlci5pdGVtQWRkZWQoaXRlbSk7IH1cblxuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdyb2xlJywgJ29wdGlvbicpO1xuXG4gICAgLy8gRW5zdXJlIGVhY2ggaXRlbSBoYXMgYW4gSUQgc28gd2UgY2FuIHNldCBhcmlhLWFjdGl2ZWRlc2NlbmRhbnQgb24gdGhlXG4gICAgLy8gb3ZlcmFsbCBsaXN0IHdoZW5ldmVyIHRoZSBzZWxlY3Rpb24gY2hhbmdlcy5cbiAgICBpZiAoIWl0ZW0uZ2V0QXR0cmlidXRlKCdpZCcpKSB7XG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLml0ZW1CYXNlSWQgKyBpZENvdW50KyspO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkSXRlbTtcbiAgfVxuICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcbiAgICBpZiAoJ3NlbGVjdGVkSXRlbScgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtID0gaXRlbTsgfVxuICAgIC8vIENhdGNoIHRoZSBjYXNlIHdoZXJlIHRoZSBzZWxlY3Rpb24gaXMgcmVtb3ZlZC5cbiAgICBpZiAoaXRlbSA9PSBudWxsKSB7XG4gICAgICB0aGlzLmNvbGxlY3RpdmUub3V0ZXJtb3N0RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuICAgIH1cbiAgfVxuXG59O1xuXG5cbi8vIFJldHVybiB0aGUgZmlyc3QgQVJJQSBhY3RpdmVkZXNjZW5kYW50IGRlZmluZWQgYnkgdGhlIGNvbGxlY3RpdmUuXG5mdW5jdGlvbiBnZXRDb2xsZWN0aXZlQXJpYUFjdGl2ZURlc2NlbmRhbnQoY29sbGVjdGl2ZSkge1xuICBsZXQgZGVzY2VuZGFudHMgPSBjb2xsZWN0aXZlLmVsZW1lbnRzLm1hcChlbGVtZW50ID0+IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKSk7XG4gIHJldHVybiBkZXNjZW5kYW50cy5maW5kKGRlc2NlbmRhbnQgPT4gZGVzY2VuZGFudCAhPT0gbnVsbCk7XG59XG5cblxuLy8gUmV0dXJuIHRoZSBmaXJzdCBBUklBIGxhYmVsIGRlZmluZWQgYnkgdGhlIGNvbGxlY3RpdmUuXG5mdW5jdGlvbiBnZXRDb2xsZWN0aXZlQXJpYVJvbGUoY29sbGVjdGl2ZSkge1xuICBsZXQgcm9sZXMgPSBjb2xsZWN0aXZlLmVsZW1lbnRzLm1hcChlbGVtZW50ID0+IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyb2xlJykpO1xuICByZXR1cm4gcm9sZXMuZmluZChyb2xlID0+IHJvbGUgIT09IG51bGwpO1xufVxuIiwiLyoqXG4gKiBNaXhpbiB3aGljaCBtYW5hZ2VzIHRoZSBrZXlkb3duIGhhbmRsaW5nIGZvciBhIGNvbXBvbmVudC5cbiAqXG4gKiBUT0RPOiBEb2N1bWVudCBjb2xsZWN0aXZlIGJlaGF2aW9yLlxuICogVE9ETzogUHJvdmlkZSBiYXNlbGluZSBiZWhhdmlvciBvdXRzaWRlIG9mIGEgY29sbGVjdGl2ZS5cbiAqXG4gKiBAbWl4aW4gS2V5Ym9hcmRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4gY2xhc3MgS2V5Ym9hcmQgZXh0ZW5kcyBiYXNlIHtcblxuICAvLyBEZWZhdWx0IGtleWRvd24gaGFuZGxlci4gVGhpcyB3aWxsIHR5cGljYWxseSBiZSBoYW5kbGVkIGJ5IG90aGVyIG1peGlucy5cbiAga2V5ZG93bihldmVudCkge1xuICAgIGlmIChzdXBlci5rZXlkb3duKSB7IHJldHVybiBzdXBlci5rZXlkb3duKGV2ZW50KTsgfVxuICB9XG5cbiAgLypcbiAgICogSWYgd2UncmUgbm93IHRoZSBvdXRlcm1vc3QgZWxlbWVudCBvZiB0aGUgY29sbGVjdGl2ZSwgc2V0IHVwIHRvIHJlY2VpdmVcbiAgICoga2V5Ym9hcmQgZXZlbnRzLiBJZiB3ZSdyZSBubyBsb25nZXIgdGhlIG91dGVybW9zdCBlbGVtZW50LCBzdG9wIGxpc3RlbmluZy5cbiAgICovXG4gIGNvbGxlY3RpdmVDaGFuZ2VkKCkge1xuICAgIGlmIChzdXBlci5jb2xsZWN0aXZlQ2hhbmdlZCkgeyBzdXBlci5jb2xsZWN0aXZlQ2hhbmdlZCgpOyB9XG5cbiAgICBsZXQgb3V0ZXJtb3N0RWxlbWVudCA9IHRoaXMuY29sbGVjdGl2ZS5vdXRlcm1vc3RFbGVtZW50O1xuICAgIGlmIChvdXRlcm1vc3RFbGVtZW50ID09PSB0aGlzICYmICF0aGlzLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAvLyBTaW5jZSB3ZSdyZSBoYW5kbGluZyB0aGUga2V5Ym9hcmQsIHNlZSBpZiB3ZSBjYW4gYWRvcHQgYW4gQVJJQSBsYWJlbFxuICAgICAgLy8gZnJvbSBhbiBpbm5lciBlbGVtZW50IG9mIHRoZSBjb2xsZWN0aXZlLlxuICAgICAgbGV0IGxhYmVsID0gZ2V0Q29sbGVjdGl2ZUFyaWFMYWJlbCh0aGlzLmNvbGxlY3RpdmUpO1xuICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgbGFiZWwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSBvbmx5IHRoZSBvdXRlcm1vc3QgZWxlbWVudCBpbiB0aGUgY29sbGVjdGl2ZSBpcyBsaXN0ZW5pbmcgdG9cbiAgICAvLyB0aGUga2V5Ym9hcmQuXG4gICAgdGhpcy5jb2xsZWN0aXZlLmVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG5cbiAgICAgIGxldCBzaG91bGRMaXN0ZW4gPSAoZWxlbWVudCA9PT0gb3V0ZXJtb3N0RWxlbWVudCk7XG4gICAgICBsZXQgaXNMaXN0ZW5pbmcgPSBpc0xpc3RlbmluZ1RvS2V5ZG93bihlbGVtZW50KTtcbiAgICAgIGlmIChpc0xpc3RlbmluZyAhPT0gc2hvdWxkTGlzdGVuKSB7XG4gICAgICAgIGlmIChzaG91bGRMaXN0ZW4pIHtcbiAgICAgICAgICBzdGFydExpc3RlbmluZ1RvS2V5ZG93bihlbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdG9wTGlzdGVuaW5nVG9LZXlkb3duKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIXNob3VsZExpc3RlbiAmJiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgQVJJQSBsYWJlbCBmcm9tIGlubmVyIGVsZW1lbnQncyBub3QgaGFuZGxpbmcgdGhlIGtleWJvYXJkLlxuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpO1xuICAgICAgfVxuXG4gICAgfSk7XG4gIH1cblxufTtcblxuXG5mdW5jdGlvbiBrZXlkb3duKGV2ZW50KSB7XG5cbiAgLy8gR2l2ZSBjb2xsZWN0aXZlIGVsZW1lbnRzIGEgc2hvdCBhdCB0aGUgZXZlbnQsIHdvcmtpbmcgZnJvbSBpbm5lcm1vc3QgdG9cbiAgLy8gb3V0ZXJtb3N0ICh0aGlzIGVsZW1lbnQpLlxuICBsZXQgaGFuZGxlZDtcbiAgbGV0IGVsZW1lbnRzID0gdGhpcy5jb2xsZWN0aXZlLmVsZW1lbnRzO1xuICBmb3IgKGxldCBpID0gZWxlbWVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBsZXQgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuICAgIGhhbmRsZWQgPSBlbGVtZW50LmtleWRvd24gJiYgZWxlbWVudC5rZXlkb3duKGV2ZW50KTtcbiAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKGhhbmRsZWQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG5cblxuLy8gUmV0dXJuIHRoZSBmaXJzdCBBUklBIGxhYmVsIGRlZmluZWQgYnkgdGhlIGNvbGxlY3RpdmUuXG5mdW5jdGlvbiBnZXRDb2xsZWN0aXZlQXJpYUxhYmVsKGNvbGxlY3RpdmUpIHtcbiAgbGV0IGxhYmVscyA9IGNvbGxlY3RpdmUuZWxlbWVudHMubWFwKGVsZW1lbnQgPT4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSk7XG4gIHJldHVybiBsYWJlbHMuZmluZChsYWJlbCA9PiBsYWJlbCAhPT0gbnVsbCk7XG59XG5cblxuZnVuY3Rpb24gaXNMaXN0ZW5pbmdUb0tleWRvd24oZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudC5fa2V5ZG93bkxpc3RlbmVyICE9IG51bGw7XG59XG5cblxuZnVuY3Rpb24gc3RhcnRMaXN0ZW5pbmdUb0tleWRvd24oZWxlbWVudCkge1xuICBlbGVtZW50Ll9rZXlkb3duTGlzdGVuZXIgPSBrZXlkb3duLmJpbmQoZWxlbWVudCk7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGVsZW1lbnQuX2tleWRvd25MaXN0ZW5lcik7XG4gIGlmIChlbGVtZW50LnRhYkluZGV4IDwgMCkge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJJbmRleCcsIDApO1xuICB9XG59XG5cblxuZnVuY3Rpb24gc3RvcExpc3RlbmluZ1RvS2V5ZG93bihlbGVtZW50KSB7XG4gIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGVsZW1lbnQuX2tleWRvd25MaXN0ZW5lcik7XG4gIGVsZW1lbnQuX2tleWRvd25MaXN0ZW5lciA9IG51bGw7XG4gIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJJbmRleCcpO1xufVxuIiwiLyoqXG4gKiBNaXhpbiB3aGljaCBtYXBzIGRpcmVjdGlvbiBrZXlzIChMZWZ0LCBSaWdodCwgZXRjLikgdG8gZGlyZWN0aW9uIHNlbWFudGljc1xuICogKGdvTGVmdCwgZ29SaWdodCwgZXRjLikuXG4gKlxuICogQG1peGluIEtleWJvYXJkRGlyZWN0aW9uXG4gKi9cblxuXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4gY2xhc3MgS2V5Ym9hcmREaXJlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAvLyBEZWZhdWx0IGltcGxlbWVudGF0aW9ucy4gVGhlc2Ugd2lsbCB0eXBpY2FsbHkgYmUgaGFuZGxlZCBieSBvdGhlciBtaXhpbnMuXG4gIGdvRG93bigpIHtcbiAgICBpZiAoc3VwZXIuZ29Eb3duKSB7IHJldHVybiBzdXBlci5nb0Rvd24oKTsgfVxuICB9XG4gIGdvRW5kKCkge1xuICAgIGlmIChzdXBlci5nb0VuZCkgeyByZXR1cm4gc3VwZXIuZ29FbmQoKTsgfVxuICB9XG4gIGdvTGVmdCgpIHtcbiAgICBpZiAoc3VwZXIuZ29MZWZ0KSB7IHJldHVybiBzdXBlci5nb0xlZnQoKTsgfVxuICB9XG4gIGdvUmlnaHQoKSB7XG4gICAgaWYgKHN1cGVyLmdvUmlnaHQpIHsgcmV0dXJuIHN1cGVyLmdvUmlnaHQoKTsgfVxuICB9XG4gIGdvU3RhcnQoKSB7XG4gICAgaWYgKHN1cGVyLmdvU3RhcnQpIHsgcmV0dXJuIHN1cGVyLmdvU3RhcnQoKTsgfVxuICB9XG4gIGdvVXAoKSB7XG4gICAgaWYgKHN1cGVyLmdvVXApIHsgcmV0dXJuIHN1cGVyLmdvVXAoKTsgfVxuICB9XG5cbiAga2V5ZG93bihldmVudCkge1xuICAgIGxldCBoYW5kbGVkO1xuICAgIC8vIElnbm9yZSBMZWZ0L1JpZ2h0IGtleXMgd2hlbiBtZXRhS2V5IG9yIGFsdEtleSBtb2RpZmllciBpcyBhbHNvIHByZXNzZWQsXG4gICAgLy8gYXMgdGhlIHVzZXIgbWF5IGJlIHRyeWluZyB0byBuYXZpZ2F0ZSBiYWNrIG9yIGZvcndhcmQgaW4gdGhlIGJyb3dzZXIuXG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICBjYXNlIDM1OiAvLyBFbmRcbiAgICAgICAgaGFuZGxlZCA9IHRoaXMuZ29FbmQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM2OiAvLyBIb21lXG4gICAgICAgIGhhbmRsZWQgPSB0aGlzLmdvU3RhcnQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM3OiAvLyBMZWZ0XG4gICAgICAgIGlmICghZXZlbnQubWV0YUtleSAmJiAhZXZlbnQuYWx0S2V5KSB7XG4gICAgICAgICAgaGFuZGxlZCA9IHRoaXMuZ29MZWZ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM4OiAvLyBVcFxuICAgICAgICBoYW5kbGVkID0gZXZlbnQuYWx0S2V5ID8gdGhpcy5nb1N0YXJ0KCkgOiB0aGlzLmdvVXAoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM5OiAvLyBSaWdodFxuICAgICAgICBpZiAoIWV2ZW50Lm1ldGFLZXkgJiYgIWV2ZW50LmFsdEtleSkge1xuICAgICAgICAgIGhhbmRsZWQgPSB0aGlzLmdvUmlnaHQoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDA6IC8vIERvd25cbiAgICAgICAgaGFuZGxlZCA9IGV2ZW50LmFsdEtleSA/IHRoaXMuZ29FbmQoKSA6IHRoaXMuZ29Eb3duKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBQcmVmZXIgbWl4aW4gcmVzdWx0IGlmIGl0J3MgZGVmaW5lZCwgb3RoZXJ3aXNlIHVzZSBiYXNlIHJlc3VsdC5cbiAgICByZXR1cm4gaGFuZGxlZCB8fCAoc3VwZXIua2V5ZG93biAmJiBzdXBlci5rZXlkb3duKGV2ZW50KSk7XG4gIH1cblxufTtcbiIsIi8qKlxuICogTWl4aW4gd2hpY2ggbWFwcyBwYWdlIGtleXMgKFBhZ2UgVXAsIFBhZ2UgRG93bikgaW50byBvcGVyYXRpb25zIHRoYXQgbW92ZVxuICogdGhlIHNlbGVjdGlvbiBieSBvbmUgcGFnZS5cbiAqXG4gKiBUaGUga2V5Ym9hcmQgaW50ZXJhY3Rpb24gbW9kZWwgZ2VuZXJhbGx5IGZvbGxvd3MgdGhhdCBvZiBNaWNyb3NvZnQgV2luZG93cydcbiAqIGxpc3QgYm94ZXMgaW5zdGVhZCBvZiB0aG9zZSBpbiBPUyBYOlxuICpcbiAqICogVGhlIFBhZ2UgVXAvRG93biBhbmQgSG9tZS9FbmQga2V5cyBhY3R1YWxseSBjaGFuZ2UgdGhlIHNlbGVjdGlvbiwgcmF0aGVyXG4gKiAgIHRoYW4ganVzdCBzY3JvbGxpbmcuIFRoZSBmb3JtZXIgYmVoYXZpb3Igc2VlbXMgbW9yZSBnZW5lcmFsbHkgdXNlZnVsIGZvclxuICogICBrZXlib2FyZCB1c2Vycy5cbiAqXG4gKiAqIFByZXNzaW5nIFBhZ2UgVXAvRG93biB3aWxsIGNoYW5nZSB0aGUgc2VsZWN0aW9uIHRvIHRoZSB0b3Btb3N0L2JvdHRvbW1vc3RcbiAqICAgdmlzaWJsZSBpdGVtIGlmIHRoZSBzZWxlY3Rpb24gaXMgbm90IGFscmVhZHkgdGhlcmUuIFRoZXJlYWZ0ZXIsIHRoZSBrZXkgd2lsbFxuICogICBtb3ZlIHRoZSBzZWxlY3Rpb24gdXAvZG93biBieSBhIHBhZ2UsIGFuZCAocGVyIHRoZSBhYm92ZSBwb2ludCkgbWFrZSB0aGVcbiAqICAgc2VsZWN0ZWQgaXRlbSB2aXNpYmxlLlxuICpcbiAqIFRvIGVuc3VyZSB0aGUgc2VsZWN0ZWQgaXRlbSBpcyBpbiB2aWV3IGZvbGxvd2luZyB1c2Ugb2YgUGFnZSBVcC9Eb3duLCB1c2UgdGhlXG4gKiByZWxhdGVkIFNlbGVjdGlvblNjcm9sbCBtaXhpbi5cbiAqXG4gKiBAbWl4aW4gS2V5Ym9hcmRQYWdlZFNlbGVjdGlvblxuICovXG5cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiBjbGFzcyBLZXlib2FyZFBhZ2VkU2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAga2V5ZG93bihldmVudCkge1xuICAgIGxldCBoYW5kbGVkO1xuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgY2FzZSAzMzogLy8gUGFnZSBVcFxuICAgICAgICBoYW5kbGVkID0gdGhpcy5wYWdlVXAoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM0OiAvLyBQYWdlIERvd25cbiAgICAgICAgaGFuZGxlZCA9IHRoaXMucGFnZURvd24oKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vIFByZWZlciBtaXhpbiByZXN1bHQgaWYgaXQncyBkZWZpbmVkLCBvdGhlcndpc2UgdXNlIGJhc2UgcmVzdWx0LlxuICAgIHJldHVybiBoYW5kbGVkIHx8IChzdXBlci5rZXlkb3duICYmIHN1cGVyLmtleWRvd24oZXZlbnQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTY3JvbGwgZG93biBvbmUgcGFnZS5cbiAgICpcbiAgICogQG1ldGhvZCBwYWdlRG93blxuICAgKi9cbiAgcGFnZURvd24oKSB7XG4gICAgaWYgKHN1cGVyLnBhZ2VEb3duKSB7IHN1cGVyLnBhZ2VEb3duKCk7IH1cbiAgICByZXR1cm4gc2Nyb2xsT25lUGFnZSh0aGlzLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTY3JvbGwgdXAgb25lIHBhZ2UuXG4gICAqXG4gICAqIEBtZXRob2QgcGFnZVVwXG4gICAqL1xuICBwYWdlVXAoKSB7XG4gICAgaWYgKHN1cGVyLnBhZ2VVcCkgeyBzdXBlci5wYWdlVXAoKTsgfVxuICAgIHJldHVybiBzY3JvbGxPbmVQYWdlKHRoaXMsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZWxlbWVudCB0aGF0IHNob3VsZCBiZSBzY3JvbGxlZCB3aXRoIHRoZSBQYWdlIFVwL0Rvd24ga2V5cy5cbiAgICogRGVmYXVsdCBpcyB0aGUgY3VycmVudCBlbGVtZW50LlxuICAgKlxuICAgKiBAcHJvcGVydHkgc2Nyb2xsVGFyZ2V0XG4gICAqL1xuICBnZXQgc2Nyb2xsVGFyZ2V0KCkge1xuICAgIC8vIFByZWZlciBiYXNlIHJlc3VsdC5cbiAgICByZXR1cm4gJ3Njcm9sbFRhcmdldCcgaW4gYmFzZS5wcm90b3R5cGUgPyBzdXBlci5zY3JvbGxUYXJnZXQgOiB0aGlzO1xuICB9XG4gIHNldCBzY3JvbGxUYXJnZXQoZWxlbWVudCkge1xuICAgIGlmICgnc2Nyb2xsVGFyZ2V0JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zY3JvbGxUYXJnZXQgPSBlbGVtZW50OyB9XG4gIH1cbn07XG5cblxuLy8gUmV0dXJuIHRoZSBpdGVtIHdob3NlIGNvbnRlbnQgc3BhbnMgdGhlIGdpdmVuIHkgcG9zaXRpb24gKHJlbGF0aXZlIHRvIHRoZVxuLy8gdG9wIG9mIHRoZSBsaXN0J3Mgc2Nyb2xsaW5nIGNsaWVudCBhcmVhKSwgb3IgbnVsbCBpZiBub3QgZm91bmQuXG4vL1xuLy8gSWYgZG93bndhcmQgaXMgdHJ1ZSwgbW92ZSBkb3duIHRoZSBsaXN0IG9mIGl0ZW1zIHRvIGZpbmQgdGhlIGZpcnN0IGl0ZW1cbi8vIGZvdW5kIGF0IHRoZSBnaXZlbiB5IHBvc2l0aW9uOyBpZiBkb3dud2FyZCBpcyBmYWxzZSwgbW92ZSB1cCB0aGUgbGlzdCBvZlxuLy8gaXRlbXMgdG8gZmluZCB0aGUgbGFzdCBpdGVtIGF0IHRoYXQgcG9zaXRpb24uXG5mdW5jdGlvbiBnZXRJbmRleE9mSXRlbUF0WShlbGVtZW50LCB5LCBkb3dud2FyZCkge1xuICBsZXQgaXRlbXMgPSBlbGVtZW50Lml0ZW1zO1xuICBsZXQgc3RhcnQgPSBkb3dud2FyZCA/IDAgOiBpdGVtcy5sZW5ndGggLSAxO1xuICBsZXQgZW5kID0gZG93bndhcmQgPyBpdGVtcy5sZW5ndGggOiAwO1xuICBsZXQgc3RlcCA9IGRvd253YXJkID8gMSA6IC0xO1xuICBsZXQgc2Nyb2xsVGFyZ2V0ID0gZWxlbWVudC5zY3JvbGxUYXJnZXQ7XG4gIGxldCB0b3BPZkNsaWVudEFyZWEgPSBzY3JvbGxUYXJnZXQub2Zmc2V0VG9wICsgc2Nyb2xsVGFyZ2V0LmNsaWVudFRvcDtcblxuICAvLyBGaW5kIHRoZSBpdGVtIHNwYW5uaW5nIHRoZSBpbmRpY2F0ZWQgeSBjb29yZGluYXRlLlxuICBsZXQgaXRlbTtcbiAgbGV0IGl0ZW1JbmRleCA9IHN0YXJ0O1xuICBsZXQgaXRlbVRvcDtcbiAgbGV0IGZvdW5kID0gZmFsc2U7XG4gIHdoaWxlIChpdGVtSW5kZXggIT09IGVuZCkge1xuICAgIGl0ZW0gPSBpdGVtc1tpdGVtSW5kZXhdO1xuICAgIGl0ZW1Ub3AgPSBpdGVtLm9mZnNldFRvcCAtIHRvcE9mQ2xpZW50QXJlYTtcbiAgICBsZXQgaXRlbUJvdHRvbSA9IGl0ZW1Ub3AgKyBpdGVtLm9mZnNldEhlaWdodDtcbiAgICBpZiAoaXRlbVRvcCA8PSB5ICYmIGl0ZW1Cb3R0b20gPj0geSkge1xuICAgICAgLy8gSXRlbSBzcGFucyB0aGUgaW5kaWNhdGVkIHkgY29vcmRpbmF0ZS5cbiAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpdGVtSW5kZXggKz0gc3RlcDtcbiAgfVxuXG4gIGlmICghZm91bmQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIFdlIG1heSBoYXZlIGZvdW5kIGFuIGl0ZW0gd2hvc2UgcGFkZGluZyBzcGFucyB0aGUgZ2l2ZW4geSBjb29yZGluYXRlLFxuICAvLyBidXQgd2hvc2UgY29udGVudCBpcyBhY3R1YWxseSBhYm92ZS9iZWxvdyB0aGF0IHBvaW50LlxuICAvLyBUT0RPOiBJZiB0aGUgaXRlbSBoYXMgYSBib3JkZXIsIHRoZW4gcGFkZGluZyBzaG91bGQgYmUgaW5jbHVkZWQgaW5cbiAgLy8gY29uc2lkZXJpbmcgYSBoaXQuXG4gIGxldCBpdGVtU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGl0ZW0pO1xuICBsZXQgaXRlbVBhZGRpbmdUb3AgPSBwYXJzZUZsb2F0KGl0ZW1TdHlsZS5wYWRkaW5nVG9wKTtcbiAgbGV0IGl0ZW1QYWRkaW5nQm90dG9tID0gcGFyc2VGbG9hdChpdGVtU3R5bGUucGFkZGluZ0JvdHRvbSk7XG4gIGxldCBjb250ZW50VG9wID0gaXRlbVRvcCArIGl0ZW0uY2xpZW50VG9wICsgaXRlbVBhZGRpbmdUb3A7XG4gIGxldCBjb250ZW50Qm90dG9tID0gY29udGVudFRvcCArIGl0ZW0uY2xpZW50SGVpZ2h0IC0gaXRlbVBhZGRpbmdUb3AgLSBpdGVtUGFkZGluZ0JvdHRvbTtcbiAgaWYgKGRvd253YXJkICYmIGNvbnRlbnRUb3AgPD0geSB8fCAhZG93bndhcmQgJiYgY29udGVudEJvdHRvbSA+PSB5KSB7XG4gICAgLy8gVGhlIGluZGljYXRlZCBjb29yZGluYXRlIGhpdHMgdGhlIGFjdHVhbCBpdGVtIGNvbnRlbnQuXG4gICAgcmV0dXJuIGl0ZW1JbmRleDtcbiAgfVxuICBlbHNlIHtcbiAgICAvLyBUaGUgaW5kaWNhdGVkIGNvb3JkaW5hdGUgZmFsbHMgd2l0aGluIHRoZSBpdGVtJ3MgcGFkZGluZy4gQmFjayB1cCB0b1xuICAgIC8vIHRoZSBpdGVtIGJlbG93L2Fib3ZlIHRoZSBpdGVtIHdlIGZvdW5kIGFuZCByZXR1cm4gdGhhdC5cbiAgICByZXR1cm4gaXRlbUluZGV4IC0gc3RlcDtcbiAgfVxufVxuXG4vLyBNb3ZlIGJ5IG9uZSBwYWdlIGRvd253YXJkIChpZiBkb3dud2FyZCBpcyB0cnVlKSwgb3IgdXB3YXJkIChpZiBmYWxzZSkuXG4vLyBSZXR1cm4gdHJ1ZSBpZiB3ZSBlbmRlZCB1cCBjaGFuZ2luZyB0aGUgc2VsZWN0aW9uLCBmYWxzZSBpZiBub3QuXG4vLyBUT0RPOiBCZXR0ZXIgc3VwcG9ydCBmb3IgaG9yaXpvbnRhbCBsaXN0cy5cbmZ1bmN0aW9uIHNjcm9sbE9uZVBhZ2UoZWxlbWVudCwgZG93bndhcmQpIHtcblxuICAvLyBEZXRlcm1pbmUgdGhlIGl0ZW0gdmlzaWJsZSBqdXN0IGF0IHRoZSBlZGdlIG9mIGRpcmVjdGlvbiB3ZSdyZSBoZWFkaW5nLlxuICAvLyBXZSdsbCBzZWxlY3QgdGhhdCBpdGVtIGlmIGl0J3Mgbm90IGFscmVhZHkgc2VsZWN0ZWQuXG4gIGxldCBzY3JvbGxUYXJnZXQgPSBlbGVtZW50LnNjcm9sbFRhcmdldDtcbiAgbGV0IGVkZ2UgPSBzY3JvbGxUYXJnZXQuc2Nyb2xsVG9wICsgKGRvd253YXJkID8gc2Nyb2xsVGFyZ2V0LmNsaWVudEhlaWdodCA6IDApO1xuICBsZXQgaW5kZXhPZkl0ZW1BdEVkZ2UgPSBnZXRJbmRleE9mSXRlbUF0WShlbGVtZW50LCBlZGdlLCBkb3dud2FyZCk7XG5cbiAgbGV0IHNlbGVjdGVkSW5kZXggPSBlbGVtZW50LnNlbGVjdGVkSW5kZXg7XG4gIGxldCBuZXdJbmRleDtcbiAgaWYgKGluZGV4T2ZJdGVtQXRFZGdlICYmIHNlbGVjdGVkSW5kZXggPT09IGluZGV4T2ZJdGVtQXRFZGdlKSB7XG4gICAgLy8gVGhlIGl0ZW0gYXQgdGhlIGVkZ2Ugd2FzIGFscmVhZHkgc2VsZWN0ZWQsIHNvIHNjcm9sbCBpbiB0aGUgaW5kaWNhdGVkXG4gICAgLy8gZGlyZWN0aW9uIGJ5IG9uZSBwYWdlLiBMZWF2ZSB0aGUgbmV3IGl0ZW0gYXQgdGhhdCBlZGdlIHNlbGVjdGVkLlxuICAgIGxldCBkZWx0YSA9IChkb3dud2FyZCA/IDEgOiAtMSkgKiBzY3JvbGxUYXJnZXQuY2xpZW50SGVpZ2h0O1xuICAgIG5ld0luZGV4ID0gZ2V0SW5kZXhPZkl0ZW1BdFkoZWxlbWVudCwgZWRnZSArIGRlbHRhLCBkb3dud2FyZCk7XG4gIH1cbiAgZWxzZSB7XG4gICAgLy8gVGhlIGl0ZW0gYXQgdGhlIGVkZ2Ugd2Fzbid0IHNlbGVjdGVkIHlldC4gSW5zdGVhZCBvZiBzY3JvbGxpbmcsIHdlJ2xsXG4gICAgLy8ganVzdCBzZWxlY3QgdGhhdCBpdGVtLiBUaGF0IGlzLCB0aGUgZmlyc3QgYXR0ZW1wdCB0byBwYWdlIHVwL2Rvd25cbiAgICAvLyB1c3VhbGx5IGp1c3QgbW92ZXMgdGhlIHNlbGVjdGlvbiB0byB0aGUgZWRnZSBpbiB0aGF0IGRpcmVjdGlvbi5cbiAgICBuZXdJbmRleCA9IGluZGV4T2ZJdGVtQXRFZGdlO1xuICB9XG5cbiAgaWYgKCFuZXdJbmRleCkge1xuICAgIC8vIFdlIGNhbid0IGZpbmQgYW4gaXRlbSBpbiB0aGUgZGlyZWN0aW9uIHdlIHdhbnQgdG8gdHJhdmVsLiBTZWxlY3QgdGhlXG4gICAgLy8gbGFzdCBpdGVtIChpZiBtb3ZpbmcgZG93bndhcmQpIG9yIGZpcnN0IGl0ZW0gKGlmIG1vdmluZyB1cHdhcmQpLlxuICAgIG5ld0luZGV4ID0gKGRvd253YXJkID8gZWxlbWVudC5pdGVtcy5sZW5ndGggLSAxIDogMCk7XG4gIH1cblxuICBpZiAobmV3SW5kZXggIT09IHNlbGVjdGVkSW5kZXgpIHtcbiAgICBlbGVtZW50LnNlbGVjdGVkSW5kZXggPSBuZXdJbmRleDtcbiAgICByZXR1cm4gdHJ1ZTsgLy8gV2UgaGFuZGxlZCB0aGUgcGFnZSB1cC9kb3duIG91cnNlbHZlcy5cbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7IC8vIFdlIGRpZG4ndCBkbyBhbnl0aGluZy5cbiAgfVxufVxuIiwiLyoqXG4gKiBNaXhpbiB0aGF0IGhhbmRsZXMgbGlzdCBib3gtc3R5bGUgcHJlZml4IHR5cGluZywgaW4gd2hpY2ggdGhlIHVzZXIgY2FuIHR5cGUgYVxuICogc3RyaW5nIHRvIHNlbGVjdCB0aGUgZmlyc3QgaXRlbSB0aGF0IGJlZ2lucyB3aXRoIHRoYXQgc3RyaW5nLlxuICpcbiAqIEBtaXhpbiBLZXlib2FyZFByZWZpeFNlbGVjdGlvblxuICovXG5cbi8vIFRPRE86IElmIHRoZSBzZWxlY3Rpb24gaXMgY2hhbmdlZCBieSBzb21lIG90aGVyIG1lYW5zIChlLmcuLCBhcnJvdyBrZXlzKSBvdGhlclxuLy8gdGhhbiBwcmVmaXggdHlwaW5nLCB0aGVuIHRoYXQgYWN0IHNob3VsZCByZXNldCB0aGUgcHJlZml4LlxuXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4gY2xhc3MgS2V5Ym9hcmRQcmVmaXhTZWxlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICAvLyBpdGVtc0NoYW5nZWQoKSB7XG4gIC8vICAgdGhpcy5faXRlbVRleHRDb250ZW50cyA9IG51bGw7XG4gIC8vICAgcmVzZXRUeXBlZFByZWZpeCh0aGlzKTtcbiAgLy8gfVxuXG4gIGtleWRvd24oZXZlbnQpIHtcbiAgICBsZXQgaGFuZGxlZDtcbiAgICBsZXQgcmVzZXRQcmVmaXggPSB0cnVlO1xuXG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICBjYXNlIDg6IC8vIEJhY2tzcGFjZVxuICAgICAgICBoYW5kbGVCYWNrc3BhY2UodGhpcyk7XG4gICAgICAgIGhhbmRsZWQgPSB0cnVlO1xuICAgICAgICByZXNldFByZWZpeCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjc6IC8vIEVzY2FwZVxuICAgICAgICBoYW5kbGVkID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoIWV2ZW50LmN0cmxLZXkgJiYgIWV2ZW50Lm1ldGFLZXkgJiYgIWV2ZW50LmFsdEtleSAmJlxuICAgICAgICAgICAgZXZlbnQud2hpY2ggIT09IDMyIC8qIFNwYWNlICovKSB7XG4gICAgICAgICAgaGFuZGxlUGxhaW5DaGFyYWN0ZXIodGhpcywgU3RyaW5nLmZyb21DaGFyQ29kZShldmVudC53aGljaCkpO1xuICAgICAgICB9XG4gICAgICAgIHJlc2V0UHJlZml4ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHJlc2V0UHJlZml4KSB7XG4gICAgICByZXNldFR5cGVkUHJlZml4KHRoaXMpO1xuICAgIH1cblxuICAgIC8vIFByZWZlciBtaXhpbiByZXN1bHQgaWYgaXQncyBkZWZpbmVkLCBvdGhlcndpc2UgdXNlIGJhc2UgcmVzdWx0LlxuICAgIHJldHVybiBoYW5kbGVkIHx8IChzdXBlci5rZXlkb3duICYmIHN1cGVyLmtleWRvd24oZXZlbnQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3QgdGhlIGZpcnN0IGl0ZW0gd2hvc2UgdGV4dCBjb250ZW50IGJlZ2lucyB3aXRoIHRoZSBnaXZlbiBwcmVmaXguXG4gICAqXG4gICAqIEBtZXRob2Qgc2VsZWN0SXRlbVdpdGhUZXh0UHJlZml4XG4gICAqIEBwYXJhbSBwcmVmaXggW1N0cmluZ10gVGhlIHN0cmluZyB0byBzZWFyY2ggZm9yXG4gICAqL1xuICBzZWxlY3RJdGVtV2l0aFRleHRQcmVmaXgocHJlZml4KSB7XG4gICAgaWYgKHN1cGVyLnNlbGVjdEl0ZW1XaXRoVGV4dFByZWZpeCkgeyBzdXBlci5zZWxlY3RJdGVtV2l0aFRleHRQcmVmaXgocHJlZml4KTsgfVxuICAgIGlmIChwcmVmaXggPT0gbnVsbCB8fCBwcmVmaXgubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBpbmRleCA9IGdldEluZGV4T2ZJdGVtV2l0aFRleHRQcmVmaXgodGhpcywgcHJlZml4KTtcbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gICAgfVxuICB9XG5cbn07XG5cblxuLy8gVGltZSBpbiBtaWxsaXNlY29uZHMgYWZ0ZXIgd2hpY2ggdGhlIHVzZXIgaXMgY29uc2lkZXJlZCB0byBoYXZlIHN0b3BwZWRcbi8vIHR5cGluZy5cbmNvbnN0IFBSRUZJWF9USU1FT1VUX0RVUkFUSU9OID0gMTAwMDtcblxuXG4vLyBSZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBpdGVtIHdpdGggdGhlIGdpdmVuIHByZWZpeCwgZWxzZSAtMS5cbmZ1bmN0aW9uIGdldEluZGV4T2ZJdGVtV2l0aFRleHRQcmVmaXgoZWxlbWVudCwgcHJlZml4KSB7XG4gIGxldCBpdGVtVGV4dENvbnRlbnRzID0gZ2V0SXRlbVRleHRDb250ZW50cyhlbGVtZW50KTtcbiAgbGV0IHByZWZpeExlbmd0aCA9IHByZWZpeC5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbVRleHRDb250ZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBpdGVtVGV4dENvbnRlbnQgPSBpdGVtVGV4dENvbnRlbnRzW2ldO1xuICAgIGlmIChpdGVtVGV4dENvbnRlbnQuc3Vic3RyKDAsIHByZWZpeExlbmd0aCkgPT09IHByZWZpeCkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuLy8gUmV0dXJuIGFuIGFycmF5IG9mIHRoZSB0ZXh0IGNvbnRlbnQgKGluIGxvd2VyY2FzZSkgb2YgYWxsIGl0ZW1zLlxuLy8gQ2FjaGUgdGhlc2UgcmVzdWx0cy5cbmZ1bmN0aW9uIGdldEl0ZW1UZXh0Q29udGVudHMoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQuX2l0ZW1UZXh0Q29udGVudHMpIHtcbiAgICBsZXQgaXRlbXMgPSBlbGVtZW50Lml0ZW1zO1xuICAgIGVsZW1lbnQuX2l0ZW1UZXh0Q29udGVudHMgPSBpdGVtcy5tYXAoY2hpbGQgPT4ge1xuICAgICAgbGV0IHRleHQgPSBjaGlsZC50ZXh0Q29udGVudCB8fCBjaGlsZC5hbHQ7XG4gICAgICByZXR1cm4gdGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBlbGVtZW50Ll9pdGVtVGV4dENvbnRlbnRzO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVCYWNrc3BhY2UoZWxlbWVudCkge1xuICBsZXQgbGVuZ3RoID0gZWxlbWVudC5fdHlwZWRQcmVmaXggPyBlbGVtZW50Ll90eXBlZFByZWZpeC5sZW5ndGggOiAwO1xuICBpZiAobGVuZ3RoID4gMCkge1xuICAgIGVsZW1lbnQuX3R5cGVkUHJlZml4ID0gZWxlbWVudC5fdHlwZWRQcmVmaXguc3Vic3RyKDAsIGxlbmd0aCAtIDEpO1xuICB9XG4gIGVsZW1lbnQuc2VsZWN0SXRlbVdpdGhUZXh0UHJlZml4KGVsZW1lbnQuX3R5cGVkUHJlZml4KTtcbiAgZWxlbWVudC5fc2V0UHJlZml4VGltZW91dCgpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVQbGFpbkNoYXJhY3RlcihlbGVtZW50LCBjaGFyKSB7XG4gIGxldCBwcmVmaXggPSBlbGVtZW50Ll90eXBlZFByZWZpeCB8fCAnJztcbiAgZWxlbWVudC5fdHlwZWRQcmVmaXggPSBwcmVmaXggKyBjaGFyLnRvTG93ZXJDYXNlKCk7XG4gIGVsZW1lbnQuc2VsZWN0SXRlbVdpdGhUZXh0UHJlZml4KGVsZW1lbnQuX3R5cGVkUHJlZml4KTtcbiAgc2V0UHJlZml4VGltZW91dChlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gcmVzZXRQcmVmaXhUaW1lb3V0KGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQuX3ByZWZpeFRpbWVvdXQpIHtcbiAgICBjbGVhclRpbWVvdXQoZWxlbWVudC5fcHJlZml4VGltZW91dCk7XG4gICAgZWxlbWVudC5fcHJlZml4VGltZW91dCA9IGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc2V0VHlwZWRQcmVmaXgoZWxlbWVudCkge1xuICBlbGVtZW50Ll90eXBlZFByZWZpeCA9ICcnO1xuICByZXNldFByZWZpeFRpbWVvdXQoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHNldFByZWZpeFRpbWVvdXQoZWxlbWVudCkge1xuICByZXNldFByZWZpeFRpbWVvdXQoZWxlbWVudCk7XG4gIGVsZW1lbnQuX3ByZWZpeFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICByZXNldFR5cGVkUHJlZml4KGVsZW1lbnQpO1xuICB9LCBQUkVGSVhfVElNRU9VVF9EVVJBVElPTik7XG59XG4iLCIvKipcbiAqIE1peGluIHdoaWNoIGFwcGxpZXMgc3RhbmRhcmQgaGlnaGxpZ2h0IGNvbG9ycyB0byBhIHNlbGVjdGVkIGl0ZW0uXG4gKlxuICogQG1peGluIFNlbGVjdGlvbkhpZ2hsaWdodFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiBjbGFzcyBTZWxlY3Rpb25IaWdobGlnaHQgZXh0ZW5kcyBiYXNlIHtcblxuICBhcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCkge1xuICAgIGlmIChzdXBlci5hcHBseVNlbGVjdGlvbikgeyBzdXBlci5hcHBseVNlbGVjdGlvbihpdGVtLCBzZWxlY3RlZCk7IH1cbiAgICBpdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHNlbGVjdGVkID8gJ2hpZ2hsaWdodCcgOiAnJztcbiAgICBpdGVtLnN0eWxlLmNvbG9yID0gc2VsZWN0ZWQgPyAnaGlnaGxpZ2h0dGV4dCcgOiAnJztcbiAgfVxuXG59O1xuIiwiLyoqXG4gKiBNaXhpbiB3aGljaCBzY3JvbGxzIGEgY29udGFpbmVyIHRvIGtlZXAgdGhlIHNlbGVjdGVkIGl0ZW0gdmlzaWJsZS5cbiAqXG4gKiBAbWl4aW4gU2VsZWN0aW9uU2Nyb2xsXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IGNsYXNzIFNlbGVjdGlvblNjcm9sbCBleHRlbmRzIGJhc2Uge1xuXG4gIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNlbGVjdGVkSXRlbTtcbiAgfVxuICBzZXQgc2VsZWN0ZWRJdGVtKGl0ZW0pIHtcbiAgICBpZiAoJ3NlbGVjdGVkSXRlbScgaW4gYmFzZS5wcm90b3R5cGUpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtID0gaXRlbTsgfVxuICAgIGlmIChpdGVtKSB7XG4gICAgICAvLyBLZWVwIHRoZSBzZWxlY3RlZCBpdGVtIGluIHZpZXcuXG4gICAgICB0aGlzLnNjcm9sbEl0ZW1JbnRvVmlldyhpdGVtKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2Nyb2xsIHRoZSBnaXZlbiBlbGVtZW50IGNvbXBsZXRlbHkgaW50byB2aWV3LCBtaW5pbWl6aW5nIHRoZSBkZWdyZWUgb2ZcbiAgICogc2Nyb2xsaW5nIHBlcmZvcm1lZC5cbiAgICpcbiAgICogQmxpbmsgaGFzIGEgc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZCgpIGZ1bmN0aW9uIHRoYXQgYWxtb3N0IHRoZSBzYW1lIHRoaW5nLFxuICAgKiBidXQgdW5mb3J0dW5hdGVseSBpdCdzIG5vbi1zdGFuZGFyZCwgYW5kIGluIGFueSBldmVudCBvZnRlbiBlbmRzIHVwXG4gICAqIHNjcm9sbGluZyBtb3JlIHRoYW4gaXMgYWJzb2x1dGVseSBuZWNlc3NhcnkuXG4gICAqXG4gICAqIEBtZXRob2Qgc2Nyb2xsSXRlbUludG9WaWV3XG4gICAqL1xuICBzY3JvbGxJdGVtSW50b1ZpZXcoaXRlbSkge1xuICAgIGlmIChzdXBlci5zY3JvbGxJdGVtSW50b1ZpZXcpIHsgc3VwZXIuc2Nyb2xsSXRlbUludG9WaWV3KCk7IH1cbiAgICAvLyBHZXQgdGhlIHJlbGF0aXZlIHBvc2l0aW9uIG9mIHRoZSBpdGVtIHdpdGggcmVzcGVjdCB0byB0aGUgdG9wIG9mIHRoZVxuICAgIC8vIGxpc3QncyBzY3JvbGxhYmxlIGNhbnZhcy4gQW4gaXRlbSBhdCB0aGUgdG9wIG9mIHRoZSBsaXN0IHdpbGwgaGF2ZSBhXG4gICAgLy8gZWxlbWVudFRvcCBvZiAwLlxuXG4gICAgbGV0IHNjcm9sbFRhcmdldCA9IHRoaXMuc2Nyb2xsVGFyZ2V0O1xuICAgIGxldCBlbGVtZW50VG9wID0gaXRlbS5vZmZzZXRUb3AgLSBzY3JvbGxUYXJnZXQub2Zmc2V0VG9wIC0gc2Nyb2xsVGFyZ2V0LmNsaWVudFRvcDtcbiAgICBsZXQgZWxlbWVudEJvdHRvbSA9IGVsZW1lbnRUb3AgKyBpdGVtLm9mZnNldEhlaWdodDtcbiAgICAvLyBEZXRlcm1pbmUgdGhlIGJvdHRvbSBvZiB0aGUgc2Nyb2xsYWJsZSBjYW52YXMuXG4gICAgbGV0IHNjcm9sbEJvdHRvbSA9IHNjcm9sbFRhcmdldC5zY3JvbGxUb3AgKyBzY3JvbGxUYXJnZXQuY2xpZW50SGVpZ2h0O1xuICAgIGlmIChlbGVtZW50Qm90dG9tID4gc2Nyb2xsQm90dG9tKSB7XG4gICAgICAvLyBTY3JvbGwgdXAgdW50aWwgaXRlbSBpcyBlbnRpcmVseSB2aXNpYmxlLlxuICAgICAgc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCArPSBlbGVtZW50Qm90dG9tIC0gc2Nyb2xsQm90dG9tO1xuICAgIH1cbiAgICBlbHNlIGlmIChlbGVtZW50VG9wIDwgc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCkge1xuICAgICAgLy8gU2Nyb2xsIGRvd24gdW50aWwgaXRlbSBpcyBlbnRpcmVseSB2aXNpYmxlLlxuICAgICAgc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCA9IGVsZW1lbnRUb3A7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBlbGVtZW50IHRoYXQgc2hvdWxkIGJlIHNjcm9sbGVkIHdpdGggdGhlIFBhZ2UgVXAvRG93biBrZXlzLlxuICAgKiBEZWZhdWx0IGlzIHRoZSBjdXJyZW50IGVsZW1lbnQuXG4gICAqXG4gICAqIEBwcm9wZXJ0eSBzY3JvbGxUYXJnZXRcbiAgICovXG4gIGdldCBzY3JvbGxUYXJnZXQoKSB7XG4gICAgLy8gUHJlZmVyIGJhc2UgcmVzdWx0LlxuICAgIHJldHVybiAnc2Nyb2xsVGFyZ2V0JyBpbiBiYXNlLnByb3RvdHlwZSA/IHN1cGVyLnNjcm9sbFRhcmdldCA6IHRoaXM7XG4gIH1cbiAgc2V0IHNjcm9sbFRhcmdldChlbGVtZW50KSB7XG4gICAgaWYgKCdzY3JvbGxUYXJnZXQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnNjcm9sbFRhcmdldCA9IGVsZW1lbnQ7IH1cbiAgfVxuXG59O1xuIiwiLyoqXG4gKiBNaXhpbiB3aGljaCBtYXBzIHRvdWNoIGdlc3R1cmVzIChzd2lwZSBsZWZ0LCBzd2lwZSByaWdodCkgdG8gZGlyZWN0aW9uXG4gKiBzZW1hbnRpY3MgKGdvUmlnaHQsIGdvTGVmdCkuXG4gKlxuICogQG1peGluIFN3aXBlRGlyZWN0aW9uXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IGNsYXNzIFN3aXBlRGlyZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cblxuICAgIHRoaXMucG9zaXRpb24gPSAwO1xuXG4gICAgLy8gVE9ETzogVG91Y2ggZXZlbnRzIGNvdWxkIGJlIGZhY3RvcmVkIG91dCBpbnRvIGl0cyBvd24gbWl4aW4uXG5cbiAgICAvLyBJbiBhbGwgdG91Y2ggZXZlbnRzLCBvbmx5IGhhbmRsZSBzaW5nbGUgdG91Y2hlcy4gV2UgZG9uJ3Qgd2FudCB0b1xuICAgIC8vIGluYWR2ZXJ0ZW50bHkgZG8gd29yayB3aGVuIHRoZSB1c2VyJ3MgdHJ5aW5nIHRvIHBpbmNoLXpvb20gZm9yIGV4YW1wbGUuXG4gICAgLy8gVE9ETzogRXZlbiBiZXR0ZXIgYXBwcm9hY2ggdGhhbiBiZWxvdyB3b3VsZCBiZSB0byBpZ25vcmUgdG91Y2hlcyBhZnRlclxuICAgIC8vIHRoZSBmaXJzdCBpZiB0aGUgdXNlciBoYXMgYWxyZWFkeSBiZWd1biBhIHN3aXBlLlxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLl9tdWx0aVRvdWNoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgdG91Y2hTdGFydCh0aGlzLCBldmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9tdWx0aVRvdWNoID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGV2ZW50ID0+IHtcbiAgICAgIGlmICghdGhpcy5fbXVsdGlUb3VjaCAmJiBldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBsZXQgaGFuZGxlZCA9IHRvdWNoTW92ZSh0aGlzLCBldmVudCk7XG4gICAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gQWxsIHRvdWNoZXMgcmVtb3ZlZDsgZ2VzdHVyZSBpcyBjb21wbGV0ZS5cbiAgICAgICAgaWYgKCF0aGlzLl9tdWx0aVRvdWNoKSB7XG4gICAgICAgICAgLy8gU2luZ2xlLXRvdWNoIHN3aXBlIGhhcyBmaW5pc2hlZC5cbiAgICAgICAgICB0b3VjaEVuZCh0aGlzLCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbXVsdGlUb3VjaCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbnNcbiAgZ29MZWZ0KCkge1xuICAgIGlmIChzdXBlci5nb0xlZnQpIHsgcmV0dXJuIHN1cGVyLmdvTGVmdCgpOyB9XG4gIH1cbiAgZ29SaWdodCgpIHtcbiAgICBpZiAoc3VwZXIuZ29SaWdodCkgeyByZXR1cm4gc3VwZXIuZ29SaWdodCgpOyB9XG4gIH1cblxuICAvKipcbiAgICogVGhlIGRpc3RhbmNlIHRoZSB1c2VyIGhhcyBtb3ZlZCB0aGUgZmlyc3QgdG91Y2hwb2ludCBzaW5jZSB0aGUgYmVnaW5uaW5nXG4gICAqIG9mIGEgZHJhZywgZXhwcmVzc2VkIGFzIGEgZnJhY3Rpb24gb2YgdGhlIGVsZW1lbnQncyB3aWR0aC5cbiAgICpcbiAgICogQHByb3BlcnR5IHBvc2l0aW9uXG4gICAqIEB0eXBlIE51bWJlclxuICAgKi9cbiAgZ2V0IHBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcbiAgfVxuICBzZXQgcG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICBpZiAoJ3Bvc2l0aW9uJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5wb3NpdGlvbiA9IHBvc2l0aW9uOyB9XG4gICAgdGhpcy5fcG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgfVxuXG4gIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb25cbiAgc2hvd1RyYW5zaXRpb24odmFsdWUpIHtcbiAgICBpZiAoc3VwZXIuc2hvd1RyYW5zaXRpb24pIHsgc3VwZXIuc2hvd1RyYW5zaXRpb24odmFsdWUpOyB9XG4gIH1cblxufTtcblxuXG5mdW5jdGlvbiB0b3VjaFN0YXJ0KGVsZW1lbnQsIGV2ZW50KSB7XG4gIGVsZW1lbnQuc2hvd1RyYW5zaXRpb24oZmFsc2UpO1xuICBsZXQgeCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XG4gIGxldCB5ID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcbiAgZWxlbWVudC5fc3RhcnRYID0geDtcbiAgZWxlbWVudC5fcHJldmlvdXNYID0geDtcbiAgZWxlbWVudC5fcHJldmlvdXNZID0geTtcbiAgZWxlbWVudC5fZGVsdGFYID0gMDtcbiAgZWxlbWVudC5fZGVsdGFZID0gMDtcbn1cblxuZnVuY3Rpb24gdG91Y2hNb3ZlKGVsZW1lbnQsIGV2ZW50KSB7XG4gIGxldCB4ID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcbiAgbGV0IHkgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xuICBlbGVtZW50Ll9kZWx0YVggPSB4IC0gZWxlbWVudC5fcHJldmlvdXNYO1xuICBlbGVtZW50Ll9kZWx0YVkgPSB5IC0gZWxlbWVudC5fcHJldmlvdXNZO1xuICBlbGVtZW50Ll9wcmV2aW91c1ggPSB4O1xuICBlbGVtZW50Ll9wcmV2aW91c1kgPSB5O1xuICBpZiAoTWF0aC5hYnMoZWxlbWVudC5fZGVsdGFYKSA+IE1hdGguYWJzKGVsZW1lbnQuX2RlbHRhWSkpIHtcbiAgICAvLyBNb3ZlIHdhcyBtb3N0bHkgaG9yaXpvbnRhbC5cbiAgICB0cmFja1RvKGVsZW1lbnQsIHgpO1xuICAgIC8vIEluZGljYXRlIHRoYXQgdGhlIGV2ZW50IHdhcyBoYW5kbGVkLiBJdCdkIGJlIG5pY2VyIGlmIHdlIGRpZG4ndCBoYXZlXG4gICAgLy8gdG8gZG8gdGhpcyBzbyB0aGF0LCBlLmcuLCBhIHVzZXIgY291bGQgYmUgc3dpcGluZyBsZWZ0IGFuZCByaWdodFxuICAgIC8vIHdoaWxlIHNpbXVsdGFuZW91c2x5IHNjcm9sbGluZyB1cCBhbmQgZG93bi4gKE5hdGl2ZSB0b3VjaCBhcHBzIGNhbiBkb1xuICAgIC8vIHRoYXQuKSBIb3dldmVyLCBNb2JpbGUgU2FmYXJpIHdhbnRzIHRvIGhhbmRsZSBzd2lwZSBldmVudHMgbmVhciB0aGVcbiAgICAvLyBwYWdlIGFuZCBpbnRlcnByZXQgdGhlbSBhcyBuYXZpZ2F0aW9ucy4gVG8gYXZvaWQgaGF2aW5nIGEgaG9yaXppb250YWxcbiAgICAvLyBzd2lwZSBtaXNpbnRlcHJldGVkIGFzIGEgbmF2aWdhdGlvbiwgd2UgaW5kaWNhdGUgdGhhdCB3ZSd2ZSBoYW5kbGVkXG4gICAgLy8gdGhlIGV2ZW50LCBhbmQgcHJldmVudCBkZWZhdWx0IGJlaGF2aW9yLlxuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIC8vIE1vdmUgd2FzIG1vc3RseSB2ZXJ0aWNhbC5cbiAgICByZXR1cm4gZmFsc2U7IC8vIE5vdCBoYW5kbGVkXG4gIH1cbn1cblxuZnVuY3Rpb24gdG91Y2hFbmQoZWxlbWVudCwgZXZlbnQpIHtcbiAgZWxlbWVudC5zaG93VHJhbnNpdGlvbih0cnVlKTtcbiAgbGV0IHggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xuICBpZiAoZWxlbWVudC5fZGVsdGFYID49IDIwKSB7XG4gICAgLy8gRmluaXNoZWQgZ29pbmcgcmlnaHQgYXQgaGlnaCBzcGVlZC5cbiAgICAvLyBjb25zb2xlLmxvZyhcImZsaWNrIHJpZ2h0IFwiICsgZWxlbWVudC5fZGVsdGFYKTtcbiAgICBlbGVtZW50LmdvTGVmdCgpO1xuICB9IGVsc2UgaWYgKGVsZW1lbnQuX2RlbHRhWCA8PSAtMjApIHtcbiAgICAvLyBGaW5pc2hlZCBnb2luZyBsZWZ0IGF0IGhpZ2ggc3BlZWQuXG4gICAgLy8gY29uc29sZS5sb2coXCJmbGljayBsZWZ0IFwiICsgZWxlbWVudC5fZGVsdGFYKTtcbiAgICBlbGVtZW50LmdvUmlnaHQoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBGaW5pc2hlZCBhdCBsb3cgc3BlZWQuXG4gICAgLy8gY29uc29sZS5sb2coXCJzbG93IGRyYWcgXCIgKyBlbGVtZW50Ll9kZWx0YVgpO1xuICAgIHRyYWNrVG8oZWxlbWVudCwgeCk7XG4gICAgbGV0IHBvc2l0aW9uID0gZWxlbWVudC5wb3NpdGlvbjtcbiAgICBpZiAocG9zaXRpb24gPj0gMC41KSB7XG4gICAgICBlbGVtZW50LmdvUmlnaHQoKTtcbiAgICB9IGVsc2UgaWYgKHBvc2l0aW9uIDw9IC0wLjUpIHtcbiAgICAgIGVsZW1lbnQuZ29MZWZ0KCk7XG4gICAgfVxuICB9XG4gIGVsZW1lbnQucG9zaXRpb24gPSAwO1xuICBlbGVtZW50Ll9kZWx0YVggPSBudWxsO1xuICBlbGVtZW50Ll9kZWx0YVkgPSBudWxsO1xufVxuXG5mdW5jdGlvbiB0cmFja1RvKGVsZW1lbnQsIHgpIHtcbiAgbGV0IHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgbGV0IGRyYWdEaXN0YW5jZSA9IGVsZW1lbnQuX3N0YXJ0WCAtIHg7XG4gIGxldCBmcmFjdGlvbiA9IHdpZHRoID4gMCA/XG4gICAgZHJhZ0Rpc3RhbmNlIC8gd2lkdGggOlxuICAgIDA7XG4gIGVsZW1lbnQucG9zaXRpb24gPSBmcmFjdGlvbjtcbn1cbiIsIi8qKlxuICogTWl4aW4gdGhhdCBhbGxvd3MgYSBjb21wb25lbnQgdG8gZGVsZWdhdGUgaXRzIG93biBzZWxlY3Rpb24gc2VtYW50aWNzIHRvIGFcbiAqIHRhcmdldCBlbGVtZW50LiBUaGlzIGlzIHVzZWZ1bCB3aGVuIGRlZmluaW5nIGNvbXBvbmVudHMgdGhhdCBhY3QgYXNcbiAqIG9wdGlvbmFsIGRlY29yYXRvcnMgZm9yIGEgY29tcG9uZW50IHRoYXQgYWN0cyBsaWtlIGEgbGlzdC5cbiAqXG4gKiBAbWl4aW4gVGFyZ2V0U2VsZWN0aW9uXG4gKi9cblxuXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4gY2xhc3MgVGFyZ2V0U2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgLy8gYXR0YWNoZWRDYWxsYmFjaygpIHtcbiAgLy8gICAvLyBBcHBseSBhbnkgc2VsZWN0aW9uIG1hZGUgYmVmb3JlIGFzc2ltaWxhdGlvbi5cbiAgLy8gICBpZiAodGhpcy5fcHJlbWF0dXJlU2VsZWN0ZWRJbmRleFxuICAvLyAgICAgICAmJiAnc2VsZWN0ZWRJbmRleCcgaW4gdGhpcyAmJiB0aGlzLnNlbGVjdGVkSW5kZXggPT09IC0xKSB7XG4gIC8vICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLl9wcmVtYXR1cmVTZWxlY3RlZEluZGV4O1xuICAvLyAgICAgdGhpcy5fcHJlbWF0dXJlU2VsZWN0ZWRJbmRleCA9IG51bGw7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgaW5kZXhPZkl0ZW0oaXRlbSkge1xuICAgIGlmIChzdXBlci5pbmRleE9mSXRlbSkgeyBzdXBlci5pbmRleE9mSXRlbShpdGVtKTsgfVxuICAgIGxldCB0YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICByZXR1cm4gdGFyZ2V0ID9cbiAgICAgIHRhcmdldC5pbmRleE9mSXRlbShpdGVtKSA6XG4gICAgICAtMTtcbiAgfVxuXG4gIGdldCBpdGVtcygpIHtcbiAgICBsZXQgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG4gICAgbGV0IGl0ZW1zID0gdGFyZ2V0ICYmIHRhcmdldC5pdGVtcztcbiAgICByZXR1cm4gaXRlbXMgfHwgW107XG4gIH1cblxuICBpdGVtc0NoYW5nZWQoKSB7XG4gICAgaWYgKHN1cGVyLml0ZW1zQ2hhbmdlZCkgeyBzdXBlci5pdGVtc0NoYW5nZWQoKTsgfVxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2l0ZW1zLWNoYW5nZWQnKSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGluZGV4IG9mIHRoZSBpdGVtIHdoaWNoIGlzIGN1cnJlbnRseSBzZWxlY3RlZCwgb3IgLTEgaWYgdGhlcmUgaXMgbm9cbiAgICogc2VsZWN0aW9uLlxuICAgKlxuICAgKiBAcHJvcGVydHkgc2VsZWN0ZWRJbmRleFxuICAgKiBAdHlwZSBOdW1iZXJcbiAgICovXG4gIGdldCBzZWxlY3RlZEluZGV4KCkge1xuICAgIGxldCB0YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICByZXR1cm4gdGFyZ2V0ICYmIHRhcmdldC5zZWxlY3RlZEluZGV4O1xuICB9XG4gIHNldCBzZWxlY3RlZEluZGV4KGluZGV4KSB7XG4gICAgaWYgKCdzZWxlY3RlZEluZGV4JyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEluZGV4ID0gaW5kZXg7IH1cbiAgICAvLyBpZiAoJ3NlbGVjdGVkSW5kZXgnIGluIHRoaXMge1xuICAgIC8vICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIC8vIFNlbGVjdGlvbiBpcyBiZWluZyBtYWRlIGJlZm9yZSB0aGUgY29sbGVjdGl2ZSBzdXBwb3J0cyBpdC5cbiAgICAvLyAgIHRoaXMuX3ByZW1hdHVyZVNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICAvLyB9XG4gICAgbGV0IHRhcmdldCA9IHRoaXMudGFyZ2V0O1xuICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LnNlbGVjdGVkSW5kZXggIT09IGluZGV4KSB7XG4gICAgICB0YXJnZXQuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0sIG9yIG51bGwgaWYgdGhlcmUgaXMgbm8gc2VsZWN0aW9uLlxuICAgKlxuICAgKiBAcHJvcGVydHkgc2VsZWN0ZWRJdGVtXG4gICAqIEB0eXBlIE9iamVjdFxuICAgKi9cbiAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICBsZXQgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG4gICAgcmV0dXJuIHRhcmdldCAmJiB0YXJnZXQuc2VsZWN0ZWRJdGVtO1xuICB9XG4gIHNldCBzZWxlY3RlZEl0ZW0oaXRlbSkge1xuICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgbGV0IHRhcmdldCA9IHRoaXMudGFyZ2V0O1xuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIHRhcmdldC5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdGVkSXRlbUNoYW5nZWQoKSB7XG4gICAgaWYgKHN1cGVyLnNlbGVjdGVkSXRlbUNoYW5nZWQpIHsgc3VwZXIuc2VsZWN0ZWRJdGVtQ2hhbmdlZCgpOyB9XG4gIH1cblxuICBnZXQgdGFyZ2V0KCkge1xuICAgIHJldHVybiBzdXBlci50YXJnZXQ7XG4gIH1cbiAgc2V0IHRhcmdldChlbGVtZW50KSB7XG4gICAgaWYgKCd0YXJnZXQnIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnRhcmdldCA9IGVsZW1lbnQ7IH1cbiAgICBpZiAodGhpcy5faXRlbXNDaGFuZ2VkTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignaXRlbXMtY2hhbmdlZCcsIHRoaXMuX2l0ZW1zQ2hhbmdlZExpc3RlbmVyKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NlbGVjdGVkSXRlbUNoYW5nZWRMaXN0ZW5lcikge1xuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdzZWxlY3RlZC1pdGVtLWNoYW5nZWQnLCB0aGlzLl9zZWxlY3RlZEl0ZW1DaGFuZ2VkTGlzdGVuZXIpO1xuICAgIH1cbiAgICB0aGlzLl9pdGVtc0NoYW5nZWRMaXN0ZW5lciA9IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaXRlbXMtY2hhbmdlZCcsIGV2ZW50ID0+IHtcbiAgICAgIHRoaXMuaXRlbXNDaGFuZ2VkKCk7XG4gICAgfSk7XG4gICAgdGhpcy5fc2VsZWN0ZWRJdGVtQ2hhbmdlZExpc3RlbmVyID0gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzZWxlY3RlZC1pdGVtLWNoYW5nZWQnLCBldmVudCA9PiB7XG4gICAgICAvLyBMZXQgdGhlIGNvbXBvbmVudCBrbm93IHRoZSB0YXJnZXQncyBzZWxlY3Rpb24gY2hhbmdlZCwgYnV0IHdpdGhvdXRcbiAgICAgIC8vIHJlLWludm9raW5nIHRoZSBzZWxlY3RJbmRleC9zZWxlY3RlZEl0ZW0gc2V0dGVyLlxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1DaGFuZ2VkKCk7XG4gICAgfSk7XG4gICAgLy8gRm9yY2UgaW5pdGlhbCByZWZyZXNoLlxuICAgIHRoaXMuaXRlbXNDaGFuZ2VkKCk7XG4gIH1cblxufTtcbiIsIi8qKlxuICogTWl4aW4gZm9yIHRlbXBsYXRlIHN0YW1waW5nLiBJZiBhIGNvbXBvbmVudCBkZWZpbmVzIGEgdGVtcGxhdGUgcHJvcGVydHkgKGFzIGFcbiAqIHN0cmluZyBvciByZWZlcmVuY2luZyBhIEhUTUwgdGVtcGxhdGUpLCB3aGVuIHRoZSBjb21wb25lbnQgY2xhc3MgaXNcbiAqIGluc3RhbnRpYXRlZCwgYSBzaGFkb3cgcm9vdCB3aWxsIGJlIGNyZWF0ZWQgb24gdGhlIGluc3RhbmNlLCBhbmQgdGhlIGNvbnRlbnRzXG4gKiBvZiB0aGUgdGVtcGxhdGUgd2lsbCBiZSBjbG9uZWQgaW50byB0aGUgc2hhZG93IHJvb3QuXG4gKlxuICogRm9yIHRoZSB0aW1lIGJlaW5nLCB0aGlzIGV4dGVuc2lvbiByZXRhaW5zIHN1cHBvcnQgZm9yIFNoYWRvdyBET00gdjAuXG4gKiBUaGF0IHdpbGwgZXZlbnR1YWxseSBiZSBkZXByZWNhdGVkIGFzIGJyb3dzZXJzIGltcGxlbWVudCBTaGFkb3cgRE9NIHYxLlxuICpcbiAqIEBtaXhpbiBUZW1wbGF0ZVN0YW1waW5nXG4gKi9cblxuXG4vLyBGZWF0dXJlIGRldGVjdGlvbiBmb3Igb2xkIFNoYWRvdyBET00gdjAuXG5jb25zdCBVU0lOR19TSEFET1dfRE9NX1YwID0gKHR5cGVvZiBIVE1MRWxlbWVudC5wcm90b3R5cGUuY3JlYXRlU2hhZG93Um9vdCAhPT0gJ3VuZGVmaW5lZCcpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiBjbGFzcyBUZW1wbGF0ZVN0YW1waW5nIGV4dGVuZHMgYmFzZSB7XG5cbiAgLypcbiAgICogSWYgdGhlIGNvbXBvbmVudCBkZWZpbmVzIGEgdGVtcGxhdGUsIGEgc2hhZG93IHJvb3Qgd2lsbCBiZSBjcmVhdGVkIG9uIHRoZVxuICAgKiBjb21wb25lbnQgaW5zdGFuY2UsIGFuZCB0aGUgdGVtcGxhdGUgc3RhbXBlZCBpbnRvIGl0LlxuICAgKi9cbiAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgIGlmIChzdXBlci5jcmVhdGVkQ2FsbGJhY2spIHsgc3VwZXIuY3JlYXRlZENhbGxiYWNrKCk7IH1cbiAgICBsZXQgdGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlO1xuICAgIC8vIFRPRE86IFNhdmUgdGhlIHByb2Nlc3NlZCB0ZW1wbGF0ZSB3aXRoIHRoZSBjb21wb25lbnQncyBjbGFzcyBwcm90b3R5cGVcbiAgICAvLyBzbyBpdCBkb2Vzbid0IG5lZWQgdG8gYmUgcHJvY2Vzc2VkIHdpdGggZXZlcnkgaW5zdGFudGlhdGlvbi5cbiAgICBpZiAodGVtcGxhdGUpIHtcblxuICAgICAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgLy8gVXBncmFkZSBwbGFpbiBzdHJpbmcgdG8gcmVhbCB0ZW1wbGF0ZS5cbiAgICAgICAgdGVtcGxhdGUgPSBjcmVhdGVUZW1wbGF0ZVdpdGhJbm5lckhUTUwodGVtcGxhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoVVNJTkdfU0hBRE9XX0RPTV9WMCkge1xuICAgICAgICBwb2x5ZmlsbFNsb3RXaXRoQ29udGVudCh0ZW1wbGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh3aW5kb3cuU2hhZG93RE9NUG9seWZpbGwpIHtcbiAgICAgICAgc2hpbVRlbXBsYXRlU3R5bGVzKHRlbXBsYXRlLCB0aGlzLmxvY2FsTmFtZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIHRoaXMubG9nKFwiY2xvbmluZyB0ZW1wbGF0ZSBpbnRvIHNoYWRvdyByb290XCIpO1xuICAgICAgbGV0IHJvb3QgPSBVU0lOR19TSEFET1dfRE9NX1YwID9cbiAgICAgICAgdGhpcy5jcmVhdGVTaGFkb3dSb290KCkgOiAgICAgICAgICAgICAvLyBTaGFkb3cgRE9NIHYwXG4gICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pOyAgLy8gU2hhZG93IERPTSB2MVxuICAgICAgbGV0IGNsb25lID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcbiAgICAgIHJvb3QuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuICAgIH1cbiAgfVxuXG59O1xuXG5cbi8vIENvbnZlcnQgYSBwbGFpbiBzdHJpbmcgb2YgSFRNTCBpbnRvIGEgcmVhbCB0ZW1wbGF0ZSBlbGVtZW50LlxuZnVuY3Rpb24gY3JlYXRlVGVtcGxhdGVXaXRoSW5uZXJIVE1MKGlubmVySFRNTCkge1xuICBsZXQgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAvLyBSRVZJRVc6IElzIHRoZXJlIGFuIGVhc2llciB3YXkgdG8gZG8gdGhpcz9cbiAgLy8gV2UnZCBsaWtlIHRvIGp1c3Qgc2V0IGlubmVySFRNTCBvbiB0aGUgdGVtcGxhdGUgY29udGVudCwgYnV0IHNpbmNlIGl0J3NcbiAgLy8gYSBEb2N1bWVudEZyYWdtZW50LCB0aGF0IGRvZXNuJ3Qgd29yay5cbiAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuICB3aGlsZSAoZGl2LmNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgIHRlbXBsYXRlLmNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2LmNoaWxkTm9kZXNbMF0pO1xuICB9XG4gIHJldHVybiB0ZW1wbGF0ZTtcbn1cblxuLy8gUmVwbGFjZSBvY2N1cmVuY2VzIG9mIHYxIHNsb3QgZWxlbWVudHMgd2l0aCB2MCBjb250ZW50IGVsZW1lbnRzLlxuLy8gVGhpcyBkb2VzIG5vdCB5ZXQgbWFwIG5hbWVkIHNsb3RzIHRvIGNvbnRlbnQgc2VsZWN0IGNsYXVzZXMuXG5mdW5jdGlvbiBwb2x5ZmlsbFNsb3RXaXRoQ29udGVudCh0ZW1wbGF0ZSkge1xuICBbXS5mb3JFYWNoLmNhbGwodGVtcGxhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCdzbG90JyksIHNsb3RFbGVtZW50ID0+IHtcbiAgICBsZXQgY29udGVudEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjb250ZW50Jyk7XG4gICAgc2xvdEVsZW1lbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY29udGVudEVsZW1lbnQsIHNsb3RFbGVtZW50KTtcbiAgfSk7XG59XG5cbi8vIEludm9rZSBiYXNpYyBzdHlsZSBzaGltbWluZyB3aXRoIFNoYWRvd0NTUy5cbmZ1bmN0aW9uIHNoaW1UZW1wbGF0ZVN0eWxlcyh0ZW1wbGF0ZSwgdGFnKSB7XG4gIHdpbmRvdy5XZWJDb21wb25lbnRzLlNoYWRvd0NTUy5zaGltU3R5bGluZyh0ZW1wbGF0ZS5jb250ZW50LCB0YWcpO1xufVxuIiwiLyoqXG4gKiBNaXhpbiBwcm92aWRlcyBmb3IgYXV0b21hdGljIHRpbWVkIGNoYW5nZXMgaW4gc2VsZWN0aW9uLCBhcyBpbiBhXG4gKiBhdXRvbWF0ZWQgc2xpZGVzaG93LlxuICpcbiAqIEBtaXhpbiBUaW1lclNlbGVjdGlvblxuICovXG5cblxuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IGNsYXNzIFRpbWVyU2VsZWN0aW9uIGV4dGVuZHMgYmFzZSB7XG5cbiAgY29udGVudENoYW5nZWQoKSB7XG4gICAgaWYgKHN1cGVyLmNvbnRlbnRDaGFuZ2VkKSB7IHN1cGVyLmNvbnRlbnRDaGFuZ2VkKCk7IH1cbiAgICB0aGlzLnBsYXkoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCZWdpbiBhdXRvbWF0aWMgcHJvZ3Jlc3Npb24gb2YgdGhlIHNlbGVjdGlvbi5cbiAgICpcbiAgICogQG1ldGhvZCBwbGF5XG4gICAqL1xuICBwbGF5KCkge1xuICAgIGlmIChzdXBlci5wbGF5KSB7IHN1cGVyLnBsYXkoKTsgfVxuICAgIHRoaXMuX3BsYXlpbmcgPSB0cnVlO1xuICAgIHNldFRpbWVyKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhdXNlIGF1dG9tYXRpYyBwcm9ncmVzc2lvbiBvZiB0aGUgc2VsZWN0aW9uLlxuICAgKlxuICAgKiBAbWV0aG9kIHBhdXNlXG4gICAqL1xuICBwYXVzZSgpIHtcbiAgICBpZiAoc3VwZXIucGF1c2UpIHsgc3VwZXIucGF1c2UoKTsgfVxuICAgIGNsZWFyVGltZXIodGhpcyk7XG4gICAgdGhpcy5fcGxheWluZyA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRydWUgaWYgdGhlIHNlbGVjdGlvbiBpcyBiZWluZyBhdXRvbWF0aWNhbGx5IGFkdmFuY2VkLlxuICAgKlxuICAgKiBAcHJvcGVydHkgcGxheWluZ1xuICAgKiBAdHlwZSBCb29sZWFuXG4gICAqL1xuICBnZXQgcGxheWluZygpIHtcbiAgICByZXR1cm4gdGhpcy5fcGxheWluZztcbiAgfVxuICBzZXQgcGxheWluZyhwbGF5aW5nKSB7XG4gICAgaWYgKCdwbGF5aW5nJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5wbGF5aW5nID0gcGxheWluZzsgfVxuICAgIGlmIChwbGF5aW5nICYmICF0aGlzLl9wbGF5aW5nKSB7XG4gICAgICB0aGlzLnBsYXkoKTtcbiAgICB9IGVsc2UgaWYgKCFwbGF5aW5nICYmIHRoaXMuX3BsYXlpbmcpIHtcbiAgICAgICAgdGhpcy5wYXVzZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFdoZXRoZXIgdGhlIHVzZXIgaGFzIHNlbGVjdGVkIGFuIGl0ZW0gbWFudWFsbHksIG9yIHdlJ3ZlIGF1dG9tYXRpY2FsbHlcbiAgLy8gYWR2YW5jZWQgdGhlIHNlbGVjdGlvbiwgd2Ugd2FpdCBmb3IgYSBiaXQgYmVmb3JlIGFkdmFuY2luZyBhZ2Fpbi5cbiAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICByZXR1cm4gc3VwZXIuc2VsZWN0ZWRJdGVtO1xuICB9XG4gIHNldCBzZWxlY3RlZEl0ZW0oaXRlbSkge1xuICAgIGlmICgnc2VsZWN0ZWRJdGVtJyBpbiBiYXNlLnByb3RvdHlwZSkgeyBzdXBlci5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG4gICAgY2xlYXJUaW1lcih0aGlzKTtcbiAgICBpZiAodGhpcy5wbGF5aW5nKSB7XG4gICAgICBzZXRUaW1lcih0aGlzKTtcbiAgICB9XG4gIH1cblxufTtcblxuXG5cbmZ1bmN0aW9uIGNsZWFyVGltZXIoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudC5fdGltZW91dCkge1xuICAgIGNsZWFyVGltZW91dChlbGVtZW50Ll90aW1lb3V0KTtcbiAgICBlbGVtZW50Ll90aW1lb3V0ID0gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRUaW1lcihlbGVtZW50KSB7XG4gIGVsZW1lbnQuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KHNlbGVjdE5leHRXaXRoV3JhcC5iaW5kKHRoaXMpLCAyMDAwKTtcbn1cblxuLy8gU2VsZWN0IHRoZSBuZXh0IGl0ZW0sIHdyYXBwaW5nIHRvIGZpcnN0IGl0ZW0gaWYgbmVjZXNzYXJ5LlxuZnVuY3Rpb24gc2VsZWN0TmV4dFdpdGhXcmFwKGVsZW1lbnQpIHtcbiAgbGV0IGl0ZW1zID0gZWxlbWVudC5pdGVtcztcbiAgaWYgKGl0ZW1zKSB7XG4gICAgaWYgKGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9PSBudWxsIHx8IGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9PT0gaXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgZWxlbWVudC5zZWxlY3RGaXJzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LnNlbGVjdE5leHQoKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogTWl4aW4gd2hpY2ggbWFwcyBhIGhvcml6b250YWwgdHJhY2twYWQgc3dpcGUgZ2VzdHVyZXMgKG9yIGhvcml6b250YWwgbW91c2VcbiAqIHdoZWVsIGFjdGlvbnMpIHRvIGRpcmVjdGlvbiBzZW1hbnRpY3MuXG4gKlxuICogVG8gcmVzcG9uZCB0byB0aGUgdHJhY2twYWQsIHdlIGNhbiBsaXN0ZW4gdG8gdGhlIERPTSdzIFwid2hlZWxcIiBldmVudHMuIFRoZXNlXG4gKiBldmVudHMgYXJlIGZpcmVkIGFzIHRoZSB1c2VyIGRyYWdzIHRoZWlyIGZpbmdlcnMgYWNyb3NzIGEgdHJhY2twYWQuXG4gKiBVbmZvcnR1bmF0ZWx5LCB0aGlzIHNjaGVtZSBpcyBtaXNzaW5nIGEgY3JpdGljYWwgZXZlbnQg4oCUwqB0aGVyZSBpcyBubyBldmVudFxuICogd2hlbiB0aGUgdXNlciAqc3RvcHMqIGEgZ2VzdHVyZWQgb24gdGhlIHRyYWNrcGFkLlxuICpcbiAqIFRvIGNvbXBsaWNhdGUgbWF0dGVycywgdGhlIG1haW5zdHJlYW0gYnJvd3NlcnMgY29udGludWUgdG8gZ2VuZXJhdGUgd2hlZWxcbiAqIGV2ZW50cyBldmVuIGFmdGVyIHRoZSB1c2VyIGhhcyBzdG9wcGVkIGRyYWdnaW5nIHRoZWlyIGZpbmdlcnMuIFRoZXNlIGZha2VcbiAqIGV2ZW50cyBzaW11bGF0ZSB0aGUgdXNlciBncmFkdWFsbHkgc2xvd2luZyBkb3duIHRoZSBkcmFnIHVudGlsIHRoZXkgY29tZSB0byBhXG4gKiBzbW9vdGggc3RvcC4gSW4gc29tZSBjb250ZXh0cywgdGhlc2UgZmFrZSB3aGVlbCBldmVudHMgbWlnaHQgYmUgaGVscGZ1bCwgYnV0XG4gKiBpbiB0cnlpbmcgdG8gc3VwcGx5IHR5cGljYWwgdHJhY2twYWQgc3dpcGUgbmF2aWdhdGlvbiwgdGhlc2UgZmFrZSBldmVudHMgZ2V0XG4gKiBpbiB0aGUgd2F5LlxuICpcbiAqIFRoaXMgY29tcG9uZW50IHVzZXMgc29tZSBoZXVyaXN0aWNzIHRvIHdvcmsgYXJvdW5kIHRoZXNlIHByb2JsZW1zLCBidXQgdGhlXG4gKiBjb21wbGV4IG5hdHVyZSBvZiB0aGUgcHJvYmxlbSBtYWtlIGl0IGV4dHJlbWVseSBkaWZmaWN1bHQgdG8gYWNoaWV2ZSB0aGUgc2FtZVxuICogZGVncmVlIG9mIHRyYWNrcGFkIHJlc3BvbnNpdmVuZXNzIHBvc3NpYmxlIHdpdGggbmF0aXZlIGFwcGxpY2F0aW9ucy5cbiAqXG4gKiBAbWl4aW4gVHJhY2twYWREaXJlY3Rpb25cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCAoYmFzZSkgPT4gY2xhc3MgVHJhY2twYWREaXJlY3Rpb24gZXh0ZW5kcyBiYXNlIHtcblxuICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHN1cGVyLmNyZWF0ZWRDYWxsYmFjaykgeyBzdXBlci5jcmVhdGVkQ2FsbGJhY2soKTsgfVxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBldmVudCA9PiB7XG4gICAgICBsZXQgaGFuZGxlZCA9IHdoZWVsKHRoaXMsIGV2ZW50KTtcbiAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmVzZXRXaGVlbFRyYWNraW5nKHRoaXMpO1xuICB9XG5cbiAgLy8gRGVmYXVsdCBpbXBsZW1lbnRhdGlvbnNcbiAgZ29MZWZ0KCkge1xuICAgIGlmIChzdXBlci5nb0xlZnQpIHsgcmV0dXJuIHN1cGVyLmdvTGVmdCgpOyB9XG4gIH1cbiAgZ29SaWdodCgpIHtcbiAgICBpZiAoc3VwZXIuZ29SaWdodCkgeyByZXR1cm4gc3VwZXIuZ29SaWdodCgpOyB9XG4gIH1cblxuICBnZXQgcG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHN1cGVyLnBvc2l0aW9uO1xuICB9XG4gIHNldCBwb3NpdGlvbihwb3NpdGlvbikge1xuICAgIGlmICgncG9zaXRpb24nIGluIGJhc2UucHJvdG90eXBlKSB7IHN1cGVyLnBvc2l0aW9uID0gcG9zaXRpb247IH1cbiAgfVxuXG4gIC8vIERlZmF1bHQgaW1wbGVtZW50YXRpb25cbiAgc2hvd1RyYW5zaXRpb24odmFsdWUpIHtcbiAgICBpZiAoc3VwZXIuc2hvd1RyYW5zaXRpb24pIHsgc3VwZXIuc2hvd1RyYW5zaXRpb24odmFsdWUpOyB9XG4gIH1cblxufTtcblxuXG4vLyBUaW1lIHdlIHdhaXQgZm9sbG93aW5nIGEgbmF2aWdhdGlvbiBiZWZvcmUgcGF5aW5nIGF0dGVudGlvbiB0byB3aGVlbFxuLy8gZXZlbnRzIGFnYWluLlxuY29uc3QgUE9TVF9OQVZJR0FURV9USU1FID0gMjUwO1xuXG4vLyBUaW1lIHdlIHdhaXQgYWZ0ZXIgdGhlIGxhc3Qgd2hlZWwgZXZlbnQgYmVmb3JlIHdlIHJlc2V0IHRoaW5ncy5cbmNvbnN0IFdIRUVMX1RJTUUgPSAxMDA7XG5cblxuLy8gRm9sbG93aW5nIGEgbmF2aWdhdGlvbiwgcGFydGlhbGx5IHJlc2V0IG91ciB3aGVlbCB0cmFja2luZy5cbmZ1bmN0aW9uIHBvc3ROYXZpZ2F0ZShlbGVtZW50KSB7XG4gIGVsZW1lbnQucG9zaXRpb24gPSAwO1xuICBlbGVtZW50Ll93aGVlbERpc3RhbmNlID0gMDtcbiAgZWxlbWVudC5fcG9zdE5hdmlnYXRlRGVsYXlDb21wbGV0ZSA9IHRydWU7XG4gIGVsZW1lbnQuX2Fic29yYkRlY2VsZXJhdGlvbiA9IHRydWU7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGVsZW1lbnQuX3Bvc3ROYXZpZ2F0ZURlbGF5Q29tcGxldGUgPSBmYWxzZTtcbiAgfSwgUE9TVF9OQVZJR0FURV9USU1FKTtcbn1cblxuLy8gUmVzZXQgYWxsIHN0YXRlIHJlbGF0ZWQgdG8gdGhlIHRyYWNraW5nIG9mIHRoZSB3aGVlbC5cbmZ1bmN0aW9uIHJlc2V0V2hlZWxUcmFja2luZyhlbGVtZW50KSB7XG4gIGVsZW1lbnQucG9zaXRpb24gPSAwO1xuICBlbGVtZW50Ll93aGVlbERpc3RhbmNlID0gMDtcbiAgZWxlbWVudC5fbGFzdERlbHRhWCA9IDA7XG4gIGVsZW1lbnQuX2Fic29yYkRlY2VsZXJhdGlvbiA9IGZhbHNlO1xuICBlbGVtZW50Ll9wb3N0TmF2aWdhdGVEZWxheUNvbXBsZXRlID0gZmFsc2U7XG4gIGlmIChlbGVtZW50Ll9sYXN0V2hlZWxUaW1lb3V0KSB7XG4gICAgY2xlYXJUaW1lb3V0KGVsZW1lbnQuX2xhc3RXaGVlbFRpbWVvdXQpO1xuICAgIGVsZW1lbnQuX2xhc3RXaGVlbFRpbWVvdXQgPSBudWxsO1xuICB9XG59XG5cbi8vIERlZmluZSBvdXIgb3duIHNpZ24gZnVuY3Rpb24sIHNpbmNlIChhcyBvZiBNYXkgMjAxNSksIFNhZmFyaSBhbmQgSUUgZG9uJ3Rcbi8vIHN1cHBseSBNYXRoLnNpZ24oKS5cbmZ1bmN0aW9uIHNpZ24oeCkge1xuICByZXR1cm4gKHggPT09IDApID9cbiAgICAwIDpcbiAgICAoeCA+IDApID9cbiAgICAgIDEgOlxuICAgICAgLTE7XG59XG5cbi8vIFRPRE86IERhbXBpbmcsIG9yIHNvbWUgb3RoZXIgdHJlYXRtZW50IGZvciBnb2luZyBwYXN0IHRoZSBlbmRzLlxuXG4vKlxuICogQSB3aGVlbCBldmVudCBoYXMgYmVlbiBnZW5lcmF0ZWQuIFRoaXMgY291bGQgYmUgYSByZWFsIHdoZWVsIGV2ZW50LCBvciBpdFxuICogY291bGQgYmUgZmFrZSAoc2VlIG5vdGVzIGluIHRoZSBoZWFkZXIpLlxuICpcbiAqIFRoaXMgaGFuZGxlciB1c2VzIHNldmVyYWwgc3RyYXRlZ2llcyB0byB0cnkgdG8gYXBwcm94aW1hdGUgbmF0aXZlIHRyYWNrcGFkXG4gKiBzd2lwZSBuYXZpZ2F0aW9uLlxuICpcbiAqIElmIHRoZSB1c2VyIGhhcyBkcmFnZ2VkIGVub3VnaCB0byBjYXVzZSBhIG5hdmlnYXRpb24sIHRoZW4gZm9yIGEgc2hvcnRcbiAqIGRlbGF5IGZvbGxvd2luZyB0aGF0IG5hdmlnYXRpb24sIHN1YnNlcXVlbnQgd2hlZWwgZXZlbnRzIHdpbGwgYmUgaWdub3JlZC5cbiAqXG4gKiBGdXJ0aGVybW9yZSwgZm9sbHdvd2luZyBhIG5hdmlnYXRpb24sIHdlIGlnbm9yZSBhbGwgd2hlZWwgZXZlbnRzIHVudGlsIHdlXG4gKiByZWNlaXZlIGF0IGxlYXN0IG9uZSBldmVudCB3aGVyZSB0aGUgZXZlbnQncyBkZWx0YVggKGRpc3RhbmNlIHRyYXZlbGVkKSBpc1xuICogKmdyZWF0ZXIqIHRoYW4gdGhlIHByZXZpb3VzIGV2ZW50J3MgZGVsdGFYLiBUaGlzIGhlbHBzIHVzIGZpbHRlciBvdXQgdGhlXG4gKiBmYWtlIHdoZWVsIGV2ZW50cyBnZW5lcmF0ZWQgYnkgdGhlIGJyb3dzZXIgdG8gc2ltdWxhdGUgZGVjZWxlcmF0aW9uLlxuICpcbiAqL1xuZnVuY3Rpb24gd2hlZWwoZWxlbWVudCwgZXZlbnQpIHtcblxuICAvLyBTaW5jZSB3ZSBoYXZlIGEgbmV3IHdoZWVsIGV2ZW50LCByZXNldCBvdXIgdGltZXIgd2FpdGluZyBmb3IgdGhlIGxhc3RcbiAgLy8gd2hlZWwgZXZlbnQgdG8gcGFzcy5cbiAgaWYgKGVsZW1lbnQuX2xhc3RXaGVlbFRpbWVvdXQpIHtcbiAgICBjbGVhclRpbWVvdXQoZWxlbWVudC5fbGFzdFdoZWVsVGltZW91dCk7XG4gIH1cbiAgZWxlbWVudC5fbGFzdFdoZWVsVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHdoZWVsVGltZWRPdXQoZWxlbWVudCk7XG4gIH0sIFdIRUVMX1RJTUUpO1xuXG4gIGxldCBkZWx0YVggPSBldmVudC5kZWx0YVg7XG4gIGxldCBkZWx0YVkgPSBldmVudC5kZWx0YVk7XG5cbiAgLy8gU2VlIGlmIGVsZW1lbnQgZXZlbnQgcmVwcmVzZW50cyBhY2NlbGVyYXRpb24gb3IgZGVjZWxlcmF0aW9uLlxuICBsZXQgYWNjZWxlcmF0aW9uID0gc2lnbihkZWx0YVgpICogKGRlbHRhWCAtIGVsZW1lbnQuX2xhc3REZWx0YVgpO1xuICBlbGVtZW50Ll9sYXN0RGVsdGFYID0gZGVsdGFYO1xuICAvLyBjb25zb2xlLmxvZyhkZWx0YVggKyBcIiBcIiArIGFjY2VsZXJhdGlvbiArIFwiIFwiICsgZWxlbWVudC5fYWJzb3JiRGVjZWxlcmF0aW9uICsgXCIgXCIgKyBlbGVtZW50Ll9wb3N0TmF2aWdhdGVEZWxheUNvbXBsZXRlKTtcblxuICBpZiAoTWF0aC5hYnMoZGVsdGFYKSA8IE1hdGguYWJzKGRlbHRhWSkpIHtcbiAgICAvLyBNb3ZlIHdhcyBtb3N0bHkgdmVydGljYWwuIFRoZSB1c2VyIG1heSBiZSB0cnlpbmcgc2Nyb2xsIHdpdGggdGhlXG4gICAgLy8gdHJhY2twYWQvd2hlZWwuIFRvIGJlIG9uIHRoZSBzYWZlLCB3ZSBpZ25vcmUgc3VjaCBldmVudHMuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGVsZW1lbnQuX3Bvc3ROYXZpZ2F0ZURlbGF5Q29tcGxldGUpIHtcbiAgICAvLyBJdCdzIHRvbyBzb29uIGFmdGVyIGEgbmF2aWdhdGlvbjsgaWdub3JlIHRoZSBldmVudC5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG5cbiAgaWYgKGFjY2VsZXJhdGlvbiA+IDApIHtcbiAgICAvLyBUaGUgZXZlbnRzIGFyZSBub3QgKG9yIGFyZSBubyBsb25nZXIpIGRlY2VsZXJhdGluZywgc28gd2UgY2FuIHN0YXJ0XG4gICAgLy8gcGF5aW5nIGF0dGVudGlvbiB0byB0aGVtIGFnYWluLlxuICAgIGVsZW1lbnQuX2Fic29yYkRlY2VsZXJhdGlvbiA9IGZhbHNlO1xuICB9IGVsc2UgaWYgKGVsZW1lbnQuX2Fic29yYkRlY2VsZXJhdGlvbikge1xuICAgIC8vIFRoZSB3aGVlbCBldmVudCB3YXMgbGlrZWx5IGZha2VkIHRvIHNpbXVsYXRlIGRlY2VsZXJhdGlvbjsgaWdub3JlIGl0LlxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZWxlbWVudC5fd2hlZWxEaXN0YW5jZSArPSBkZWx0YVg7XG5cbiAgLy8gVXBkYXRlIHRoZSBwb3NpdGlvbiBvZiB0aGUgaXRlbXMgYmVpbmcgbmF2aWdhdGVkLlxuICBsZXQgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICBsZXQgcG9zaXRpb24gPSB3aWR0aCA+IDAgP1xuICAgIGVsZW1lbnQuX3doZWVsRGlzdGFuY2UgLyB3aWR0aCA6XG4gICAgMDtcbiAgZWxlbWVudC5zaG93VHJhbnNpdGlvbihmYWxzZSk7XG4gIHBvc2l0aW9uID0gc2lnbihwb3NpdGlvbikgKiBNYXRoLm1pbihNYXRoLmFicyhwb3NpdGlvbiksIDEpO1xuICBlbGVtZW50LnBvc2l0aW9uID0gcG9zaXRpb247XG5cbiAgLy8gSWYgdGhlIHVzZXIgaGFzIGRyYWdnZWQgZW5vdWdoIHRvIHJlYWNoIHRoZSBwcmV2aW91cy9uZXh0IGl0ZW0sIHRoZW5cbiAgLy8gY29tcGxldGUgYSBuYXZpZ2F0aW9uIHRvIHRoYXQgaXRlbS5cbiAgaWYgKHBvc2l0aW9uID09PSAxKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJnb1JpZ2h0XCIpO1xuICAgIGVsZW1lbnQuc2hvd1RyYW5zaXRpb24odHJ1ZSk7XG4gICAgZWxlbWVudC5nb1JpZ2h0KCk7XG4gICAgcG9zdE5hdmlnYXRlKGVsZW1lbnQpO1xuICB9IGVsc2UgaWYgKHBvc2l0aW9uID09PSAtMSkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiZ29MZWZ0XCIpO1xuICAgIGVsZW1lbnQuc2hvd1RyYW5zaXRpb24odHJ1ZSk7XG4gICAgZWxlbWVudC5nb0xlZnQoKTtcbiAgICBwb3N0TmF2aWdhdGUoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gQSBzdWZmaWNpZW50bHkgbG9uZyBwZXJpb2Qgb2YgdGltZSBoYXMgcGFzc2VkIHNpbmNlIHRoZSBsYXN0IHdoZWVsIGV2ZW50LlxuLy8gV2Ugc25hcCB0aGUgc2VsZWN0aW9uIHRvIHRoZSBjbG9zZXN0IGl0ZW0sIHRoZW4gcmVzZXQgb3VyIHN0YXRlLlxuZnVuY3Rpb24gd2hlZWxUaW1lZE91dChlbGVtZW50KSB7XG4gIC8vIGNvbnNvbGUubG9nKFwidGltZW91dFwiKTtcblxuICAvLyBTbmFwIHRvIHRoZSBjbG9zZXN0IGl0ZW0uXG4gIGVsZW1lbnQuc2hvd1RyYW5zaXRpb24odHJ1ZSk7XG4gIGxldCBwb3NpdGlvbiA9IGVsZW1lbnQucG9zaXRpb247XG4gIGlmIChwb3NpdGlvbiA+PSAwLjUpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcInNuYXAgcmlnaHRcIik7XG4gICAgZWxlbWVudC5nb1JpZ2h0KCk7XG4gIH0gZWxzZSBpZiAocG9zaXRpb24gPD0gLTAuNSkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwic25hcCBsZWZ0XCIpO1xuICAgIGVsZW1lbnQuZ29MZWZ0KCk7XG4gIH1cblxuICAvLyBUT0RPOiBMaXN0ZW4gZm9yIHRoZSB0cmFuc2l0aW9uIHRvIGNvbXBsZXRlLCBhbmQgdGhlbiByZXN0b3JlXG4gIC8vIHNob3dUcmFuc2l0aW9uIHRvIGZhbHNlIChvciB0aGUgcHJldmlvdXMgdmFsdWUpLlxuXG4gIHJlc2V0V2hlZWxUcmFja2luZyhlbGVtZW50KTtcbn1cbiIsIi8qXG4gKiBHaXZlbiB0d28gdGVtcGxhdGVzLCBcImZvbGRcIiBvbmUgaW5zaWRlIHRoZSBvdGhlci4gRm9yIG5vdywgdGhpcyBqdXN0IGVudGFpbHNcbiAqIHB1dHRpbmcgdGhlIGZpcnN0IGluc2lkZSB0aGUgbG9jYXRpb24gb2YgdGhlIGZpcnN0IDxjb250ZW50PiBub2RlIGluIHRoZVxuICogc2Vjb25kIHRlbXBsYXRlLlxuICpcbiAqIEV4YW1wbGU6IGlmIHRoZSBmaXJzdCAoc3ViKSB0ZW1wbGF0ZSBpc1xuICpcbiAqICAgPHRlbXBsYXRlPlxuICogICAgIEhlbGxvLCA8c2xvdD48L3Nsb3Q+LlxuICogICA8L3RlbXBsYXRlPlxuICpcbiAqIGFuZCB0aGUgc2Vjb25kIChiYXNlKSB0ZW1wbGF0ZSBpc1xuICpcbiAqICAgPHRlbXBsYXRlPlxuICogICAgIDxiPlxuICogICAgICAgPHNsb3Q+PC9zbG90PlxuICogICAgIDwvYj5cbiAqICAgPC90ZW1wbGF0ZT5cbiAqXG4gKiBUaGVuIHRoZSByZXR1cm5lZCBmb2xkZWQgdGVtcGxhdGUgaXNcbiAqXG4gKiAgIDx0ZW1wbGF0ZT5cbiAqICAgICA8Yj5cbiAqICAgICAgIEhlbGxvLCA8c2xvdD48L3Nsb3Q+LlxuICogICAgIDwvYj5cbiAqICAgPC90ZW1wbGF0ZT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcG9zZVRlbXBsYXRlcyhiYXNlVGVtcGxhdGUsIG1peGluVGVtcGxhdGUpIHtcblxuICBpZiAoIWJhc2VUZW1wbGF0ZSkge1xuICAgIC8vIE5vIGZvbGRpbmcgbmVjZXNzYXJ5LlxuICAgIHJldHVybiBtaXhpblRlbXBsYXRlO1xuICB9XG5cbiAgYmFzZVRlbXBsYXRlID0gbWFrZVRlbXBsYXRlKGJhc2VUZW1wbGF0ZSk7XG4gIG1peGluVGVtcGxhdGUgPSBtYWtlVGVtcGxhdGUobWl4aW5UZW1wbGF0ZSk7XG4gIGxldCBiYXNlRWxlbWVudCA9IGJhc2VUZW1wbGF0ZSAmJiBiYXNlVGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gIGxldCBtaXhpbkVsZW1lbnQgPSBtaXhpblRlbXBsYXRlICYmIG1peGluVGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgbGV0IGZvbGRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cbiAgLy8gRm9sZCBtaXhpbiB0ZW1wbGF0ZSBpbnRvIGZpcnN0IHNsb3QgZWxlbWVudCBpbiBiYXNlIHRlbXBsYXRlLlxuICAvLyBUT0RPOiBTdXBwb3J0IG5hbWVkIHNsb3RzLlxuICBsZXQgc2xvdE5vZGUgPSBiYXNlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzbG90Jyk7XG4gIGlmIChzbG90Tm9kZSkge1xuICAgIHNsb3ROb2RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG1peGluRWxlbWVudCwgc2xvdE5vZGUpO1xuICAgIGZvbGRlZC5jb250ZW50LmFwcGVuZENoaWxkKGJhc2VFbGVtZW50KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBObyBwbGFjZSBpbiBiYXNlIGZvciBtaXhpbiB0ZW1wbGF0ZSAtLSB0aHJvdyBtaXhpbiB0ZW1wbGF0ZSBhd2F5LlxuICAgIGZvbGRlZC5jb250ZW50LmFwcGVuZENoaWxkKGJhc2VFbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb2xkZWQ7XG59XG5cblxuZnVuY3Rpb24gbWFrZVRlbXBsYXRlKGh0bWxPclRlbXBsYXRlKSB7XG4gIHJldHVybiB0eXBlb2YgaHRtbE9yVGVtcGxhdGUgPT09ICdzdHJpbmcnID9cbiAgICBjcmVhdGVUZW1wbGF0ZVdpdGhJbm5lckhUTUwoaHRtbE9yVGVtcGxhdGUpIDpcbiAgICBodG1sT3JUZW1wbGF0ZTtcbn1cblxuXG4vLyBUT0RPOiBTaGFyZSB3aXRoIFRlbXBsYXRlU3RhbXBpbmcuXG4vLyBDb252ZXJ0IGEgcGxhaW4gc3RyaW5nIG9mIEhUTUwgaW50byBhIHJlYWwgdGVtcGxhdGUgZWxlbWVudC5cbmZ1bmN0aW9uIGNyZWF0ZVRlbXBsYXRlV2l0aElubmVySFRNTChpbm5lckhUTUwpIHtcbiAgbGV0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgLy8gUkVWSUVXOiBJcyB0aGVyZSBhbiBlYXNpZXIgd2F5IHRvIGRvIHRoaXM/XG4gIC8vIFdlJ2QgbGlrZSB0byBqdXN0IHNldCBpbm5lckhUTUwgb24gdGhlIHRlbXBsYXRlIGNvbnRlbnQsIGJ1dCBzaW5jZSBpdCdzXG4gIC8vIGEgRG9jdW1lbnRGcmFnbWVudCwgdGhhdCBkb2Vzbid0IHdvcmsuXG4gIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgd2hpbGUgKGRpdi5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICB0ZW1wbGF0ZS5jb250ZW50LmFwcGVuZENoaWxkKGRpdi5jaGlsZE5vZGVzWzBdKTtcbiAgfVxuICByZXR1cm4gdGVtcGxhdGU7XG59XG4iXX0=
