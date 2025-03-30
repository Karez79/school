function getDivisorsCount(number) {
  // Проверка: является ли переданный аргумент числом
  if (typeof number !== 'number' || isNaN(number)) {
    return NaN; // Если не число — возвращаем NaN
  }

  // Проверка на целое число больше нуля
  if (!Number.isInteger(number) || number <= 0) {
    alert('number должен быть целым числом и больше нуля!');
    return;
  }

  // Подсчет делителей
  let count = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      count++; // Если число делится на i без остатка, увеличиваем счетчик
    }
  }

  return count; // Возвращаем количество делителей
}

console.log(getDivisorsCount(4)); // Вернет 3 (делители: 1, 2, 4)
console.log(getDivisorsCount(5)); // Вернет 2 (делители: 1, 5)
console.log(getDivisorsCount(12)); // Вернет 6 (делители: 1, 2, 3, 4, 6, 12)
console.log(getDivisorsCount(30)); // Вернет 8 (делители: 1, 2, 3, 5, 6, 10, 15, 30)
