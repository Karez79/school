export const loginRegex = /^[a-zA-Z0-9_-]{3,16}$/;
export const minPasswordLength = 6;

export const validateLogin = (val) =>
  !val.trim() ? 'Введите логин' : loginRegex.test(val) ? '' : '3–16 символов: буквы, цифры, -, _';

export const validatePassword = (val) =>
  !val ? 'Введите пароль' : val.length >= minPasswordLength ? '' : `Минимум ${minPasswordLength} символов`;

export const validateRepeatPassword = (val, pwd) =>
  !val ? 'Повторите пароль' : val === pwd ? '' : 'Пароли не совпадают';
