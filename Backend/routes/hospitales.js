/* 
    Ruta: '/api/hospitales'
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwt');
const {
    getHospitales,
    crearHospital,
    actualizarHospital,
    eliminarHospital
} = require('../controllers/hospitales');

const router = Router();

//rutas
router.get('/', getHospitales);

router.post('/', 
    [
        
    ],
    crearHospital
);

router.put('/:id', 
    [
      
    ],
    actualizarHospital
);

router.delete('/:id', 
    eliminarHospital
);

module.exports = router;