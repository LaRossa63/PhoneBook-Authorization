import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { AppRoutes, LoginForm } from 'types/types';

export const useLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigator = useNavigate();

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const authorizeUser: LoginForm = {
      email: email,
      password: password,
    };

    const resultValidForm = validateForm(authorizeUser);

    if (!resultValidForm) {
      clearForm();
      setError('');
      return;
    }

    setError(resultValidForm);
  };

  const handleClickRegister = () => {
    navigator(`/${AppRoutes.register}`);
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const clearForm = () => {
    setEmail('');
    setPassword('');
  };

  const validateForm = (newUser: LoginForm) => {
    const { email, password } = newUser;

    const EMAIL_LENGTH = 6;
    const PASSWORD_LENGTH = 6;

    if (email.length < EMAIL_LENGTH) {
      return `Почта должна быть больше ${EMAIL_LENGTH} символов`;
    }

    if (password.length < PASSWORD_LENGTH) {
      return `Пароль должен быть больше ${PASSWORD_LENGTH} символов`;
    }
  };

  return {
    handleSubmitForm,
    handleClickRegister,
    handleChangeEmail,
    handleChangePassword,
    email,
    password,
    error,
  };
};
