import { SignIn, SignUp } from 'components';
import { AppRoutes } from 'types/types';

export const publicRoutes = [
  {
    path: AppRoutes.signIn,
    element: <SignIn />,
  },
  {
    path: AppRoutes.signUp,
    element: <SignUp />,
  },
];

// {
//   !user && (
//     <>
//       <Route path={AppRoutes.signIn}>
//         <Route index element={<SignIn />} />
//       </Route>

//       <Route path={AppRoutes.signUp}>
//         <Route index element={<SignUp />} />
//       </Route>
//     </>
//   );
// }
