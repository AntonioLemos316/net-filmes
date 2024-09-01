import db from '../db.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const createUser = (user) => {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO Users SET ?';
        db.query(sql, user, (error, results) => {
            if (error) {
                console.error('Erro ao inserir o usuário:', error);
                return reject('Erro ao criar usuário');
            }
            resolve(results);
        });
    });
};

const login = (email, senha) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM Users WHERE email = ?';
        db.query(sql, [email], (error, results) => {
            if (error) {
                console.error('Erro ao buscar usuário:', error);
                return reject('Erro ao fazer login promisse');
            }
            if (results.length > 0) {
                const user = results[0];
                bcrypt.compare(senha, user.senha, (err, senhaCorrespondente) => {
                    if (err) {
                        console.error('Erro ao comparar senhas:', err);
                        return reject('Erro ao comparar senhas');
                    }
                    if (senhaCorrespondente) {
                        const payload = { 
                            userId: user.id, 
                            nome: user.nome, 
                            email: user.email 
                        }
                        const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '1h' });
                        user.token = token
                        resolve(user);
                    } else {
                        resolve(null);
                    }
                });
            } else {
                resolve(null);
            }
        });
    });
};

export default { createUser, login };