const convertMsToDays = (ms) => Math.round(ms / (1000 * 60 * 60 * 24));

const getDaysBeforeBirthday = (nextBirthdayDate) => {
  const today = new Date();
  nextBirthdayDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  if (nextBirthdayDate < today) {
    nextBirthdayDate.setFullYear(nextBirthdayDate.getFullYear() + 1);
  }

  const diffMs = nextBirthdayDate - today;
  return convertMsToDays(diffMs);
};

const nextBirthdayDate = new Date(new Date().getFullYear(), 11, 4); // 4 декабря
console.log(`Дней до дня рождения: ${getDaysBeforeBirthday(nextBirthdayDate)}`);
