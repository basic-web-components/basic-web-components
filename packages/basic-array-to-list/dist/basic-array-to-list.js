(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Renders an array of items as elements.
 */

exports.default = function (base) {
  var ArrayToItems = function (_base) {
    _inherits(ArrayToItems, _base);

    function ArrayToItems() {
      _classCallCheck(this, ArrayToItems);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(ArrayToItems).apply(this, arguments));
    }

    _createClass(ArrayToItems, [{
      key: 'elements',
      get: function get() {
        return this.container.childNodes;
      }
    }, {
      key: 'container',
      get: function get() {
        return this;
      }
    }, {
      key: 'items',
      get: function get() {
        return this._items;
      },
      set: function set(value) {
        if ('items' in base) {
          _set(Object.getPrototypeOf(ArrayToItems.prototype), 'items', value, this);
        }
        this._items = value;
        renderItems(this);
      }
    }]);

    return ArrayToItems;
  }(base);

  return ArrayToItems;
};

function renderItems(element) {
  // Remove any elements for old items.
  var container = element.container;
  container.childNodes.forEach(function (oldElement) {
    return container.removeChild(oldElement);
  });

  // Create a new set of elements for the current items.
  element.items.forEach(function (item) {
    var newElement = element.createElementForItem(item);
    element.container.appendChild(newElement);
  }, element);
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlcy9iYXNpYy1hcnJheS10by1saXN0L3NyYy9BcnJheVRvSXRlbXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNHZSxVQUFDLElBQUksRUFBSztNQUVqQixZQUFZO2NBQVosWUFBWTs7YUFBWixZQUFZOzRCQUFaLFlBQVk7O29FQUFaLFlBQVk7OztpQkFBWixZQUFZOzswQkFFRDtBQUNiLGVBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7T0FDbEM7OzswQkFFZTtBQUNkLGVBQU8sSUFBSSxDQUFDO09BQ2I7OzswQkFFVztBQUNWLGVBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztPQUNwQjt3QkFDUyxLQUFLLEVBQUU7QUFDZixZQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7QUFBRSxxQ0FkckIsWUFBWSxzQkFjdUIsS0FBSyxRQUFDO1NBQUU7QUFDN0MsWUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFDcEIsbUJBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztPQUNuQjs7O1dBakJHLFlBQVk7SUFBUyxJQUFJOztBQXFCL0IsU0FBTyxZQUFZLENBQUM7Q0FFckI7O0FBSUQsU0FBUyxXQUFXLENBQUMsT0FBTyxFQUFFOztBQUU1QixNQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO0FBQ2xDLFdBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUEsVUFBVTtXQUFJLFNBQVMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDO0dBQUEsQ0FBQzs7O0FBQUMsQUFHOUUsU0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJLEVBQUk7QUFDNUIsUUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BELFdBQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0dBQzNDLEVBQUUsT0FBTyxDQUFDLENBQUM7Q0FDYiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIFJlbmRlcnMgYW4gYXJyYXkgb2YgaXRlbXMgYXMgZWxlbWVudHMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IChiYXNlKSA9PiB7XG5cbiAgY2xhc3MgQXJyYXlUb0l0ZW1zIGV4dGVuZHMgYmFzZSB7XG5cbiAgICBnZXQgZWxlbWVudHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250YWluZXIuY2hpbGROb2RlcztcbiAgICB9XG5cbiAgICBnZXQgY29udGFpbmVyKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0IGl0ZW1zKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xuICAgIH1cbiAgICBzZXQgaXRlbXModmFsdWUpIHtcbiAgICAgIGlmICgnaXRlbXMnIGluIGJhc2UpIHsgc3VwZXIuaXRlbXMgPSB2YWx1ZTsgfVxuICAgICAgdGhpcy5faXRlbXMgPSB2YWx1ZTtcbiAgICAgIHJlbmRlckl0ZW1zKHRoaXMpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIEFycmF5VG9JdGVtcztcblxufTtcblxuXG5cbmZ1bmN0aW9uIHJlbmRlckl0ZW1zKGVsZW1lbnQpIHtcbiAgLy8gUmVtb3ZlIGFueSBlbGVtZW50cyBmb3Igb2xkIGl0ZW1zLlxuICBsZXQgY29udGFpbmVyID0gZWxlbWVudC5jb250YWluZXI7XG4gIGNvbnRhaW5lci5jaGlsZE5vZGVzLmZvckVhY2gob2xkRWxlbWVudCA9PiBjb250YWluZXIucmVtb3ZlQ2hpbGQob2xkRWxlbWVudCkpO1xuXG4gIC8vIENyZWF0ZSBhIG5ldyBzZXQgb2YgZWxlbWVudHMgZm9yIHRoZSBjdXJyZW50IGl0ZW1zLlxuICBlbGVtZW50Lml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgbGV0IG5ld0VsZW1lbnQgPSBlbGVtZW50LmNyZWF0ZUVsZW1lbnRGb3JJdGVtKGl0ZW0pO1xuICAgIGVsZW1lbnQuY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuICB9LCBlbGVtZW50KTtcbn1cbiJdfQ==
