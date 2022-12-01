const mongoose = require('mongoose');

const UserTraderSchema = mongoose.Schema({
    Telefono: {
        type: String,
        required: true
    },
    Nombre: {
        type: String,
        required: false
    },
    Password: {
        type: String,
        required: true
    },
    Oficio:{
        type: String,
        required: false
    },
    Ubicacion: {
        type: String,
        required: false
    },
    TrabajosCompletados:{
        type: Number,
        required: false
    }
});

module.exports = mongoose.model('Users', UserTraderSchema);
