(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderArrayAsElements;
/**
 * Renders an array of items as elements.
 */
function renderArrayAsElements(items, container, createElementForItem) {
  // Remove any elements for old items.
  container.childNodes.forEach(function (oldElement) {
    return container.removeChild(oldElement);
  });

  // Create a new set of elements for the current items.
  items.forEach(function (item) {
    var element = createElementForItem(item);
    container.appendChild(element);
  });
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlcy9iYXNpYy1hcnJheS10by1saXN0L3NyYy9yZW5kZXJBcnJheUFzRWxlbWVudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztrQkNHd0IscUJBQXFCOzs7O0FBQTlCLFNBQVMscUJBQXFCLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxvQkFBb0IsRUFBRTs7QUFFcEYsV0FBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQSxVQUFVO1dBQUksU0FBUyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUM7R0FBQSxDQUFDOzs7QUFBQyxBQUc5RSxPQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSSxFQUFJO0FBQ3BCLFFBQUksT0FBTyxHQUFHLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pDLGFBQVMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7R0FDaEMsQ0FBQyxDQUFDO0NBQ0oiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiBSZW5kZXJzIGFuIGFycmF5IG9mIGl0ZW1zIGFzIGVsZW1lbnRzLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJBcnJheUFzRWxlbWVudHMoaXRlbXMsIGNvbnRhaW5lciwgY3JlYXRlRWxlbWVudEZvckl0ZW0pIHtcbiAgLy8gUmVtb3ZlIGFueSBlbGVtZW50cyBmb3Igb2xkIGl0ZW1zLlxuICBjb250YWluZXIuY2hpbGROb2Rlcy5mb3JFYWNoKG9sZEVsZW1lbnQgPT4gY29udGFpbmVyLnJlbW92ZUNoaWxkKG9sZEVsZW1lbnQpKTtcblxuICAvLyBDcmVhdGUgYSBuZXcgc2V0IG9mIGVsZW1lbnRzIGZvciB0aGUgY3VycmVudCBpdGVtcy5cbiAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICBsZXQgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnRGb3JJdGVtKGl0ZW0pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgfSk7XG59XG4iXX0=
