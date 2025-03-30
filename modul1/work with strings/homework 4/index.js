const userName = prompt('Введите ваше имя').trim().toUpperCase();
console.log('Имя пользователя:', userName)

alert(`Вы ввели: ${userName}` )

const userAge = Number(prompt ('Введите ваш возраст').trim());
console.log(userAge)

// console.log(`Вас зовут ${userName} и вам ${userAge} лет`)

const result = `Вас зовут ${userName} и вам ${userAge} лет` 
console.log(result)

alert(result)