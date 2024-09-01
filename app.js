const express = require('express')
const cors = require('cors')
const router = require('./routes/routes.js')
const path = require('path'); 



require('dotenv').config()

const app = express()   
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'front-end')));
app.use(router)



 app.listen(process.env.PORT || 3000, () => {
     console.log(`Servidor rodando em http://localhost:${process.env.PORT}`)
})