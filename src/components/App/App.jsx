import React from 'react';
import constructPath from '@src/routes';
import Login from '../../pages/Login/Login';
import { useRoutes } from 'react-router';

const appRoutes = [
  {
    path: constructPath.root(),
    element: <Login />,
  },
  {
    path: constructPath.login(),
    element: <Login />,
  },
  // {
  //   path: "*",
  //   element: <NotFound />,
  // }
]

const App = () => {
  return useRoutes(appRoutes);
};

export default App;
