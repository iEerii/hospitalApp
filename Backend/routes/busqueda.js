/* 
    ruta: '/api/todo/'
*/

const { Router } = require('express');
const { getTodo, getDocumentosColeccion } = require('../controllers/busqueda');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.get('/:busqueda', validarJWT, getTodo);
router.get('/coleccion/:tabla/:busqueda', validarJWT, getDocumentosColeccion);

module.exports = router;