import React from 'react';
import styled from 'styled-components';

import { List } from '@mui/material';
import { ContactsListItem } from '../ContactsListItem';
import { useGetAllContacts } from 'api';
import { ErrorText } from 'components/Elements';

const Container = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 50px;
`;

export const ContactsList = () => {
  const { data: contacts } = useGetAllContacts();

  return (
    <Container>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {contacts?.length ? (
          contacts.map((contact) => (
            <ContactsListItem key={contact.id} contact={contact} />
          ))
        ) : (
          <ErrorText>Нету контактов</ErrorText>
        )}
      </List>
    </Container>
  );
};
