const student = {
  name: 'Maxim',
  programmingLanguage: 'JavaScript',
};

const handleObject = (obj, key, action) => {
  if (action === 'get') {
    return obj[key]; // Возвращаем значение ключа
  } else if (action === 'add') {
    obj[key] = ''; // Добавляем новый ключ с пустым значением
    return obj; // Возвращаем обновлённый объект
  } else if (action === 'delete') {
    delete obj[key]; // Удаляем ключ из объекта
    return obj; // Возвращаем обновлённый объект
  } else {
    return obj; // Возвращаем объект без изменений
  }
};

const result = handleObject(student, 'programmingLanguage', 'delete');
console.log('result', result); // { name: 'Maxim' }
