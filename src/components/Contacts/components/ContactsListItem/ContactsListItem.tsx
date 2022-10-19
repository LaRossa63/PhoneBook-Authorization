import React, { FC } from 'react';

import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { ResponseContactApi } from 'types/types';
import { useDeleteContact } from 'api';

interface Props {
  contact: ResponseContactApi;
}

export const ContactsListItem: FC<Props> = ({ contact }) => {
  const { mutate } = useDeleteContact();

  const handleClickDelete = (id: string) => {
    mutate(id);
  };

  return (
    <>
      <ListItem
        secondaryAction={
          <DeleteIcon
            cursor="pointer"
            onClick={() => handleClickDelete(contact.id)}
          />
        }
        disablePadding
      >
        <ListItemButton>
          <ListItemAvatar>
            <Avatar src="" alt="" />
          </ListItemAvatar>
          <ListItemText primary={`${contact.name} : ${contact.number}`} />
        </ListItemButton>
      </ListItem>
    </>
  );
};
