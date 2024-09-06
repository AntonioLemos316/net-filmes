import UserRepository from '../model/UserRepository.js';
import bcrypt from 'bcrypt'

const createUser = async (req, res) => { 
    const {nome, email, senha} = req.body

    try { 
        if(!nome || !email || !senha){ 
            return res.status(400).send({message: 'Forneça todos os dados'})
        }

        const hash = await bcrypt.hash(senha.toString(), 10)

        const newUser = await UserRepository.createUser({
                nome: nome,
                email: email,
                senha: hash // hash gerado com bcrypt
            })

        if(!newUser || newUser.length === 0){
            return res.status(500).send({message: 'Erro ao criar usuário'})
        }

        res.status(201).send({message: 'Usuário criado com sucesso', nome, email})
    } catch (error) {
        res.status(500).send({message: error})
    }
};

const login = async (req, res) => {
    const { email, senha } = req.body;

    try {
        if (!email || !senha) {
            return res.status(400).send({ message: 'E-mail e senha são obrigatórios' });
        }

        const validacaoDoLogin = await UserRepository.login(email, senha.toString());

        if (!validacaoDoLogin) {
            return res.status(401).send({ message: 'E-mail ou senha incorretos!' });
        }

        res.status(200).send({message: 'Login bem-sucedido', email});
    } catch (error) {
        res.status(500).send({ message: error});
    }
};

const jwt = (req, res) => {
    res.status(200).json({ 
        message: 'Token autenticado'
    });
} 

export default { createUser, login,  jwt };