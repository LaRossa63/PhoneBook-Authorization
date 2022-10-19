import { useQuery } from 'react-query';
import { LinksApi } from 'types/types';
import { ContactService } from './Contact.service';

export const useGetAllContacts = () => {
  return useQuery(LinksApi.getAllContactsKey, ContactService.getAllContacts);
};
