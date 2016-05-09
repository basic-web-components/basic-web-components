* Full page demo
* Once dust settles, need an edit pass to give functions better names, refactor
  if necessary, and add comments.
* Reconsider TargetSelection and updatePossibleNavigations/selectionWraps.
  Should be able to toggle ArrowSelection.selectionWraps and see buttons update
* Rename position -> selectionFraction. Push this change into SwipeDirection,
  TrackpadDirection, SlidingViewport, PageDots.
* Docs
* Hide helper methods instead of exposing on class.
* Edge/IE
* Remove console.log statements.
* Damping. Push this into SwipeDirection? Or factor into its own module.
* Make showTransition a getter/setter property.
* Factor transition keyframes into a module.
* Handle < 3 items.


Scenarios
1. Initial positioning (or repositioning after changing animation).
2. Animate on selectedIndex change. Complete any animation/swipe in progress.
3. Swipe/drag. (Complete any animation in progress?)
4. Swipe/drag that doesn't change selection, and just restores position=0.



Current question: Should totalSteps be forced to an integer?

total   steps   show?   total-steps   position
1       0       true    1             1
1       1       true    0             0
1       2       false   -1            -1
1       -1      false   2             2
-1      0       true    -1            1
-1      -1      true    0             0
-1      -2      false   1             -1
-1      1       false   -2            2
