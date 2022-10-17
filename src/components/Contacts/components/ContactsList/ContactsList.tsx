import React from 'react';
import styled from 'styled-components';

import { List } from '@mui/material';
import { ResponseContact } from 'types/types';
import { ContactsListItem } from '../ContactsListItem';

const Container = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 50px;
`;

export const ContactsList = () => {
  const test: ResponseContact[] = [
    {
      id: '0',
      name: 'LaRossa',
      number: '+79397549977',
    },
    {
      id: '1',
      name: 'Yana',
      number: '+79021589442',
    },
    {
      id: '2',
      name: 'LaRossa',
      number: '+79397549977',
    },
    {
      id: '3',
      name: 'Yana',
      number: '+79021589442',
    },
  ];

  return (
    <Container>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {test.map((contact) => (
          <ContactsListItem key={contact.id} contact={contact} />
        ))}
      </List>
    </Container>
  );
};
