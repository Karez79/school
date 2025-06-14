import React, { useState } from 'react';
import { validateLogin, validatePassword, validateRepeatPassword } from '../../../utils/validators';
import '../../App.css';

export default function RegistrationForm() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [repeatPasswordError, setRepeatPasswordError] = useState('');

  const resetForm = () => {
    setLogin('');
    setPassword('');
    setRepeatPassword('');
    setLoginError('');
    setPasswordError('');
    setRepeatPasswordError('');
  };

  const handleLoginChange = (event) => {
    const loginValue = event.target.value;
    setLogin(loginValue);
    setLoginError(validateLogin(loginValue));
  };

  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    setPasswordError(validatePassword(passwordValue));
    setRepeatPasswordError(validateRepeatPassword(repeatPassword, passwordValue));
  };

  const handleRepeatPasswordChange = (event) => {
    const repeatPasswordValue = event.target.value;
    setRepeatPassword(repeatPasswordValue);
    setRepeatPasswordError(validateRepeatPassword(repeatPasswordValue, password));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!isFormValid) return;

    console.log({ login, password, repeatPassword });
    resetForm();
  };

  const isFormValid = !loginError && !passwordError && !repeatPasswordError && login && password && repeatPassword;

  return (
    <form onSubmit={handleFormSubmit} className='registration-form'>
      <h4 className='registration-form__title'>Регистрация</h4>

      <input
        className='registration-form__input'
        type='text'
        placeholder='login'
        value={login}
        onChange={handleLoginChange}
      />
      {loginError && <div className='registration-form__error'>{loginError}</div>}

      <input
        className='registration-form__input'
        type='password'
        placeholder='password'
        value={password}
        onChange={handlePasswordChange}
      />
      {passwordError && <div className='registration-form__error'>{passwordError}</div>}

      <input
        className='registration-form__input'
        type='password'
        placeholder='repeat password'
        value={repeatPassword}
        onChange={handleRepeatPasswordChange}
      />
      {repeatPasswordError && <div className='registration-form__error'>{repeatPasswordError}</div>}

      <button type='submit' className='registration-form__button' disabled={!isFormValid}>
        Зарегистрироваться
      </button>
    </form>
  );
}
