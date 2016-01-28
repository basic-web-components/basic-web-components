<a name="TimerSelection"></a>
## TimerSelection
Mixin provides for automatic timed changes in selection, as in a
automated slideshow.

This mixin is useful for creating slideshow-like elements.

This mixin expects the component to define an `items` property, as well as
`selectFirst` and `selectNext` methods. You can implement those yourself, or
use the ContentAsItems and ItemsSelection mixins.

**Kind**: global class  
<a name="undefinedplaying"></a>
## undefinedplaying : <code>boolean</code>
True if the selection is being automatically advanced.

**Kind**: global variable  
**Properties**

| Name |
| --- |
| playing | 

<a name="play"></a>
## play()
Begin automatic progression of the selection.

**Kind**: global function  
<a name="pause"></a>
## pause()
Pause automatic progression of the selection.

**Kind**: global function  
