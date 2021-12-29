import React from 'react';
import { Navigate, useLocation } from 'react-router';
import { useAuth } from '../../contexts/AuthContext.jsx';
import routes from '../../routes';

const PrivateRoute = ({ children }) => {
  const { authState } = useAuth();
  const location = useLocation();

  if (!authState) {
    return <Navigate to={routes.login()} state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;
