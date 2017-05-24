/**
 * Created by ffulauh on 2017/4/20.
 */
var add = function (a,b) {
    return a+b;
}

// 1.方法调用模式
// 当一个函数被保存为对象的一个属性时，我们称它为一个方法
var myObject={
    value: 0,
    increment: function(inc) {
        this.value += typeof inc === 'number' ? inc:1;
    }
}
myObject.increment();
// document.writeln(myObject.value);    //1
myObject.increment(2);
// document.writeln(myObject.value);    //3

//2.函数调用模式
//当一个函数并非一个对象属性时，那么它就是被当做一个函数来调用的，以此模式调用函数是，this被绑定到全局对象
//给myObject增加一个double方法
myObject.double = function () {

    var that = this;    //解决方法
    var helper=function () {
        that.value=add(that.value,that.value);
    };
    helper();
}
myObject.double();
// document.writeln(myObject.value);

//3.构造器调用模式(不推荐)
//一个函数，如果创建的目的就是希望结合new前缀来调用，那么他就被称为构造器函数
var Que=function (string) {
    this.status=string;
}
Que.prototype.get_status=function () {
  return this.status;
};
var myQuo=new Que("confused");
// document.writeln(myQuo.get_status());

//4.Apply调用模式
//函数可以拥有方法
var array=[3,4];
var sum=add.apply(null,array);  //sum值为7
//构造一个包含status成员的对象
var statusObject={
  status:'A-OK'
};
//statusObject并没有继承自Quo.prototype，但我们可以在statusObject上调用get_status方法，尽管statusObject并没有一个名为get_status的方法
var status=Que.prototype.get_status.apply(statusObject);
// document.writeln(status);

//参数
//arguments并不是一个真正的数组，只是一个array-like对象。它拥有一个length属性，但没有任何数组的方法
var sum=function () {
  var i, sum=0;
  for(i=0;i<arguments.length;i++){
      sum+=arguments[i];
  }
  return sum;
};
// document.writeln(sum(4,8,15));

//返回
//一个函数总是会返回一个值。如果没有指定返回值，则返回undefined

//异常
var addAgain=function (a,b) {
  if(typeof a !=='number' || typeof b!=='number'){
      throw {
          name:'TypeError',
          message:'add needs numbers'
      };
  }
  return a+b;
};

var try_it=function () {
    try {
        addAgain("seven");
    } catch (e) {
        // document.writeln(e.name+":"+e.message);
    }
}
try_it();

//扩充类型的功能 *
Function.prototype.method=function (name,func) {
    if(!this.prototype[name]){
        this.prototype[name]=func;
    }
    return this;
};
String.method('trim',function () {
   return this.replace(/^\s+|\s+$/g,'') ;
});
var han=" han ";
document.writeln(han.length);
han=han.trim();
document.writeln(han.length);

//作用域
//js不支持块级作用域
//其他语言都尽可能延迟声明变量
//在函数体的顶部声明函数中可能用到的所有变量



