const question1 = confirm('JavaScript появился в 1995 году?')
const question2 = confirm('Спецификация JavaScript называется ECMAScript?')
const question3 = confirm('JavaScript был создан за 1 месяц?')

const answer1 = 'JavaScript появился в 1995 году'
const answer2 = 'Спецификация JavaScript называется ECMAScript'
const answer3 = 'JavaScript был создан за 10 дней'
// console.log(question1)


if (question1 == true){
    alert('Верно')
}else{
    alert(`Нет, правильный ответ: ${answer1}`)
}

if (question2 == true){
    alert('Верно')
}else{
    alert(`Нет, правильный ответ: ${answer2}`)
}

if (question3 !== true){
    alert('Верно')
}else{
    alert(`Нет, правильный ответ: ${answer3}`)
}
