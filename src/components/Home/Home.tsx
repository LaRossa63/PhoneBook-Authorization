import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AppRoutes } from 'types/types';

const Container = styled.div`
  font-size: 24px;

  display: flex;
  justify-content: center;

  margin-top: 100px;
  gap: 20px;
`;

export const Home = () => {
  return (
    <Container>
      <Link to={AppRoutes.login}>Авторизация</Link>
      <Link to={AppRoutes.register}>Регистрация</Link>
    </Container>
  );
};
