import { useRegisterUser } from 'api';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { AppRoutes, SignUpFormDTO } from 'types/types';

export const useRegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { mutateAsync, isLoading } = useRegisterUser(handleError);
  const navigator = useNavigate();

  function handleError(error: any) {
    const { response, message } = error;

    console.log(response);
    console.log(message);
  }

  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newUser: SignUpFormDTO = {
      name: name,
      email: email,
      password: password,
    };

    const resultValidForm = validateForm(newUser);

    if (resultValidForm) {
      setError(resultValidForm);
      return;
    }

    await mutateAsync(newUser);

    clearForm();
    setError('');
  };

  const handleClickAuthorize = () => {
    navigator(`/${AppRoutes.login}`);
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const clearForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const validateForm = (newUser: SignUpFormDTO) => {
    const { name, email, password } = newUser;

    const NAME_LENGTH = 6;
    const EMAIL_LENGTH = 6;
    const PASSWORD_LENGTH = 6;

    if (name.length < NAME_LENGTH) {
      return `Имя должно быть больше ${NAME_LENGTH} символов`;
    }

    if (email.length < EMAIL_LENGTH) {
      return `Почта должна быть больше ${EMAIL_LENGTH} символов`;
    }

    if (password.length < PASSWORD_LENGTH) {
      return `Пароль должен быть больше ${PASSWORD_LENGTH} символов`;
    }
  };

  return {
    handleSubmitForm,
    handleClickAuthorize,
    handleChangeName,
    handleChangeEmail,
    handleChangePassword,
    name,
    email,
    password,
    error,
    isLoading,
  };
};
