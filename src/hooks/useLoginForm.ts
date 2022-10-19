import { useLoginUser } from 'api';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { AppRoutes, SignInFormDTO } from 'types/types';

export const useLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigator = useNavigate();
  const { mutateAsync, isLoading, isError } = useLoginUser(handleError);

  function handleError(error: any) {
    const { response, message } = error;

    if (message) {
      setError('Неизвестная ошибка');
    }
  }

  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const authorizeUser: SignInFormDTO = {
      email: email,
      password: password,
    };

    const resultValidForm = validateForm(authorizeUser);

    if (resultValidForm) {
      setError(resultValidForm);
      return;
    }

    await mutateAsync(authorizeUser);

    clearForm();
    setError('');
  };

  const handleClickRegister = () => {
    navigator(`/${AppRoutes.signUp}`);
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

  const validateForm = (newUser: SignInFormDTO) => {
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
    isLoading,
    isError,
  };
};
