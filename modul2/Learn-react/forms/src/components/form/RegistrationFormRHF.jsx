import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { loginRegex, minPasswordLength } from '../../../utils/validators';
import '../../App.css';

const validationSchema = yup.object({
  login: yup.string().required('Введите логин').matches(loginRegex, '3–16 символов: буквы, цифры, -, _'),

  password: yup.string().required('Введите пароль').min(minPasswordLength, `Минимум ${minPasswordLength} символов`),

  repeatPassword: yup
    .string()
    .required('Повторите пароль')
    .oneOf([yup.ref('password')], 'Пароли не совпадают'),
});

export default function RegistrationFormRHF() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (formData) => {
    console.log(formData);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='registration-form'>
      <h4 className='registration-form__title'>Регистрация c YUP и RHF</h4>

      <input className='registration-form__input' type='text' placeholder='login' {...register('login')} />
      {errors.login && <div className='registration-form__error'>{errors.login.message}</div>}

      <input className='registration-form__input' type='password' placeholder='password' {...register('password')} />
      {errors.password && <div className='registration-form__error'>{errors.password.message}</div>}

      <input
        className='registration-form__input'
        type='password'
        placeholder='repeat password'
        {...register('repeatPassword')}
      />
      {errors.repeatPassword && <div className='registration-form__error'>{errors.repeatPassword.message}</div>}

      <button type='submit' className='registration-form__button' disabled={!isValid}>
        Зарегистрироваться
      </button>
    </form>
  );
}
