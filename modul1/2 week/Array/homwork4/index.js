const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];
let coffeeName = prompt('Поиск кофе по названию:').trim();
console.log('Что пользователь ввел:', coffeeName);

const updatedPrices = prices.map((item) => {
  return item * 1.5;
});

coffees.forEach((coffee, index) => {
  alert(`Кофе ${coffee} сейчас стоит ${updatedPrices[index]} евро`);
});

console.log(updatedPrices);

coffeeName = coffeeName[0].toUpperCase() + coffeeName.slice(1).toLowerCase();
console.log(coffeeName);
const findIndex = coffees.findIndex((item) => item === coffeeName);

if (findIndex >= 0) {
  console.log(
    `Такой кофе есть! Вы ввели "${coffeeName}". Вот его индекс: ${findIndex}. Обновленная цена: ${updatedPrices[findIndex]} евро. `
  );
} else {
  console.log('Такого кофе нет');
}
