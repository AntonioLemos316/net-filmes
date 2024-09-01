import mysql from 'mysql2'
import 'dotenv/config'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'net_filmes' 
})

connection.connect((err) => {
    if(err) {
        console.error('Erro ao conectar no BD')
        return
    }
    console.log('Conectado ao BD')
})

export default connection