import React, { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage.jsx';

const AuthContext = createContext({});
AuthContext.displayName = 'AuthContext';

const AuthProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage('token');
  const [user, setUser] = useLocalStorage('user');

  return (
    <AuthContext.Provider value={{
      isAuth: !!token,
      setToken,
      user,
      setUser,
    }}
    >
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
