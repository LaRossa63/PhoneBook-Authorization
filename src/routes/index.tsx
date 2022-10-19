import { Navigate, useRoutes } from 'react-router';
import { AppRoutes } from 'types/types';

import { useGetMe } from 'hooks/useGetMe';
import { protectedRoutes } from './protectedRoutes';
import { publicRoutes } from './publicRoutes';

export const AppRouter = () => {
  const { data: user } = useGetMe();

  const commonRoutes = [
    {
      path: '*',
      element: <Navigate to={user ? AppRoutes.contacts : AppRoutes.signIn} />,
    },
  ];

  const routes = user ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
