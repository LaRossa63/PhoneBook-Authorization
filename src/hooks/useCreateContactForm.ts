import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import { CreateContactFormDTO } from 'types/types';
import { useCreateContact } from 'api';

export const useCreateContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');

  const { mutateAsync, isLoading } = useCreateContact();

  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newContact: CreateContactFormDTO = {
      id: nanoid(),
      name: name,
      number: number,
    };

    const resultValidForm = validateForm(newContact);

    if (resultValidForm) {
      setError(resultValidForm);
      return;
    }

    await mutateAsync(newContact);

    clearForm();
    setError('');
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

  const validateForm = (newUser: CreateContactFormDTO) => {
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
    isLoading,
  };
};
