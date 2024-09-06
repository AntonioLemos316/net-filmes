import mysql from 'mysql2/promise'
import 'dotenv/config'

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'net_filmes' 
})

export default connection