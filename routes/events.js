const {Router} = require('express');
const { validarJWT } = require('../middlewares/validar-jwt')
const {getEventos, eliminarEventos, actualizarEventos, crearEventos} = require('../controllers/events')

const router = Router();


//Todas tienen que pasar por la validacion del token
// obtener Eventos

router.get('/',validarJWT, getEventos);

//Crear nuevo evento
router.post('/',validarJWT, crearEventos);

//actuaizar nuevo evento
router.put('/:id',validarJWT, actualizarEventos);

//Borrar nuevo evento
router.delete('/:id',validarJWT, eliminarEventos);

module.exports = router;