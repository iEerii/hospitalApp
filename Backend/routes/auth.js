/*
    Path: '/api/login'
*/

const { Router } = require('express');
const { login, googleSignIn } = require('../controllers/auth');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.post('/', 
    [
        check('email', 'El campo es obligatorio').isEmail(),
        check('password', 'El campo es obligatorio').not().isEmpty(),
        validarCampos
    ],
    login
)

router.post('/google', 
    [
        check('token', 'El token de Google es obligatorio').not().isEmpty(),
        validarCampos
    ],
    googleSignIn
)


module.exports=router;
