import React from 'react';
import { Navigate, useLocation } from 'react-router';
import { useAuth } from '../contexts/AuthContext.jsx';
import routes from '../routes';

const PrivateRoute = ({ children }) => {
  const { isAuth } = useAuth();
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to={routes.login()} state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;
