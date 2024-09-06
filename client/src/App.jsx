import React, { useState } from 'react';
import CreateUserForm from './components/CreateUserForm';
import LoginForm from './components/LoginForm';

const App = () => {
  // Estado para alternar entre os formulários
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Sistema de Usuário</h1>
      {/* Botões para alternar entre Login e Cadastro */}
      <div className="btn-group mb-4" role="group" aria-label="Form Selection">
        <button
          type="button"
          className={`btn btn-primary ${showLogin ? 'active' : ''}`}
          onClick={() => setShowLogin(true)}
        >
          Login
        </button>
        <button
          type="button"
          className={`btn btn-secondary ${!showLogin ? 'active' : ''}`}
          onClick={() => setShowLogin(false)}
        >
          Cadastrar
        </button>
      </div>
      
      {/* Renderiza o formulário com base no estado */}
      {showLogin ? <LoginForm /> : <CreateUserForm />}
    </div>
  );
};

export default App;
