import connection from '../config/db.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const createUser = async (user) => {
    try {
        const [result] = await connection.query('INSERT INTO Users SET ?', user)
        
        return result
    } catch (error) {
        throw new Error({message: error});
    }
}

const login = async (email, senha) => {
    try {
        const [result] = await connection.query('SELECT * FROM Users WHERE email = ?', [email])
        
        if(!result || result.length === 0){
            throw new Error("Erro no login");
        }

        const user = result[0]

        const resultCompare = await bcrypt.compare(senha, user.senha)

        if(!resultCompare){
            throw new Error("Dados não conferem");
        }

        const token = jwt.sign({userId: user.id}, process.env.JWT_KEY, {expiresIn: '1h'})

        return token
    } catch (error) {
        throw new Error({message: error});
    }
}

export default { createUser, login };