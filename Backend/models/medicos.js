const { Schema, model } = require("mongoose");

const MedicoSchema = Schema ({

    nombre:{
        type: String,
        require: true
    },
    img:{
        type: String,
    },
    usuario:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        require: true
    },
    hospital:{
        type: Schema.Types.ObjectId,
        ref: 'Hospital',
        require: true
    },
});

module.exports = model('Medico', MedicoSchema);
