import React from 'react';
import { useRoutes } from 'react-router';
import routes from '@src/routes';
import Login from '../../pages/Login/Login';
import Main from '../../pages/Main/Main';
import PrivateRoute from '../PrivateRoute';

const appRoutes = [
  {
    path: routes.root(),
    element: (
      <PrivateRoute>
        <Main />
      </PrivateRoute>
    ),
  },
  {
    path: routes.login(),
    element: <Login />,
  },
  // {
  //   path: "*",
  //   element: <NotFound />,
  // }
];

const App = () => useRoutes(appRoutes);

export default App;
