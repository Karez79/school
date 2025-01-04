// 1
console.log(Number('10'), typeof Number('10')); // явное
// 2
console.log(+'50', typeof +'50'); // неявное
// 3
console.log(Number('100'), typeof Number('100')); // явное
// 4
console.log('' + 1, typeof ('' + 1)); // неявное
// 5
console.log(String(1), typeof String(1)); // явное
// 6
console.log(Boolean(0), typeof Boolean(0)); // явное
// 7
console.log(+'001', typeof +'001'); // неявное
// 8
console.log(1 + '', typeof (1 + '')); // неявное
// 9
console.log(Boolean(1), typeof Boolean(1)); // явное
// 10
console.log(String(001), typeof String(001)); // явное
// 11
console.log(Number('Hello World'), typeof Number('Hello World')); // явное
