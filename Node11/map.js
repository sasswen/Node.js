/**
 * Created by dllo on 17/5/2.
 */

var async = require('async');
var fs = require('fs');

var arr =[
{name:'banzhang',
    age:'18',
    weight: '71kg'},
{name:'banzhang',
    age:'18',
    weight: '71kg'}
];

//map
// coll通过iteratee函数映射每个值来生成新的值集合。在iteratee被称为从一个项目coll ，当它已经完成处理回调。这些回调中的每一个都有两个参数：an error和已转换的项coll。如果 iteratee将错误传递给其回调，则主callback（对于 map函数）将立即被调用，并显示错误。
//
// 请注意，由于此功能iteratee并行应用于每个项目，因此不能保证iteratee功能将按顺序完成。但是，结果数组将与原来的顺序相同coll。

// 如果map传递一个Object，结果将是一个Array。结果将大致按照原始对象的键的顺序（但是JavaScript可能会有所不同）。

async.map(['file1','file2','file3'], fs.stat, function(err, results) {
    // results is now an array of stats for each file
    console.log(results + '上map');
});
async.each({1:'file1',2:'file2',3:'file3'}, fs.stat, function(err, results) {
    // results is now an array of stats for each file
    console.log(results + '上each');
});

async.map({1:'file1',2:'file2',3:'file3'}, fs.stat, function(err, results) {
    // results is now an array of stats for each file
    console.log(results);
});
async.each(['file1','file2','file3'], fs.stat, function(err, results) {
    // results is now an array of stats for each file
    console.log(results + '下each');
});