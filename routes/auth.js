// Rutas de auth   host + /api/auth

// MERN_user
// ET5iRpkqEQjk6PRL

const express = require('express');
const  { check } = require('express-validator');
const {validarCampos} = require('../middlewares/validar-campos')
const router = express.Router();


//El check se ocupa de validar un camo a las ves


const {crearUsuario , loginUsuario, revalidarToken} = require('../controllers/auth')

router.post(
    '/new', 
    [
        //Middelweares
        check('name','El nombre es obligatorio').not().isEmpty(),
        check('email','El email es obligatorio').isEmail(),
        check('password','El password debe de ser de 6 caracteres').isLength({min: 6}),
        validarCampos

    ],
    crearUsuario)

router.post(
         '/',
         [
             check('email','El email es obligatorio').isEmail(),
             check('password','El password debe de ser de 6 caracteres').isLength({min: 6}),
             validarCampos
         ],
         loginUsuario)

router.get('/renew',revalidarToken)

module.exports = router;