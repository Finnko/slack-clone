import React, { createContext, useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage.jsx';

const AuthContext = createContext({});
AuthContext.displayName = 'AuthContext';

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(false);
  const [token, setToken] = useLocalStorage('token');
  const [user, setUser] = useLocalStorage('user');

  useEffect(() => {
    const isAuth = token !== '';
    console.log();
    setAuthState(isAuth);
  }, [token]);

  return (
    <AuthContext.Provider value={{
      authState,
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
