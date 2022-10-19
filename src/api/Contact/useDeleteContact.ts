import { ContactService, queryClient } from 'api';
import { useMutation } from 'react-query';
import { LinksApi, ResponseContactApi } from 'types/types';

export const useDeleteContact = () => {
  return useMutation({
    onMutate: (id) => {
      queryClient.cancelQueries(LinksApi.getAllContactsKey);

      const oldContacts = queryClient.getQueryData(
        LinksApi.getAllContactsKey
      ) as ResponseContactApi[];

      queryClient.setQueryData(
        LinksApi.getAllContactsKey,
        oldContacts.filter((contact) => contact.id !== id)
      );

      return oldContacts;
    },

    onError: (error, value, oldContacts) => {
      queryClient.setQueryData(LinksApi.getAllContactsKey, oldContacts);
    },

    mutationFn: ContactService.deleteContact,
  });
};
