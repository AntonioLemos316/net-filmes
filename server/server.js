import express from 'express'
import cors from 'cors'
import router from './routes/routes.js'
import 'dotenv/config'

const app = express()   

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(process.env.PORT || 5000, () => {
     console.log(`Servidor rodando em http://localhost:${process.env.PORT || 5000}`)
})