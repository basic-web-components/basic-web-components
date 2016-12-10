# API Documentation
<a name="PlayControls"></a>

## PlayControls
Template mixin which adds buttons for managing playback of a slideshow,
audio playlist, etc.

Typical usage:

    class SlideshowWithControls extends PlayControlsMixin(Slideshow) {}
    customElements.define('slideshow-with-controls', SlideshowWithControls);

  **Kind**: global class
