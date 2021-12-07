import React from 'react';
import { Navigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import routes from '../routes';

const PrivateRoute = ({ children }) => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to={routes.login()} />;
  }

  return children;
};

export default PrivateRoute;
