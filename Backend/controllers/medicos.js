const { response } = require('express');

const Medico = require('../models/medicos')

const getMedicos = async(req, res = response) => {

    const medicos = await Medico.find()
                                .populate('usuario', 'nombre img')
                                .populate('hospital', 'nombre img')

    res.json({
        ok: true,
        medicos
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