// Function declaration

function getName1(name) {
  return `Имя равно ${name}`;
}
console.log(getName1('Андрей'));

// function expression

const getName2 = function (name) {
  return `Имя равно ${name}`;
};
console.log(getName2('Иван'));

// Arrow function expression

const getName3 = (name) => {
  return `Имя равно ${name}`;
};

console.log(getName3('Кря'));
