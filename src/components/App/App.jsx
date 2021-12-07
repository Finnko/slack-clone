import React from 'react';
import { useRoutes } from 'react-router';
import constructPath from '@src/routes';
import Login from '../../pages/Login/Login';
import Main from '../../pages/Main/Main';
import { useAuth } from '../../contexts/AuthContext';

const appRoutes = [
  {
    path: constructPath.root(),
    element: <Main />,
  },
  {
    path: constructPath.login(),
    element: <Login />,
  },
  // {
  //   path: "*",
  //   element: <NotFound />,
  // }
];

const App = () => {
  const { authState } = useAuth();
  console.log({ authState });

  return useRoutes(appRoutes);
};

export default App;
