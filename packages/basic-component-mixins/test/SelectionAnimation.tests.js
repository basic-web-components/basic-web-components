import { assert } from 'chai';
import SelectionAnimation from '../src/SelectionAnimation';

// These are the functions we'll test.
let fractions = SelectionAnimation.helpers.animationFractionsForSelection;
let timings = SelectionAnimation.helpers.effectTimingsForSelectionAnimation;


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

  it("animation fractions for a list with no items", () => {
    let test = createTestElement();
    test.selectionWraps = false;
    test.items = [];
    assert.deepEqual(fractions(test, 0), []);
  });

  it("animation fractions for a list of 1 item", () => {
    let test = createTestElement();
    test.selectionWraps = false;
    test.items = [0]; // Don't need real items, just an array of desired length.
    assert.deepEqual(fractions(test,  0  ), [ 0.5 ]);
    assert.deepEqual(fractions(test,  0.5), [ 0.75]);
    assert.deepEqual(fractions(test, -0.5), [ 0.25]);
  });

  it("animation fractions for a list of multiple items", () => {
    let test = createTestElement();

    test.selectionWraps = false;
    // At selection index 0, item 0 should be center stage (0.5), item 1 should
    // be stage right (0), and the other items should be hidden (null).
    assert.deepEqual(fractions(test,  0  ), [0.5 , 0   , null, null, null]);
    assert.deepEqual(fractions(test,  0.5), [0.75, 0.25, null, null, null]);
    assert.deepEqual(fractions(test,  1  ), [1   , 0.5 , 0   , null, null]);
    assert.deepEqual(fractions(test,  4  ), [null, null, null, 1   , 0.5 ]);
    assert.deepEqual(fractions(test, -0.5), [0.25, null, null, null, null]);

    test.selectionWraps = true;
    // With wrapping, at selection index 0, item 4 should be stage left (1).
    assert.deepEqual(fractions(test,  0  ), [0.5 , 0   , null, null, 1   ]);
    assert.deepEqual(fractions(test,  0.5), [0.75, 0.25, null, null, null]);
    assert.deepEqual(fractions(test,  1  ), [1   , 0.5 , 0   , null, null]);
    assert.deepEqual(fractions(test,  4  ), [0   , null, null, 1   , 0.5 ]);
    assert.deepEqual(fractions(test, -0.5), [0.25, null, null, null, 0.75]);
  });

  it("timings to animate selectNext from 0 to 1", () => {
    let test = createTestElement();
    test.selectionWraps = false;
    assert.deepEqual(timings(test, 0, 1), [
      { duration: 500, direction: 'normal', fill: 'both', delay: -250, endDelay: 0 },
      { duration: 500, direction: 'normal', fill: 'both', delay: 0, endDelay: -250 },
      null,
      null,
      null
    ]);
  });

  it("timings to animate selection forward after releasing drag from 0.5 to 1", () => {
    let test = createTestElement();
    test.selectionWraps = false;
    assert.deepEqual(timings(test, 0.5, 1), [
      { duration: 500, direction: 'normal', fill: 'both', delay: -375, endDelay: 0 },
      { duration: 500, direction: 'normal', fill: 'both', delay: -125, endDelay: -250 },
      null,
      null,
      null
    ]);
  });

  it("timings to animate selection forward after releasing drag from 0.5 to 0", () => {
    let test = createTestElement();
    test.selectionWraps = false;
    assert.deepEqual(timings(test, 0.5, 0), [
      { duration: 500, direction: 'reverse', fill: 'both', delay: -125, endDelay: -250 },
      { duration: 500, direction: 'reverse', fill: 'both', delay: -375, endDelay: 0 },
      null,
      null,
      null
    ]);
  });

  it("timings to animate selection forward after releasing drag from 4.5 to 4", () => {
    let test = createTestElement();
    test.selectionWraps = false;
    assert.deepEqual(timings(test, 4.5, 4), [
      null,
      null,
      null,
      null,
      { duration: 500, direction: 'reverse', fill: 'both', delay: -125, endDelay: -250 }
    ]);
  });

  it("timings to animate direct forward jump of selection from 0 to 2", () => {
    let test = createTestElement();
    test.selectionWraps = false;
    assert.deepEqual(timings(test, 0, 2), [
      { duration: 250, direction: 'normal', fill: 'both', delay: -125, endDelay: 0 },
      { duration: 250, direction: 'normal', fill: 'both', delay: 0, endDelay: 0 },
      { duration: 250, direction: 'normal', fill: 'both', delay: 125, endDelay: -125 },
      null,
      null
    ]);
  });

  it("timings to animate selectPrevious from 1 to 0", () => {
    let test = createTestElement();
    test.selectionWraps = false;
    assert.deepEqual(timings(test, 1, 0), [
      { duration: 500, direction: 'reverse', fill: 'both', delay: 0, endDelay: -250 },
      { duration: 500, direction: 'reverse', fill: 'both', delay: -250, endDelay: 0 },
      null,
      null,
      null
    ]);
  });

  it("timings to animate direct backward jump of selection from 2 to 0", () => {
    let test = createTestElement();
    test.selectionWraps = false;
    assert.deepEqual(timings(test, 2, 0), [
      { duration: 250, direction: 'reverse', fill: 'both', delay: 125, endDelay: -125 },
      { duration: 250, direction: 'reverse', fill: 'both', delay: 0, endDelay: 0 },
      { duration: 250, direction: 'reverse', fill: 'both', delay: -125, endDelay: 0 },
      null,
      null
    ]);
  });

  it("timings to animate selection forward after releasing drag from -0.5 to 0", () => {
    let test = createTestElement();
    test.selectionWraps = false;
    assert.deepEqual(timings(test, -0.5, 0), [
      { duration: 500, direction: 'normal', fill: 'both', delay: -125, endDelay: -250 },
      null,
      null,
      null,
      null
    ]);
  });

  it("timings to animate selectNext from 4 to 0 (with wrap)", () => {
    let test = createTestElement();
    test.selectionWraps = true;
    assert.deepEqual(timings(test, 4, 0), [
      { duration: 500, direction: 'normal', fill: 'both', delay: 0, endDelay: -250 },
      null,
      null,
      null,
      { duration: 500, direction: 'normal', fill: 'both', delay: -250, endDelay: 0 }
    ]);
  });

  it("timings to animate selectPrevious from 0 to 4 (with wrap)", () => {
    let test = createTestElement();
    test.selectionWraps = true;
    assert.deepEqual(timings(test, 0, 4), [
      { duration: 500, direction: 'reverse', fill: 'both', delay: -250, endDelay: 0 },
      null,
      null,
      null,
      { duration: 500, direction: 'reverse', fill: 'both', delay: 0, endDelay: -250 }
    ]);
  });

  it("timings to animate selection forward after releasing drag from 4.5 to 0 (with wrap)", () => {
    let test = createTestElement();
    test.selectionWraps = true;
    assert.deepEqual(timings(test, 4.5, 0), [
      { duration: 500, direction: 'normal', fill: 'both', delay: -125, endDelay: -250 },
      null,
      null,
      null,
      { duration: 500, direction: 'normal', fill: 'both', delay: -375, endDelay: 0 }
    ]);
  });

  it("timings to animate selection forward after releasing drag from -0.5 to 0 (with wrap)", () => {
    let test = createTestElement();
    test.selectionWraps = true;
    assert.deepEqual(timings(test, -0.5, 0), [
      { duration: 500, direction: 'normal', fill: 'both', delay: -125, endDelay: -250 },
      null,
      null,
      null,
      { duration: 500, direction: 'normal', fill: 'both', delay: -375, endDelay: 0 }
    ]);
  });

});


function createTestElement() {
  // Sample element with the mixin.
  let test = document.createElement('selection-animation-test');
  // Don't need real items, just an array of the desired length.
  test.items = [0, 0, 0, 0, 0];
  return test;
}
