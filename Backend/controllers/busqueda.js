const {response} = require('express');

const Usuario = require('../models/usuario');
const Hospital = require('../models/hospital');
const Medico = require('../models/medicos');
const { Promise } = require('mongoose');

const getTodo = async(req, res = response) => {

    const busqueda = req.params.busqueda;
    const regex = new RegExp( busqueda, 'i');
    
    const [ usuarios, hospital, medicos ] = Promise.all([
        Usuario.find({ nombre: regex }),
        Hospital.find({ nombre: regex }),
        Medico.find({ nombre: regex }),
    ]);
    
    res.json({
        ok: true,
        usuarios,
        hospital,
        medicos
    })
}


module.exports = {
    getTodo
}