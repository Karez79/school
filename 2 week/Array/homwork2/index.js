const getSumOfSequence = (number) => {
  let someArray = [];

  for (let i = 1; i <= number; i++) {
    someArray.push(i);
  }

  console.log('Массив:', someArray);

  const firstElement = someArray[0]; // первый элемент массива
  const lastElement = someArray[someArray.length - 1]; // последний элемент массива

  return firstElement + lastElement; // возвращаем сумму первого и последнего элементов
};

console.log(getSumOfSequence(100));
