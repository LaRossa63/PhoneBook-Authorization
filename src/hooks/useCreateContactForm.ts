import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import { CreateContactForm } from 'types/types';

export const useCreateContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newContact: CreateContactForm = {
      id: nanoid(),
      name: name,
      number: number,
    };

    const resultValidForm = validateForm(newContact);

    if (!resultValidForm) {
      clearForm();
      setError('');
      return;
    }

    setError(resultValidForm);
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangeNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value);
  };

  const clearForm = () => {
    setName('');
    setNumber('');
  };

  const validateForm = (newUser: CreateContactForm) => {
    const { name, number } = newUser;

    const NAME_LENGTH = 6;
    const NUMBER_LENGTH = 6;

    if (name.length < NAME_LENGTH) {
      return `Имя должна быть больше ${NAME_LENGTH} символов`;
    }

    if (number.length < NUMBER_LENGTH) {
      return `Номер должен быть больше ${NUMBER_LENGTH} символов`;
    }
  };

  return {
    handleSubmitForm,
    handleChangeName,
    handleChangeNumber,
    name,
    number,
    error,
  };
};
