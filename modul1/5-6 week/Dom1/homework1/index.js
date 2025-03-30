const createForm = () => {
  const findBody = document.querySelector('body');

  const container = document.createElement('div');
  container.className = 'form-container';

  const bodyform = document.createElement('form');
  bodyform.className = 'create-user-form';

  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Имя';
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.name = 'userName';
  nameInput.placeholder = 'Введите ваше имя';

  const passwordLabel = document.createElement('label');
  passwordLabel.textContent = 'Пароль';
  const passwordInput = document.createElement('input');
  passwordInput.type = 'password';
  passwordInput.name = 'password';
  passwordInput.placeholder = 'Придумайте пароль';

  const formBtn = document.createElement('button');
  formBtn.type = 'submit';
  formBtn.textContent = 'Подтвердить';

  nameLabel.appendChild(nameInput);
  passwordLabel.appendChild(passwordInput);
  bodyform.append(nameLabel, passwordLabel, formBtn);
  container.appendChild(bodyform);
  findBody.appendChild(container);
};

createForm();

const createFormWithInnerHTML = () => {
  const findBody = document.querySelector('body');

  const container = document.createElement('div');
  container.className = 'form-container';
  container.innerHTML = `
    <form class="create-user-form">
        <label>
            Имя
            <input type="text" name="userName" placeholder="Введите ваше имя">
        </label>
        <label>
            Пароль
            <input type="password" name="password" placeholder="Придумайте Пароль">
        </label>
        <button type="submit">
            Подтвердить
        </button>
    </form>
  `;

  findBody.appendChild(container);
};

createFormWithInnerHTML();
