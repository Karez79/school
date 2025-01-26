function getDateFormat(date, separator = '.') {
  return date.toISOString().slice(0, 10).replace(/-/g, separator);
}

// Пример использования:
const date = new Date();
console.log(getDateFormat(date));
console.log(getDateFormat(date, '-'));
