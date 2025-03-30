const clientName = 'Игорь'
let clientSpentForAllTime = 110
const clientSpentToday = 25
let discount = 0;

if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
  discount = 10;
} else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
  discount = 20;
} else if (clientSpentForAllTime >= 500) {
  discount = 30;
}

console.log(discount)
console.log(clientSpentForAllTime)

alert(`Вам предоставляется скидка в ${discount}%!`);

const totalWithDiscount = clientSpentToday - (clientSpentToday * discount / 100);
clientSpentForAllTime += totalWithDiscount;

alert(`Спасибо, ${clientName}! К оплате ${totalWithDiscount.toFixed(2)}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime.toFixed(2)}$.`);