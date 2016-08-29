/**
 * Created by Rain on 2016/3/28.
 */
//闭包 封闭作用域，每次申请开辟不同的内存空间
function counter() {
  var n = 0;
  return {
    count: function () {
      console.log(++n);
      return n;
    },
    reset: function () {
      console.log('reset之前:' + n);
      n = 0;
      console.log('reset之后:' + n);
    }
  }
}


var c = counter(),
    d = counter();
c.count();  //c 1
d.count();  //d 1
c.count();  //c 2
d.count();  //d 2
c.reset();  //c 2 --> c  0
c.count();  //c 1
d.count();  //d 3