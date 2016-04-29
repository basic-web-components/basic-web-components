import { assert } from 'chai';
import SelectionAnimation from '../src/SelectionAnimation';


class SelectionAnimationTest extends SelectionAnimation(HTMLElement) {

  get items() {
    return this._items;
  }
  set items(value) {
    this._items = value;
  }

  get selectionWraps() {
    return this._selectionWraps;
  }
  set selectionWraps(value) {
    // Don't invoke super, as we don't want selections/animations during tests.
    this._selectionWraps = value;
  }

}
document.registerElement('selection-animation-test', SelectionAnimationTest);


describe("SelectionAnimation mixin", () => {

  it("calculates whether an item is visible at a given fractional selection index", () => {
    let test = document.createElement('selection-animation-test');
    // Don't really items, just an array of the desired length.
    test.items = [0, 0, 0, 0, 0];
    test.selectionWraps = false;
    // At selection index 0, item 0 should be center stage (0.5), item 1 should
    // be stage right (0), and the other items should be hidden (null).
    let fractions = test._animationFractionsAtSelectionIndex.bind(test);
    assert.deepEqual(fractions( 0  ), [ 0.5 ,  0   ,  null,  null,  null]);
    assert.deepEqual(fractions( 0.5), [ 0.75,  0.25, -0.25,  null,  null]);
    assert.deepEqual(fractions( 1  ), [ 1   ,  0.5 ,  0   ,  null,  null]);
    assert.deepEqual(fractions(-0.5), [ 0.25,  null,  null,  null,  null]);
    test.selectionWraps = true;
    // With wrapping, at selection index 0, item 4 should be stage left (1).
    assert.deepEqual(fractions( 0  ), [ 0.5 ,  0   ,  null,  null,  1   ]);
    assert.deepEqual(fractions( 0.5), [ 0.75,  0.25, -0.25,  null,  null]);
    assert.deepEqual(fractions( 1  ), [ 1   ,  0.5 ,  0   ,  null,  null]);
    assert.deepEqual(fractions(-0.5), [ 0.25,  null,  null,  null,  0.75]);
  });

});
