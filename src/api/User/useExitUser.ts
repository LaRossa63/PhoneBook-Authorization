import { useMutation } from 'react-query';
import { queryClient, UserService } from 'api';
import { useNavigate } from 'react-router';
import { LinksApi, AppRoutes } from 'types/types';

export const useExitUser = () => {
  const navigator = useNavigate();

  return useMutation({
    onSuccess: () => {
      queryClient.setQueryData(LinksApi.getCurrentUserKey, null);
    },

    onError: () => {
      navigator(AppRoutes.contacts);
    },

    mutationFn: UserService.exitUser,
  });
};
