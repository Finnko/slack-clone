import React, { createContext } from 'react';
import useLocalStorageState from '../hooks/useLocalStorage';

const AuthContext = createContext({});
AuthContext.displayName = 'AuthContext';

const AuthProvider = ({ children }) => {
  const [token, setToken] = useLocalStorageState('token');
  const isAuth = token !== '';

  return (
    <AuthContext.Provider value={{ isAuth, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
