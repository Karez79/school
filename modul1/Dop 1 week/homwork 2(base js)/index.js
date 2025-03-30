const clientName = prompt('Введите имя клиента');
let clientSpentForAllTime = Number(prompt('Сколько клиент потратил за все время?'));
const clientSpentToday = Number(prompt('Сколько клиент потратил сегодня?'));

// Проверка корректности ввода
if (isNaN(clientSpentForAllTime) || isNaN(clientSpentToday)) {
  alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку.');
} else {
  clientSpentForAllTime += clientSpentToday; // Обновляем общую сумму до расчета скидки
  let discount = 0;

  // Логика скидок
  if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
    discount = 10;
  } else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
    discount = 20;
  } else if (clientSpentForAllTime >= 500) {
    discount = 30;
  }

  alert(`Вам предоставляется скидка в ${discount}%!`);

  // Итоговая сумма с учетом скидки
  const totalWithDiscount = clientSpentToday - (clientSpentToday * discount / 100);
  clientSpentForAllTime += totalWithDiscount - clientSpentToday; // Корректируем общую сумму

  alert(`Спасибо, ${clientName}! К оплате ${totalWithDiscount.toFixed(2)}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime.toFixed(2)}$.`);
}
