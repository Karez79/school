const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const getAllUseres = () => {
  toggleLoader();
  fetch(USERS_URL)
    .then((response) => {
      console.log('Ответ сервера:', response);
      return response.json();
    })
    .then((data) => {
      console.log('Данные пользователей:', data);
      data.forEach((users) => {
        const usersHTML = createUsersElement(users.name);
        usersList.append(usersHTML);
      });
    })
    .catch((error) => {
      console.error('Ошибка запроса:', error);
    })
    .finally(() => {
      toggleLoader();
    });
};

const createUsersElement = (text) => {
  const usersElement = document.createElement('li');
  const usersElementA = document.createElement('a');
  usersElementA.href = '#';
  usersElementA.textContent = text;
  usersElement.append(usersElementA);

  return usersElement;
};

const usersList = document.querySelector('#data-container');

const toggleLoader = () => {
  const loading = document.querySelector('#loader');
  const isHidden = loading.hasAttribute('hidden');
  if (isHidden) {
    loading.removeAttribute('hidden');
  } else {
    loading.setAttribute('hidden', '');
  }
};

getAllUseres();
