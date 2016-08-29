/**
 * Created by Rain on 2015/12/14.
 */
var calculator = function (eq) {
  var test = 1 + eq;

  return {
    add: function (x, y) {
      var val = x + y;
      return val + test;
    }
  }
};

var ca = new calculator(2);
console.log(ca.test);//test 会作为闭包存在，但是作为私有变量不可以被直接访问
console.log(ca.add(2, 2));