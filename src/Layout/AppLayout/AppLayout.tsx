import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router';

import { Header } from 'components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1280px;
`;

export const AppLayout = () => {
  return (
    <Container>
      <Content>
        <Header />

        <Outlet />
      </Content>
    </Container>
  );
};
