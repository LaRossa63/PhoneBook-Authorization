import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';

import { useRegisterForm } from 'hooks';
import { ErrorText, Input, Title } from 'components/Elements';

const Container = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 80px;
`;

const Form = styled.form`
  width: 230px;

  display: flex;
  flex-direction: column;

  gap: 10px;
`;

export const SignUp = () => {
  const {
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
  } = useRegisterForm();

  return (
    <Container>
      <Form onSubmit={handleSubmitForm}>
        <Title margin="0 0 10px 0">Регистрация</Title>

        <Input
          label="имя"
          type="text"
          value={name}
          onChange={handleChangeName}
        />

        <Input
          label="почта"
          type="text"
          value={email}
          onChange={handleChangeEmail}
        />

        <Input
          label="пароль"
          type="password"
          value={password}
          onChange={handleChangePassword}
        />

        <Button variant="contained" type="submit" disabled={isLoading}>
          Регистрация
        </Button>

        <Button variant="contained" onClick={handleClickAuthorize}>
          Авторизоваться
        </Button>

        {error && <ErrorText>{error}</ErrorText>}
      </Form>
    </Container>
  );
};
