// var realArray = ['a', 'b', 'c']; 
// var arrayLike = {
//     0: 'a',
//     1: 'b',
//     2: 'c',
//     length: 3
//   };
//   However, one key difference between Arrays and Array-like Objects is that Array-like objects inherit from Object.prototype instead of Array.prototype. This means that Array-like Objects can't access common Array prototype methods like forEach(), push(), map(), filter(), and slice():

// Converting Array-like Objects to Arrays
// const arrayLike = { 
// 0: 'Value 0',
// 1: 'Value 1', 
// length: 2
// };
// arrayLike.forEach(value => {/* Do something */}); // Errors 
// const realArray = Array.from(arrayLike); 
// realArray.forEach(value => {/* Do something */}); // Works

// var realArray = [];
// for(const element of arrayLike) {
//   realArray.append(element);
// }
// var realArray = Object.values(arrayLike);


// Reducing values
// let c;
// [1, 2, 3, 4].reduce(function (a, b) {
//     c = a + b;
//     return c;

// });
// console.log(c);

// // Flatten Array of Objects
// var array = [{
//     key: 'one',
//     value: 1
// }, {
//     key: 'two',
//     value: 2
// }, {
//     key: 'three',
//     value: 3
// }];

const arr1 =[11,12,13];
var arr2=arr1;
arr2.reverse();
console.log(arr1);
console.log(arr2);