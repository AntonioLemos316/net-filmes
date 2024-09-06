import express from 'express'

const router = express.Router();

import userController from '../controllers/UserController.js'
import verificarToken from '../middleware/token.js'

router.post('/cadastrar', userController.createUser);
router.post('/login', userController.login);
router.get('/rota-protegida', verificarToken, userController.jwt);

export default router