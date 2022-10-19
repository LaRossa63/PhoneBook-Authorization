import { queryClient } from 'api';
import { useMutation } from 'react-query';
import { LinksApi } from 'types/types';
import { writeTokenLocalStore } from 'utils/LocalStore';
import { UserService } from './User.service';

export const useLoginUser = () => {
  return useMutation({
    onSuccess: (data) => {
      writeTokenLocalStore(data.token);
      queryClient.setQueryData(LinksApi.getCurrentUserKey, data.user);
    },

    mutationFn: UserService.loginUser,
  });
};
