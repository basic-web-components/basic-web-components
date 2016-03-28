import {assert} from 'chai';
import Composable from '../src/Composable';
import OrderedSuper from '../src/OrderedSuper';

let testArray = [];
let mixinOrderArray = [];

function arraysAreEqual(array1, array2) {
  let isSame = (array1.length == array2.length) && array1.every((element, index) => {
    return element === array2[index];
  });

  return isSame;
}

let MixinA = (base) => {
  class MixinA extends base {
    method1() {
      if (super.method1) { super.method1(); }
      testArray.push('MixinA.method1');
    }

    method2() {
      if (super.method2) { super.method2(); }
      testArray.push('MixinA.method2');
    }
  }

  return MixinA;
};

let MixinB = (base) => {
  class MixinB extends base {
    method1() {
      if (super.method1) { super.method1(); }
      testArray.push('MixinB.method1');
    }

    method2() {
      if (super.method2) { super.method2(); }
      testArray.push('MixinB.method2');
    }
  }

  return MixinB;
};

let MixinC = (base) => {
  class MixinC extends base {
    method1() {
      if (super.method1) { super.method1(); }
      testArray.push('MixinC.method1');
    }

    method2() {
      if (super.method2) { super.method2(); }
      testArray.push('MixinC.method2');
    }
  }

  return MixinC;
};

class TestElement1 extends Composable(HTMLElement).compose(OrderedSuper, MixinA, MixinB, MixinC) {
  method1() {
    if (super.method1) { super.method1(); }
    testArray.push('TestElement1.method1');
  }

  method2() {
    if (super.method2) { super.method2(); }
    testArray.push('TestElement1.method2');
  }
}
document.registerElement('test-element1', TestElement1);

class TestElement2 extends Composable(HTMLElement).compose(OrderedSuper, MixinA, MixinB, MixinC) {
  method1() {
    this.orderedSuper('method1', mixinOrderArray);
    testArray.push('TestElement2.method1');
  }

  method2() {
    if (super.method2) { super.method2(); }
    testArray.push('TestElement2.method2');
  }
}
document.registerElement('test-element2', TestElement2);

describe('OrderedSuper mixin', () => {

  it('calls super in the standard mixin way', () => {
    testArray = [];
    let expectedArray = [
      'MixinA.method1',
      'MixinB.method1',
      'MixinC.method1',
      'TestElement1.method1'];

    let element = document.createElement('test-element1');
    let t1 = performance.now();
    element.method1();
    let t2 = performance.now();
    console.log(`Performance: ${t2 - t1} milliseconds`);
    assert(arraysAreEqual(testArray, expectedArray));
  });

  it('uses OrderedSuper to rearrange mixin call order', () => {
    testArray = [];
    mixinOrderArray = ['MixinB','MixinC', 'MixinA'];

    let expectedArray = [
      'MixinB.method1',
      'MixinC.method1',
      'MixinA.method1',
      'TestElement2.method1'];

    let element = document.createElement('test-element2');
    let t1 = performance.now();
    element.method1();
    let t2 = performance.now();
    console.log(`Performance: ${t2 - t1} milliseconds`);
    assert(arraysAreEqual(testArray, expectedArray));
  });
});
