const myName = 'Иван'
const programmingLanguage = 'JavaScript'
const courseCreatorName = 'Владиен Минин'
const reasonText = 'можно создавать крутые сайты и приложения, которые принесут пользу для людей'
const numberOfMonth = 12


let myInfoText = `Всем привет! Меня зовут ${myName}. 
Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.
Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяцев. 
Я уверен, что пройду данный курс до конца!`
console.log(myInfoText)


myInfoText = myInfoText.replaceAll('JavaScript', 'javascript')
console.log(myInfoText)

myInfoText = myInfoText.replaceAll('курс', 'КУРС')
console.log(`Итог:\n`, myInfoText, 'Длина строки:', myInfoText.length, `\nПервый символ:`, myInfoText[0], 
`\nПоследний символ:`, myInfoText[myInfoText.length - 1]);
