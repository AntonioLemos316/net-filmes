import userService from '../services/UserService.js'

import bcrypt from 'bcrypt'

const createUser = async (req, res) => { 
    
    const {nome, email, senha} = req.body

    try { 
        if(!nome || !email || !senha){ 
            return res.status(400).send({message: 'Forneça todos os dados'})
        }
        const hash = await bcrypt.hash(senha.toString(), 10) 
        const newUser = await userService.createUser({
                nome: req.body.nome,
                email: req.body.email,
                senha: hash // hash gerado com bcrypt
            })
        if(!newUser || newUser.length === 0){
            return res.status(500).send({message: 'Erro ao criar usuário'})
        }
        const response = {
            message: 'Usuário criado com sucesso',
            newUser: {
                nome: req.body.nome,
                email: req.body.email
            }
        }
        res.status(201).send({response})
    } catch (error) {
        console.error('Error ao criar usuário:', error)
        res.status(500).send({message: 'Erro ao criar usuário'})
    }
};

const login = async (req, res) => {

    const { email, senha } = req.body;

    try {
        if (!email || !senha) {
            return res.status(400).send({ message: 'E-mail e senha são obrigatórios' });
        }
        const user = await userService.login(email, senha.toString());
        if (!user) {
            return res.status(401).send({ message: 'E-mail ou senha incorretos!' });
        }
        console.log(user.nome)
        res.status(200).send({ 
            message: 'Login bem-sucedido', 
            userLogin: {
                id: user.id,
                nome: user.nome,
                email: user.email,
                token: user.token
            }
        });
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        res.status(500).send({ message: 'Erro ao fazer login catch' });
    }
};

const jwt = (req, res) => {
    res.status(200).json({ 
        message: 'Token autenticado'
    });
} 

export default { createUser, login,  jwt };