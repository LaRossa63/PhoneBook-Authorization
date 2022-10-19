import { useMutation } from 'react-query';
import { queryClient } from 'api/Axios';
import { LinksApi, ResponseContactApi } from 'types/types';
import { ContactService } from './Contact.service';

export const useCreateContact = () => {
  return useMutation({
    onMutate: (newContact) => {
      queryClient.cancelQueries(LinksApi.getAllContactsKey);

      const oldContacts = queryClient.getQueryData(
        LinksApi.getAllContactsKey
      ) as ResponseContactApi[];

      queryClient.setQueryData(LinksApi.getAllContactsKey, [
        ...oldContacts,
        newContact,
      ]);

      return oldContacts;
    },

    onError: (error, value, oldContacts) => {
      queryClient.setQueryData(LinksApi.getAllContactsKey, oldContacts);
    },

    mutationFn: ContactService.createContact,
  });
};
