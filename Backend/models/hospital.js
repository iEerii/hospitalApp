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
        require: true,
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
}, { collection: 'hospitales'})

// UsuarioSchema.method('toJSON', function() {
//     const {__v, _id, password, ...object} = this.toObject();
//     object.uid = id;
//     return Object;
// })

module.exports = model('Hospital', HospitalSchema);