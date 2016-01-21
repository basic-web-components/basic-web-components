<a name="ObserveContentChanges"></a>
## ObserveContentChanges
Wires up mutation observers to report any changes in a component's
content (direct children, or nodes distributed to slots).

For the time being, this can only support a single level of distributed
content. That is, if a component contains a slot, and the set of nodes
directly assigned to that slot changes, then this mixin will detect the
change. However, this mixin does not yet detect changes in reprojected
nodes. If a component's host places a slot as a child of the component
instance, nodes assigned to the outer host will be assigned to the host's
slot, then reassigned to the slot element inside the component. Changes in
such reprojected nodes will not (yet) be detected by this mixin.

For comparison, see Polymer's observeNodes API, which does solve the problem
of tracking changes in reprojected content.

**Kind**: global class  
