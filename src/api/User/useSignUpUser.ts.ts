import { queryClient } from 'api';
import { useMutation } from 'react-query';
import { LinksApi } from 'types/types';
import { writeTokenLocalStore } from 'utils/LocalStore';
import { UserService } from './User.service';

export const useRegisterUser = (callback: (error: any) => void) => {
  return useMutation({
    onSuccess: (data) => {
      writeTokenLocalStore(data.token);
      queryClient.setQueryData(LinksApi.getCurrentUserKey, data.user);
    },

    onError: (error) => callback(error),

    mutationFn: UserService.signUpUser,
  });
};
