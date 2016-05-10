# API Documentation
<a name="ObserveContentChanges"></a>

## ObserveContentChanges
Mixin which wires up mutation observers to report any changes in a
component's content (direct children, or nodes distributed to slots).

For the time being, this can only support a single level of distributed
content. That is, if a component contains a slot, and the set of nodes
directly assigned to that slot changes, then this mixin will detect the
change. However, this mixin does not yet detect changes in reprojected
nodes. If a component's host places a slot as a child of the component
instance, nodes assigned to the outer host will be assigned to the host's
slot, then reassigned to the slot element inside the component. Changes in
such reprojected nodes will not (yet) be detected by this mixin.

For comparison, see Polymer's observeNodes API, which does solve the
problem of tracking changes in reprojected content.

Note: The web platform team creating the specifications for web components
plan to request that a new type of MutationObserver option be defined that
lets a component monitor changes in distributed children. This mixin will
be updated to take advantage of that MutationObserver option when that
becomes available.

  **Kind**: global class

* [ObserveContentChanges](#ObserveContentChanges)
    * ["content-changed"](#ObserveContentChanges.event_content-changed)
    * [.contentChanged()](#ObserveContentChanges+contentChanged)

<a name="ObserveContentChanges.event_content-changed"></a>

### "content-changed"
This event is raised when the component's contents (including distributed
children) have changed.

  **Kind**: event emitted by <code>[ObserveContentChanges](#ObserveContentChanges)</code>
<a name="ObserveContentChanges+contentChanged"></a>

### observeContentChanges.contentChanged()
Invoked when the contents of the component (including distributed
children) have changed.

This method is also invoked when a component is first instantiated; the
contents have essentially "changed" from being nothing. This allows the
component to perform initial processing of its children.

  **Kind**: instance method of <code>[ObserveContentChanges](#ObserveContentChanges)</code>
