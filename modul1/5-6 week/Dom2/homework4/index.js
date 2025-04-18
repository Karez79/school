const tasks = [
  {
    id: '1138465078061',
    completed: false,
    text: 'Посмотреть новый урок по JavaScript',
  },
  {
    id: '1138465078062',
    completed: false,
    text: 'Выполнить тест после урока',
  },
  {
    id: '1138465078063',
    completed: false,
    text: 'Выполнить ДЗ после урока',
  },
];

const body = document.querySelector('body');
const tasksList = document.querySelector('.tasks-list');
const form = document.querySelector('.create-task-block');
const input = document.querySelector('.create-task-block__input');

const addTaskToDOM = (task) => {
  const taskItem = document.createElement('div');
  taskItem.className = 'task-item';
  taskItem.setAttribute('data-task-id', task.id);

  const mainContainer = document.createElement('div');
  mainContainer.className = 'task-item__main-container';

  const mainContent = document.createElement('div');
  mainContent.className = 'task-item__main-content';

  const checkboxForm = document.createElement('form');
  checkboxForm.className = 'checkbox-form';

  const checkbox = document.createElement('input');
  checkbox.className = 'checkbox-form__checkbox';
  checkbox.type = 'checkbox';
  checkbox.id = `task-${task.id}`;
  checkbox.checked = task.completed;

  const checkboxLabel = document.createElement('label');
  checkboxLabel.htmlFor = `task-${task.id}`;

  const taskText = document.createElement('span');
  taskText.className = 'task-item__text';
  taskText.textContent = task.text;

  const deleteButton = document.createElement('button');
  deleteButton.className = 'task-item__delete-button default-button delete-button';
  deleteButton.textContent = 'Удалить';

  checkboxForm.appendChild(checkbox);
  checkboxForm.appendChild(checkboxLabel);
  mainContent.appendChild(checkboxForm);
  mainContent.appendChild(taskText);
  mainContainer.appendChild(mainContent);
  mainContainer.appendChild(deleteButton);
  taskItem.appendChild(mainContainer);

  tasksList.appendChild(taskItem);
};

const showError = (message) => {
  let errorBlock = document.querySelector('.error-message-block');

  if (!errorBlock) {
    errorBlock = document.createElement('span');
    errorBlock.className = 'error-message-block';
    form.appendChild(errorBlock);
  }

  errorBlock.textContent = message;
};

const removeError = () => {
  const errorBlock = document.querySelector('.error-message-block');
  if (errorBlock) {
    errorBlock.remove();
  }
};

tasks.forEach(addTaskToDOM);

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const taskText = input.value.trim();

  if (taskText === '') {
    showError('Название задачи не должно быть пустым');
    return;
  }

  const taskExists = tasks.some((task) => task.text === taskText);
  if (taskExists) {
    showError('Задача с таким названием уже существует.');
    return;
  }

  removeError();

  const newTask = {
    id: Date.now().toString(),
    completed: false,
    text: taskText,
  };

  tasks.push(newTask);
  addTaskToDOM(newTask);
  input.value = '';
});

//добавление модалки

// <div class="modal-overlay modal-overlay_hidden">
//     <div class="delete-modal">
//         <h3 class="delete-modal__question">
//             Вы действительно хотите удалить эту задачу?
//         </h3>
//         <div class="delete-modal__buttons">
//             <button class="delete-modal__button delete-modal__cancel-button">
//                 Отмена
//             </button>
//             <button class="delete-modal__button delete-modal__confirm-button">
//                 Удалить
//             </button>
//         </div>
//     </div>
// </div>

const modal = document.createElement('div');
modal.className = 'modal-overlay modal-overlay_hidden';

const deleteModal = document.createElement('div');
deleteModal.className = 'delete-modal';

const deleteModalQuestion = document.createElement('h3');
deleteModalQuestion.className = 'delete-modal__question';
deleteModalQuestion.textContent = 'Вы действительно хотите удалить эту задачу?';

const deleteModalBtn = document.createElement('div');
deleteModalBtn.className = 'delete-modal__buttons';

const cancelButton = document.createElement('button');
cancelButton.className = 'delete-modal__button delete-modal__cancel-button';
cancelButton.textContent = 'Отмена';

const confirmButton = document.createElement('button');
confirmButton.className = 'delete-modal__button delete-modal__confirm-button';
confirmButton.textContent = 'Удалить';

deleteModalBtn.appendChild(cancelButton);
deleteModalBtn.appendChild(confirmButton);

deleteModal.appendChild(deleteModalQuestion);
deleteModal.appendChild(deleteModalBtn);
modal.appendChild(deleteModal);

document.body.prepend(modal);

let taskToDelete = null;

tasksList.addEventListener('click', (event) => {
  if (event.target.classList.contains('task-item__delete-button')) {
    modal.classList.remove('modal-overlay_hidden');

    const taskItem = event.target.closest('.task-item');
    taskToDelete = taskItem.getAttribute('data-task-id');
  }
});

cancelButton.addEventListener('click', () => {
  modal.classList.add('modal-overlay_hidden');
  taskToDelete = null;
});

confirmButton.addEventListener('click', () => {
  if (taskToDelete) {
    const taskIndex = tasks.findIndex((task) => task.id === taskToDelete);
    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1);
    }

    const taskElement = document.querySelector(`.task-item[data-task-id="${taskToDelete}"]`);
    if (taskElement) {
      taskElement.remove();
    }

    modal.classList.add('modal-overlay_hidden');
    taskToDelete = null;
  }
});

const changeColor = document.createElement('div');
changeColor.className = 'change-color';

const changeColorBtn = document.createElement('button');
changeColorBtn.className = 'change-color-button';
changeColorBtn.textContent = 'Сменить цвет';

changeColor.append(changeColorBtn);
document.body.prepend(changeColor);

const toggleTheme = () => {
  document.body.classList.toggle('dark-theme');

  const isDark = document.body.classList.contains('dark-theme');

  document.body.style.background = isDark ? '#24292E' : 'initial';

  document.querySelectorAll('.task-item').forEach((task) => {
    task.style.color = isDark ? '#ffffff' : 'initial';
  });

  document.querySelectorAll('button').forEach((button) => {
    button.style.border = isDark ? '1px solid #ffffff' : 'none';
  });
};

changeColorBtn.addEventListener('click', toggleTheme);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Tab') {
    event.preventDefault();
    toggleTheme();
  }
});
