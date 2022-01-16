import React, { createContext } from 'react';
import useLocalStorageState from '../hooks/useLocalStorage.jsx';

const AuthContext = createContext({});
AuthContext.displayName = 'AuthContext';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorageState('user');
  const token = user?.token;

  const logIn = (data) => setUser(data);

  const logOut = () => setUser(null);

  const getAuthHeaders = () => {
    if (token) {
      return { Authorization: `Bearer ${token}` };
    }

    return {};
  };

  return (
    <AuthContext.Provider value={{
      isAuth: !!user?.token,
      user,
      logIn,
      logOut,
      getAuthHeaders,
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
