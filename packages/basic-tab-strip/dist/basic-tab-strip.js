(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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
 *     import 'SingleSelectionMixin' from 'basic-component-mixins/src/SingleSelectionMixin';
 *     import 'symbols' from 'basic-component-mixins/src/symbols';
 *
 *     class MyElement extends SingleSelectionMixin(HTMLElement) {
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
   * Symbol for the `[symbols.itemsChanged]` method.
   *
   * This method is invoked when the underlying contents change. It is also
   * invoked on component initialization – since the items have "changed" from
   * being nothing.
   */
  itemsChanged: (0, _createSymbol2.default)('itemsChanged'),

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

},{"./createSymbol":1}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
'use strict';

var _TabStripMixin = require('./src/TabStripMixin');

var _TabStripMixin2 = _interopRequireDefault(_TabStripMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Basic = window.Basic || {}; /*
                                    * This file is transpiled to create an ES5-compatible distribution in which
                                    * the package's main feature(s) are available via the window.Basic global.
                                    * If you're already using ES6 yourself, ignore this file, and instead import
                                    * the source file(s) you want from the src folder.
                                    */

window.Basic.TabStripMixin = _TabStripMixin2.default;

},{"./src/TabStripMixin":6}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createSymbol = require('../../basic-component-mixins/src/createSymbol');

var _createSymbol2 = _interopRequireDefault(_createSymbol);

var _renderArrayAsElements = require('../../basic-component-mixins/src/renderArrayAsElements');

var _renderArrayAsElements2 = _interopRequireDefault(_renderArrayAsElements);

var _symbols = require('../../basic-component-mixins/src/symbols');

var _symbols2 = _interopRequireDefault(_symbols);

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

/* Exported function extends a base class with TabStrip. */

exports.default = function (base) {

  /**
   * A template mixin which adds strip of tabs for selecting one of the
   * component's children.
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
   * The GenericMixin default styling of the tab strip will present the classic
   * skeumorphic look of rounded tabs attached to a surface. You can remove this
   * styling by setting the `GenericMixin` property/attribute to false.
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
        var handled = _this[_symbols2.default.keydown](event);
        if (handled) {
          event.preventDefault();
          event.stopPropagation();
        }
      });

      // Set defaults.
      if (typeof _this.tabPosition === 'undefined') {
        _this.tabPosition = _this[_symbols2.default.defaults].tabPosition;
      }
      return _this;
    }

    _createClass(TabStrip, [{
      key: _symbols2.default.applySelection,
      value: function value(item, selected) {
        if (_get(TabStrip.prototype.__proto__ || Object.getPrototypeOf(TabStrip.prototype), _symbols2.default.applySelection, this)) {
          _get(TabStrip.prototype.__proto__ || Object.getPrototypeOf(TabStrip.prototype), _symbols2.default.applySelection, this).call(this, item, selected);
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
      key: _symbols2.default.itemsChanged,
      value: function value() {
        if (_get(TabStrip.prototype.__proto__ || Object.getPrototypeOf(TabStrip.prototype), _symbols2.default.itemsChanged, this)) {
          _get(TabStrip.prototype.__proto__ || Object.getPrototypeOf(TabStrip.prototype), _symbols2.default.itemsChanged, this).call(this);
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
        var selectedItem = this.selectedItem;
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

          applySelectionToTab(element, item === selectedItem);

          return element;
        });
      }
    }, {
      key: _symbols2.default.keydown,
      value: function value(event) {
        var handled = _get(TabStrip.prototype.__proto__ || Object.getPrototypeOf(TabStrip.prototype), _symbols2.default.keydown, this) && _get(TabStrip.prototype.__proto__ || Object.getPrototypeOf(TabStrip.prototype), _symbols2.default.keydown, this).call(this, event);
        if (handled) {
          // If the event resulted in a change of selection, move the focus to the
          // newly-selected tab.
          this.tabs[this.selectedIndex].focus();
        }
        return handled;
      }

      /**
       * The position of the tab strip relative to the element's children. Valid
       * values are "top", "left", "right", and "bottom".
       *
       * @default "top"
       * @type {string}
       */

    }, {
      key: _symbols2.default.defaults,
      get: function get() {
        var defaults = _get(TabStrip.prototype.__proto__ || Object.getPrototypeOf(TabStrip.prototype), _symbols2.default.defaults, this) || {};
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
        var baseTemplate = _get(TabStrip.prototype.__proto__ || Object.getPrototypeOf(TabStrip.prototype), 'template', this) || '';
        return '\n        <style>\n        :host {\n          display: -webkit-flex;\n          display: flex;\n          -webkit-flex-direction: column;\n          flex-direction: column;\n          position: relative;\n        }\n\n        /*\n         * Avoid having tab container stretch across. User won\'t be able to see\n         * it, but since it handles the keyboard, in Mobile Safari a tap on the\n         * container background will cause the region to flash. Aligning the\n         * region collapses it down to hold its contents.\n         */\n        #tabs {\n          /* For IE bug (clicking tab produces gap between tab and page). */\n          display: -webkit-flex;\n          display: flex;\n          /*\n           * Try to obtain fast-tap behavior on all tabs.\n           * See https://webkit.org/blog/5610/more-responsive-tapping-on-ios/.\n           */\n          touch-action: manipulation;\n        }\n        :host(:not(.spread)) #tabs {\n          -webkit-align-self: flex-start;\n          align-self: flex-start;\n        }\n\n        #pages {\n          display: -webkit-flex;\n          display: flex;\n          -webkit-flex: 1;\n          flex: 1;\n          -webkit-flex-direction: column;\n          flex-direction: column;\n        }\n\n        #pages ::slotted(*) {\n          display: -webkit-flex;\n          display: flex;\n          -webkit-flex: 1;\n          flex: 1;\n        }\n\n        .tab {\n          cursor: pointer;\n          display: inline-block;\n          font-family: inherit;\n          font-size: inherit;\n          position: relative;\n        }\n\n        /* Left/right positions */\n        :host([tab-position="left"]),\n        :host([tab-position="right"]) {\n          -webkit-flex-direction: row;\n          flex-direction: row;\n        }\n        :host([tab-position="left"]) #tabs,\n        :host([tab-position="right"]) #tabs {\n          -webkit-flex-direction: column;\n          flex-direction: column;\n        }\n\n        /* Spread variant */\n        :host(.spread) #tabs {\n          -webkit-align-items: stretch;\n          align-items: stretch;\n        }\n        :host(.spread) .tab {\n          flex: 1;\n        }\n\n        /* Generic style */\n        :host([generic=""]) #pages {\n          background: white;\n          border: 1px solid #ccc;\n          box-sizing: border-box;\n        }\n\n        :host([generic=""]) .tab {\n          background: white;\n          border: 1px solid #ccc;\n          margin: 0;\n          padding: 0.5em 0.75em;\n          transition: border-color 0.25s;\n        }\n\n        :host([generic=""]) .tab.selected {\n          border-color: #ccc;\n          opacity: 1;\n        }\n\n        :host([generic=""]) .tab:hover {\n          background-color: #eee;\n        }\n\n        /* GenericMixin, top/bottom positions */\n        :host([generic=""][tab-position="top"]) .tab:not(:last-child),\n        :host([generic=""][tab-position="bottom"]) .tab:not(:last-child) {\n          margin-right: 0.2em;\n        }\n\n        /* GenericMixin, top position */\n        :host([generic=""][tab-position="top"]) .tab {\n          border-radius: 0.25em 0.25em 0 0;\n          margin-bottom: -1px;\n        }\n        :host([generic=""][tab-position="top"]) .tab.selected {\n          border-bottom-color: transparent;\n        }\n\n        /* GenericMixin, bottom position */\n        :host([generic=""][tab-position="bottom"]) .tab {\n          border-radius: 0 0 0.25em 0.25em;\n          margin-top: -1px;\n        }\n        :host([generic=""][tab-position="bottom"]) .tab.selected {\n          border-top-color: transparent;\n        }\n\n        /* GenericMixin, left/right positions */\n        :host([generic=""][tab-position="left"]) .tab:not(:last-child),\n        :host([generic=""][tab-position="right"]) .tab:not(:last-child) {\n          margin-bottom: 0.2em;\n        }\n\n        /* GenericMixin, left position */\n        :host([generic=""][tab-position="left"]) .tab {\n          border-radius: 0.25em 0 0 0.25em;\n          margin-right: -1px;\n        }\n        :host([generic=""][tab-position="left"]) .tab.selected {\n          border-right-color: transparent;\n        }\n\n        /* GenericMixin, right position */\n        :host([generic=""][tab-position="right"]) .tab {\n          border-radius: 0 0.25em 0.25em 0;\n          margin-left: -1px;\n        }\n        :host([generic=""][tab-position="right"]) .tab.selected {\n          border-left-color: transparent;\n        }\n        </style>\n\n        <div id="tabs" role="tablist"></div>\n        <div id="pages">\n          ' + baseTemplate + '\n        </div>\n      ';
      }
    }]);

    return TabStrip;
  }(base);

  return TabStrip;
};

