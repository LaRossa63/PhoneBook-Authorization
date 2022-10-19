import { Contacts } from 'components';
import { AppLayout } from 'Layout';
import { AppRoutes } from 'types/types';

export const protectedRoutes = [
  {
    path: AppRoutes.home,
    element: <AppLayout />,
    children: [{ path: AppRoutes.contacts, element: <Contacts /> }],
  },
];
