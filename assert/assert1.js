/**
 * Created by dllo on 17/4/20.
 */

const assert = require('assert');
//1.assert断言,值是false就不通过,抛出错误
 assert(true,'是真的吗');
console.log('过了?');
// assert(false);
// console.log('过了没?');


//2. assert.deepEqual()
//只比较可枚举的自身属性。 deepEqual() 不比较对象的原型、连接符、或不可枚举的属性

assert.deepEqual({a : 1},{a : '1' })
console.log('aaa');

//3.assert.deepStrictEqual()
//大多数情况下与 assert.deepEqual() 一样，但有两个例外。 首先，原始值使用全等运算符（===）比较。 其次，对象的比较包括检查它们的原型是否全等。
// assert.deepStrictEqual({a : 1},{a : '1' });
// console.log('bbb');


//4.assert.doesNotThrow()
//当第一个参数(回电函数)中的错误类型和第二个参数一致的时候会抛出
//AssertionError: Got unwanted exception (TypeError)...这样的错误
//如果第三个参数有值,则会出现在抛出的错误后面
// assert.doesNotThrow(
//     function (){
//     throw new TypeError('错误');
// },
//     TypeError,
//     '是个错误'
// );

//5. assert.equal()
//判断两个参数是否相等 ( == ),用双等判断
assert.equal(1,1);
console.log('能过不');

//assert.equal({a: {b: 1}},{a: {b: 1}});//抛出错误,因为两个参数是json对象,不能比较大小

// 6.assert.fail()
// 抛出 AssertionError。 如果 message 不存在，则错误信息会被设为 actual 的值加分隔符 operator 再加 expected 的值。 否则，错误信息为 message 的值。
// assert.fail(1,2,'>');
// console.log('1>2');
// 抛出 AssertionError:  >

// assert.fail(1, 2, undefined, '>');
// 抛出 AssertionError: 1 > 2

// assert.fail(1, 2, '错误信息', '>');
// 抛出 AssertionError: 错误信息

//7.assert.ifError()
// 如果 value 为真，则抛出 value。 可用于测试回调函数的 error 参数。
assert.ifError(false);
//通过
assert.ifError(1);
// assert.ifError = function(err) { if (err) throw err; };
console.log('222');

//8.
assert.notDeepEqual();
/ 8.assert.equal(actual, expected[, message])
// 使用相等运算符（==）测试 actual 参数与 expected 参数是否相等。
// assert.equal(1, 1);
// 通过，1 == 1
// assert.equal(1, '1');
// 通过，1 == '1'
// assert.equal(1, 2);
// 抛出 AssertionError: 1 == 2
// assert.equal({a: {b: 1}}, {a: {b: 1}});
// 抛出 AssertionError: { a: { b: 1 } } == { a: { b: 1 } }  a: { b: 1 } } == { a: { b: 1 }返回false

// 9.assert.fail(actual, expected, message, operator)
// 抛出 AssertionError。 如果 message 不存在，则错误信息会被设为 actual 的值加分隔符 operator 再加 expected 的值。 否则，错误信息为 message 的值。
//message 不存在
// assert.fail(1, 2, undefined, '>');
// 抛出 AssertionError: 1 > 2
//message 存在
// assert.fail(1, 2, '错误信息', '>');
// 抛出 AssertionError: 错误信息

// 10.assert.ifError(value)
// 如果 value 为真，则抛出 value。 可用于测试回调函数的 error 参数。
// assert.ifError(false);//不抛出
// assert.ifError(true);//抛出true assert.ifError = function(err) { if (err) throw err; };

// 11.assert.notEqual(actual, expected[, message])
// 使用不等运算符（!=）测试是否不相等
// assert.notEqual(1, 2);// 通过
// assert.notEqual(1, 1);// 抛出 AssertionError: 1 != 1
// assert.notEqual(1, '1');// 抛出 AssertionError: 1 != '1'


// 12.assert.notStrictEqual(actual, expected[, message])
// 使用不全等运算符（!==）测试是否不全等。
// assert.notStrictEqual(1, 2);// 通过
// assert.notStrictEqual(1, 1);// 抛出 AssertionError: 1 !== 1
// assert.notStrictEqual(1, '1');// 通过

// 13.assert.ok(value[, message])
// 测试 value 是否为真值。 相当于 assert.equal(!!value, true, message)。
// 如果 value 不为真值，则抛出一个带有 message 属性的 AssertionError，其中 message 属性的值等于传入的 message 参数的值。 如果 message 参数为 undefined，则赋予默认的错误信息。
// assert.ok(true);// 通过
// assert.ok(1);// 通过
// assert.ok(false);// 抛出 "AssertionError: false == true"
// assert.ok(0);// 抛出 "AssertionError: 0 == true"
// assert.ok(false, '不是真值');// 抛出 "AssertionError: 不是真值"

// 14.assert.strictEqual(actual, expected[, message])
// 使用全等运算符（===）测试是否全等。
// assert.strictEqual(1, 2);// 抛出 AssertionError: 1 === 2
// assert.strictEqual(1, 1);// 通过
// assert.strictEqual(1, '1');// 抛出 AssertionError: 1 === '1'