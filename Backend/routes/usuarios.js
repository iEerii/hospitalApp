/*
    Ruta: /api/usuarios
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { getUsuarios, crearUsuario } = require('../controllers/usuarios');

const router = Router();

//rutas
router.get('/', getUsuarios);
router.post('/', 
    [
        check('nombre', 'El campo es obligatorio').not().isEmpty(),
        check('password', 'El campo es obligatorio').not().isEmpty(),
        check('email', 'El campo es obligatorio').isEmail(),
        validarCampos,
    ],
    crearUsuario
);


module.exports = router;