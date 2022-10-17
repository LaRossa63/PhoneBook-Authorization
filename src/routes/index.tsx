import { Route, Routes } from 'react-router';
import { AppRoutes } from 'types/types';

import { Home, Contacts, Login, Register, NotFoundPage } from 'components';
import { AppLayout } from 'Layout';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path={AppRoutes.home} element={<AppLayout />}>
          <Route index element={<Home />} />

          <Route path={AppRoutes.contacts}>
            <Route index element={<Contacts />} />
          </Route>
        </Route>

        <Route path={AppRoutes.login}>
          <Route index element={<Login />} />
        </Route>

        <Route path={AppRoutes.register}>
          <Route index element={<Register />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
