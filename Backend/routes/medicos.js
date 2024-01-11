/* 
    Ruta: '/api/medicos'
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { getMedicos, crearMedico, actualizarMedico, eliminarMedico } = require('../controllers/medicos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

//rutas
router.get('/', getMedicos);

router.post('/', 
    [
       
    ],
    crearMedico
);

router.put('/:id', 
    [
    
    ],
    actualizarMedico
);

router.delete('/:id', 
    eliminarMedico
);

module.exports = router;