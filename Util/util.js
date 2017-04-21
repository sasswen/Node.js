/**
 * Created by dllo on 17/4/21.
 */

const util = require('util');

//1.util.debuglog()
//util.debuglog() 方法用于创建一个函数，基于 NODE_DEBUG 环境变量的存在与否有条件地写入调试信息到 stderr。 如果 section 名称在环境变量的值中，则返回的函数类似于 console.error()。 否则，返回的函数是一个空操作
const debuglog = util.debuglog('foo');

debuglog('hello from foo [%d]', 123);



//2.util.format()
//util.format() 方法返回一个格式化后的字符串，使用第一个参数作为一个类似 printf 的格式。

var a = util.format('%s:%s', 'foo','haha');
console.log(a);//foo:haha

//如果传入 util.format() 方法的参数比占位符的数量多，多出来的参数拼接到返回的字符串，参数之间用一个空格分隔
var b = util.format('%s:%s', 'name','haha','Name');
console.log(b);//name:haha Name

//如果第一个参数不是一个格式字符串，则 util.format() 返回一个所有参数用空格分隔并连在一起的字符串。
var c = util.format('a','b','c');
console.log(c);//a b c

//3.util.inherits()
//从一个构造函数中继承原型方法到另一个。
// util.inherits(function,function);

//4.util.inspect()
//util.inspect() 方法返回 object 的字符串表示，主要用于调试。 附加的 options 可用于改变格式化字符串的某些方面。
// console.log(util.inspect(util, { showHidden: true, depth: null }));

//5.util.inspect.defaultOptions
//defaultOptions 值允许对被 util.inspect 使用的默认选项进行自定义。 这对 console.log 或 util.format 等显式调用 util.inspect 的函数很有用。 它需被设为一个对象，包含一个或多个有效的 util.inspect() 选项。 也支持直接设置选项的属性。
const arr = Array(101);

console.log(arr); // 打印截断的数组
util.inspect.defaultOptions.maxArrayLength = null;
// console.log(arr);




