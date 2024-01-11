const { response } = require('express');

const getMedicos = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'getMedicos'
    })
}

const crearMedico = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'crearMedicos'
    })
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