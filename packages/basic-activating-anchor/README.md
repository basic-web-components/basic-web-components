<a name="ActivatingAnchor"></a>
## ActivatingAnchor
An anchor (link) that highlights itself when its destination matches the
current location.

Such a link commonly appears in toolbars, side bars, and other navigation
elements. In these situations, you generally want the user to understand what
page or area the user is already on.

Note: one limitation of this component is that, by default, the link does
*not* show the standard link color (usually blue). However, in navigation
elements like toolbars, you often will want to explicitly specific link
colors anyway, e.g., to reflect your application's visual style and brand.

**Kind**: global class  

* [ActivatingAnchor](#ActivatingAnchor)
    * [.active](#ActivatingAnchor+active) : <code>boolean</code>
    * [.areaLink](#ActivatingAnchor+areaLink) : <code>boolean</code>

<a name="ActivatingAnchor+active"></a>
### activatingAnchor.active : <code>boolean</code>
True if the link's destination matches the current page location.

If this is true, the element will have an `active` CSS class applied to it.

**Kind**: instance property of <code>[ActivatingAnchor](#ActivatingAnchor)</code>  
<a name="ActivatingAnchor+areaLink"></a>
### activatingAnchor.areaLink : <code>boolean</code>
True if the link points to an area within a site, not just a single page.

If true, the matching rule to determine whether the link is active changes:
an area link is considered to be active if the link's destination forms a
prefix of the current location (instead of matching the complete URL).

**Kind**: instance property of <code>[ActivatingAnchor](#ActivatingAnchor)</code>  
