let numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;

// Через цикл for
for (let i = 0; i < numbers.length; i += 1) {
    let another = numbers[i] ** 3;  // Возводим в куб без изменения массива
    sum += another;
}
console.log(sum); // 1158411

// Через цикл for of
sum = 0;  // Обнуляем сумму
for (let num of numbers) {
    let another = num ** 3;  // Возводим число в куб
    sum += another;  // Добавляем к общей сумме
}
console.log('2', sum); // 1158411
