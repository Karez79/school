const clientsEstimations = [];

const askClientToGiveEstimation = () => {
  const numberValue = Number(
    prompt('Как вы оцениваете нашу кофейню от 1 до 10?')
  );

  // Проверяем, что введено число от 1 до 10
  if (numberValue >= 1 && numberValue <= 10) {
    clientsEstimations.push(numberValue);
  } else {
    alert('Пожалуйста, введите число от 1 до 10');
  }
};

// Запрашиваем 5 оценок
for (let i = 0; i < 5; i++) {
  askClientToGiveEstimation();
}

// Выводим положительные и отрицательные оценки
const goodEstimations = clientsEstimations.filter(
  (numberValue) => numberValue > 5
).length;
const notGoodEstimations = clientsEstimations.filter(
  (numberValue) => numberValue <= 5
).length;

alert(
  `Всего положительных оценок: ${goodEstimations}. Всего отрицательных оценок: ${notGoodEstimations}`
);
