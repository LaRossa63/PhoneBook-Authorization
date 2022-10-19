import { Axios, queryClient } from 'api';
import { useQuery } from 'react-query';
import { LinksApi } from 'types/types';

export const useGetMe = () => {
  return useQuery({
    queryKey: LinksApi.getCurrentUserKey,

    queryFn: () => {
      return Axios.get(LinksApi.getCurrentUser);
    },

    onError: () => {
      queryClient.setQueryData(LinksApi.getCurrentUserKey, null);
    },
  });
};
