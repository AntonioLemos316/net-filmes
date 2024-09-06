import React, {useState} from "react";
import { createUser } from "../api/userCreateApi.jsx";

const CreateUserForm = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const result = await createUser({ nome, email, senha });
        const { message, newUser } = result;
        setSuccessMessage(`${message}: ${newUser.nome} (${newUser.email})`);
        setNome('');
        setEmail('');
        setSenha('');
      } catch (error) {
        setError(error.message);
      }
    };
  
    return (
      <div className="container mt-4">
        <h2 className="mb-4">Criar novo Usuário</h2>
        <form onSubmit={handleSubmit} className="needs-validation" noValidate>
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">Nome:</label>
            <input
              type="text"
              id="nome"
              className="form-control"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
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
          <button type="submit" className="btn btn-primary">Create User</button>
          {error && <div className="alert alert-danger mt-3">Error: {error}</div>}
          {successMessage && <p className="text-success">{successMessage}</p>}
        </form>
      </div>
    );
  };
  
  export default CreateUserForm;