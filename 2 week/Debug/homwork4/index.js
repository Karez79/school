let numbers = [10, 4, 100, -5, 54, 2]
let sum = 0;

// Через цикл for
for (let i = 0; i < numbers.length; i += 1) {
    numbers[i] = numbers[i] ** 3;
    sum += numbers[i];
} 
console.log(sum); // 1158411

// Через цикл for of
sum = 0;
numbers = [10, 4, 100, -5, 54, 2]
console.log(numbers)
for (let num of numbers){
    num = num ** 3;
    sum += num;
} 
console.log('2', sum); // 1003904306910622800