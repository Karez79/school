const addDays = (date, days) => {
  const msPerDay = 1000 * 60 * 60 * 24;
  return new Date(date.getTime() + days * msPerDay);
};

const currentDate = new Date();
const newDate = addDays(currentDate, 5);
console.log(`Текущая дата: ${currentDate}`);
console.log(`Обновленная дата: ${newDate}`);
