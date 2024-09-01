const mysql = require('mysql2')
require('dotenv').config()

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

connection.connect((err) => {
    if(err) {
        console.error('Erro ao conectar no BD')
        return
    }
    console.log('Conectado ao BD')
})

module.exports = connection