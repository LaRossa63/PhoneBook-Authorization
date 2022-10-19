import React from 'react';
import styled from 'styled-components';

import { Button } from '@mui/material';
import { ErrorText, Input } from 'components/Elements';
import { useCreateContactForm } from 'hooks';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  width: 223px;

  display: flex;
  flex-direction: column;

  gap: 10px;
`;

export const FormCreateContact = () => {
  const {
    handleSubmitForm,
    handleChangeName,
    handleChangeNumber,
    name,
    number,
    error,
    isLoading,
  } = useCreateContactForm();

  return (
    <Container>
      <Form onSubmit={handleSubmitForm}>
        <Input label="имя" value={name} onChange={handleChangeName} />
        <Input label="номер" value={number} onChange={handleChangeNumber} />

        <Button variant="contained" type="submit" disabled={isLoading}>
          Создать контакт
        </Button>

        {error && <ErrorText>{error}</ErrorText>}
      </Form>
    </Container>
  );
};
