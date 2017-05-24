/**
 * Created by ffulauh on 2017/4/20.
 */

//对象字面量 Object Literals
var empty_object = {};
var stooge = {
    "first-name": "Jerome",  //js的标识符中包含-是不合法的
    "last-name": "Howard"
}
var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"

    }
};

//检索 retrieval
stooge["first-name"]    //"JEROME"
flight.departure.IATA   //"SYD" 推荐使用
flight.status   //undefined

// ||运算符可以用来填充默认值
var middle = stooge["middle-name"] || "(none)"; //"(none)"

//从undefined的成员属性中取值将会导致TypeError异常。可以通过&&运算符来避免错误
flight.equipment    //undefined
// flight.equipment.model  //throw "TypeError"
flight.equipment && flight.equipment.model

//更新
//如果属性名已经存在于对象里，那么这个属性的值就会被替换，如果没用，该属性就被扩充到对象中

//引用
var x=stooge;
x.nickname='Curly';
var nick=stooge.nickname;

//原型
// Object.prototype
if (typeof Object.beget!='function'){
    Object.create=function (o) {
        var F=function () {};
        F.prototype=o;
        return new F();
    }
}
var another_stooge=Object.create(stooge);

//反射
typeof flight.number;   // 'number'
//原型链中的任何属性都会产生值
typeof flight.toString();   //'function'
typeof typeof flight.number;    //'string'
//hasOwnProperty方法不会检查原型链
flight.hasOwnProperty('number');    //true
flight.hasOwnProperty('constructor');   //false

//枚举
var name;
for(name in another_stooge) {
    if(typeof another_stooge[name]!=='function'){
        document.writeln(name+':'+another_stooge[name]);
    }
}

//删除对象的属性
delete another_stooge.nickname;

//减少全局变量污染
var MYAPP={};
MYAPP.stooge={
    "first-name":"Joe",
    "last-name":"Howard"
};
