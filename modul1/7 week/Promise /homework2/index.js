const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const UseresByIds = [5, 6, 2, 1];

const getAllUseresByIds = (ids) => {
  const requests = ids.map((id) => fetch(`${USERS_URL}/${id}`));
  toggleLoader();
  Promise.all(requests)
    .then((responses) => {
      const dataResults = responses.map((respons) => respons.json());
      return Promise.all(dataResults);
    })
    .then((data) => {
      data.forEach((users) => {
        console.log(users);
        const usersHTML = createUsersElement(users.name);
        usersList.append(usersHTML);
      });
    })
    .catch((error) => {
      console.log(error);
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

getAllUseresByIds(UseresByIds);
