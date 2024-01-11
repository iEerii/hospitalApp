const { Schema, model } = require("mongoose");

const HospitalSchema = Schema ({

    nombre:{
        type: String,
        require: true
    },
    img:{
        type: String,
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
}, { collection: 'hospitales'})

// UsuarioSchema.method('toJSON', function() {
//     const {__v, _id, password, ...object} = this.toObject();
//     object.uid = id;
//     return Object;
// })

module.exports = model('Usuario', HospitalSchema);