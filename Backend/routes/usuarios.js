/*
    Ruta: /api/usuarios
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { getUsuarios, crearUsuario, actualizarUsuario, eliminarUsuario } = require('../controllers/usuarios');

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

router.put('/:id', 
    [
        check('nombre', 'El campo es obligatorio').not().isEmpty(),
        check('email', 'El campo es obligatorio').isEmail(),
        check('role', 'El role es obligatorio').not().isEmpty(),
        validarCampos
    ],
    actualizarUsuario
);

router.delete('/:id', 
        eliminarUsuario);

module.exports = router;