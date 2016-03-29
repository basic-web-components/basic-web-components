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
    method1(arg1, arg2) {
      if (super.method1) { super.method1(arg1, arg2); }
      testArray.push(`MixinA.method1: arg1=${arg1}, arg2=${arg2}`);
    }

    method2(arg1, arg2) {
      if (super.method2) { super.method2(arg1, arg2); }
      testArray.push(`MixinA.method2: arg1=${arg1}, arg2=${arg2}`);
    }
  }

  return MixinA;
};

let MixinB = (base) => {
  class MixinB extends base {
    method1(arg1, arg2) {
      if (super.method1) { super.method1(arg1, arg2); }
      testArray.push(`MixinB.method1: arg1=${arg1}, arg2=${arg2}`);
    }

    method2(arg1, arg2) {
      if (super.method2) { super.method2(arg1, arg2); }
      testArray.push(`MixinB.method2: arg1=${arg1}, arg2=${arg2}`);
    }
  }

  return MixinB;
};

let MixinC = (base) => {
  class MixinC extends base {
    method1(arg1, arg2) {
      if (super.method1) { super.method1(arg1, arg2); }
      testArray.push(`MixinC.method1: arg1=${arg1}, arg2=${arg2}`);
    }

    method2(arg1, arg2) {
      if (super.method2) { super.method2(arg1, arg2); }
      testArray.push(`MixinC.method2: arg1=${arg1}, arg2=${arg2}`);
    }
  }

  return MixinC;
};

class TestElement1 extends Composable(HTMLElement).compose(OrderedSuper, MixinA, MixinB, MixinC) {
  method1(arg1, arg2) {
    if (super.method1) { super.method1(arg1, arg2); }
    testArray.push(`TestElement.method1: arg1=${arg1}, arg2=${arg2}`);
  }

  method2(arg1, arg2) {
    this.orderedSuper(mixinOrderArray, 'method2', arg1, arg2);
    testArray.push(`TestElement.method2: arg1=${arg1}, arg2=${arg2}`);
  }
}
document.registerElement('test-element', TestElement1);

describe('OrderedSuper mixin', () => {

  it('calls super in the standard mixin way', () => {
    testArray = [];
    let expectedArray = [
      'MixinA.method1: arg1=foo, arg2=bar',
      'MixinB.method1: arg1=foo, arg2=bar',
      'MixinC.method1: arg1=foo, arg2=bar',
      'TestElement.method1: arg1=foo, arg2=bar'];

    let element = document.createElement('test-element');
    //let t1 = performance.now();
    element.method1('foo', 'bar');
    //let t2 = performance.now();
    //console.log(`Performance: ${t2 - t1} milliseconds`);
    assert(arraysAreEqual(testArray, expectedArray));
  });

  it('uses OrderedSuper to rearrange mixin call order', () => {
    testArray = [];
    mixinOrderArray = ['MixinB','MixinC', 'MixinA'];

    let expectedArray = [
      'MixinB.method2: arg1=foo, arg2=bar',
      'MixinC.method2: arg1=foo, arg2=bar',
      'MixinA.method2: arg1=foo, arg2=bar',
      'TestElement.method2: arg1=foo, arg2=bar'];

    let element = document.createElement('test-element');
    //let t1 = performance.now();
    element.method2('foo', 'bar');
    //let t2 = performance.now();
    //console.log(`Performance: ${t2 - t1} milliseconds`);
    assert(arraysAreEqual(testArray, expectedArray));
  });
});
