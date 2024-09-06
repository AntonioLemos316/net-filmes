-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS net_filmes;
USE net_filmes;

-- Criação da tabela Users
CREATE TABLE IF NOT EXISTS Users (
    id INT AUTO_INCREMENT PRIMARY KEY,   
    nome VARCHAR(255) NOT NULL,         
    email VARCHAR(255) NOT NULL UNIQUE,  
    senha VARCHAR(255) NOT NULL           
);
