let javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования.Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.'

const middle = Math.floor(javaScriptDescription.length / 2);
console.log('middle', middle)
javaScriptDescription = javaScriptDescription.slice(0, middle)
// console.log(javaScriptDescription)

javaScriptDescription = javaScriptDescription.replaceAll('а', 'А')
// console.log(javaScriptDescription)

javaScriptDescription = javaScriptDescription.replaceAll('a', 'A') 
// console.log(javaScriptDescription)

const result = javaScriptDescription.replaceAll(' ', '').repeat(3)
console.log('result', result)