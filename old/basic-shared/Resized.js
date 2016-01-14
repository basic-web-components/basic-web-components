/**
 * Basic helpers to let components track changes in their size in response to
 * window resize events.
 *
 * The standard DOM resize event is only available on the top-level window.
 * Elements that want to know if their own size changed in response to a window
 * resize often track the window resize event, but a naive event listener will
 * perform work even if the element's size was unaffected by the resize. These
 * helpers make it easier to only do work when a window resize actually changed
 * the element's size.
 */

(function() {

/**
 * Ask to start (or stop) listening to changes in the element's size that
 * occur in response to a window resize. If the element's size has changed,
 * an method called resized() will be invoked on the element.
 *
 * The resized() method will not be invoked if a window resize didn't actually
 * affect the size of the element in question.
 *
 * @method listenForResize
 * @param list True (the default) to start listening, false to stop
 */
function listenForResize(node, listen) {
  if (listen || listen == null) {

    // Listen
    node._resizeHandler = handleResize.bind(node);
    window.addEventListener('resize', node._resizeHandler);

    // Trigger resized handler so that element can do initial setup.
    node.resized();

  }
  else {

    // Stop listening
    window.removeEventListener('resize', node._resizeHandler);
    node._resizeHandler = null;

  }
}

/*
 * The element represented by "this" has been resized.
 */
function handleResize() {
  var previousSize = this._previousSize;
  var width = this.offsetWidth;
  var height = this.offsetHeight;
  var sizeChanged = (previousSize == null ||
      width !== previousSize.width ||
      height !== previousSize.height);
  if (sizeChanged) {
    this._previousSize = {
      height: height,
      width: width
    };
    if (this.resized) {
      this.resized();
    }
  }
}

window.Basic = window.Basic || {};

window.Basic.Resized = {

  attached: function() {
    listenForResize(this);
  },

  detached: function() {
    listenForResize(this, false);
  }

};

})();
