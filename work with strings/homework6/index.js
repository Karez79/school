const userText = prompt ('Введите текст').trim().toLowerCase()
const wordFromText = prompt ('Введите слово из текста').trim().toLowerCase()

const indexOfWord = userText.indexOf(wordFromText);
console.log(indexOfWord)

const string = userText.slice(0, indexOfWord)
console.log(`Результат: ${string}`)
 
alert(`Результат: ${string}`)