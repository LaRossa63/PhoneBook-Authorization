import React from 'react';
import styled from 'styled-components';

import { ContactsList, FormCreateContact } from './components';

const Container = styled.div`
  margin-top: 50px;
`;

export const Contacts = () => {
  return (
    <Container>
      <FormCreateContact />
      <ContactsList />
    </Container>
  );
};
