# API Documentation
<a name="TimerSelection"></a>

## TimerSelection
Mixin which provides for automatic timed changes in selection.

This mixin is useful for creating slideshow-like elements.

This mixin expects the component to define an `items` property, as well as
`selectFirst` and `selectNext` methods. You can implement those yourself,
or use [ContentItemsMixin](ContentItemsMixin.md) and
[SingleSelectionMixin](SingleSelectionMixin.md).

  **Kind**: global class

* [TimerSelection](#TimerSelection)
    * [.pause()](#TimerSelection+pause)
    * [.play()](#TimerSelection+play)
    * [.playing](#TimerSelection+playing) : <code>boolean</code>
    * [.selectionTimerDuration](#TimerSelection+selectionTimerDuration) : <code>number</code>

<a name="TimerSelection+pause"></a>

### timerSelection.pause()
Pause automatic progression of the selection.

  **Kind**: instance method of <code>[TimerSelection](#TimerSelection)</code>
<a name="TimerSelection+play"></a>

### timerSelection.play()
Begin automatic progression of the selection.

  **Kind**: instance method of <code>[TimerSelection](#TimerSelection)</code>
<a name="TimerSelection+playing"></a>

### timerSelection.playing : <code>boolean</code>
True if the selection is being automatically advanced.

  **Kind**: instance property of <code>[TimerSelection](#TimerSelection)</code>
**Default**: <code>false</code>  
<a name="TimerSelection+selectionTimerDuration"></a>

### timerSelection.selectionTimerDuration : <code>number</code>
The time in milliseconds that will elapse after the selection changes
before the selection will be advanced to the next item in the list.

  **Kind**: instance property of <code>[TimerSelection](#TimerSelection)</code>
**Default**: <code>1000 (1 second)</code>  
