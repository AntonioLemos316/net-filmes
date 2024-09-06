// src/components/LogoutButton.jsx
import React from 'react';
import useAuth from '../hooks/useAuth';

const LogoutButton = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = '/'; // Redireciona após o logout, se necessário
  };

  return (
    <button onClick={handleLogout} className="btn btn-secondary">
      Logout
    </button>
  );
};

export default LogoutButton;
