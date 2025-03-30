const question1 = Number(prompt('Сколько будет 2 + 2?').trim());
const question2 = Number(prompt('Сколько будет 2 * 2?').trim());
const question3 = Number(prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?').trim());
const question4 = Number(prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?').trim());
const question5 = Number(prompt('Сколько будет 2 + 2 * 2?').trim());

const answer1 = 2 + 2;  // 4
const answer2 = 2 * 2;  // 4
const answer3 = 5 - 3 - 1;  // 1
const answer4 = (10 - 2 - 1) + 5;  // 12
const answer5 = 2 + 2 * 2;  // 6


let correctAnswers = 0;  // Счетчик правильных ответов
let incorrectAnswers = 0;  // Счетчик неправильных ответов


// Проверка первого вопроса
if (question1 === answer1) {
  alert('Ответ на первый вопрос Верный');
  correctAnswers++;  // Увеличиваем счетчик правильных ответов
} else {
  alert('Ответ на первый вопрос Неверный');
  incorrectAnswers++;  // Увеличиваем счетчик неправильных ответов
}

// Проверка второго вопроса
if (question2 === answer2) {
  alert('Ответ на второй вопрос Верный');
  correctAnswers++;
} else {
  alert('Ответ на второй вопрос Неверный');
  incorrectAnswers++;
}

// Проверка третьего вопроса
if (question3 === answer3) {
  alert('Ответ на третий вопрос Верный');
  correctAnswers++;
} else {
  alert('Ответ на третий вопрос Неверный');
  incorrectAnswers++;
}

// Проверка четвертого вопроса
if (question4 === answer4) {
  alert('Ответ на четвертый вопрос Верный');
  correctAnswers++;
} else {
  alert('Ответ на четвертый вопрос Неверный');
  incorrectAnswers++;
}

// Проверка пятого вопроса
if (question5 === answer5) {
  alert('Ответ на пятый вопрос Верный');
  correctAnswers++;
} else {
  alert('Ответ на пятый вопрос Неверный');
  incorrectAnswers++;
}

// Вывод итогового сообщения
alert(`Конец теста! Правильные ответы — ${correctAnswers}; Неправильные ответы — ${incorrectAnswers}.`);