/* 
    ruta: '/api/todo/:busqueda'
*/

const { Router } = require('express');
const { getTodo } = require('../controllers/busqueda');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.get('/:busqueda', validarJWT, getTodo);

module.exports = router;
