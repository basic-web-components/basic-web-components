<a name="PageDots"></a>
## PageDots
Presents a set of small dots to show list item count and select list items.

You can see a [live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-carousel/carouselWithDots.html)
of this component applied to a carousel.

There will be one dot for each item, and the dot for the currently selected
item will be shown selected.

Typical usage:

    <basic-page-dots>
      <basic-carousel>
        ... images, etc. ...
      </basic-carousel>
    </basic-page-dots>

Although the dots are quite small by default, clicking/tapping a dot will
will select the corresponding list item.

**Kind**: global class  
**Mixes**: <code>DistributedChildrenAsContent</code>, <code>TargetInCollective</code>, <code>ContentFirstChildTarget</code>, <code>Keyboard</code>, <code>TargetSelection</code>  
<a name="PageDots+position"></a>
### pageDots.position : <code>number</code>
The distance the user has moved the first touchpoint since the beginning
of a drag, expressed as a fraction of the element's width.

**Kind**: instance property of <code>[PageDots](#PageDots)</code>  
