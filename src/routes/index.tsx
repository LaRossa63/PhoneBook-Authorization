import { Navigate, Route, Routes } from 'react-router';
import { AppRoutes } from 'types/types';

import { Home, Contacts, SignIn, SignUp } from 'components';
import { AppLayout } from 'Layout';
import { useGetMe } from 'hooks/useGetMe';

export const AppRouter = () => {
  const { data: user } = useGetMe();

  return (
    <>
      <Routes>
        <Route path={AppRoutes.home} element={<AppLayout />}>
          <Route index element={<Home />} />

          {user && (
            <Route path={AppRoutes.contacts}>
              <Route index element={<Contacts />} />
            </Route>
          )}
        </Route>

        {!user && (
          <>
            <Route path={AppRoutes.signIn}>
              <Route index element={<SignIn />} />
            </Route>

            <Route path={AppRoutes.signUp}>
              <Route index element={<SignUp />} />
            </Route>
          </>
        )}

        <Route
          path="*"
          element={
            <Navigate to={user ? AppRoutes.contacts : AppRoutes.signIn} />
          }
        />
      </Routes>
    </>
  );
};
