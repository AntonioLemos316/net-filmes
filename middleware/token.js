const jwt = require('jsonwebtoken')
require('dotenv').config()

const verificarToken = (req, res, next) => {
    const token = req.headers['authorization'].split(' ')[1]
    if(!token){
        return res.status(401).json({message: 'Token não fornecido'})
    }

    jwt.verify(token, process.env.JWT_KEY, (err, user) => {
        if(err){
            return res.status(401).json({message: "Token inválido"})
        }
        req.user = user
        next()
    })
}

module.exports = verificarToken