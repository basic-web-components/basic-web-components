<a name="ArrowSelection"></a>
## ArrowSelection
Component which adds prominent left and right arrow buttons to a
wrapped child such as a carousel

Clicking the left/right buttons selects the previous/next item.

Typical usage:

    <basic-arrow-selection>
      <basic-carousel>
        ... images, etc. ...
      </basic-carousel>
    </basic-arrow-selection>

By default, the arrow buttons are shown on devices with a mouse or mouse-like
point device. They are not shown on a touch-capable device unless mouse
movement is detected. To cause the buttons to always appear, apply the
'showArrows' CSS class.

**Kind**: global class  
**Mixes**: <code>ChildrenContent</code>, <code>CollectiveMember</code>, <code>ContentFirstChildTarget</code>, <code>ItemsSelection</code>, <code>Keyboard</code>, <code>TargetSelection</code>  
