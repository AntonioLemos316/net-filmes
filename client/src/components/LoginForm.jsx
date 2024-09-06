import React, { useState } from 'react';
import { loginUser } from '../api/userCreateApi';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await loginUser({ email, senha });
      // Supondo que a resposta tem um campo `message`
      const { message } = result;
      setSuccessMessage(`Login bem-sucedido: ${message}`);
      setEmail('');
      setSenha('');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="senha" className="form-label">Senha:</label>
          <input
            type="password"
            id="senha"
            className="form-control"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        {error && <div className="alert alert-danger mt-3">Error: {error}</div>}
        {successMessage && <p className="text-success mt-3">{successMessage}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
