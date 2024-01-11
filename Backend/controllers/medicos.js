const { response } = require('express');

const Medico = require('../models/medicos')

const getMedicos = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'getMedicos'
    })
}

const crearMedico = async(req, res = response) => {

    const uid = req.udi;
    const medico = new Medico({
        usuario: uid,
        ...req.body
    });
    
    try {
        const medicoDB = await medico.save();

        res.json({
            ok: true,
            medico: medicoDB
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Ups! Esto no debería suceder. Contacta al administrador'
        });
    }
}

const actualizarMedico = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'actualizarMedico'
    })
}

const eliminarMedico = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'eliminarMedico'
    })
}


module.exports={
    getMedicos,
    crearMedico,
    actualizarMedico,
    eliminarMedico
}