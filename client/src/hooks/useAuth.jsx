// src/hooks/useAuth.js
import { useState, useEffect } from 'react';

const useAuth = () => {
  const [token, setToken] = useState(() => sessionStorage.getItem('jwtToken') || null);

  useEffect(() => {
    if (token) {
      sessionStorage.setItem('jwtToken', token);
    } else {
      sessionStorage.removeItem('jwtToken');
    }
  }, [token]);

  const login = (newToken) => {
    setToken(newToken);
  };

  const logout = () => {
    setToken(null);
  };

  const isAuthenticated = () => !!token;

  return { token, login, logout, isAuthenticated };
};

export default useAuth;
