const { response } = require('express');

const Hospital = require('../models/hospital');

const getHospitales = async(req, res = response) => {

    //visualizar el listado de hospitales:
    const hospitales =  await Hospital.find().populate('usuario','nombre');

    res.json({
        ok: true,
        hospitales
    })
}

const crearHospital = async(req, res = response) => {

    const uid = req.udi;
    const hospital = new Hospital({
        usuario: uid,
        ...req.body
    });

    try {

        const hospitalDB = await hospital.save();

        res.json({
            ok: true,
            hospital: hospitalDB
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: '¡Ups! Esto no debería pasar. Hable con el administrador'
        })
    }

}

const actualizarHospital = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'actualizarHospital'
    })
}

const eliminarHospital = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'eliminarHospital'
    })
}





module.exports={
    getHospitales,
    crearHospital,
    actualizarHospital,
    eliminarHospital
}