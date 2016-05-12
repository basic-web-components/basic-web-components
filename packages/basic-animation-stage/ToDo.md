* Reconsider TargetSelection and updatePossibleNavigations/selectionWraps.
  Should be able to toggle ArrowSelection.selectionWraps and see buttons update
* Edge/IE
* Make showTransition a getter/setter property.
* Handle < 3 items.
* Try to repro problem where flood of interaction causes items to disappear.
* More on basic-slideshow.




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
