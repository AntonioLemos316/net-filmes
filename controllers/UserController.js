const userService = require('../services/UserService.js');
const bcrypt = require('bcrypt')

const createUser = async (req, res) => { 
    try { 
        if(!req.body.senha || !req.body.email || !req.body.nome){ 
            return res.status(400).send({message: 'Forneça todos os dados'})
        }
        const emailExiste = await userService.emailExiste(req.body.email)
        if(emailExiste){
            return res.status(200).send({message: 'Este email já está cadastrado'})
        }
        const hash = await bcrypt.hash(req.body.senha.toString(), 10) 
        const newUser = await userService.createUser({
                nome: req.body.nome,
                email: req.body.email,
                senha: hash, // hash gerado com bcrypt
                funcao: req.body.funcao = 'normal'
            })
        if(!newUser || newUser.length === 0){
            return res.status(500).send({message: 'Erro ao criar usuário'})
        }
        const response = {
            message: 'Usuário criado com sucesso',
            newUser: {
                nome: req.body.nome,
                email: req.body.email,
                funcao: req.body.funcao
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

module.exports = { createUser, login,  jwt };