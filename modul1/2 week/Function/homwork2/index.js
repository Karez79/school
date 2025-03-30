const getSumOfNumbers = (number, type = 'odd') => {
  if (typeof number !== 'number') {
    return NaN; // Проверяем, что `number` — это число
  }

  let sum = 0; // Инициализируем сумму

  for (let i = 0; i <= number; i++) {
    if (type === 'odd' && i % 2 !== 0) {
      sum += i; // Нечётные числа
    } else if (type === 'even' && i % 2 === 0) {
      sum += i; // Чётные числа
    } else if (type === '') {
      sum += i; // Все числа
    }
  }

  return sum; // Возвращаем итоговую сумму
};
