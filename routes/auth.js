// Rutas de auth   host + /api/auth

const express = require('express');
const  { check } = require('express-validator');

//El check se ocupa de validar un camo a las ves

const router = express.Router();

const {crearUsuario , loginUsuario, revalidarToken} = require('../controllers/auth')

router.post(
    '/new', 
    [
        //Middelweares
        check('name','El nombre es obligatorio').not().isEmpty(),
        check('email','El email es obligatorio').isEmail(),
        check('password','El password debe de ser de 6 caracteres').isLength({min: 6}),

    ],
    crearUsuario)

router.post(
         '/',
         [
             check('email','El email es obligatorio').isEmail(),
             check('password','El password debe de ser de 6 caracteres').isLength({min: 6}),
         ],
         loginUsuario)

router.get('/renew',revalidarToken)

module.exports = router;