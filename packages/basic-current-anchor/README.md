# API Documentation
<a name="CurrentAnchor"></a>
## CurrentAnchor
An anchor (link) that highlights itself when its destination matches the
current location.

[Live demo](http://basicwebcomponents.org/basic-web-components/packages/basic-current-anchor/)

Such a link commonly appears in toolbars, side bars, and other navigation
elements. In these situations, you generally want the user to understand what
page or area the user is already on.

When the link is current — when it points to the current location — the
link will have the CSS `current` class applied to it, and its `current`
property will be true.

Note: one limitation of this component is that, by default, the link does
*not* show the standard link color (usually blue) and text decoration
(underline). However, in navigation elements like toolbars, you often will
want to explicitly specific link colors anyway, e.g., to reflect your
application's visual style and brand.

  **Kind**: global class

* [CurrentAnchor](#CurrentAnchor)
    * [.areaLink](#CurrentAnchor+areaLink) : <code>boolean</code>
    * [.current](#CurrentAnchor+current) : <code>boolean</code>

<a name="CurrentAnchor+areaLink"></a>
### currentAnchor.areaLink : <code>boolean</code>
True if the link points to an area within a site, not just a single page.

If true, the matching rule to determine whether the link is current changes:
an area link is considered to be current if the link's destination forms a
prefix of the current location (instead of matching the complete URL).

  **Kind**: instance property of <code>[CurrentAnchor](#CurrentAnchor)</code>
<a name="CurrentAnchor+current"></a>
### currentAnchor.current : <code>boolean</code>
True if the link's destination matches the current page location.

If this is true, the element will have an `current` CSS class applied to it.

  **Kind**: instance property of <code>[CurrentAnchor](#CurrentAnchor)</code>
