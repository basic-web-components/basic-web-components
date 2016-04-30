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

  // Sample element with the mixin.
  let test = document.createElement('selection-animation-test');
  // Don't really items, just an array of the desired length.
  test.items = [0, 0, 0, 0, 0];

  it("calculates whether an item is visible at a given fractional selection index", () => {
    test.selectionWraps = false;
    // At selection index 0, item 0 should be center stage (0.5), item 1 should
    // be stage right (0), and the other items should be hidden (null).
    let fractions = test._animationFractionsAtSelectionIndex.bind(test);
    assert.deepEqual(fractions( 0  ), [ 0.5 ,  0   ,  null,  null,  null]);
    assert.deepEqual(fractions( 0.5), [ 0.75,  0.25, -0.25,  null,  null]);
    assert.deepEqual(fractions( 1  ), [ 1   ,  0.5 ,  0   ,  null,  null]);
    assert.deepEqual(fractions( 4  ), [ null,  null,  null,  1   ,  0.5 ]);
    assert.deepEqual(fractions(-0.5), [ 0.25,  null,  null,  null,  null]);
    test.selectionWraps = true;
    // With wrapping, at selection index 0, item 4 should be stage left (1).
    assert.deepEqual(fractions( 0  ), [ 0.5 ,  0   ,  null,  null,  1   ]);
    assert.deepEqual(fractions( 0.5), [ 0.75,  0.25, -0.25,  null,  null]);
    assert.deepEqual(fractions( 1  ), [ 1   ,  0.5 ,  0   ,  null,  null]);
    assert.deepEqual(fractions( 4  ), [ 0   ,  null,  null,  1   ,  0.5 ]);
    assert.deepEqual(fractions(-0.5), [ 0.25,  null,  null,  null,  0.75]);
  });

  it("timings to animate selectNext from 0 to 1", () => {
    test.selectionWraps = false;
    assert.deepEqual(test._effectTimingsForSelectionAnimation(0, 1), [
      { duration: 1000, direction: 'normal', fill: 'both', delay: -500, endDelay: 0 },
      { duration: 1000, direction: 'normal', fill: 'both', delay: 0, endDelay: -500 },
      null,
      null,
      null
    ]);
  });

  it("timings to animate selection forward after releasing drag from 0.5 to 1", () => {
    test.selectionWraps = false;
    assert.deepEqual(test._effectTimingsForSelectionAnimation(0.5, 1), [
      { duration: 1000, direction: 'normal', fill: 'both', delay: -750, endDelay: 0 },
      { duration: 1000, direction: 'normal', fill: 'both', delay: -250, endDelay: -500 },
      null,
      null,
      null
    ]);
  });

  it("timings to animate selection forward after releasing drag from 0.5 to 0", () => {
    test.selectionWraps = false;
    assert.deepEqual(test._effectTimingsForSelectionAnimation(0.5, 0), [
      { duration: 1000, direction: 'reverse', fill: 'both', delay: -250, endDelay: -500 },
      { duration: 1000, direction: 'reverse', fill: 'both', delay: -750, endDelay: 0 },
      null,
      null,
      null
    ]);
  });

  it("timings to animate selection forward after releasing drag from 4.5 to 4", () => {
    test.selectionWraps = false;
    assert.deepEqual(test._effectTimingsForSelectionAnimation(4.5, 4), [
      null,
      null,
      null,
      null,
      { duration: 1000, direction: 'reverse', fill: 'both', delay: -250, endDelay: -500 }
    ]);
  });

  it("timings to animate direct forward jump of selection from 0 to 2", () => {
    test.selectionWraps = false;
    assert.deepEqual(test._effectTimingsForSelectionAnimation(0, 2), [
      { duration: 500, direction: 'normal', fill: 'both', delay: -250, endDelay: 0 },
      { duration: 500, direction: 'normal', fill: 'both', delay: 0, endDelay: 0 },
      { duration: 500, direction: 'normal', fill: 'both', delay: 250, endDelay: -250 },
      null,
      null
    ]);
  });

  it("timings to animate selectPrevious from 1 to 0", () => {
    test.selectionWraps = false;
    assert.deepEqual(test._effectTimingsForSelectionAnimation(1, 0), [
      { duration: 1000, direction: 'reverse', fill: 'both', delay: 0, endDelay: -500 },
      { duration: 1000, direction: 'reverse', fill: 'both', delay: -500, endDelay: 0 },
      null,
      null,
      null
    ]);
  });

  it("timings to animate direct backward jump of selection from 2 to 0", () => {
    test.selectionWraps = false;
    assert.deepEqual(test._effectTimingsForSelectionAnimation(2, 0), [
      { duration: 500, direction: 'reverse', fill: 'both', delay: 250, endDelay: -250 },
      { duration: 500, direction: 'reverse', fill: 'both', delay: 0, endDelay: 0 },
      { duration: 500, direction: 'reverse', fill: 'both', delay: -250, endDelay: 0 },
      null,
      null
    ]);
  });

  it("timings to animate selection forward after releasing drag from -0.5 to 0", () => {
    test.selectionWraps = false;
    assert.deepEqual(test._effectTimingsForSelectionAnimation(-0.5, 0), [
      { duration: 1000, direction: 'normal', fill: 'both', delay: -250, endDelay: -500 },
      null,
      null,
      null,
      null
    ]);
  });

  // selectionDrags = true;

});
