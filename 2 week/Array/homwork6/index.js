const numbers = [10, 4, 100, -5, 54, 2];

// Функция через цикл for
function calculateCubesWithFor(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] ** 3;
  }
  return sum;
}

// Функция через цикл for...of
function calculateCubesWithForOf(numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number ** 3;
  }
  return sum;
}

// Функция через метод forEach
function calculateCubesWithForEach(numbers) {
  let sum = 0;
  numbers.forEach((number) => {
    sum += number ** 3;
  });
  return sum;
}

// Функция через метод reduce
function calculateCubesWithReduce(numbers) {
  return numbers.reduce((sum, number) => sum + number ** 3, 0);
}

// Вывод результата
console.log('Сумма кубов через функцию с for:', calculateCubesWithFor(numbers));
console.log(
  'Сумма кубов через функцию с for...of:',
  calculateCubesWithForOf(numbers)
);
console.log(
  'Сумма кубов через функцию с forEach:',
  calculateCubesWithForEach(numbers)
);
console.log(
  'Сумма кубов через функцию с reduce:',
  calculateCubesWithReduce(numbers)
);