function applySelectionToTab(tab, selected) {
  (0, _toggleClass2.default)(tab, 'selected', selected);
  tab.setAttribute('aria-selected', selected);
}

},{"../../basic-component-mixins/src/createSymbol":1,"../../basic-component-mixins/src/renderArrayAsElements":2,"../../basic-component-mixins/src/symbols":3,"../../basic-component-mixins/src/toggleClass":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9jcmVhdGVTeW1ib2wuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9yZW5kZXJBcnJheUFzRWxlbWVudHMuanMiLCJwYWNrYWdlcy9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9zeW1ib2xzLmpzIiwicGFja2FnZXMvYmFzaWMtY29tcG9uZW50LW1peGlucy9zcmMvdG9nZ2xlQ2xhc3MuanMiLCJwYWNrYWdlcy9iYXNpYy10YWItc3RyaXAvZ2xvYmFscy5qcyIsInBhY2thZ2VzL2Jhc2ljLXRhYi1zdHJpcC9zcmMvVGFiU3RyaXBNaXhpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O2tCQ29Dd0IsWTtBQXBDeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9DZSxTQUFTLFlBQVQsQ0FBc0IsV0FBdEIsRUFBbUM7QUFDaEQsU0FBTyxPQUFPLE1BQVAsS0FBa0IsVUFBbEIsR0FDTCxPQUFPLFdBQVAsQ0FESyxTQUVELFdBRk47QUFHRDs7Ozs7Ozs7QUN4Q0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBDQSxTQUFTLHFCQUFULENBQStCLEtBQS9CLEVBQXNDLFNBQXRDLEVBQWlELFVBQWpELEVBQTZEO0FBQzNEO0FBQ0EsUUFBTSxPQUFOLENBQWMsVUFBQyxJQUFELEVBQU8sS0FBUCxFQUFpQjtBQUM3QixRQUFNLGFBQWEsVUFBVSxVQUFWLENBQXFCLEtBQXJCLENBQW5CO0FBQ0EsUUFBTSxhQUFhLFdBQVcsSUFBWCxFQUFpQixVQUFqQixDQUFuQjtBQUNBLFFBQUksVUFBSixFQUFnQjtBQUNkLFVBQUksQ0FBQyxVQUFMLEVBQWlCO0FBQ2Ysa0JBQVUsV0FB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QTtBQUFBLElBOENBLElBOUNBOztBQXVWdkIsU0FBTyxRQUFQO0FBQ0QsQzs7QUFHRCxTQUFTLG1CQUFULENBQTZCLEdBQTdCLEVBQWtDLFFBQWxDLEVBQTRDO0FBQzFDLDZCQUFZLEdBQVosRUFBaUIsVUFBakIsRUFBNkIsUUFBN0I7QUFDQSxNQUFJLFlBQUosQ0FBaUIsZUFBakIsRUFBa0MsUUFBbEM7QUFDRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgYSBzeW1ib2wgdGhhdCBjYW4gYmUgdXNlZCBmb3IgYXNzb2NpYXRpbmcgcHJpdmF0ZVxuICogZGF0YSB3aXRoIGFuIGVsZW1lbnQuXG4gKlxuICogTWl4aW5zIGFuZCBjb21wb25lbnQgY2xhc3NlcyBvZnRlbiB3YW50IHRvIGFzc29jaWF0ZSBwcml2YXRlIGRhdGEgd2l0aCBhblxuICogZWxlbWVudCBpbnN0YW5jZSwgYnV0IEphdmFTY3JpcHQgZG9lcyBub3QgaGF2ZSBkaXJlY3Qgc3VwcG9ydCBmb3IgdHJ1ZVxuICogcHJpdmF0ZSBwcm9wZXJ0aWVzLiBPbmUgYXBwcm9hY2ggaXMgdG8gdXNlIHRoZVxuICogW1N5bWJvbF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvU3ltYm9sKVxuICogZGF0YSB0eXBlIHRvIHNldCBhbmQgcmV0cmlldmUgZGF0YSBvbiBhbiBlbGVtZW50LlxuICpcbiAqIFVuZm9ydHVuYXRlbHksIHRoZSBTeW1ib2wgdHlwZSBpcyBub3QgYXZhaWxhYmxlIGluIEludGVybmV0IEV4cGxvcmVyIDExLiBUaGVcbiAqIGBjcmVhdGVTeW1ib2xgIGhlbHBlciBmdW5jdGlvbiBleGlzdHMgYXMgYSB3b3JrYXJvdW5kIGZvciBJRSAxMS4gUmF0aGVyIHRoYW5cbiAqIHJldHVybmluZyBhIHRydWUgU3ltYm9sLCBpdCBzaW1wbHkgcmV0dXJucyBhbiB1bmRlcnNjb3JlLXByZWZpeGVkIHN0cmluZy5cbiAqXG4gKiBVc2FnZTpcbiAqXG4gKiAgICAgY29uc3QgZm9vU3ltYm9sID0gY3JlYXRlU3ltYm9sKCdmb28nKTtcbiAqXG4gKiAgICAgY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICogICAgICAgZ2V0IGZvbygpIHtcbiAqICAgICAgICAgcmV0dXJuIHRoaXNbZm9vU3ltYm9sXTtcbiAqICAgICAgIH1cbiAqICAgICAgIHNldCBmb28odmFsdWUpIHtcbiAqICAgICAgICAgdGhpc1tmb29TeW1ib2xdID0gdmFsdWU7XG4gKiAgICAgICB9XG4gKiAgICAgfVxuICpcbiAqIEluIElFIDExLCB0aGlzIHNhbXBsZSB3aWxsIFwiaGlkZVwiIGRhdGEgYmVoaW5kIGFuIGluc3RhbmNlIHByb3BlcnR5IHRoaXMuX2Zvby5cbiAqIFRoZSB1c2Ugb2YgdGhlIHVuZGVyc2NvcmUgaXMgbWVhbnQgdG8gcmVkdWNlIChub3QgZWxpbWluYXRlKSB0aGUgcG90ZW50aWFsXG4gKiBmb3IgbmFtZSBjb25mbGljdHMsIGFuZCBkaXNjb3VyYWdlIChub3QgcHJldmVudCkgZXh0ZXJuYWwgYWNjZXNzIHRvIHRoaXNcbiAqIGRhdGEuIEluIG1vZGVybiBicm93c2VycywgdGhlIGFib3ZlIGNvZGUgd2lsbCBlbGltaW5hdGUgdGhlIHBvdGVudGlhbCBvZlxuICogbmFtaW5nIGNvbmZsaWN0cywgYW5kIGJldHRlciBoaWRlIHRoZSBkYXRhIGJlaGluZCBhIHJlYWwgU3ltYm9sLlxuICpcbiAqIEBmdW5jdGlvbiBjcmVhdGVTeW1ib2xcbiAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvbiAtIEEgc3RyaW5nIHRvIGlkZW50aWZ5IHRoZSBzeW1ib2wgd2hlbiBkZWJ1Z2dpbmdcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU3ltYm9sKGRlc2NyaXB0aW9uKSB7XG4gIHJldHVybiB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nID9cbiAgICBTeW1ib2woZGVzY3JpcHRpb24pIDpcbiAgICBgXyR7ZGVzY3JpcHRpb259YDtcbn1cbiIsIi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciByZW5kZXJpbmcgYW4gYXJyYXkgb2YgaXRlbXMgYXMgZWxlbWVudHMuXG4gKlxuICogVGhpcyBpcyBub3QgYSBtaXhpbiwgYnV0IGEgZnVuY3Rpb24gY29tcG9uZW50cyBjYW4gdXNlIGlmIHRoZXkgbmVlZCB0b1xuICogZ2VuZXJhdGUgYSBzZXQgb2YgZWxlbWVudHMgZm9yIHRoZSBpdGVtcyBpbiBhbiBhcnJheS5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHdpbGwgcmV1c2UgZXhpc3RpbmcgZWxlbWVudHMgaWYgcG9zc2libGUuIEUuZy4sIGlmIGl0IGlzIGNhbGxlZFxuICogdG8gcmVuZGVyIGFuIGFycmF5IG9mIDQgaXRlbXMsIGFuZCBsYXRlciBjYWxsZWQgdG8gcmVuZGVyIGFuIGFycmF5IG9mIDVcbiAqIGl0ZW1zLCBpdCBjYW4gcmV1c2UgdGhlIGV4aXN0aW5nIDQgaXRlbXMsIGNyZWF0aW5nIGp1c3Qgb25lIG5ldyBlbGVtZW50LlxuICogTm90ZSwgaG93ZXZlciwgdGhhdCB0aGlzIHJlLXJlbmRlcmluZyBpcyBub3QgYXV0b21hdGljLiBJZiwgYWZ0ZXIgY2FsbGluZ1xuICogdGhpcyBmdW5jdGlvbiwgeW91IG1hbmlwdWxhdGUgdGhlIGFycmF5IHlvdSB1c2VkLCB5b3UgbXVzdCBzdGlsbCBjYWxsIHRoaXNcbiAqIGZ1bmN0aW9uIGFnYWluIHRvIHJlLXJlbmRlciB0aGUgYXJyYXkuXG4gKlxuICogVGhlIGByZW5kZXJJdGVtYCBwYXJhbWV0ZXIgdGFrZXMgYSBmdW5jdGlvbiBvZiB0d28gYXJndW1lbnRzOiBhbiBpdGVtIHRvXG4gKiB0byByZW5kZXIsIGFuZCBhbiBleGlzdGluZyBlbGVtZW50IChpZiBvbmUgZXhpc3RzKSB3aGljaCBjYW4gYmUgcmVwdXJwb3NlZCB0b1xuICogcmVuZGVyIHRoYXQgaXRlbS4gSWYgdGhlIGxhdHRlciBhcmd1bWVudCBpcyBudWxsLCB0aGUgYHJlbmRlckl0ZW0oKWAgZnVuY3Rpb25cbiAqIHNob3VsZCBjcmVhdGUgYSBuZXcgZWxlbWVudCBhbmQgcmV0dXJuIGl0LiBUaGUgZnVuY3Rpb24gc2hvdWxkIGRvIHRoZSBzYW1lXG4gKiBpZiB0aGUgc3VwcGxpZWQgZXhpc3RpbmcgZWxlbWVudCBpcyBub3Qgc3VpdGFibGUgZm9yIHJlbmRlcmluZyB0aGUgZ2l2ZW5cbiAqIGl0ZW07IHRoZSByZXR1cm5lZCBlbGVtZW50IHdpbGwgYmUgdXNlZCB0byByZXBsYWNlIHRoZSBleGlzdGluZyBvbmUuIElmIHRoZVxuICogZXhpc3RpbmcgZWxlbWVudCAqaXMqIHN1aXRhYmxlLCB0aGUgZnVuY3Rpb24gY2FuIHNpbXBseSB1cGRhdGUgaXQgYW5kIHJldHVyblxuICogaXQgYXMgaXMuXG4gKlxuICogRXhhbXBsZTogVGhlIGZvbGxvd2luZyB3aWxsIHJlbmRlciBhbiBhcnJheSBvZiBzdHJpbmdzIGluIGRpdnMgYXMgY2hpbGRyZW5cbiAqIG9mIHRoZSBgY29udGFpbmVyYCBlbGVtZW50OlxuICpcbiAqICAgICBsZXQgc3RyaW5ncyA9IFsnYScsICdiJywgJ2MnLCAuLi5dO1xuICogICAgIGxldCBjb250YWluZXIgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoLi4uKTtcbiAqICAgICByZW5kZXJBcnJheUFzRWxlbWVudHMoc3RyaW5ncywgY29udGFpbmVyLCAoc3RyaW5nLCBlbGVtZW50KSA9PiB7XG4gKiAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAqICAgICAgICAgLy8gTm8gZWxlbWVudCBleGlzdHMgeWV0LCBzbyBjcmVhdGUgYSBuZXcgb25lLlxuICogICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gKiAgICAgICB9XG4gKiAgICAgICAvLyBTZXQvdXBkYXRlIHRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIGVsZW1lbnQuXG4gKiAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gc3RyaW5nO1xuICogICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gKiAgICAgfSk7XG4gKlxuICogQHBhcmFtIHtBcnJheX0gaXRlbXMgLSB0aGUgaXRlbXMgdG8gcmVuZGVyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXIgLSB0aGUgcGFyZW50IHRoYXQgd2lsbCBob2xkIHRoZSBlbGVtZW50c1xuICogQHBhcmFtIHtmdW5jdGlvbn0gcmVuZGVySXRlbSAtIHJldHVybnMgYSBuZXcgZWxlbWVudCBmb3IgYW4gaXRlbSwgb3JcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXB1cnBvc2VzIGFuIGV4aXN0aW5nIGVsZW1lbnQgZm9yIGFuIGl0ZW1cbiAqL1xuZnVuY3Rpb24gcmVuZGVyQXJyYXlBc0VsZW1lbnRzKGl0ZW1zLCBjb250YWluZXIsIHJlbmRlckl0ZW0pIHtcbiAgLy8gQ3JlYXRlIGEgbmV3IHNldCBvZiBlbGVtZW50cyBmb3IgdGhlIGN1cnJlbnQgaXRlbXMuXG4gIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgY29uc3Qgb2xkRWxlbWVudCA9IGNvbnRhaW5lci5jaGlsZE5vZGVzW2luZGV4XTtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gcmVuZGVySXRlbShpdGVtLCBvbGRFbGVtZW50KTtcbiAgICBpZiAobmV3RWxlbWVudCkge1xuICAgICAgaWYgKCFvbGRFbGVtZW50KSB7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcbiAgICAgIH0gZWxzZSBpZiAobmV3RWxlbWVudCAhPT0gb2xkRWxlbWVudCkge1xuICAgICAgICBjb250YWluZXIucmVwbGFjZUNoaWxkKG5ld0VsZW1lbnQsIG9sZEVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gSWYgdGhlIGFycmF5IHNocmFuaywgcmVtb3ZlIHRoZSBleHRyYSBlbGVtZW50cyB3aGljaCBhcmUgbm8gbG9uZ2VyIG5lZWRlZC5cbiAgd2hpbGUgKGNvbnRhaW5lci5jaGlsZE5vZGVzLmxlbmd0aCA+IGl0ZW1zLmxlbmd0aCkge1xuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIuY2hpbGROb2Rlc1tpdGVtcy5sZW5ndGhdKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJBcnJheUFzRWxlbWVudHM7XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4vY3JlYXRlU3ltYm9sJztcblxuLyoqXG4gKiBBIGNvbGxlY3Rpb24gb2YgU3ltYm9sIG9iamVjdHMgZm9yIHN0YW5kYXJkIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzLlxuICpcbiAqIFRoZXNlIFN5bWJvbCBvYmplY3RzIGFyZSB1c2VkIHRvIGFsbG93IG1peGlucyBhbmQgYSBjb21wb25lbnQgdG8gaW50ZXJuYWxseVxuICogY29tbXVuaWNhdGUsIHdpdGhvdXQgZXhwb3NpbmcgdGhlc2UgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBpbiB0aGUgY29tcG9uZW50J3NcbiAqIHB1YmxpYyBBUEkuXG4gKlxuICogVG8gdXNlIHRoZXNlIFN5bWJvbCBvYmplY3RzIGluIHlvdXIgb3duIGNvbXBvbmVudCwgaW5jbHVkZSB0aGlzIG1vZHVsZSBhbmRcbiAqIHRoZW4gY3JlYXRlIGEgcHJvcGVydHkgb3IgbWV0aG9kIHdob3NlIGtleSBpcyB0aGUgZGVzaXJlZCBTeW1ib2wuXG4gKlxuICogICAgIGltcG9ydCAnU2luZ2xlU2VsZWN0aW9uTWl4aW4nIGZyb20gJ2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL1NpbmdsZVNlbGVjdGlvbk1peGluJztcbiAqICAgICBpbXBvcnQgJ3N5bWJvbHMnIGZyb20gJ2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL3N5bWJvbHMnO1xuICpcbiAqICAgICBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBTaW5nbGVTZWxlY3Rpb25NaXhpbihIVE1MRWxlbWVudCkge1xuICogICAgICAgW3N5bWJvbHMuYXBwbHlTZWxlY3Rpb25dKGl0ZW0sIHNlbGVjdGVkKSB7XG4gKiAgICAgICAgIC8vIFRoaXMgd2lsbCBiZSBpbnZva2VkIHdoZW5ldmVyIGFuIGl0ZW0gaXMgc2VsZWN0ZWQvZGVzZWxlY3RlZC5cbiAqICAgICAgIH1cbiAqICAgICB9XG4gKlxuICogQG1vZHVsZSBzeW1ib2xzXG4gKi9cbmNvbnN0IHN5bWJvbHMgPSB7XG5cbiAgLyoqXG4gICAqIFN5bWJvbCBmb3IgdGhlIGBhcHBseVNlbGVjdGlvbmAgbWV0aG9kLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBhcHBsaWVzIHRoZSBpbmRpY2F0ZWQgc2VsZWN0aW9uIHN0YXRlIHRvIGFuIGl0ZW0uXG4gICAqXG4gICAqIEBmdW5jdGlvbiBhcHBseVNlbGVjdGlvblxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gdGhlIGl0ZW0gYmVpbmcgc2VsZWN0ZWQvZGVzZWxlY3RlZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNlbGVjdGVkIC0gdHJ1ZSBpZiB0aGUgaXRlbSBpcyBzZWxlY3RlZCwgZmFsc2UgaWYgbm90XG4gICAqL1xuICBhcHBseVNlbGVjdGlvbjogY3JlYXRlU3ltYm9sKCdhcHBseVNlbGVjdGlvbicpLFxuXG4gIC8qKlxuICAgKiBTeW1ib2wgZm9yIHRoZSBgZGVmYXVsdHNgIHByb3BlcnR5LlxuICAgKlxuICAgKiBUaGlzIHByb3BlcnR5IGNhbiBiZSB1c2VkIHRvIHNldCBvciBvdmVycmlkZSBkZWZhdWx0cyB0aGF0IHdpbGwgYmUgYXBwbGllZFxuICAgKiB0byBhIG5ldyBjb21wb25lbnQgaW5zdGFuY2UuIFdoZW4gaW1wbGVtZW50aW5nIHRoaXMgcHJvcGVydHksIHRha2UgY2FyZSB0b1xuICAgKiBmaXJzdCBhY3F1aXJlIGFueSBkZWZhdWx0cyBkZWZpbmVkIGJ5IHRoZSBzdXBlcmNsYXNzLiBUaGUgc3RhbmRhcmQgaWRpb20gaXNcbiAgICogYXMgZm9sbG93czpcbiAgICpcbiAgICogICAgIGdldCBbc3ltYm9scy5kZWZhdWx0c10oKSB7XG4gICAqICAgICAgIGNvbnN0IGRlZmF1bHRzID0gc3VwZXJbc3ltYm9scy5kZWZhdWx0c10gfHwge307XG4gICAqICAgICAgIC8vIFNldCBvciBvdmVycmlkZSBkZWZhdWx0IHZhbHVlcyBoZXJlXG4gICAqICAgICAgIGRlZmF1bHRzLmN1c3RvbVByb3BlcnR5ID0gZmFsc2U7XG4gICAqICAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICogICAgIH1cbiAgICpcbiAgICogQHZhciB7b2JqZWN0fSBkZWZhdWx0c1xuICAgKi9cbiAgZGVmYXVsdHM6IGNyZWF0ZVN5bWJvbCgnZGVmYXVsdHMnKSxcblxuICAvKipcbiAgICogU3ltYm9sIGZvciB0aGUgYGRyYWdnaW5nYCBwcm9wZXJ0eS5cbiAgICpcbiAgICogQ29tcG9uZW50cyBsaWtlIGNhcm91c2VscyBvZnRlbiBkZWZpbmUgYW5pbWF0ZWQgQ1NTIHRyYW5zaXRpb25zIGZvclxuICAgKiBzbGlkaW5nIGVmZmVjdHMuIFN1Y2ggYSB0cmFuc2l0aW9uIHNob3VsZCB1c3VhbGx5ICpub3QqIGJlIGFwcGxpZWQgd2hpbGVcbiAgICogdGhlIHVzZXIgaXMgZHJhZ2dpbmcsIGJlY2F1c2UgYSBDU1MgYW5pbWF0aW9uIHdpbGwgaW50cm9kdWNlIGEgbGFnIHRoYXRcbiAgICogbWFrZXMgdGhlIHN3aXBlIGZlZWwgc2x1Z2dpc2guIEluc3RlYWQsIGFzIGxvbmcgYXMgdGhlIHVzZXIgaXMgZHJhZ2dpbmdcbiAgICogd2l0aCB0aGVpciBmaW5nZXIgZG93biwgdGhlIHRyYW5zaXRpb24gc2hvdWxkIGJlIHN1cHByZXNzZWQuIFdoZW4gdGhlXG4gICAqIHVzZXIgcmVsZWFzZXMgdGhlaXIgZmluZ2VyLCB0aGUgdHJhbnNpdGlvbiBjYW4gYmUgcmVzdG9yZWQsIGFsbG93aW5nIHRoZVxuICAgKiBhbmltYXRpb24gdG8gc2hvdyB0aGUgY2Fyb3VzZWwgc2xpZGluZyBpbnRvIGl0cyBmaW5hbCBwb3NpdGlvbi5cbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59IHRydWUgaWYgYSBkcmFnIGlzIGluIHByb2dyZXNzLCBmYWxzZSBpZiBub3QuXG4gICAqL1xuICBkcmFnZ2luZzogY3JlYXRlU3ltYm9sKCdkcmFnZ2luZycpLFxuXG4gIC8qKlxuICAgKiBTeW1ib2wgZm9yIHRoZSBgZ29Eb3duYCBtZXRob2QuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSBkb3duLlxuICAgKlxuICAgKiBAZnVuY3Rpb24gZ29Eb3duXG4gICAqL1xuICBnb0Rvd246IGNyZWF0ZVN5bWJvbCgnZ29Eb3duJyksXG5cbiAgLyoqXG4gICAqIFN5bWJvbCBmb3IgdGhlIGBnb0VuZGAgbWV0aG9kLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgdG8gdGhlIGVuZCAoZS5nLixcbiAgICogb2YgYSBsaXN0KS5cbiAgICpcbiAgICogQGZ1bmN0aW9uIGdvRW5kXG4gICAqL1xuICBnb0VuZDogY3JlYXRlU3ltYm9sKCdnb0VuZCcpLFxuXG4gIC8qKlxuICAgKiBTeW1ib2wgZm9yIHRoZSBgZ29MZWZ0YCBtZXRob2QuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSBsZWZ0LlxuICAgKlxuICAgKiBAZnVuY3Rpb24gZ29MZWZ0XG4gICAqL1xuICBnb0xlZnQ6IGNyZWF0ZVN5bWJvbCgnZ29MZWZ0JyksXG5cbiAgLyoqXG4gICAqIFN5bWJvbCBmb3IgdGhlIGBnb1JpZ2h0YCBtZXRob2QuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSByaWdodC5cbiAgICpcbiAgICogQGZ1bmN0aW9uIGdvUmlnaHRcbiAgICovXG4gIGdvUmlnaHQ6IGNyZWF0ZVN5bWJvbCgnZ29SaWdodCcpLFxuXG4gIC8qKlxuICAgKiBTeW1ib2wgZm9yIHRoZSBgZ29TdGFydGAgbWV0aG9kLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gZ28vbmF2aWdhdGUgdG8gdGhlIHN0YXJ0XG4gICAqIChlLmcuLCBvZiBhIGxpc3QpLlxuICAgKlxuICAgKiBAZnVuY3Rpb24gZ29TdGFydFxuICAgKi9cbiAgZ29TdGFydDogY3JlYXRlU3ltYm9sKCdnb1N0YXJ0JyksXG5cbiAgLyoqXG4gICAqIFN5bWJvbCBmb3IgdGhlIGBnb1VwYCBtZXRob2QuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBnby9uYXZpZ2F0ZSB1cC5cbiAgICpcbiAgICogQGZ1bmN0aW9uIGdvVXBcbiAgICovXG4gIGdvVXA6IGNyZWF0ZVN5bWJvbCgnZ29VcCcpLFxuXG4gIC8qKlxuICAgKiBTeW1ib2wgZm9yIHRoZSBgaXRlbUFkZGVkYCBtZXRob2QuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiBhIG5ldyBpdGVtIGlzIGFkZGVkIHRvIGEgbGlzdC5cbiAgICpcbiAgICogQGZ1bmN0aW9uIGl0ZW1BZGRlZFxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpdGVtIC0gdGhlIGl0ZW0gYmVpbmcgc2VsZWN0ZWQvZGVzZWxlY3RlZFxuICAgKi9cbiAgaXRlbUFkZGVkOiBjcmVhdGVTeW1ib2woJ2l0ZW1BZGRlZCcpLFxuXG5cbiAgLyoqXG4gICAqIFN5bWJvbCBmb3IgdGhlIGBbc3ltYm9scy5pdGVtc0NoYW5nZWRdYCBtZXRob2QuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiB0aGUgdW5kZXJseWluZyBjb250ZW50cyBjaGFuZ2UuIEl0IGlzIGFsc29cbiAgICogaW52b2tlZCBvbiBjb21wb25lbnQgaW5pdGlhbGl6YXRpb24g4oCTIHNpbmNlIHRoZSBpdGVtcyBoYXZlIFwiY2hhbmdlZFwiIGZyb21cbiAgICogYmVpbmcgbm90aGluZy5cbiAgICovXG4gIGl0ZW1zQ2hhbmdlZDogY3JlYXRlU3ltYm9sKCdpdGVtc0NoYW5nZWQnKSxcblxuICAvKipcbiAgICogU3ltYm9sIGZvciB0aGUgYGtleWRvd25gIG1ldGhvZC5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuIGFuIGVsZW1lbnQgcmVjZWl2ZXMgYSBga2V5ZG93bmAgZXZlbnQuXG4gICAqXG4gICAqIEBmdW5jdGlvbiBrZXlkb3duXG4gICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnQgLSB0aGUgZXZlbnQgYmVpbmcgcHJvY2Vzc2VkXG4gICAqL1xuICBrZXlkb3duOiBjcmVhdGVTeW1ib2woJ2tleWRvd24nKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgc3ltYm9scztcbiIsIi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBzdGFuZGFyZCBjbGFzc0xpc3QudG9nZ2xlKCkgYmVoYXZpb3Igb24gb2xkIGJyb3dzZXJzLFxuICogbmFtZWx5IElFIDExLlxuICpcbiAqIFRoZSBzdGFuZGFyZFxuICogW2NsYXNzbGlzdF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0VsZW1lbnQvY2xhc3NMaXN0KVxuICogb2JqZWN0IGhhcyBhIGB0b2dnbGUoKWAgZnVuY3Rpb24gdGhhdCBzdXBwb3J0cyBhIHNlY29uZCBCb29sZWFuIHBhcmFtZXRlclxuICogdGhhdCBjYW4gYmUgdXNlZCB0byBzdWNjaW5jdGx5IHR1cm4gYSBjbGFzcyBvbiBvciBvZmYuIFRoaXMgZmVhdHVyZSBpcyBvZnRlblxuICogdXNlZnVsIGluIGRlc2lnbmluZyBjdXN0b20gZWxlbWVudHMsIHdoaWNoIG1heSB3YW50IHRvIGV4dGVybmFsbHkgcmVmbGVjdFxuICogY29tcG9uZW50IHN0YXRlIGluIGEgQ1NTIGNsYXNzIHRoYXQgY2FuIGJlIHVzZWQgZm9yIHN0eWxpbmcgcHVycG9zZXMuXG4gKlxuICogVW5mb3J0dW5hdGVseSwgSUUgMTEgZG9lcyBub3Qgc3VwcG9ydCB0aGUgQm9vbGVhbiBwYXJhbWV0ZXIgdG9cbiAqIGBjbGFzc0xpc3QudG9nZ2xlKClgLiBUaGlzIGhlbHBlciBmdW5jdGlvbiBiZWhhdmVzIGxpa2UgdGhlIHN0YW5kYXJkXG4gKiBgdG9nZ2xlKClgLCBpbmNsdWRpbmcgc3VwcG9ydCBmb3IgdGhlIEJvb2xlYW4gcGFyYW1ldGVyLCBzbyB0aGF0IGl0IGNhbiBiZVxuICogdXNlZCBldmVuIG9uIElFIDExLlxuICpcbiAqIEBmdW5jdGlvbiB0b2dnbGVDbGFzc1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIFRoZSBlbGVtZW50IHRvIG1vZGlmeVxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAtIFRoZSBjbGFzcyB0byBhZGQvcmVtb3ZlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZV0gLSBGb3JjZSB0aGUgY2xhc3MgdG8gYmUgYWRkZWQgKGlmIHRydWUpIG9yIHJlbW92ZWRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpZiBmYWxzZSlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lLCBmb3JjZSkge1xuICBjb25zdCBjbGFzc0xpc3QgPSBlbGVtZW50LmNsYXNzTGlzdDtcbiAgY29uc3QgYWRkQ2xhc3MgPSAodHlwZW9mIGZvcmNlID09PSAndW5kZWZpbmVkJykgP1xuICAgICFjbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSA6XG4gICAgZm9yY2U7XG4gIGlmIChhZGRDbGFzcykge1xuICAgIGNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBjbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gIH1cbiAgcmV0dXJuIGFkZENsYXNzO1xufVxuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyB0cmFuc3BpbGVkIHRvIGNyZWF0ZSBhbiBFUzUtY29tcGF0aWJsZSBkaXN0cmlidXRpb24gaW4gd2hpY2hcbiAqIHRoZSBwYWNrYWdlJ3MgbWFpbiBmZWF0dXJlKHMpIGFyZSBhdmFpbGFibGUgdmlhIHRoZSB3aW5kb3cuQmFzaWMgZ2xvYmFsLlxuICogSWYgeW91J3JlIGFscmVhZHkgdXNpbmcgRVM2IHlvdXJzZWxmLCBpZ25vcmUgdGhpcyBmaWxlLCBhbmQgaW5zdGVhZCBpbXBvcnRcbiAqIHRoZSBzb3VyY2UgZmlsZShzKSB5b3Ugd2FudCBmcm9tIHRoZSBzcmMgZm9sZGVyLlxuICovXG5cbmltcG9ydCBUYWJTdHJpcE1peGluIGZyb20gJy4vc3JjL1RhYlN0cmlwTWl4aW4nO1xuXG53aW5kb3cuQmFzaWMgPSB3aW5kb3cuQmFzaWMgfHwge307XG53aW5kb3cuQmFzaWMuVGFiU3RyaXBNaXhpbiA9IFRhYlN0cmlwTWl4aW47XG4iLCJpbXBvcnQgY3JlYXRlU3ltYm9sIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL2NyZWF0ZVN5bWJvbCc7XG5pbXBvcnQgcmVuZGVyQXJyYXlBc0VsZW1lbnRzIGZyb20gJy4uLy4uL2Jhc2ljLWNvbXBvbmVudC1taXhpbnMvc3JjL3JlbmRlckFycmF5QXNFbGVtZW50cyc7XG5pbXBvcnQgc3ltYm9scyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy9zeW1ib2xzJztcbmltcG9ydCB0b2dnbGVDbGFzcyBmcm9tICcuLi8uLi9iYXNpYy1jb21wb25lbnQtbWl4aW5zL3NyYy90b2dnbGVDbGFzcyc7XG5cblxuLy8gU3ltYm9scyBmb3IgcHJpdmF0ZSBkYXRhIG1lbWJlcnMgb24gYW4gZWxlbWVudC5cbmNvbnN0IHRhYlBvc2l0aW9uU3ltYm9sID0gY3JlYXRlU3ltYm9sKCd0YWJQb3NpdGlvbicpO1xuXG5cbi8vIFVzZWQgdG8gYXNzaWduIHVuaXF1ZSBJRHMgdG8gdGFicyBmb3IgQVJJQSBwdXJwb3Nlcy5cbmxldCBpZENvdW50ID0gMDtcblxuXG4vKiBFeHBvcnRlZCBmdW5jdGlvbiBleHRlbmRzIGEgYmFzZSBjbGFzcyB3aXRoIFRhYlN0cmlwLiAqL1xuZXhwb3J0IGRlZmF1bHQgKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogQSB0ZW1wbGF0ZSBtaXhpbiB3aGljaCBhZGRzIHN0cmlwIG9mIHRhYnMgZm9yIHNlbGVjdGluZyBvbmUgb2YgdGhlXG4gICAqIGNvbXBvbmVudCdzIGNoaWxkcmVuLlxuICAgKlxuICAgKiBUaGUgY29tcG9uZW50IGNyZWF0ZXMgYSB0YWIgdG8gcmVwcmVzZW50IGVhY2ggb2YgaXRzIGxpZ2h0IERPTSBjaGlsZHJlbi5cbiAgICogVGhlIHRhYiBuYW1lIGlzIG9idGFpbmVkIGJ5IGV4YW1pbmluZyB0aGUgY2hpbGRyZW4gZm9yIGFuIGBhcmlhLWxhYmVsYFxuICAgKiBwcm9wZXJ0eS5cbiAgICpcbiAgICogVXNlIHRhYnMgd2hlbiB5b3Ugd2FudCB0byBwcm92aWRlIGEgbGFyZ2Ugc2V0IG9mIG9wdGlvbnMgb3IgZWxlbWVudHMgdGhhblxuICAgKiBjYW4gY29tZm9ydGFibHkgZml0IGlubGluZSwgdGhlIG9wdGlvbnMgY2FuIGJlIGNvaGVyZW50bHkgZ3JvdXBlZCBpbnRvIHBhZ2VzLFxuICAgKiBhbmQgeW91IHdhbnQgdG8gYXZvaWQgbWFraW5nIHRoZSB1c2VyIG5hdmlnYXRlIHRvIGEgc2VwYXJhdGUgcGFnZS4gVGFicyB3b3JrXG4gICAqIGJlc3QgaWYgeW91IG9ubHkgaGF2ZSBhIHNtYWxsIGhhbmRmdWwgb2YgcGFnZXMsIHNheSAy4oCTNy5cbiAgICpcbiAgICogVGhlIGJhc2ljLXRhYi1zdHJpcCBjb21wb25lbnQgZG9lcyBub3QgZGVmaW5lIGhvdyBhIHNlbGVjdGVkIGNoaWxkIGlzXG4gICAqIHJlcHJlc2VudGVkLiBJZiB5b3UncmUgbG9va2luZyBmb3IgdGhlIHN0YW5kYXJkIGJlaGF2aW9yIG9mIGp1c3Qgc2hvd2luZyBvbmx5XG4gICAqIHRoZSBzZWxlY3RlZCBjaGlsZCwgeW91IGNhbiB1c2UgdGhpcyBjb21wb25lbnQgaW4gY29tYmluYXRpb24gd2l0aCB0aGVcbiAgICogc2VwYXJhdGUgW2Jhc2ljLW1vZGVzXSguLi9iYXNpYy1tb2Rlcy8pIGNvbXBvbmVudC4gQSB0eXBpY2FsIGFycmFuZ2VtZW50OlxuICAgKlxuICAgKiAgICAgPGJhc2ljLXRhYi1zdHJpcD5cbiAgICogICAgICAgPGJhc2ljLW1vZGVzIGFyaWEtbGFiZWw9XCJQYW5lbHNcIj5cbiAgICogICAgICAgICA8ZGl2IGFyaWEtbGFiZWw9XCJPbmVcIj5QYWdlIG9uZTwvZGl2PlxuICAgKiAgICAgICAgIDxkaXYgYXJpYS1sYWJlbD1cIlR3b1wiPlBhZ2UgdHdvPC9kaXY+XG4gICAqICAgICAgICAgPGRpdiBhcmlhLWxhYmVsPVwiVGhyZWVcIj5QYWdlIHRocmVlPC9kaXY+XG4gICAqICAgICAgIDwvYmFzaWMtbW9kZXM+XG4gICAqICAgICA8L2Jhc2ljLXRhYi1zdHJpcD5cbiAgICpcbiAgICogVGhlIGFib3ZlIGNvbWJpbmF0aW9uIGlzIHNvIGNvbW1vbiBpdCBpcyBwcm92aWRlZCBhcyBhIHNpbmdsZSBjb21wb25lbnQsXG4gICAqIFtiYXNpYy10YWJzXSguLi9iYXNpYy10YWJzLykuXG4gICAqXG4gICAqIFRoZSB1c2VyIGNhbiBzZWxlY3QgYSB0YWIgd2l0aCB0aGUgbW91c2Ugb3IgdG91Y2gsIGFzIHdlbGwgYXMgYnkgdGhyb3VnaCB0aGVcbiAgICoga2V5Ym9hcmQuIEVhY2ggdGFiIGFwcGVhcnMgYXMgYSBzZXBhcmF0ZSBidXR0b24gaW4gdGhlIHRhYiBvcmRlci5cbiAgICogQWRkaXRpb25hbGx5LCBpZiB0aGUgZm9jdXMgaXMgY3VycmVudGx5IG9uIGEgdGFiLCB0aGUgdXNlciBjYW4gcXVpY2tseVxuICAgKiBuYXZpZ2F0ZSBiZXR3ZWVuIHRhYnMgd2l0aCB0aGUgbGVmdC9yaWdodCBhcnJvdyBrZXlzIChvciwgaWYgdGhlIHRhYnMgYXJlXG4gICAqIGluIHZlcnRpY2FsIHBvc2l0aW9uLCB0aGUgdXAvZG93biBhcnJvdyBrZXlzKS5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgdGhlIHRhYnMgYXJlIHNob3duIGdyb3VwZWQgdG8gdGhlIGxlZnQsIHdoZXJlIGVhY2ggdGFiIGlzIG9ubHlcbiAgICogYXMgYmlnIGFzIG5lY2Vzc2FyeS4gWW91IGNhbiBhcHBseSB0aGUgYHNwcmVhZGAgQ1NTIGNsYXNzIHRvIGFcbiAgICogYmFzaWMtdGFiLXN0cmlwIGVsZW1lbnQgZm9yIGEgdmFyaWFudCBhcHBlYXJhbmNlIGluIHdoaWNoIHRoZSBhdmFpbGFibGUgd2lkdGhcbiAgICogb2YgdGhlIGVsZW1lbnQgaXMgZGl2aWRlZCB1cCBlcXVhbGx5IGFtb25nIHRhYnMuXG4gICAqXG4gICAqIFRoZSBHZW5lcmljTWl4aW4gZGVmYXVsdCBzdHlsaW5nIG9mIHRoZSB0YWIgc3RyaXAgd2lsbCBwcmVzZW50IHRoZSBjbGFzc2ljXG4gICAqIHNrZXVtb3JwaGljIGxvb2sgb2Ygcm91bmRlZCB0YWJzIGF0dGFjaGVkIHRvIGEgc3VyZmFjZS4gWW91IGNhbiByZW1vdmUgdGhpc1xuICAgKiBzdHlsaW5nIGJ5IHNldHRpbmcgdGhlIGBHZW5lcmljTWl4aW5gIHByb3BlcnR5L2F0dHJpYnV0ZSB0byBmYWxzZS5cbiAgICovXG4gIGNsYXNzIFRhYlN0cmlwIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG5cbiAgICAgIHRoaXMuJC50YWJzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCB0YWIgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGNvbnN0IHRhYkluZGV4ID0gdGhpcy50YWJzLmluZGV4T2YodGFiKTtcbiAgICAgICAgaWYgKHRhYkluZGV4ID49IDApIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0YWJJbmRleDtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIExpc3RlbiB0byBrZXlkb3duIGV2ZW50cyBvbiB0aGUgdGFicywgbm90IG9uIHBhZ2VzLlxuICAgICAgdGhpcy4kLnRhYnMuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlZCA9IHRoaXNbc3ltYm9scy5rZXlkb3duXShldmVudCk7XG4gICAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIFNldCBkZWZhdWx0cy5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy50YWJQb3NpdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy50YWJQb3NpdGlvbiA9IHRoaXNbc3ltYm9scy5kZWZhdWx0c10udGFiUG9zaXRpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgW3N5bWJvbHMuYXBwbHlTZWxlY3Rpb25dKGl0ZW0sIHNlbGVjdGVkKSB7XG4gICAgICBpZiAoc3VwZXJbc3ltYm9scy5hcHBseVNlbGVjdGlvbl0pIHsgc3VwZXJbc3ltYm9scy5hcHBseVNlbGVjdGlvbl0oaXRlbSwgc2VsZWN0ZWQpOyB9XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICAgIC8vIFNlZSBpZiB0aGUgY29ycmVzcG9uZGluZyB0YWIgaGFzIGFscmVhZHkgYmVlbiBjcmVhdGVkLlxuICAgICAgLy8gSWYgbm90LCB0aGUgY29ycmVjdCB0YWIgd2lsbCBiZSBzZWxlY3RlZCB3aGVuIGl0IGdldHMgY3JlYXRlZC5cbiAgICAgIGNvbnN0IHRhYnMgPSB0aGlzLnRhYnM7XG4gICAgICBpZiAodGFicyAmJiB0YWJzLmxlbmd0aCA+IGluZGV4KSB7XG4gICAgICAgIGNvbnN0IHRhYiA9IHRoaXMudGFic1tpbmRleF07XG4gICAgICAgIGlmICh0YWIpIHtcbiAgICAgICAgICBhcHBseVNlbGVjdGlvblRvVGFiKHRhYiwgc2VsZWN0ZWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IFtzeW1ib2xzLmRlZmF1bHRzXSgpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRzID0gc3VwZXJbc3ltYm9scy5kZWZhdWx0c10gfHwge307XG4gICAgICBkZWZhdWx0cy50YWJQb3NpdGlvbiA9ICd0b3AnO1xuICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cblxuICAgIGdldCB0YWJzKCkge1xuICAgICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwodGhpcy4kLnRhYnMucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpKTtcbiAgICB9XG5cbiAgICBbc3ltYm9scy5pdGVtc0NoYW5nZWRdKCkge1xuICAgICAgaWYgKHN1cGVyW3N5bWJvbHMuaXRlbXNDaGFuZ2VkXSkgeyBzdXBlcltzeW1ib2xzLml0ZW1zQ2hhbmdlZF0oKTsgfVxuXG4gICAgICBjb25zdCBiYXNlSWQgPSB0aGlzLmlkID9cbiAgICAgICAgXCJfXCIgKyB0aGlzLmlkICsgXCJQYW5lbFwiIDpcbiAgICAgICAgXCJfcGFuZWxcIjtcblxuICAgICAgLy8gQ29uZmlybSB0aGF0IGl0ZW1zIGhhdmUgYXQgbGVhc3QgYSBkZWZhdWx0IHJvbGUgYW5kIElEIGZvciBBUklBIHB1cnBvc2VzLlxuICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoIWl0ZW0uZ2V0QXR0cmlidXRlKCdyb2xlJykpIHtcbiAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgncm9sZScsICd0YWJwYW5lbCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXRlbS5pZCkge1xuICAgICAgICAgIGl0ZW0uaWQgPSBiYXNlSWQgKyBpZENvdW50Kys7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBDcmVhdGUgdGFicy5cbiAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IHRoaXMuc2VsZWN0ZWRJdGVtO1xuICAgICAgcmVuZGVyQXJyYXlBc0VsZW1lbnRzKHRoaXMuaXRlbXMsIHRoaXMuJC50YWJzLCAoaXRlbSwgZWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N0eWxlLXNjb3BlJyk7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdiYXNpYy10YWItc3RyaXAnKTtcbiAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsICd0YWInKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmlkID0gaXRlbS5pZCArICdfdGFiJztcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGl0ZW0uZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJyk7XG5cbiAgICAgICAgLy8gUG9pbnQgdGFiIGFuZCBwYW5lbCBhdCBlYWNoIG90aGVyLlxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycsIGl0ZW0uaWQpO1xuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JywgZWxlbWVudC5pZCk7XG5cbiAgICAgICAgYXBwbHlTZWxlY3Rpb25Ub1RhYihlbGVtZW50LCBpdGVtID09PSBzZWxlY3RlZEl0ZW0pO1xuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgW3N5bWJvbHMua2V5ZG93bl0oZXZlbnQpIHtcbiAgICAgIGNvbnN0IGhhbmRsZWQgPSBzdXBlcltzeW1ib2xzLmtleWRvd25dICYmIHN1cGVyW3N5bWJvbHMua2V5ZG93bl0oZXZlbnQpO1xuICAgICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgICAgLy8gSWYgdGhlIGV2ZW50IHJlc3VsdGVkIGluIGEgY2hhbmdlIG9mIHNlbGVjdGlvbiwgbW92ZSB0aGUgZm9jdXMgdG8gdGhlXG4gICAgICAgIC8vIG5ld2x5LXNlbGVjdGVkIHRhYi5cbiAgICAgICAgdGhpcy50YWJzW3RoaXMuc2VsZWN0ZWRJbmRleF0uZm9jdXMoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBoYW5kbGVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgdGFiIHN0cmlwIHJlbGF0aXZlIHRvIHRoZSBlbGVtZW50J3MgY2hpbGRyZW4uIFZhbGlkXG4gICAgICogdmFsdWVzIGFyZSBcInRvcFwiLCBcImxlZnRcIiwgXCJyaWdodFwiLCBhbmQgXCJib3R0b21cIi5cbiAgICAgKlxuICAgICAqIEBkZWZhdWx0IFwidG9wXCJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldCB0YWJQb3NpdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzW3RhYlBvc2l0aW9uU3ltYm9sXTtcbiAgICB9XG4gICAgc2V0IHRhYlBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgICB0aGlzW3RhYlBvc2l0aW9uU3ltYm9sXSA9IHBvc2l0aW9uO1xuXG4gICAgICB0aGlzLnJlZmxlY3RBdHRyaWJ1dGUoJ3RhYi1wb3NpdGlvbicsIHBvc2l0aW9uKTtcblxuICAgICAgLy8gUGh5c2ljYWxseSByZW9yZGVyIHRoZSB0YWJzIGFuZCBwYWdlcyB0byByZWZsZWN0IHRoZSBkZXNpcmVkIGFycmFuZ2VtZW50LlxuICAgICAgLy8gV2UgY291bGQgY2hhbmdlIHRoZSB2aXN1YWwgYXBwZWFyYW5jZSBieSByZXZlcnNpbmcgdGhlIG9yZGVyIG9mIHRoZSBmbGV4XG4gICAgICAvLyBib3gsIGJ1dCB0aGVuIHRoZSB2aXN1YWwgb3JkZXIgd291bGRuJ3QgcmVmbGVjdCB0aGUgZG9jdW1lbnQgb3JkZXIsIHdoaWNoXG4gICAgICAvLyBkZXRlcm1pbmVzIGZvY3VzIG9yZGVyLiBUaGF0IHdvdWxkIHN1cnByaXNlIGEgdXNlciB0cnlpbmcgdG8gdGFiIHRocm91Z2hcbiAgICAgIC8vIHRoZSBjb250cm9scy5cbiAgICAgIGNvbnN0IGZpcnN0RWxlbWVudCA9IChwb3NpdGlvbiA9PT0gJ3RvcCcgfHwgcG9zaXRpb24gPT09ICdsZWZ0JykgP1xuICAgICAgICB0aGlzLiQudGFicyA6XG4gICAgICAgIHRoaXMuJC5wYWdlcztcbiAgICAgIGNvbnN0IGxhc3RFbGVtZW50ID0gKHBvc2l0aW9uID09PSAndG9wJyB8fCBwb3NpdGlvbiA9PT0gJ2xlZnQnKSA/XG4gICAgICAgIHRoaXMuJC5wYWdlcyA6XG4gICAgICAgIHRoaXMuJC50YWJzO1xuICAgICAgaWYgKGZpcnN0RWxlbWVudC5uZXh0U2libGluZyAhPT0gbGFzdEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5zaGFkb3dSb290Lmluc2VydEJlZm9yZShmaXJzdEVsZW1lbnQsIGxhc3RFbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5uYXZpZ2F0aW9uQXhpcyA9IChwb3NpdGlvbiA9PT0gJ3RvcCcgfHwgcG9zaXRpb24gPT09ICdib3R0b20nKSA/XG4gICAgICAgICdob3Jpem9udGFsJyA6XG4gICAgICAgICd2ZXJ0aWNhbCc7XG4gICAgfVxuXG4gICAgZ2V0IHRlbXBsYXRlKCkge1xuICAgICAgY29uc3QgYmFzZVRlbXBsYXRlID0gc3VwZXIudGVtcGxhdGUgfHwgJyc7XG4gICAgICByZXR1cm4gYFxuICAgICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAgKiBBdm9pZCBoYXZpbmcgdGFiIGNvbnRhaW5lciBzdHJldGNoIGFjcm9zcy4gVXNlciB3b24ndCBiZSBhYmxlIHRvIHNlZVxuICAgICAgICAgKiBpdCwgYnV0IHNpbmNlIGl0IGhhbmRsZXMgdGhlIGtleWJvYXJkLCBpbiBNb2JpbGUgU2FmYXJpIGEgdGFwIG9uIHRoZVxuICAgICAgICAgKiBjb250YWluZXIgYmFja2dyb3VuZCB3aWxsIGNhdXNlIHRoZSByZWdpb24gdG8gZmxhc2guIEFsaWduaW5nIHRoZVxuICAgICAgICAgKiByZWdpb24gY29sbGFwc2VzIGl0IGRvd24gdG8gaG9sZCBpdHMgY29udGVudHMuXG4gICAgICAgICAqL1xuICAgICAgICAjdGFicyB7XG4gICAgICAgICAgLyogRm9yIElFIGJ1ZyAoY2xpY2tpbmcgdGFiIHByb2R1Y2VzIGdhcCBiZXR3ZWVuIHRhYiBhbmQgcGFnZSkuICovXG4gICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgLypcbiAgICAgICAgICAgKiBUcnkgdG8gb2J0YWluIGZhc3QtdGFwIGJlaGF2aW9yIG9uIGFsbCB0YWJzLlxuICAgICAgICAgICAqIFNlZSBodHRwczovL3dlYmtpdC5vcmcvYmxvZy81NjEwL21vcmUtcmVzcG9uc2l2ZS10YXBwaW5nLW9uLWlvcy8uXG4gICAgICAgICAgICovXG4gICAgICAgICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gICAgICAgIH1cbiAgICAgICAgOmhvc3QoOm5vdCguc3ByZWFkKSkgI3RhYnMge1xuICAgICAgICAgIC13ZWJraXQtYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICB9XG5cbiAgICAgICAgI3BhZ2VzIHtcbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgICNwYWdlcyA6OnNsb3R0ZWQoKikge1xuICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRhYiB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogTGVmdC9yaWdodCBwb3NpdGlvbnMgKi9cbiAgICAgICAgOmhvc3QoW3RhYi1wb3NpdGlvbj1cImxlZnRcIl0pLFxuICAgICAgICA6aG9zdChbdGFiLXBvc2l0aW9uPVwicmlnaHRcIl0pIHtcbiAgICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgfVxuICAgICAgICA6aG9zdChbdGFiLXBvc2l0aW9uPVwibGVmdFwiXSkgI3RhYnMsXG4gICAgICAgIDpob3N0KFt0YWItcG9zaXRpb249XCJyaWdodFwiXSkgI3RhYnMge1xuICAgICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogU3ByZWFkIHZhcmlhbnQgKi9cbiAgICAgICAgOmhvc3QoLnNwcmVhZCkgI3RhYnMge1xuICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgIH1cbiAgICAgICAgOmhvc3QoLnNwcmVhZCkgLnRhYiB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIEdlbmVyaWMgc3R5bGUgKi9cbiAgICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl0pICNwYWdlcyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl0pIC50YWIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDAuNWVtIDAuNzVlbTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXM7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXSkgLnRhYi5zZWxlY3RlZCB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjY2NjO1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXSkgLnRhYjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIEdlbmVyaWNNaXhpbiwgdG9wL2JvdHRvbSBwb3NpdGlvbnMgKi9cbiAgICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl1bdGFiLXBvc2l0aW9uPVwidG9wXCJdKSAudGFiOm5vdCg6bGFzdC1jaGlsZCksXG4gICAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdW3RhYi1wb3NpdGlvbj1cImJvdHRvbVwiXSkgLnRhYjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuMmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogR2VuZXJpY01peGluLCB0b3AgcG9zaXRpb24gKi9cbiAgICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl1bdGFiLXBvc2l0aW9uPVwidG9wXCJdKSAudGFiIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW0gMC4yNWVtIDAgMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICAgICAgICB9XG4gICAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdW3RhYi1wb3NpdGlvbj1cInRvcFwiXSkgLnRhYi5zZWxlY3RlZCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBHZW5lcmljTWl4aW4sIGJvdHRvbSBwb3NpdGlvbiAqL1xuICAgICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXVt0YWItcG9zaXRpb249XCJib3R0b21cIl0pIC50YWIge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwLjI1ZW0gMC4yNWVtO1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgICAgIH1cbiAgICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl1bdGFiLXBvc2l0aW9uPVwiYm90dG9tXCJdKSAudGFiLnNlbGVjdGVkIHtcbiAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIEdlbmVyaWNNaXhpbiwgbGVmdC9yaWdodCBwb3NpdGlvbnMgKi9cbiAgICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl1bdGFiLXBvc2l0aW9uPVwibGVmdFwiXSkgLnRhYjpub3QoOmxhc3QtY2hpbGQpLFxuICAgICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXVt0YWItcG9zaXRpb249XCJyaWdodFwiXSkgLnRhYjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIEdlbmVyaWNNaXhpbiwgbGVmdCBwb3NpdGlvbiAqL1xuICAgICAgICA6aG9zdChbZ2VuZXJpYz1cIlwiXVt0YWItcG9zaXRpb249XCJsZWZ0XCJdKSAudGFiIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW0gMCAwIDAuMjVlbTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xcHg7XG4gICAgICAgIH1cbiAgICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl1bdGFiLXBvc2l0aW9uPVwibGVmdFwiXSkgLnRhYi5zZWxlY3RlZCB7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIEdlbmVyaWNNaXhpbiwgcmlnaHQgcG9zaXRpb24gKi9cbiAgICAgICAgOmhvc3QoW2dlbmVyaWM9XCJcIl1bdGFiLXBvc2l0aW9uPVwicmlnaHRcIl0pIC50YWIge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMC4yNWVtIDAuMjVlbSAwO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICAgICAgICB9XG4gICAgICAgIDpob3N0KFtnZW5lcmljPVwiXCJdW3RhYi1wb3NpdGlvbj1cInJpZ2h0XCJdKSAudGFiLnNlbGVjdGVkIHtcbiAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgPC9zdHlsZT5cblxuICAgICAgICA8ZGl2IGlkPVwidGFic1wiIHJvbGU9XCJ0YWJsaXN0XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJwYWdlc1wiPlxuICAgICAgICAgICR7YmFzZVRlbXBsYXRlfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIGA7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gVGFiU3RyaXA7XG59O1xuXG5cbmZ1bmN0aW9uIGFwcGx5U2VsZWN0aW9uVG9UYWIodGFiLCBzZWxlY3RlZCkge1xuICB0b2dnbGVDbGFzcyh0YWIsICdzZWxlY3RlZCcsIHNlbGVjdGVkKTtcbiAgdGFiLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIHNlbGVjdGVkKTtcbn1cbiJdfQ==
