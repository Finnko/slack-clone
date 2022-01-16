import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router';
import { useAuth } from '../../contexts/AuthContext.jsx';
import routes from '../../routes';

const PrivateOutlet = () => {
  const { isAuth } = useAuth();
  const location = useLocation();
  console.log({ isAuth });

  if (!isAuth) {
    return <Navigate to={routes.login()} state={{ from: location }} />;
  }

  return <Outlet />;
};

export default PrivateOutlet;
