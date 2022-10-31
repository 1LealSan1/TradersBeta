const mongoose = require('mongoose');

const UserTraderSchema = mongoose.Schema({
    Telefono: {
        type: String,
        required: true
    },
    Nombre: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Ubicacion: {
        type: String,
        required: false
    },
    Oficio:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('UsersTraders', UserTraderSchema);
