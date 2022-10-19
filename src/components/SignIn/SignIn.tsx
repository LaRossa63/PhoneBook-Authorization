import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';

import { useLoginForm } from 'hooks';
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
export const SignIn = () => {
  const {
    handleSubmitForm,
    handleClickRegister,
    handleChangeEmail,
    handleChangePassword,
    email,
    password,
    error,
    isLoading,
  } = useLoginForm();

  return (
    <Container>
      <Form onSubmit={handleSubmitForm}>
        <Title margin="0 0 10px 0">Авторизация</Title>

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
          Войти
        </Button>

        <Button variant="contained" onClick={handleClickRegister}>
          Регистрация
        </Button>

        {error && <ErrorText>{error}</ErrorText>}
      </Form>
    </Container>
  );
};
