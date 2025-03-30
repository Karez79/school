const coffees = ['Latte', 'Cappuccino', 'Americano'];
let coffeeName = prompt('Поиск кофе по названию:').trim();

console.log('Что пользователь ввел:', coffeeName);

coffeeName = coffeeName[0].toUpperCase() + coffeeName.slice(1).toLowerCase();
console.log(coffeeName);
const findIndex = coffees.findIndex((item) => item === coffeeName);

if (findIndex >= 0) {
  console.log(
    `Такой кофе есть! Вы ввели "${coffeeName}". Вот его индекс: ${findIndex}`
  );
} else {
  console.log('Такого кофе нет');
}
