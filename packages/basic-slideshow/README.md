# API Documentation
<a name="Slideshow"></a>

## Slideshow ⇐ <code>AnimationStage</code>
Slideshow with animated transitions.

[Live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-slideshow/)

By default the slideshow will immediately begin playing when it is connected
to the document, advance every 3000 ms (3 seconds), and use a simple
crossfade effect. For a variation with play controls, see
[basic-slideshow-with-controls](../basic-slideshow-with-controls).

This component can be used on its own. To incorporate slideshow behavior into
a component of your own, apply the
[TimerSelectionMixin](../basic-component-mixins/docs/TimerSelectionMixin.md).

  **Kind**: global class
**Extends:** <code>AnimationStage</code>  
**Mixes**: <code>[TimerSelectionMixin](../basic-component-mixins/docs/TimerSelectionMixin.md)</code>
  

* [Slideshow](#Slideshow) ⇐ <code>AnimationStage</code>
    * [.pause()](#TimerSelection+pause)
    * [.play()](#TimerSelection+play)
    * [.playing](#TimerSelection+playing) : <code>boolean</code>
    * [.selectionTimerDuration](#TimerSelection+selectionTimerDuration) : <code>number</code>

<a name="TimerSelection+pause"></a>

### slideshow.pause()
Pause automatic progression of the selection.

  **Kind**: instance method of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[TimerSelection](../basic-component-mixins/docs/TimerSelection.md)</code> mixin.
<a name="TimerSelection+play"></a>

### slideshow.play()
Begin automatic progression of the selection.

  **Kind**: instance method of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[TimerSelection](../basic-component-mixins/docs/TimerSelection.md)</code> mixin.
<a name="TimerSelection+playing"></a>

### slideshow.playing : <code>boolean</code>
True if the selection is being automatically advanced.

  **Kind**: instance property of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[TimerSelection](../basic-component-mixins/docs/TimerSelection.md)</code> mixin.
**Default**: <code>false</code>  
<a name="TimerSelection+selectionTimerDuration"></a>

### slideshow.selectionTimerDuration : <code>number</code>
The time in milliseconds that will elapse after the selection changes
before the selection will be advanced to the next item in the list.

  **Kind**: instance property of <code>[Slideshow](#Slideshow)</code>. Defined by <code>[TimerSelection](../basic-component-mixins/docs/TimerSelection.md)</code> mixin.
**Default**: <code>1000 (1 second)</code>  
