# API Documentation
<a name="TargetInCollective"></a>

## TargetInCollective
Mixin which allows a component to provide aggregate behavior with other
elements, e.g., for keyboard handling.

This mixin implicitly creates a collective for a component so that it can
participate in collective keyboard handling. See the
[Collective](Collective.md) class for details.

You can use this mixin in conjunction with
[ContentFirstChildTargetMixin](ContentFirstChildTargetMixin.md) to
automatically have the component's collective extended to its first child.

  **Kind**: global class
<a name="TargetInCollective+target"></a>

### targetInCollective.target : <code>HTMLElement</code>
Gets/sets the current target of the component.

Set this to point to another element. That target element will be
implicitly added to the component's collective. That is, the component
and its target will share responsibility for handling keyboard events.

You can set this property yourself, or you can use the
ContentFirstChildTargetMixin mixin to automatically set the target to the
component's first child.

  **Kind**: instance property of <code>[TargetInCollective](#TargetInCollective)</code>
