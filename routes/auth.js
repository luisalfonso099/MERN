// Rutas de auth   host + /api/auth

const express = require('express');
const router = express.Router();

const {crearUsuario , loginUsuario, revalidarToken} = require('../controllers/auth')

router.post('/new', crearUsuario)

router.post('/', loginUsuario)

router.get('/renew',revalidarToken)

module.exports = router;