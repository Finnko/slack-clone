import React from 'react';
import { useRoutes } from 'react-router';
import routes from '../../routes.js';
import Login from '../../pages/Login/Login.jsx';
import Main from '../../pages/Main/Main.jsx';
import PrivateRoute from '../PrivateRoute/PrivateRoute.jsx';
import SignUp from '../../pages/SignUp/SignUp.jsx';

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
  {
    path: routes.signup(),
    element: <SignUp />,
  },
  // {
  //   path: "*",
  //   element: <NotFound />,
  // }
];

const App = () => useRoutes(appRoutes);

export default App;
