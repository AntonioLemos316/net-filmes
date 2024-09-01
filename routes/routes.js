const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserController.js');

const verificarToken = require('../middleware/token.js');

router.post('/cadastrar', userController.createUser);
router.post('/login', userController.login);
router.get('/rota-protegida', verificarToken, userController.jwt);

module.exports = router