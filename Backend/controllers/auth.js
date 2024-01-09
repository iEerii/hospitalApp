const {response} = require('express');
const bcrypt  = require('bcryptjs')
const Usuario = require('../models/usuario');


const login = async(req, res = response) => {

    const { email, password} = req.body;

    try {

        //verificar si el email existe en la bd
        const usuarioDB = await Usuario.findOne({ email });

        if(!usuarioDB){
            return res.status(404).json({
                ok: false,
                msg: 'Email no encontrado'
            })
        }

        //verificar contraseña
        const validPassword = bcrypt.compareSync( password, usuarioDB.password);
        
        if(!validPassword){
            return res.status(404).json({
                ok:false,
                msg: 'Contraseña no valida'
            })
        }

        //generar TOKEN - JWT


        res.json({
            ok: true,
            msg: 'Todo bien'
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hablar con administrador'
        })
    }

}

module.exports= {
    login,
}