* Update animateSelection to handle fractional parameters.
  showSelection now handles fraction parameter; need to apply same idea to
  animateSelection.
* Once dust settles, need an edit pass to give functions better names, refactor
  if necessary, and add comments.
* Ensure that selectionWraps=false works as expected, including dragging past
  ends of array.
* Reconsider TargetSelection and updatePossibleNavigations/selectionWraps.
  Should be able to toggle ArrowSelection.selectionWraps and see buttons update
* Use single forward animation
  Rename animationForward -> selectionAnimation, remove animationBackward
* Rename position -> selectionFraction
  Push this change into SwipeDirection, TrackpadDirection, SlidingViewport,
  PageDots.


Scenarios
1. Initial positioning (or repositioning after changing animation).
2. Animate on selectedIndex change. Complete any animation/swipe in progress.
3. Swipe/drag. (Complete any animation in progress?)
4. Swipe/drag that doesn't change selection, and just restores position=0.
