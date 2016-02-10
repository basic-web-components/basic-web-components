<a name="FadeOverflow"></a>
## FadeOverflow
Fade out content that overflows so the user knows there's more.

This component doesn't handle interactivity.

The component needs to know the color it should fade to, which it tries to
infer from the background color. In some situations, this may not work, in
which case you can explicitly set the fadeColor attribute.

The component currently always displays the fade, even if the component's
content is short enough to fit completely in view.

**Kind**: global class  

* [FadeOverflow](#FadeOverflow)
    * [.fadeColor](#FadeOverflow+fadeColor)
    * [.showFade](#FadeOverflow+showFade) : <code>boolean</code>
    * [.refresh()](#FadeOverflow+refresh)

<a name="FadeOverflow+fadeColor"></a>
### fadeOverflow.fadeColor
The color of the fade.

The fade color should match the background color. The component does its
best to infer the background color, but in some situations, that may not
work. In those cases, you can manually identify the background color.
This should be a solid color.

**Kind**: instance property of <code>[FadeOverflow](#FadeOverflow)</code>  
**Default**: <code>white</code>  
**Attribute**: fadeColor  
<a name="FadeOverflow+showFade"></a>
### fadeOverflow.showFade : <code>boolean</code>
True if the component should show the fade to the background color.

**Kind**: instance property of <code>[FadeOverflow](#FadeOverflow)</code>  
**Default**: <code>true</code>  
<a name="FadeOverflow+refresh"></a>
### fadeOverflow.refresh()
Infer the fade color from background color. If you have programmatically
changed the color behind the component, you can invoke this method to have
the component try to pick up the new background color.

**Kind**: instance method of <code>[FadeOverflow](#FadeOverflow)</code>  
