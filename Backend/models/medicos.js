const { Schema, model } = require("mongoose");

const MedicoSchema = Schema ({

    nombre:{
        type: String,
        require: true
    },
    // email:{
    //     type: String,
    //     require: true,
    //     unique: true
    // },
    // password:{
    //     type: String,
    //     require: true
    // },
    img:{
        type: String,
    },
    usuario:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    hospital:{
        type: Schema.Types.ObjectId,
        ref: 'Hospital'
    },
    // role:{
    //     type: String,
    //     require: true,
    //     default: 'USER_ROLE'     
    // },
    // google:{
    //     type: Boolean,
    //     default: false
    // },
});

// UsuarioSchema.method('toJSON', function() {
//     const {__v, _id, password, ...object} = this.toObject();
//     object.uid = id;
//     return Object;
// })

module.exports = model('Usuario', MedicoSchema);
