import React, { FC } from 'react';

import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { ResponseContact } from 'types/types';

interface Props {
  contact: ResponseContact;
}

export const ContactsListItem: FC<Props> = ({ contact }) => {
  const handleClickDelete = (id: string) => {
    console.log(id);
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
