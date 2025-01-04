let name = 'Ivan'
console.log(Number(name), Boolean(name), String(name));
let age  = 29
console.log(Number(age), Boolean(age), String(age));
let kachok = false
console.log(Number(kachok), Boolean(kachok), String(kachok));
let dog = null
console.log(Number(dog), Boolean(dog), String(dog));
let movie = undefined
console.log(Number(movie), Boolean(movie), String(movie));
let all = {
    name: 'Petr',
    age: 29,
    kachok: false,
    dog: '',
}
console.log(Number(all), Boolean(all), String(all));
let bigNumber = 100n
console.log(Number(bigNumber), Boolean(bigNumber), String(bigNumber));
let id = Symbol('id')
console.log(Number(id), Boolean(id), String(id));