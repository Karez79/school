const password = prompt('Введите пароль');

// Регулярные выражения для проверки
const hasUpperCase = /[A-Z]/; 
const hasDigit = /[0-9]/;

if (password.length >= 3 && password.length <= 30 && hasUpperCase.test(password) && hasDigit.test(password)) {
  console.log(`Пароль принят!`);
} else {
  console.log(`Пароль должен содержать от 3 до 30 символов, минимум 1 прописную букву и минимум 1 цифру.`);
}
